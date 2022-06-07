import { ReactNode } from "react";
import s from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={s.container}>{children}</div>;
};

export { Layout };
