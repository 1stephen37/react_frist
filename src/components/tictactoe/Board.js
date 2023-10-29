import React from 'react';
import Cell from './Cell';
function Board(props) {
    return (
        <div className={`game-board`}>
            {Array(9).fill(0).map((item, index) => (
                <Cell key={index}> </Cell>
            ))}
        </div>
    );
}

export default Board;