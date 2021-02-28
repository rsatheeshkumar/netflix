import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import TabContent1 from "./components/tab-content1";
import TabContent2 from "./components/tab-content2";
import TabContent3 from "./components/tab-content3";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const onUpdateTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <Header onUpdateTab={onUpdateTab} activeTab={activeTab} />
      <section className="tab-container">
        <div className="container">
          {activeTab === 1 && <TabContent1 />}
          {activeTab === 2 && <TabContent2 />}
          {activeTab === 3 && <TabContent3 />}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
