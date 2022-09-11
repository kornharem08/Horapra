<template>
  <div
    v-swiper:myDirectiveSwiper="swiperOptions"
    class="swiper mt-6"
  >
    <div class="swiper-wrapper navigation ">
      <div v-for="(menu,idx) in listMenu" :key="idx" class="swiper-slide ">
        <div class="h-20 border-2 border-gray-300 bg-white flex text-[10px] items-center border justify-center text-center w-full">
          {{ menu.name }}
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets" />
    <div slot="button-next" class="swiper-button-next" />
    <div slot="button-prev" class="swiper-button-prev" />
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    listMenu: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      swiperOption2: {
        effect: 'coverflow',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      swiperOptions: {
        loop: true,
        slidesPerView: '4',
        centeredSlides: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true,
        //   clickable: true
        // }
      }
    }
  }
}

</script>

<style  scoped>
.swiper-button-next, .swiper-button-prev {
@apply text-main
}
</style>
