import Image from "next/image";
import Link from "next/link";
import Logo from "../public/airdrop-logo.png";
import HotAirBaloons from "../public/hot-air-baloons.png";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={HomeStyles.root}>
      <div className={HomeStyles.header}>
        <Link href="/">
            <div className={HomeStyles.logo}>
              <Image
                src={Logo}
                alt="airdrop logo"
                width={50}
                height={50}
              ></Image>
              <h1>Airdrop</h1>
            </div>
        </Link>
        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
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
    </div>
  );
}
