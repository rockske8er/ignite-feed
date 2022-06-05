import s from "./styles.module.css";

const Layout = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export { Layout };
