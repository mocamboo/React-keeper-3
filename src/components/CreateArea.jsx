import React from "react";

function CreateArea(props) {
  const [inputItem, setInputItem] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputItem((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={inputItem.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={inputItem.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.toAdd(inputItem);
            setInputItem({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}>
          Add{" "}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
