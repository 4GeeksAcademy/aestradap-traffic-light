import React, { useState, useEffect } from "react";

export const DigitNumber = () => {

    const [ countdown, setCountdown ] = useState(6);

    useEffect(() => {
        setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);
    }, []);
   
    return <>
        {
            countdown > -1 &&

            <div className="card text-center bg-dark text-light border">
                <div className="card-body">
                    <p className="card-text" style={{fontSize:100}}>{countdown}</p>
                </div>
            </div>	
        }
       
    </>
}