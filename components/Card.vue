<template>
  <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center text-center border bg-white relative">
    <img
      v-if="picture"
      class="rounded-[10pt] object-cover w-full h-full"
      :src="require(`~/assets/img${picture}`)"
    >
    <div v-if="showDetail" class="absolute right-0 bottom-0 left-0 text-center ">
      <div class="bg-[#1C3E23] py-1 text-white rounded-b-[10pt]">
        {{ price }} บาท
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
    },
    picture: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
