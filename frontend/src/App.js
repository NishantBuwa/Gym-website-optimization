import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="h-max max-w-[2600px]">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
