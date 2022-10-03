import { Link } from "react-router-dom";
import React,{useState} from "react";

const Add_contact = () => {
    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        age: 0,
        email: '',
        lastName: '',
        favorite: 'favorite',
        city: ''
      })
      const handleForm = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
      }
    return (
        <div>
            <form>
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
            <Link to={"/"}>{"مشاهده همه"}</Link>
        </div>
    )
}
export default Add_contact;