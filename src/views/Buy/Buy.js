import React, { useState, useEffect } from "react";
import idl from "../../instructions/idl.json";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  SYSVAR_RENT_PUBKEY,
} from "@solana/web3.js";
import { Program, Provider, web3, BN } from "@project-serum/anchor";

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

const { SystemProgram } = web3;
const opts = {
  preflightCommitment: "confirmed",
};
const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("mainnet-beta");
// const network = clusterApiUrl("devnet");
const decimals = 9;

function Buy() {
  const [PSCHARMPrice, setPSCHARMPrice] = useState(null);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [nSol, setNSol] = useState(null);

  const wallet = useWallet();

  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  useEffect(() => {
    getPSCHARMPrice(
      "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT"
    );
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("perma");
  }, []);

  useEffect(() => {
    // console.log(nSol);

    async function getProvider() {
      /* create the provider and return it to the caller */
      /* network set to local network for now */

      const connection = new Connection(network, opts.preflightCommitment);

      const provider = new Provider(
        connection,
        wallet,
        opts.preflightCommitment
      );
      return provider;
    }
    console.log("idl", idl);
    console.log("programID", programID.toBase58());

    async function asAcc(nSol) {
      // console.log("number of SOL: " + nSol)

      const maxAccount = new PublicKey(
        "Hjzu13Y262nDZCwNDtHURukEHryw9CmM5ZDFXqRN6Zxb"
      );
      const SolFeedPricePubKey = new PublicKey(
        "AdtRGGhmqvom3Jemp5YNrxd9q9unX36BZk1pujkkXijL"
      );
      const provider = await getProvider();
      console.log("idl", idl);
      console.log("programID", programID.toBase58());
      console.log("provider", provider);
      const program = new Program(idl, programID.toBase58(), provider);
      const tokenPurse = new PublicKey(
        "HddDcpTXPrgYMfsErA9jHefMgUvoGaHxvjL1qVU6QYcs"
      );

      // to change in PROD
      // const mint = new PublicKey("CchpsgFWhefV2oEqSdKdSawAudEfxvxpgJdqzb8PeAdU");  //dev
      const mint = new PublicKey(
        "C4xWe67MMg5zJia7gZ8BmH2btvCfMeSMWRVWXCGvoAfG"
      ); //main

      // const mintAccount = new PublicKey("H2o3JEwZiTQZbZX9SU2iAq4VoUKnytXM84wUi7y6mJXQ");

      const TOKEN_PROGRAM_ID = new PublicKey(
        "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
      );

      const [charmpda, nonce1] = await web3.PublicKey.findProgramAddress(
        ["charmpda"],
        programID
      );
      // console.log("charmpda :\n", charmpda.toBase58());

      const [fromdAddress] = await web3.PublicKey.findProgramAddress(
        [
          provider.wallet.publicKey.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
      );
      // console.log("1stpart done, fromAddress : ", fromdAddress.toBase58());
      const dataas = await provider.connection.getBalance(fromdAddress);
      // console.log("dataas :\n", dataas);

      if (dataas === 0) {
        try {
          await program.rpc.createAssociatedAccount({
            accounts: {
              signer: provider.wallet.publicKey.toBase58(),
              mint: mint,
              userAccount: fromdAddress,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
              rentProgram: SYSVAR_RENT_PUBKEY,
              associatedProgram: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
            },
          });
          // console.log("associated account done");
        } catch (err) {
          console.log("Translating error", err);
        }
      }
      //nsol * sol/usd *1/(usd/PSCHARM) but need to have minted Xtokens first to be working

      await program.rpc.buyCharm(nonce1, new BN(nSol * 10 ** decimals), {
        accounts: {
          signer: provider.wallet.publicKey.toBase58(),
          tokenPurse: tokenPurse,
          mint: mint,
          userAccount: fromdAddress,
          pda: charmpda,
          aggregatorFeedAccount: SolFeedPricePubKey,
          charmAccount: maxAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        },
      });

      // console.log("send ", nSol, "sent from \n", mint.toBase58(), 'to \n', fromdAddress.toBase58());
      alert(
        "Transfer is successfull, this is your account: \n",
        fromdAddress.toBase58(),
        "\n you can find it on the explorer!"
      );
    }

    if (nSol && nSol > 0) {
      // console.log(`Buy sol (${nSol}) process launched`);
      asAcc(nSol);
    }
  }, [nSol, wallet]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * PSCHARMPrice;
  } else {
    toAmount = amount;
    fromAmount = amount / PSCHARMPrice;
  }

  const buySub = (data, event) => {
    // TODO: proper validation against value below 0 - security against bypass
    // if (data.nSol < 0)
    //     console.log("value below 0 are prohibited");

    setNSol(data.nSol);
    // console.log(data.nSol);
    // console.log(nSol);
    event.preventDefault();
  };

  async function getPSCHARMPrice(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPSCHARMPrice(data.price / 0.005);
      });
  }

  const toggleSelectWallet = () => {
    const selectWallet = document.querySelector("#select-wallet");

    selectWallet.classList.contains("select-wallet-active")
      ? selectWallet.classList.remove("select-wallet-active")
      : selectWallet.classList.add("select-wallet-active");
  };

  const handleSOLANAChange = (e) => {
    const re = /^[0-9]*[.,]?[0-9]*$/;
    // const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value);
      setAmountInFromCurrency(true);
    }
  };

  const handlePSCHARMChange = (e) => {
    const re = /^[0-9]*[.,]?[0-9]*$/;
    // const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value);
      setAmountInFromCurrency(false);
    }
  };

  if (!wallet.connected) {
    return (
      <WalletSection>
        <p>By ticking "Yes" I certify I"m over 18 years old.</p>
        <CheckBoxWrapper>
          <YesBox id="yes" type="checkbox" onClick={toggleSelectWallet} />
          <LabelBox htmlFor="yes">Yes</LabelBox>
        </CheckBoxWrapper>

        <SelectWalletWrapper id="select-wallet" className="select-wallet">
          <SelectWalletLegend>
            (click "Select wallet to connect to your wallet")
          </SelectWalletLegend>
          <WalletMultiButton />
        </SelectWalletWrapper>
      </WalletSection>
    );
  } else {
    return (
      <BuySection className="buy">
        <h3 className="primary-title">Be a part of CHARM</h3>
        <p>Invest and buy CHARM token and be a part of CHARM Ecosystem</p>

        <FormWrapper id="buy">
          <BuyingForm onSubmit={handleSubmit(buySub)}>
            <div className="input-container">
              <label htmlFor="sol">
                <LogoSolana
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png"
                  alt="Solana logo"
                />
                Solana
              </label>
              <input
                className="input"
                name="sol"
                id="sol"
                type="number"
                min="0"
                max="37.5"
                step="any"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0.0"
                {...register("nSol", { required: true })}
                value={fromAmount}
                onChange={handleSOLANAChange}
              />
            </div>
            <img
              className="arrow"
              src="https://www.charmtoken.net/images/icons/arrow.svg"
              alt=""
            />
            <div className="input-container second-container">
              <label htmlFor="charm">
                <img src="./images/presale-logo.png" alt="PSCharm Logo" />
                PSCharm
              </label>
              <input
                className="input"
                name="charm"
                id="charm"
                type="number"
                min="1"
                step="any"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0.0"
                value={toAmount}
                onChange={handlePSCHARMChange}
              />
            </div>

            <Button className="roboto-light btn-secondary">Buy PSCHARM</Button>
          </BuyingForm>

          <Nota>Nota: 1 SOL = {PSCHARMPrice} PSCHARM</Nota>
        </FormWrapper>
      </BuySection>
    );
  }
}

