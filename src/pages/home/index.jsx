import { useState } from 'react'
import React from 'react';
import { Form, Link } from "react-router-dom";
import Card from "../../components/card/card"
import '../../total.css'
import "./index_style.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact, toggleFavorite } from '../../redux/contact.slice'

function Home() {
  const contacts = useSelector((state) => state.contact_key);
  const dispatch = useDispatch();
  const [nowId, setnowId] = useState();
  const [searchBox, setSearchBox] = useState('');
  const [fav_filter, setFav_filter] = useState('allContacts');
  const filter_buttons = [
    { id: 1, title: 'allContacts' },
    { id: 2, title: 'favorite' },
    { id: 3, title: 'unFavorite' }
  ]

  
  const handleSearch = e => {
    setSearchBox(e.target.value);
  }
  function handle_favFilter(title) {
    setFav_filter(title);
  }

  return (
    <div className='body'>
      <div className='container'>
        <div className='filters_continer'>
          {(filter_buttons.map(button => (
            <div className={'filter_buttons'} onClick={() => handle_favFilter(button.title)} style={{ borderBottom: button.title === fav_filter ? '2px solid white' : 'none' }}>{button.title}</div>
          )))}
        </div>
        <div className='cards_container'>
          {contacts.filter(filter_contacts => filter_contacts.name.toUpperCase().includes(searchBox.toUpperCase()) && (fav_filter === 'allContacts' ? true : filter_contacts.favorite === fav_filter)).map(contact => (
            <Card contact={contact} toggleFavorite1={()=>dispatch(toggleFavorite(contact.id))} deleteContact1={()=>dispatch(deleteContact(contact))}/>
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
// toggleFavorite1={dispatch(toggleFavorite(contact.id))} deleteContact1={dispatch(deleteContact(contact.id))}