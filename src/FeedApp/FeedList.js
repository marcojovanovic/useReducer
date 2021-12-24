import React from 'react';

import { FeedContext } from './context';
import { AnimatedList } from 'react-animated-list';

import FeedItem from './FeedItem';

import Card from './shared/Card';

function FeedList() {
  const { dataFeed, numFeeds, averageNum, } = React.useContext(FeedContext);

  return (
    <>
      <div className="flex">
        <h5>{numFeeds}</h5>
        <h5>{ isNaN(averageNum.toFixed(2)) ? 0 : averageNum.toFixed(2)}</h5>
      
      </div>

      <AnimatedList animation={'grow'}>
        {dataFeed.map((item) => {
          const { id, text, rating } = item;

          return (
            <Card key={id}>
              <FeedItem id={id} text={text} rating={rating} item={item}/>
            </Card>
          );
        })}
      </AnimatedList>
    </>
  );
}

export default FeedList;
