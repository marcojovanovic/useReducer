import React from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { GitHubContext } from './context';

function List() {
  const {
    name,
    setName,
    list,
    setList,
    alert,
    showAlert,
    handleSubmit,
    editItem,
    removeItem,
  } = React.useContext(GitHubContext);

  return (
    <div className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;

        return (
          <>
            <div key={id} className="grocery-item">
              <p className="title">{title}</p>
            </div>

            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="del-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default List;