export default Buy;

const BuySection = styled.section`
  padding-top: 120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WalletSection = styled.div`
  width: 100%;
  max-width: 700px;
  height: auto;
  min-height: 50vh;
  margin: 0 auto;
  margin-top: 20vh;
  padding: 30px;
  /* border: 3px solid rgb(255, 255, 255);
    -webkit-border-radius: 41px;
    border-radius: 41px;
    font: normal 25px/1 "Monoton", Helvetica, sans-serif;
    color: rgba(255,255,255,1);
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    /* text-shadow: 0 0 10px rgb(255,255,255) , 0 0 20px rgb(255,255,255) , 0 0 30px rgb(255,255,255) , 0 0 40px rgba(255,17,17,1) , 0 0 70px rgba(255,17,17,1) , 0 0 80px rgba(255,17,17,1) , 0 0 100px rgba(255,17,17,1) , 0 0 150px rgba(255,17,17,1) ; */
  /* -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms; */
  /* -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms; */
  /* -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms; */
  /* transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms; */
  /* text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #a30026 , 0 0 70px #a30026 , 0 0 80px #a30026 , 0 0 100px #a30026 ; */

  /* &:hover { */
  /* text-shadow: 0 0 5px rgb(255,255,255) , 0 0 10px rgb(255,255,255) , 0 0 15px rgb(255,255,255) , 0 0 20px rgba(255,17,17,1) , 0 0 35px rgba(255,17,17,1) , 0 0 40px rgba(255,17,17,1) , 0 0 50px rgba(255,17,17,1) , 0 0 75px rgba(255,17,17,1) ; */
  /* text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px rgba(255,0,0,1) , 0 0 70px #ff0000 , 0 0 80px #ff0000 , 0 0 100px #ff0000 ; */

  /* } */

  color: #90141f;
  font-size: 2.8rem;
  font-family: "Raleway", sans-serif;
  margin-bottom: 30px;
  font-weight: 700;
`;
const FormWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 50px;
  border: 2px solid white;
  margin: 20px 0;
  width: 206px;
  height: 40px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(107, 3, 3, 1) 0%,
      rgba(193, 54, 3, 1) 50%,
      rgba(107, 3, 3, 1) 100%
    );
    color: white;
  }
`;

const Nota = styled.p`
  margin-top: 10px;
  font-family: "Montserrat" !important;
`;

const BuyingForm = styled.form`
  /* background-color: rgb(75, 0, 0); */
  background-color: #4b0205;
  background-color: #90141f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  align-items: center;
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  border: white solid 2px;

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label {
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: 700;
      display: flex;
      align-items: center;

      color: #fff;

      img {
        margin-right: 10px;
        max-width: 30px;
      }
    }
  }

  .second-container {
    margin-bottom: 20px;
  }

  .arrow {
    max-width: 30px;
    margin: 10px 0;
  }

  .input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;

    margin: 0;
    text-align: right;
    appearance: none;
    outline: 0 none;
    height: 40px;
    max-height: 40px;
    background-color: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 0 20px;

    &::placeholder {
      text-align: right;
    }

    /* &:focus {
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            -moz-appearance: textfield;            
        } */
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const YesBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const LabelBox = styled.label`
  cursor: pointer;
  padding-left: 5px;
  margin: 0;
`;

const SelectWalletWrapper = styled.div`
  display: none;

  &.select-wallet-active {
    display: block;
  }
`;
const SelectWalletLegend = styled.p`
  margin-bottom: 30px;
`;

const LogoSolana = styled.img`
  border-radius: 50%;
`;
