<template>
  <div style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full dark:bg-black flex items-center justify-center  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
    <div role="alert" class="container mx-auto w-full">
      <div class="relative w-full  bg-white dark:bg-gray-800 shadow py-4">
        <div class="flex flex-col items-center ">
          <img :src="images">
          <div class="flex items-center justify-center mt-2">
            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="close">
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    images () {
      return require(`@/assets/img${this.img}`)
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
