import React from 'react';
import {SafeAreaView} from 'react-native';

// Components
import Header from '../../components/Header';
import ShopList from '../../components/ShopList';

// Hooks
import useHome from './hooks/useHome';

export default function Home() {
  const {addItem, confirmRemoveAlert, product, setProduct, productsList} =
    useHome();

  return (
    <SafeAreaView>
      <Header value={product} onChange={setProduct} addItem={addItem} />
      <ShopList data={productsList} removeItem={confirmRemoveAlert} />
    </SafeAreaView>
  );
}
