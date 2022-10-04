import "../../components/components_style.css";
import "../card/card_style.css";
import { Link } from "react-router-dom";

const Card = ({ contact, showDeleteMessage }) => {
    return (
        <div className="container">
            <div className="container_left">
                <div style={{ width: '50px', height: '50px' }}>
                    <img alt='avatar' src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}></img>
                </div>
                <div>{contact.name} {contact.lastName}</div>
            </div>
            <div className="container_right">
                <span style={{display:contact.favorite ==='favorite'?'block' : 'none'}} class="material-symbols-outlined">
                    favorite
                </span>
                <span onClick={() => showDeleteMessage(contact.id)} class="material-symbols-outlined">
                    delete
                </span>
                <Link to={`/contact/${contact.id}`} >
                    <span class="material-symbols-outlined">
                        info
                    </span>
                </Link>



            </div>
        </div>
    )
}
export default Card;