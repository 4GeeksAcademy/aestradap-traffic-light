import React from "react";
import { useEffect,useState } from "react";

//include images into your bundle

//create your first component
const Light = ({color,  switchLight, setSwitchLight}) => {

	
	
	let shadowOutColor = null;
	if(color === 'danger')
		shadowOutColor = 'rgba(255,7,58,0.6)';
	else if(color === 'warning')
		shadowOutColor = 'rgba(250,237,39,0.6)';
	else if( color === 'success')
		shadowOutColor = 'rgba(57,255,20,0.6)';

	const onLightHandler = () => {
		setSwitchLight(current => !current);
		}
	

	return <div onClick={onLightHandler}
	className={`light bg-${color} shadowIn`}
	
	style={{ boxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none',
		 WebkitBoxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none',
		 MozBoxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none'}}		
	/>
			
		
};

export default Light;
