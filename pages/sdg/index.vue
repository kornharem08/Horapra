<template>
  <div>
    <base-button-back title="ย้อนกลับ" class="mb-2" @back="back" />
    <div class="pt-10">
      <section v-if="step === 0">
        <div class="text-[14pt] w-fit px-[24pt]">
          SDGS
        </div>
        <div class="grid gap-2 mb-6 grid-cols-2 mt-2  px-[24pt]">
          <div v-for="(item) in 8" :key="item">
            <div class="w-full aspect-square  rounded-[10pt] flex items-center justify-center border bg-white" @click="selected(item)">
              <img
                class="rounded-[10pt] object-cover  h-full w-full"
                :src="require(`~/assets/img/sdg/${item}.jpg`)"
              >
            </div>
          </div>
        </div>
      </section>
      <section v-if="step === 1">
        <div class="text-[14pt] w-fit px-[24pt]">
          {{ setName }}
        </div>
        <div v-for="(index) in countImage" :key="index" class="mx-auto flex flex-col justify-center items-center  w-full  aspect-video cursor-pointer mt-1 mb-3  px-[24pt]" @click="selectImage =`/sdg/images/${indexContent}/${index}.jpg`,isImages = true">
          <img
            class="rounded-[10pt] object-cover aspect-video"
            :src="require(`~/assets/img/sdg/images/${indexContent}/${index}.jpg`)"
          >
        </div>
      </section>

      <ModalImages v-if="isImages" :img="selectImage" @close="isImages = false,selectImage = ''" />
    </div>
  </div>
</template>
<!-- @click="selectImage =`/sdg/${item}.jpg`,isImages = true" -->
<script>
import ModalImages from '../../components/Modal/images'
const dataContent = [8, 7, 11, 8, 2, 1, 12, 4]
export default {
  components: {
    ModalImages
  },
  data () {
    return {
      isImages: false,
      selectImage: null,
      dataContent,
      indexContent: null,
      step: 0,
      countImage: 0
    }
  },
  computed: {
    setName () {
      const names = {
        1: 'แรงบัลดาลใจปณิธาน',
        2: 'อาหารสร้างคน',
        3: 'HORAPA ACADEMY',
        4: 'สร้างชุมชนยั่งยืน',
        5: 'ผลลัพท์การเปลี่ยนแปลง',
        6: 'วัตถุดิบอ่อนทานตะวันมาจากผลผลิตของโรงเรียนในชุมชน',
        7: 'นำอาหารที่เกินจากการผลิต ทำเป็นอาหารกล่องส่งครอบครัวผู้ป่วยติดเตียง',
        8: 'แนวคิด SDGs'
      }
      return names[this.indexContent]
    }
  },
  methods: {
    back () {
      if (this.step === 0) {
        this.$router.push('/menu')
      } else {
        this.step--
      }
    },
    selected (index) {
      this.indexContent = index
      this.countImage = dataContent[index - 1]
      console.log(index)
      console.log(this.countImage)
      this.step++
    }
  }
}
</script>
