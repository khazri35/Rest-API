
import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import ContactList from '../Components/ContactList'
import { toggleAdd } from '../JS/actions/edit';

const Home = () => {
    const dispatch= useDispatch()

    return (
        <div>
        <Link to="/add">
        <button onClick={()=>
            dispatch(toggleAdd())}>
            Add Contact</button>
        </Link>
        <button>Contact List</button>
           <ContactList/>            
        </div>
    )
}

export default Home




