import s from "./styles.module.css";
import igniteFeedLogo from "./../../assets/ignite-feed-logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src={igniteFeedLogo}
        alt={"Logo ignite feed"}
        className={s.header_logo}
      />
    </header>
  );
};

export { Header };
