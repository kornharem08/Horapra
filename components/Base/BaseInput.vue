<template>
  <div class="mt-[21px]">
    <label :for="label" class="label_base">{{ label }}</label>
    <input
      class="shadow-main w-full block py-[0.625rem] px-[1rem]  h-[44px] text-[#142917] bg-gray-50 rounded-full outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
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
