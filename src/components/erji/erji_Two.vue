<template>
	<div id="erjiTwo">
		<h1>二级_pageTwo</h1>
		<ul>
			<li v-for="info in infos1" @click="dianji">
				{{info.name}}-->{{info.age}}
			</li>
		</ul>
		<hr>
		<ul>
			<li v-for="info in infos2"   @click="$store.commit('increment')">
				{{info.name}}-->{{info.age}}
			</li>
		</ul>
	</div>
</template>

<script>
import $ from 'jquery';
export default{
	computed:{
		infos1(){
			return this.$store.state.infos
		},
		infos2(){
			return this.$store.getters.infos
		}
	},
	methods:{
		dianji:function(age){
			// this.$store.state.infos.shift()
			//如果着上面代码内联里面就不需要写this.
			 
			var url = "http://localhost/shuju/data.php";
			//1、jquery方法获取数据
			// $.post(url,{},function(data){
			// 	console.log(data)
			// })

			//2、fetch方法获取数据
			// fetch(url).then(res=>res.json()).then(data=>console.log(data))

			//3、axios方法获取数据
			//第一步：先在main.js中import axios from 'axios'
			//第二步：axios.defaults.baseURL = "http://localhost/shuju/data.php"
			//第三步：Vue.prototype.http = axios
			this.http.get(url)
				.then(res=>{console.log(res.data)})
		}
	}
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
#erjiTwo{width: 100%;height: 100%;background-color: blueviolet;}
#erjiTwo ul{margin: 10px}
</style>