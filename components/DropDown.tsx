import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FormContext from '../context/FormContext';
import useInput from '../hooks/useInput';
import theme from '../styles/theme';
import Back from './Back';

function DropDown() {
  const {phoneCodeChange} = useContext(FormContext);
  const navigation = useNavigation();
  const initialState: any = useRoute().params;
  const [data, setData] = useState<any[]>([]);
  const [search, changeInput] = useInput<string>('');
  useEffect(() => {
    setData(initialState);
  }, []);
  const selectPhoneCode = (item: {name: string; code: string}) => {
    phoneCodeChange(item.code);
    navigation.goBack();
  };
  const searchHandler = (text: string) => {
    changeInput(text);
    const filteredData: any[] = [];
    initialState.forEach((item: any) => {
      if (item.name.includes(text) || item.code.includes(text))
        filteredData.push(item);
    });

    setData(filteredData);
  };
  const renderItems = ({item}: any) => (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => selectPhoneCode(item)}>
      <Text style={[styles.text, {fontWeight: '300'}]}>{item.name}</Text>
      <Text style={[styles.text, {fontWeight: '500'}]}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Back />
        <TextInput
          placeholderTextColor={theme.colors.dark_accent}
          placeholder="Search"
          style={styles.textInput}
          value={search}
          onChangeText={searchHandler}></TextInput>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
  },
  headerContainer: {
    padding: 16,
    paddingTop: 32,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.extra_dark,
  },
  textInput: {
    backgroundColor: theme.colors.extra_dark,
    padding: 8,
    borderRadius: 4,
    marginVertical: 4,
  },
  listContainer: {
    height: '100%',
    backgroundColor: theme.colors.dark,
  },
  touchableContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    padding: 14,
    paddingLeft: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.light_accent,
  },
  text: {
    fontSize: 17,
    color: theme.colors.light,
  },
});
export default DropDown;
