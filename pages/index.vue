<template>
  <div>
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
      this.$router.push('/menu')
    }
  }
}
</script>
