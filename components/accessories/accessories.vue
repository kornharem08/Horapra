<template>
  <div>
    <the-heading :is-back="true" @back="back" />
    <div class="px-3 py-10">
      <the-title-text title="เลือกอุปกรณ์เพิ่มเติม" />
      <div class="grid grid-cols-2 gap-3 mt-6">
        <div v-for="(item,idx) in 6" :key="idx" class="mt-2">
          <card />
          <div class="flex items-center justify-center mt-4">
            <span class="focus:outline-none  focus:ring-2 focus:ring-offset-2 bg-white rounded-full focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center " @click="minus()">-</span>
            <input id="counter" v-model="counter" aria-label="input" class="border rounded-full text-[13px]  border-gray-300 dark:bg-transparent  text-center w-14  mx-2" type="text">
            <span class="focus:outline-none  focus:ring-2 focus:ring-offset-2 bg-white rounded-full focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center " @click="plus()">+</span>
          </div>
        </div>
      </div>
      <div class="text-center text-[13px] mt-10">
        หากไม่ต้องการอุปกรณ์เพิ่มเติม กรุณากดข้าม
      </div>
      <div class="flex items-center justify-center mt-4">
        <button type="button" class=" text-main bg-white border-2 border-main  focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-[12px] px-10 py-2.5 text-center mr-2 mb-2 " @click="next">
          ข้าม
        </button>
        <button type="button" class=" text-white bg-main hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-[12px] px-10 py-2.5 text-center mr-2 mb-2 " @click="next">
          ถัดไป
        </button>
      </div>
    </div>
    <ModalContentText v-if="isModal" @close="isModal = false" />
  </div>
</template>

<script>
import Card from '../Card.vue'
import ModalContentText from '../Modal/contentText.vue'
export default {
  components: { Card, ModalContentText },
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      counter: 0,
      isModal: true
    }
  },
  methods: {
    minus () {

    },
    plus () {

    },
    back () {
      this.$emit('nextStep', this.step - 1)
    },
    next () {
      this.$emit('nextStep', this.step + 1)
    }
  }

}
</script>

<style>

</style>
