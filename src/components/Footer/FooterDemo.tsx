import React from "react";

import Link from "next/link";
import {FooterDemoTypes} from "@/components/Footer/Footer.types"

import {Logo} from "@/assets/svgs/Logo";
import {Shape} from '../../assets/svgs/Shape'
import {Subtract} from '../../assets/svgs/Subtract'
import {Google} from '../../assets/svgs/Google'
import {Frame} from '../../assets/svgs/Frame'
import {Telegram} from '../../assets/svgs/Telegram'

import './footerDemo.css';
import './footerDemoResponsive.css'

const FooterDemo: React.FC<FooterDemoTypes> = () => {
	return (
		<footer className='footerDemoMain'>
			<div className='footerDemo'>
				<div className='footerDemoLogoContainer'>
					<Logo/>
					<span className={'logoText'}>decentral job</span>
				</div>
				<nav className="footerMenu">
					<ul className='footerList'>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Open jobs</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""} >Companies</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Specialists</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Blog</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Support&feedback</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Affiliate program</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Privacy Policy</Link>
						</li>
						<li className='footerListItem'>
							<Link className='footerListLink' href={""}>Terms of Use</Link>
						</li>
						
					</ul>
				</nav>
				<div className="footerIcons">
				<Link className='footerListLink' href={""} ><Shape/></Link>
				<Link className='footerListLink' href={""} ><Subtract/></Link>
				<Link className='footerListLink' href={""} ><Google/></Link>
				<Link className='footerListLink' href={""} ><Frame/></Link>
				<Link className='footerListLink' href={""} ><Telegram/></Link>
				</div>
			</div>
			<div className="footerDemoBottom">
				<span className="footerBottomLeft">© Decentral job</span>
				<span className="footerBottomRight">2024</span>
			</div>	
		</footer>
	);
};

export default FooterDemo;
