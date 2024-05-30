import React from 'react';
import { useDrag } from 'react-dnd';

const Item = ({ item, type }) => {
  const [, drag] = useDrag({
    type,
    item: { id: item.id },
  });

  return (
    <div ref={drag} style={styles.item}>
      {item.name}
    </div>
  );
};

const styles = {
  item: {
    padding: '8px 16px',
    margin: '4px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    cursor: 'grab',
  },
};

export default Item;
