import React from "react";
import { useEffect,useState } from "react";

//include images into your bundle

//create your first component
const Light = ({color}) => {

	const [ onLight, setOnLight ] = useState(false);
	const shadowOutColor = null;
	if(color === 'danger')
		shadowOutColor = 'rgba(255,7,58,0.6)';
	else if(color === 'warning')
		shadowOutColor = 'rgba(250,237,39,0.6)';
	else if( color === 'success')
		shadowOutColor = 'rgba(57,255,20,0.6)';


	return <div 
	className={`light shadowIn bg-${color}`}
	style={{ boxShadow: `0px 0px 140px 80px ${shadowOutColor}`,
		webkitBoxShadow: `0px 0px 140px 80px ${shadowOutColor}`,
		mozBoxShadow: `0px 0px 140px 80px ${shadowOutColor}`}}		
	/>
		
		
};

export default Light;
//sombra encendido para dentro
// box-shadow: inset 0 -5px 15px rgba(255,255,255,0.4), inset -2px -1px 40px rgba(0,0,0,0.4), 0 0 1px #000;
//rojo
// box-shadow: 0px 0px 140px 80px rgba(255,7,58,0.6);
// -webkit-box-shadow: 0px 0px 140px 80px rgba(255,7,58,0.6);
// -moz-box-shadow: 0px 0px 140px 80px rgba(255,7,58,0.6);
//verde
// box-shadow: 0px 0px 140px 80px rgba(57,255,20,0.6);
// -webkit-box-shadow: 0px 140px 50px 80px rgba(57,255,20,0.6);
// -moz-box-shadow: 0px 0px 140px 80px rgba(57,255,20,0.6);
//amarillo
// box-shadow: 0px 0px 140px 80px rgba(250,237,39,0.6);
// -webkit-box-shadow: 0px 0px 140px 80px rgba(250,237,39,0.6);
// -moz-box-shadow: 0px 0px 140px 80px rgba(250,237,39,0.6);
