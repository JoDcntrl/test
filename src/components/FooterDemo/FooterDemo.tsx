import React from "react";

import Link from "next/link";
import {FooterDemoTypes} from "@/components/FooterDemo/Footer.types"

import {Logo} from "@/assets/svgs/Logo";
import {Shape} from '@/assets/svgs/Shape'
import {Subtract} from '@/assets/svgs/Subtract'
import {Google} from '@/assets/svgs/Google'
import {Frame} from '@/assets/svgs/Frame'
import {Telegram} from '@/assets/svgs/Telegram'

import './footerDemo.scss';

const LinksArr = [
	{
		id: 1,
		text: 'Open jobs',
	},
	{
		id: 2,
		text: 'Companies',
	},
	{
		id: 3,
		text: 'Specialists',
	},
	{
		id: 4,
		text: 'Blog',
	},
	{
		id: 5,
		text: 'Support&feedback',
	},
	{
		id: 6,
		text: 'Affiliate program',
	},
	{
		id: 7,
		text: 'Privacy Policy',
	},
	{
		id: 8,
		text: 'Terms of Use',
	},
]

const IconsArr = [
	{
		id: 1,
		icon: <Shape/>,
	},
	{
		id: 2,
		icon: <Subtract/>,
	},
	{
		id: 3,
		icon: <Google/>,
	},
	{
		id: 4,
		icon: <Frame/>,
	},
	{
		id: 5,
		icon: <Telegram/>,
	}
]

const FooterDemo: React.FC<FooterDemoTypes> = () => {
	const getYear = () => new Date().getFullYear() 
	
	return (
		<footer className='footerDemoMain'>
			<div className='footerDemo'>
				<div className='footerDemoLogoContainer'>
					<Logo/>
					<span className={'logoText'}>decentral job</span>
				</div>
				<div className="footerMenu">
					<ul className='footerList'>
						{LinksArr.map(({text})=>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>{text}</Link>
						</li>)}
						</ul>
				</div>
				<div className="footerIcons">
					{IconsArr.map(({icon})=> 
					<Link className='footerListLink' href={""} >{icon}</Link>)}
				</div>
			</div>
			<div className="footerDemoBottom">
				<span className="footerBottom">© Decentral job</span>
				<span className="footerBottom">{getYear()}</span>
			</div>	
		</footer>
	);
}


export default FooterDemo;
