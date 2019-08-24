<template>
	<div>
		<div class="tophead">
			<p>后台管理系统</p>
			<p>admin <span @click="gologin">退出登录</span></p>
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
									
									<el-menu-item index="/adminform/">用户信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							
							
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-notebook-1"></i>
									<span>课程管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/adminform/classform">课程信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							
							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-shopping-cart-full"></i>
									<span>商品管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="/adminform/goodsform">商品信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>

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
								<span slot="title">如果我们</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">能活下去</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">万水千山</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">你愿意陪</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">我去看吗</span>
							</el-menu-item>
							<el-menu-item index="">
								<i class="el-icon-setting"></i>
								<span slot="title">王权富贵</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</div>
			<div class="formlist_right">
				<router-view></router-view>
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
			},
			gologin() {
				this.$router.push("/")
			}
		},
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
	 .tac{
		width:520px;
	} 
	.el-submenu .el-menu-item{
		min-width: 0;
	}
	.tophead span {
		text-decoration: underline;
	}
	.formlist {
		display: flex;
	}
	.formlist_left {
		width:300px;
		height: 990px;
	}
	.formlist_right {
		width: 85%;
		margin-top: 30px;
	} 

</style>
