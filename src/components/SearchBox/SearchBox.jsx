import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        id="filter"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
