<template>
	<div>
		<div>
			<search></search>
		</div>
		<el-table :data="yundong.slice((currpage - 1) * pagesize, currpage * pagesize)" ref="multipleTable" tooltip-effect="dark"
		 @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="date" label="日期" width="120">

			</el-table-column>

			<el-table-column prop="id" label="id" width="120">
			</el-table-column>

			<el-table-column prop="name" label="课程名字" width="250">
			</el-table-column>

			<el-table-column prop="jibie" label="课程级别" width="180">
			</el-table-column>

			<el-table-column prop="ranzi" label="燃烧脂肪" width="180">
			</el-table-column>

			<el-table-column prop="time" label="课程时间" width="180">
			</el-table-column>

			<el-table-column prop="teacher" label="授课教练" width="180">
			</el-table-column>

			<el-table-column prop="num" label="动作数量" width="180">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
				pagesize: 12,
				currpage: 1,
				yundong: [{
						"date": "2018-02-15",
						"id": 1,
						"name": "腹肌撕裂者初级",
						"jibie": "k2初学",
						"ranzi": "38千卡",
						"time": "9分钟",
						"num": 14,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 2,
						"name": "哑铃手臂塑形",
						"jibie": "k1零基础",
						"ranzi": "30千卡",
						"time": "12分钟",
						"num": 15,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 3,
						"name": "腹肌撕裂者进阶",
						"jibie": "k3进阶",
						"ranzi": "86千卡",
						"time": "11分钟",
						"num": 20,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 4,
						"name": "宿舍瘦腿训练",
						"jibie": "k1零基础",
						"ranzi": "19千卡",
						"time": "8分钟",
						"num": 13,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 5,
						"name": "腹肌塑造进阶",
						"jibie": "k2进阶",
						"ranzi": "36千卡",
						"time": "20分钟",
						"num": 16,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 6,
						"name": "腹肌塑造初级",
						"jibie": "k2初学",
						"ranzi": "32千卡",
						"time": "14分钟",
						"num": 13,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 7,
						"name": "周六野的瘦腿秘籍",
						"jibie": "k2初学",
						"ranzi": "39千卡",
						"time": "12分钟",
						"num": 18,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 8,
						"name": "徒手胸肌训练初级",
						"jibie": "k2初学",
						"ranzi": "56千卡",
						"time": "18分钟",
						"num": 17,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 9,
						"name": "腹肌撕裂者强化",
						"jibie": "k4强化",
						"ranzi": "66千卡",
						"time": "20分钟",
						"num": 22,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 10,
						"name": "人鱼线雕刻",
						"jibie": "k2初学",
						"ranzi": "56千卡",
						"time": "9分钟",
						"num": 13,
						"teacher": "tony老师",
					},
					{
						"date": "2018-02-15",
						"id": 11,
						"name": "腹部发力感知",
						"jibie": "k1零基础",
						"ranzi": "39千卡",
						"time": "7分钟",
						"num": 10,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 12,
						"name": "零基础臀部塑形",
						"jibie": "k1零基础",
						"ranzi": "51千卡",
						"time": "14分钟",
						"num": 14,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 13,
						"name": "宿舍一平米减脂",
						"jibie": "k1零基础",
						"ranzi": "36千卡",
						"time": "8分钟",
						"num": 15,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 14,
						"name": "腹肌训练入门",
						"jibie": "k1零基础",
						"ranzi": "56千卡",
						"time": "13分钟",
						"num": 20,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 15,
						"name": "李现HIIT燃脂挑战",
						"jibie": "k3进阶",
						"ranzi": "60千卡",
						"time": "12分钟",
						"num": 15,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 16,
						"name": "瘦腿训练",
						"jibie": "k2初学",
						"ranzi": "66千卡",
						"time": "13分钟",
						"num": 18,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 17,
						"name": "腹肌塑造强化",
						"jibie": "k4强化",
						"ranzi": "86千卡",
						"time": "24分钟",
						"num": 23,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 18,
						"name": "哑玲手臂轰炸",
						"jibie": "k3进阶",
						"ranzi": "80千卡",
						"time": "20分钟",
						"num": 20,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 19,
						"name": "徒手胸训练入门",
						"jibie": "k1零基础",
						"ranzi": "35千卡",
						"time": "7分钟",
						"num": 17,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 20,
						"name": "腹肌激活",
						"jibie": "k2初学",
						"ranzi": "53千卡",
						"time": "13分钟",
						"num": 21,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 21,
						"name": "背部发力感知",
						"jibie": "k1零基础",
						"ranzi": "37千卡",
						"time": "5分钟",
						"num": 12,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 22,
						"name": "HIIT 燃脂.腰腹进阶",
						"jibie": "k3进阶",
						"ranzi": "88千卡",
						"time": "22分钟",
						"num": 28,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 23,
						"name": "哑玲胸部塑形",
						"jibie": "k3进阶",
						"ranzi": "72千卡",
						"time": "16分钟",
						"num": 22,
						"teacher": "tony老师"
					},
					{
						"date": "2018-02-15",
						"id": 24,
						"name": "零基础减脂.全身激活",
						"jibie": "k1零基础",
						"ranzi": "86千卡",
						"time": "10分钟",
						"num": 13,
						"teacher": "tony老师"
					},
					{

						"date": "2018-02-15",
						"name": "翘臂养成",
						"jibie": "k2初学",
						"ranzi": "78千卡",
						"time": "20分钟",
						"num": 26,
						"teacher": "tony老师"
					}

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

</style>
