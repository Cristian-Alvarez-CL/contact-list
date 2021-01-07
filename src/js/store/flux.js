const getState = ({ getStore, setStore }) => {
  return {
    store: {
      //Your data structures, A.K.A Entities
      character: [
        {
          full_name: null,
          email: null,
          address: null,
          phone: null,
        },
      ],
    },
    actions: {
      //(Arrow) Functions that update the Store
      // Remember to use the scope: scope.state.store & scope.setState()
      getCharacters: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ character: data }))
          .catch((error) => console.warn(error));
	  },
	  addCharacters: (url, options = {}) => {
        fetch(url, options)
          .then((resp) => resp.json())
          .then((data) => setStore({ character: data }))
          .catch((error) => console.warn(error));
      },
    },
  };
};

export default getState;
