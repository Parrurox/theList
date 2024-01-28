import { useState } from "react";
import WatchEdit from "./WatchEdit";

//function starts here
const WatchShow = ({ media, onDelete, onEdit }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  //handle delete click
  const handleDelClick = () => {
    onDelete(media.id);
    // console.log("delete clicked");
  };

  //handle edit click
  const handleEditClick = () => {
    setShowEditForm(!showEditForm);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEditForm(false);
    onEdit(id, newTitle);
  };

  //render edit form or title
  let content = <h3>{media.title}</h3>;
  if (showEditForm) {
    content = <WatchEdit onSubmit={handleSubmit} media={media} />;
  }

  // render
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${media.id}/480`} alt="films" />
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
