import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
