import { useState } from 'react'

const useLocalStorage = (keyName, defaultlValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if(typeof window !== 'undefined'){

        const value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        } else {
          if(typeof window !== 'undefined')
          window.localStorage.setItem(keyName, JSON.stringify(defaultlValue));
        }
      }
      } catch (error) {
        return defaultlValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
export default useLocalStorage;

