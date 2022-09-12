<template>
  <nav class="bg-white  px-2 sm:px-4 py-2.5 mb-4">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="flex items-center">
        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> -->
        <span class="self-center text-black text-base tracking-wide whitespace-nowrap " @click="$router.push('/menu')">Horapa Buffet</span>
      </a>
      <button type="button" class="inline-flex items-center p-2 ml-3 text-sm  cursor-pointer focus:outline-none " aria-controls="navbar-default">
        <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
