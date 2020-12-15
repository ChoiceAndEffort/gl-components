<template>
  <div>
    <el-table
      ref="dataTable"
      :data="tableData"
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
      <template v-for="item in tableHead">
        <!-- 插槽 -->
        <el-table-column
          v-if="item.columnType === 'slot'"
          :prop="item.field"
          :label="item.label"
          :key="item.field"
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
          :key="item.field"
          :width="item.width"
          :align="align"
          :fixed="item.fixed"
          :prop="item.field"
          :show-overflow-tooltip="item.showTips"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <span v-if="item.formatter">{{
              item.formatter(scope.row[item.field], scope.row, scope.cloumn)
            }}</span>
            <span v-else>{{ scope.row[item.field] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "common-table",
  components: {},
  props: {
    // 表格信息配置
    tableConfig: {
      type: Array,
      default: () => [],
    },
    // 表格数据
    tableList: {
      type: Array,
      default: () => [],
    },
    align: {
      type: String,
      default: "center",
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
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    sortChange(column, prop, order) {
      this.$emit("sortChange", column, prop, order);
    },
    selectionChange(val) {
      this.$emit("selection-change", val);
    },
    selectAll(val) {
      this.$emit("select-all", val);
    },
  },
  computed: {
    tableData() {
      return this.tableList;
    },
    tableHead() {
      return this.tableConfig;
    },
  },
};
</script>
<style lang="scss" scope></style>
