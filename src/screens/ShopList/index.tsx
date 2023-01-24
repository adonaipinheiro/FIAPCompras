import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from '../../components/Header';

// Styles
import styles from './styles';

export default function ShopList() {
  const [product, setProduct] = useState<string>('');
  const [productsList, setProductsList] = useState<string[]>([]);

  function verifyProduct() {
    if (product === '') {
      Alert.alert('Atenção', 'Produto não pode ser vazio');
    } else if (productsList.includes(product)) {
      Alert.alert('Atenção', 'Produto já cadastrado');
    } else {
      setProductsList(oldProductsList => [...oldProductsList, product]);
    }
  }

  function addItem() {
    verifyProduct();
  }

  return (
    <SafeAreaView>
      <Header value={product} onChange={setProduct} addItem={addItem} />
      <FlatList
        data={productsList}
        renderItem={({item}) => (
          <Text onLongPress={() => Alert.alert('Atenção', 'Excluir item')}>
            {item}
          </Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
