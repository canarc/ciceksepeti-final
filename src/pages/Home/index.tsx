import { Tab } from '@mui/material';
import BannerImage from '../../assets/Home/Banner.png';
import { Banner, CustomTabs } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux';
import { useHistory, useParams } from 'react-router';
import ProductsGrid from '../../components/Home/ProductsGrid';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch<Dispatch>();
  const categories = useSelector((state: RootState) => state.category.categories);
  const history = useHistory();
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    dispatch.product.GetAllProducts();
    dispatch.account.GetGivenOffers();
  }, []);

  return (
    <>
      <Banner src={BannerImage} />
      {categories && (
        <>
          <CustomTabs
            scrollButtons={false}
            variant="scrollable"
            value={categoryId || categories[0]?.id}
            onChange={(_event, newValue) => {
              history.push(`/${newValue}`);
            }}
          >
            {categories.map((category) => (
              <Tab key={category.id} value={category.id} label={category.title} />
            ))}
          </CustomTabs>
          <ProductsGrid selectedCategoryId={categoryId || categories[0]?.id} />
        </>
      )}
    </>
  );
};

export default Home;
