//###################################################### 
// STRUCTURE - Vue.js

var app = new Vue(
	{
		el: '#vue_root',
		data: {
			msg1: 'The Vue Family',
			src1: 'img/vue_family.jpg',
			img_class: 'img_size'
		},
		methods: {
		}
	}
);
Vue.config.devtools = true;

console.log(app);
console.log(app._data);
console.log(app._data.msg1);
console.log(app._data.src1);
