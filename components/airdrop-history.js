import HomeStyles from "../styles/Home.module.css";

export default function AirdropHistory() {
  return (
    <>
      <div className={HomeStyles.rewards}>
        <h3>Rewards</h3>
        <p className={HomeStyles.link}>Historical activity</p>
        <p className={HomeStyles.link}>Ongoing airdrop</p>
        <p className={HomeStyles.link}>Future registration</p>
      </div>
      <div className={HomeStyles.assets}>
        <div>
          <h3>Assets Claimed</h3>
          <div>
            <button>Token's</button>
            <button>NFT's</button>
          </div>
        </div>
        <p>10.86728 XP</p>
      </div>
    </>
  );
}
