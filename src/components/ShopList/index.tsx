import React from 'react';
import {FlatList} from 'react-native';

// Components
import ShopListItem from './ShopListItem';

// Types
import type {ShopListItem as IShopListItem} from '../../screens/Home/types';

// Styles
import {styles} from './styles';

export interface ShopListProps {
  data: IShopListItem[];
  removeItem(position: number): void;
}

export default function ShopList({data, removeItem}: ShopListProps) {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={item => (
        <ShopListItem data={item} removeItem={removeItem} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
