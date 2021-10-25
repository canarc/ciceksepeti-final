import { Box, Divider, Typography } from '@mui/material';
import TextInput from '../../components/common/TextInput';
import Select from '../../components/common/SelectInput';

import { Container, InputContainer } from './styles';
import { CustomSwitch } from '../../components/common/SwitchInput/styles';
import { DarkButton } from '../../components/common/Button';
import ImageUpload from '../../components/common/ImageUpload/ImageUpload';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux';
import { Category, Product } from '../../models/productModel';
import { Brand, Color, Status } from '../../models/detailModel';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/Toast';

export default function AddProduct() {
  const dispatch = useDispatch<Dispatch>();

  const [image, setImage] = useState<string>();
  const categories = useSelector<RootState, Category[]>((state) => state.category.categories);
  const brands = useSelector<RootState, Brand[]>((state) => state.detail.brands);
  const colors = useSelector<RootState, Color[]>((state) => state.detail.colors);
  const statuses = useSelector<RootState, Status[]>((state) => state.detail.statuses);

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [brand, setBrand] = useState<string>();
  const [color, setColor] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [isOfferable, setIsOfferable] = useState(false);
  const [price, setPrice] = useState<string>();

  const onSubmit = async () => {
    const data = {
      price: +price!,
      imageUrl: image,
      title: name,
      status: statuses.find((_status) => _status.id === status),
      color: colors.find((_color) => _color.id === color),
      brand: brands.find((_brand) => _brand.id === brand),
      category: categories.find((_category) => _category.id === category),
      description,
      isOfferable,
    } as Product;

    const response = await dispatch.product.createProduct(data);
    if (response) {
      toast.success('Ürün başarıyla oluşturuldu', toastConfig);
    }
  };

  const isSubmitable = name && description && category && brand && color && status && price && image;

  return (
    <Container>
      <Box flex="1" padding="3rem" display="flex" flexDirection="column" gap="2.5rem">
        <Typography variant="title5">Ürün Detayları</Typography>
        <TextInput label="Urun Adı" placeholder="Örnek: iPhone 12 Pro Max" value={name} onChange={(e) => setName(e.target.value)} />
        <TextInput multiline rows={3} maxLength={500} label="Açıklama" placeholder="Ürün açıklaması girin." value={description} onChange={(e) => setDescription(e.target.value)} />
        <InputContainer>
          <Select options={categories} label="Kategori" placeholder="Kategori Seç" value={category} onChange={(e) => setCategory(e.target.value as string)} />
          <Select options={brands} label="Marka" placeholder="Marka Seç" value={brand} onChange={(e) => setBrand(e.target.value as string)} />
          <Select options={colors} label="Renk" placeholder="Renk Seç" value={color} onChange={(e) => setColor(e.target.value as string)} />
          <Select options={statuses} label="Kullanım Durumu" placeholder="Kullanım Durumu Seç" value={status} onChange={(e) => setStatus(e.target.value as string)} />
          <Box>
            <TextInput label="Fiyat" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" marginTop="2.5rem">
              <Typography variant="title6" color="3e3e3e">
                Fiyat ve teklif opsiyonu
              </Typography>
              <CustomSwitch value={isOfferable} onChange={(e, checked) => setIsOfferable(checked)} />
            </Box>
          </Box>
        </InputContainer>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box flex="1" display="flex" flexDirection="column" padding="3rem" gap="2.5rem">
        <Typography variant="title5">Ürün Görseli</Typography>
        {image ? (
          <Box position="relative" width="11.3rem" height="11.3rem">
            <div onClick={() => setImage(undefined)} style={{ width: '1.8rem', height: '1.8rem', borderRadius: '100%', textAlign: 'center', lineHeight: '1.8rem', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', backgroundColor: '#525252', position: 'absolute', right: '-0.5rem', top: '-0.5rem', cursor: 'pointer ' }}>
              x
            </div>
            <img style={{ width: '100%', height: '100%' }} src={image} alt="productImage" />
          </Box>
        ) : (
          <ImageUpload onUpload={(url) => setImage(url)} />
        )}
      </Box>
      <Box position="absolute" width="29rem" maxWidth="31.5rem" bottom="3rem" right="3rem">
        <DarkButton disabled={!isSubmitable} label="Kaydet" fullWidth onClick={onSubmit} />
      </Box>
    </Container>
  );
}
