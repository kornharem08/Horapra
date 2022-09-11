<template>
  <div class="footer-layout app-width z-100 ">
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
