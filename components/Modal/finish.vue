<template>
  <div style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full dark:bg-black flex items-center justify-center  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center  ">
      <div class="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow pt-10 pb-8 rounded-lg">
        <div class="flex flex-col items-center px-4 md:px-12">
          <span class="p-3 rounded-full bg-green-500">
            <svg class="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          </span>
          <p class="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">
            ทำรายการสำเร็จ
          </p>
          <p class="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-center text-gray-600 dark:text-gray-300">
            หลังจากนี้จะมีเจ้าหน้าที่ติดต่อกลับนะคะ
          </p>
          <div class="flex items-center justify-center mt-6">
            <button type="button" class="button_base" @click="close">
              ตกลง
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
