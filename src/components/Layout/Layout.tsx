import React from "react";
import {LayoutTypes} from "./Layout.types";
import HeaderDemo from "@/components/HeaderDemo/HeaderDemo";
import FooterDemo from '../Footer/FooterDemo';


const Layout: React.FC<LayoutTypes> = ({children}) => (
	<>
		<HeaderDemo/>
		{children}
		<FooterDemo/>
	</>
);

export default Layout;
