import React, { useState } from "react";
import './App.css';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./sq.png";
function App() {
  
     const [text, setText] = useState("Unpuzzle the pieces!!");
      
    const set = () => {
        setText("Congratulations!!");
    };
      
    return (
        <>
            <h2 className="tag">{text}</h2>
            <div class="flex-container">
            <JigsawPuzzle
                imageSrc={img}
                rows={4}
                columns={4}
                onSolved={set}
                className="jigsaw-puzzle"
            />
            <div className="ori">
              
              <img src={img}   />
            </div>
            </div>
        </>
    );
 
}

export default App;
