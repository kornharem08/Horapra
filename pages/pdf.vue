<template>
  <div>
    <input v-model="filename" type="text">
    <button @click="exportPdf">
      dsfsdf
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filename: ''
    }
  },
  methods: {
    exportPdf () {
      let pdfMake = require('pdfmake/build/pdfmake')
      // const Printer = require('pdfmake');
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
          bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          italics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          bolditalics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf'
        }
      }

      // const docDefinition = {
      //   content: [
      //     'English',
      //     'ไทย',
      //     {
      //       text: '',
      //       style: 'icon'
      //     }
      //   ]

      const docDefinition = {
        content: [
          'English',
          'ไทย',
          {
            text: '',
            style: 'icon'
          }
        ]
      }

      const pdfDocGenerator = pdfMake.createPdf(docDefinition)
      pdfDocGenerator.getBlob((blob) => {
        this.$storage.ref(this.filename).put(blob).then(function (snapshot) {
          console.log(snapshot)
          const link =
            'https://firebasestorage.googleapis.com/v0/b/horapa-b6ee7.appspot.com/o/' + this.filename + '?alt=media'

          console.log(link)
        }).catch((error) => {
          console.log('One failed upload logo :', error.message)
        })
      })
    },
    upload (item) {
      let storageRef = this.$storage().ref('newfolder')
      return storageRef
        .put(item)
        .then((snapshot) => {
          console.log('One success:')
        })
        .catch((error) => {
          console.log('One failed:', error.message)
        })
    }

  }
}
</script>

<style>

</style>
