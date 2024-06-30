import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../SearchFilter/searchFilterSlice.ts";
import styles from "./SearchBar.module.css";

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const verify = useCallback(
    debounce((value) => {
      if (value === "") {
        dispatch(setTitle(undefined));
        return;
      }
      dispatch(setTitle(value));
    }, 500),
    [dispatch],
  );
  useEffect(() => {
    verify(value);
  }, [value]);
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="Название фильма"
        onChange={handleChangeValue}
        value={value || ""}
      />
    </div>
  );
};

export default SearchBar;
