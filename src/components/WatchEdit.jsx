import { useState } from "react";
import useWatchContext from "../hooks/use-Watch-Context";

const WatchEdit = ({ watch, onSubmit }) => {
  const [title, setTitle] = useState(watch.title);
  const { editWatchById } = useWatchContext();

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
