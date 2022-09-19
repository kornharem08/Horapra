<template>
  <div class="px-[24pt]">
    <guest-information title="ขอทำความรู้จักคุณลูกค้าหน่อยนะคะ" @submit="submit" />
  </div>
</template>

<script>
import guestInformation from '../components/GuestInfomation'
export default {
  name: 'IndexPage',
  components: { guestInformation },
  methods: {
    submit () {
      const menu = {
        1: 'buffet',
        2: 'lunchbox',
        3: 'auspicious',
        4: 'wedding',
        5: 'coffeeBreak'
      }

      this.$router.push({
        name: menu[Number(this.$route.query.menu)]
      })

      // console.log(this.$route.query.menu)
    }
  }
}
</script>
