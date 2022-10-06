<template>
  <ValidObs ref="form" v-slot="{ handleSubmit }">
    <div class="mt-4">
      <div class="px-[24pt]">
        <div class="grid gap-2  grid-cols-2">
          <ValidPro v-slot="{ errors }" rules="required" name="วันที่จัดงาน">
            <label for="วันที่จัดงาน" class="label_base">วันที่จัดงาน</label>

            <input
              v-model="quotation.date"
              class="shadow-main w-full block  px-[1rem]  h-[44px] text-[#142917] bg-gray-50 rounded-full outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
              type="date"
              name="วันที่จัดงาน"
            >

            <!-- <base-input v-model="quotation.date" type="date" placeholder="วันที่จัดงาน *" label="วันที่จัดงาน *" /> -->
            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
          <div class="">
            <ValidPro v-slot="{ errors }" rules="required" name="เวลาพร้อมทาน">
              <label for="เวลาพร้อมทาน" class="label_base">เวลาพร้อมทาน</label>

              <input
                v-model="quotation.time"
                class="shadow-main w-full block  px-[1rem]  h-[44px] text-[#142917] bg-gray-50 rounded-full outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
                type="time"
                name="เวลาพร้อมทาน"
              >

              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
        </div>
        <div class="grid gap-2  grid-cols-2 mt-[21px]">
          <div>
            <label for="last_name" class="label_base">เวลาถวายข้าวพระ</label>
            <select
              v-model="quotation.time_for_lunch"
              class="w-full input_base"
            >
              <option :value="1">
                ไม่ระบุ
              </option>
              <option :value="2">
                เช้า
              </option>
              <option :value="3">
                เพล
              </option>
              <option :value="4">
                ระบุเวลาเอง
              </option>
            </select>
          </div>

          <div v-if="quotation.time_for_lunch === 4" class="">
            <ValidPro v-slot="{ errors }" rules="required" name="เวลาถวายข้าวพระ">
              <label for="เวลาถวายข้าวพระ" class="label_base">เวลาถวายข้าวพระ</label>

              <input
                v-model="quotation.timeLunch"
                class="input_base"
                type="time"
                name="เวลาถวายข้าวพระ"
              >

              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
        </div>

        <div class="mt-[21px]">
          <label for="last_name" class="label_base">รายละเอียดที่อยู่</label>
          <ValidPro v-slot="{ errors }" rules="required" name="รายละเอียดที่อยู่">
            <textarea v-model="quotation.address" rows="4" type="text" class="input_base_textarea shadow-main" />
            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="grid gap-2 grid-cols-2 ">
          <div class="mt-[21px]">
            <label class="label_base ">จังหวัด</label>
            <ValidPro v-slot="{ errors }" rules="required" name="จังหวัด">
              <select
                v-model="quotation.province"
                class="w-full input_base"

                @change="
                  quotation.district = ''
                  quotation.subdistrict = ''
                  quotation.post_code = '' "
              >
                <option v-for="(province, i) in optionsProvince" :key="i" :value="province">
                  {{ province }}
                </option>
              </select>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>

          <div class="mt-[21px]">
            <label for="last_name" class="label_base">เขต/อำเภอ</label>
            <ValidPro v-slot="{ errors }" rules="required" name="เขต/อำเภอ">
              <select
                v-model="quotation.district"
                class="w-full input_base"
                @change=" quotation.subdistrict = ''
                          quotation.post_code = ''"
              >
                <option v-for="(city, key) in optionsCity" :key="key" :value="key">
                  {{ key }}
                </option>
              </select>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>

          <div class="mt-[21px]">
            <label for="last_name" class="label_base">แขวง/ตำบล</label>
            <ValidPro v-slot="{ errors }" rules="required" name="แขวง/ตำบล">
              <select
                v-model="quotation.subdistrict"
                class="w-full input_base"
              >
                <option v-for="(district, i) in optionsDistrict" :key="i" :value="district">
                  {{ district }}
                </option>
              </select>
              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>

          <div class="mt-[21px]">
            <label for="last_name" class="label_base">รหัสไปรษีย์</label>
            <ValidPro v-slot="{ errors }" rules="required" name="รหัสไปรษีย์">
              <select
                v-model="quotation.post_code"
                class="w-full input_base"
              >
                <option v-for="zipcode in optionsZipcode" :key="zipcode" :value="zipcode.toString()">
                  {{ zipcode }}
                </option>
              </select>

              <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
            </ValidPro>
          </div>
        </div>
        <div class="mt-[21px]">
          <label for="last_name" class="label_base">ลิฟท์ขนของ</label>
          <ValidPro v-slot="{ errors }" rules="required" name="ลิฟท์ขนของ">
            <select
              v-model="quotation.cargo_lift"
              class="w-full input_base"
            >
              <option :value="true">
                มี
              </option>
              <option :value="false">
                ไม่มี
              </option>
            </select>

            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>

        <div class="mt-[21px]">
          <label for="last_name" class="label_base">เบอร์โทรสำรอง</label>
          <ValidPro v-slot="{ errors }" rules="required|phone_th" name="เบอร์โทรสำรอง">
            <input v-model="quotation.phone_backup" type="number" class="input_base shadow-main">
            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>
      </div>
      <the-footer-button>
        <template #button>
          <button type="button" class="button_base" @click="handleSubmit(submit)">
            รับใบเสนอราคา
          </button>
          <button type="button" class="button_optional">
            ติดต่อเจ้าหน้าที่
          </button>
        </template>
      </the-footer-button>
    </div>
  </ValidObs>
</template>

<script>
import dbAddress from '@/static/json/address.json'
import dbZipcode from '@/static/json/zipcode.json'
import dbDistrict from '@/static/json/district.json'
export default {
  data () {
    return {
      yourValue: null,
      dbAddress,
      dbZipcode,
      dbDistrict,
      quotation: {
        date: null,
        time: null,
        address: '',
        province: '',
        subdistrict: '',
        district: '',
        post_code: '',
        cargo_lift: false,
        phone_backup: '',
        time_for_lunch: 1,
        timeLunch: null
      }

    }
  },
  computed: {
    optionsProvince () {
      return Object.keys(dbZipcode)
    },
    optionsCity () {
      return dbZipcode[this.quotation.province]
    },
    optionsDistrict () {
      if (this.quotation.province && this.quotation.district) {
        return dbDistrict[this.quotation.province][this.quotation.district]
      }
      return false
    },
    optionsZipcode () {
      if (this.quotation.province && this.quotation.district) {
        return dbZipcode[this.quotation.province][this.quotation.district]
      }
      return false
    }
  },
  methods: {
    submit () {
      this.$emit('handleSubmitInformation', this.quotation)
    }
  }
}
</script>

<style scoped>

</style>
