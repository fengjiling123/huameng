import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import {Indicator} from 'mint-ui'
const store=new Vuex.Store({
	state:{
		index:null,
		allartists:null,
		account:null,
		commonds:null,
		chuArtists:null,
		projects:null,
		newworks:null,
		yesterday:[],
		sevenday:[],
		designs:null,
		collects:null,
		events:null,
		qqun:null,
		workdetail:null,
		projectsdetail:null,
		accounts_works:null,
		collects_detail:null,
		search_work:null,
		search_design:null
	},
	getters:{
		indexprojects(){
			return store.state.index?store.state.index.projects:[]
		},
		indexeancktop6(){
			return store.state.index?store.state.index.rankTop6:[]
		},
		indexdesigis(){
			return store.state.index?store.state.index.designs:[]
		},
		indexartists(){
			return store.state.index?store.state.index.artists:[]
		},
		artistdata(){
			return store.state.allartists?store.state.allartists.data:[]
		},
		artistpage(){
			return store.state.allartists?store.state.allartists.page:''
		},
		artisttotalpage(){
			return store.state.allartists?store.state.allartists.totalPage:''
		},
		commondsdata(){
			return store.state.commonds?store.state.commonds.data:[]
		},
		commondspage(){
			return store.state.commonds?store.state.commonds.page:''
		},
		commondstotalpage(){
			return store.state.commonds?store.state.commonds.totalPage:''
		},
		chuArtistsdata(){
			return store.state.chuArtists?store.state.chuArtists.data:[]
		},
		chuArtistspage(){
			return store.state.chuArtists?store.state.chuArtists.page:''
		},
		chuArtiststotalpage(){
			return store.state.chuArtists?store.state.chuArtists.totalPage:''
		},
		projectsdata(){
			return store.state.projects?store.state.projects.data:[]
		},
		projectspage(){
			return store.state.projects?store.state.projects.page:''
		},
		projectstotalpage(){
			return store.state.projects?store.state.projects.totalPage:''
		},
		newworksdata(){
			return store.state.newworks?store.state.newworks.data:[]
		},
		newworkspage(){
			return store.state.newworks?store.state.newworks.page:''
		},
		newworkstotalpage(){
			return store.state.newworks?store.state.newworks.totalPage:''
		},
		designsdata(){
			return store.state.designs?store.state.designs.data:[]
		},
		designspage(){
			return store.state.designs?store.state.designs.page:''
		},
		designstotalpage(){
			return store.state.designs?store.state.designs.totalPage:''
		},
		collectsdata(){
			return store.state.collects?store.state.collects.data:[]
		},
		collectspage(){
			return store.state.collects?store.state.collects.page:''
		},
		collectstotalpage(){
			return store.state.collects?store.state.collects.totalPage:''
		},
		eventsdata(){
			return store.state.events?store.state.events.data:[]
		},
		eventspage(){
			return store.state.events?store.state.events.page:''
		},
		eventstotalpage(){
			return store.state.events?store.state.events.totalPage:''
		},
		accounts_worksdata(){
			return store.state.accounts_works?store.state.accounts_works.data:[]
		},
		accounts_workspage(){
			return store.state.accounts_works?store.state.accounts_works.page:''
		},
		accounts_workstotalpage(){
			return store.state.accounts_works?store.state.accounts_works.totalPage:''
		},
		search_workdata(){
			return store.state.search_work?store.state.search_work.data:[]
		},
		search_workpage(){
			return store.state.search_work?store.state.search_work.page:''
		},
		search_worktotalpage(){
			return store.state.search_work?store.state.search_work.totalPage:''
		},
		search_designdata(){
			return store.state.search_design?store.state.search_design.data:[]
		},
		search_designpage(){
			return store.state.search_design?store.state.search_design.page:''
		},
		search_designtotalpage(){
			return store.state.search_design?store.state.search_design.totalPage:''
		}


	},
	actions:{
		banner(state,payload){

			axios.get(payload).then(res=>{
				//console.log(res.data)
				
			})
		},

		index(state,payload){
			axios.get(payload).then(res=>{
				//console.log(res)
				//console.log('index')
				store.commit('index',res.data)
				
			})
		},
		allartists(state,payload){
			axios.get(payload).then(res=>{
				//console.log('artists')
				//console.log(res)
				store.commit('allartists',res.data)
			})
		},
		account(state,payload){
			axios.get(payload).then(res=>{
				store.commit('account',res.data)
			})
		},
		commonds(state,payload){
			axios.get(payload).then(res=>{
				store.commit("commonds",res.data)
			})
		},
		chuArtists(state,payload){
			axios.get(payload).then(res=>{
				store.commit('chuArtists',res.data)
			})
		},
		projects(state,payload){
			axios.get(payload).then(res=>{
				store.commit('projects',res.data)
			})
		},
		newworks(state,payload){
			axios.get(payload).then(res=>{
				store.commit("newworks",res.data)
			})
		},
		yesterday(state,payload){
			axios.get(payload).then(res=>{
				store.commit('yesterday',res.data)
			})
		},
		sevenday(state,payload){
			axios.get(payload).then(res=>{
				store.commit('sevenday',res.data)
			})
		},
		designs(state,payload){
			axios.get(payload).then(res=>{
				store.commit('designs',res.data)
			})
		},
		collects(state,payload){
			axios.get(payload).then(res=>{
				store.commit('collects',res.data)
			})
		},
		events(state,payload){
			axios.get(payload).then(res=>{
				store.commit('events',res.data)
			})
		},
		qqun(state,payload){
			axios.get(payload).then(res=>{
				store.commit("qqun",res.data)
			})
		},
		workdetail(state,payload){
			axios.get(payload).then(res=>{
				store.commit('workdetail',res.data)
			})
		},
		projectsdetail(state,payload){
			axios.get(payload).then(res=>{
				store.commit('projectsdetail',res.data)
			})
		},
		accounts_works(state,payload){

			axios.get(payload).then(res=>{
				store.commit("accounts_works",res.data)
			})
		},
		collects_detail(state,payload){
			axios.get(payload).then(res=>{
				store.commit('collects_detail',res.data)
			})
		},
		search_work(state,payload){
			axios.get(payload).then(res=>{
				store.commit("search_work",res.data)
			})
		},
		search_design(state,payload){
			axios.get(payload).then(res=>{
				store.commit("search_design",res.data)
			})
		}
	},
	mutations:{
		index(state,payload){
			state.index=payload
			//console.log(state.index)
			Indicator.close()
			
		},
		allartists(state,payload){
			state.allartists=payload
			//console.log(state.allartists)
			Indicator.close()
			scrollTo(0,0)
		},
		account(state,payload){
			state.account=payload
			console.log(payload)
		},
		commonds(state,payload){
			state.commonds=payload
			//console.log(state.commonds)
			Indicator.close()
			scrollTo(0,0)
		},
		chuArtists(state,payload){
			state.chuArtists=payload
			//console.log(state.chuArtists)
			Indicator.close()
			scrollTo(0,0)
		},
		projects(state,payload){
			state.projects=payload
			//console.log(state.projects)
			Indicator.close()
			scrollTo(0,0)
		},
		newworks(state,payload){
			state.newworks=payload
			//console.log(state.newworks)
			Indicator.close()
			scrollTo(0,0)
		},
		yesterday(state,payload){
			state.yesterday=payload
			Indicator.close()
			//console.log(state.yesterday)
		},
		sevenday(state,payload){
			state.sevenday=payload
			Indicator.close()
			//console.log(state.sevenday)
		},
		designs(state,payload){
			state.designs=payload
			Indicator.close()
			//console.log(state.designs)
			scrollTo(0,0)
		},
		collects(state,payload){
			state.collects=payload
			//console.log(state.collects)
			// Indicator.close()
		},
		events(state,payload){
			state.events=payload
			Indicator.close()
			//console.log(state.events)
		},
		qqun(state,payload){
			state.qqun=payload
			Indicator.close()
			//console.log(state.qqun)
		},
		workdetail(state,payload){
			state.workdetail=payload
			Indicator.close()
			//console.log(state.workdetail)
		},
		projectsdetail(state,payload){
			state.projectsdetail=payload
			//console.log(payload)
			scrollTo(0,0)
			Indicator.close()
		},
		accounts_works(state,payload){
			state.accounts_works=payload
			scrollTo(0,0)
			//console.log(state.accounts_works)
			Indicator.close()
		},
		collects_detail(state,payload){
			state.collects_detail=payload
			scrollTo(0,0)
			Indicator.close()
			//console.log(state.collects_detail)
		},
		search_work(state,payload){
			state.search_work=payload
			scrollTo(0,0)
			//console.log(state.search_work)
			Indicator.close()
		},
		search_design(state,payload){
			state.search_design=payload
			scrollTo(0,0)
			//console.log(state.search_design)
			Indicator.close()
		}
	}

})

export default store