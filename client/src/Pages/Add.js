import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postContact, editContact } from '../JS/actions/contact'
import { Link } from 'react-router-dom'
const Add = () => {
  const [contact, setContact] = useState({})
  const dispatch = useDispatch()
  const edit = useSelector((state) => state.editReducer.edit)
  const contactToedit = useSelector((state) => state.contactReducer.contact)
  useEffect(() => {
    edit
      ? setContact(contactToedit)
      : setContact({ name: '', email: '', phone: '' })
  }, [contactToedit, edit])

  const handleData = () => {
    edit
      ? dispatch(editContact(contactToedit._id, contact))
      : dispatch(postContact(contact))
  }
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <label>Name</label>
      <input name="name" value={contact.name} onChange={handleChange} />
      <label>Email</label>
      <input name="email" value={contact.email} onChange={handleChange} />
      <label>Phone</label>
      <input name="phone" value={contact.phone} onChange={handleChange} />
      <button onClick={handleData}>
        <Link to="/">{edit ? 'Edit' : 'Add'}</Link>
      </button>
    </div>
  )
}

export default Add
