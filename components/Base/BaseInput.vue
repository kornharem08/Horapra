<template>
  <div class="mt-[21px]">
    <label :for="label" class="label_base">{{ label }}</label>
    <input
      class="input_base"
      :type="type"
      :name="label"

      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  emits: ['update:value'],
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
