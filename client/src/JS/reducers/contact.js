// importation type
import { GET_CONTACTS, LOAD_CONTACTS, FAIL_CONTACTS, GET_CONTACT } from "../actionType/contact";

// initialstate
const intialState={
    contactlist: [],
    load: false,
    errors: null,
    contact:{}
}

// pure function (iniatialstate, action)
const contactReducer=(state= intialState, {type, payload})=>{
    switch (type) {
        case LOAD_CONTACTS:
            return {...state, load:true}

        case GET_CONTACTS:
            return {...state, load:false, contactlist: payload.contacts}  
              
        case FAIL_CONTACTS:
            return {...state, load: false, errors: payload}

        case GET_CONTACT:
            return {...state, contact: payload.contact}    
        
            
    
        default:
            return state;
    }

}

export default contactReducer;