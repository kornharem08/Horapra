<template>
  <div class=" pb-10">
    <base-button-back :title="step === 0 ? 'กลับหน้าหลัก' : 'สิริมงคล'" @back="back" />

    <section v-if="step === 0">
      <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
        <div v-for="(item,idx) in auspiciouset" :key="idx" @click="selectMorePackage(item)">
          <card :show-detail="false" />
          <div class="text-center text-[15px]  mt-2">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 1" class="px-[24pt]">
      <div v-if="!isSelectPackage">
        <div>
          <span v-if="setName" class="text-[14pt]"> {{ setName }}</span>
          <div class="mx-auto flex flex-col justify-center items-center  w-full rounded-[10pt] aspect-video  bg-white  cursor-pointer mt-3 mb-4 ">
            รูปภาพ
          </div>
        </div>
        <div>
          <div class="mt-2 ">
            Package
          </div>

          <div class="grid gap-6 mb-6 grid-cols-2 mt-[25pt]">
            <div v-for="(item,idx) in pacakgex" :key="idx" class="text-center" @click="selectpackage(item.value)">
              <card :name="item.name" />
              <div class="mt-2 text-[15px]">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="grid gap-6 mb-6 grid-cols-2 ">
          <div v-for="(item,idx) in secoundPackage" :key="idx" class="text-center" @click="selectSecondpackage(item)">
            <card :name="item.name" />
            <div class="mt-2 text-[15px]">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <ValidObs ref="validator4">
      <section v-if="step === 2 && Number(setNumber) !== 2" class="pb-12">
        <div class="px-[24pt]">
          <span v-if="setName" class="text-[14pt]"> {{ setName }}</span>
          <div class="aspect-video  w-full text-center   rounded-[10pt]  bg-white flex items-center justify-center">
            รูปภาพ
          </div>
        </div>
        <div class="px-[24pt]">
          <p class="mt-4 text-[16pt]">
            ชื่อแพ็คเกจ {{ packages.name }}
          </p>
          <p class="text-[12pt] mt-2">
            รายละเอียดสิ่งที่จะได้ในแพ็คเกจนี้
          </p>
        </div>
        <div class="grid gap-0 mb-6 grid-cols-2 px-[24pt] mt-4">
          <label for="จำนวนพระสงฆ์" class="text-[12pt] mt-2">ระบุจำนวนพระสงฆ์</label>
          <ValidPro v-slot="{ errors }" rules="required|minquantity:1" class="col-span-2" name="จำนวนพระสงฆ์">
            <input
              v-model="packages.monk"
              class="block py-2.5 px-4 w-1/2 text-[#142917] bg-gray-50 rounded-full border-none  outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
              type="number"
              name="จำนวนพระสงฆ์"
              placeholder="จำนวนพระสงฆ์"
              @blur="packages.monk === null ? packages.monk = 0 : packages.monk"
              @focus="packages.monk === 0 ? packages.monk = null : packages.monk"
            >

            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mt-4 px-[24pt]">
          <span class="text-[12pt]">บริการนิมนต์พระสงฆ์*</span>
          <div class="flex">
            <div class="flex items-center">
              <input
                id="bordered-checkbox-1"
                v-model="packages.is_monk"
                type="radio"
                :value="true"
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-[15px] flex ">ต้องการ</label>
            </div>
            <div class="flex items-center pl-4 ">
              <input
                id="bordered-checkbox-2"
                v-model="packages.is_monk"
                type="radio"
                :value="false"
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-[15px] flex ">ไม่ต้องการ</label>
            </div>
          </div>
        </div>
        <div class="text-[11px] text-left px-[24pt]">
          *หมายเหตุ: หากต้องการนิมนต์พระสงฆ์ ต้องแจ้งล่วงหน้าอย่างน้อย 15 วัน
        </div>
        <div class="mt-6  px-[24pt]">
          <span class="text-[12pt]">บริการมัคนายก/มัคนายิกา แบบมืออาชีพ</span>
          <div class="flex  ">
            <div class="flex items-center">
              <input
                id="bordered-checkbox-4"
                v-model="packages.is_churchwarden"
                type="radio"
                :value="true"
                name="bordered-checkbox-4"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-4" class="py-4 ml-2 w-full text-[15px] flex ">ต้องการ</label>
            </div>
            <div class="flex items-center pl-4 ">
              <input
                id="bordered-checkbox-3"
                v-model="packages.is_churchwarden"
                type="radio"
                :value="false"
                name="bordered-checkbox-3"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-3" class="py-4 ml-2 w-full text-[15px] flex ">ไม่ต้องการ</label>
            </div>
          </div>
          <div class="text-[11px] text-left">
            *หมายเหตุ: ลูกค้าจะได้รับส่วนลดในกรณีที่ไม่ต้องการบริการมัคนายก/มัคนายิกา
          </div>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base " @click="next(1)">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>
    </ValidObs>
    <ValidObs ref="validator3">
      <section v-if="step === 2 && setNumber === 2" class=" pt-3 pb-6">
        <div class="px-[24pt]">
          <span v-if="setName" class=""> {{ setName }}</span>
          <div class="aspect-video w-full text-center rounded-[10pt] bg-white flex items-center justify-center">
            รูปภาพ
          </div>
        </div>
        <div class="px-[24pt] mb-4">
          <p class="mt-4 ">
            ชื่อแพ็คเกจ
          </p>
          <p class="text-sm mt-2">
            รายละเอียดสิ่งที่จะได้ในแพ็คเกจนี้
          </p>
        </div>

        <!-- <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
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

            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div> -->
        <div class="grid gap-0 mb-6 grid-cols-2 px-[24pt] mt-4">
          <label for="จำนวนพระสงฆ์" class="text-[12pt] mt-2">ระบุจำนวนพระสงฆ์</label>
          <ValidPro v-slot="{ errors }" rules="required|minquantity:1" class="col-span-2" name="จำนวนพระสงฆ์">
            <input
              v-model="packages.monk"
              class="block py-2.5 px-4 w-1/2 text-[#142917] bg-gray-50 rounded-full border-none  outline-none focus:ring-[#EEDAB9] mt-2  text-[12pt]  placeholder:text-[#EEDAB9]"
              type="number"
              name="จำนวนพระสงฆ์"
              placeholder="จำนวนพระสงฆ์"
              @blur="packages.monk === null ? packages.monk = 0 : packages.monk"
              @focus="packages.monk === 0 ? packages.monk = null : packages.monk"
            >

            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <div class="mt-4 px-[24pt]">
          <span class="text-[12pt]">บริการนิมนต์พระสงฆ์*</span>
          <div class="flex">
            <div class="flex items-center">
              <input
                id="bordered-checkbox-1"
                v-model="packages.is_monk"
                type="radio"
                :value="true"
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-[15px] flex ">ต้องการ</label>
            </div>
            <div class="flex items-center pl-4 ">
              <input
                id="bordered-checkbox-2"
                v-model="packages.is_monk"
                type="radio"
                :value="false"
                name="bordered-checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-[15px] flex ">ไม่ต้องการ</label>
            </div>
          </div>
          <div class="text-[11px]  text-left">
            *หมายเหตุ: หากต้องการนิมนต์พระสงฆ์ ต้องแจ้งล่วงหน้าอย่างน้อย 15 วัน
          </div>
        </div>
        <div class="mt-6  px-[24pt]">
          <span class="text-[12pt]">บริการมัคนายก/มัคนายิกา แบบมืออาชีพ</span>
          <div class="flex  ">
            <div class="flex items-center">
              <input
                id="bordered-checkbox-4"
                v-model="packages.is_churchwarden"
                type="radio"
                :value="true"
                name="bordered-checkbox-4"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-4" class="py-4 ml-2 w-full text-[15px] flex ">ต้องการ</label>
            </div>
            <div class="flex items-center pl-4 ">
              <input
                id="bordered-checkbox-3"
                v-model="packages.is_churchwarden"
                type="radio"
                :value="false"
                name="bordered-checkbox-3"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              >
              <label for="bordered-checkbox-3" class="py-4 ml-2 w-full text-[15px] flex ">ไม่ต้องการ</label>
            </div>
          </div>
          <div class="text-[11px] text-left">
            *หมายเหตุ: ลูกค้าจะได้รับส่วนลดในกรณีที่ไม่ต้องการบริการมัคนายก/มัคนายิกา
          </div>
        </div>
        <div class="mt-4 px-[24pt]">
          <label class="label_base">รูปแบบการจัดเลี้ยงพระสงฆ์</label>
          <ValidPro v-slot="{ errors }" rules="required" name="เลือกเซ็ทราคา">
            <select v-model="setStyle" class=" w-full input_base">
              <option v-for="set in monkBuffet" :key="set.value" :value="set.value">
                {{ set.name }} ({{ set.price }} บาท)
              </option>
            </select>
            <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
          </ValidPro>
        </div>
        <the-footer-button>
          <template #button>
            <button type="button" class="button_base " @click="next(1)">
              ถัดไป
            </button>
          </template>
        </the-footer-button>
      </section>
    </ValidObs>

    <section v-if="step === 3" class="px-[24pt]">
      <div class="text-[16pt]">
        เลือกแพ็คเกจอาหาร
      </div>
      <div class="grid gap-6 mb-6 grid-cols-2">
        <div v-for="(item,idx) in handleMoreMenu(moreMenu)" :key="idx" class="text-center" @click="selectMenu(item.value)">
          <card :name="item.name" />
          <div class="mt-2 text-[15px]">
            {{ item.name }}
          </div>
        </div>
      </div>
    </section>

    <section v-if="step === 4" class="step2 ">
      <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt]">
        <div v-for="(item,idx) in setAccessories" :key="idx" class="grid-cols-2">
          <card :price="Number(item.price)" :show-detail="true" />
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
          <div class="text-[#142917] text-[12pt] text-center mt-2">
            {{ item.name }}
          </div>
        </div>
      </div>
      <the-footer-button>
        <template #button>
          <button type="button" class="button_base " @click="next(1)">
            ถัดไป
          </button>
        </template>
      </the-footer-button>

      <!-- <button type="button" class="button_base" @click="next">
        ถัดไป
      </button> -->
    </section>

    <section v-if="step === 5" class="">
      <div class="px-[24pt]">
        <div class="mt-6  bg-white rounded-[10pt] p-[20px] text-[14pt]">
          <div class="text-[16pt] font-medium text-center mb-[10pt]">
            สรุปรายการ
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   ">
              ชื่อ-นามสกุล
            </p>
            <p class="">
              {{ $store.state.users.name }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   ">
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
              {{ $store.state.users.email ? $store.state.users.email : '-' }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium    w-1/2">
              เเพ็กเกจหลัก
            </p>
            <p class="text-right w-1/2">
              {{ `${$store.state.auspicious_packages.package}: ${$store.state.auspicious_packages.price}` }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   ">
              จำนวนพระสงฆ์
            </p>
            <p class="">
              {{ Number(packages.monk).toString() }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   w-2/3">
              บริการนิมนต์พระสงฆ์
            </p>
            <p class="w-1/3 text-right">
              {{ packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ' }}
            </p>
          </div>
          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   w-2/3">
              บริการมัคนายก/มัคนายิกา แบบมืออาชีพ
            </p>
            <p class="w-1/3 text-right">
              {{ packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ' }}
            </p>
          </div>
          <div v-if="setNumber === 2" class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   w-2/3">
              รูปแบบการจัดเลี้ยงพระสงฆ์
            </p>
            <p class="w-1/3 text-right">
              {{ `${$store.state.auspicious_packages.style_buffet.name}: ${$store.state.auspicious_packages.style_buffet.price} บาท` }}
            </p>
          </div>

          <div class="flex flex-row justify-between mb-2 label_base">
            <p class="font-medium   w-1/2">
              อุปกรณ์เพิ่มเติม
            </p>
            <p class="w-1/2 text-right">
              {{ listAccessories }}
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
          <button type="button" class="button_base " @click="next(1)">
            ถัดไป
          </button>
          <button type="button" class="button_optional mt-4" @click="next(2)">
            เลือกแพ็คเกจอาหาร
          </button>
        </template>
      </the-footer-button>
    </section>

    <section v-show="step === 6" class="step4 ">
      <the-quotation @handleSubmitInformation="submit" />
    </section>

    <!-- <button v-show=" step === 2" type="button" class="button_base " @click="next(1)">
      ถัดไป
    </button>
    <button v-show=" step === 2" type="button" class="button_base mt-4" @click="next(2)">
      เลือกแพ็คเกจอาหาร
    </button> -->

    <modalfinish v-if="isFinish" @close="handelfinish" />
    <modalguest-information v-if="isModalinfo" @submit="isModalinfo = false" />
    <modalerror v-if="isError" @close="handelfinish" />
  </div>
</template>

<script>
import BaseButtonBack from '../../components/Base/BaseButtonBack.vue'
import modalfinish from '../../components/Modal/finish.vue'
import ModalguestInformation from '../../components/Modal/modalguestInformation.vue'
import Modalerror from '../../components/Modal/modalerror.vue'
import auspiciouset from '@/static/json/auspiciouset.json'
import set1 from '@/static/json/auspicious/set1.json'
import set2 from '@/static/json/auspicious/set2.json'
import set3 from '@/static/json/auspicious/set3.json'
import accessories from '@/static/json/accessories.json'
import monkBuffet from '@/static/json/monkBuffet.json'

export default {
  components: {
    BaseButtonBack,
    modalfinish,
    ModalguestInformation,
    Modalerror
  },

  data () {
    return {
      set1,
      set2,
      set3,
      step: 0,
      auspiciouset,
      isSelectPackage: false,
      accessories,
      setAccessories: [],
      fields: {},
      setStyle: 1,
      monkBuffet,
      isError: false,
      isModalinfo: false,
      isFinish: false,
      packages: {
        package: null,
        monk: 0,
        is_monk: true,
        is_churchwarden: false,
        name: '',
        price: 0
      },
      secoundPackage: [],
      setNumber: null,
      note: '',
      pacakgex: [],
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
      if (this.setNumber) {
        let x = this.auspiciouset.find(x => x.value === Number(this.setNumber))
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
      if (this.setNumber === 2) {
        let pricePackageBuffet = this.$store.state.auspicious_packages.style_buffet.price * this.$store.state.auspicious_packages.monk
        if (this.packages.price > 0) {
          pricePackageBuffet += this.packages.price
        }
        return pricePackageBuffet
      } else {
        let x = this.setAccessories.filter(x => x.count > 0)
        let sum = x.reduce((sum, current) => sum + current.count * current.price, 0)
        if (this.packages.price > 0) {
          sum += this.packages.price
        }

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
    handleSubmitNext () {
      if ((!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      } else {
        this.step++
      }
    },
    selectMorePackage (item) {
      this.setNumber = item.value

      if (item.value === 1) {
        this.pacakgex = this['set' + item.value].map((x) => {
          return {
            name: x.name,
            price: x.price,
            value: x.value
          }
        })
        this.step = 1
      }
      if (item.value === 2) {
        this.pacakgex = this['set' + item.value].map((x) => {
          return {
            name: x.name,
            price: 0,
            value: x.value,
            set: x.set
          }
        })
        this.step = 1
      }
      if (item.value === 3) {
        console.log('1')
      }
    },
    handleMoreMenu (menu) {
      if (this.setNumber === 2) {
        return menu.filter(x => x.value !== 1)
      } else {
        return menu
      }
    },
    handelfinish () {
      this.isFinish = false
      this.isError = false
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}` })
      let summary = {
        fullname: this.fields.Name,
        phone: this.fields['เบอร์โทร'],
        อีเมล: this.fields['อีเมล'],
        backupPhone: this.fields['เบอร์โทร (สำรอง)'],
        lift: this.fields['ลิฟท์ขนของ'],
        totalprice: this.fields['ยอดเงิน'],
        mainPackage: this.$store.state.auspicious_packages.package,
        subPackage: '',
        monk: this.fields['จำนวนพระสงฆ์'],
        guest: this.fields['จำนวนแขก (รวมพระ)'],
        is_churchwarden: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        is_monk: this.fields.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        address: this.fields['สถานที่จัดงาน (ที่อยู่)'],
        accessories: sum.toString(),
        orderid: this.fields['Order ID'],
        time_for_monk_lunch: this.fields['เวลาถวายข้าวพระ'],
        time_for_lunch: this.fields['เวลาพร้อมทาน'],
        note: this.fields.Notes,
        date: this.fields['วันส่งสินค้า']
      }

      if (this.setNumber === 2) {
        Object.assign(summary, {
          style_buffet: `${this.$store.state.auspicious_packages.style_buffet.name}: ${this.$store.state.auspicious_packages.style_buffet.price} บาท`
        })
      }

      this.$store.dispatch('setSummary', summary)
      this.$router.push('/summary')
    },
    submit (data) {
      this.$store.dispatch('handleLoading', true)
      let x = this.setAccessories.filter(x => x.count > 0)
      let sum = x.map((el) => { return `${el.name} x ${el.count}\n` })

      if (this.setNumber === 2) {
        Object.assign(this.fields, {
          สรุปรายการ: `${this.$store.state.auspicious_packages.style_buffet.name}: ${this.$store.state.auspicious_packages.style_buffet.price} บาท`
        })
      } else {
        Object.assign(this.fields, {
          สรุปรายการ: ''
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
        ยอดเงิน: this.totalPrice,
        วันส่งสินค้า: this.$moment(data.date).format('L'),
        เวลาพร้อมทาน: data.time,
        ลิฟท์ขนของ: data.cargo_lift ? 'มี' : 'ไม่มี',
        รหัสไปรษณีย์: Number(data.post_code),
        'Rich Menu': [
          'สิริมงคล'],
        'Package หลัก': this.$store.state.auspicious_packages.package,
        'Package รอง': '',
        'มัคนายก/มัคนายิกา': this.packages.is_churchwarden ? 'ต้องการ' : 'ไม่ต้องการ',
        บริการนิมต์พระสงฆ์: this.packages.is_monk ? 'ต้องการ' : 'ไม่ต้องการ',
        'สถานที่จัดงาน (ที่อยู่)': `${data.address} เขต/อำเภอ ${data.subdistrict} แขวง/ตำบล ${data.district} จังหวัด${data.province}`,
        อุปกรณ์เสริม: sum.toString(),
        Notes: this.note,
        'Order ID': Math.floor(100000 + Math.random() * 900000),
        จำนวนพระสงฆ์: this.packages.monk.toString(),
        'จำนวนแขก (รวมพระ)': (Number(this.packages.monk)).toString(),
        // รูปแบบการจัดงานเลี้ยง: `${setMonk.name}: ${setMonk.price} บาท`,
        วันรับออเดอร์: this.$moment(new Date()).format('L'),
        'Last Contact': this.$moment(new Date()).format('L'),
        'Sales Stage': 'New Lead'
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
      createRecord()
    },
    next (value) {
      if (this.step === 5 && (!this.$store.state.users.name || !this.$store.state.users.phone)) {
        this.isModalinfo = true
      }
      if (Number(this.setNumber) === 2) {
        this.$refs.validator3.validate().then((res) => {
          if (res) {
            let selectedPackage = ''
            // let packaged = this.pacakgex.find(x => x.value === this.packages.package)
            // if (packaged) {
            //   selectedPackage = `${this.setName} ${this.packages.name}`
            // } else {
            //   selectedPackage = `${this.setName}`
            // }
            selectedPackage = `${this.setName} ${this.packages.name}`
            let setMonk = {}
            if (Number(this.setNumber) === 2) {
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
              price: this.packages.price,
              style_buffet: setMonk,
              is_morepackage: true
            }

            this.$store.dispatch('setAuspiciousPackages', data)
            if (value === 1) {
              // this.step++
              if (this.step === 2) {
                this.step = 5
              } else {
                this.step++
              }
              // if (Number(this.setNumber) !== 1) {
              //   this.step = 5
              // } else {
              //   this.step = 4
              // }
            } else if (value === 2) {
              this.step = 3
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
            if (Number(this.setNumber) === 2) {
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
              price: this.packages.price,
              style_buffet: setMonk
            }
            let x = this.setAccessories.filter(x => x.count > 0)
            // let sum = x.map((el) => { return `${el.name} x ${el.count}` })
            this.$store.dispatch('setAuspiciousPackages', data)
            this.$store.dispatch('setAccessories', x)

            if (Number(this.setNumber) === 1) {
              if (value === 1) {
                if (this.step === 2) {
                  this.step = 4
                } else {
                  this.step++
                }
              } else if (value === 2) {
                this.step = 3
              }
            }
          }
        })
      }
    },
    back () {
      if (this.step === 3) {
        this.step--
      } else if (this.step === 0) {
        this.$router.push('/menu')
      } else if (this.step === 4) {
        this.step = 2
      } else if (Number(this.setNumber) !== 1 && this.step === 5) {
        this.step = 2
      } else if (this.step === 1 && this.isSelectPackage) {
        this.isSelectPackage = false
      } else if (this.step === 2 && this.isSelectPackage) {
        this.step = 1
      } else {
        this.step--
      }
    },
    selectSecondpackage (value) {
      this.packages.price = value.price
      this.packages.name = `${this.packages.name} ${value.name}`
      this.step++
    },
    selectpackage (value) {
      console.log(value)
      this.secoundPackage = []
      this.packages.package = value
      let packageMain = this.pacakgex.find(x => x.value === value)
      this.packages.name = packageMain.name
      this.packages.price = packageMain.price
      if (this.setNumber !== 2) {
        this.step++
      } else {
        if (packageMain.set) {
          this.secoundPackage.push(...packageMain.set)
        }
        this.isSelectPackage = true
      }
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
        query: { morepackage: Number(this.setNumber) }
      })
    }
  }
}
</script>

<style>

</style>
