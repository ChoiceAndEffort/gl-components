<template>
	<div>
		<el-table
			ref="dataTable"
			:data="list"
			border
			style="width: 100%"
			fit
			highlight-current-row
			@sort-change="sortChange"
			@selection-change="selectionChange"
			@select-all="selectAll"
		>
			<!-- 多选 -->
			<el-table-column
				v-if="selection"
				type="selection"
				width="55"
				fixed
				:align="align"
			></el-table-column>
			<el-table-column
				v-if="sequence"
				label="序号"
				type="index"
				width="55"
				fixed
				:align="align"
			></el-table-column>
			<!-- 数据渲染 -->
			<template v-for="item in columns">
				<!-- 插槽 -->
				<el-table-column
					v-if="item.columnType === 'slot'"
					:prop="item.prop"
					:label="item.label"
					:key="item.prop"
					:width="item.width"
					:align="align"
				>
					<template slot-scope="scope">
						<slot :name="item.slotName" :row="scope.row" />
					</template>
				</el-table-column>
				<!-- 常规列渲染 -->
				<el-table-column
					v-else
					:label="item.label"
					:key="item.prop"
					:width="item.width"
					:align="align"
					:fixed="item.fixed"
					:prop="item.prop"
					:show-overflow-tooltip="item.showTips"
					:sortable="item.sortable"
				>
					<template slot-scope="scope">
						<span v-if="item.formatter">{{
							item.formatter(
								scope.row[item.prop],
								scope.row,
								scope.cloumn
							)
						}}</span>
						<span v-else>{{ scope.row[item.prop] }}</span>
					</template>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script>
export default {
	name: 'GlTable',
	components: {},
	props: {
		// 表格信息配置
		columns: {
			type: Array,
			default: () => [],
		},
		// 表格数据
		list: {
			type: Array,
			default: () => [],
		},
		align: {
			type: String,
			default: 'center',
		},
		// 开启多选
		selection: {
			type: Boolean,
			default: false,
		},
		// 显示序号
		sequence: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {}
	},
	created() {},
	mounted() {},
	methods: {
		sortChange(column, prop, order) {
			this.$emit('sortChange', column, prop, order)
		},
		selectionChange(val) {
			this.$emit('selection-change', val)
		},
		selectAll(val) {
			this.$emit('select-all', val)
		},
	},
}
</script>
<style lang="scss" scope></style>
