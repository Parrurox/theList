import { createContext, useState } from "react";

import axios from "axios";

//start here
const watchContext = createContext(null);

const Provider = ({ children }) => {
  const [watch, setWatch] = useState([]);

  //fetch the data from the server at the start
  const fetchWatch = async () => {
    const { data } = await axios.get("http://localhost:3001/medias");
    setWatch(data);
  };

  //create a new media and add it to the list
  const createWatch = async (title) => {
    const response = await axios.post("http://localhost:3001/medias", {
      title,
    });

    const updatedWatch = [...watch, response.data];
    setWatch(updatedWatch);
  };

  //edit a media from the list
  const editWatchById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/medias/${id}`, {
      title: newTitle,
    });

    const editedWatch = watch.map((media) => {
      if (media.id === id) {
        return { ...media, ...response.data };
      }
      return media;
    });
    setWatch(editedWatch);
  };

  // delete a media from the list
  const deleteWatchById = async (id) => {
    await axios.delete(`http://localhost:3001/medias/${id}`);
    const deletedWatch = watch.filter((media) => {
      return media.id !== id;
    });
    setWatch(deletedWatch);
  };

  const valueToShare = {
    watch,
    fetchWatch,
    createWatch,
    editWatchById,
    deleteWatchById,
  };
  //render
  return (
    <watchContext.Provider value={valueToShare}>
      {children}
    </watchContext.Provider>
  );
};

export { Provider };
export default watchContext;
