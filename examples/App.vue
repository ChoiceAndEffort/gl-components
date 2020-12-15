<template>
	<div id="app">
		<div>
			<gl-button type="primary" @click="aa">主要按钮1</gl-button>
			<gl-button type="success">成功按钮</gl-button>
			<gl-button type="danger">危险按钮</gl-button>
			<gl-button type="info">信息按钮</gl-button>
			<gl-button type="warning">警告按钮</gl-button>
		</div>
		<div>
			<gl-button plain type="primary">主要按钮</gl-button>
			<gl-button plain type="success">成功按钮</gl-button>
			<gl-button plain type="danger">危险按钮</gl-button>
			<gl-button plain type="info">信息按钮</gl-button>
			<gl-button plain type="warning">警告按钮</gl-button>
		</div>

		<div style="margin-top: 100px">
			<hr />
			<gl-button type="primary" @click="openDialog">打开弹框</gl-button>
			<!-- 弹框 -->
			<gl-dialog :visible.sync="dialogTableVisible">
				<template v-slot:footer>
					<gl-button
						plain
						type="primary"
						@click="handleCancel"
						style="margin-right: 30px"
						>取消</gl-button
					>
					<gl-button plain type="primary" @click="handleCancel"
						>确定</gl-button
					>
				</template>
			</gl-dialog>
		</div>

		<div style="margin-top: 100px">
			<hr />
			<gl-button type="primary" @click="openDialog">打开弹框</gl-button>
		</div>
		<!-- 表格 -->
		<div>
			<h3>表格</h3>
		</div>
		<gl-table :list="list" :columns="columns"></gl-table>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			dialogTableVisible: false,
			columns: [
				{ prop: 'name', label: '姓名' },
				{ prop: 'sex', label: '性别' },
			],
			list: [
				{ name: '张三', sex: '男' },
				{ name: '李四', sex: '男' },
			],
		}
	},
	methods: {
		aa() {
			console.log(111)
		},
		openDialog() {
			this.dialogTableVisible = true
		},
		handleCancel() {
			this.dialogTableVisible = false
		},
	},
}
</script>

<style lang="scss"></style>
