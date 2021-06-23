import React, {Component} from 'react';

// I followed this tutorial for assistance: youtube.com/watch?v=e_ZibOe77yo

class ToDo extends Component {
    constructor (props) {
        super (props);

        this.state = {
            newTask : "",
            taskList : [],
        }
    }

    //set initial state to empty in constructor

    updateInput (key, value) {
        this.setState ({
            [key]: value

        });
    }
    addItem () {
     const newTask = {
         id: 1 + Math.random(),
         value: this.state.newTask.slice()
     } ;

     // assign unique id numbers to each add item so they can be deleted later
     const taskList = [...this.state.taskList];
     taskList.push(newTask);
     this.setState({
         newTask :'',
         taskList
     })
    }
    // ... means whatever is in the array already, then you add the new task to the array with push() and then set the textbox to empty again as soon as it has been added to the array

    deleteItem(id) {
        const taskList =[...this.state.taskList];
        const updateList = taskList.filter(item => item.id !==id);
// create a copy of the taskList array then filter out the item, set the original array to the current array copy
//logic here is that item will be returned if it's not equal to the item id (that was just clicked on)
        this.setState({taskList: updateList})
    }


    render () {
        return ( 
        <div className='help'>
                <h1>To Do List</h1>
                <h2>Quite often a lot of our worry stems from remembering to get everything done, jot it down so you don't forget and get going. </h2>
                <br></br>
                <h2>Add a task:</h2>
                <input type='text'
                 placeholder= "Remember to remember..."
                 value = {this.state.newTask}
             //the value becomes whatever the user has input 
                  onChange = {e => this.updateInput('newTask', e.target.value)} />
            {/* call updateInput function onChange */ }
            <button className='fortuneBtn' onClick = {() => this.addItem()}>Add</button>
             {/* call addItem function onClick*/}
         <ul>

               {/*take the current state of array and map through that, when using map method in react you have to assign a key so each element is unique, in this case use the unique id already assigned */}             
            {this.state.taskList.map(item => {
    return(
            <li key ={item.id}>{item.value}
                <button className='fortuneBtn'  
                onClick ={() => this.deleteItem(item.id)}>Completed
                </button>
            </li>
     
        )
  //*create a delete button with every task that is being added, you pass through the item id so that react knows which item to delete in the array 
            }
            )}
           
              
            </ul>


        </div>

    );
    }
}

export default ToDo