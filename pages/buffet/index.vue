<template>
  <div>
    <base-button-back :title="step === 0 ? $route.query.morepackage ? ' สิริมงคล' : 'กลับหน้าหลัก' : 'ย้อนกลับ'" class="mb-2" @back="back" />
    <div class="">
      <section v-if="step === 0" class="step1">
        <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
          <div v-for="(menu,idx) in guestBuffet" :key="idx" class="flex items-center flex-col justify-start" @click="selectSet(menu)">
            <div class="w-full aspect-square   rounded-[10pt] flex items-center justify-center border overflow-hidden bg-white">
              <img
                class="rounded-[10pt]"
                :src="require(`~/assets/img${menu.url}`)"
              >
            </div>
            <div class="text-center text-[15px] mt-[10pt]">
              {{ menu.name }}
            </div>
          </div>
        </div>
      </section>
      <ValidObs ref="form" v-slot="{ handleSubmit }">
        <section v-if="step === 1" class="step1 ">
          <div v-if="setStyleBuffet" class="text-[14pt] w-fit px-[24pt]">
            {{ setStyleBuffet.name }}
          </div>
          <div class=" flex flex-col justify-center items-center  w-full  aspect-video  cursor-pointer  mb-4 px-[24pt]">
            <img
              class="rounded-[10pt]"
              :src="require(`~/assets/img/buffet/set/${setbuffet}.jpg`)"
            >
          </div>
          <div class="px-[24pt]">
            <div>
              <label class="label_base">เลือกจำนวนลูกค้า</label>
              <ValidPro v-slot="{ errors }" rules="required" name="เลือกจำนวนลูกค้า">
                <select v-model="setbuffet" class="base_selectoption " style="padding: 0.5rem 1rem;" @change="setPrice = 1">
                  <option v-for="(set,idx) in guestBuffet" :key="idx" :value="set.value">
                    {{ set.name }}
                  </option>
                </select>
                <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
              </ValidPro>
            </div>
            <div class="mt-4">
              <label class="label_base">เลือกเซ็ทราคา</label>
              <ValidPro v-slot="{ errors }" rules="required" name="เลือกเซ็ทราคา">
                <select v-model="setPrice" class="base_selectoption">
                  <option v-for="set in optionprice" :key="set.value" :value="set.value">
                    {{ set.name }} ({{ set.price }} บาท/ชุด)
                  </option>
                </select>
                <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
              </ValidPro>
            </div>
            <div class="mt-4">
              <ValidPro v-slot="{ errors }" rules="required|minquantity" name="จำนวนแขก">
                <base-input v-model="guests" type="number" placeholder="จำนวนแขก" label="จำนวนแขก (รวมพระสงฆ์)" />
                <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
              </ValidPro>
            </div>
            <div class="mt-4 ">
              <span class="label_base">บริการจัดเลี้ยงพระสงฆ์</span>
              <div class="flex">
                <div class="flex items-center">
                  <input
                    id="bordered-checkbox-1"
                    v-model="isBuffetMonk"
                    type="radio"
                    :value="true"
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                  <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-[15px] flex ">มีจัดเลี้ยงพระสงฆ์</label>
                </div>
                <div class="flex items-center pl-4 ">
                  <input
                    id="bordered-checkbox-2"
                    v-model="isBuffetMonk"
                    type="radio"
                    :value="false"
                    name="bordered-checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                  <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-[15px] flex ">ไม่มีจัดเลี้ยงพระสงฆ์</label>
                </div>
              </div>
            </div>
            <div v-if="isBuffetMonk" class="mt-2">
              <ValidPro v-slot="{ errors }" rules="required|minquantity" name="จำนวนพระสงฆ์">
                <base-input v-model="monk" type="number" placeholder="จำนวนพระสงฆ์" label="จำนวนพระสงฆ์" />
                <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
              </ValidPro>
            </div>

            <div v-if="isBuffetMonk" class="mt-4">
              <label class="label_base">เลือกรูปแบบการจัดเลี้ยงพระสงฆ์</label>
              <ValidPro v-slot="{ errors }" rules="required" name="เลือกเซ็ทราคา">
                <select v-model="setStyle" class=" w-full input_base">
                  <option v-for="set in monkBuffet" :key="set.value" :value="set.value">
                    {{ set.name }} ({{ set.price }} บาท/ชุด)
                  </option>
                </select>
                <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
              </ValidPro>
            </div>
          </div>

          <the-footer-button>
            <template #button>
              <button type="button" class="button_base" @click="handleSubmit(next)">
                ถัดไป
              </button>
            </template>
          </the-footer-button>
        </section>
      </ValidObs>

      <section v-if="step === 2" class="step2 ">
        <div class="text-[16pt] text-left px-[24pt]">
          เลือกอุปกรณ์เพิ่มเติม
        </div>
        <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
          <div v-for="(item,idx) in setAccessories" :key="idx">
            <div class="w-full aspect-square overflow-hidden  rounded-[10pt] flex items-center justify-center border bg-white">
              <img :src="require(`~/assets/img${item.url}`)" alt="">
            </div>
            <!-- <card :price="Number(item.price)" :show-detail="true" /> -->
            <div class="block product-count-button-position mt-2">
              <div class="flex items-center justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl w-full">
                <button class="flex items-center justify-center shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:ml-1 rtl:mr-1" @click="item.count > 0 ? item.count-- : 0">
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
                <span class="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6 md:w-8">{{ item.count }}</span>
                <button class="group flex items-center justify-center h-full shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-8 md:w-12 h-8 rounded-2xl text-heading hover:bg-fill-four ltr:mr-1 rtl:ml-1" title="" @click="item.count++">
                  <span class="sr-only">button-plus</span>
                  <svg width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" /></g></svg>
                </button>
              </div>
            </div>
            <div class="text-[#142917] text-[10pt] text-center mt-2">
              {{ item.price.toLocaleString() }} บาท
            </div>
            <div class="text-[#142917] text-[12pt] text-center mt-1">
              {{ item.name }}
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base" @click="next">
              ถัดไป
            </button>
            <button type="button" class="button_optional" @click="next">
              ข้าม
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 3" class="step3 ">
        <div class="px-[24pt]">
          <div class="mt-6  bg-white rounded-[10pt] p-[20px] text-[14pt]">
            <div class="text-[16pt] font-medium text-center mb-[10pt]">
              สรุปรายการ
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="   ">
                ชื่อ-นามสกุล
              </p>
              <p class="">
                {{ $store.state.users.name }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="  ">
                เบอร์โทร
              </p>
              <p class="">
                {{ $store.state.users.phone }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="   ">
                ชื่อ Facebook
              </p>
              <p class="">
                {{ $store.state.users.email ? $store.state.users.email : '-' }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium w-1/2">
                เเพ็กเกจหลัก
              </p>
              <p class="w-1/2  text-right">
                {{ `${$store.state.auspicious_packages.package}: ${$store.state.auspicious_packages.price}` }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium w-1/2 ">
                {{ $route.query.morepackage ? 'เเพ็กเกจรอง' : 'เเพ็กเกจหลัก' }}
              </p>
              <p class="w-1/2  text-right">
                {{ `บุฟเฟ่ ${setStyleBuffet.name}` }}
              </p>
            </div>
            <!-- <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    ">
              จัดเลี้ยงบุฟเฟ่ต์
            </p>
            <p class="">
              {{ `บุฟเฟ่ ${setStyleBuffet.name}` }}
            </p>
          </div> -->
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium    ">
                เซ็ทจัดเลี้ยง
              </p>
              <p class="text-right">
                {{ `${setPriceBuffet.name}: ${setPriceBuffet.price} บาท` }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="">
                จำนวนแขก
              </p>
              <p class="text-right">
                {{ (Number(guests)).toString() }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="">
                จำนวนพระสงฆ์
              </p>
              <p class="">
                {{ isBuffetMonk ? Number(monk).toString() : 0 }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                รูปแบบการจัดเลี้ยงพระสงฆ์
              </p>
              <p class="text-right w-1/2 text-right">
                {{ isBuffetMonk ? setStyleMonk : 'ไม่มีจัดเลี้ยงพระสงฆ์' }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                บริการนิมนต์พระสงฆ์*
              </p>
              <p class="text-right w-1/2 text-right">
                {{ $store.state.auspicious_packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ', }}
              </p>
            </div>
            <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2">
                บริการมัคนายก/มัคนายิกา แบบมืออาชีพ
              </p>
              <p class="text-right w-1/2 text-right">
                {{ $store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ', }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="w-1/2 ">
                อุปกรณ์เพิ่มเติม
              </p>
              <p class="text-right w-1/2 text-right">
                {{ listAccessories ? listAccessories : '-' }}
              </p>
            </div>
          </div>
          <div class="mt-[50pt]">
            <label for="message" class="block mb-2 text-[12pt] font-medium ">โน้ตเพิ่มเติม</label>
            <textarea id="message" v-model="note" rows="4" class="input_base_textarea" />
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

      <section v-if="step === 4" class="step4 ">
        <the-quotation @handleSubmitInformation="submit" />
      </section>

      <modalfinish v-if="isFinish" @close="handelfinish" />
      <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
      <modalerror v-if="isError" @close="handelfinish" />
    </div>
  </div>
</template>

<script>
import BaseInput from '../../components/Base/BaseInput.vue'
import TheQuotation from '../../components/TheQuotation.vue'
import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation'
import Modalerror from '../../components/Modal/modalerror.vue'
import priceBuffet from '@/static/json/priceBuffet.json'
import guestBuffet from '@/static/json/guestBuffet.json'
import monkBuffet from '@/static/json/monkBuffet.json'
import accessories from '@/static/json/accessories.json'

export default {
  components: { BaseInput, TheQuotation, BaseButtonBack, modalfinish, ModalguestInformation, Modalerror },
  data () {
    return {
      step: 0,
      priceBuffet,
      orderIdByfirebase: 0,
      accessories,
      guestBuffet,
      monkBuffet,
      setAccessories: [],
      setbuffet: 1,
      setStyle: 1,
      isFinish: false,
      isModalinfo: false,
      note: '',
      monk: 1,
      guests: 1,
      setPrice: 1,
      username: '',
      lastname: '',
      isError: false,
      isBuffetMonk: true,
      fields: {

      },
      summary: {}
    }
  },
  computed: {
    optionprice () {
      return this.priceBuffet[this.setbuffet]
    },
    setPriceBuffet () {
      let x = this.optionprice.find(x => x.value === this.setPrice)
      if (x) {
        return x
      } else {
        return '-'
      }
    },
    setStyleBuffet () {
      let setBuffet = this.guestBuffet.find(x => x.value === this.setbuffet)
      if (setBuffet) {
        return setBuffet
      } else {
        return ''
      }
    },
    setStyleMonk () {
      let setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
      if (setMonk) {
        return `${setMonk.name}: ${setMonk.price} บาท`
      } else {
        return ''
      }
    },
    listAccessories () {
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}\r\n` })
      return sum.join(',')
    }

  },
  mounted () {
    this.setAccessories = this.accessories.map((x) => {
      return {
        name: x.name,
        price: x.price,
        count: 0,
        accessories: x.accessories,
        detail: x.detail,
        url: x.url
      }
    })

    if (this.$route.query.set) {
      this.setbuffet = this.$route.query.set
    }
  },
  methods: {
    handleSubmitNext () {
      if ((!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      } else {
        this.step++
      }
    },
    selectSet (value) {
      this.setbuffet = value.value
      this.step = 1
      // console.log(value)
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false

      this.$router.push('/summary')
    },
    back () {
      if (this.step === 0) {
        if (this.$route.query.morepackage) {
          let set = this.$route.query.morepackage
          this.$router.push({
            name: 'auspicious',
            query: { set }

          })
        } else {
          this.$router.push('/menu')
        }
      } else {
        this.step--
      }
    },
    next () {
      if (this.step === 2 && (!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      }
      this.step++
    },
    async  setsummary () {
      let setPrice = this.optionprice.find(x => x.value === this.setPrice)
      let setBuffet = this.guestBuffet.find(x => x.value === this.setbuffet)
      let setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}` })
      let sharelink = 'https://firebasestorage.googleapis.com/v0/b/botio-horapa.appspot.com/o/' + this.fields['Order ID'] + '?alt=media'
      let summary = {
        fullname: this.fields.Name,
        phone: this.fields['เบอร์โทร'],
        อีเมล: this.fields['อีเมล'],
        backupPhone: this.fields['เบอร์โทร (สำรอง)'],
        lift: this.fields['ลิฟท์ขนของ'],
        totalprice: this.fields['ยอดเงิน'],
        monk: this.fields['จำนวนพระสงฆ์'],
        guest: this.fields['จำนวนแขก (รวมพระ)'],
        is_churchwarden: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        is_monk: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        address: this.fields['สถานที่จัดงาน (ที่อยู่)'],
        style_buffet: this.isBuffetMonk ? `${setMonk.name}: ${setMonk.price} บาท` : 'ไม่มีจัดเลี้ยงพระสงฆ์',
        accessories: sum.toString(),
        time_for_monk_lunch: this.fields['เวลาถวายข้าวพระ'],
        time_for_lunch: this.fields['เวลาพร้อมทาน'],
        note: this.fields.Notes,
        link: sharelink,
        orderid: this.fields['Order ID'],
        date: this.fields['วันส่งสินค้า']
      }

      if (this.$route.query.morepackage) {
        Object.assign(summary, {
          mainPackage: `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          subPackage: `บุฟเฟ่ ${setBuffet.name} ${setPrice.name}: ${setPrice.price} บาท`
        })
      } else {
        Object.assign(summary, {
          mainPackage: `${setBuffet.name} ${setPrice.name}: ${setPrice.price} บาท`,
          subPackage: ''
        })
      }
      // this.$store.dispatch('setSummary', summary)
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
        colum1.push([{ text: 'รูปแบบการจัดเลี้ยง', style: 'orderId' }, { text: this.isBuffetMonk ? this.summary.style_buffet : 'ไม่มีจัดเลี้ยงพระสงฆ์', alignment: 'right', style: 'orderId' }])
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
    async submit (data) {
      await this.countFirebase()
      this.$store.dispatch('handleLoading', true)
      console.log(this.orderIdByfirebase, 'this.orderIdByfirebase')
      let setPrice = this.optionprice.find(x => x.value === this.setPrice)
      let setBuffet = this.guestBuffet.find(x => x.value === this.setbuffet)
      let setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}\n` })
      if (this.$route.query.morepackage) {
        let pricePackage = this.$store.state.auspicious_packages.price ? Number(this.$store.state.auspicious_packages.price) : 0
        let priceBuffetGuest = (Number(setPrice.price) * Number(this.guests))
        let priceMonk = this.isBuffetMonk ? (Number(setMonk.price) * Number(this.monk)) : 0
        let priceAccess = x.reduce((sum, current) => sum + current.count * current.price, 0)
        Object.assign(this.fields, {
          'Rich Menu': [
            'สิริมงคล'],
          'Package หลัก': `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          'Package รอง': `บุฟเฟ่ ${setBuffet.name} ${setPrice.name}: ${setPrice.price} บาท`,
          'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
          บริการนิมต์พระสงฆ์: this.$store.state.auspicious_packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ',
          ยอดเงิน: pricePackage + priceBuffetGuest + priceMonk + priceAccess
        })
      } else {
        let priceBuffetGuest = (Number(setPrice.price) * Number(this.guests))
        let priceMonk = (Number(setMonk.price) * Number(this.monk))
        let priceAccess = x.reduce((sum, current) => sum + current.count * current.price, 0)
        Object.assign(this.fields, {
          'Rich Menu': [
            'บุฟเฟ่'],
          'Package หลัก': `${setBuffet.name} ${setPrice.name}: ${setPrice.price} บาท`,
          'Package รอง': '-',
          'มัคนายก/มัคนายิกา': 'ไม่ต้องการ',
          ยอดเงิน: priceBuffetGuest + priceMonk + priceAccess
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
        สรุปรายการ: `${this.isBuffetMonk ? setBuffet.name : 'ไม่มีจัดเลี้ยงพระสงฆ์'}\n` + `${setMonk.name}: ${setMonk.price} บาท`,
        อุปกรณ์เสริม: sum.toString(),
        จำนวนพระสงฆ์: this.isBuffetMonk ? this.monk.toString() : 0,
        'Order ID': this.orderIdByfirebase,
        Notes: this.note,
        'จำนวนแขก (รวมพระ)': (Number(this.monk) + Number(this.guests)).toString(),
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
    }
  }

}
</script>

<style>
/* .base_selectoption {
  border-right: 16px solid transparent;
  margin-top: 0.5rem;
  display: block;
  width: 100%;
  border-radius: 9999px;
  background-color: rgb(249 250 251/1);
  padding: 0.5rem 1rem !important;
  color: #142917;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: rgba(19, 41, 104 , 0.1) 0px 4px 8px ;
} */

</style>
