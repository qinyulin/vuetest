import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'

Vue.use(Vuex)
export const store = new Vuex.Store({
	state:{
		infos:[
  			{name:"qin",age:12},
  			{name:"qin1",age:456},
  			{name:"jin",age:234},
  			{name:"jin1",age:231},
  		],
  		count:0,
  		url:"http://localhost/shuju/data.php",
	},
	getters:{
		infos:(state)=>{
			return state.infos.map((info)=>{
				return {name:info.name+"@",age:info.age/2}
			});
		}
	},
	mutations:{
		increment:function(){
			var ob = {};
			ob.name="qinyulin"+ Math.floor(Math.random()*100);
			ob.age = Math.floor(Math.random()*100);
			this.state.infos.push(ob);

			
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
			axios.get(url)
				.then(res=>{console.log(res.data)})
			

			//jquery的ajax封装代码
			// $.post("http://localhost/shuju/data.php",{},function(text){
			// 	console.log(text)
			// })
			
			//ajax的jsonp跨域解决方案
			// var url = 'http://localhost/shuju/data.php';
			// $.ajax({
			// 	type:"GET",
			// 	url:url, //访问的链接
			// 	dataType:"jsonp",  //数据格式设置为jsonp
			// 	// jsonp:"callback",  //Jquery生成验证参数的名称
			// 	jsonpCallback: 'callbackfunction',
			// 	success:function(data){  //成功的回调函数
			// 		console.log(`data:`)
			// 		console.log(data)
			// 	},
			// 	error: function (e) {
			// 		var name = "qinyulin"
			// 		// console.log(`e:${name}`)
			// 		console.log('e:');
			// 		console.log(e)
			// 	}
			// });
			
			
		}
	}
})
