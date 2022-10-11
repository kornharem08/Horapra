<template>
  <div style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full dark:bg-black flex items-center justify-center  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
    <div role="alert" class="container mx-auto w-full max-w-lg flex justify-center  ">
      <div class="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow pt-4 pb-8 rounded-lg">
        <div class="flex flex-col items-center px-2">
          <div>
            <img src="~/static/warning.png" class="w-10 h-10 mx-auto mb-2" alt="">
          </div>
          <div class="text-[14px] font-bold text-center">
            กรุณากดคัดลอกลิงก์ใบสรุปรายการของคุณก่อนปิดหน้าต่างนี้
          </div>
          <div class="relative w-full mt-2">
            <input id="search" type="search" disabled :value="link" class="block p-4  w-full text-[10px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ">
          </div>
          <div v-if="iscopy" class="text-center text-green-500 text-[10pt] mt-2">
            คัดลอกเรียบร้อย
          </div>
          <div class="flex justify-center items-center flex-col mt-4 w-full">
            <button class="button_base  w-full mt-2" @click="openlink">
              เปิดดู PDF
            </button>
            <button type="button" class="button_optional mt-2" @click="copy">
              คัดลอกลิงก์
            </button>
            <button type="button" class="button_optional mt-2  w-full" @click="close">
              ปิด
            </button>
          </div>
          <!-- <div class="flex items-center justify-center mt-2 mb-2">
            <button type="button" class="button_optional px-4  w-full" @click="close">
              ปิด
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      iscopy: false
    }
  },
  methods: {
    openlink () {
      window.open(this.link, '_blank')
    },
    copy () {
      this.iscopy = true
      const input = document.createElement('input')

      input.value = this.link

      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setTimeout(() => {
        this.iscopy = false
      }, 2500)
    },
    close () {
      this.$emit('close')
      // create call api
    }
  }
}
</script>

  <style>

  </style>
