<template>
  <div class="footer-layout  z-100  mx-auto max-w-3xl w-full px-[24pt]">
    <slot name="button" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style>

</style>
