
import "./styles.css";
import { useState } from "react";

const countries = [
    { name: "India", value: "IN", cities: ["Kanpur", "Delhi"] },
    { name: "Usa", value: "US", cities: ["New York", "California"] },
    { name: "France", value: "FR", cities: ["Paris"] }
  ];
  
export default function ConditionalSelect() {
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
  