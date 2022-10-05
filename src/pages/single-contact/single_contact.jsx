import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../../total.css';
import './singleContact_style.css'

const Single_contact = ({ contacts }) => {
    const { contactID } = useParams();
    const [contact, setContact] = useState({});
    useEffect(() => {
        setContact(contacts.filter((item) => item.id == contactID)[0]);
    }, []);
    return (
        <div className="body">
            <div className="SingleContact_container">
                <div className="SingleContact_image">
                    <img alt='avatar' src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}></img>
                </div>
                <div className="row">
                    <span className="title">NAME</span>
                    <span className="value">{contact.name}</span>
                </div>
                <div className="row">
                    <span className="title">LAST NAME</span>
                    <span className="value">{contact.lastName}</span>
                </div>
                <div className="row">
                    <span className="title">E-MAIL</span>
                    <span className="value">{contact.email}</span>
                </div>
                <div className="row">
                    <span className="title">AGE</span>
                    <span className="value">{contact.age}</span>
                </div>
            </div>
        </div >
    )
}
export default Single_contact;