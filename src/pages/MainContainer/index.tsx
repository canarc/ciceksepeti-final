import Header from '../../components/Header';
import Container from '../../components/Container';
import { Route, Switch, useRouteMatch } from 'react-router';
import Home from '../Home';

const MainContainer = () => {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path={path}>
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default MainContainer;
