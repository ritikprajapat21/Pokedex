import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../Card";

import useListFetch from "../../hooks/useListFetch";
import axios from "axios";

const List = ({ onOpen, setUrl }) => {
  const { list, setList } = useListFetch();

  const [count, setCount] = useState(25);

  const fetchData = async () => {
    console.log("fetching");
    console.log(count);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${count}`
      );
      const result = response.data.results;
      setList((prev) => {
        return [...prev, ...result];
      });
      setCount((prev) => prev + 25);
    } catch (err) {
      console.error(err);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      0.75 * document.documentElement.offsetHeight
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box margin={10}>
      <SimpleGrid
        spacing={2}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {list.map((pokemon) => {
          // Getting its number
          const result = pokemon.url.match(/pokemon\/(.*)\//);
          // Image URL
          const url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${result[1]}.svg`;
          // Returning a card
          return (
            <div
              onClick={() => {
                setUrl(pokemon.url.toString());
                onOpen();
              }}
              key={result[1]}
            >
              <Card
                variant={"elevated"}
                name={pokemon.name}
                url={url}
                key={result[1]}
              />
            </div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default List;
