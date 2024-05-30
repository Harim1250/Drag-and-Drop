import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ children, onDrop, type }) => {
  const [, drop] = useDrop({
    accept: type,
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={styles.dropZone}>
      {children}
    </div>
  );
};

const styles = {
  dropZone: {
    minHeight: '200px',
    padding: '16px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
  },
};

export default DropZone;
