import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import ConfigRoute from './ConfigRoute';
import Header from './components/Header/index';

function App() {
  return (
    <Router>
        <Header />
        <ConfigRoute />
    </Router>
  );
}

export default App;
