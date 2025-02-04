import { useState } from "react";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["NY", "SF", "TOKYO", "London", "meow"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
