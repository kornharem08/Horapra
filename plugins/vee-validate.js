import vue from 'vue'
import { extend, ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import {
  alpha,
  numeric,
  required,
  min,
  max,
  email,
  length
} from 'vee-validate/dist/rules'
import th from 'vee-validate/dist/locale/th.json'
localize({
  th: {
    ...th,
    names: {
      pronoun: 'คำนำหน้าชื่อ',
      password: 'รหัสผ่าน',
      confirmPassword: 'ยืนยันรหัสผ่าน'
    }
  }
})
localize('th')
extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: '{_field_}ไม่ตรงกับ{target}'
})

extend('minquantity', {
  params: ['target'],
  validate (value, { target }) {
    return value > 0
  },
  message: '{_field_} ต้องมากกว่า 0'
})
extend('morethanzero', {
  validate (value) {
    return value >= 1
  },
  message: '{_field_}ต้องมากกว่าหรือเท่ากับ 1 กรัม'
})

extend('morethan', {
  params: ['target'],
  validate (value, { target }) {
    return value >= target
  },
  message: 'ออเดอร์ต้องมากกว่าหรือเท่ากับ{target}'
})

extend('verify_password', {
  validate (value) {
    return (
      /[A-Z]/.test(value) &&
      /[a-z]/.test(value) &&
      /\d/.test(value) &&
      /[!@#$%^&*()_\-+=`~<>?\\/;,.'"\][{}]/.test(value)
    )
  },
  message: 'รหัสผ่าน ต้องประกอบด้วยตัวพิมพ์ใหญ่ 1 ตัว ตัวพิมพ์เล็ก 1 ตัว ตัวเลข 1 ตัว และอักขระพิเศษ 1 ตัว'
})

extend('idCard', {
  validate (value) {
    return (Script_checkID(value) && value.length > 10) || value.length === 10
  },
  message: 'เลขบัตรประชาชน/เลขผู้เสียภาษีไม่ถูกต้อง'
})

// eslint-disable-next-line camelcase
function Script_checkID (id) {
  if (id.substring(0, 1) === 0) { return false }
  if (id.length !== 13) { return false }
  let sum = 0
  for (let i = 0; i < 12; i++) {
    sum += parseFloat(id.charAt(i)) * (13 - i)
  }
  if ((11 - sum % 11) % 10 !== parseFloat(id.charAt(12))) { return false }
  return true
}

extend('option', {
  ...required,
  message: 'กรุณาเลือก {_field_} '
})

extend('phone_th', {
  validate (value) {
    return /0[6|8|9]{1}\d{8}$/.test(value)
  },
  message: 'เบอร์โทรศัพท์ ไม่ถูกต้อง'
})

extend('alpha', alpha)
extend('numeric', numeric)
extend('required', required)
extend('min', min)
extend('max', max)
extend('email', email)
extend('length', length)

vue.component('ValidPro', ValidationProvider)
vue.component('ValidObs', ValidationObserver)
