<template>
	<div id="pageTwo">
		<h1>pageTwo</h1>
		<div class="left">
			<ul>
				<router-link tag="li" :to="{name:'erjiOne'}">第一个</router-link>
				<router-link tag="li" :to="{name:'erjiTwo'}">第二个</router-link>
				<router-link tag="li" :to="{name:'erjiThree'}">第三个</router-link>
			</ul>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
		
		
	</div>
</template>

<script>
</script>

<style>
#pageTwo{width: 100%;height: 100%;}
#pageTwo .left{width: 30%;height: 100%;float: left;background-color: aqua;}
#pageTwo .right{width: 70%;height: 100%;float: left;background-color: blueviolet;}
#pageTwo .left ul li{width: 100%;height: 60px;line-height: 60px;text-align: center;border: 1px #333 solid;}
#pageTwo .left ul li:hover{cursor:pointer;background-color: #999;color: #fff;}
</style>