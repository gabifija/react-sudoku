import React from 'react';
import ReactDOM from 'react-dom';

import  { unregister } from './core';

ReactDOM.render(<div>Sudoku</div>,
  document.getElementById('root')
);

unregister();
