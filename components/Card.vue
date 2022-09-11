<template>
  <div class="bg-gray-50  border-2 border-gray-300 h-40 w-40 flex justify-center text-[12px] items-center col-span-1 mt-2 mx-auto rounded relative">
    รูปภาพ
    <div v-if="showDetail" class="absolute right-0 bottom-0 left-0 text-center ">
      <div class="bg-[#1C3E23] py-1 text-white">
        {{ price }} บาท
      </div>
      <div class="text-[10px] bg-[#C68B67] py-1 text-white">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    showDetail: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
