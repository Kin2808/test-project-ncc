import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div>
        <SideBar />
      </div>
      <div className="page">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
