import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header'

function App() {
  return (
      <div className="h-max max-w-[2600px]">
        <Header />
        <Home />
    </div>
  );
}

export default App;
