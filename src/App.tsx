import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './components/common/MainLayout';
import { getCookie } from './helpers/cookie';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Dispatch, RootState } from './redux';
import Loading from './components/common/Loading';

function App() {
  const token = JSON.parse(getCookie('token') || '{}').token;
  const dispatch = useDispatch<Dispatch>();
  const isAppLoading = useSelector<RootState, boolean>((state) => state.loading.global);

  useEffect(() => {
    dispatch.category.GetAllCategories();
    dispatch.account.GetGivenOffers();
    dispatch.detail.GetAllDetails();
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
          <MainLayout />
        </Route>
      </Switch>
      <Loading show={isAppLoading}></Loading>
    </Router>
  );
}

export default App;
