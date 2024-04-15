import React from "react";

import { LayoutTypes } from "./LayoutHeader.types";
import HeaderDemo from "@/components/HeaderDemo/HeaderDemo";

import styles from "./layoutHeader.module.scss";

const LayoutHeader: React.FC<LayoutTypes> = ({ children }) => (
  <>
    <HeaderDemo className={styles.headerDemoWrapper} />
    {children}
  </>
);

export default LayoutHeader;
