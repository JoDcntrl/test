'use client'

import React from "react";
import cn from 'classnames';

import Link from "@/components/Link/Link";
import { HeaderDemoTypes } from "@/components/HeaderDemo/Header.types"
import { LinksArr } from "./HeaderData";

import { Logo } from "@/assets/svgs/Logo";
import { Burger } from "@/assets/svgs/Burger";
import { Cross } from "@/assets/svgs/Cross";

import './headerDemo.scss';

const HeaderDemo: React.FC<HeaderDemoTypes> = ({ className, ...props }) => {
	const [activeBurger, setActiveBurger] = React.useState(false)

	React.useEffect(() => {
		if (activeBurger) {
			document.querySelector('body')?.style.setProperty("position", "fixed")
		}
		else document.querySelector('body')?.style.setProperty("position", "relative")
	}, [activeBurger])

	return (
		<header className={cn(className, 'headerDemoMain')} {...props}>
			<div className='headerDemoLogoContainer'>
				<Logo />
				<span className={'logoText'}>decentral job</span>
			</div>
			<div className={cn(className, 'headerDemo', { ['active']: activeBurger })}>

				<div className={'headerLinks'}>
					{LinksArr.map(({ id, text, withCount, disabled, count }) => (
						<Link key={id} count={count} withCount={withCount} disabled={disabled}>
							{text}
						</Link>
					))}
				</div>
				<div className=''>
					<button
						className='headerButtonConnectWallet'
						disabled
					>
						Connect wallet
					</button>
				</div>
			</div>
			{activeBurger ? <Cross onClick={() => setActiveBurger((prev) => !prev)} /> : <div className="headerDemoBurger" onClick={() => setActiveBurger((prev) => !prev)}><Burger /></div>}

		</header>
	);
};

export default HeaderDemo;
