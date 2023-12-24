import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Progress,
  Box,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PokemonModal = ({ isOpen, onClose, imageUrl, url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    try {
      const getData = async () => {
        console.log(url);
        const response = await axios(url);
        setPokemon(response.data);
      };
      getData();
    } catch (err) {
      console.error(err);
    }

    return setPokemon("");
  }, [url]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {pokemon?.name?.charAt(0)?.toUpperCase() + pokemon?.name?.slice(1)}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {pokemon?.stats?.map((stat, id) => {
            return (
              <Box key={id}>
                <Text>{stat.stat.name}</Text>
                <Progress
                  value={stat.base_stat}
                  aria-valuenow={stat.base_stat}
                />
              </Box>
            );
          })}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
