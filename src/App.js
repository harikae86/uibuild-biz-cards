import Card from "./components/Card";
const data = [
  {
    name: "Gipsz Jakab",
    restaurant: "Restaurant",
    address: "sadikghsdfghp",
  },
  {
    name: "Gipsz Jakab",
    restaurant: "Restaurant",
    address: "sadikghsdfghp",
  },
  {
    name: "Gipsz Jakab",
    restaurant: "Restaurant",
    address: "sadikghsdfghp",
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
            key={i}
          />
        );
      })}
    </div>
  );
}

export default App;
