import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import ConfigRoute from './ConfigRoute';

function App() {
  return (
    <Router>
        <ConfigRoute />
    </Router>
  );
}

export default App;
