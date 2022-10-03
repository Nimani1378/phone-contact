import "../../components/components_style.css"
import "../card/card_style.css"

const Card = ({contact}) => {
    return(
        <div className="container">
            <div style={{ width: '50px', height: '50px' }}>
              <img alt='avatar' src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}></img>
            </div>
            <div>{contact.name}</div>
            <div>{contact.lastName}</div>
        </div>
    )
}
export default Card;