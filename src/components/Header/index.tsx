import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    height: 60,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000010',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    flex: 1,
    borderRadius: 4,
    shadowColor: '#00000050',
    shadowOffset: {width: -2.5, height: 2.5},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    width: 40,
    height: 40,
    marginLeft: 20,
    backgroundColor: '#0066CC',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
