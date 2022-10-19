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
    async  test () {
      // const data = {
      //   name: 'Los Angeles',
      //   state: 'CA',
      //   country: 'USA',
      //   timestamp: this.$moment(new Date()).unix()
      // }

      // // Add a new document in collection "cities" with ID 'LA'
      // const res = await this.$db.collection('cities').doc('3').set(data)
      // console.log(this.$moment(new Date()).format('YYYYMM'))
      // await his.$db.collection('cities').get().then((querySnapshot) => {
      //   console.log(querySnapshot.size)
      // })
      let x = await this.$db.collection('cities').orderBy('timestamp', 'desc').limit(1).get()
      if (x.size) {
        const data = {
          id: x.docs[x.size - 1].data().id + 1,
          timestamp: this.$moment(new Date()).unix()
        }
        const res = await this.$db.collection('cities').add(data)
        let runid = ('000000' + (x.docs[x.size - 1].data().id + 1))
        let prefixtime = this.$moment(new Date()).format('YYYYMM')
        console.log(prefixtime + runid)
        // const data = {
        //   id: 1,
        //   timestamp: this.$moment(new Date()).unix()
        // }
        // const res = await this.$db.collection('cities').set(data)
      }
      // const data = {
      //   id: 1,
      //   timestamp: this.$moment(new Date()).unix()
      // }
      // const res = await this.$db.collection('cities').add(data)
      // console.log(res)
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
