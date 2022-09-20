<template>
  <div class="flex itmes-center text-[#142917] font-medium text-[16pt] relative mb-2" @click="back">
    <svg class="w-8 h-8 absolute left-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    <span class="pl-12">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'กลับ'
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style>

</style>
