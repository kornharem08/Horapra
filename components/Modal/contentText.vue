<template>
  <div id="modal" style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full dark:bg-black  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center  ">
      <div class="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow pt-10 pb-8 rounded-lg">
        <div class="flex flex-col items-center px-4 md:px-12">
          <p class="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">
            ข้อเสนอสุดพิเศษ
          </p>
          <p class="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-center text-gray-600 dark:text-gray-300">
            จัดเลี้ยงบุฟเฟ่กับโหระพาวันนี้<br>
            รับฟรี บริการชุดโต๊ะเก้าอี้สำหรับแขกในงาน
          </p>
          <div class="flex items-center justify-center mt-6">
            <button type="button" class=" text-white bg-main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-[12px] px-10 py-2.5 text-center mr-2 mb-2 " @click="close">
              ถัดไป
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
