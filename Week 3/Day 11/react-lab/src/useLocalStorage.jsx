import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValues, setStoredValues] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : initialValue;
      return parsedItem;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        storedValues instanceof Function
          ? storedValues(storedValues)
          : storedValues;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValues]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValues) : value;
      setStoredValues(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const printValue = () => {
    console.log( 'AA: ',storedValues);
  }

  return [storedValues, setValue, printValue];
};
