import { useState } from 'react'
import React from 'react';
import { Link } from "react-router-dom";
import Card from "../../components/card/card"
import '../../total.css'
import "./index_style.css"

function Home({ contacts, setContacts }) {

  const [showDeleteMessage_state, setShowDeleteMessage_state] = useState('none');
  const [nowId, setnowId] = useState();
  const [searchBox, setSearchBox] = useState('');
  const [fav_filter, setFav_filter] = useState('allContacts');
  const filter_buttons = [
    { id: 1, title: 'allContacts' },
    { id: 2, title: 'favorite' },
    { id: 3, title: 'unFavorite' }
  ]

  function showDeleteMessage(id) {
    setShowDeleteMessage_state('block');
    setnowId(id);
  }
  function hideDeleteMessage() {
    setShowDeleteMessage_state('none');
  }
  function handleDelete(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
    hideDeleteMessage();
  }
  const handleSearch = e => {
    setSearchBox(e.target.value);
  }
  function handle_favFilter(title) {
    setFav_filter(title);
  }
  function handleToggleFav(id) {
    const newList = contacts.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          favorite: item.favorite === "favorite" ? "unFavorite" : "favorite",
        };

        return updatedItem;
      }

      return item;
    });

    setContacts(newList);
  }
  return (
    <div className='body'>
      <div style={{ padding: '10px' }}>
        <div style={{ display: showDeleteMessage_state }}>
          <div>Are you sure ?</div>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={hideDeleteMessage}>No</button>
        </div>


      </div>
      <div className='container'>
        <div className='filters_continer'>
          {(filter_buttons.map(button => (
            <div className={'filter_buttons'} onClick={() => handle_favFilter(button.title)} style={{ borderBottom: button.title === fav_filter ? '2px solid white' : 'none' }}>{button.title}</div>
          )))}
        </div>
        <div className='cards_container'>
          {contacts.filter(filter_contacts => filter_contacts.name.toUpperCase().includes(searchBox.toUpperCase()) && (fav_filter === 'allContacts' ? true : filter_contacts.favorite === fav_filter)).map(contact => (
            <Card contact={contact} handleDelete={handleDelete} handleToggleFav={handleToggleFav} />
          ))}
        </div>
        <div className='list_options'>
          <div>
            <span>
              <input onChange={handleSearch} value={searchBox} placeholder={'SEARCH'} style={{ border: 'none', borderRadius: "10px", padding: "8px", fontSize: "10px" }} />
            </span>
          </div>
            <Link to={"/addContact"}>
              <span style={{ color: 'white', padding: '15px' }} class="material-symbols-outlined">
                person_add
              </span>
            </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
