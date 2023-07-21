import "./styles.css";
import { useState } from "react";
import FlashCards from "./FlashCards"
import ConditionalSelect from "./ConditionalSelect"
import DateCounter from "./DateCounter"
import TextExpanderApp from "./TextExpander";

export default function App() {
  return (
    <div className="App">
      {/* <FlashCards />
      <hr></hr>
      <ConditionalSelect />
      <hr></hr> */}
      {/* <DateCounter /> */}
      <TextExpanderApp />
    </div>
  );
}