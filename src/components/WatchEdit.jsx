import { useState } from "react";

const WatchEdit = ({ media, onSubmit }) => {
  const [title, setTitle] = useState(media.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(media.id, title);
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
