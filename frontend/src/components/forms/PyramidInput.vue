<template lang="pug">
  input.input(v-model="computedValue" :type="type" :placeholder="placeholder")
</template>

<script>
export default {
  name: 'PyramidInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Type text here',
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss">
.input {
  background: transparent;
  border: 0px solid transparent;
  border-bottom: 1px solid $blackCoral;
  line-height: 35px;
  color: $white;
  width: 100%;

  transition: border-color 0.2s 0s ease;

  &:focus {
    outline: none;
    border-color: $white;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 0px solid transparent;
    border-bottom: 1px solid $blackCoral;
    background-color: transparent;
    -webkit-text-fill-color: $white;
    -webkit-box-shadow: 0 0 transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
}
</style>
