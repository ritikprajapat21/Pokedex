import { useContext } from "react";
import ListFetch from "../context/ListFetch";

export default () => {
  return useContext(ListFetch);
};
