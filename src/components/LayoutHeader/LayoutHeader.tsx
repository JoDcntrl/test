import React from "react";

import HeaderDemo from "@/components/HeaderDemo/HeaderDemo";
import { LayoutTypes } from "./LayoutHeader.types";

import styles from "./layoutHeader.module.scss";

const LayoutHeader: React.FC<LayoutTypes> = ({ children }) => (
  <>
    <HeaderDemo className={styles.headerDemoWrapper} />
    {children}
  </>
);

export default LayoutHeader;
