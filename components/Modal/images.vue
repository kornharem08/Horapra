<template>
  <div id="modal" class="py-12 bg-gray-700 dark:bg-gray-900 bg-opacity-25 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" @click.stop="close">
    <div role="alert" class="container mx-auto w-full">
      <div class="relative py-2 px-2  bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
        <div class="w-full flex justify-center text-green-400 mb-4">
          <img :src="images">
        </div>
        <div class="flex items-center justify-center w-full">
          <!-- <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
            Manage Plan
          </button> -->
          <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="close">
            ปิด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Number,
      default: null
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    images () {
      return require(`@/assets/img/${this.type}/set/${this.img}.jpg`)
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
