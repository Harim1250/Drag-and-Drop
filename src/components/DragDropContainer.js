
import React, { useState } from 'react';
import Item from './Item';
import DropZone from './DropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragDropContainer = () => {
  const [itemsA, setItemsA] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const [itemsB, setItemsB] = useState([]);

  const handleDropA = (item) => {
    setItemsB((prev) => prev.filter((i) => i.id !== item.id));
    setItemsA((prev) => [...prev, itemsB.find((i) => i.id === item.id)]);
    console.log('Moved to A:', item);
  };

  const handleDropB = (item) => {
    setItemsA((prev) => prev.filter((i) => i.id !== item.id));
    setItemsB((prev) => [...prev, itemsA.find((i) => i.id === item.id)]);
    console.log('Moved to B:', item);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h2>Div A</h2>
          <DropZone onDrop={handleDropA} type="ITEM">
            {itemsA.map((item) => (
              <Item key={item.id} item={item} type="ITEM" />
            ))}
          </DropZone>
        </div>
        <div style={styles.column}>
          <h2>Div B</h2>
          <DropZone onDrop={handleDropB} type="ITEM">
            {itemsB.map((item) => (
              <Item key={item.id} item={item} type="ITEM" />
            ))}
          </DropZone>
        </div>
      </div>
    </DndProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
  column: {
    flex: 1,
    margin: '0 10px',
  },
};

export default DragDropContainer;
