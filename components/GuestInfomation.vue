<template>
  <ValidObs ref="form" v-slot="{ handleSubmit }">
    <div class="flex flex-col items-center justify-center pt-3 ">
      <div class="text-[14pt] text-center  font-bold text-[#142917]">
        {{ title }}
      </div>
      <form class="w-full">
        <ValidPro v-slot="{ errors }" rules="required" name="ชื่อ-นามสกุล">
          <base-input v-model="users.name" type="text" label="ชื่อ-นามสกุล *" />
          <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
        </ValidPro>
        <ValidPro v-slot="{ errors }" rules="required|phone_th" name="เบอร์โทรศัพท์">
          <base-input v-model="users.phone" type="number" label="เบอร์โทรศัพท์ *" />
          <span v-if="errors[0]" class="label_error">{{ errors[0] }}</span>
        </ValidPro>
        <base-input v-model="users.email" type="email" label="ชื่อ Facebook" />
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
