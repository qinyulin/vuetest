<template>
  <div id="app">
  	<header1 v-bind:shujus="shujus" v-on:chuandi="chuandi"></header1>
  	<div id="content">
  		<router-view></router-view>
  	</div>
		<footer1 v-on:chuandi="chuandi"></footer1>
  </div>
</template>

<script>
import Header1 from './components/Header'
import Footer1 from './components/Footer'


export default {
  name: 'App',
  data:function(){
  	return{
  		message:"qinyulin",
			shujus:[
				{student:"秦渝淋",step:"大三"},
				{student:"靳海燕",step:"大二"}
			]
  		
  	}
  },
  components: {
    Header1,Footer1
  },
	methods:{
		chuandi : function(){
			var ob = {};
			ob.student = "add" + parseInt(Math.random()*100);
			ob.step = "大" + parseInt(Math.random()*100);
			this.shujus.push(ob)
		}
	},
}
</script>

<style>
#app{width: 100%;height: 100%;background-color:green;}
#footer{position: fixed;left: 0px;bottom: 0px;}
#content{width: 100%;height: calc(100% - 60px - 60px);background-color: red;position:absolute;}
</style>
