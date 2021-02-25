import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TabContent1 from "./components/tab-content1";
import TabContent2 from "./components/tab-content2";
import TabContent3 from "./components/tab-content3";

function App() {
  return (
    <div>
      <Header />
      <section className="tab-container">
        <div className="container">
          <TabContent1 />
          <TabContent2 />
          <TabContent3 />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
