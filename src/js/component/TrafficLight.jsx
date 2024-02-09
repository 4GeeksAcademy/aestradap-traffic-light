import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle
import Light from "./Light";

//create your first component
const TrafficLight = () => {

	
	const [ secondGreen, setSecondGreen ] = useState(false);
	const [ autoSwicht, setAutoSwicht ] = useState(false);
	const [ redSwitchLight, setRedSwitchLight ] = useState(false);
	const [ yellowSwitchLight, setYellowSwitchLight ] = useState(false);
	const [ greenSwitchLight, setGreenSwitchLight ] = useState(false);

	
	useEffect(()=>{
		if(!autoSwicht){
			autoSwichtOff();
		}else{
			setRedSwitchLight(false);
			setYellowSwitchLight(true);
			setGreenSwitchLight(false);
			autoSwichtOn();
		}
	},[autoSwicht]);
	
   
	let autoInterval = null;
	let redTimeOut = 0;
	let yellowTimeOut = 0;
	let greenTimeOut = 0;
	
   
	// const autoMode = () => {
	// 	if(!autoSwicht){
	// 		autoSwichtOff();
	// 	}else{
	// 		setRedSwitchLight(false);
	// 		setYellowSwitchLight(true);
	// 		setGreenSwitchLight(false);
	// 		autoSwichtOn();
	// 	}
	// }

	function autoSwichtOff () {
		clearInterval(autoInterval);
		autoInterval = null;
		
		clearTimeout(redTimeOut);
		clearTimeout(greenTimeOut);
		clearTimeout(yellowTimeOut);
		redTimeOut = null;
		greenTimeOut = null;
		yellowTimeOut = null;
		setRedSwitchLight(false);
		setYellowSwitchLight(false);
		setGreenSwitchLight(false);	
	
	}

	function autoSwichtOn () {
		autoInterval = setInterval(()=>{
			redTimeOut = setTimeout(() => {
				setRedSwitchLight(true);
				setYellowSwitchLight(false);
				setGreenSwitchLight(false);
				}, 1000);
			greenTimeOut = setTimeout(() => {
				setRedSwitchLight(false);
				setYellowSwitchLight(false);
				setGreenSwitchLight(true);
				}, 2000);
			yellowTimeOut = setTimeout(() => {
				setRedSwitchLight(false);
				setYellowSwitchLight(true);
				setGreenSwitchLight(false);
				}, 3000);
		},3000);
		
	}

	
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
						onClick={ () => setAutoSwicht(current => !current) }	
					>
						Auto-Mode
				</button>
				<button type="button" 
					className="btn btn-dark m-3"
					onClick={ () => setSecondGreen(!secondGreen) }
				>
					Add-Left-Light
				</button>
				</div>
			</div>
		</div>
	</>
};
	
export default TrafficLight;