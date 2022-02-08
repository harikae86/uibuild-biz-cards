import Card from "./components/Card";
const data = [
  {
    name: "John Freeman",
    restaurant: "PIZZA THIEF",
    address: "2610 NW Vaughn st, Portland,",
    address2: "OR 97210, United States",
  },
  {
    name: "Angela Sliders",
    restaurant: "MAX STEAKS",
    address: "3653 Germantown Ave, Philadelpia",
    address2: "PA 19140, United States",
  },
  {
    name: "Rita Lehigh",
    restaurant: "PIZZA RANCH",
    address: "1327 Main Str. Ste 6, Billings Heights",
    address2: "MT 59105, United States",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((item, i) => {
        return (
          <Card
            name={item.name}
            restaurant={item.restaurant}
            address={item.address}
            address2={item.address2}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default App;
