<template>
  <div class="flex w-full justify-center items-center h-screen font-BreeSerif bg-genderbg">
      <div class="flex flex-col text-center items-center space-y-5">
        <h1 class="text-5xl 2xl:text-6xl sm:text-3xl tracking-wide text-genderChoiceCol text-stroke pb-6 sm:px-3">Are you a male or a female?</h1>
        <button @click="$router.push('/quizPage')" class="focus:outline-none rounded-full py-5 w-96 sm:w-64 h-auto bg-card1 text-5.5xl sm:text-3xl 2xl:text-6.5xl text-center">female</button>
        <button @click="$router.push('/quizPage')" class="focus:outline-none rounded-full py-5 w-96 sm:w-64 h-auto bg-red-500 text-5.5xl sm:text-3xl 2xl:text-6.5xl text-center">male</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-stroke{
    text-shadow: -1.2px -1.2px 0 #000, 1.2px -1.2px 0 #000, -1.2px 1.2px 0 #000, 1.2px 1.2px 0 #000;
}
</style>