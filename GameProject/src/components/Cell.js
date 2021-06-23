import React from 'react';
import '../myStyles.css';

const Cell = props => {
let renderCell = () => {
    if (props.data.isOpen && !props.data.hasZen) {
return (
<div className='cell open' onClick={() => props.open(props.data)}>

</div>)
    } else if ( props.data.isOpen && props.data.hasZen) {

        return (
            <div  onClick={() => props.open(props.data)}>
              Zen!
            </div>);

    } else {
        return (
        <div className="cell" onClick={() => props.open(props.data)}>

        </div>
        //all closed cells will be set as className "cell"
        );

    }
   
}



    return renderCell()
    
};

export default Cell;

// here we write each block's behavior once it's been clicked