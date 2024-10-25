
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p className={styles.contactName}>{name}</p>
        <p className={styles.contactNumber}>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
