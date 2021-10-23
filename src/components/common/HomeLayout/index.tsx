import Header from '../Header';
import Container from '../Container';
import { Route, Switch, useRouteMatch } from 'react-router';
import Home from '../../../pages/Home';
import ProductDetail from '../../../pages/ProductDetail';

const HomeLayout = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path={`/productDetail/:productId`}>
            <ProductDetail />
          </Route>
          <Route path={`/:categoryId?`}>
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default HomeLayout;
