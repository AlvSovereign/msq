const getFromStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

const setToStorage = (key: string, data: any) => {
  window.localStorage.setItem(key, data);
};

export { getFromStorage, setToStorage };
