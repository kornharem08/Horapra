<template>
  <div class="">
    <div class="grid gap-6 mb-6 grid-cols-2 px-[24pt] mt-[76px]">
      <div v-for="(item,index) in list" :key="index" class="flex items-center flex-col justify-start" @click="selectMenu(item.value)">
        <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white">
          <img
            v-if="item.url"
            class="rounded-[10pt]"
            :src="require(`~/assets/img${item.url}`)"
          >
        </div>
        <div class="text-center text-[15px] mt-[10pt]" :class="{ 'px-4' : item.value === 4}">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="px-3">
    <div class="mb-3">
      <span class="text-main">
        จัดเลี้ยงบุฟเฟ่ต์
      </span>
      <div
        v-swiper:buffet="swiperOptions"
        class="swiper mt-4"
      >
        <div class="swiper-wrapper  " @click.stop="">
          <div v-for="(menu,idx) in guestBuffet" :key="idx" class="swiper-slide ">
            <div class="h-20 border-2 border-gray-300 bg-white flex text-[10px] rounded items-center border justify-center text-center w-full" @click="selectbuffet(menu.value)">
              {{ menu.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <span class="text-main">
        ข้าวกล่อง/รักษ์โลก/ปิ่นโตอิ่มบุญ
      </span>
      <div
        v-swiper:lunchbox="swiperOptions"
        class="swiper mt-4"
      >
        <div class="swiper-wrapper  ">
          <div v-for="(lunch,idx) in lunchset" :key="idx" class="swiper-slide ">
            <div class="h-20 border-2 border-gray-300 bg-white flex text-[10px] rounded items-center border justify-center text-center w-full" @click="selectLuch(lunch.value)">
              {{ lunch.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <span class="text-main">
        สิริมงคล
      </span>
      <div
        v-swiper:auspicious="swiperOptions"
        class="swiper mt-4"
      >
        <div class="swiper-wrapper  ">
          <div v-for="(item,idx) in auspiciouset" :key="idx" class="swiper-slide ">
            <div class="h-20 border-2 border-gray-300 bg-white flex text-[10px] rounded items-center border justify-center text-center w-full" @click="selectAuspicious(item.value)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <span class="text-main">
        คอฟฟี่เบรค/สแน็คบ็อกซ์/ข้าวต้ม
      </span>
      <div
        v-swiper:coffeebreaks="swiperOptions"
        class="swiper mt-4"
      >
        <div class="swiper-wrapper  ">
          <div v-for="(s,idx) in coffeebreak" :key="idx" class="swiper-slide ">
            <div class="h-20 border-2 border-gray-300 bg-white flex text-[10px] rounded items-center border justify-center text-center w-full" @click="selectcoffeebreak(s.value)">
              {{ s.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>

import guestBuffet from '@/static/json/guestBuffet.json'
import lunchset from '@/static/json/lunchset.json'
import auspiciouset from '@/static/json/auspiciouset.json'
import coffeebreak from '@/static/json/coffeebreak.json'
const list = [
  {
    name: 'บุฟเฟ่ต์',
    value: 1,
    url: '/button/Button/1/Buffet_Cover.jpg'
  },
  {
    name: 'ข้าวกล่อง/รักษ์โลก/ปิ่นโตอิ่มบุญ',
    value: 2,
    url: '/button/Button/2/Boxset_Cover.jpg'
  },
  {
    name: 'สิริมงคล',
    value: 3,
    url: '/button/Button/3/สิริมงคล-Cover.jpg'
  },
  {
    name: 'คอฟฟี่เบรค/ข้าวต้ม/สแน็คบ็อค',
    value: 4,
    url: '/button/Button/4/CoffeeBreak_Cover.jpg'
  },
  {
    name: 'Wedding@Home',
    value: 5,
    url: '/button/Button/5/Wedding@Home_Cover.jpg'
  }
]
export default {
  data () {
    return {
      list,
      guestBuffet,
      lunchset,
      coffeebreak,
      auspiciouset,
      swiperOptions: {
        loop: false,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 10
      }
    }
  },
  mounted () {
    this.$store.dispatch('setAccessories', null)
  },
  methods: {
    test () {
      let Airtable = require('airtable')
      let base = new Airtable({ apiKey: 'keyt0HxfGGJGs7yGh' }).base('app8GE6tvKpt6fwj5')
      base('Sales Deals').select({
        // Selecting the first 3 records in All Deals:
        view: 'All Deals',
        fields: ['Name', 'Order ID']
      }).eachPage(function page (records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log('Retrieved', record)
        })

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage()
      }, function done (err) {
        if (err) { console.error(err) }
      })
    },
    selectcoffeebreak (value) {
      this.$router.push({
        name: 'coffeeBreak',
        query: { set: value }
      })
    },
    selectAuspicious (value) {
      this.$router.push({
        name: 'auspicious',
        query: { set: value }
      })
    },
    selectLuch (value) {
      this.$router.push({
        name: 'lunchbox',
        query: { set: value }
      })
    },
    selectbuffet (value) {
      this.$router.push({
        name: 'buffet',
        query: { set: value }
      })
    },
    selectMenu (value) {
      const menu = {
        1: 'buffet',
        2: 'lunchbox',
        3: 'auspicious',
        4: 'coffeeBreak',
        5: 'wedding'
      }

      this.$router.push(`/${menu[value]}`)
    }
  }
}
</script>

<style>

</style>
