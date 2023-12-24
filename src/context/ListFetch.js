import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useTypes from "../hooks/useTypes";

const ListFetch = createContext({});

export const ListFetchProvider = ({ children }) => {
  const [fetchListUrl, setFetchListUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25"
  );
  //   const { fetchListUrl } = useTypes();
  console.log(fetchListUrl);

  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      const fetchList = async () => {
        const response = await axios.get(fetchListUrl);
        const result = response.data?.pokemon?.map((p) => {
          return { ...p.pokemon };
        });
        console.log(result);
        setList(result);
      };
      fetchList();
    } catch (error) {
      console.log(error);
    }
  }, [fetchListUrl]);

  useEffect(() => {
    try {
      const fetchList = async () => {
        const response = await axios.get(fetchListUrl);
        console.log(response.data);
        setList(response.data.results);
      };
      fetchList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ListFetch.Provider value={{ list, fetchListUrl, setFetchListUrl }}>
      {children}
    </ListFetch.Provider>
  );
};

export default ListFetch;
