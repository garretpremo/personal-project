import React, {Component} from 'react';
import './checker-board.scss'
import CheckerBoardTile from './checker-board-tile';

export default class CheckerBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardMap: {},
            boardElements: [],
            validMoves: []
        };

        this.handleTileClick = this.handleTileClick.bind(this);
    }

    componentDidMount() {
        this.initializeBoard();
    }

    initializeBoard() {
        const width = 8, height = 8, boardElements = [], boardMap = {};
        let i = 0, evenRow = false;
        
        for (; i < width * height; i++) {

            // middle rows are the 3rd & 4th rows
            const middleRow = Math.floor(i / 8) === 3 || Math.floor(i / 8) === 4;

            // alternate the tile color of the first tile in each row
            if (i % 8 === 0) {
                evenRow = !evenRow;
            }

            initializeBoardTile(evenRow, middleRow, i);
            boardElements.push(<CheckerBoardTile key={i} configuration={boardMap[`${i}`]} handleClick={this.handleTileClick}/>);

            function initializeBoardTile(evenRow, middleRow, index) {
                const boardTile = {
                    even: ( evenRow && index % 2 === 0 ) || ( !evenRow && index % 2 === 1 ),
                    index: index,
                    currentPosition: index,
                    hasPiece: false,
                    good: index < width * height / 2,
                    isValidMove: false,
                };

                if (evenRow) {
                    boardTile.even = index % 2 === 0;
                } else {
                    boardTile.even = index % 2 === 1;
                }

                if (!middleRow && !boardTile.even) {
                    boardTile.hasPiece = true;
                }
                
                boardMap[`${index}`] = boardTile;
            }
        }

        this.setState({
            boardElements: boardElements,
            boardMap: boardMap
        });
    }

    handleTileClick(index) {
        const tile = { ...this.state.boardMap[`${index}`] };
        const rowIndex = index % 8;
        const validMoves = [];

        const good = tile.good;
        
        if (rowIndex !== 7) {
            if (good) {
                validMoves.push(index + 9);
            } else {
                validMoves.push(index - 7);
            }
        } 
        
        if (rowIndex !== 0) {
            if (good) {
                validMoves.push(index + 7);
            } else {
                validMoves.push(index - 9);
            }
        }

        this.setState({
            validMoves: validMoves
        });
    }

    render() {
        const boardElements = [];

        Object.keys(this.state.boardMap).forEach((boardMapKey, index) => {
            const boardTile = this.state.boardMap[boardMapKey];

            if (this.state.validMoves.includes(index)) {
                boardTile.isValidMove = true;
            } else {
                boardTile.isValidMove = false;
            }

            boardElements.push(<CheckerBoardTile key={index} configuration={this.state.boardMap[`${index}`]} handleClick={this.handleTileClick}/>);
        });
        return (
            <div className="board">
                {boardElements}
            </div>
        );
    }
}