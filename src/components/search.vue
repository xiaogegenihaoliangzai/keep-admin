<template>
	<div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="最近日期">
				<el-input v-model="formInline.user" placeholder="最近日期"></el-input>
			</el-form-item>
			<el-form-item label="课程管理">
				<el-select v-model="formInline.region" placeholder="搜索">
					<el-option label="授课老师" value="shanghai"></el-option>
					<el-option label="课程名字" value="beijing"></el-option>
					<el-option label="课程级别" value="beijing"></el-option>
					<el-option label="燃烧脂肪" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style>
</style>
