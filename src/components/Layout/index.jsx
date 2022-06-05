import React from "react";

import s from "./styles.module.css";

const Layout = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};

export { Layout };
