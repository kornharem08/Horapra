<template>
  <client-only>
    <div class=" ">
      <base-button-back :title="step === 1 ? 'กลับหน้าหลัก' : 'สิริมงคล'" @back="back" />
      <section v-if="step === 1 " class="p-3">
        <div>
          <span v-if="setName" class="text-white"> {{ setName }}</span>
          <div class="h-32 w-full text-center border text-white rounded flex itmes-center justify-center">
            รูปภาพ
          </div>
        </div>
        <div>
          <div class="mt-2 text-white">
            แพ็คเกจ
          </div>

          <div class="grid gap-6 mb-6 grid-cols-2 ">
            <div v-for="(item,idx) in pacakgex" :key="idx" class="text-center" @click="selectpackage(item.value)">
              <card :name="item.name" />
              <div class="mt-2 text-white">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="step === 2 && $route.query.set !== 2" class="p-3">
        <ValidObs ref="validator4">
          <div>
            <span v-if="setName" class="text-white"> {{ setName }}</span>
            <div class="h-32 w-full text-center border text-white rounded flex itmes-center justify-center">
              รูปภาพ
            </div>
          </div>
          <div>
            <p class=" mt-4 text-white">
              ชื่อแพ็คเกจ {{ packages.package }}
            </p>
            <p class="text-sm mt-2 text-white">
              รายละเอียดสิ่งที่จะได้ในแพ็คเกจนี้
            </p>
          </div>
          <div class="mt-4 text-white">
            บริการนิมนต์พระสงฆ์*
            <div class="flex">
              <div class="flex items-center">
                <input
                  id="bordered-checkbox-1"
                  v-model="packages.is_monk"
                  type="radio"
                  :value="true"
                  name="bordered-checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium flex text-white">ต้องการ</label>
              </div>
              <div class="flex items-center pl-4 ">
                <input
                  id="bordered-checkbox-2"
                  v-model="packages.is_monk"
                  type="radio"
                  :value="false"
                  name="bordered-checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium flex text-white">ไม่ต้องการ</label>
              </div>
            </div>
          </div>
          <div v-if="packages.is_monk" class="grid gap-6 mb-6 grid-cols-2">
            <ValidPro v-slot="{ errors }" rules="required|minquantity:1" class="col-span-2" name="จำนวนพระสงฆ์">
              <label for="จำนวนพระสงฆ์" class="label_base">จำนวนพระสงฆ์</label>
              <input
                v-model="packages.monk"
                class="input_base w-24"
                type="number"
                name="จำนวนพระสงฆ์"
                placeholder="จำนวนพระสงฆ์"
                @blur="packages.monk === null ? packages.monk = 0 : packages.monk"
                @focus="packages.monk === 0 ? packages.monk = null : packages.monk"
              >
              <!-- <base-input v-model="packages.monk" type="text" placeholder="จำนวนพระสงฆ์ *" label="ระบุจำนวนพระสงฆ์*" /> -->
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>

          <div class="text-xs text-center text-white">
            *หมายเหตุ: หากต้องการนิมนต์พระสงฆ์ ต้องแจ้งล่วงหน้าอย่างน้อย 15 วัน
          </div>
          <div class="mt-4  text-white">
            บริการมัคนายก/มัคนายิกา แบบมืออาชีพ
            <div class="flex  text-white">
              <div class="flex items-center">
                <input
                  id="bordered-checkbox-4"
                  v-model="packages.is_churchwarden"
                  type="radio"
                  :value="true"
                  name="bordered-checkbox-4"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-4" class="py-4 ml-2 w-full text-sm font-medium flex text-white">ต้องการ</label>
              </div>
              <div class="flex items-center pl-4 ">
                <input
                  id="bordered-checkbox-3"
                  v-model="packages.is_churchwarden"
                  type="radio"
                  :value="false"
                  name="bordered-checkbox-3"
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                >
                <label for="bordered-checkbox-3" class="py-4 ml-2 w-full text-sm font-medium flex text-white">ไม่ต้องการ</label>
              </div>
            </div>
            <div class="text-xs text-center">
              *หมายเหตุ: ลูกค้าจะได้รับส่วนลดในกรณีที่ไม่ต้องการบริการมัคนายก/มัคนายิกา
            </div>
          </div>
        </ValidObs>
      </section>

      <section v-if="step === 2 && $route.query.set === 2" class="px-3 pt-3 pb-6">
        <div>
          <span v-if="setName" class="text-white"> {{ setName }}</span>
          <div class="h-32 w-full text-center border text-white ">
            รูปภาพ
          </div>
        </div>
        <div>
          <p class=" mt-4 text-white">
            ชื่อแพ็คเกจ
          </p>
          <p class="text-sm mt-2 text-white">
            รายละเอียดสิ่งที่จะได้ในแพ็คเกจนี้
          </p>
        </div>
        <ValidObs v-if="step === 2 && $route.query.set === 2" ref="validator3">
          <div vclass="grid gap-6 mb-6 grid-cols-2">
            <ValidPro v-slot="{ errors }" rules="required|minquantity:1" name="จำนวนพระสงฆ์">
              <label for="จำนวนพระสงฆ์" class="label_base">จำนวนพระสงฆ์</label>
              <input
                v-model="packages.monk"
                class="input_base w-24"
                type="number"
                name="จำนวนพระสงฆ์"
                placeholder="จำนวนพระสงฆ์"
                @blur="packages.monk === null ? packages.monk = 0 : packages.monk"
                @focus="packages.monk === 0 ? packages.monk = null : packages.monk"
              >
              <!-- <base-input v-model="packages.monk" type="number" placeholder="จำนวนพระสงฆ์ *" label="ระบุจำนวนพระสงฆ์*" /> -->
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
          <div class="text-xs text-center text-white">
            *หมายเหตุ: หากต้องการนิมนต์พระสงฆ์ ต้องแจ้งล่วงหน้าอย่างน้อย 15 วัน
          </div>
          <div class="mt-4">
            <label class="label_base">เลือกเซ็ทราคา</label>
            <ValidPro v-slot="{ errors }" rules="required" name="เลือกเซ็ทราคา">
              <select v-model="setStyle" class=" w-full input_base">
                <option v-for="set in monkBuffet" :key="set.value" :value="set.value">
                  {{ set.name }} ({{ set.price }} บาท)
                </option>
              </select>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
        </ValidObs>
      </section>

      <section v-if="step === 3" class="p-3">
        <div class=" text-white">
          พิธีสงฆ์ > เลือกแพ็คเกจ > เลือกแพ็คเกจอาหาร
        </div>
        <div class="grid gap-6 mb-6 grid-cols-2">
          <div v-for="(item,idx) in handleMoreMenu(moreMenu)" :key="idx" class="text-center text-white" @click="selectMenu(item.value)">
            <card :name="item.name" />
            <div class="mt-2">
              {{ item.name }}
            </div>
          </div>
        </div>
      </section>

      <section v-if="step === 4 " class="step2 ">
        <div class="grid gap-6 mb-6 grid-cols-2 px-3">
          <div v-for="(item,idx) in setAccessories" :key="idx" class="grid-cols-2">
            <card :name="item.name" :price="Number(item.price)" :show-detail="true" />
            <div class="block product-count-button-position mt-2">
              <div class="flex items-center justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-full">
                <button class="flex items-center text=black justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:ml-1 rtl:mr-1" @click="item.count > 0 ? item.count-- : 0">
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
                <span class="font-semibold text=black flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6 md:w-8">{{ item.count }}</span>
                <button class="group flex items-center justify-center h-full shrink-0 transition-all text=black ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:mr-1 rtl:ml-1" title="" @click="item.count++">
                  <span class="sr-only">button-plus</span>
                  <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base" @click="next">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 5" class="">
        <div class="mt-6  p-3">
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              ชื่อ-นามสกุล
            </p>
            <p class="">
              {{ $store.state.users.name }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              เบอร์โทร
            </p>
            <p class="">
              {{ $store.state.users.phone }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              อีเมล์
            </p>
            <p class="">
              {{ $store.state.users.email }}
            </p>
          </div>

          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              จำนวนพระสงฆ์
            </p>
            <p class="">
              {{ Number(packages.monk).toString() }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              บริการมัคนายก/มัคนายิกา แบบมืออาชีพ
            </p>
            <p class="">
              {{ packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ' }}
            </p>
          </div>

          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  leading-4  ">
              อุปกรณ์เพิ่มเติม
            </p>
            <p class="text-right">
              {{ listAccessories }}
            </p>
          </div>

          <!-- <button type="button" class="button_base" @click="next">
            ถัดไป
          </button> -->
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base" @click="next">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 6" class="step4 ">
        <the-quotation @handleSubmitInformation="submit" />
      </section>
      <the-footer-button>
        <template #button>
          <button v-if=" step === 2" type="button" class="button_base " @click="next(1)">
            ถัดไป
          </button>
          <button v-if=" step === 2" type="button" class="button_base mt-4" @click="next(2)">
            เลือกแพ็คเกจอาหาร
          </button>
        </template>
      </the-footer-button>

      <modalfinish v-if="isFinish" @close="handelfinish" />
      <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
    </div>
  </client-only>
</template>

<script>
import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation.vue'
import auspiciouset from '@/static/json/auspiciouset.json'
import accessories from '@/static/json/accessories.json'
import monkBuffet from '@/static/json/monkBuffet.json'
export default {
  components: {
    BaseButtonBack,
    modalfinish,
    ModalguestInformation
  },

  data () {
    return {
      step: 1,
      auspiciouset,
      accessories,
      setAccessories: [],
      fields: {},
      setStyle: 1,
      monkBuffet,
      isModalinfo: false,
      isFinish: false,
      packages: {
        package: null,
        monk: 0,
        is_monk: true,
        is_churchwarden: false
      },
      pacakgex: [
        {
          name: 'Package A',
          value: 1
        },
        {
          name: 'Package B',
          value: 2
        },
        {
          name: 'Package C',
          value: 3
        }
      ],
      moreMenu: [
        {
          name: 'บุฟเฟ่ต์',
          value: 1
        },
        {
          name: 'ข้าวกล่อง/รักษ์โลก ชุดปิ่นโตอิ่มบุญ',
          value: 2
        },
        {
          name: 'คอฟฟี่เบรค สแน็กบ็ออกซ์/ข้าวต้ม',
          value: 3
        }
      ]
    }
  },
  computed: {
    setName () {
      if (this.$route.query.set) {
        let x = this.auspiciouset.find(x => x.value === Number(this.$route.query.set))
        if (x) {
          return x.name
        } else {
          return 'สิริมงคล'
        }
      } else {
        return 'สิริมงคล'
      }
    },
    totalPrice () {
      if (this.$route.query.set === 2) {
        return this.$store.state.auspicious_packages.style_buffet.price * this.$store.state.auspicious_packages.monk
      } else {
        let x = this.setAccessories.filter(x => x.count > 0)
        let sum = x.reduce((sum, current) => sum + current.count * current.price, 0)
        // this.x.reduce((sum, current) => sum + current.count * current.price, 0)
        return sum
      }
    },
    listAccessories () {
      let x = this.setAccessories.filter(x => x.count > 0)
      if (x.length) {
        let sum = x.map((el) => { return `${el.name} x ${el.count}\r\n` })
        return sum.join(',')
      } else {
        return '-'
      }
    }
  },
  mounted () {
    this.setAccessories = this.accessories.map((x) => {
      return {
        name: x.name,
        price: x.price,
        count: 0,
        accessories: x.accessories,
        detail: x.detail
      }
    })
  },
  methods: {
    handleMoreMenu (menu) {
      if (this.$route.query.set === 2) {
        return menu.filter(x => x.value !== 1)
      } else {
        return menu
      }
    },
    handelfinish () {
      this.isFinish = false
      this.$router.push('/menu')
    },
    submit (data) {
      this.$store.dispatch('handleLoading', true)
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}\n` })

      if (this.$route.query.set === 2) {
        Object.assign(this.fields, {
          สรุปรายการ: `${this.$store.state.auspicious_packages.style_buffet.name}: ${this.$store.state.auspicious_packages.style_buffet.price} บาท`
        })
      } else {
        Object.assign(this.fields, {
          สรุปรายการ: ''
        })
      }

      Object.assign(this.fields, {
        Name: this.$store.state.users.name,
        เบอร์โทร: this.$store.state.users.phone,
        'เบอร์โทร (สำรอง)': data.phone_backup,
        อีเมล: this.$store.state.users.email,
        ยอดเงิน: this.totalPrice,
        วันส่งสินค้า: this.$moment(data.date).format('L'),
        เวลาพร้อมทาน: data.time,
        ลิฟท์ขนของ: data.cargo_lift ? 'มี' : 'ไม่มี',
        รหัสไปรษณีย์: Number(data.post_code),
        'Rich Menu': [
          'สิริมงคล'],
        'Package หลัก': this.$store.state.auspicious_packages.package,
        'Package รอง': '',
        'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        'สถานที่จัดงาน (ที่อยู่)': `${data.address} เขต/อำเภอ ${data.subdistrict} แขวง/ตำบล ${data.district} จังหวัด${data.province}`,
        อุปกรณ์เสริม: sum.toString(),
        จำนวนพระสงฆ์: this.packages.monk.toString(),
        'จำนวนแขก (รวมพระ)': (Number(this.packages.monk)).toString(),
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
    },
    next (value) {
      if (this.step === 4 && (!this.$store.state.users.name || !this.$store.state.users.phone || !this.$store.state.users.email)) {
        this.isModalinfo = true
      }
      if (Number(this.$route.query.set) === 2) {
        this.$refs.validator3.validate().then((res) => {
          if (res) {
            let selectedPackage = ''
            let packaged = this.pacakgex.find(x => x.value === this.packages.package)
            if (packaged) {
              selectedPackage = `${this.setName} ${packaged.name}`
            } else {
              selectedPackage = `${this.setName}`
            }
            let setMonk = {}
            if (Number(this.$route.query.set) === 2) {
              setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
            }

            if (!this.packages.is_monk) {
              this.monk = 0
            }

            let data = {
              package: selectedPackage,
              monk: this.packages.monk,
              is_monk: this.packages.is_monk,
              is_churchwarden: this.packages.is_churchwarden,
              style_buffet: setMonk
            }

            this.$store.dispatch('setAuspiciousPackages', data)
            if (value === 1) {
              if (Number(this.$route.query.set) !== 1) {
                this.step = 5
              } else {
                this.step = 4
              }
            } else {
              this.step++
            }
          } else {
            console.log('Plase validate')
          }
        })
      } else {
        this.$refs.validator4.validate().then((res) => {
          if (res) {
            let selectedPackage = ''
            let packaged = this.pacakgex.find(x => x.value === this.packages.package)
            if (packaged) {
              selectedPackage = `${this.setName} ${packaged.name}`
            } else {
              selectedPackage = `${this.setName}`
            }
            let setMonk = {}
            if (Number(this.$route.query.set) === 2) {
              setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
            }

            if (!this.packages.is_monk) {
              this.monk = 0
            }

            let data = {
              package: selectedPackage,
              monk: this.packages.monk,
              is_monk: this.packages.is_monk,
              is_churchwarden: this.packages.is_churchwarden,
              style_buffet: setMonk
            }

            this.$store.dispatch('setAuspiciousPackages', data)
            if (value === 1) {
              if (Number(this.$route.query.set) !== 1) {
                this.step = 5
              } else {
                this.step = 4
              }
            } else {
              this.step++
            }
          }
        })
      }
    },
    back () {
      if (this.step === 3) {
        this.step--
      } else if (this.step === 1) {
        this.$router.push('/menu')
      } else if (this.step === 4) {
        this.step = 2
      } else if (Number(this.$route.query.set) !== 1 && this.step === 5) {
        this.step = 2
      } else {
        this.step--
      }
    },
    selectpackage (value) {
      this.packages.package = value
      this.step++
    },
    selectMenu (value) {
      const page = {
        1: 'buffet',
        2: 'lunchbox',
        3: 'coffeeBreak'
      }
      // this.step++
      this.$router.push({
        name: page[value],
        query: { morepackage: Number(this.$route.query.set) }
      })
    }
  }
}
</script>

<style>

</style>
