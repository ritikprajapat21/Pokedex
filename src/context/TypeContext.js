import { useState, useEffect, createContext } from "react";
import axios from "axios";

const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    try {
      const getTypes = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        setTypes(response.data.results);
      };
      getTypes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TypeContext.Provider value={{ types }}>{children}</TypeContext.Provider>
  );
};

export default TypeContext;
