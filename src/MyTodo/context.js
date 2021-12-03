import './todo.css';

import React, { createContext, useState, useEffect } from 'react';

export const GitHubContext = createContext(); // izvoz za komponente

function saveTodos() {
  return JSON.parse(localStorage.getItem('list')) || [];
}

const GitHubProvider = ({ children }) => {
  const [name, setName] = useState('');

  const [list, setList] = useState(saveTodos());

  const [alert, setAlert] = useState({
    show: false,
    msg: 'no comment',
    type: 'danger',
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // local storage

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {

      setAlert({ show: true, msg: 'ne postoji taj task', type: 'danger' });

      setTimeout(() => {
        showAlert(false, '', '');
      }, 2000);


    } else if (name & isEditing) {

     
      //edit

      setList(
        list.map((item) => {
          if (item.id === editId) {

            return { ...item, title: name };
          }

          return item;
        })
      );

      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value change');
    } else {

     
      showAlert(true, 'success', 'item added');

      setTimeout(() => {
        showAlert(false, '', '');
      }, 2000);

      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);

      setName('');
    }
  };

  const clearList = () => {
    showAlert(true, 'danger', 'all removed');

    setTimeout(() => {
      showAlert(false, '', '');
    }, 2000);
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');

    setTimeout(() => {
      showAlert(false, '', '');
    }, 2000);

    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);

    setIsEditing(true);
    setEditId(id);

    setName(specificItem.title);
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  return (
    <GitHubContext.Provider
      value={{
        name,
        setName,
        list,
        setList,
        alert,
        setAlert,
        isEditing,
        setIsEditing,
        handleSubmit,
        clearList,
        showAlert,
        editItem,
        removeItem,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export { GitHubProvider };
