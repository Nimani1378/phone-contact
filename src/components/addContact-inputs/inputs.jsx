import "../../pages/add-contact/addContact_style.css"
const AddContact_inputs = ({handleForm,Value,Name,Placeholder}) => {
    return(
        <input className="AddContact_inputs" type="text" name={Name} onChange={handleForm} value={Value} placeholder={Placeholder}/>
    )
}
export default AddContact_inputs;