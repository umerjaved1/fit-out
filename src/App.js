import "./App.css";
import Header from "./components/Header/Header";
import RequestRefund from "./components/RequestRefund/RequestRefund";
import TopupCard from "./components/Topup Card/TopupCard";

function App() {
  return (
    <div className="app">
      <Header />
      <TopupCard />
      <br/>
      <br/>
      <br/>
      <Header/>
      <RequestRefund />
    </div>
  );
}

export default App;
