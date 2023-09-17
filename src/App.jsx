import { Category } from "./components/Categories/Category";
import { Header } from "./components/Header/Header";
import { Item } from "./components/Preferential/Item";
import Hero from "./components/hero/Hero";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Item heading="Best Deals For You!" />
    </>
  ); 

}

export default App;
