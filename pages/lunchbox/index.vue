<template>
  <div>
    <div class="text-white px-4">
      {{ selectedSet ? selectedSet.name : null }}    {{ step }}
    </div>
    <!--selectBox.name ? selectBox.name : '' -->
    <base-button-back v-if="step !== 3" :title="setName" @back="back" />

    <section v-if="$route.query.morepackage && step === 0">
      <div class="grid gap-6 mb-6 grid-cols-2">
        <div v-for="(item,idx) in lunchset" :key="idx" @click="selectMorePackage(item)">
          <card :show-detail="false" />
          <div class="text-center text-white mt-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 1 && setNumber === 1" class="step1 px-3">
      <div class="grid grid-cols-2 gap-3 ">
        <div v-for="(box,index) in boxset" :key="index" class="mt-2" @click="selectBoxSet(box)">
          <card :name="box.name" :price="Number(box.price)" />
          <div class="flex items-center text-[14px] text-white justify-center mt-4">
            {{ box.name }}
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 2 " class="step2 px-3 text-white pb-10">
      <div>
        <div
          v-if="setNumber !== 2"
          v-swiper:mySwiper="swiperOptions"
          class="swiper mt-4"
        >
          <div v-if="selectBox.value === 3" class="swiper-wrapper">
            <div v-for="(item, key , index) in lunchboxmenu" :key="index" class="swiper-slide " @click="selectListMenu = index">
              <div class="p-2 h-8 flex text-[12px]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#EEDAB9] text-[#EEDAB9]' : ''">
                {{ key }}
              </div>
            </div>
          </div>
          <div v-if="selectBox.value === 1" class="swiper-wrapper">
            <div v-for="(item, key , index) in luchDuomenu" :key="index" class="swiper-slide " @click="selectListMenu = index">
              <div class="p-2 h-8 flex text-[12px]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#EEDAB9] text-[#EEDAB9]' : ''">
                {{ key }}
              </div>
            </div>
          </div>
          <div v-if="selectBox.value === 2" class="swiper-wrapper">
            <div v-for="(item, key , index) in luchTriomenu" :key="index" class="swiper-slide " @click="selectListMenu = index">
              <div class="p-2 h-8 flex text-[12px]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#EEDAB9] text-[#EEDAB9]' : ''">
                {{ key }}
              </div>
            </div>
          </div>
        </div>
        <div v-for=" (list,i) in setNumber !== 2 ? lists[selectListMenu] : lists" :key="i" class=" bg-white rounded p-1 mt-4">
          <div
            class="overflow-hidden border border-gray-100 rounded-lg grid  group grid-cols-3"
            href=""
          >
            <div class="relative">
              <img
                class="absolute inset-0 object-cover w-22 h-22"
                src="https://www.hyperui.dev/photos/activity-1.jpeg"
                alt=""
              >
            </div>

            <div class="p-2 col-span-2">
              <div class="text-[#142917] text-[12pt]">
                {{ list.name }}
              </div>

              <div class="block product-count-button-position mt-2">
                <div class="flex items-center border-[#5A7F52] border justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-32">
                  <button class="flex text-[#5A7F52]  items-center justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8  h-8 rounded-2xl text-heading hover:bg-fill-four ltr:ml-1 rtl:mr-1" @click="list.count > 0 ? list.count-- : 0">
                    <span class="sr-only">button-minus</span>
                    <svg
                      class="transition-all"
                      width="14"
                      height="14"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ><g opacity="1"><path d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                  </button>
                  <span class="font-semibold text-black flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6 md:w-8">{{ list.count }}</span>
                  <button class="group flex text-[#5A7F52] items-center justify-center h-full shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8  h-8 rounded-2xl text-heading hover:bg-fill-four ltr:mr-1 rtl:ml-1" title="" @click="increse(list)">
                    <span class="sr-only">button-plus</span>
                    <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 3">
      <div class="flex justify-between items-center px-3 mb-3">
        <div class="text-white">
          สรุปรายการอาหาร
        </div>
        <div v-if="menu.length < 5" class="text-[#EEDAB9]" @click="addmore">
          เพิ่มรายการ
        </div>
      </div>
      <div class="px-3">
        <ValidObs ref="validator3">
          <div v-for="(item,index) in menu" :key="index" class="bg-white rounded mb-3">
            <ValidPro v-slot="{ errors }" :rules="`morethan:5`" :name="item.menu">
              <div class="flex justify-between items-center">
                <div class="p-2 flex flex-col">
                  <span class="text-sm">{{ index+1 }}. {{ item.name }} ({{ item.price }}บาท) </span>
                  <span class="text-xs">   ({{ item.menu }})</span>
                </div>
                <div class="block product-count-button-position mt-2 px-2">
                  <div class="flex items-center border-[#5A7F52] border justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-32">
                    <button class="flex text-[#5A7F52]  items-center justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8  h-8 rounded-2xl text-heading hover:bg-fill-four ltr:ml-1 rtl:mr-1" @click="minus(item,index)">
                      <span class="sr-only">button-minus</span>
                      <svg
                        class="transition-all"
                        width="14"
                        height="14"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      ><g opacity="1"><path d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                    </button>
                    <input v-model="item.count " type="number" class="border-none  text-black text-center focus:outline-none focus:ring-0  text-sm ">

                    <!-- <span class="font-semibold text-black flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6 md:w-8">{{ item.count }}</span> -->
                    <button class="group flex text-[#5A7F52] items-center justify-center h-full shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8  h-8 rounded-2xl text-heading hover:bg-fill-four ltr:mr-1 rtl:ml-1" title="" @click="item.count++">
                      <span class="sr-only">button-plus</span>
                      <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                    </button>
                  </div>
                </div>
              </div>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
        </ValidObs>
        <div class="text-center mb-4">
          <span class="text-red-500">*</span> <span class="text-white text-xs"> หมายเหตุ: เฉพาะรายการข้าวกล่องเพิ่มรายการได้สูงสุด 5 รายการ</span>
        </div>
        <div class="text-white">
          <div class="flex justify-between">
            <span>รวมทั้งหมด</span>  <span>{{ totalMenu }} กล่อง </span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 1 && setNumber === 2" class="step1 ">
      <div class="px-3 ">
        <div class="flex justify-center items-center border rounded my-4 h-40 text-white">
          รูปภาพ
        </div>
      </div>
      <div class="text-white text-center px-3">
        Box Set รักษ์โลกที่เหมาะกับทุกงานจัดเลี้ยง ที่โหระพาตั้งใจคัดสรรบรรจุภัณฑ์ที่ย่อยสลายได้เองตามธรรมชาติ
      </div>
    </section>

    <section v-if="step === 1 && setNumber === 3" class="step1 ">
      <div class="text-white">
        <div class="px-3 ">
          <div class="flex justify-center items-center border rounded my-4 h-40 text-white">
            รูปภาพ
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 3">
      <!-- <div class="px-3 ">
        <div class="flex justify-center items-center border rounded my-4 h-40 text-white">
          รูปภาพ
        </div>
      </div> -->
    </section>

    <section v-if="step === 4" class="step4">
      <the-quotation @handleSubmitInformation="submit" />
    </section>

    <the-footer-button>
      <template #button>
        <button v-if="step === 1 && setNumber !== 1" type="button" class="button_base " @click="step++">
          ถัดไป
        </button>
        <button v-if="step === 2" type="button" class="button_base " @click="handleresulte">
          ถัดไป
        </button>
        <button v-if="step === 3" type="button" class="button_base " @click="handleValidate">
          ยืนยัน
        </button>
      </template>
    </the-footer-button>

    <!-- <div class="px-3">
      <button v-if="step === 1 && setNumber !== 1" type="button" class="button_base " @click="step++">
        ถัดไป
      </button>
      <button v-if="step === 2" type="button" class="button_base " @click="handleresulte">
        ถัดไป
      </button>
      <button v-if="step === 3" type="button" class="button_base " @click="handleValidate">
        ยืนยัน
      </button>
    </div> -->
    <modalfinish v-if="isFinish" @close="handelfinish" />
  </div>
