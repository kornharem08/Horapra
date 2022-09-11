// import Vue from 'vue'
// import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// import 'swiper/swiper-bundle.css'
// SwiperClass.use([Pagination, Mousewheel, Autoplay])
// Vue.use(getAwesomeSwiper(SwiperClass))
// const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Navigation, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

const { directive } = getAwesomeSwiper(SwiperClass)
Vue.directive('swiper', directive)

// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)
