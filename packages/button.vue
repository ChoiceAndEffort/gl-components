<template>
  <div
    class="yo-button"
    :class="[`yo-button__${type}`, {
    'is-plain' : plain,
    'is-round' : round
  }]"
    @click="handerClick"
  >
    <i class="icon-font icon-shanchu"></i>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "YoButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handerClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.yo-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.yo-button__primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.yo-button__success {
  color: #fff;
  background-color: #41b349;
  border-color: #41b349;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.yo-button__danger {
  color: #fff;
  background-color: #ee3f4d;
  border-color: #ee3f4d;
  &:hover,
  &:focus {
    background: #f07c82;
    border-color: #f07c82;
    color: #fff;
  }
}
.yo-button__info {
  color: #fff;
  background-color: #bbb5ac;
  border-color: #bbb5ac;
  &:hover,
  &:focus {
    background: #dad4cb;
    border-color: #dad4cb;
    color: #fff;
  }
}
.yo-button__warning {
  color: #fff;
  background-color: #ff9900;
  border-color: #ff9900;
  &:hover,
  &:focus {
    background: #f7c173;
    border-color: #f7c173;
    color: #fff;
  }
}
.yo-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    column-rule-color: #409eff;
    color: #409eff;
  }
}
.yo-button__primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    column-rule-color: #409eff;
    color: #fff;
  }
}
.yo-button__success.is-plain {
  color: #41b349;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #41b349;
    column-rule-color: #41b349;
    color: #fff;
  }
}
.yo-button__danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #ee3f4d;
    column-rule-color: #ee3f4d;
    color: #fff;
  }
}
.yo-button__info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #bbb5ac;
    column-rule-color: #bbb5ac;
    color: #fff;
  }
}
.yo-button__warning.is-plain {
  color: #ff9900;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #ff9900;
    column-rule-color: #ff9900;
    color: #fff;
  }
}
.yo-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
</style>