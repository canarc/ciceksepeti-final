import Header from '../Header';
import Container from '../Container';
import { Route, Switch } from 'react-router';
import Home from '../../../pages/Home';
import ProductDetail from '../../../pages/ProductDetail';
import Account from '../../../pages/Account';
import AddProduct from '../../../pages/AddProduct';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path={`/account`}>
            <Account />
          </Route>
          <Route path={`/productDetail/:productId`}>
            <ProductDetail />
          </Route>
          <Route path={`/addProduct`}>
            <AddProduct />
          </Route>
          <Route path={`/:categoryId?`}>
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default MainLayout;
