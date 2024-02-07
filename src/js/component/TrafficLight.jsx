import React from "react";
import { useEffect,useState } from "react";

//include images into your bundle
import Light from "./Light";

//create your first component
const TrafficLight = () => {

	const [ redSwitchLight, setRedSwitchLight ] = useState(false);
	const [ yellowSwitchLight, setYellowSwitchLight ] = useState(false);
	const [ greenSwitchLight, setGreenSwitchLight ] = useState(false);
	

	
	// useEffect(()=> {
	// 	if(redSwitchLight){
	// 		setYellowSwitchLight(false);
	// 		setGreenSwitchLight(false);
	// 	}else if(yellowSwitchLight){
	// 		setRedSwitchLight(false);
	// 		setGreenSwitchLight(false);
	// 	}else if(greenSwitchLight){
	// 		setRedSwitchLight(false);
	// 		setYellowSwitchLight(false);
	// 	}

	// },[]);
	

	
	
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
			</div>
		</div>
	</>
};
	
export default TrafficLight;