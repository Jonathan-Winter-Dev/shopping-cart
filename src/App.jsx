import "./App.css";
import useProductData from "./hooks/fetchProductData";

function App() {
  console.log(useProductData());

  return <h1>Hello World</h1>;
}

export default App;
