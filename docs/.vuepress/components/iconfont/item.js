export default {
  props: {
    iconItem: {
      type: Object,
      validator: value => {
        return !!value.name && value.type;
      }
    }
  },
  computed: {
    iconClass() {
      return `iconfont ${this.iconItem.name}`.trim();
    }
  },
};