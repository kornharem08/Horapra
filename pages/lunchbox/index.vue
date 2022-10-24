<template>
  <div>
    <base-button-back title="ย้อนกลับ" @back="back" />
    <div class="">
      <div v-if="step !== 1" class="text-14pt px-[24pt]">
        {{ setName }}
      </div>
      <section v-if="step === 0">
        <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
          <div v-for="(item,idx) in lunchset" :key="idx" @click="selectMorePackage(item)">
            <div class="w-full aspect-square   rounded-[10pt] flex items-center justify-center border overflow-hidden bg-white">
              <img
                class="rounded-[10pt]"
                :src="require(`~/assets/img${item.url}`)"
              >
            </div>
            <div class="text-center text-[15px]  mt-2">
              {{ item.name }}
            </div>
          </div>
        </div>
      </section>

      <section v-if="step === 1 && setNumber === 1" class="step1 ">
        <div class="grid grid-cols-2 gap-3 px-[24pt]">
          <div v-for="(box,index) in boxset" :key="index" class="mt-2" @click="selectBoxSet(box)">
            <div class="w-full aspect-square   rounded-[10pt] flex items-center justify-center border overflow-hidden bg-white">
              <img
                class="rounded-[10pt]"
                :src="require(`~/assets/img${box.url}`)"
              >
            </div>
            <div class="flex items-center text-center text-[15px] justify-center mt-4">
              {{ box.name }}
            </div>
          </div>
        </div>
      </section>

      <section v-if="step === 2 " class="step2  pb-10">
        <div class="px-[24pt]">
          <div
            v-if="setNumber === 1"
            v-swiper:mySwiper="swiperOptions"
            class="swiper mt-4"
          >
            <div v-if="selectBox.value === 3" class="swiper-wrapper">
              <div v-for="(item, key , index) in boxset39" :key="index" class="swiper-slide " @click="selectListMenu = index">
                <div class="p-2 h-8 flex text-[10pt]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#5A7F52] text-[#142917]' : ''">
                  {{ key }}
                </div>
              </div>
            </div>
            <div v-if="selectBox.value === 4" class="swiper-wrapper">
              <div v-for="(item, key , index) in boxset49" :key="index" class="swiper-slide " @click="selectListMenu = index">
                <div class="p-2 h-8 flex text-[10pt]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#5A7F52] text-[#142917]' : ''">
                  {{ key }}
                </div>
              </div>
            </div>
            <div v-if="selectBox.value === 1" class="swiper-wrapper">
              <div v-for="(item, key , index) in luchDuomenu" :key="index" class="swiper-slide " @click="selectListMenu = index">
                <div class="p-2 h-8 flex text-[10pt]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#5A7F52] text-[#142917]' : ''">
                  {{ key }}
                </div>
              </div>
            </div>
            <div v-if="selectBox.value === 2" class="swiper-wrapper">
              <div v-for="(item, key , index) in luchTriomenu" :key="index" class="swiper-slide " @click="selectListMenu = index">
                <div class="p-2 h-8 flex text-[10pt]  items-center  justify-center text-center w-full" :class="index === selectListMenu ? 'border-b-2 border-[#5A7F52] text-[#142917]' : ''">
                  {{ key }}
                </div>
              </div>
            </div>
          </div>
          <div v-for=" (list,i) in setNumber === 1 ? lists[selectListMenu] : lists" :key="i" class=" bg-white rounded  mt-4">
            <div
              class="overflow-hidden border border-gray-100 rounded-lg grid  group grid-cols-3"
              href=""
            >
              <div class="relative flex items-center justify-center">
                <img
                  v-if="list.url"
                  class="absolute h-[69pt] w-full  object-cover"
                  :src="require(`~/assets/img${list.url}`)"
                >
              </div>

              <div class="p-2 col-span-2">
                <div class="text-[#142917] text-[10pt]">
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
        <div v-if="setNumber === 1 ? lists[selectListMenu].length > 7 : lists.length > 7" class="py-10">
          <base-button-back title="ย้อนกลับ" @back="back" />
        </div>

        <the-footer-button>
          <template #button>
            <button v-if="step === 2" type="button" class="button_base " @click="handleresulte">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 3 ">
        <div class="flex justify-between items-center px-[24pt] mb-3">
          <div class="text-[18px]">
            สรุปรายการอาหาร
          </div>
          <div v-if="menu.length < 5" class="text-[#5A7F52] text-[18px]" @click="addmore">
            เพิ่มรายการ
          </div>
        </div>
        <div class="px-[24pt]">
          <ValidObs ref="validator3">
            <div v-for="(item,index) in menu" :key="index" class="bg-white rounded mb-3">
              <ValidPro v-slot="{ errors }" :rules="item.min ? `morethan:${item.min}` : 'morethan:5'" :name="item.menu">
                <div class="flex justify-between items-center">
                  <div class="p-2 flex flex-col w-1/2">
                    <span class="text-[14px]">{{ index+1 }}. {{ item.name }} ({{ item.price }}บาท) </span>
                    <span class="text-[14px]">   ({{ item.menu }})</span>
                  </div>
                  <div class="block product-count-button-position mt-2 px-2 w-1/2">
                    <div class="flex items-center border-[#5A7F52] border justify-between rounded overflow-hidden shrink-0 h-9 md:h-10 bg-white shadow-counter rounded-3xl ">
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
                      <input v-model.number="item.count" :min="0" type="number" class="border-none w-full text-black text-center focus:outline-none focus:ring-0  text-sm " @change="(item.count === '' || item.count === null) ? item.count = 1 : item.count">

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
          <div class="mt-[50pt]">
            <label for="message" class="block mb-2 text-[12pt] font-medium ">โน้ตเพิ่มเติม</label>
            <textarea id="message" v-model="note" rows="4" class="input_base_textarea" />
          </div>
          <div class="mt-[15pt]">
            <div class="flex justify-between text-[20pt]">
              <span class="">รวมทั้งหมด</span>  <span>{{ totalMenu }} กล่อง </span>
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button v-if="step === 3" type="button" class="button_base " @click="handleValidate">
              ยืนยัน
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 1 && setNumber === 2" class="step1 ">
        <div class="px-[24pt]">
          <div class="flex flex-col justify-center items-center  w-full  aspect-video  cursor-pointer mt-6 mb-4" @click="selectImage ='/boxset/set/banner.jpg',isImages = true">
            <img
              class="rounded-[10pt] object-cover"
              :src="require(`~/assets/img/boxset/set/banner.jpg`)"
            >
          </div>
        </div>
        <div class="text-center px-[24pt] text-[14pt]">
          Box Set รักษ์โลกที่เหมาะกับทุกงานจัดเลี้ยง ที่โหระพาตั้งใจคัดสรรบรรจุภัณฑ์ที่ย่อยสลายได้เองตามธรรมชาติ
        </div>
        <the-footer-button>
          <template #button>
            <button v-if="(step === 1 && setNumber !== 1 ) || step === 4" type="button" class="button_base " @click="step++">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-show="step === 1 && setNumber === 3" class="step1 ">
        <div
          v-swiper:pintoIamge="swiperOptionsimage"
          class="swiper "
        >
          <div class="swiper-wrapper  " @click.stop="">
            <div v-for="(image,idx) in 4" :key="idx" class="swiper-slide ">
              <div class="mx-auto flex flex-col justify-center items-center  w-full  aspect-video cursor-pointer mt-3 mb-4 px-[24pt]" @click="selectImage =`/Pinto/${idx}.jpg`,isImages = true">
                <img
                  class="rounded-[10pt] object-cover"
                  :src="require(`~/assets/img/Pinto/${idx}.jpg`)"
                >
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets" />
        </div>
        <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt] mt-[25pt]">
          <div v-for="(pinto,idx) in pintoset" :key="idx" class="flex items-center flex-col justify-start" @click="selectBoxSet(pinto)">
            <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white">
              <img
                class="rounded-[10pt] object-cover object-left h-full w-full"
                :src="require(`~/assets/img/Pinto/${pinto.value}x.jpg`)"
              >
            </div>
            <div class="text-center text-[15px] mt-[10pt]">
              {{ pinto.name }}
            </div>
          </div>
        </div>
      </section>

      <section v-if="step === 4" class="step4">
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
              <p class="">
                {{ $store.state.users.phone }}
              </p>
            </div>
            <div class="flex flex-row justify-between mb-2 label_base">
              <p class="font-medium  leading-4  ">
                ชื่อ Facebook
              </p>
              <p class="">
                {{ $store.state.users.email ? $store.state.users.email : '-' }}
              </p>
            </div>
            <!-- <div v-if="!$route.query.morepackage" class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium w-1/2">
              เเพ็กเกจที่เลือก
            </p>
            <p class="w-1/2">
              {{ `${selectedSet.name} ${setName} ` }}
            </p>
          </div> -->
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
                {{ $route.query.morepackage ? 'เเพ็กเกจรอง' : 'เเพ็กเกจที่เลือก' }}
              </p>
              <p class="w-1/2  text-right">
                {{ `${selectedSet.name} ${setName} ` }}
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
            <div class="flex mb-2 label_base">
              <p class="font-medium  w-1/2">
                เมนูที่เลือก
              </p>
              <div class="flex flex-col w-1/2 text-right">
                <div v-for="(menus,index) in listMenu" :key="index">
                  {{ index+1 }}.  {{ menus }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base " @click="handleSubmitNext()">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>

      <section v-if="step === 5" class="step5">
        <the-quotation @handleSubmitInformation="submit" />
      </section>

      <modalfinish v-if="isFinish" @close="handelfinish" />
      <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
      <modalerror v-if="isError" @close="handelfinish" />
      <ModalImages v-if="isImages" :img="selectImage" @close="isImages = false,selectImage = ''" />
    </div>
  </div>
</template>

<script>

import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation.vue'
import Modalerror from '../../components/Modal/modalerror.vue'
import ModalImages from '../../components/Modal/images.vue'
import boxset from '@/static/json/boxset.json'
import boxsetmenu from '@/static/json/boxset/menu.json'
import lunchset from '@/static/json/lunchset.json'
import pintoset from '@/static/json/pinto.json'
import lunchboxmenu from '@/static/json/lunchmenu/lunchboxmenu.json'
import luchDuomenu from '@/static/json/lunchmenu/lubchboxduoset.json'
import luchTriomenu from '@/static/json/lunchmenu/lunchboxtrioset.json'
import pinto1 from '@/static/json/lunchmenu/pintoset1.json'
import pinto2 from '@/static/json/lunchmenu/pintoset2.json'
import pinto3 from '@/static/json/lunchmenu/pintoset3.json'
import boxset49 from '@/static/json/boxset/boxset49.json'
import boxset39 from '@/static/json/boxset/boxset39.json'
export default {
  components: {
    BaseButtonBack,
    modalfinish,
    ModalguestInformation,
    Modalerror,
    ModalImages
  },
  data () {
    return {
      isImages: false,
      selectImage: '',
      boxset49,
      boxset39,
      pinto1,
      pinto2,
      pinto3,
      pintoset,
      boxset,
      lunchset,
      lunchboxmenu,
      boxsetmenu,
      luchDuomenu,
      luchTriomenu,
      step: 0,
      note: '',
      setNumber: 0,
      isFinish: false,
      selectListMenu: 0,
      lists: [],
      orderIdByfirebase: 0,
      selectBox: {},
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 3,
        freeMode: true
      },
      swiperOptionsimage: {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      },
      menu: [],
      fields: {},
      set: this.$route.query.set ? this.$route.query.set : 1,
      isModalinfo: false,
      isError: false,
      summary: {}
    }
  },
  computed: {
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
      if (this.step === 0) {
        return 'สิริมงคล'
      } else {
        return this.selectBox.name && this.step > 1 ? this.selectBox.name : ''
      }
    },
    listMenu () {
      return this.menu.reduce((a, currentValue) =>
        [...a, Number(this.setNumber) !== 2 ? `(${currentValue.name})${currentValue.menu} x ${currentValue.count}` : `${currentValue.menu} x ${currentValue.count}`], [])
    }
  },

  mounted () {
    if (this.$route.query.set) {
      this.setNumber = Number(this.$route.query.set)
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
    selectSetPinto (value) {
      console.log(value)
    },
    selectMorePackage (item) {
      console.log(item)
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
            if ((!this.$store.state.users.name || !this.$store.state.users.phone)) {
              this.isModalinfo = true
            }
            this.step++
          }
        })
      } else {
        this.$notify({ group: 'auth', text: 'กรุณาเพิ่มรายการอาหารอย่างน้อย 1 รายการ', type: 'warning' })
      }
    },
    increse (item) {
      let result = []
      if (this.setNumber === 1) {
        this.lists.forEach((element) => {
          result.push(
            ...element.filter(x => x.count > 0).map((el) => {
              return {
                menu: el.name,
                min: el.min ? el.min : 5,
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
            min: el.min ? el.min : 5,
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
      this.step = 2
      // this.selectBox = {}
      // this.selectListMenu = 0
    },
    handleresulte () {
      let result = []
      if (this.setNumber === 1) {
        this.lists.forEach((element) => {
          result.push(
            ...element.filter(x => x.count > 0).map((el) => {
              return {
                menu: el.name,
                price: el.price,
                min: el.min ? el.min : 5,
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
            min: el.min ? el.min : 5,
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

      this.step++
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false
      this.$router.push('/summary')
    },
    async  setsummary () {
      let result = this.menu.reduce((a, currentValue) =>
        [...a, Number(this.setNumber) !== 2 ? `(${currentValue.name})${currentValue.menu} x ${currentValue.count}` : `${currentValue.menu} x ${currentValue.count}`], [])
      let sumaccess = null
      if (this.accessories && this.accessories.length) {
        sumaccess = this.accessories.map((el) => { return `${el.name} x ${el.count}` }).join('\r\n')
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
        result: result.join('\r\n'),
        link: sharelink
      }

      if (Number(this.$route.query.morepackage) === 2) {
        Object.assign(summary, {
          style_buffet: `${this.$store.state.auspicious_packages.style_buffet.name} ${this.$store.state.auspicious_packages.style_buffet.price} 'บาท'`
        })
      }

      if (this.$route.query.morepackage) {
        Object.assign(summary, {
          mainPackage: `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          subPackage: `${this.selectedSet.name} `
        })
      } else {
        Object.assign(summary, {
          mainPackage: `${this.selectedSet.name} `,
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
    async submit (data) {
      await this.countFirebase()
      this.$store.dispatch('handleLoading', true)
      const newStuff = this.menu.reduce((a, currentValue) =>
        [...a, Number(this.setNumber) !== 2 ? `(${currentValue.name})${currentValue.menu} x ${currentValue.count}` : `${currentValue.menu} x ${currentValue.count}`], [])
      if (this.$route.query.morepackage) {
        let result = newStuff.join('\r\n')
        let totalPriceMonkPacakge = 0
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
            'สิริมงคล'],
          'Package หลัก': `สิริมงคล ${this.$store.state.auspicious_packages.package}`,
          'Package รอง': `${this.selectedSet.name} ${this.setName} `,
          'มัคนายก/มัคนายิกา': this.$store.state.auspicious_packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
          จำนวนพระสงฆ์: this.$store.state.auspicious_packages.monk,
          'จำนวนแขก (รวมพระ)': this.$store.state.auspicious_packages.monk,
          อุปกรณ์เสริม: sum,
          บริการนิมต์พระสงฆ์: this.$store.state.auspicious_packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ',
          ยอดเงิน: Number(Number(this.totalPrice) + Number(totalPriceMonkPacakge) + Number(this.$store.state.auspicious_packages.price)),
          สรุปรายการ: result

        })
      } else {
        Object.assign(this.fields, {
          'Rich Menu': [
            'ข้าวกล่อง/Box setรักษ์โลก/ชุดปิ่นโตอิ่มบุญ'],
          'Package หลัก': `${this.selectedSet.name} ${this.setName} `,
          ยอดเงิน: this.totalPrice,
          'Package รอง': '-',
          อุปกรณ์เสริม: '',
          จำนวนพระสงฆ์: '-',
          'จำนวนแขก (รวมพระ)': '',
          สรุปรายการ: newStuff.join('\r\n')

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
        'จำนวนแขก (รวมพระ)': '-',
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
      // console.log(this.fields)
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
    back () {
      if (this.$route.query.morepackage) {
        if (this.$route.query.morepackage) {
          if (this.step === 0) {
            let set = this.$route.query.morepackage
            this.$router.push({
              name: 'auspicious',
              query: { set }
            })
          } else {
            this.step--
          }
        }
      }

      if (!this.$route.query.morepackage) {
        if (this.step !== 0) {
          this.step--
        } else {
          this.$router.push('/menu')

          this.selectListMenu = 0
        }
      }

      this.selectListMenu = 0
    },
    selectBoxSet (set) {
      this.selectBox = set
      this.step = 2
      this.setmenu(set.value)
    },
    setmenu (value) {
      if (this.setNumber === 1) {
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
          this.lists = Object.keys(this.boxset39).map(k => this.boxset39[k].map((el) => {
            return {
              ...el,
              count: 0
            }
          }))
        }

        if (value === 4) {
          this.lists = Object.keys(this.boxset49).map(k => this.boxset49[k].map((el) => {
            return {
              ...el,
              count: 0
            }
          }))
        }
      }

      if (this.setNumber === 2) {
        console.log('2')
      }

      if (this.setNumber === 3) {
        this.lists = this['pinto' + value].map((k) => {
          return {
            ...k,
            count: 0
          }
        }

        )
        console.log(this.lists)
      }
    }
  }
}
</script>

<style>
.swiper-pagination {
  width: 100% !important;
}
.swiper-horizontal>.swiper-pagination-bullets {
  bottom: 25px;
}
</style>
