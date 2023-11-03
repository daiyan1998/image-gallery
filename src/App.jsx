import { DndContext, useDraggable } from "@dnd-kit/core";
import "./App.css";
import Draggable from "./components/Draggable";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1682687218982-6c508299e107?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1698256729051-25bd33cca02e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1505211903548-bcbdfae1a1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1536553859107-fc180c4ad6ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1512547782667-4786bfbd0754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1597060330071-69c1ac998254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1606277354356-e8b73c62082c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60",
  // "https://images.unsplash.com/photo-1507889755798-84f75bd07d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  // "https://images.unsplash.com/photo-1497178398528-7ff4a4bad7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN1bnSldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
];

function App() {
  const [isDropped, setIsDropped] = useState();

  const handleDragEnd = (event) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  return (
    <>
      <section className="box-container w-[1400px] m-auto">
        <DndContext onDragEnd={handleDragEnd}>
          <Draggable>
            {images.map((image) => (
              <div className="box" key={image}>
                <img className="w-full h-full object-cover" src={image} />
              </div>
            ))}
          </Draggable>
        </DndContext>
      </section>
    </>
  );
}

export default App;
