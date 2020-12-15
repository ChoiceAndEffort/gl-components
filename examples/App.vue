<template>
	<div id="app">
		<div>
			<yo-button type="primary" @click="aa">主要按钮1</yo-button>
			<yo-button type="success">成功按钮</yo-button>
			<yo-button type="danger">危险按钮</yo-button>
			<yo-button type="info">信息按钮</yo-button>
			<yo-button type="warning">警告按钮</yo-button>
		</div>
		<div>
			<yo-button plain type="primary">主要按钮</yo-button>
			<yo-button plain type="success">成功按钮</yo-button>
			<yo-button plain type="danger">危险按钮</yo-button>
			<yo-button plain type="info">信息按钮</yo-button>
			<yo-button plain type="warning">警告按钮</yo-button>
		</div>
		<div>
			<yo-button plain round type="primary">主要按钮</yo-button>
			<yo-button plain round type="success">成功按钮</yo-button>
			<yo-button plain round type="danger">危险按钮</yo-button>
			<yo-button plain round type="info">信息按钮</yo-button>
			<yo-button round type="warning">警告按钮</yo-button>
		</div>
		<!-- 弹框 -->
		<yo-dialog :visible.sync="dialogTableVisible">
			<template v-slot:footer>
				<yo-button
					plain
					type="primary"
					@click="handleCancel"
					style="margin-right:30px;"
					>取消</yo-button
				>
				<yo-button plain type="primary" @click="handleCancel"
					>确定</yo-button
				>
			</template>
		</yo-dialog>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			dialogTableVisible: false,
		}
	},
	methods: {
		aa() {
			console.log(111)
			this.dialogTableVisible = true
		},
		handleCancel() {
			this.dialogTableVisible = false
		},
	},
}
</script>

<style lang="scss"></style>
