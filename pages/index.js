import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AirdropHistory from "../components/airdrop-history";
import Logo from "../public/airdrop-logo.png";
import HotAirBaloons from "../public/hot-air-baloons.png";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  const [address, setAddress] = useState("");
  const handleWalletConnection = async () => {
    const { ethereum } = window;
    if (typeof ethereum !== undefined) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAddress(accounts[0]);
    }
  };
  const getAddress = () => {
    return address.slice(0, 5) + "..." + address.slice(-5);
  };
  return (
    <div className={HomeStyles.root}>
      <div className={HomeStyles.header}>
        <Link href="/">
          <div className={HomeStyles.logo}>
            <Image src={Logo} alt="airdrop logo" width={50} height={50}></Image>
            <h1>Airdrop</h1>
          </div>
        </Link>
        <div>
          <button onClick={handleWalletConnection}>
            {address === "" ? "Connect Wallet" : getAddress()}
          </button>
        </div>
      </div>
      {address === "" ? (
        <div className={HomeStyles.content}>
          <div>
            <Image
              src={HotAirBaloons}
              alt="hot air baloons"
              width={200}
              height={200}
            ></Image>
          </div>
          <div>
            <p>Connect wallet and claim your airdrop tokens!</p>
          </div>
        </div>
      ) : (
        <div className={HomeStyles.history}>
          <AirdropHistory></AirdropHistory>
        </div>
      )}
    </div>
  );
}
