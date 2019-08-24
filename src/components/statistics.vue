<template>
	<div class="tubiao">
		<div id="myChart" :style="{width: '800px', height: '800px'}"></div>
		<div>
			<p>keep用户一周锻炼峰值</p>
			<div id="zhu" :style="{width: '800px', height: '800px'}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.drawLine();
			this.drawline2();
		},
		methods: {
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('myChart'))
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
			},
			drawline2() {
				let zhu = this.$echarts.init(document.getElementById('zhu'))
				zhu.setOption({
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '运动人数',
						type: 'bar',
						barWidth: '60%',
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				});
			}

		}
	}
</script>

<style>
	.tubiao{
		display: flex;
	}
	
</style>
