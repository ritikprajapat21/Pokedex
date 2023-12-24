import "./App.css";
import { useDisclosure } from "@chakra-ui/react";

import Search from "./component/Search";
import List from "./component/List";
import Modal from "./component/Modal";
import { useState } from "react";
import { ListFetchProvider } from "./context/ListFetch";
import { TypeProvider } from "./context/TypeContext";

function App() {
  const [url, setUrl] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main>
      <ListFetchProvider>
        <TypeProvider>
          <Search />
        </TypeProvider>
        <List onOpen={onOpen} setUrl={setUrl} />
      </ListFetchProvider>
      <Modal isOpen={isOpen} onClose={onClose} url={url} />
    </main>
  );
}

export default App;
