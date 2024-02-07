import React from "react";
import { useState } from "react";

//include images into your bundle
import Light from "./Light";

//create your first component
const TrafficLight = () => {

	let secondGreen = false;

	const [ redSwitchLight, setRedSwitchLight ] = useState(false);
	const [ yellowSwitchLight, setYellowSwitchLight ] = useState(false);
	const [ greenSwitchLight, setGreenSwitchLight ] = useState(false);

	
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
							/>
						</div>
					</div>: null
				}	
			</div>
			<div className="row">
				<div className="col d-flex justify-content-center p-3">
				<button type="button" class="btn btn-dark m-3">Add-Left</button>
				<button type="button" class="btn btn-dark m-3">Auto-Mode</button>
				</div>
			</div>
		</div>
	</>
};
	
export default TrafficLight;