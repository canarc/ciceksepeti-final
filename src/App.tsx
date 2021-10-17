import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from './pages/MainContainer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
