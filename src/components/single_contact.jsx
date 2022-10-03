import React,{useState,useEffect} from "react";
import { Routes, Route, useParams } from 'react-router-dom';

const Single_contact = ({contacts}) => {
    const {contactID} = useParams();
    const [contact,setContact] = useState();
    useEffect( () => {
        async function set_contact(){await setContact(contacts.filter((contact)=>contact.id==contactID));}
        set_contact();
      },[]);
    return(
        <div>salam </div>
    )
}
export default Single_contact;