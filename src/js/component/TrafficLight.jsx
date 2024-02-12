import React from "react";
import { useState } from "react";
import Light from "./Light";
import { DigitNumber } from "./DigitNumber";

const TrafficLight = () => {

	const [ secondGreen, setSecondGreen ] = useState(false);
	const [ redSwitchLight, setRedSwitchLight ] = useState(false);
	const [ yellowSwitchLight, setYellowSwitchLight ] = useState(false);
	const [ greenSwitchLight, setGreenSwitchLight ] = useState(false);

	
	const [ intervalId, setIntervalId ] = useState(0);
	const [ autoBtn, setAutoBtn ] = useState(false);

	let redTimeOut = 0;
	let yellowTimeOut = 0;
	let greenTimeOut = 0;
	
	const startAutoModeHandler = () => {

		let newIntervalId = setInterval(()=>{
			redTimeOut = setTimeout(() => {
				setRedSwitchLight(true);
				setYellowSwitchLight(false);
				setGreenSwitchLight(false);
				}, 2000);
			greenTimeOut = setTimeout(() => {
				setRedSwitchLight(false);
				setYellowSwitchLight(false);
				setGreenSwitchLight(true);
				}, 4000);
			yellowTimeOut = setTimeout(() => {
				setRedSwitchLight(false);
				setYellowSwitchLight(true);
				setGreenSwitchLight(false);
				}, 6000);
		},6000);
	  
		setIntervalId(newIntervalId);
	};
		
	const stopAutoModeHandler = () => {
		
		clearInterval(intervalId);
		clearTimeout(redTimeOut);
		clearTimeout(greenTimeOut);
		clearTimeout(yellowTimeOut);

		redTimeOut = null;
		greenTimeOut = null;
		yellowTimeOut = null;

		setRedSwitchLight(false);
		setYellowSwitchLight(false);
		setGreenSwitchLight(false);	

	};
		
	return <>
		<div className="container text-center">
			<div className="row">
				<div className="col d-flex justify-content-center">
					<div className="myPoste"/>
				</div>
			</div>
		
			<div className="container myFrame">
				<div className="row">
					<div className="col d-flex justify-content-center ">
						<Light color = 'danger'
						switchLight={redSwitchLight} 
						setSwitchLight = {setRedSwitchLight}
						setSwitchLight2 = {setYellowSwitchLight}
						setSwitchLight3 = {setGreenSwitchLight}
						 />
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-center ">
						<Light color = 'warning' 
						switchLight={yellowSwitchLight} 
						setSwitchLight = {setYellowSwitchLight}
						setSwitchLight2 = {setRedSwitchLight}
						setSwitchLight3 = {setGreenSwitchLight}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-center">
						<Light color = 'success' 
						switchLight={greenSwitchLight} 
						setSwitchLight={setGreenSwitchLight}
						setSwitchLight2 = {setYellowSwitchLight}
						setSwitchLight3 = {setRedSwitchLight}
						/>
					</div>
				</div>
				{ secondGreen ?
					<div className="row">
						<div className="col d-flex justify-content-center">
							<Light color = 'success' 
							switchLight={greenSwitchLight} 
							setSwitchLight={setGreenSwitchLight}
							setSwitchLight2 = {setYellowSwitchLight}
							setSwitchLight3 = {setRedSwitchLight}
							secondGreen = {secondGreen}
							/>
						</div>
					</div>: null
				}	
			</div>
			<div className="row">
				<div className="col d-flex justify-content-center p-3">
				<button type="button" 
						className="btn btn-dark m-3"
						disabled={autoBtn} 
						onClick={ () => { startAutoModeHandler(); setAutoBtn(!autoBtn)} }	
					>
						Auto-Mode-On
				</button>
				<button type="button" 
						className="btn btn-dark m-3"
						disabled={!autoBtn}
						onClick={ () => { stopAutoModeHandler(); setAutoBtn(!autoBtn)} }	
					>
						Auto-Mode-Off
				</button>
				<button type="button" 
					className="btn btn-dark m-3"
					onClick={ () => setSecondGreen(!secondGreen) }
				>
					Add-Left-Light
				</button>
				</div>
			</div>
			{
				autoBtn && 
				<div className="row">
					<div className="col d-flex justify-content-center p-3">
						<DigitNumber autoBtn={autoBtn} />
					</div>
				</div>
			}
		</div>
	</>
};
	
export default TrafficLight;