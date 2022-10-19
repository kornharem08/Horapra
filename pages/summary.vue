<template>
  <div class="">
    <div class="px-[24pt] mb-[45px]">
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
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="font-medium w-1/2 ">
            เเพ็กเกจหลัก
          </p>
          <p class="text-right">
            {{ summary['mainPackage'] }}
          </p>
        </div>
        <div v-if="summary['subPackage']" class="flex flex-row justify-between mb-2 label_base">
          <p class="font-medium w-1/2 ">
            เเพ็กเกจรอง
          </p>
          <p class="text-right">
            {{ summary['subPackage'] }}
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="">
            วันที่จัดงาน
          </p>
          <p class="text-right">
            {{ summary['date'] }}
          </p>
        </div>
        <div v-if="Number(summary['guest']) > 0" class="flex flex-row justify-between mb-2 label_base">
          <p class="">
            จำนวนแขก (รวมพระ)
          </p>
          <p class="">
            {{ summary['guest'] }}
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="">
            จำนวนพระสงฆ์
          </p>
          <p class="">
            {{ summary['monk'] }}
          </p>
        </div>
        <div v-if="summary['style_buffet']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            รูปแบบการจัดเลี้ยงพระสงฆ์
          </p>
          <p class="text-right w-1/2">
            {{ summary['style_buffet'] }}
          </p>
        </div>
        <div v-if=" $store.state.users.is_morepackage || summary['is_monk'] " class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            บริการนิมนต์พระสงฆ์
          </p>
          <p class="text-right w-1/2">
            {{ summary['is_monk'] }}
          </p>
        </div>
        <div v-if="summary['time_for_monk_lunch']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            เวลาถวายข้าวพระ
          </p>
          <p class="text-right w-1/2">
            {{ summary['time_for_monk_lunch'] }}
          </p>
        </div>
        <div v-if="$store.state.users.is_morepackage || summary['is_churchwarden']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            บริการมัคนายก/มัคนายิกา
          </p>
          <p class="text-right w-1/2">
            {{ summary['is_churchwarden'] }}
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            รายละเอียดที่อยู่
          </p>
          <p class="w-1/2 text-right">
            {{ summary['address'] }}
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2">
            ลิฟท์ขนของ
          </p>
          <p class="w-1/2 text-right">
            {{ summary['lift'] }}
          </p>
        </div>
        <div class="flex flex-row justify-between mb-2 label_base">
          <p class="">
            เบอร์โทรสำรอง
          </p>
          <p class="">
            {{ summary['backupPhone'] }}
          </p>
        </div>
        <div v-if="summary['accessories']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2 ">
            อุปกรณ์เพิ่มเติม
          </p>
          <p class="text-right w-1/2">
            {{ summary['accessories'] }}
          </p>
        </div>
        <div v-if="summary['result']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2 ">
            สรุปรายการ
          </p>
          <p class="text-right w-1/2">
            {{ summary['result'] }}
          </p>
        </div>
        <div v-if="summary['note']" class="flex flex-row justify-between mb-2 label_base">
          <p class="w-1/2 ">
            โน้ตเพิ่มเติม
          </p>
          <p class="text-right w-1/2">
            {{ summary['note'] }}
          </p>
        </div>
        <div class="text-center mt-4">
          รวมราคา {{ summary['totalprice'] ? summary['totalprice'].toLocaleString() : summary['totalprice'] }} บาท
          <p class="text-[8px] mt-4">
            หมายเหตุ: ราคาดังกล่าวเป็นราคาประเมินเบื้องต้น ซึ่งยังไม่รวมค่าจัดส่งตามระยะทางค่ะ
          </p>
        </div>
      </div>
    </div>
    <the-footer-button>
      <template #button>
        <button type="button" class="button_base " @click="genpdg">
          ดูใบเสนอราคา
        </button>
        <button type="button" class="button_optional " @click="$router.push('/menu')">
          เปิดบิลใหม่
        </button>
        <button type="button" class="button_optional ">
          ติดต่อเจ้าหน้าที่
        </button>
      </template>
    </the-footer-button>
    <modalsharelink v-if="isModalSharelink" :link="links" @close="isModalSharelink = false" />
  </div>
</template>

<script>
import modalsharelink from '../components/Modal/modalsharelink.vue'
export default {
  components: { modalsharelink },
  layout: 'withOutNavbar',
  data () {
    return {
      isModalSharelink: false,
      test: 'dsdfsd',
      links: ''
    }
  },
  computed: {
    summary () {
      return this.$store.getters.getSummary
    },
    filepdf () {
      return this.$store.getters.getPdf
    }
  },
  methods: {
    genpdg () {
      this.links = this.summary.link
      this.isModalSharelink = true
    },
    async  pdf () {
      let pdfMake = require('pdfmake/build/pdfmake')
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
          bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          italics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          bolditalics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf'
        }
      }
      let data = []

      data.push(this.filepdf)

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
      await pdfMake.createPdf(docDefinition).open()
    }
  }
}

</script>

<style>

</style>
