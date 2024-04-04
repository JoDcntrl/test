import React from "react";

import {FooterDemoTypes} from "@/components/Footer/Footer.types"
import {Logo} from "@/assets/svgs/Logo";
import {Shape} from '../../assets/svgs/Shape'
import {Subtract} from '../../assets/svgs/Subtract'
import {Google} from '../../assets/svgs/Google'
import {Frame} from '../../assets/svgs/Frame'
import {Telegram} from '../../assets/svgs/Telegram'

import './footerDemo.css';


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
						<li className='footerListItem'>Open jobs</li>
						<li className='footerListItem'>Companies</li>
						<li className='footerListItem'>Specialists</li>
						<li className='footerListItem'>Blog</li>
					</ul>
				</nav>
				<nav className="footerMenu">
					<ul className='footerList'>
						<li className='footerListItem'>Support&feedback</li>
						<li className='footerListItem'>Affiliate program</li>
						<li className='footerListItem'>Privacy Policy</li>
						<li className='footerListItem'>Terms of Use</li>
					</ul>
				</nav>
				<div className="footerIcons">
					<Shape/>
					<Subtract/>
					<Google/>
					<Frame/>
					<Telegram/>
				</div>
			</div>
			<div className="footerDemoBottom">
				© Decentral job
			</div>	
		</footer>
	);
};

export default FooterDemo;
