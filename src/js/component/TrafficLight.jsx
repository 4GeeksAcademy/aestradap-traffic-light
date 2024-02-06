import React from "react";

//include images into your bundle
import Light from "./Light";

//create your first component
const TrafficLight = () => {
	
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
						<Light/>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-center ">
						<Light/>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content-center">
						<Light/>
					</div>
				</div>
			</div>
		</div>
	</>
};
	
export default TrafficLight;