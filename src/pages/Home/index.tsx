import { Tab } from '@mui/material';
import BannerImage from '../../assets/Home/Banner.png';
import { Banner, CustomTabs } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useHistory, useParams } from 'react-router';
import ProductsGrid from '../../components/Home/ProductsGrid';

const Home = () => {
  const categories = useSelector((state: RootState) => state.category.categories);
  const history = useHistory();

  const { categoryId } = useParams<{ categoryId: string }>();

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
