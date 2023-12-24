import { Container, Input, Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import Types from "./Types";
import { TypeProvider } from "../../context/TypeContext";
import useListFetch from "../../hooks/useListFetch";

const Search = () => {
  const [input, setInput] = useState("");
  const { list, setList } = useListFetch();

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input !== "") {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${input}`
        );
        setList([
          {
            name: response.data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}/`,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container maxWidth={"container.sm"}>
      <Flex alignItems={"center"} wrap={"wrap"}>
        <Box as="span" margin={4}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Search"
              m="4"
              value={input}
              onChange={handleInput}
            />
          </form>
        </Box>
        <TypeProvider>
          <Types />
        </TypeProvider>
      </Flex>
    </Container>
  );
};

export default Search;
