<template>
	<div id="header">
		<h1 id="title">我是头部</h1>
		<ul style="display:none">
			<li v-for="shuju in shujus">
				<!-- <span v-on:click="dianji(info.age)">{{info.name}}</span>
				<span>{{info.age}}</span> -->
				<!-- <h1 v-on:click="$emit('chuandi')">{{shuju.student}}{{shuju.step}}</h1> -->
			</li>
		</ul>
		<!-- <div>
			<router-link to="/pageOne">页面1</router-link>
		  	<router-link to="/pageTwo">页面2</router-link>
		  	<router-link to="/pageOne">页面1</router-link>
		</div> -->
	</div>
</template>

<script>
	// import {mapState	} from 'vuex'
	export default{
		props:['shujus'],
//		computed:mapState({
//			infos:'infos',
////			infos1:()=>{
////				return infos.map((info)=>{
////					return {name:info.name,age:info.age}
////				})
////			}
//			infos1:getters.infos
//		}),
		computed:{
			infos(){
				return this.$store.state.infos.map((info)=>{
					return {name:info.name,age:info.age}
				})
			}
		},
//		data:function(){
//			return{
//			}
//			
//		},
//		methods:{
//			dianji:function(age){
//				console.log(this.infos)
//				this.infos.pop();
//			}
//		},
		components: {
//		   pageOne,pageTwo
		  },
	}
</script>

<style>
#header #title{text-align: center;font-size: 1.5rem;height: 60px;line-height: 60px;background-color:blue;color: black;font-weight: 500}
</style>