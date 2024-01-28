import { useState } from "react";

const WatchCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  // handle the form change event
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //handle submit event for the form
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onCreate(title);
    setTitle("");
  };

  // render a form with an input and a button
  return (
    <div className="book-create">
      <h3>Create a new Media</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create !</button>
      </form>
    </div>
  );
};

export default WatchCreate;
