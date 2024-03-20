import React from "react";
import {LayoutTypes} from "./Layout.types";
import HeaderDemo from "@/components/HeaderDemo/HeaderDemo";


const Layout: React.FC<LayoutTypes> = ({children}) => (
	<>
		<HeaderDemo/>
		{children}
	</>
);

export default Layout;
