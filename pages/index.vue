<template>
  <div class="px-[24pt]">
    <guest-information title="ขอทำความรู้จักคุณลูกค้าหน่อยนะคะ" @submit="submit" />
    <button type="button" class="button_optional" @click="next">
      ข้าม
    </button>
    <!-- <button type="button" class="button_optional" @click="test">
      check
    </button> -->
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
      // let x = await this.$db.collection('cities').orderBy('timestamp', 'desc').limit(1).get()

      // let month = this.$moment(new Date()).format('M')
      // let dataMonth = this.$moment(x.docs[x.size - 1].data().month).format('M')
      // console.log(x.docs[x.size - 1].data().month, 'x.docs[x.size - 1].data().month')
      // if (dataMonth !== 10) {
      //   let runid = ('000000' + 1)
      //   let prefixtime = this.$moment(new Date()).format('YYYYMM')
      //   let x = prefixtime + runid
      //   console.log(x)
      // }

      // if (x.size) {
      //   let id = 0

      //   const data = {
      //     id: x.docs[x.size - 1].data().id + 1,
      //     timestamp: this.$moment(new Date()).unix(),
      //     month: this.$moment(new Date()).format('M')
      //   }
      //   // const res = await this.$db.collection('cities').add(data)
      //   let runid = ('000000' + (x.docs[x.size - 1].data().id + 1))
      //   let prefixtime = this.$moment(new Date()).format('YYYYMM')
      //   console.log(month, 'month')
      // }

      let x = await this.$db.collection('cities').orderBy('date', 'desc').limit(1).get()
      let id = 0
      let currentMonth = this.$moment(new Date()).format('M')
      let pastMonth = x.docs[x.size - 1].data().month
      if (+currentMonth === +pastMonth) {
        id = x.docs[x.size - 1].data().id + 1
      } else {
        id = 1
      }

      if (x.size) {
        const data = {
          id,
          timestamp: this.$moment(new Date()).unix(),
          month: this.$moment(new Date()).format('M'),
          date: this.$moment(new Date()).unix()
        }
        const res = await this.$db.collection('cities').add(data)
        let runid = ('000000' + id)
        let prefixtime = this.$moment(new Date()).format('YYYYMM')
        this.orderIdByfirebase = prefixtime + runid
      } else {
        this.orderIdByfirebase = Math.floor(100000 + Math.random() * 900000)
      }
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
