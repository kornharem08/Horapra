<template>
  <div>
    <base-button-back :title="step === 0 ? 'กลับหน้าหลัก' : 'Wedding@Home'" class="mb-2" @back="back" />
    <section v-if="step === 0">
      <div class="text-[14pt] mb-[10pt] px-[24pt]">
        เลือกแพ็คเกจ
      </div>
      <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
        <div v-for="(item,idx) in weddingSet" :key="idx" @click="selectPackage(item)">
          <card :show-detail="false" />
          <div class="text-center text-[14pt]  mt-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>
    <ValidObs ref="validator3">
      <section v-if="step ===1">
        <div class="px-[24pt]">
          <div class="text-[14pt] mb-[10pt]">
            เลือกแพ็คเกจ
          </div>
          <!-- <span v-if="setName" class="text-[14pt]"> {{ setName }}</span> -->
          <div class="aspect-video w-full text-center   rounded-[10pt]  bg-white flex items-center justify-center">
            รูปภาพ
          </div>
        </div>
        <div class="px-[24pt]">
          <p class="mt-4 text-[16pt]">
            {{ packages.name }}
          </p>
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
              <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-[14pt] flex ">งานในร่ม</label>
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
              <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-[14pt] flex ">งานกลางแจ้ง</label>
            </div>
          </div>
        </div>
        <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
          <ValidPro v-slot="{ errors }" rules="required|minquantity:1" class="col-span-2" name="ระบุจำนวนแขก">
            <label for="ระบุจำนวนแขก" class="text-[12pt]">ระบุจำนวนแขก</label>
            <input
              v-model="packages.guest"
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
      <the-quotation @handleSubmitInformation="submit" />
    </section>
    <modalfinish v-if="isFinish" @close="handelfinish" />
    <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
    <modalerror v-if="isError" @close="handelfinish" />
  </div>
</template>

<script>
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation.vue'
import Modalerror from '../../components/Modal/modalerror.vue'
import weddingSet from '@/static/json/wedding.json'
export default {
  components: {
    ModalguestInformation,
    modalfinish,
    Modalerror
  },
  data () {
    return {
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
      isModalinfo: false,
      isFinish: false,
      isError: false,
      note: ''
    }
  },
  methods: {
    handleDate () {
      this.$refs.validator3.validate().then((res) => {
        if (res) {
          this.step++
          if (this.step === 2 && (!this.$store.state.users.name || !this.$store.state.users.phone)) {
            this.isModalinfo = true
          }
        }
      })
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false
      this.$router.push('/menu')
    },
    submit (data) {
      this.$store.dispatch('handleLoading', true)

      Object.assign(this.fields, {
        Name: this.$store.state.users.name,
        เบอร์โทร: this.$store.state.users.phone,
        'เบอร์โทร (สำรอง)': data.phone_backup,
        อีเมล: this.$store.state.users.email,
        ยอดเงิน: this.packages.price,
        วันส่งสินค้า: this.$moment(data.date).format('L'),
        เวลาพร้อมทาน: data.time,
        ลิฟท์ขนของ: data.cargo_lift ? 'มี' : 'ไม่มี',
        รหัสไปรษณีย์: Number(data.post_code),
        สรุปรายการ: this.packages.style ? 'งานในร่ม' : 'งานกลางแจ้ง',
        'Rich Menu': [
          'wedding@home'],
        'Package หลัก': this.packages.name,
        'Package รอง': '-',
        'มัคนายก/มัคนายิกา': 'ไม่ต้องการ',
        'สถานที่จัดงาน (ที่อยู่)': `${data.address} เขต/อำเภอ ${data.subdistrict} แขวง/ตำบล ${data.district} จังหวัด${data.province}`,
        อุปกรณ์เสริม: '',
        Notes: this.note,
        จำนวนพระสงฆ์: '',
        'จำนวนแขก (รวมพระ)': (Number(this.packages.guest)).toString(),
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
    selectPackage (value) {
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

<style>

</style>
