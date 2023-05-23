import React, { useState } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban';

const App = (props: { boardData }) => {
  // Prepare to draw board
  //const [kanbanBoard] = useState(props.boardData);
  const [kanbanBoard, setBoard] = useState(props.boardData);

  function handleCardMove(_card, source, destination) {
    console.log('handleCardMove triggered')
    const updatedBoard = moveCard(kanbanBoard, source, destination);
    setBoard(updatedBoard);
  }

  if (kanbanBoard.columns.length === 0) {
    return (
      <div
        style={{
          border: '1px solid white',
          padding: '0.5em',
          marginTop: '-2rem',
        }}
      >
        Waiting for data to be rendered... Start by creating a child block
        below, and adding your data below it!
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Board onCardDragEnd={handleCardMove} disableColumnDrag>
          {kanbanBoard}
        </Board>
      </div>
    );
  }
};

export default App;
