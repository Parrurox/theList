import { useState, useContext } from "react";
import watchContext from "../context/watch";

const WatchEdit = ({ watch, onSubmit }) => {
  const [title, setTitle] = useState(watch.title);
  const { editWatchById } = useContext(watchContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit();
    editWatchById(watch.id, title);
  };

  // render
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">save</button>
      </form>
    </div>
  );
};

export default WatchEdit;
