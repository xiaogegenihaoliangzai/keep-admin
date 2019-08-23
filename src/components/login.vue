<template>
	<div >
		<video src="../assets/vidio/full.mp4" autoplay="autoplay" height="100%" width="100%" loop="loop"></video>
		<div class="navtitle">
			<div class="logo">
				<img src="../assets/login/logo-16fc21eba7.png">
			</div>
			<div class="kecheng">
				<p @click="adminlogin">后台管理登录</p>
			</div>
			<div>
			</div>
		</div>
		<img src="../assets/login/自律给我自由.png" alt="" class="zlgwzy" v-if="showzlgwzy">
		 <div class="loginform" v-if="!showzlgwzy">
			<div class="loginform1" @click="hideform"></div>
			<form action="" class="formfom">
				<img src="../assets/login/自律给我自由.png" alt="" >
				<p> 用户：<el-input v-model="username" placeholder="请输入内容" class="username"></el-input></p>
				<p> 密码：<el-input placeholder="请输入密码" v-model="pwd" show-password class="pwd"></el-input></p>
				<p><el-button class="login" @click="loginadmin">登录</el-button></p>
			</form> 
		</div> 
	</div>
</template>


<script>
  export default {
    data() {
      return {
        username: '',
		pwd:'',
		showzlgwzy:true
      }
    },
	methods:{
		adminlogin(){
			this.showzlgwzy=false
		},
		hideform(){
			this.showzlgwzy=true
		},
		loginadmin(){
			if(this.username=="admin"&&this.pwd=="123456"){
				alert("登录成功")
				this.$router.push("/adminform")
			}else{
				alert("密码错误")
			}
		}
	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navtitle{
	width: 100%;
	position: absolute;
	top:20px;
	left:0
}
.logo{
	float: left;
	padding-left: 30px;
}
.zlgwzy{
	display: block;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.kecheng{
	float: right;
	color: white;
	padding-right: 20px;
}
.kecheng p{
	font-family: "微软雅黑";
	letter-spacing: 1px;
	cursor: pointer;
	text-decoration: underline;
}
.loginform1{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
}
.loginform{
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	left:0;
	z-index:3 ;
	color: white;
}

.formfom{
	display: block;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.formfom p{
	margin: 20px auto;
	display: block;
	text-align: center;
}

.username{
	width: 330px;
}
.pwd{
	width: 330px;
}
</style>


