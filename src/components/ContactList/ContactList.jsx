import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

import { useDispatch, useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
