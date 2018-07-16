
import axios from '~/plugins/axios'
export const state = () => ({
	countries : []
});
export const mutations = {
	setData(state, items){
		state.countries = items
	}
}
export const actions = {
	async nuxtServerInit ({commit}){
		const res = await axios.get('country');
		commit('setData', res.data)
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

// export default pokeStore
