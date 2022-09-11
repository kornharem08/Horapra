<template>
  <div class="flex justify-between pt-8 px-2 text-[15px]">
    <div class="flex items-center cursor-pointer" @click="back">
      <svg
        v-show="isBack"
        class="w-6 h-6 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg><span v-show="isBack" class="inline-block pl-2">ย้อนกลับ</span>
    </div>
    <div class="flex items-center cursor-pointer">
      <span class="inline-block pr-2">ปิด</span>  <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back () {
      this.$emit('back')
      // this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
