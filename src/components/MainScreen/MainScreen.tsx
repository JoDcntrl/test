import React from "react";

import {LogoMain} from "@/assets/svgs/LogoMain";

import './mainScreen.css'

const MainScreen: React.FC = () => (
	<main className='mainContainer'>
		<div className='pictureOne' />
		<div className='blockHeader'>
			<div className='blockWebThree'>
				<p className='webThreeLabel'>WEB3</p>
				<p className='webThreeText'>Recruitment Platform</p>
			</div>
			<div className='blockMain'>
				<h1 className='blockMainH'>Join the Thriving Teams in the</h1>
				<h1 className='blockMainText'>TON Ecosystem</h1>
			</div>
			<div>
				<button
					className='buttonAdd'
					disabled
				>
					Add company
				</button>
			</div>
		</div>
		<div className='blockImg'>
			<LogoMain />
		</div>
		<div className='pictureTwo'/>
	</main>
)

export default MainScreen;
