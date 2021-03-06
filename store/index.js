
import axios from '~/plugins/axios'
export const state = () => ({
	countries : []
});
export const mutations = {
	setData(state, items){
		state.countries = items
	},
	addData(state, item){
		state.countries.push(item);
	},
	deleted(state, id){
		const target = state.countries.findIndex(p=> p.id === id)
		state.countries.splice(target, 1)
	},
	updateChange(state, data){
		const target = state.countries.find(p=> p.id === data.id)
		target.name = data.name
		target.city = data.city
	}
}
export const actions = {
	async nuxtServerInit ({commit}){
		const res = await axios.get('country');
		commit('setData', res.data)
	},
	async added ({commit}, data){
		const res = await axios.post('country',{name:data.country, city:data.city});
		commit('addData', res.data)
	},
	async deleteData ({commit}, id){
		const res = await axios.delete('country/'+id);
		commit('deleted', id)
	},
	async updateData ({commit}, data){
		const res = await axios.put('country/'+data.id, {name: data.name, city:data.city});
		commit('updateChange',data)
	}
}

// Modules  mode
// import axios from '~/plugins/axios'
// export const state = () => ({
// 	items : []
// });
// export const mutations = {
// 	setItems(state, items){
// 		state.items = items
// 	}
// }
// export const actions = {
// 	async load_items ({commit}, url){
// 		const {data} = await axios.get(url)
// 		commit('setItems', data)
// 	}
// }

// Clasicc Mode
// import axios from '~/plugins/axios'
// import Vuex from 'vuex'

// const pokeStore = () => {
//   return new Vuex.Store({
//     state: {
//       pokemons: []
//     },
//     mutations: {
//       setPokemons (state, items) {
//         state.pokemons = items
//       }
//     },
//     actions:{
//     	async nuxtServerInit ({commit}){
// 		const {data} = await axios.get('pokemon')
// 		commit('setPokemons', data.results)
// 		}	
//     }
//   })
// }


