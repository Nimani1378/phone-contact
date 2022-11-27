import "../../components/components_style.css";
import "../card/card_style.css";
import { Link } from "react-router-dom";


const Card = ({ contact,toggleFavorite1,deleteContact1 }) => {
    
    //const contact = useSelector((state) => state.contact_key[index])
    //console.log(contact[]);
    return (
        <div className="card">
            <div className="container_left">
                <div style={{ width: '50px', height: '50px' }}>
                    <img alt='avatar' src={`https://joeschmoe.io/api/v1/${contact.id}`}></img>
                </div>
                <p className="contact_name">{contact.name} {contact.lastName}</p>
            </div>
            <div className="container_right">
                <span onClick={toggleFavorite1} style={{ cursor: "pointer", color: contact.favorite === "favorite" ? 'red' : 'black' }} class="material-symbols-outlined">
                    favorite
                </span>
                <span style={{ cursor: "pointer" }} onClick={deleteContact1} class="material-symbols-outlined">
                    delete
                </span>
                <Link to={`/contact/${contact.id}`} >
                    <span style={{ color: 'black' }} class="material-symbols-outlined">
                        info
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default Card;