<template>
  <div>
    <base-button-back title="ย้อนกลับ" class="mb-2" @back="back" />
    <div class="">
      <section v-if=" step === 0">
        <div class="grid gap-6 mb-6 grid-cols-2  px-[24pt]">
          <div v-for="(item,idx) in coffeebreak" :key="idx" @click="selectMorePackage(item)">
            <div class="w-full aspect-square   rounded-[10pt] flex items-center justify-center border overflow-hidden bg-white">
              <img
                class="rounded-[10pt]"
                :src="require(`~/assets/img${item.url}`)"
              >
            </div>
            <div class="text-center text-[15px] mt-2">
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
            <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white" @click="selectImage =`${item.url}`,isImages = true">
              <img
                class="rounded-[10pt] object-cover  h-full w-full"
                :src="require(`~/assets/img${item.url}`)"
              >
            </div>
            <div class="text-center text-[15px]   mt-2">
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
          <div class="mx-auto flex flex-col justify-center items-center  w-full  aspect-video cursor-pointer mt-3 mb-4" @click="selectImage =`${imageBanner}`,isImages = true">
            <img
              class="rounded-[10pt] object-cover aspect-video"
              :src="require(`~/assets/img${imageBanner}`)"
            >
          </div>
        </div>

        <div v-if="setNumber === 1" class=" text-[14px]  px-[24pt]">
          เงื่อนไข:<br>
          1. ลูกค้าจะได้รับ ชา, กาแฟ, โอวัลติน คละแบบ <br>
          2. ขนมเบเกอรี่ ทางร้านจัดให้คละแบบ (พาย/โรล/ครัวซอง)  <br>
          3. จำนวนไม่ถึง 100 ชุด จะมีค่าจัดเบรค 400 บาท  <br>
          4. ระยะเวลาให้บริการ 2 ชั่วโมง <br>
          5. มีค่าขนส่งตามระยะทาง
        </div>
        <div v-if="setNumber === 2" class=" text-[14px]  px-[24pt] ">
          เงื่อนไข:<br> 1. ลูกค้าจะได้รับน้ำผลไม้ 1 กล่อง (คละแบบ)<br> 2. ขนมเบเกอรี่ ทางร้านจัดให้คละแบบ (พาย/โรล/ครัวซอง)<br> 3. จำนวนขั้นต่ำ 50 ชุด<br> 4. มีค่าขนส่งตามระยะทาง
        </div>
        <div v-if="setNumber === 3 " class="text-[14px]  px-[24pt] ">
          *หมายเหตุ:<br>
          -รับจำนวนขั้นต่ำ 30 ท่านขึ้นไป <br> - ให้บริการ 2ชม.นับจากเวลาเริ่มทาน
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
                v-model.number="menu.count"
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
          <div class="text-[18px] w-fit" @click.stop="">
            สรุปรายการอาหาร
          </div>
          <div v-if="orders.length < coffeeMenu.length" class="text-[#5A7F52] text-[18px]" @click="addmore">
            เพิ่มรายการ
          </div>
        </div>
        <div class="px-[24pt]">
          <div v-for="(item,index) in orders" :key="index" class="bg-white rounded mb-3">
            <div class="flex justify-between items-center py-3">
              <div class="p-2 flex flex-col  w-2/3">
                <span class="text-[14px]">{{ index+1 }}. {{ item.name }} ({{ item.price }}บาท) </span>
              </div>
              <div class="block product-count-button-position mt-2 px-2   w-1/3">
                <div class="flex items-center border-[#5A7F52] border float-right justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-full">
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
                  <input v-model.number="item.count " type="number" class="border-none w-full  text-black text-center focus:outline-none focus:ring-0  text-sm ">

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
                ชื่อ Facebook
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
                {{ `สิริมงคล ${$store.state.auspicious_packages.package}: ${$store.state.auspicious_packages.price}` }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                บริการนิมนต์พระสงฆ์*
              </p>
              <p class="text-right w-1/2">
                {{ $store.state.auspicious_packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ', }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                บริการมัคนายก/มัคนายิกา แบบมืออาชีพ
              </p>
              <p class="text-right w-1/2">
                {{ $store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ', }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                จำนวนพระสงฆ์
              </p>
              <p class="text-right w-1/2 text-right">
                {{ $store.state.auspicious_packages.monk }}
              </p>
            </div>
            <div v-if="$route.query.morepackage && $route.query.morepackage === 2" class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium   w-2/3">
                รูปแบบการจัดเลี้ยงพระสงฆ์
              </p>
              <p class="w-1/3 text-right">
                {{ `${$store.state.auspicious_packages.style_buffet.name}: ${$store.state.auspicious_packages.style_buffet.price} บาท` }}
              </p>
            </div>
            <div v-if="$route.query.morepackage && accessories && accessories.length" class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium   w-2/3">
                อุปกรณ์เพิ่มเติม
              </p>
              <p class="w-1/3 text-right">
                {{ sumAccessories.toString() }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium  w-1/2">
                แพ็คเกจที่เลือก
              </p>
              <p class="w-1/2 text-right">
                {{ resultOrder.join(',') }}
              </p>
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base" @click="handleSubmitNext">
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
      <modalerror v-if="isError" @close="handelfinish" />
    </div>
  </div>
</template>

<script>
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation'
import Modalerror from '../../components/Modal/modalerror.vue'
import coffeebreak from '@/static/json/coffeebreak.json'
const coffeeSet = [
  {
    name: 'ขนม 1 ชิ้น',
    value: 1,
    price: 40,
    url: '/coffeebreak/1/1-40.jpg'
  },
  {
    name: 'ขนม 2 ชิ้น',
    value: 2,
    price: 55,
    url: '/coffeebreak/1/2-55.jpg'
  }
]

const snackSet = [
  {
    name: 'ขนม 1 ชิ้น',
    value: 1,
    price: 45,
    url: '/coffeebreak/2/1-45.jpg'
  },
  {
    name: 'ขนม 2 ชิ้น',
    value: 2,
    price: 55,
    url: '/coffeebreak/2/2-55.jpg'
  }
]

const boiledRice = [
  {
    name: 'ข้าวต้มทรงเครื่องหมู',
    value: 1,
    price: 59,
    url: '/coffeebreak/3/ข้าวต้มหมู.jpg'
  },
  {
    name: 'ข้าวต้มทรงเครื่องทะเล',
    value: 2,
    price: 62,
    url: '/coffeebreak/3/ข้าวต้มทะเล.jpg'
  }
]
export default {
  components: {
    modalfinish,
    ModalguestInformation,
    Modalerror
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
      orderIdByfirebase: 0,
      note: '',
      summary: {},
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
      isModalinfo: false,
      isError: false,
      imageBanner: ''
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
    accessories () {
      return this.$store.getters.getAccessories
    },
    sumAccessories () {
      if (this.accessories && this.accessories.length) {
        return this.accessories.map((el) => { return `${el.name} x ${el.count}` })
      } else {
        return null
      }
    },
    totalMenu () {
      return Number(this.orders.reduce((sum, current) => Number(sum) + Number(current.count), 0))
    },
    totalPrice () {
      if (this.setNumber === 3) {
        // if (this.totalMenu <= 30) {
        //   price = 62
        // } else {
        //   price = 59
        // }
        return Number(this.orders.reduce((sum, current) => sum + this.menu.price * current.count, 0))
      } else {
        return Number(this.orders.reduce((sum, current) => sum + this.menu.price * current.count, 0))
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
    handleSubmitNext () {
      if ((!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      } else {
        this.step++
      }
    },
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
      console.log(item)
      console.log(this.setNumber)
      this.selectMenu = item.value
      this.menu.value = item.value
      this.menu.name = item.name
      this.menu.price = item.price
      this.menu.count = 0
      this.imageBanner = `/coffeebreak/${this.setNumber}/banner${item.value}.jpg`

      this.step++
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false
      this.$router.push('/summary')
    },
    async  setsummary () {
      let result = this.resultOrder.join('\r\n')
      let sumaccess = null
      if (this.accessories && this.accessories.length) {
        sumaccess = this.accessories.map((el) => { return `${el.name} x ${el.count}` }).toString()
      }

      let sharelink = 'https://firebasestorage.googleapis.com/v0/b/botio-horapa.appspot.com/o/' + this.fields['Order ID'] + '?alt=media'
      let summary = {
        fullname: this.fields.Name,
        phone: this.fields['เบอร์โทร'],
        อีเมล: this.fields['อีเมล'],
        backupPhone: this.fields['เบอร์โทร (สำรอง)'],
        lift: this.fields['ลิฟท์ขนของ'],
        totalprice: this.fields['ยอดเงิน'],
        monk: this.fields['จำนวนพระสงฆ์'],
        guest: 0,
        is_churchwarden: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        is_monk: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        address: this.fields['สถานที่จัดงาน (ที่อยู่)'],
        accessories: sumaccess,
        time_for_monk_lunch: this.fields['เวลาถวายข้าวพระ'],
        time_for_lunch: this.fields['เวลาพร้อมทาน'],
        date: this.fields['วันส่งสินค้า'],
        note: this.fields.Notes,
        orderid: this.fields['Order ID'],
        link: sharelink,
        result
      }

      if (Number(this.$route.query.morepackage) === 2) {
        Object.assign(summary, {
          style_buffet: `${this.$store.state.auspicious_packages.style_buffet.name} ${this.$store.state.auspicious_packages.style_buffet.price} 'บาท'`
        })
      }

      if (this.$route.query.morepackage) {
        Object.assign(summary, {
          mainPackage: `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          subPackage: this.setName
        })
      } else {
        Object.assign(summary, {
          mainPackage: this.setName,
          subPackage: ''
        })
      }
      this.summary = summary
      this.$store.dispatch('setSummary', summary)
      let colum1 = [
        [{ text: 'เเพ็กเกจหลัก', style: 'orderId' }, { text: this.summary.mainPackage, style: 'orderId', alignment: 'right' }]
      ]

      if (this.summary.subPackage) {
        colum1.push([{ text: 'แพ็คเกจรอง', style: 'orderId' }, { text: this.summary.subPackage, alignment: 'right', style: 'orderId' }])
      }

      colum1.push([{ text: 'จำนวนแขก (รวมพระสงฆ์):', style: 'orderId' }, { text: this.summary.guest, style: 'orderId', alignment: 'right' }],
        [{ text: 'จำนวนพระสงฆ์', style: 'orderId' }, { text: this.summary.monk, style: 'orderId', alignment: 'right' }])

      if (this.summary.accessories) {
        colum1.push([{ text: 'อุปกรณ์เสริม', style: 'orderId' }, { text: this.summary.accessories, alignment: 'right', style: 'orderId' }])
      }
      if (this.$store.state.users.is_morepackage || this.summary.is_churchwarden) {
        colum1.push([{ text: 'บริการมัคนายก / มัคนายิกา', style: 'orderId' }, { text: this.summary.is_churchwarden, alignment: 'right', style: 'orderId' }])
      }

      if (this.$store.state.users.is_morepackage || this.summary.is_monk) {
        colum1.push([{ text: 'บริการนิมนต์พระสงฆ์', style: 'orderId' }, { text: this.summary.is_monk, alignment: 'right', style: 'orderId' }])
      }

      if (this.summary.style_buffet) {
        colum1.push([{ text: 'รูปแบบการจัดเลี้ยง', style: 'orderId' }, { text: this.summary.style_buffet, alignment: 'right', style: 'orderId' }])
      }

      if (this.summary.result) {
        colum1.push([{ text: 'สรุปรายการ', style: 'orderId' }, { text: this.summary.result, alignment: 'right', style: 'orderId' }])
      }

      let colum2 = [
        [{ text: 'วันที่จัดงาน:', style: 'orderId' }, { text: this.summary.date, style: 'orderId', alignment: 'right' }],
        [{ text: 'เวลาพร้อมทาน:', style: 'orderId' }, { text: this.summary.time_for_lunch, style: 'orderId', alignment: 'right' }],
        [{ text: 'รายละเอียดที่อยู่', style: 'orderId' }, { text: this.summary.address, alignment: 'right', style: 'orderId' }],
        [{ text: 'ลิฟท์ขนของ:', style: 'orderId' }, { text: this.summary.lift, alignment: 'right', style: 'orderId' }]
      ]

      if (this.summary.time_for_monk_lunch) {
        colum2.push([{ text: 'เวลาถวายข้าวพระ:', style: 'orderId' }, { text: this.summary.time_for_monk_lunch, style: 'orderId', alignment: 'right' }])
      }

      let content = {
        columns: [
          {
            stack: [
              { text: 'ใบสรุปรายการ', style: 'anotherStyle' },
              { text: 'Order ID: ' + this.summary.orderid, style: 'textRight' },
              { text: 'วันที่รับออเดอร์: ' + this.$moment(new Date()).format('L'), style: 'textRight' },
              { text: 'ชื่อลูกค้า: ' + this.$store.state.users.name, style: 'information' },
              { text: 'เบอร์ติดต่อ: ' + this.$store.state.users.phone, style: 'information' },
              { text: 'เบอร์ติดต่อ (สำรอง): ' + this.summary.backupPhone, style: 'information' },
              { text: 'ชื่อ Facebook: ' + this.$store.state.users.email, style: 'information', margin: [0, 0, 0, 35] },
              {
                table: {
                  widths: ['*'],
                  body: [[{
                    columns: [
                      {
                        stack: [{
                          layout: 'noBorders',
                          table: {
                            widths: [185, '*'],
                            body: colum1
                          }
                        },
                        {
                          text: '--------------------------------------------------------------------------------------------------------------',
                          alignment: 'center'
                        },
                        {
                          layout: 'noBorders',
                          table: {
                            widths: [185, '*'],
                            body: colum2
                          }
                        },
                        {
                          text: '--------------------------------------------------------------------------------------------------------------',
                          alignment: 'center'
                        },
                        {
                          layout: 'noBorders',
                          table: {
                            widths: ['*'],
                            body: [[{ text: 'โน้ตเพิ่มเติม:', style: 'orderId' }], [{ text: this.summary.note }]]
                          }
                        }
                        ]
                      }
                    ]
                  }]]
                }
              }, {
                margin: 10,
                columns: [
                  {
                    text: 'ราคารวม ' + `${this.summary.totalprice ? this.summary.totalprice.toLocaleString() : this.summary.totalprice}` + ' บาท',
                    alignment: 'center'
                  }]
              },
              {
                text: 'หมายเหตุ: ราคาในใบสรุปรายการนี้เป็นราคาประเมินเบื้องต้นซึ่งยังไม่รวมค่าจัดส่งตามระยะทาง',
                alignment: 'center',
                style: 'orderId'
              }
            ]

          }
        ]
      }
      this.$store.dispatch('setPdf', content)
      let pdfMake = require('pdfmake/build/pdfmake')
      // const Printer = require('pdfmake');
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
          bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          italics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          bolditalics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf'
        }
      }

      let data = []
      data.push(content)

      const docDefinition = {
        content: data,
        styles: {
          anotherStyle: {
            alignment: 'center',
            fontSize: 20,
            bold: true
          },
          textRight: {
            alignment: 'right'
          },
          orderId: {
            fontSize: 10
          },
          information: {
            alignment: 'left'
          }
        }
      }
      // await pdfMake.createPdf(docDefinition).open()
      let orderid = this.fields['Order ID'].toString()
      const link = 'https://firebasestorage.googleapis.com/v0/b/botio-horapa.appspot.com/o/' + orderid + '?alt=media'
      Object.assign(this.fields, {
        ใบสรุปรายการ: link
      })
      const pdfDocGenerator = pdfMake.createPdf(docDefinition)
      await pdfDocGenerator.getBlob((blob) => {
        this.$storage.ref(orderid).put(blob).then((snapshot) => {
          this.createAirtable()
        }).catch((error) => {
          console.log('One failed upload logo :', error.message)
        })
      })
    },
    async  countFirebase () {
      let x = await this.$db.collection('cities').orderBy('timestamp', 'desc').limit(1).get()
      if (x.size) {
        const data = {
          id: x.docs[x.size - 1].data().id + 1,
          timestamp: this.$moment(new Date()).unix()
        }
        const res = await this.$db.collection('cities').add(data)
        let runid = ('000000' + (x.docs[x.size - 1].data().id + 1))
        let prefixtime = this.$moment(new Date()).format('YYYYMM')
        this.orderIdByfirebase = prefixtime + runid
      } else {
        this.orderIdByfirebase = Math.floor(100000 + Math.random() * 900000)
      }
    },
    createAirtable () {
      let Airtable = require('airtable')
      let base = new Airtable({ apiKey: 'keyt0HxfGGJGs7yGh' }).base('app8GE6tvKpt6fwj5')

      const createRecord = async () => {
        try {
          await base('Sales Deals').create([
            {
              fields: this.fields
            }

          ])
          this.isFinish = true
        } catch (err) {
          this.isError = true
          this.$store.dispatch('handleLoading', false)
        } finally {
          this.$store.dispatch('handleLoading', false)
        }
      }
      createRecord()
    },
    async   submit (data) {
      await this.countFirebase()
      this.$store.dispatch('handleLoading', true)
      let totalPriceMonkPacakge = 0
      if (Number(this.$route.query.morepackage)) {
        let result = this.resultOrder.join('\r\n')
        let sum = null
        if (this.accessories && this.accessories.length) {
          sum = this.accessories.map((el) => { return `${el.name} x ${el.count}\n` }).join('\r\n')
        }
        if (this.accessories && this.accessories.length) {
          let sumPrice = this.accessories.reduce((sum, current) => sum + current.count * current.price, 0)
          if (sumPrice > 0) {
            totalPriceMonkPacakge += Number(sumPrice)
          }
        }
        if (Number(this.$route.query.morepackage) === 2) {
          result += `\n${this.$store.state.auspicious_packages.style_buffet.name} ${this.$store.state.auspicious_packages.style_buffet.price} 'บาท'`
          totalPriceMonkPacakge = (Number(this.$store.state.auspicious_packages.monk) * Number(this.$store.state.auspicious_packages.style_buffet.price))
        }

        Object.assign(this.fields, {
          'Rich Menu': [
            'สิริมงคล'
          ],
          'Package หลัก': `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          'Package รอง': this.setName,
          จำนวนพระสงฆ์: this.$store.state.auspicious_packages.monk,
          'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
          บริการนิมต์พระสงฆ์: this.$store.state.auspicious_packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ',
          'จำนวนแขก (รวมพระ)': this.$store.state.auspicious_packages.monk,
          ยอดเงิน: Number(Number(this.totalPrice) + Number(totalPriceMonkPacakge) + Number(this.$store.state.auspicious_packages.price)),
          อุปกรณ์เสริม: sum,
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
          อุปกรณ์เสริม: '-',
          สรุปรายการ: this.resultOrder.join('\r\n'),
          ยอดเงิน: this.totalPrice
        })
      }

      if (data.time_for_lunch) {
        const times = {
          1: 'ไม่ระบุ',
          2: 'เช้า',
          3: 'เพล',
          4: 'กำหนดเวลาเอง'
        }
        if (data.time_for_lunch !== 4) {
          Object.assign(this.fields, {
            เวลาถวายข้าวพระ: times[data.time_for_lunch]
          })
        } else {
          Object.assign(this.fields, {
            เวลาถวายข้าวพระ: ` ${times[data.time_for_lunch]} : ${data.timeLunch}`
          })
        }
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
        Notes: this.note,
        'Order ID': this.orderIdByfirebase,
        // รูปแบบการจัดงานเลี้ยง: `${setMonk.name}: ${setMonk.price} บาท`,
        วันรับออเดอร์: this.$moment(new Date()).format('L'),
        'Last Contact': this.$moment(new Date()).format('L'),
        'Sales Stage': 'New Lead'
      })
      await this.setsummary()
      // let Airtable = require('airtable')
      // let base = new Airtable({ apiKey: 'keyt0HxfGGJGs7yGh' }).base('app8GE6tvKpt6fwj5')
      // const createRecord = async () => {
      //   try {
      //     await base('Sales Deals').create([
      //       {
      //         fields: this.fields
      //       }

      //     ])
      //     this.isFinish = true
      //   } catch (err) {
      //     console.log(err)
      //     this.isError = true
      //     this.$store.dispatch('handleLoading', false)
      //   } finally {
      //     this.$store.dispatch('handleLoading', false)
      //   }
      // }
      // createRecord()
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
      if (this.step === 3 && (!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      }
      this.resultOrder = this.orders.map((el) => { return `${el.name} ${el.price} บาท x ${el.count} ` })
      this.step++
    },
    next () {
      let item = { ...this.menu }
      console.log(item)
      if (this.orders.length) {
        let found = this.orders.find(x => x.value === item.value)
        if (found) {
          found.count = Number(this.menu.count) + Number(found.count)
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
          this.menu.count = 0
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
