const storageSession = {
    getItem: (key) => {
      return Promise.resolve(sessionStorage.getItem(key));
    },
    setItem: (key, value) => {
      return Promise.resolve(sessionStorage.setItem(key, value));
    },
    removeItem: (key) => {
      return Promise.resolve(sessionStorage.removeItem(key));
    },
  };
  
  export default storageSession;
  