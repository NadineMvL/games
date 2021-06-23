import '../myStyles.css';
import React from 'react';
// has no life cycle methods and stateless
const BoardHead = props => {

    let time = props.time;

    return ( 
        <div className='board-head'>
           <div className="timer">{time}</div>
           <button onClick={props.reset} className='fortuneBtn'>Reset</button>

            </div>
    );
};

export default BoardHead

// here we put the timer and reset button

