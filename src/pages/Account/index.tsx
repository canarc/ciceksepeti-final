import { Box, Button, Tab, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCookie } from '../../helpers/cookie';
import User from '../../assets/User.png';
import { CustomTabs } from '../Home/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux';
import { Offer } from '../../models/offerModel';
import GivenOffer from '../../components/Account/GivenOffer';
import ReceivedOffer from '../../components/Account/ReceivedOffer';

export default function Account() {
  const dispatch = useDispatch<Dispatch>();
  const [selectedTab, setSelectedTab] = useState('receivedOffers');
  const receivedOffers = useSelector<RootState, Offer[]>((state) => state.account.receivedOffers);
  const givenOffers = useSelector<RootState, Offer[]>((state) => state.account.givenOffers);

  useEffect(() => {
    dispatch.account.GetGivenOffers();
    dispatch.account.GetReceivedOffers();
  }, []);

  const renderGivenOffers = () => givenOffers.map((offer) => <GivenOffer offer={offer} />);
  const renderReceivedOffers = () => receivedOffers.map((offer) => <ReceivedOffer offer={offer} />);

  return (
    <>
      <Box minWidth="100%" maxWidth="148rem" bgcolor="white" height="7rem" borderRadius="0.8rem" display="flex" gap="1rem" alignItems="center" padding="1.6rem 2.6rem">
        <img style={{ height: '3.8rem', width: '3.8rem' }} src={User} alt="profilePic" />
        <Typography fontWeight="bold" variant="title1">
          {JSON.parse(getCookie('token') || '{}').email}
        </Typography>
      </Box>
      <Box marginTop="1rem" minHeight="70.9rem" maxHeight="100%" borderRadius="0.8rem" overflow="auto" bgcolor="white" padding="2rem 0" display="flex" flexDirection="column" gap="2rem">
        <CustomTabs
          scrollButtons={false}
          variant="scrollable"
          value={selectedTab}
          onChange={(_event, newValue) => {
            setSelectedTab(newValue);
          }}
        >
          <Tab sx={{ marginLeft: '3rem' }} value="receivedOffers" label="Teklif Aldıklarım" />
          <Tab value="givenOffers" label="Teklif Verdiklerim" />
        </CustomTabs>
        {selectedTab === 'givenOffers' ? renderGivenOffers() : renderReceivedOffers()}
      </Box>
    </>
  );
}
