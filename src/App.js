import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [isSelected,setSelected] = useState(null)
  function handleClick(selectedId){
    setSelected(selectedId === isSelected ? null : selectedId)
  }
  return (
    <div className="flashcards">
      {questions.map((elem) => {
        const selectField = isSelected === elem.id;
        return (
          <div key={elem.id} onClick={() => handleClick(elem.id)} className={selectField ? "selected":""}>
            <p >{selectField ? elem.answer : elem.question}</p>
          </div>
        )
    })}
    <ConditionalSlider  />
    </div>
  );
}




const countries = [
  { name: "India", value: "IN", cities: ["Kanpur", "Delhi"] },
  { name: "Usa", value: "US", cities: ["New York", "California"] },
  { name: "France", value: "FR", cities: ["Paris"] }
];

function ConditionalSlider() {
  const [country, setCountry] = useState("");
  return (
    <div className="App">
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Choose...</option>
        {countries.map((item) => <option value={item.name}>{item.name}</option> )}
      </select>

      {country && (
        <select>
          {countries
            .filter((item) => item.name === country)
            .flatMap((item) => {
              return item.cities.map((city) => (
                <option value={city}>{city}</option>
              ));
            })}
        </select>
      )}
    </div>
  );
}
