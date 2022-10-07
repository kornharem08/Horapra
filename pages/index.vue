<template>
  <div class="px-[24pt]">
    <guest-information title="ขอทำความรู้จักคุณลูกค้าหน่อยนะคะ" @submit="submit" />
    <button type="button" class="button_optional" @click="next">
      ข้าม
    </button>
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
        5: 'coffeeBreak',
        6: 'sdg'
      }

      this.$router.push({
        name: menu[Number(this.$route.query.menu)]
      })

      // console.log(this.$route.query.menu)
    },
    next () {
      if (this.$route.query.menu) {
        const menu = {
          1: 'buffet',
          2: 'lunchbox',
          3: 'auspicious',
          4: 'wedding',
          5: 'coffeeBreak',
          6: 'sdg'
        }

        this.$router.push({
          name: menu[Number(this.$route.query.menu)]
        })
      } else {
        this.$router.push('/menu')
      }
    }
  }
}
</script>
