<template>
  <div style="background-color:rgba(0, 0, 0, 0.5);" class="py-12 h-full   transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
    <div class="container mx-auto w-11/12  max-w-lg flex justify-center  ">
      <div class="relative w-11/12 bg-white dark:bg-gray-800 shadow pt-10 pb-8 rounded-[10pt] px-[24pt]">
        <guest-information title="กรุณากรอกข้อมูล" @submit="submit" />
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
