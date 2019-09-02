var vm = new Vue({
el:'.my-div',
data:{
	message :"Hello Vue JS",
	votes:0,
	name:'',

	firstname:'',
	lastname:'',
	fullname:'',
	first:0,
	last:0,
	result:0,
	course:[
		{title:'HTML',instructor:'mosabbir'},
		{title:'CSS',instructor:'SHAON'},
		{title:'JAVA',instructor:'FARUQE'},
		{title:'PHP',instructor:'SAJID'}
	]
},
methods:{
	makeFullName: function(){
  this.fullname = this.firstname+' '+this.lastname;
	},
	
	sum: function(){
       this.result =Number(this.first)+Number(this.last)
	},

	sub: function(){
 this.result =Number(this.first)-Number(this.last)
	},


	mul: function(){
 this.result =Number(this.first)*Number(this.last)
	},

	divi: function(){
 this.result =Number(this.first)/Number(this.last)
	}

	
}


});