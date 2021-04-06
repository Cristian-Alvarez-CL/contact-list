const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agendas: [],
			fullName: "",
			email: "",
			phone: "",
			address: "",
			id: ""
		},
		actions: {
			getAgendas: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({
					agendas: data
				});
			},
			getUpdate: contacto => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contacto, {
					method: "PUT",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "CAP",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getDelete: id => {
				console.log(id);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getContactos: datos => {
				setStore({
					fullName: datos.full_name,
					email: datos.email,
					phone: datos.phone,
					address: datos.address
				});
			},

			getName: newdata => {
				const data = newdata;
				setStore({
					fullName: data
				});
			},
			getEmail: newdata => {
				setStore({
					email: newdata
				});
			},
			getPhone: newdata => {
				setStore({
					phone: newdata
				});
			},
			getAddress: newdata => {
				setStore({
					address: newdata
				});
			},
			getId: newdata => {
				setStore({
					id: newdata
				});
			},
			getNewContact: () => {
				const store = getStore(History);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "CAP",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
