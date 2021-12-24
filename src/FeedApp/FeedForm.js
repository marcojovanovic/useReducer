import React from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
  import { FeedContext } from './context';
import RatingSelect from './RatingSelect';


function FeedForm() {



  const { text, handleChange, addItem, message } = React.useContext(FeedContext);


  return (
    <Card >
      <RatingSelect />
      <form onSubmit={addItem} className="input-group">
        <input type="text" placeholder="write a review..." 
          value={text} onChange={handleChange}
        
        />
        <Button type='submit' version='secondary'>Send</Button>
      </form>

     <h2>{message}</h2>
    </Card>
  );
}

export default FeedForm;
