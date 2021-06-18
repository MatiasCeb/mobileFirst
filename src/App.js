import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainExchange from './components/MainExchange';
import MainProductDetail from "./components/MainProductDetail";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <MainExchange/>
        <MainProductDetail/>
        <section></section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
