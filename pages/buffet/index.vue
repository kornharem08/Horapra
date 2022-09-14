<template>
  <div>
    <base-button-back :title="step === 0 ? $route.query.morepackage ? ' สิริมงคล' : 'กลับหน้าหลัก' : 'จัดเลี้ยงบุฟเฟ่ต์'" class="mb-2" @back="back" />
    <section v-if="step === 0" class="step1 ">
      <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
        <div v-for="(menu,idx) in guestBuffet" :key="idx" class="flex items-center flex-col justify-start" @click="selectSet(menu)">
          <div class="w-full h-[126pt]  rounded-[10pt] flex items-center justify-center border bg-white">
            รูปภาพ
          </div>
          <div class="text-center text-[14pt] mt-[10pt]">
            {{ menu.name }}
          </div>
        </div>
      </div>
    </section>
    <ValidObs ref="form" v-slot="{ handleSubmit }">
      <section v-if="step === 1" class="step1 ">
        <div class="mx-auto flex flex-col justify-center items-center  w-full   cursor-pointer mt-6 mb-4 px-[24pt]">
          <img
            class="rounded-[10pt]"
            :src="require(`~/assets/img/buffet/set/${setbuffet}.jpg`)"
          >
        </div>
        <div class="px-[24pt]">
          <div>
            <label class="label_base">เลือกจำนวนลูกค้า</label>
            <ValidPro v-slot="{ errors }" rules="required" name="เลือกจำนวนลูกค้า">
              <select v-model="setbuffet" class="w-full input_base" @change="setPrice = 1">
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
              <select v-model="setPrice" class=" w-full input_base">
                <option v-for="set in optionprice" :key="set.value" :value="set.value">
                  {{ set.name }} ({{ set.price }} บาท/ชุด)
                </option>
              </select>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
          <div class="mt-4">
            <ValidPro v-slot="{ errors }" rules="required|minquantity" name="จำนวนแขก">
              <base-input v-model="guests" type="number" placeholder="จำนวนแขก" label="จำนวนแขก" />
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
          <div class="mt-4">
            <ValidPro v-slot="{ errors }" rules="required|minquantity" name="จำนวนพระสงฆ์">
              <base-input v-model="monk" type="number" placeholder="จำนวนพระสงฆ์" label="จำนวนพระสงฆ์" />
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
          <div class="mt-4">
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
          <card :name="item.name" :price="Number(item.price)" :show-detail="true" />
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
              อีเมล์
            </p>
            <p class="">
              {{ $store.state.users.email ? $store.state.users.email : '-' }}
            </p>
          </div>
          <div v-if="$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    ">
              เเพ็กเกจหลัก
            </p>
            <p class="">
              {{ `${$store.state.auspicious_packages.package}: ${$store.state.auspicious_packages.price}` }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    ">
              จัดเลี้ยงบุฟเฟ่ต์
            </p>
            <p class="">
              {{ `บุฟเฟ่ ${setStyleBuffet.name}` }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    ">
              เซ็ทจัดเลี้ยง
            </p>
            <p class="">
              {{ `${setPriceBuffet.name}: ${setPriceBuffet.price} บาท` }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="">
              จำนวนแขก
            </p>
            <p class="">
              {{ (Number(guests)).toString() }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="">
              จำนวนพระสงฆ์
            </p>
            <p class="">
              {{ Number(monk).toString() }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="w-1/2">
              รูปแบบการจัดเลี้ยงพระสงฆ์
            </p>
            <p class="text-right w-1/2">
              {{ setStyleMonk }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="w-1/2 ">
              อุปกรณ์เพิ่มเติม
            </p>
            <p class="text-right w-1/2">
              {{ listAccessories ? listAccessories : '-' }}
            </p>
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

    <section v-if="step === 4" class="step4 ">
      <the-quotation @handleSubmitInformation="submit" />
    </section>
    <modalfinish v-if="isFinish" @close="handelfinish" />
    <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
  </div>
</template>

<script>
import BaseInput from '../../components/Base/BaseInput.vue'
import Card from '../../components/Card.vue'
import TheQuotation from '../../components/TheQuotation.vue'
import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation'
import priceBuffet from '@/static/json/priceBuffet.json'
import guestBuffet from '@/static/json/guestBuffet.json'
import monkBuffet from '@/static/json/monkBuffet.json'
import accessories from '@/static/json/accessories.json'

export default {
  components: { BaseInput, Card, TheQuotation, BaseButtonBack, modalfinish, ModalguestInformation },
  data () {
    return {
      step: 0,
      priceBuffet,
      accessories,
      guestBuffet,
      monkBuffet,
      setAccessories: [],
      setbuffet: 1,
      setStyle: 1,
      isFinish: false,
      isModalinfo: false,
      monk: 1,
      guests: 1,
      setPrice: 1,
      username: '',
      lastname: '',
      fields: {

      }
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
        detail: x.detail
      }
    })

    if (this.$route.query.set) {
      this.setbuffet = this.$route.query.set
    }
  },
  methods: {
    selectSet (value) {
      this.setbuffet = value.value
      this.step = 1
      // console.log(value)
    },
    handelfinish () {
      this.isFinish = false
      this.$router.push('/menu')
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
    submit (data) {
      this.$store.dispatch('handleLoading', true)
      let setPrice = this.optionprice.find(x => x.value === this.setPrice)
      let setBuffet = this.guestBuffet.find(x => x.value === this.setbuffet)
      let setMonk = this.monkBuffet.find(x => x.value === this.setStyle)
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}\n` })
      console.log(setBuffet)
      if (this.$route.query.morepackage) {
        let pricePackage = this.$store.state.auspicious_packages.price ? Number(this.$store.state.auspicious_packages.price) : 0
        let priceBuffetGuest = (Number(setPrice.price) * Number(this.guests))
        let priceMonk = (Number(setMonk.price) * Number(this.monk))
        let priceAccess = x.reduce((sum, current) => sum + current.count * current.price, 0)
        Object.assign(this.fields, {
          'Rich Menu': [
            'สิริมงคล'],
          'Package หลัก': this.$store.state.auspicious_packages.package,
          'Package รอง': `บุฟเฟ่ ${setBuffet.name} ${setPrice.name}: ${setPrice.price} บาท`,
          'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
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
        สรุปรายการ: `${setBuffet.name}\n` + `${setMonk.name}: ${setMonk.price} บาท`,
        อุปกรณ์เสริม: sum.toString(),
        จำนวนพระสงฆ์: this.monk.toString(),
        'จำนวนแขก (รวมพระ)': (Number(this.monk) + Number(this.guests)).toString(),
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
          this.$store.dispatch('handleLoading', false)
          this.isFinish = true
        }
      }
      createRecord()
    }
  }

}
</script>

<style>

</style>
