import React from "react";
import cn from 'classnames';

import Link from "@/components/Link/Link";
import {HeaderDemoTypes} from "@/components/HeaderDemo/Header.types"

import {Logo} from "@/assets/svgs/Logo";

import './headerDemo.css';

const LinksArr = [
	{
		id: 1,
		text: 'Open jobs',
		withCount: true,
		disabled: false,
		count: 32,
	},
	{
		id: 2,
		text: 'Companies',
		withCount: false,
		disabled: false,
		count: null,
	},
	{
		id: 4,
		text: 'Specialists',
		withCount: false,
		disabled: true,
		count: null,
	},
	{
		id: 5,
		text: 'Blog',
		withCount: false,
		disabled: false,
		count: null,
	},
]

const HeaderDemo: React.FC<HeaderDemoTypes> = ({className, ...props}) => {
	return (
		<header className={cn(className, 'headerDemoMain')} {...props}>
			<div className='headerDemo'>
				<div className='headerDemoLogoContainer'>
					<Logo/>
					<span className={'logoText'}>decentral job</span>
				</div>
				<div className={'headerLinks'}>
					{LinksArr.map(({id, text, withCount, disabled, count}) => (
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
		</header>
	);
};

export default HeaderDemo;
