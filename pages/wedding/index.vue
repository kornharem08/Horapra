<template>
  <div>
    <base-button-back title="ย้อนกลับ" class="mb-2" @back="back" />
    <div class="pt-10">
      <section v-if="step === 0">
        <div class=" mb-[10pt] px-[24pt]">
          <div
            v-swiper:pintoIamge="swiperOptionsimage"
            class="swiper "
          >
            <div class="swiper-wrapper  " @click.stop="">
              <div class="swiper-slide ">
                <div class="mx-auto flex flex-col justify-center items-center  w-full overflow-hidden  aspect-video cursor-pointer mt-3 mb-4 " @click="selectImage =`/button/Button/5/Wedding@Home-Banner.jpg`,isImages = true">
                  <img
                    class="rounded-[10pt] object-cover h-full w-full"
                    :src="require(`~/assets/img/button/Button/5/Wedding@Home-Banner.jpg`)"
                  >
                </div>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets" />
          </div>
          <div class="text-[15px] mb-[10pt]">
            เลือกแพ็คเกจ
          </div>
          <div class="grid gap-2 mb-6 grid-cols-2 mt-2">
            <div v-for="(item,idx) in weddingSet" :key="idx" @click="selectPackage(item,idx)">
              <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white">
                <img
                  class="rounded-[10pt] object-cover  h-full w-full"
                  :src="require(`~/assets/img${item.url}`)"
                >
              </div>
              <div class="text-center text-[15px]  mt-2">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ValidObs ref="validator3">
        <section v-if="step ===1">
          <div class="px-[24pt]">
            <p v-if="step > 0" class="mb-2 text-[15px]">
              {{ packages.name }}
            </p>
            <div class="mx-auto flex flex-col justify-center items-center  w-full overflow-hidden  aspect-video cursor-pointer mt-3 mb-4 " @click="selectImage =`/wedding/images/${imagesindex}.jpg`,isImages = true">
              <img
                class="rounded-[10pt] object-cover h-full w-full"
                :src="require(`~/assets/img/wedding/images/${imagesindex}.jpg`)"
              >
            </div>
          </div>
          <div class="px-[24pt]">
            <p class="text-[12pt] mt-2">
              รายละเอียดสิ่งที่จะได้ในแพ็คเกจนี้
            </p>
          </div>
          <div class="mt-4 px-[24pt]">
            <span class="text-[12pt]">รูปแบบการจัดงาน*</span>
            <div class="flex">
              <div class="flex items-center">
                <input
                  id="bordered-checkbox-1"
                  v-model="packages.style"
                  type="radio"
                  :value="true"
                  name="bordered-checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-[16px] flex ">งานในร่ม</label>
              </div>
              <div class="flex items-center pl-4 ">
                <input
                  id="bordered-checkbox-2"
                  v-model="packages.style"
                  type="radio"
                  :value="false"
                  name="bordered-checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-[16px] flex ">งานกลางแจ้ง</label>
              </div>
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
            <ValidPro v-slot="{ errors }" rules="required|minquantity:1" class="col-span-2" name="ระบุจำนวนแขก">
              <label for="ระบุจำนวนแขก" class="text-[12pt]">ระบุจำนวนแขก</label>
              <input
                v-model="packages.guest"
                style="box-shadow: rgba(19, 41, 104 , 0.1) 0px 4px 8px ;"
                class="block py-2.5 px-4 w-1/2 text-[#142917] bg-gray-50 rounded-full border-none  outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
                type="number"
                name="ระบุจำนวนแขก"
                placeholder="ระบุจำนวนแขก"
                @blur="packages.guest === null ? packages.guest = 0 : packages.guest"
                @focus="packages.guest === 0 ? packages.guest = null : packages.guest"
              >
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
          <div class="mt-[30pt] px-[24pt]">
            <label for="message" class="block mb-2 text-[12pt] font-medium ">โน้ตเพิ่มเติม</label>
            <textarea id="message" v-model="note" rows="4" class="input_base_textarea" />
          </div>
          <the-footer-button>
            <template #button>
              <button type="button" class="button_base " @click="handleDate">
                ถัดไป
              </button>
            </template>
          </the-footer-button>
        </section>
      </ValidObs>
      <section v-show="step === 2" class="step4 ">
        <div class="px-[24pt]">
          <div class="mt-6  bg-white rounded-[10pt] p-[20px] text-[14pt]">
            <div class="text-[16pt] font-medium text-center mb-[10pt]">
              สรุปรายการ
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium   ">
                ชื่อ-นามสกุล
              </p>
              <p class=" ">
                {{ $store.state.users.name }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium    ">
                เบอร์โทร
              </p>
              <p class="text-right">
                {{ $store.state.users.phone }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium   ">
                ชื่อ Line
              </p>
              <p class="">
                {{ $store.state.users.line ? $store.state.users.line : '-' }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium  w-1/2">
                ชื่อ Facebook
              </p>
              <p class="w-1/2 text-right">
                {{ $store.state.users.email ? $store.state.users.email : '-' }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium   w-1/2 ">
                จำนวนแขก
              </p>
              <p class="w-1/2 text-right">
                {{ (Number(packages.guest)).toString() }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium w-1/2">
                รูปแบบการจัดงาน
              </p>
              <p class="w-1/2">
                {{ packages.name }} {{ packages.style ? 'งานในร่ม' : 'งานกลางแจ้ง' }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium w-1/2">
                รายละเอียดเพิ่มเติม
              </p>
              <p class="w-1/2 text-right">
                {{ note }}
              </p>
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base " @click="submit">
              สนใจให้เจ้าหน้าที่ติดต่อกลับ
            </button>
            <button type="button" class="button_optional " @click="$router.push('/menu')">
              สั่งรายการอื่นเพิ่มเติม
            </button>
          </template>
        </the-footer-button>
      <!-- <the-quotation @handleSubmitInformation="submit" /> -->
      </section>
      <modalfinish v-if="isFinish" @close="handelfinish" />
      <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
      <modalerror v-if="isError" @close="handelfinish" />
      <ModalImages v-if="isImages" :img="selectImage" @close="isImages = false,selectImage = ''" />
    </div>
  </div>
</template>

<script>
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation.vue'
import Modalerror from '../../components/Modal/modalerror.vue'
import ModalImages from '../../components/Modal/images'
import weddingSet from '@/static/json/wedding.json'
export default {
  components: {
    ModalguestInformation,
    modalfinish,
    Modalerror,
    ModalImages
  },
  data () {
    return {
      isImages: false,
      selectImage: '',
      orderIdByfirebase: 0,
      step: 0,
      weddingSet,
      fields: {},
      setName: '',
      packages: {
        name: '',
        value: null,
        price: 0,
        guest: 0,
        style: true
      },
      imagesindex: 1,
      isModalinfo: false,
      isFinish: false,
      isError: false,
      note: '',
      swiperOptionsimage: {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      }
    }
  },
  methods: {
    handleDate () {
      this.$refs.validator3.validate().then((res) => {
        if (res) {
          this.step++
        }
      })
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false
      this.$router.push('/menu')
    },
    async  countFirebase () {
      // let x = await this.$db.collection('cities').orderBy('timestamp', 'desc').limit(1).get()
      // if (x.size) {
      //   const data = {
      //     id: x.docs[x.size - 1].data().id + 1,
      //     timestamp: this.$moment(new Date()).unix()
      //   }
      //   const res = await this.$db.collection('cities').add(data)
      //   let runid = ('000000' + (x.docs[x.size - 1].data().id + 1))
      //   let prefixtime = this.$moment(new Date()).format('YYYYMM')
      //   this.orderIdByfirebase = prefixtime + runid
      // } else {
      //   this.orderIdByfirebase = Math.floor(100000 + Math.random() * 900000)
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
    async submit (data) {
      if ((!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
        return
      }
      await this.countFirebase()
      this.$store.dispatch('handleLoading', true)

      Object.assign(this.fields, {
        Name: this.$store.state.users.name,
        เบอร์โทร: this.$store.state.users.phone,
        'เบอร์โทร (สำรอง)': '-',
        'ชื่อ facebook': this.$store.state.users.email,
        'ชื่อ Line': this.$store.state.users.line,
        ยอดเงิน: this.packages.price,
        วันส่งสินค้า: this.$moment(new Date()).format('L'),
        เวลาพร้อมทาน: '-',
        ลิฟท์ขนของ: 'ไม่มี',
        รหัสไปรษณีย์: Number('00000'),
        สรุปรายการ: this.packages.style ? 'งานในร่ม' : 'งานกลางแจ้ง',
        'Rich Menu': [
          'wedding@home'],
        'Package หลัก': this.packages.name,
        'Package รอง': '-',
        'สถานที่จัดงาน (ที่อยู่)': '',
        อุปกรณ์เสริม: '',
        Notes: this.note,
        'Order ID': this.orderIdByfirebase,
        จำนวนพระสงฆ์: '',
        'จำนวนแขก (รวมพระ)': (Number(this.packages.guest)).toString(),
        // รูปแบบการจัดงานเลี้ยง: `${setMonk.name}: ${setMonk.price} บาท`,
        วันรับออเดอร์: this.$moment(new Date()).format('L'),
        'Last Contact': this.$moment(new Date()).format('L'),
        'Sales Stage': 'New Lead'
      })

      let Airtable = require('airtable')
      let base = new Airtable({ apiKey: 'keyt0HxfGGJGs7yGh' }).base('appY634zk0TsIzkJ9')

      const createRecord = async () => {
        try {
          await base('Sales Deals').create([
            {
              fields: this.fields
            }

          ])
          this.isFinish = true
        } catch (err) {
          console.log(err)
          this.isError = true
          this.$store.dispatch('handleLoading', false)
        } finally {
          this.$store.dispatch('handleLoading', false)
        }
      }
      createRecord().then((res) => {
        console.log(res)
      })
    },
    selectPackage (value, index) {
      console.log(index)
      this.imagesindex = Number(index + 1)
      this.packages.name = value.name
      this.packages.price = value.price
      this.packages.value = value.value
      this.setName = value.name
      this.step++
    },
    back () {
      if (this.step === 0) {
        this.$router.push('/menu')
      } else {
        this.step--
      }
    }
  }
}
</script>
