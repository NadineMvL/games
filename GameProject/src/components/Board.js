import React, {
    Component
} from 'react';
import Row from './Row.js';
import '../myStyles.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.createBoard(props)
        }
    }
    createBoard = props => {
        let board = [];

        for (let i = 0; i < props.rows; i++) {
            board.push([]);

            for (let j = 0; j < props.columns; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    isOpen: false,
                    hasZen: false

                });
            }

            // create a 2D array to pass thru rows and columns, set empty array (board) then push empty rows and from rows create another empty array for columns
            // now each item/block (out of 100) will have different properties
            // assign j to be x to help understand the x-axis and assign y to be i for the y-axis in order to locate the cell in the grid, for examply x:5 and y: 2 will be the block in the fifth row and second column
            //we also have to assign properties such as whether it has a zen as we will randomly assign zens to the blocks

            // hasZen  is initially false and they are randomly assigned mines and flags
            //initially beenClicked will be false for all the blocks and as they get clicked 

        }
        for (let i = 0; i < props.zen; i++) {
            let randomRow = Math.floor(Math.random() * props.rows);
            let randomCol = Math.floor(Math.random() * props.columns);
            let cell = board[randomRow][randomCol];

            if (cell.hasZen) {
                i--;
            } else {
                cell.hasZen = true;
            }
        }

        // add zens after creating board - math random assigns a number between 0 and 1 (not including 0  or 1) then you multiply it by the range.math.floor rounds number down to closest whole number
        // assign  random locations of zens by using it's 'address' in array: board [][]
        // the if statement ensures that if there is already has a mine (initial state hasZen is false) then the count decreases so that it will run again and ensure no  block is assigned 2 zens
        // if it has not been set true for hasZen then set it as true  
        return board;
    };

    open = cell => {
        let rows = this.state.rows;
        let current = rows[cell.y][cell.x];

        if (!cell.isOpen) {
            this.props.handleCellClick();
            current.isOpen = true;

            this.setState({
                rows
            });

            if (cell.isOpen && cell.hasZen) {
                this.props.endGame();
            }

        }

    }
    //map function needs a key in react so it can locate it in DOM, row element passes through data to cells in Row component
    //also have to pass through open function 
    render() {
        let rows = this.state.rows.map((row, index) => {
            return ( <
                Row cells = {
                    row
                }
                key = {
                    index
                }
                open = {
                    this.open
                }
                />
            )
        })
        //create a list of rows
        return ( <
div className = "board" > {
                rows
            }

            </div>

        )

    }
}

export default Board;

//the board is designed here