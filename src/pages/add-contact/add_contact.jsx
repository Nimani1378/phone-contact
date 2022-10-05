import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../../total.css'
import './addContact_style.css'
import AddContact_inputs from "../../components/addContact-inputs/inputs"

const Add_contact = ({ contacts, setContacts }) => {
  const key_array = ['name', 'lastName', 'age', 'city']
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    age: '',
    email: '',
    lastName: '',
    favorite: 'unFavorite',
    city: ''
  })
  const handleSubmit = e => {
    e.preventDefault();
    setContacts([...contacts, form]);
    setForm({
      id: Math.floor(Math.random() * 1000),
      name: '',
      age: '',
      email: '',
      lastName: '',
      favorite: 'unFavorite',
      city: ''
    })
  }
  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handle_toggle = () => {
    setForm({ ...form, favorite: form.favorite === 'favorite' ? 'unFavorite' : 'favorite' })
  }
  return (
    <div className="body">
      <div className="addContact_container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid-ds">
            {key_array.map((item) => (
              <AddContact_inputs handleForm={handleForm} Value={form[item]} Name={item} Placeholder={item.toUpperCase()} />
            ))}
          </div>
          <input className="AddContact_inputs full-wd" type={'email'} name={'email'} onChange={handleForm} value={form.email} placeholder={'E-MAIL'} />
          <div className="fav_but" onClick={handle_toggle} style={{ fontSize: '13px', color: form.favorite === 'favorite' ? 'red' : 'white' }}>
          <span class="material-symbols-outlined">
          favorite
        </span>
            <span>FAVORITE</span>
          </div>
          <button className="fav_but" type={'submit'}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Add_contact;