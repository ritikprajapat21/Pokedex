import { Container, Input, Flex } from "@chakra-ui/react";
import React from "react";
import Types from "./Types";
import { TypeProvider } from "../../context/TypeContext";

const index = () => {
  return (
    <Container maxWidth={"container.sm"}>
      <Flex alignItems={"center"}>
        <Input placeholder="Search" m="4" />
        <TypeProvider>
          <Types />
        </TypeProvider>
      </Flex>
    </Container>
  );
};

export default index;
