import { useState, useContext } from "react";
import watchContext from "../context/watch";
import WatchEdit from "./WatchEdit";

//function starts here
const WatchShow = ({ watch }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const { deleteWatchById } = useContext(watchContext);

  //handle delete click
  const handleDelClick = () => {
    deleteWatchById(watch.id);
    // console.log("delete clicked");
  };

  //handle edit click
  const handleEditClick = () => {
    setShowEditForm(!showEditForm);
  };

  const handleSubmit = () => {
    setShowEditForm(false);
  };

  //render edit form or title
  let content = <h3>{watch.title}</h3>;
  if (showEditForm) {
    content = <WatchEdit onSubmit={handleSubmit} watch={watch} />;
  }

  // render
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${watch.id}/480`} alt="films" />
      <div>{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDelClick}>
          delete
        </button>
      </div>
    </div>
  );
};

export default WatchShow;
