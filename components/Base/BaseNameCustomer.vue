<template>
  <div class="text-[16pt] mt-[25pt] font-medium px-[24pt] mb-[18pt]">
    {{ $store.state.users.name ? `สวัสดี ${$store.state.users.name}` : 'สวัสดีค่ะ' }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