</template>

<script>

import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import boxset from '@/static/json/boxset.json'
import boxsetmenu from '@/static/json/boxset/menu.json'
import lunchset from '@/static/json/lunchset.json'
import lunchboxmenu from '@/static/json/lunchmenu/lunchboxmenu.json'
import luchDuomenu from '@/static/json/lunchmenu/lubchboxduoset.json'
import luchTriomenu from '@/static/json/lunchmenu/lunchboxtrioset.json'
export default {
  components: {
    BaseButtonBack,
    modalfinish
  },
  data () {
    return {
      boxset,
      lunchset,
      lunchboxmenu,
      boxsetmenu,
      luchDuomenu,
      luchTriomenu,
      step: 0,
      setNumber: 0,
      isFinish: false,
      selectListMenu: 0,
      lists: [],
      selectBox: {},
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 5,
        freeMode: true
      },
      menu: [],
      fields: {},
      set: this.$route.query.set ? this.$route.query.set : 1
    }
  },
  computed: {
    selectedSet () {
      return this.lunchset.find(x => x.value === this.setNumber)
    },
    totalMenu () {
      return this.menu.reduce((sum, current) => sum + current.count, 0)
    },
    totalPrice () {
      return this.menu.reduce((sum, current) => sum + current.count * current.price, 0)
    },
    setName () {
      if (this.step === 0 || this.step === 1) {
        if (this.step === 1) {
          if (this.$route.query.morepackage) {
            return 'ย้อนกลับ'
          } else {
            return 'กลับหน้าหลัก'
          }
        } else {
          return 'สิริมงคล'
        }
      } else {
        return this.selectBox.name ? this.selectBox.name : 'ย้อนกลับ'
      }
    }
  },
  mounted () {
    if (this.$route.query.set) {
      this.setNumber = Number(this.$route.query.set)
    }

    if (!this.$route.query.morepackage) {
      if (this.$route.query.set !== 2) {
        this.lists = Object.keys(this.lunchboxmenu).map(k => this.lunchboxmenu[k].map((el) => {
          return {
            ...el,
            count: 0
          }
        }))
      } else {
        this.lists = this.boxsetmenu.map((k) => {
          return {
            ...k,
            count: 0
          }
        }
        )
      }
    }

    if (this.$route.query.morepackage) {
      this.step = 0
    } else {
      this.step = 1
    }
  },
  methods: {
    selectMorePackage (item) {
      this.setNumber = item.value
      if (item.value !== 2) {
        this.lists = Object.keys(this.lunchboxmenu).map(k => this.lunchboxmenu[k].map((el) => {
          return {
            ...el,
            count: 0
          }
        }))
      } else {
        this.lists = this.boxsetmenu.map((k) => {
          return {
            ...k,
            count: 0
          }
        }
        )
      }
      console.log(this.lists)
      this.step = 1
    },
    minus (item, index) {
      if (item.count > 0) {
        item.count--
      } else {
        this.menu.splice(index, 1)
      }
    },
    handleValidate () {
      if (this.menu.length > 0) {
        this.$refs.validator3.validate().then((res) => {
          if (res) {
            this.step++
          }
        })
      } else {
        this.$notify({ group: 'auth', text: 'กรุณาเพิ่มรายการอาหารอย่างน้อย 1 รายการ', type: 'warning' })
      }
    },
    increse (item) {
      let result = []
      if (this.setNumber !== 2) {
        this.lists.forEach((element) => {
          result.push(
            ...element.filter(x => x.count > 0).map((el) => {
              return {
                menu: el.name,
                price: el.price,
                count: el.count,
                ...this.selectBox
              }
            })
          )
        })
      } else {
        result = this.lists.filter(element =>
          element.count > 0
        ).map((el) => {
          return {
            menu: el.name,
            price: el.price,
            count: el.count,
            ...this.selectBox
          }
        })
      }

      let found = result.some(x => x.menu === item.name)

      if ((result.length < 5 && (this.menu.length + result.length) < 5) || found) {
        item.count++
      }
    },
    addmore () {
      this.step = 1
      this.selectBox = {}
      this.selectListMenu = 0
    },
    handleresulte () {
      let result = []
      if (this.setNumber !== 2) {
        this.lists.forEach((element) => {
          result.push(
            ...element.filter(x => x.count > 0).map((el) => {
              return {
                menu: el.name,
                price: el.price,
                count: el.count,
                ...this.selectBox
              }
            })
          )
        })
      } else {
        result = this.lists.filter(element =>
          element.count > 0
        ).map((el) => {
          return {
            menu: el.name,
            price: el.price,
            count: el.count,
            ...this.selectBox
          }
        })
      }

      result.forEach((element) => {
        let found = this.menu.find(el => el.menu === element.menu)
        if (found) {
          found.count += element.count
        } else {
          this.menu.push(element)
        }
      })

      console.log(this.menu)

      this.step++
    },
    handelfinish () {
      this.isFinish = false
      this.$router.push('/menu')
    },
    submit (data) {
      this.$store.dispatch('handleLoading', true)
      const newStuff = this.menu.reduce((a, currentValue) =>
        [...a, Number(this.setNumber) !== 2 ? `(${currentValue.name})${currentValue.menu} x ${currentValue.count}` : `${currentValue.menu} x ${currentValue.count}`], [])
      if (this.$route.query.morepackage) {
        let result = newStuff.join('\r\n')
        let totalPriceMonkPacakge = 0
        if (Number(this.$route.query.morepackage) === 2) {
          result += `\n${this.$store.state.auspicious_packages.style_buffet.name} ${this.$store.state.auspicious_packages.style_buffet.price} 'บาท'`
          totalPriceMonkPacakge = (Number(this.$store.state.auspicious_packages.monk) * this.$store.state.auspicious_packages.style_buffet.price)
        }

        Object.assign(this.fields, {
          'Rich Menu': [
            'สิริมงคล'],
          'Package หลัก': this.$store.state.auspicious_packages.package,
          'Package รอง': `${this.selectedSet.name}`,
          'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
          จำนวนพระสงฆ์: this.$store.state.auspicious_packages.monk,
          'จำนวนแขก (รวมพระ)': this.$store.state.auspicious_packages.monk,
          ยอดเงิน: Number(Number(this.totalPrice) + Number(totalPriceMonkPacakge)),
          สรุปรายการ: result

        })
      } else {
        Object.assign(this.fields, {
          'Rich Menu': [
            'ข้าวกล่องรักษ์โลก/ชุดปิ่นโตอิ่มบุญ'],
          'Package หลัก': `${this.selectedSet.name}`,
          ยอดเงิน: this.totalPrice,
          'Package รอง': '-',
          จำนวนพระสงฆ์: '-',
          'จำนวนแขก (รวมพระ)': '',
          สรุปรายการ: newStuff.join('\r\n')

        })
      }

      Object.assign(this.fields, {
        Name: this.$store.state.users.name,
        เบอร์โทร: this.$store.state.users.phone,
        'เบอร์โทร (สำรอง)': data.phone_backup,
        อีเมล: this.$store.state.users.email,
        วันส่งสินค้า: this.$moment(data.date).format('L'),
        เวลาพร้อมทาน: data.time,
        ลิฟท์ขนของ: data.cargo_lift ? 'มี' : 'ไม่มี',
        รหัสไปรษณีย์: Number(data.post_code),
        'สถานที่จัดงาน (ที่อยู่)': `${data.address} เขต/อำเภอ ${data.subdistrict} แขวง/ตำบล ${data.district} จังหวัด${data.province}`,
        อุปกรณ์เสริม: '',
        'จำนวนแขก (รวมพระ)': '-',
        // รูปแบบการจัดงานเลี้ยง: `${setMonk.name}: ${setMonk.price} บาท`,
        วันรับออเดอร์: this.$moment(new Date()).format('L'),
        'Last Contact': this.$moment(new Date()).format('L')
      })

      let Airtable = require('airtable')
      let base = new Airtable({ apiKey: 'keyt0HxfGGJGs7yGh' }).base('app8GE6tvKpt6fwj5')
      const createRecord = async () => {
        try {
          await base('Sales Deals').create([
            {
              fields: this.fields
            }

          ])
        } catch (err) {
          console.log(err)
          this.$store.dispatch('handleLoading', false)
        } finally {
          this.isFinish = true
          this.$store.dispatch('handleLoading', false)
        }
      }
      createRecord()
      console.log(this.fields)
    },
    back () {
      if (this.$route.query.morepackage) {
        if (this.step === 1) {
          this.step = 0
        } else if (this.step === 0) {
          let set = this.$route.query.morepackage
          this.$router.push({
            name: 'auspicious',
            query: { set }
          })
        } else {
          this.step--
        }
      }

      if (!this.$route.query.morepackage) {
        if (this.step !== 1) {
          this.step--
        } else {
          this.$router.push('/menu')

          this.selectListMenu = 0
        }
      }

      // if (this.step !== 1) {
      //   this.step--
      // } else {
      //   this.$router.push('/menu')

      //   this.selectListMenu = 0
      // }
    },
    selectBoxSet (set) {
      this.selectBox = set
      this.step = 2
      this.setmenu(set.value)
      console.log(set, 'set')
    },
    setmenu (value) {
      if (value === 1) {
        this.lists = Object.keys(this.luchDuomenu).map(k => this.luchDuomenu[k].map((el) => {
          return {
            ...el,
            count: 0
          }
        }))
      }

      if (value === 2) {
        this.lists = Object.keys(this.luchTriomenu).map(k => this.luchTriomenu[k].map((el) => {
          return {
            ...el,
            count: 0
          }
        }))
      }

      if (value === 3) {
        this.lists = Object.keys(this.lunchboxmenu).map(k => this.lunchboxmenu[k].map((el) => {
          return {
            ...el,
            count: 0
          }
        }))
      }
    }
  }
}
</script>

<style>

</style>
