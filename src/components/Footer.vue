<template>
	<div id="footer">
		<!-- <h1  v-on:click="$emit('chuandi')" >我是脚部</h1> -->
		<!-- <ul>
			<li v-for="info in infos">
				<span>{{info.name}}</span>
				<span>{{info.age}}</span>
			</li>
		</ul> -->
		<ul>
			<router-link tag="li" :to="{name:'pageOne'}" active-class="active">
				首页
			</router-link>
			<router-link tag="li" :to="{name:'pageTwo'}">
				二页
			</router-link>
			<router-link tag="li" :to="{name:'pageThree'}">
				三页
			</router-link>
			<router-link tag="li" :to="{name:'pageFour'}">
				四页
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		computed:{
			infos:function(){
				return this.$store.getters.infos
			}
		}
	}
</script>

<style>
*{margin: 0;padding: 0}
#footer{width: 100%}
#footer ul{width: 100%}
#footer ul li{box-sizing: border-box; list-style: none;float: left;width: 25%;height: 60px;line-height: 60px;background-color: #ccc;border: 1px #333 solid;text-align: center;font-size: 1rem}
#footer ul li:hover{cursor:pointer;background-color: #fff;}
#footer ul li a{width: 100%;height: 100%;}
</style>