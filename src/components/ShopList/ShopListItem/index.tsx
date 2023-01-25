import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// Types
import type {ShopListProps} from '..';
import type {ShopListItem} from '../../../screens/Home/types';

// Styles
import {styles} from './styles';

interface ShopListItemProps extends Omit<ShopListProps, 'data'> {
  data: {
    item: ShopListItem;
    index: number;
  };
}

export default function ShopListItem({
  data,
  removeItem,
}: ShopListItemProps) {
  return (
    <TouchableOpacity
      onLongPress={() => removeItem(data.index)}
      style={styles.container}>
      <Text style={styles.text}>{data.item}</Text>
    </TouchableOpacity>
  );
}
