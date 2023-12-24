import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useTypes from "../../../hooks/useTypes";
import useListFetch from "../../../hooks/useListFetch";

const Types = () => {
  const { types } = useTypes();
  const { setFetchListUrl } = useListFetch();

  return (
    <Menu>
      <MenuButton width={190} as={Button} rightIcon={<ChevronDownIcon />}>
        Type
      </MenuButton>
      <MenuList>
        {types.map((type, id) => {
          return (
            <MenuItem
              key={id}
              minH={"48px"}
              onClick={() => {
                setFetchListUrl(type.url);
              }}
            >
              <span>{type.name}</span>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Types;
