import React from 'react';
import DragDropContainer from './components/DragDropContainer';

const App = () => {
  return (
    <div style={styles.app}>
      <h1>Drag and Drop components</h1>
      <DragDropContainer />
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
  },
};

export default App;
