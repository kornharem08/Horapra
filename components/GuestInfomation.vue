<template>
  <ValidObs ref="form" v-slot="{ handleSubmit }">
    <div class=" px-3 flex flex-col items-center justify-center py-5">
      <div class="text-xl text-center mb-5 font-bold text-[#C68B67]">
        {{ title }}
      </div>
      <form class="w-full">
        <ValidPro v-slot="{ errors }" rules="required" name="ชื่อ-นามสกุล">
          <base-input v-model="users.name" type="text" placeholder="ชื่อ-นามสกุล *" label="ชื่อ-นามสกุล *" />
          <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
        </ValidPro>
        <ValidPro v-slot="{ errors }" rules="required|phone_th" name="เบอร์โทรศัพท์">
          <base-input v-model="users.phone" type="number" placeholder="เบอร์โทรศัพท์ *" label="เบอร์โทรศัพท์ *" />
          <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
        </ValidPro>
        <ValidPro v-slot="{ errors }" rules="required|email" name="อีเมล">
          <base-input v-model="users.email" type="email" placeholder="อีเมล *" label="อีเมล *" />
          <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
        </ValidPro>
        <div class="flex items-center justify-center mt-10">
          <button type="button" class="button_base" @click="handleSubmit(submit)">
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  </ValidObs>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'ขอทำความรู้จักคุณลูกค้าหน่อยนะคะ'
    }
  },
  data () {
    return {
      users: {
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('setUsers', this.users)
      this.$emit('submit')
      // this.$router.push('/menu')
    }
  }
}
</script>
