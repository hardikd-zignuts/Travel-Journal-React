import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  let myCards = data.map((item) => {
    return (
      <Card key={item.imageUrl} {...item} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4 ">
        {myCards}
      </div>
    </div>
  );
}

export default App;
