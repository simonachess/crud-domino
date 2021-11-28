
import './App.css';
import Header from './components/Header';
import Create from './components/Create';

function App() {
  return (
    <div className="App col top domino">
      <div className="domino__wrap">
        <Header></Header>
        <Create></Create>
      </div>
    </div>
  );
}

export default App;
