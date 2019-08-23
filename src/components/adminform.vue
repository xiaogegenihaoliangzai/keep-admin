<template>
	<div>
		<div class="tophead">
			<p>后台管理系统</p>
<<<<<<< HEAD
			<p>admin <span @click="gologin">退出登录</span></p>
=======
			<p>admin</p>
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
		</div>
		<div class="formlist">
			<div class="formlist_left">
				<el-row class="tac">
					<el-col :span="12">
						<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
						 text-color="#fff" active-text-color="#ffd04b" :default-active="this.$route.path" router>
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-menu"></i>
									<span>用户管理</span>
								</template>
								<el-menu-item-group>
<<<<<<< HEAD
									
=======
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
									<el-menu-item index="/adminform/userform">用户信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
<<<<<<< HEAD
									<i class="el-icon-notebook-1"></i>
=======
									<i class="el-icon-menu"></i>
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
									<span>课程管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/adminform/classform">课程信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title">
<<<<<<< HEAD
									<i class="el-icon-shopping-cart-full"></i>
=======
									<i class="el-icon-menu"></i>
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
									<span>商品管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/adminform/goodsform">商品信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
<<<<<<< HEAD

							<el-submenu index="4">
								<template slot="title">
									<i class="el-icon-date"></i>
									<span>图表管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/adminform/statistics">统计分析</el-menu-item>
								</el-menu-item-group>
							</el-submenu>



							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">分析情况</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">条形统计</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">图表统计</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">统计大佬</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">带我划水</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">我躺的好</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">又会吹水</span>
							</el-menu-item>
							<el-menu-item index="">
=======
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">统计分析</span>
							</el-menu-item>
							<el-menu-item index="5">
								<i class="el-icon-setting"></i>
								<span slot="title">分析情况</span>
							</el-menu-item>
							<el-menu-item index="6">
								<i class="el-icon-setting"></i>
								<span slot="title">条形统计</span>
							</el-menu-item>
							<el-menu-item index="7">
								<i class="el-icon-setting"></i>
								<span slot="title">图表统计</span>
							</el-menu-item>
							<el-menu-item index="8">
								<i class="el-icon-setting"></i>
								<span slot="title">统计大佬</span>
							</el-menu-item>
							<el-menu-item index="9">
								<i class="el-icon-setting"></i>
								<span slot="title">带我划水</span>
							</el-menu-item>
							<el-menu-item index="10">
								<i class="el-icon-setting"></i>
								<span slot="title">我躺的好</span>
							</el-menu-item>
							<el-menu-item index="11">
								<i class="el-icon-setting"></i>
								<span slot="title">又会吹水</span>
							</el-menu-item>
							<el-menu-item index="12">
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
								<i class="el-icon-setting"></i>
								<span slot="title">带我带我</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</div>
			<div class="formlist_right">
<<<<<<< HEAD
				
					<router-view :key="key"></router-view>
				
=======
				<router-view></router-view>
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
<<<<<<< HEAD
			},
			gologin() {
				this.$router.push("/")
			}
		},
		computed: {
			key() {
				return this.$route.path + Math.random();
			}
		},

		activated() {
			this.$router.go(0)
=======
			}
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
	* {
		margin: 0;
		padding: 0;
	}

	.tophead {
		height: 60px;
		display: flex;
		background-color: #545c64;
		line-height: 60px;
		color: white;
		justify-content: space-between;
		padding: 0 20px;
	}

	.tophead span {
		text-decoration: underline;
	}

	.formlist {
		position: relative;
	}

	.formlist_left {
		width: 35%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.formlist_right {
		width: 100%;
		position: absolute;
		top: 0;
		left: 333px;
	}
=======
*{
	margin: 0;
	padding: 0;
}
.tophead{
	height: 60px;
	display: flex;
	background-color:#545c64;
	line-height: 60px;
	color: white;
	justify-content: space-between;
	padding: 0 20px;
}
.formlist{
	position: relative;
}
.formlist_left{
	width: 35%;
	position: absolute;
	top: 0;
	left: 0;
}
.formlist_right{
	width: 100%;
	position: absolute;
	top: 0;
	left: 333px;
}
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
</style>
