<template>
  <div>
    <base-button-back :title="step === 0 ? $route.query.morepackage ? setName : 'กลับหน้าหลัก' : 'คอฟฟี่เบรค/สแน็คบ็อกซ์/ข้าวต้ม'" class="mb-2" @back="back" />

    <section v-if=" step === 0">
      <div class="grid gap-6 mb-6 grid-cols-2  px-[24pt]">
        <div v-for="(item,idx) in coffeebreak" :key="idx" @click="selectMorePackage(item)">
          <card :show-detail="false" />
          <div class="text-center text-[14pt] mt-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 1" class="step1  px-[24pt]">
      <div class="text-[14pt] w-fit">
        {{ setName }}
      </div>
      <div class="grid gap-6 mb-6 grid-cols-2">
        <div v-for="(item,idx) in coffeeMenu" :key="idx" @click="selectPacakge(item)">
          <card :name="item.name" :price="Number(item.price)" :show-detail="true" />
          <div class="text-center text-[14pt]   mt-2">
            {{ item.name }} <br> {{ item.price }} บาท
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 2" class="step1 ">
      <div class=" w-fit  px-[24pt] ">
        {{ setName }} >  {{ packselected.name }}  {{ packselected.price }}
      </div>
      <div class=" px-[24pt] ">
        <div class="flex justify-center items-center rounded-[10pt] my-4 h-40 bg-white ">
          รูปภาพ
        </div>
      </div>

      <div v-if="$route.query.set === 1" class=" text-[12pt]  px-[24pt]">
        เงื่อนไข:<br>
        1. ลูกค้าจะได้รับ ชา, กาแฟ, โอวัลติน คละแบบ <br>
        2. ขนมเบเกอรี่ ทางร้านจัดให้คละแบบ (พาย/โรล/ครัวซอง)  <br>
        3. จำนวนไม่ถึง 100 ชุด จะมีค่าจัดเบรค 400 บาท  <br>
        4. ระยะเวลาให้บริการ 2 ชั่วโมง <br>
        5. มีค่าขนส่งตามระยะทาง
      </div>
      <div v-if="$route.query.set === 2" class=" text-[12pt]  px-[24pt] ">
        เงื่อนไข:<br> 1. ลูกค้าจะได้รับน้ำผลไม้ 1 กล่อง (คละแบบ)<br> 2. ขนมเบเกอรี่ ทางร้านจัดให้คละแบบ (พาย/โรล/ครัวซอง)<br> 3. จำนวนขั้นต่ำ 50 ชุด<br> 4. มีค่าขนส่งตามระยะทาง
      </div>
      <div v-if="$route.query.set === 3" class="text-[12pt]  px-[24pt] ">
        *หมายเหตุ:<br> แขกจำนวน 1 - 30 ท่าน ราคา 62 บาท/ท่าน <br> แขกจำนวน 30 ท่านขึ้นไป ราคา 59 บาท/ท่าน
      </div>
      <div class="px-[24pt]">
        <div class="block product-count-button-position mt-4 flex justify-center">
          <div class="flex items-center justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-42">
            <button class="flex items-center justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:ml-1 rtl:mr-1" @click="menu.count > 0 ? menu.count-- : 0">
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
            <input
              v-model="menu.count"
              type="number"
              class="font-semibold flex items-center justify-center h-full border-none text-center focus:ring-0 transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-20"
              min="0"
              @focus="menu.count === 0 ? menu.count = null : menu.count"
              @blur="menu.count === null ? menu.count = 0 : menu.count"
            >
            <!-- <span class="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6 md:w-8">{{ menu.count }}</span> -->
            <button class="group flex items-center justify-center h-full shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:mr-1 rtl:ml-1" title="" @click="menu.count++">
              <span class="sr-only">button-plus</span>
              <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
            </button>
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

    <section v-if="step === 3" class="step1  ">
      <div class="flex justify-between items-center px-[24pt] mb-3" @click.stop="">
        <div class="text-[16pt] w-fit" @click.stop="">
          สรุปรายการอาหาร
        </div>
        <div v-if="orders.length < coffeeMenu.length" class="text-[#5A7F52] text-[14pt]" @click="addmore">
          เพิ่มรายการ
        </div>
      </div>
      <div class="px-[24pt]">
        <div v-for="(item,index) in orders" :key="index" class="bg-white rounded mb-3">
          <div class="flex justify-between items-center py-3">
            <div class="p-2 flex flex-col">
              <span class="text-[14pt]">{{ index+1 }}. {{ item.name }} ({{ item.price }}บาท) </span>
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
        </div>
      </div>
      <div class="mt-[50pt] px-[24pt]">
        <label for="message" class="block mb-2 text-[12pt] font-medium ">โน้ตเพิ่มเติม</label>
        <textarea id="message" v-model="note" rows="4" class="input_base_textarea" />
      </div>
      <div class="mt-[15pt] px-[24pt]">
        <div class="flex justify-between text-[20pt]">
          <span>รวมทั้งหมด</span>  <span>{{ totalMenu }} ชิ้น </span>
        </div>
      </div>
      <the-footer-button>
        <template #button>
          <button type="button" class="button_base" @click="handleListOrder">
            ถัดไป
          </button>
        </template>
      </the-footer-button>
    </section>

    <section v-if="step === 4">
      <div class="px-[24pt]">
        <div class="mt-6  bg-white rounded-[10pt] p-[20px] text-[14pt]">
          <div class="text-[16pt] font-medium text-center mb-[10pt]">
            สรุปรายการ
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium">
              ชื่อ-นามสกุล
            </p>
            <p class=" ">
              {{ $store.state.users.name }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium">
              เบอร์โทร
            </p>
            <p class="">
              {{ $store.state.users.phone }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   ">
              อีเมล์
            </p>
            <p class="">
              {{ $store.state.users.email }}
            </p>
          </div>
          <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    w-1/2">
              เเพ็กเกจหลัก
            </p>
            <p class="text-right w-1/2">
              {{ `${$store.state.auspicious_packages.package}: ${$store.state.auspicious_packages.price}` }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium  w-1/2">
              แพ็คเกจที่เลือก
            </p>
            <p class="w-1/2 text-right">
              {{ resultOrder.join('') }}
            </p>
          </div>
        </div>
      </div>
      <the-footer-button>
        <template #button>
          <button type="button" class="button_base" @click="step++">
            ถัดไป
          </button>
        </template>
      </the-footer-button>
    </section>

    <section v-if="step === 5" class="step4 ">
      <the-quotation @handleSubmitInformation="submit" />
    </section>
    <modalfinish v-if="isFinish" @close="handelfinish" />
    <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
  </div>
</template>

<script>
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation'
import coffeebreak from '@/static/json/coffeebreak.json'
const coffeeSet = [
  {
    name: 'ขนม 1 ชิ้น',
    value: 1,
    price: 40
  },
  {
    name: 'ขนม 2 ชิ้น',
    value: 2,
    price: 55
  }
]

const snackSet = [
  {
    name: 'ขนม 1 ชิ้น',
    value: 1,
    price: 45
  },
  {
    name: 'ขนม 2 ชิ้น',
    value: 2,
    price: 55
  }
]

const boiledRice = [
  {
    name: 'ข้าวต้มทรงเครื่องหมู',
    value: 1,
    price: 62
  },
  {
    name: 'ข้าวต้มทรงเครื่องทะเล',
    value: 2,
    price: 72
  }
]
export default {
  components: {
    modalfinish,
    ModalguestInformation
  },

  data () {
    return {
      coffeebreak,
      step: 0,
      selectMenu: null,
      setNumber: 0,
      boiledRice,
      coffeeMenu: [],
      coffeeSet,
      snackSet,
      note: '',
      menu: {
        count: 0,
        name: '',
        value: null,
        price: 0
      },
      orders: [],
      resultOrder: '',
      isFinish: false,
      fields: {},
      isModalinfo: false
    }
  },
  computed: {
    packselected () {
      if (this.selectMenu) {
        return this.coffeeMenu.find(x => x.value === this.selectMenu)
      } else {
        return null
      }
    },
    totalMenu () {
      return this.orders.reduce((sum, current) => sum + current.count, 0)
    },
    totalPrice () {
      if (this.setNumber === 3) {
        let price = 0
        if (this.totalMenu <= 30) {
          price = 62
        } else {
          price = 59
        }
        return this.orders.reduce((sum, current) => sum + price * current.count, 0)
      } else {
        return this.orders.reduce((sum, current) => sum + current.price * current.count, 0)
      }
    },
    setName () {
      const sets = {
        1: 'คอฟฟี่เบรค',
        2: 'สแน็คบ็อกซ์',
        3: 'ข้าวต้ม'
      }
      return sets[Number(this.setNumber)]
    }
  },
  mounted () {
    this.coffeeMenu = []
    this.setNumber = Number(this.$route.query.set)
    if (this.setNumber === 1) {
      this.coffeeMenu.push(...this.coffeeSet)
    } else if (this.setNumber === 2) {
      this.coffeeMenu.push(...this.snackSet)
    } else if (this.setNumber === 3) {
      this.coffeeMenu.push(...this.boiledRice)
    }
    // if (this.$route.query.morepackage) {
    //   this.step = 0
    // } else {
    //   this.step = 1
    // }
  },
  methods: {
    selectMorePackage (item) {
      this.setNumber = item.value
      this.coffeeMenu = []
      if (item.value === 1) {
        this.coffeeMenu.push(...this.coffeeSet)
        this.step = 1
      } else if (item.value === 2) {
        this.coffeeMenu.push(...this.snackSet)
        this.step = 1
      } else if (item.value === 3) {
        this.coffeeMenu.push(...this.boiledRice)
        this.step = 1
      }
      console.log(this.coffeeMenu)
      // this.step = 1
    },
    selectPacakge (item) {
      this.selectMenu = item.value
      this.menu.value = item.value
      this.menu.name = item.name
      this.menu.price = item.price
      this.menu.count = 0

      this.step++
    },
    handelfinish () {
      this.isFinish = false
      this.$router.push('/menu')
    },
    submit (data) {
      this.$store.dispatch('handleLoading', true)
      let totalPriceMonkPacakge = 0
      if (Number(this.$route.query.morepackage)) {
        let result = this.resultOrder.join('\r\n')
        if (Number(this.$route.query.morepackage) === 2) {
          result += `\n${this.$store.state.auspicious_packages.style_buffet.name} ${this.$store.state.auspicious_packages.style_buffet.price} 'บาท'`
          totalPriceMonkPacakge = (Number(this.$store.state.auspicious_packages.monk) * Number(this.$store.state.auspicious_packages.style_buffet.price))
        }
        console.log(totalPriceMonkPacakge)
        console.log((Number(this.$store.state.auspicious_packages.monk) * Number(this.$store.state.auspicious_packages.style_buffet.price)))

        Object.assign(this.fields, {
          'Rich Menu': [
            'สิริมงคล'
          ],
          'Package หลัก': this.$store.state.auspicious_packages.package,
          'Package รอง': this.setName,
          จำนวนพระสงฆ์: this.$store.state.auspicious_packages.monk,
          'จำนวนแขก (รวมพระ)': this.$store.state.auspicious_packages.monk,
          ยอดเงิน: Number(Number(this.totalPrice) + Number(totalPriceMonkPacakge) + Number(this.$store.state.auspicious_packages.price)),
          สรุปรายการ: result

        })
      } else {
        Object.assign(this.fields, {
          'Rich Menu': [
            'คอฟฟี่เบรก/สแน็คบ็อค/ข้าวต้ม'
          ],
          'Package หลัก': this.setName,
          'Package รอง': '-',
          จำนวนพระสงฆ์: '-',
          'จำนวนแขก (รวมพระ)': '-',
          สรุปรายการ: this.resultOrder.join('\r\n'),
          ยอดเงิน: this.totalPrice
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
        Notes: this.note,
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
    addmore () {
      this.selectMenu = null
      this.menu.value = null
      this.menu.name = ''
      this.menu.price = 0
      this.menu.count = 0
      this.step = 1
    },
    handleListOrder () {
      if (this.step === 3 && (!this.$store.state.users.name || !this.$store.state.users.phone || !this.$store.state.users.email)) {
        this.isModalinfo = true
      }
      this.resultOrder = this.orders.map((el) => { return `${el.name} ${el.price} บาท x ${el.count} ` })
      this.step++
    },
    next () {
      let item = { ...this.menu }
      if (this.orders.length) {
        let found = this.orders.find(x => x.value === item.value)
        if (found) {
          found.count += this.menu.count
        } else {
          this.orders.push(item)
        }
      } else {
        this.orders.push(item)
      }

      this.step++
    },
    minus (item, index) {
      if (item.count > 0) {
        item.count--
      } else {
        this.orders.splice(index, 1)
      }
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
        if (this.step !== 0) {
          this.step--
        } else {
          this.$router.push('/menu')
        }
      }
    }
  }
}
</script>

<style>

</style>
