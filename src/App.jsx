import { Category } from "./components/Categories/Category";
import { Header } from "./components/Header/Header";
import { Product } from "./components/Preferential/Product";
import Hero from "./components/hero/Hero";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Product />
    </>
  ); 

}

export default App;
