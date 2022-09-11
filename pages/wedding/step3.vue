<template>
  <div>
    <the-heading :is-back="true" />
    <div class="px-3 py-10">
      <the-title-text title="สรุปรายการสั่งซื้อสินค้า" />
      <div class="mt-6">
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            ชื่อ-นามสกุล
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            เบอร์โทร
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            อีเมล์
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            จำนวนแขก
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            จำนวนแขก (ระบุจำนวน)
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            บริการนิมนต์พระสงฆ์
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            จำนวนพระสงฆ์
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            รูปแบบการจัดเลี้ยงพระสงฆ์
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            บริการมัคนายก / มัคนายิกา
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            รูปแบบการจัดงาน
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            รายละเอียดเพิ่มเติม
          </p>
          <p class="title_label">
            test
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2">
          <p class="font-medium title_label leading-4 text-gray-600 ">
            อุปกรณ์เพิ่มเติม
          </p>
          <p class="title_label">
            test
          </p>
        </div>

        <div class="flex items-center justify-center mt-4">
          <button type="button" class=" text-white bg-main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-[12px] px-10 py-2.5 text-center mr-2 mb-2 " @click="next">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    next () {
      this.$router.push({
        name: 'buffet-step4'
      })
    }
  }
}
</script>

<style>

</style>
