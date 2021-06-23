import React from 'react';
import '../myStyles.css';

class Question extends React.Component {
    constructor(props) {
      super(props);
    
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTextChange(e.target.value);
    }
  
    render() {
      return (
        <div >
       
          <input className='question' value={this.props.text}
                 onChange={this.handleChange} />
        </div>
      );
    }
  }
  
  export default Question;

  //question that user writes is displayed somewhere else - connects question & display 