import React from "react";

//include images into your bundle
import Light from "./Light";

//create your first component
const TrafficLight = () => {
	return <>
		



	<div class="container text-center">
		<div class="row myPoste"/>
		<div class="container myFrame">
			<div class="row">
				<div class="col">
					<Light/>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<Light/>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<Light/>
				</div>
			</div>
		</div>
	</div>

	</>
};

export default TrafficLight;
