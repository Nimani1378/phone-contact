import React,{useState,useEffect} from "react";
import { Routes, Route, useParams } from 'react-router-dom';

const Single_contact = ({contacts}) => {
    const {contactID} = useParams();
    const [contact,setContact] = useState({});
    useEffect( () => {
        setContact(contacts.filter((item)=>item.id==contactID)[0]);
      },[]);
    return(
        <div>salam {contact.name}</div>
    )
}
export default Single_contact;