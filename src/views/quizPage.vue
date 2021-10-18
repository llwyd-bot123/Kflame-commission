<template>
  <div v-if="quizPage" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 1:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">What is rejection to you?</p>
            <button class="focus:outline-none w-auto sm:w-72 px-16 sm:px-4 py-4 bg-blue-600 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Natural. You took a risk, and that’s what matters.</p>
            </button>
            <button class="focus:outline-none w-auto sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Bitter. Especially when it comes from someone close to you.</p>
            </button>
            <button class="focus:outline-none w-auto sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Damaging. Makes you beat yourself up for not being enough.</p>
            </button>
            <button class="focus:outline-none w-auto sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">All the more reason to rely on yourself more for happiness.</p>
            </button>
        </div>
    </div>
  </div>

  <div v-if="quizModalNoti" class="flex font-BreeSerif z-10 inset-0 fixed justify-center items-center bg-gray-800">
      <div class="flex items-center space-y-6 bg-white flex-col rounded-lg w-auto p-8 h-auto">
          <div class="flex text-center">
              <p class="font-semibold sm:text-lg md:text-xl text-2xl 2xl:text-3xl">Ready to take the quiz?</p>
          </div>
          <div class="flex flex-row space-x-3 text-xl sm:text-base md:text-lg 2xl:text-2xl">
              <button @click="takeQuiz" class="focus:outline-none flex-no-shrink py-2 px-4 rounded bg-green-300 hover:bg-green-500">Let's go</button>
              <button @click="$router.push('/')" class="focus:outline-none flex-no-shrink py-2 px-4 rounded bg-red-300 hover:bg-red-500">Not Yet</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            quizModalNoti: true,
            quizPage: false,
        }
    },

    methods:{
        takeQuiz(){
           this.quizModalNoti = !this.quizModalNoti
           this.quizPage = !this.quizPage 
        }
    }
}
</script>

<style scoped>
</style>