<template>
	<div>
		<div>
			<search></search>
		</div>
		<el-table :data="user.slice((currpage - 1) * pagesize, currpage * pagesize)" ref="multipleTable" tooltip-effect="dark"
		 @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="id" label="id" width="120">
			</el-table-column>

			<el-table-column prop="name" label="用户名" width="180">
			</el-table-column>

			<el-table-column prop="phone" label="手机号" width="180">
			</el-table-column>

			<el-table-column prop="sex" label="性别" width="180">
			</el-table-column>

			<el-table-column prop="register" label="注册时间" width="180">
			</el-table-column>

			<el-table-column prop="time" label="最近登录" width="180">
			</el-table-column>

			<el-table-column prop="teacher" label="累积训练时长/小时" width="180">
			</el-table-column>

			<el-table-column prop="num1" label="关注数" width="100">
			</el-table-column>

			<el-table-column prop="num2" label="粉丝数" width="100">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		
		<div class="fyq">
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currpage"
				 :page-sizes="[10, 20]" :page-size="pagesize" layout="sizes, prev, pager, next" :total="500">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import search from "./search"
	export default {
		components: {
			search
		},
		data() {
			return {
				currpage: 1,
				pagesize: 10,
				user: [{
						"id": 1,
						"name": "forever",
						"sex": "男",
						"phone": "15012745521",
						"register": "2017-5-27",
						"time": "2019-5-21",
						"num1": 32,
						"num2": 200,
						"teacher": "25"
					},
					{
						"id": 2,
						"name": "坏男孩",
						"sex": "男",
						"phone": "15012745521",
						"register": "2016-3-21",
						"time": "2019-6-30",
						"num1": 65,
						"num2": 310,
						"teacher": "330"
					},
					{
						"id": 3,
						"name": "吃肉的鱼",
						"sex": "女",
						"phone": "15012745521",
						"register": "2018-5-25",
						"time": "2019-9-23",
						"num1": 15,
						"num2": 5,
						"teacher": "150"
					},
					{
						"id": 4,
						"name": "隔壁的老王",
						"sex": "男",
						"phone": "15012745521",
						"register": "2017-12-2",
						"time": "2019-4-22",
						"num1": 98,
						"num2": 20,
						"teacher": "210"
					},
					{
						"id": 5,
						"name": "kangkang",
						"sex": "男",
						"phone": "15012745521",
						"register": "2018-9-15",
						"time": "2019-3-15",
						"num1": 4,
						"num2": 82,
						"teacher": "800"
					},
					{
						"id": 6,
						"name": "东海敖丙",
						"sex": "女",
						"phone": "15012745521",
						"register": "2018-9-15",
						"time": "2019-3-15",
						"num1": 15,
						"num2": 84,
						"teacher": "60"
					},
					{
						"id": 7,
						"name": "碧螺春",
						"sex": "男",
						"phone": "15012745521",
						"register": "2018-9-15",
						"time": "2019-3-15",
						"num1": 44,
						"num2": 45,
						"teacher": "410"
					},
					{
						"id": 8,
						"name": "湫sex",
						"sex": "男",
						"phone": "15012745521",
						"register": "2016-9-15",
						"time": "2019-3-15",
						"num1": 31,
						"num2": 35,
						"teacher": "330"
					},
					{
						"id": 9,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "10"
					},
					{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},{
						"id": 10,
						"name": "埋葬那段爱",
						"sex": "男",
						"phone": "15012745521",
						"register": "2019-9-15",
						"time": "2019-9-15",
						"num1": 67,
						"num2": 36,
						"teacher": "310"
					},
				]
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleSizeChange(csize) {
				this.pagesize = csize
			},
			handleCurrentChange(cpage) {
				this.currpage = cpage
			}
		}
	}
</script>

<style>
	.fyq {
		margin-top: 30px;
	}
</style>
