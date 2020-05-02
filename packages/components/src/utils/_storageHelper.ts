import AsyncStorage from '@react-native-community/async-storage';

const getFromStorage = (key: string) => {
  return AsyncStorage.getItem(key);
};

const setToStorage = (key: string, data: any) => {
  AsyncStorage.setItem(key, data);
};

export { getFromStorage, setToStorage };
