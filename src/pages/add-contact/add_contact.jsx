import { Link } from "react-router-dom";
import React,{useState} from "react";
import './addContact_style.css'

const Add_contact = ({contacts,setContacts}) => {
    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        age: 0,
        email: '',
        lastName: '',
        favorite: 'favorite',
        city: ''
      })
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
      const handleForm = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
      }
    return (
        <div className="addContact_body">
            <form onSubmit={handleSubmit}> 
                <label>name</label>
                <input name={'name'} onChange={handleForm} value={form.name} />
                <label>age</label>
                <input type={'number'} name={'age'} onChange={handleForm} value={form.age} />
                <label>email</label>
                <input type={'email'} name={'email'} onChange={handleForm} value={form.email} />
                <label>lastName</label>
                <input name={'lastName'} onChange={handleForm} value={form.lastName} />
                <label>favorite</label>
                <select name={'favorite'} onChange={handleForm} value={form.favorite}>
                    <option value="favorite">favoriteContact</option>
                    <option value="unFavorite">unFavorite</option>
                </select>
                <label>city</label>
                <input name={'city'} onChange={handleForm} value={form.city} />
                <button type={'submit'}>
                    Submit
                </button>
            </form>
            <button><Link to={"/"}>{"MAIN PAGE"}</Link></button>
            
        </div>
    )
}
export default Add_contact;