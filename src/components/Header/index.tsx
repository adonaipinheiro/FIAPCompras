import React from 'react';
import {StatusBar, Text, TextInput, View, TouchableOpacity} from 'react-native';

// Styles
import {styles} from './styles';

interface HeaderProps {
  addItem(): void;
  value: string;
  onChange(text: string): void;
}

export default function Header({addItem, onChange, value}: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor={'#00000030'} />
      <View style={styles.container}>
        <TextInput
          numberOfLines={1}
          value={value}
          onChangeText={onChange}
          style={styles.textInput}
          placeholder="Nome do item"
        />
        <TouchableOpacity
          onPress={addItem}
          activeOpacity={0.7}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
