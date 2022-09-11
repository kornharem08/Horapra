<template>
  <ValidObs ref="form" v-slot="{ handleSubmit }">
    <div class="">
      <the-heading :is-back="true" />
      <div class="px-3 py-10">
        <the-title-text title="กรอกรายละเอียดสำหรับจัดเลี้ยงงานแต่ง" />
        <div class="mb-2 mt-6">
          <label for="invite" class="title_label block mb-2 text-sm font-medium text-gray-500 ">เลือกจำนวณแขก *</label>
          <ValidPro v-slot="{ errors }" rules="required" name="เลือกจำนวณแขก">
            <select id="invite" v-model="wedding.numberOfGuests" class=" w-full input_base">
              <option selected>
                เลือกจำนวณแขก
              </option>
              <option value="1">
                10
              </option>
              <option value="2">
                20
              </option>
              <option value="3">
                30
              </option>
              <option value="4">
                40
              </option>
              <option value="5">
                50
              </option>
            </select>
            <span class="text-red-500 title_label mt-1">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mb-3">
          <label for="numberOfGuests" class="title_label block mb-2 text-sm font-medium text-gray-500 ">จำนวนแขก *</label>
          <ValidPro v-slot="{ errors }" rules="required" name="จำนวนแขก">
            <input
              v-model="wedding.numberOfGuests"
              type="text"
              class="title_label input_base"
            >
            <span class="text-red-500 title_label  mt-1">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mb-3">
          <label for="invite_monk" class="title_label block mb-2 text-sm font-medium text-gray-500 ">บริการนิมนต์พระสงฆ์</label>
          <div class="flex items-center ">
            <div class="flex items-center mr-4">
              <input
                id="invitingMonks2"
                v-model="wedding.invitingMonks"
                type="radio"
                :value="true"
                name="invitingMonks2"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="invitingMonks2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ต้องการ</label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="invitingMonks1"
                v-model="wedding.invitingMonks"
                type="radio"
                :value="false"
                name="invitingMonks1"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="invitingMonks1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ไม่ต้องการ</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="numberOfMonks" class="title_label block mb-2 text-sm font-medium text-gray-500 ">จำนวนพระสงฆ์ *</label>
          <ValidPro v-slot="{ errors }" rules="required" name="จำนวนพระสงฆ์">
            <input
              v-model="wedding.numberOfMonks"
              type="text"
              class="title_label input_base"
            >
            <span class="text-red-500 title_label  mt-1">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mb-3">
          <label for="invite" class="title_label block mb-2 text-sm font-medium text-gray-500 ">เลือกรูปแบบการจัดเลี้ยงพระสงฆ์ *</label>
          <ValidPro v-slot="{ errors }" rules="required" name="เลือกรูปแบบการจัดเลี้ยงพระสงฆ์">
            <select id="invite" v-model="wedding.patternOfMonks" class=" w-full input_base">
              <option selected>
                เลือกรูปแบบการจัดเลี้ยงพระสงฆ์
              </option>
              <option value="1">
                10
              </option>
              <option value="2">
                20
              </option>
              <option value="3">
                30
              </option>
              <option value="4">
                40
              </option>
              <option value="5">
                50
              </option>
            </select>
            <span class="text-red-500 title_label mt-1">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mb-3">
          <label for="deaconService" class="title_label block mb-2 text-sm font-medium text-gray-500 ">บริการมัคนายก / มัคนายิกา แบบมืออาชีพ</label>
          <div class="flex items-center ">
            <div class="flex items-center mr-4">
              <input
                id="deaconService1"
                v-model="wedding.deaconService"
                type="radio"
                :value="true"
                name="deaconService1"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="deaconService1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ต้องการ</label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="deaconService2"
                v-model="wedding.deaconService"
                type="radio"
                :value="false"
                name="deaconService2"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="deaconService2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ไม่ต้องการ</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="typeEvent1" class="title_label block mb-2 text-sm font-medium text-gray-500 ">รูปแบบการจัดงาน</label>
          <div class="flex items-center ">
            <div class="flex items-center mr-4">
              <input
                id="typeEvent1"
                v-model="wedding.typeEvent"
                type="radio"
                value="งานในร่ม"
                name="typeEvent1"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="deaconService1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">งานในร่ม</label>
            </div>
            <div class="flex items-center mr-4">
              <input
                id="typeEvent"
                v-model="wedding.typeEvent"
                type="radio"
                value="งานกลางแจ้ง"
                name="typeEvent2"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="typeEvent2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">งานกลางแจ้ง</label>
            </div>
          </div>
        </div>
        <div class="mt-4 ">
          <label for="message" class="block mb-2 text-[13px] font-medium text-gray-900 dark:text-gray-400">รายละเอียดเพิ่มเติม</label>
          <textarea id="message" v-model="wedding.note" rows="2" class="block p-2.5 w-full text-[10px] text-gray-900 bg-gray-50 rounded-lg border border-submain focus:ring-submain focus:border-submain" />
        </div>
        <div class="flex items-center justify-center mt-10">
          <button type="button" class=" text-white bg-main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-[12px] px-10 py-2.5 text-center mr-2 mb-2 " @click="handleSubmit(submit)">
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  </ValidObs>
</template>

<script>
export default {
  data () {
    return {
      wedding: {
        typeGuests: 1,
        numberOfGuests: 0,
        invitingMonks: false,
        numberOfMonks: 0,
        patternOfMonks: 1,
        deaconService: false,
        typeEvent: 'งานกลางแจ้ง',
        note: ''
      }

    }
  },
  methods: {
    submit () {
      this.$router.push({
        name: 'wedding-step2'
      })
    }
  }
}
</script>

<style>

</style>
