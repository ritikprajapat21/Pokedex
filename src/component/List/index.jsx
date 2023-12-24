import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "../Card";

import useListFetch from "../../hooks/useListFetch";

const List = ({ onOpen, setImageUrl, setUrl }) => {
  const { list } = useListFetch();

  return (
    <Box margin={10}>
      <SimpleGrid
        spacing={2}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {list?.map((pokemon) => {
          // Getting its number
          const result = pokemon.url.match(/pokemon\/(.*)\//);
          // Image URL
          const url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${result[1]}.svg`;
          // Returning a card
          return (
            <div
              onClick={() => {
                setImageUrl(url);
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
