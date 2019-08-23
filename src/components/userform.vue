<template>
	<div class="">
<<<<<<< HEAD
		<div>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<input type="text" />
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"  @selection-change="handleSelectionChange">
=======
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width:100%" @selection-change="handleSelectionChange">
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
<<<<<<< HEAD
			<el-table-column prop="id" label="ID" width="120">
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
=======
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="phone" label="号码" show-overflow-tooltip>
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
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
<<<<<<< HEAD
          id:"1",
          name: '魔鬼瘦臀2',
		  teacherlev:"顶级",
          teacher: '国家顶级健身教练李寒樱21002',
		  phone:"15012745526",
		  time:"3.06s"
        }, {
          date: '2016-05-02',
          id:"2",
          name: '腹肌撕裂2',
		  teacherlev:"顶级",
          teacher: '国家顶级健身教练李寒樱',
		  phone:"15012745526",		  
		  time:"3.00s"
=======
          name: '王小虎',
          address: '上海市普陀区金沙江路 ',
          phone:"15012745523"
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone:"15012745523"
          
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
        }],
        multipleSelection: []
      }
    },
<<<<<<< HEAD
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
=======

    methods: {
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row);
      //     });
      //   } else {
      //     this.$refs.multipleTable.clearSelection();
      //   }
      // },
>>>>>>> e2646884e2a9bb097737cda37590d02ceede31f7
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>
</style>
