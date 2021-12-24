import React from 'react';

import { FaTimes, FaEdit } from 'react-icons/fa';

import { FeedContext } from './context';

function FeedItem({ id, text, rating, item }) {
  const { deleteItem, editItem } = React.useContext(FeedContext);

  return (
    <div className="rating">
      <h2>{text}</h2>
      <p className="num-display">{rating}</p>
  
      <button onClick={()=> deleteItem(id)} className="close">
        <FaTimes />
      </button>
      <button onClick={()=>editItem(item)} className="edit">
        <FaEdit />
      </button>

     
    </div>
  );
}

export default FeedItem;
