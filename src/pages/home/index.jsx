import { useState } from 'react'
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'mina',
      lastName: 'alaei',
      age: 21,
      city: 'esfahan',
      email: 'nimai@example.com',
      favorite: 'favorite'
    },
    {
      id: 2,
      name: 'nima',
      lastName: 'rezaei',
      age: 21,
      city: 'tehran',
      email: 'rezaei@example.com',
      favorite: 'unFavorite'
    }
  ])

  const [showDeleteMessage_state, setShowDeleteMessage_state] = useState('none');
  const [nowId, setnowId] = useState();
  const [searchBox, setSearchBox] = useState('');
  const [fav_filter, setFav_filter] = useState('allContacts');
  const filter_buttons = [
    { id: 1, title: 'allContacts' },
    { id: 2, title: 'favorite' },
    { id: 3, title: 'unFavorite' }
  ]
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    age: 0,
    email: '',
    lastName: '',
    favorite: 'favorite',
    city: ''
  })

  function showDeleteMessage(id) {
    setShowDeleteMessage_state('block');
    setnowId(id);
  }
  function hideDeleteMessage() {
    setShowDeleteMessage_state('none');
  }
  function handleDelete() {
    setContacts(contacts.filter(contact => contact.id !== nowId));
    hideDeleteMessage();
  }
  const handleSearch = e => {
    setSearchBox(e.target.value);
  }
  function handle_favFilter(title) {
    setFav_filter(title);
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setContacts([...contacts, form])
    setForm({
      id: Math.floor(Math.random() * 1000),
      name: '',
      age: 0,
      email: '',
      number: '',
      favorite: '',
      country: ''
    })
  }

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <div style={{ display: showDeleteMessage_state }}>
          <div>Are you sure ?</div>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={hideDeleteMessage}>No</button>
        </div>
        <div>search : </div>
        <div>
          <input onChange={handleSearch} value={searchBox} />
        </div>
        <div>
          {(filter_buttons.map(button => (
            <div>
              <button onClick={() => handle_favFilter(button.title)} style={{ backgroundColor: button.title === fav_filter ? 'red' : 'white' }}>{button.title}</button>
            </div>
          )))}
        </div>
        <div>
          
        </div>
      </div>
      {contacts.filter(filter_contacts => filter_contacts.name.toUpperCase().includes(searchBox.toUpperCase()) && (fav_filter === 'allContacts' ? true : filter_contacts.favorite === fav_filter)).map(contact => (
        <div style={{ border: '1px solid black', margin: '5px', padding: '10px' }}>
          <div style={{ width: '50px', height: '50px' }}>
            <img alt='avatar' src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}></img>
          </div>
          <div>name : {contact.name}</div>
          <div>lastName : {contact.lastName}</div>
          <div>age : {contact.age}</div>
          <div>email : {contact.email}</div>
          <div>city : {contact.city}</div>
          <div>favorite : {contact.favorite}</div>
          <button onClick={() => showDeleteMessage(contact.id)}>delete</button>
        </div>
      ))}
      <Link to={"/addContact"}>{"مشاهده همه"}</Link>
    </div>
  );
}

export default Home;