import { Tab } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

  const [selectedTab, setSelectedTab] = useState<string>(categoryId);

  useEffect(() => {
    if (!categoryId || !categories.find((category) => category.id === categoryId)) setSelectedTab(categories[0]?.id);
  }, [categories, categoryId]);

  return (
    <>
      <Banner src={BannerImage} />
      <CustomTabs
        scrollButtons={false}
        variant="scrollable"
        value={selectedTab}
        onChange={(_event, newValue) => {
          history.push(`/${newValue}`);
          setSelectedTab(newValue);
        }}
      >
        {categories.map((category) => (
          <Tab key={category.id} value={category.id} label={category.title} />
        ))}
      </CustomTabs>
      <ProductsGrid selectedCategoryId={selectedTab} />
    </>
  );
};

export default Home;
