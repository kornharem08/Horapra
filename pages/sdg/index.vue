<template>
  <div>
    <base-button-back title="ย้อนกลับ" class="mb-2" @back="back" />
    <div class="grid gap-2 mb-6 grid-cols-2 mt-2  px-[24pt]">
      <div v-for="(item) in 8" :key="item">
        <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white" @click="selectImage =`/sdg/${item}.jpg`,isImages = true">
          <img
            class="rounded-[10pt] object-cover  h-full w-full"
            :src="require(`~/assets/img/sdg/${item}.jpg`)"
          >
        </div>
      </div>
    </div>
    <ModalImages v-if="isImages" :img="selectImage" @close="isImages = false,selectImage = ''" />
  </div>
</template>

<script>
import ModalImages from '../../components/Modal/images'
export default {
  components: {
    ModalImages
  },
  data () {
    return {
      isImages: false,
      selectImage: null
    }
  },
  methods: {
    back () {
      this.$router.push('/menu')
    }
  }
}
</script>
