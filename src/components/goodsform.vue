<template>
	<div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" >
			</el-table-column>
			<el-table-column prop="phone" label="手机号" >
			</el-table-column>
			<el-table-column prop="registernme" label="上架时间">
			</el-table-column>
			<el-table-column prop="sex" label="性别" >
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
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },{
          date: '2016-05-03',
          name: 'keep手环',
          address: '现在购买只要8.8折',
					phone:"15012745521",
					registernme:"2019-07-23",
					sex:"男",
        },
				
				],
        multipleSelection: []
      }
    },

    methods: {
     
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>
</style>
