import React from 'react';

import { GitHubContext } from './context';
import List from './List';
import Alert from './Alert';



function Home() {
  const {
    name,
    setName,
    list,
    setList,
    alert,
    setAlert,
    handleSubmit,
    clearList,
    isEditing
  } = React.useContext(GitHubContext);

  return (
    <div>
      <div className="section-center">
        {alert.show && <Alert {...alert} />}
        <h4>Grocery Budget</h4>

        <form className="grocery-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              value={name}
              className="grocery"
              placeholder="egg"
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>

        <div className="grocery-container">
         {list.length > 0 &&  <List />}

          <button onClick={clearList} className="clear-btn">
            clear items
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
