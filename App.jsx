import React, { useState } from 'react';
import Board from '@asseinfo/react-kanban';

const App = (props) => {
  const prepareDataForKanban = () => {
    // Data from child block comes here
    const data = props.dataBlock;

    // Map array based on required fields for kanban
    const arr = data.map((e) => ({
      id: e.id,
      title: e.content,
      cards: [],
      children: e.children,
    }));

    // Populate kanbon cards under their respective headers
    for (let i of arr) {
      for (let j of i.children) {
        i.cards.push({ id: j.id, description: j.content });
      }
    }

    const board = { columns: arr };
    return board;
  };

  // Prepare to draw board
  const [kanbanBoard] = useState(prepareDataForKanban());

  console.log(kanbanBoard);

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
    return <Board>{kanbanBoard}</Board>;
  }
};

export default App;
