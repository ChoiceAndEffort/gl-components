<template>
	<div class="dialog" style="zIndex:zIndex" v-if="visible">
		<div class="contain">
			<div class="dialog-header">
				<h2>{{ dialogTitle }}</h2>
			</div>
			<div class="dialog-main"></div>
			<div class="dialog-footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GlDialog',
	props: {
		visible: {
			type: Boolean,
			required: false,
			default: () => false,
		},
		dialogTitle: {
			type: String,
			required: false,
			default: () => '标题',
		},
	},
	data() {
		return {
			zIndex: 2017,
		}
	},
	computed: {},
	watch: {},
	methods: {},
	created() {},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.dialog {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.5) !important;
	background-color: #ccc;
	filter: Alpha(opacity=50);

	background: #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	.contain {
		width: 800px;
		height: 500px;
		background: #fff;
		position: relative;
		.dialog-header {
			h2 {
				font-size: 20px;
				font-weight: 600;
			}
			padding: 5px;
			min-height: 40px;
			border-bottom: 1px solid #ccc;
		}
		.dialog-main {
			min-height: 350px;
		}
		.dialog-footer {
			border-top: 1px solid #ccc;
			text-align: right;
			padding: 15px 40px 0 0;
		}
	}
}
</style>
