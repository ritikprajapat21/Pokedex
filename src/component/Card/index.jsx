import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";

const PokemonCard = ({ name, url }) => {
  const newName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Card as={"span"} align={"center"} margin={3} maxWidth={80}>
      <CardBody mx={"auto"}>
        <Image src={url} height={40} alt={newName} />
        <Heading>{newName}</Heading>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
