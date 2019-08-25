<template>
	<div>
		<div>
			<search></search>
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			
			<el-table-column prop="id" label="id" width="120">
			</el-table-column>
			
			<el-table-column prop="name" label="商品名" width="120">
			</el-table-column>
			
			<el-table-column prop="price" label="价格" >
			</el-table-column>
			
			<el-table-column prop="color" label="颜色" >
			</el-table-column>
			
			<el-table-column prop="xinh" label="型号">
			</el-table-column>
			
			<el-table-column prop="yishou" label="已售" >
			</el-table-column>
			
			<el-table-column prop="cun" label="库存" >
			</el-table-column>
			
		</el-table>
	</div>
</template>

<script>
	import search from "./search"

	export default {
		components:{
			search
		},
    data() {
      return {
        tableData: [
					{"id":1,"name":"keep健走机","price":2000,"color":"white","xinh":"HS001","yishou":1154,"cun":166},
					{"id":2,"name":"家用智能跑步机","price":2099,"color":"gray","xinh":"HS0021","yishou":15919,"cun":1616},
					{"id":3,"name":"keep家用静音健腹轮","price":55,"color":"black","xinh":"HS0011","yishou":1006,"cun":5166},
					{"id":4,"name":"阻力带","price":39,"color":"red","xinh":"HS0021","yishou":21154,"cun":16316},
					{"id":5,"name":"瑜珈伸展带","price":19,"color":"black","xinh":"HS0051","yishou":10116,"cun":1122},
					{"id":6,"name":"哑玲","price":139,"color":"skyblue","xinh":"HS2101","yishou":8033,"cun":1116},
					{"id":7,"name":"keep智能体秤","price":199,"color":"pink","xinh":"HS2521","yishou":80109,"cun":1626},
					{"id":8,"name":"TPE防滑瑜珈垫","price":109,"color":"gray","xinh":"HS2001","yishou":44932,"cun":555},
					{"id":9,"name":"硅胶握力圈","price":29,"color":"blue","xinh":"HS061","yishou":15223,"cun":306},
					{"id":10,"name":"俯卧撑支架","price":59,"color":"black","xinh":"HM201","yishou":17006,"cun":5886},
					{"id":11,"name":"瑜珈轮","price":69,"color":"pink","xinh":"HS091","yishou":9863,"cun":915},
					{"id":12,"name":"肌肉放松棒","price":59,"color":"white","xinh":"HS291","yishou":2974,"cun":166},
					{"id":13,"name":"迷你拳击沙袋","price":149,"color":"black","xinh":"HS301","yishou":51,"cun":1166},
					{"id":14,"name":"拳击手套","price":119,"color":"black","xinh":"HS001","yishou":90,"cun":2526},
					{"id":15,"name":"冷敷按摩球","price":65,"color":"gray","xinh":"HS299","yishou":619,"cun":268},
					{"id":16,"name":"运动压缩小腿套","price":69,"color":"black","xinh":"HS3301","yishou":1242,"cun":1169},
					{"id":17,"name":"平衡波速球","price":329,"color":"skyblue","xinh":"HS5201","yishou":237,"cun":1289},
					{"id":18,"name":"多功能健身凳","price":329,"color":"black","xinh":"HS361","yishou":1460,"cun":1256},
					{"id":19,"name":"透气运动外套","price":159,"color":"gray","xinh":"HS10671","yishou":2067,"cun":2566},
					{"id":20,"name":"女子高弹力紧身裤","price":179,"color":"gray","xinh":"T105","yishou":652,"cun":358}
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
