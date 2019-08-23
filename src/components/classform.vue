<template>
	<div class="">
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"  @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="teacherlev" label="等级" >
			</el-table-column>
			<el-table-column prop="teacher" label="教练222" >
			</el-table-column>
			<el-table-column prop="phone" label="号码" >
			</el-table-column>
			<el-table-column prop="time" label="时间">
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '魔鬼瘦臀2',
		  teacherlev:"顶级",
          teacher: '国家顶级健身教练李寒樱21002',
		  phone:"15012745526",
		  time:"3.06s"
        }, {
          date: '2016-05-02',
          name: '腹肌撕裂2',
		  teacherlev:"顶级",
          teacher: '国家顶级健身教练李寒樱',
		  phone:"15012745526",		  
		  time:"3.00s"
        }],
        multipleSelection: []
      }
    },
	mounted(){
		console.log("被启用.....")
	},
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>
</style>
