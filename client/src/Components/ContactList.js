import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../JS/actions/contact'
import ContactCard from './ContactCard'

const ContactList = () => {
  const dispatch = useDispatch()
  const listContact = useSelector((state) => state.contactReducer.contactlist)
  const load = useSelector((state) => state.contactReducer.load)
  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])
  return (
    <div>
      {load ? (
        <h2>spiner</h2>
      ) : (
        listContact.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
    </div>
  )
}

export default ContactList
