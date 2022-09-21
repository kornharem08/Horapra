<template>
  <div>
    <button @click="exportPdf">
      dsfsdf
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async  exportPdf () {
      let pdfMake = require('pdfmake/build/pdfmake')
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
          bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          italics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
          bolditalics: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf'
        }
      }

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
      await pdfMake.createPdf(docDefinition).open()
    }

  }
}
</script>

<style>

</style>
