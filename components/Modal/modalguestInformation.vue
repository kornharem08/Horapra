<template>
  <div style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full   transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
    <div class="container mx-auto w-11/12  max-w-lg flex justify-center  ">
      <div class="relative w-11/12 bg-white dark:bg-gray-800 shadow pt-10 pb-8 relative rounded-[10pt] px-[24pt]">
        <guest-information title="กรุณากรอกข้อมูล" @submit="submit" />
        <button type="button" class="inline-flex items-center p-2 ml-3 text-sm  cursor-pointer focus:outline-none absolute top-2 right-2" aria-controls="navbar-default" @click="submit">
          <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import guestInformation from '../GuestInfomation'
export default {
  components: { guestInformation },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>

<style>

</style>
