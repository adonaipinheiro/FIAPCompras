import {useState} from 'react';
import {Alert} from 'react-native';

// Types
import type {ShopListItem} from '../types';

export default function useHome() {
  const [product, setProduct] = useState<ShopListItem>('');
  const [productsList, setProductsList] = useState<ShopListItem[]>([]);

  function verifyProduct() {
    if (product === '') {
      Alert.alert('Atenção', 'Produto não pode ser vazio');
    } else if (productsList.includes(product)) {
      Alert.alert('Atenção', 'Produto já cadastrado');
    } else {
      setProductsList(oldProductsList => [...oldProductsList, product]);
    }
  }

  function confirmRemoveAlert(position: number) {
    Alert.alert('Atenção', 'Você realmente deseja remover este produto?', [
      {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
      {
        text: 'Remover',
        onPress: () => removeItem(position),
        style: 'destructive',
      },
    ]);
  }

  function addItem() {
    verifyProduct();
  }

  function removeItem(position: number) {
    let auxArray = productsList;
    auxArray.splice(position, 1);
    setProductsList([...auxArray]);
  }

  return {
    addItem,
    setProduct,
    product,
    confirmRemoveAlert,
    productsList,
  };
}
