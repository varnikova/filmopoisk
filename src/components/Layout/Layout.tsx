import React from "react";
import { Header } from "../../widgets/Header/Header";
import styles from "./Layout.module.css";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="layout">
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
