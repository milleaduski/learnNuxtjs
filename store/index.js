
// Modules  mode
import axios from '~/plugins/axios'
export const state = () => ({
	pokemons : []
});
export const mutations = {
	setPokemons(state, items){
		state.pokemons = items
	}
}
export const actions = {
	async nuxtServerInit ({commit}){
		const {data} = await axios.get('pokemon')
		commit('setPokemons', data.results)
	}
}

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