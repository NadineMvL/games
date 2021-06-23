import React, {Component} from 'react';
import Board from './Board';
import '../myStyles.css';
import BoardHead from './BoardHead';

// I followed this minesweeper tutorial and use a lot of the logic to design this game https://www.youtube.com/watch?v=tfz1TssUfzM

class Guess extends Component {
    constructor() {
        super ();

        this.intervals = [];
    }
state = {
    rows:6,
    columns : 6,
    zen : 6,
    time: 0,
    status: 'waiting',
    openCells: 0,
    }
tick = () => {
    if(this.state.status === 'running'){
        let time = this.state.time +1;
        this.setState({time})
    }
 
}
// time is not a built in js method, you set time to 0 initially then create a function to be called when the status of the game changes from 'waiting' to 'running', time increases by 1 every time it is call and then to call that function every second. 
// when the game ends the status is set to 'ended' and so the timer stops and an alert pops up - game ends when user has click has opened a cell && there is a zen

endGame = () => {
    this.setState({
        status: 'ended'})
        alert (`Congratulations, you have found Zen in ${this.state.time} seconds`)
}

reset = () => {
    this.setState ({
        rows:6,
    columns : 6,
    zen : 6,
    time: 0,
    status: 'waiting',
    openCells: 0,
    })
}

  
        
//main component Guess.js passes down all props (data) to other components

setInterval = (fn, t) => {
this.intervals.push(setInterval(fn, t));
};

//this is to be able to call the tick function with setInterval method

handleCellClick = () => {
    if (this.state.openCells === 0 && this.state.status !== "running"){
        this.setState({
            status: 'running'
        },
        this.setInterval(this.tick, 1000)
      );
    }
    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    });
};

    render () {
return (
    <div className="guess">
        <h1>Finding Zen</h1>
        <h2>The only way to find it is to look for it, don't worry there will be a sign once you do, just keep clicking the blocks.</h2>
      <div className='boardP'>
      
        <BoardHead time={this.state.time} reset={this.reset}/>
        <Board rows={this.state.rows} columns={this.state.columns} zen={this.state.zen}
        openCells= {this.state.openCells}
        handleCellClick= {this.handleCellClick}
       endGame = {this.endGame} 
       status = {this.state.status}
       />

    </div>
    </div>

)

    }
}

export default Guess

//pass in different this.state properties to the components that need them