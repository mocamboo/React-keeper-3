import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Items, setItems] = React.useState([]);

  function addItem(itemToAdd) {
    setItems((prev) => {
      return [...prev, itemToAdd];
    });
  }
  function deleteItem(id_of_temToDelete) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id_of_temToDelete;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea toAdd={addItem} />
      {Items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            toDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
