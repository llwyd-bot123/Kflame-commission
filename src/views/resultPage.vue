<template>
    <div class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="flex mt-8 mx-auto">1</div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Do Bong Soon</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Strong Woman Do Bong Soon”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Growing up in a loving and supportive environment, Do Bong Soon from Strong Woman Do Bong Soon has shown the care and support that she re-ceived growing up to her friends and especially to her lover.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Her close family values had made it easier for her to trust the people and her warm and uplifting personality made it unchallenging for them to trust her as well.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Secure/securefemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>
    
    <!-- Result Page 2 -->
    <div v-if="false" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="flex mt-8 mx-auto">1</div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Kim Bok-Joo</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Weightlifting Fairy”</p>
                </div>
                <div class="flex flex-col pl-3 pb-24 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Known for being strong and empowered, Kim Bok-Joo from Weightlifting Fairy has also a soft spot for Jae-Yi. Intimidated that Jae-Yi might not like her back because of her boyish personality. She drastically changed her entire persona hoping that he'll like her back. </p>
                  </div>
                </div>
                <div class="items-center pb-0.5">
                    <button class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Preoccupied/preoccupiedfemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>

    <!-- Result Page 3 -->
    <div v-if="false" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="flex mt-8 mx-auto">1</div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Yoo Seung-ho</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “I am Not a Robot”</p>
                </div>
                <div class="flex flex-col pl-3 pb-2.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Though he lives a wealthy life as a director of a financial group, he grew up sheltered and in isolation cause of his allergic reaction to humans.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span class="invisible">⭐</span>
                    <p>His allergy gives him life-threatening rashes that spread around his body whenever he comes into physical contact with people.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>His trust issues stem from his traumatic past, that's why he protects himself by putting on a front-bossy and demanding. That changes when he meet Aji3-a female homanoid robot designed to care for and connect with people.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Dismissive/dismissivemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>

    <!-- Result Page 4 -->
    <div v-if="false" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="flex mt-8 mx-auto">1</div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-65% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-8">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Kim Jung-hwan</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Reply 1988”</p>
                </div>
                <div class="flex flex-col pl-3 pb-0.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg w-11/12">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>One of the leaders of the neighborhood group known for his smarts and good looks, helping his brother achieve his goals.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>He masks his vulnerabilities with sarcasm because he's uncomfortable opening up to people. Underneath his impassive personality, lies his big heart and care for his friends. </p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>But because of missed chances in confessing his love for Deok Sun, he had the courage to let go of something that was meant for the other without holding a grudge- he accepted what was meant for him.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Fearful/Fearfulmale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
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