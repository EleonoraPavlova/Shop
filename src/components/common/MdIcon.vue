<template>
  <i :class="[color, size, ...mdi]"> </i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
      validator(value) {
        return value && value.length;
      }
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'success', 'error'].includes(value);
      }
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['xs', 'sm', 'md', 'mdx', 'lg', 'xlg', 'xxlg', 'xxxlg'].includes(value);
      }
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mdi() {
      const classes = ['mdi', 'mdi-' + this.name];

      if (this.spin) {
        classes.push('mdi-spin');
      }
      return classes;
    }
  }
};
</script>

<style lang="scss" scoped="true">
i {
  display: inline-flex;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  color: currentColor;
  color: inherit;

  &.success {
    color: green
  }
  &.error {
    color: red
  }
  &.warning {
    color: yellow
  }

  &.xs {
    width: 10px;
    height: 10px;
    font-size: 10px;
  }

  &.sm {
    width: 15px;
    height: 15px;
    font-size: 15px;
  }

  &.md {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  &.mdx {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  &.lg {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  &.xlg {
    font-size: 36px;
    width: 36px;
    height: 36px;
  }

  &.xxlg {
    font-size: 48px;
    width: 48px;
    height: 48px;
  }

  &.xxxlg {
    font-size: 64px;
    width: 64px;
    height: 64px;
  }
}
</style>
