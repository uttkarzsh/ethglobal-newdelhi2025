import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscribeButton from "./SubscribeButton";
import FoxImage from "./FoxImage";

function App() {

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<SubscribeButton />} />
            <Route path="/fox" element={<FoxImage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
