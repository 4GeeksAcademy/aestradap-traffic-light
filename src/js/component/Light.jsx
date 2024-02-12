import React from "react";
import { ArrowLeft } from 'react-bootstrap-icons';

const Light = ({color,  switchLight, setSwitchLight, setSwitchLight2, setSwitchLight3, secondGreen}) => {

	let shadowOutColor = null;
	if(color === 'danger')
		shadowOutColor = 'rgba(255,7,58,0.6)';
	else if(color === 'warning')
		shadowOutColor = 'rgba(250,237,39,0.6)';
	else if( color === 'success')
		shadowOutColor = 'rgba(57,255,20,0.6)';

	const onLightHandler = () => {
		setSwitchLight(current => !current);
		setSwitchLight2(false);
		setSwitchLight3(false);
		}
	
	return  <div 
	onClick={onLightHandler}
	className={`light bg-${color} shadowIn`}
	style={{ boxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none',
		 WebkitBoxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none',
		 MozBoxShadow: switchLight ? `0px 0px 140px 80px ${shadowOutColor}` : 'none'}}		
	>
		{secondGreen 
			? <ArrowLeft color="rgba(57,255,20,0.6)" size={50} />
			: null
		}
	</div>
};

export default Light;
