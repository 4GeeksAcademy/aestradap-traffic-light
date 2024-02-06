import React from "react";
import { useEffect,useState } from "react";

//include images into your bundle

//create your first component
const Light = (props) => {

	const [ onLight, setOnLight ] = useState(false);

	return <div className={`light bg-${props.color}`}/>
		
		
};

export default Light;
//sombra encendido para dentro
// box-shadow: inset 0 -5px 15px rgba(255,255,255,0.4), inset -2px -1px 40px rgba(0,0,0,0.4), 0 0 1px #000;
//rojo
// box-shadow: 0px 0px 50px 25px rgba(255,7,58,0.6);
// -webkit-box-shadow: 0px 0px 50px 25px rgba(255,7,58,0.6);
// -moz-box-shadow: 0px 0px 50px 25px rgba(255,7,58,0.6);
//verde
// box-shadow: 0px 0px 50px 25px rgba(57,255,20,0.6);
// -webkit-box-shadow: 0px 0px 50px 25px rgba(57,255,20,0.6);
// -moz-box-shadow: 0px 0px 50px 25px rgba(57,255,20,0.6);
//amarillo
// box-shadow: 0px 0px 50px 25px rgba(250,237,39,0.6);
// -webkit-box-shadow: 0px 0px 50px 25px rgba(250,237,39,0.6);
// -moz-box-shadow: 0px 0px 50px 25px rgba(250,237,39,0.6);