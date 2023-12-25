import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const ListFetch = createContext({});

export const ListFetchProvider = ({ children }) => {
  const [fetchListUrl, setFetchListUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25"
  );

  const [url, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=25&limit=25"
  );

  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      const fetchList = async () => {
        const response = await axios.get(fetchListUrl);
        const result = response.data?.pokemon?.map((p) => {
          return { ...p.pokemon };
        });
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
        setList(response.data.results);
      };
      fetchList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ListFetch.Provider
      value={{
        list,
        setList,
        url,
        setPokemonUrl,
        fetchListUrl,
        setFetchListUrl,
      }}
    >
      {children}
    </ListFetch.Provider>
  );
};

export default ListFetch;
