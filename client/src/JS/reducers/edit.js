// importation
import { TOGGLE_ADD, TOGGLE_EDIT } from '../actionType/edit';

// initialstate
const initialState={
    edit: false,
}

// pure function (iniatialstate, action)

const editReducer=(state=initialState,{type} )=>{

    switch (type) {
        case TOGGLE_EDIT:
            return {...state,edit:true}
        case TOGGLE_ADD:
            return {...state,edit:false} 
            
    
        default:
           return state;
    }

}

export default editReducer;