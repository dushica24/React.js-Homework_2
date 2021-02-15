import React from 'react'; 

const Car = (props) => {
   // console.log('Car model -', props)
//    if(props.info.hatchback === 'Yes') {
//     doors++
// };

      return (
        <div id='Car'>
            <h2> Car Model {props.carModel} </h2>
            <h3>Car info:</h3>
            <p>Type: {props.info.type}</p>
            <p>Model: {props.info.model}</p>
            <p>Color: {props.info.color}</p>
            <p>Number of doors: {props.info.doors}</p>
	        <p>Hatchback: {props.info.hatchback}</p>
                           
        </div>
    );
};

export default Car;