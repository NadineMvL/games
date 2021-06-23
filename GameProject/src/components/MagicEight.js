import React from 'react';
import Question from './Question.js';
import '../myStyles.css';

class MagicEight extends React.Component {
    constructor(props) {
      super(props);
      this.handleTxtChange= this.handleTxtChange.bind(this);
      this.state = {
        display: "",
        question: '',
        outcome:  ['Try again', 'What would your grandmother say?', 'Go for it!', 'Not recommended', 'That is not the real question, is it?', 'You do you, boo', 'Take a gentle walk and relfect carefully']
      
       
      //In the constructor we initialise the state.
       

      };
    }
  
   handleTxtChange (text) {
  this.setState({question: text})
   }
  
  answer = () =>
  this.setState({
  display: this.state.outcome[(Math.floor(Math.random()*(this.state.outcome.length)))],
  // this creates a random element number from outcome  array to be selected and then display
  outcome: '',
           
  });
   
  reset = () =>
  this.setState({
  display: "",
  question: '',
  outcome: ['Try again', 'What would your grandmother say?', 'Go for it!', 'Not recommended', 'That is not the real question, is it?', 'You do you, boo', 'Take a gentle walk and relfect carefully']

  });
  
  // reset game to all original values
  
  
  
    render() {
      return (
        <div  className="magicBG">
          <h1>Magic Mystical Advisor</h1>
          <h2>Experiencing issues in your love life, with your health or in your career?</h2>
          <h3>Type your question below for some guidance:</h3>
          <Question
           text={this.state.question}
           onTextChange={this.handleTxtChange} /> 
           <button className="fortuneBtn"   
            onClick={this.answer}>Ask</button>
         
         <div className='crystalBall'>
          <div className='answers'>
           <p className='answers'>{this.state.question}</p>
           <p className='answers'>{this.state.display}</p>
          </div>
         </div> 
          <button className='fortuneBtn' 
          onClick={this.reset}>Ask Another Question?
          </button>
          <button className='fortuneBtn'> <a  href="/home">Quit</a></button>
             
        </div>
       
      );
    }
}
  // create Quit by sending user to Home page by href, if they choose to return game is automatically reset when page loads
  export default MagicEight;
  
  