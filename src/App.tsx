import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeLayout from './components/common/HomeLayout';
import { getCookie } from './helpers/cookie';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Dispatch } from './redux';

function App() {
  const token = getCookie('token');
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.category.GetAllCategories();
    dispatch.product.GetAllProducts();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/signUp">{token ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route path="/signIn">{token ? <Redirect to="/" /> : <SignIn />}</Route>
        <Route path="/forgotPassword">
          <Redirect to="/signIn" />
        </Route>
        <Route path="/">
          <HomeLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
