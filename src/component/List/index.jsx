import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Card from "../Card";

import useListFetch from "../../hooks/useListFetch";
import axios from "axios";

const List = ({ onOpen, setUrl }) => {
  const { list, setList, url, setPokemonUrl } = useListFetch();

  const fetchData = async () => {
    console.log(url);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      const result = response.data.results;
      setList((prev) => {
        return [...prev, ...result];
      });
      console.log("Next url", response.data.next);
      setPokemonUrl(response.data.next);
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
  }, [handleScroll]);

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
      <Box>
        <Button>Previous Page</Button>
        <Button>Next Page</Button>
      </Box>
    </Box>
  );
};

export default List;
