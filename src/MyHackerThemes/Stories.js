import React from 'react';
import { REMOVE_STORY } from './actions';

import { AppContext } from './context';

function Stories() {
  const { isLoading, hits, removeStory } = React.useContext(AppContext);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  {
    console.log(hits);
  }

  return (
    <div className="stories">
      {hits.map((item) => {
        const { objectID, title, num_comments, url, points, author } = item;

        return (
          <div className="story">
            <h3 className="title">{title}</h3>
            <p className="info">{author}</p>

            <div>
              <a href={url} target="_blank" className="read-link">
                Read more
              </a>
            </div>

            <button onClick={(()=>removeStory(objectID))} className="remove-btn">Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
