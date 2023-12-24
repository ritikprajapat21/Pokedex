import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useListFetch from "../../../hooks/useListFetch";
import useTypes from "../../../hooks/useTypes";

const Types = () => {
  const { types } = useTypes();
  const { setFetchListUrl } = useListFetch();

  return (
    <Menu maxW={20}>
      <MenuButton width={190} as={Button} rightIcon={<ChevronDownIcon />}>
        Type
      </MenuButton>
      <MenuList>
        {types.map((type, id) => {
          const name = type.name.charAt(0).toUpperCase() + type.name.slice(1);
          return (
            <MenuItem
              key={id}
              minH={"48px"}
              onClick={() => {
                setFetchListUrl(type.url);
              }}
            >
              <span>{name}</span>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Types;
