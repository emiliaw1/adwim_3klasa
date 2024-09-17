import "./styles.css";
import {useState} from "react"; 

const zwierzaki = [
  {
      gatunek: 'kot', 
      imie: 'Agata', 
      wiek: 15
  },
  {
      gatunek: 'pszczoła',
      imie: 'Kuba',
      wiek: 13
  },
  {
      gatunek: 'pies',
      imie: 'Reksio',
      wiek: 3
  },
]
export default function App() {
const [active, setActive] = useState(null);
return (
  <ul>
  {zwierzaki.map((item, index) => (
    <li
    key={item.title}
    onClick={() => setActive(index)}
    className={index === active ? "active" : null}
    >
      <h1>{item.gatunek}</h1>
      <div className="content">{item.imie}, {item.wiek}</div>
      </li>
  ))}
    </ul>
  );
}
