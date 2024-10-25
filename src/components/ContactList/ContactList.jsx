import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <div className={styles.contactDetails}>
            <p className={styles.contactName}>{contact.name}</p>
            <p className={styles.contactNumber}>{contact.number}</p>
          </div>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
