<template>
  <div id="main-scroll" class="container mx-auto min-h-screen max-w-3xl  relative overflow-x-hidden">
    <thenav />
    <img src="~/static/leaf.png" class="top-16 -right-8 absolute w-36 h-36 rotate-[-60deg]">
    <base-name-customer />
    <div class="pb-32">
      <Nuxt />
    </div>

    <base-loading v-if="loading" />
    <client-only>
      <notifications :duration="6000" group="auth" position="top center" width="360px">
        <template #body="{ item, close }">
          <NotificationBody :item="item" @close="close()" />
        </template>
      </notifications>
    </client-only>
  </div>
</template>

<script>
import BaseLoading from '../components/Base/BaseLoading'
import BaseNameCustomer from '../components/Base/BaseNameCustomer.vue'

export default {
  components: { BaseLoading, BaseNameCustomer },
  computed: {
    loading () {
      return this.$store.getters.loading
    }

  }

}
</script>

<style>
/* input {
    @apply block py-2.5 px-4 w-full text-gray-900 bg-gray-50 rounded-full outline-none shadow-lg  sm:text-xs focus:border focus:ring-main focus:border-main
  }

button {
      @apply cursor-pointer
  } */
</style>
