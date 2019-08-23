<template>
	<div>
		<div id="myChart" :style="{width: '800px', height: '800px'}"></div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: ''
			}
		},
		activated() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表  分類
				myChart.setOption({
					title: {
						text: 'keep用戶年齡分类',
						subtext: '我也不知道啊我也不敢說',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['青少年18', '青年20-30', '中年30-40', '老年50-60', '非人類']
					},
					series: [{
						name: '年齡',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [{
								value: 335,
								name: '青少年18'
							},
							{
								value: 1548,
								name: '青年20-30'
							},
							{
								value: 234,
								name: '中年30-40'
							},
							{
								value: 135,
								name: '老年50-60'
							},
							{
								value: 310,
								name: '非人類'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
			}
		}
	}
</script>

<style>
</style>
