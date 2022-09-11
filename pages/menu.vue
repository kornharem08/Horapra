<template>
  <div class="px-3">
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
  </div>
</template>

<script>

import guestBuffet from '@/static/json/guestBuffet.json'
import lunchset from '@/static/json/lunchset.json'
import auspiciouset from '@/static/json/auspiciouset.json'
import coffeebreak from '@/static/json/coffeebreak.json'
export default {
  data () {
    return {
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
  methods: {
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
    selectMenu (name) {
      this.$router.push(`/${name}`)
    }
  }
}
</script>

<style>

</style>
