<template>
  <div v-if="quizPage.question1" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 1:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">What is rejection to you?</p>
            <button @click="Question('Secure', 1)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Natural. You took a risk, and that’s what matters.</p>
            </button>
            <button @click="Question('Preoccupied', 1)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Bitter. Especially when it comes from someone close to you.</p>
            </button>
            <button  @click="Question('Fearful', 1)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Damaging. Makes you beat yourself up for not being enough.</p>
            </button>
            <button @click="Question('Dismissive', 1)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">All the more reason to rely on yourself more for happiness.</p>
            </button>
        </div>
    </div>
  </div>

<div v-if="quizPage.question2" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 2:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">What makes you uncomfortable?</p>
            <button @click="Question('Secure', 2)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Uncertainty</p>
            </button>
            <button @click="Question('Preoccupied', 2)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Being left behind</p>
            </button>
            <button @click="Question('Fearful', 2)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Disappointing someone you love</p>
            </button>
            <button @click="Question('Dismissive', 2)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Vulnerability</p>
            </button>
        </div>
    </div>
</div>
  <div v-if="quizPage.question3" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 3:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Right now, a relationship seems...</p>
            <button @click="Question('Secure', 3)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Hopeful. Love will come when it wants.</p>
            </button>
            <button @click="Question('Preoccupied', 3)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Consuming. You just want someone to love and hold tenderly.</p>
            </button>
            <button @click="Question('Fearful', 3)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Intimidating. What if they leave once they get to know more about you?</p>
            </button>
            <button @click="Question('Dismissive', 3)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Tiresome. You feel too busy to make it work in the long run.</p>
            </button>
        </div>
    </div>
  </div>
  <div v-if="quizPage.question4" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 4:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">When someone crosses your boundaries, you’re more likely to...</p>
            <button @click="Question('Secure', 4)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Be upfront about your feelings and talk it out with them.</p>
            </button>
            <button @click="Question('Preoccupied', 4)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Bottle it up. Or beat around the bush. Conflicts are intimidating.</p>
            </button>
            <button @click="Question('Fearful', 4)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Wallow in pity. Or explode in rage. What they did wasn’t right.</p>
            </button>
            <button @click="Question('Dismissive', 4)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Detach yourself from them. You need space from what they did, let them figure it out on their own.</p>
            </button>
        </div>
    </div>
  </div>
<div v-if="quizPage.question5" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 5:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">What do you value most in a relationship?</p>
            <button @click="Question('Secure', 5)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Reciprocation</p>
            </button>
            <button @click="Question('Preoccupied', 5)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Reassurance</p>
            </button>
            <button @click="Question('Fearful', 5)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Excitement</p>
            </button>
            <button @click="Question('Dismissive', 5)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Independence</p>
            </button>
        </div>
    </div>
</div>
<div v-if="quizPage.question6" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 6:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Reaching out for help is...</p>
            <button @click="Question('Secure', 6)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Necessary. There’s only so much you can do, and there’ll be people to shoulder your worries.</p>
            </button>
            <button @click="Question('Preoccupied', 6)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Stressful. You dislike feeling like a burden to the people you love.</p>
            </button>
            <button @click="Question('Fearful', 6)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Difficult. Everyone’s caught up in their own business, no need to add your problems to theirs.</p>
            </button>
            <button @click="Question('Dismissive', 6)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">The least of your concern. You’re used to depending on yourself for support.</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question7" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 7:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">When your loved one grows closer to a new set of friends, you’re more likely to...</p>
            <button  @click="Question('Secure', 7)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Be happy for your loved one, and get to know them through your loved one’s stories about them.</p>
            </button>
            <button @click="Question('Preoccupied', 7)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Overthink about being replaced. What if your loved one gets bored of you? Where are you lacking?</p>
            </button>
            <button @click="Question('Fearful', 7)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Feel jealous. Or cling onto them. Their attention to you shows how much they love you!</p>
            </button>
            <button @click="Question('Dismissive', 7)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Suck it up. Feel indifferent. It hurts, but they’re free to do as they please.</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question8" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 8:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Being alone is...</p>
            <button @click="Question('Secure', 8)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">A breather. You need time for yourself too.</p>
            </button>
            <button @click="Question('Preoccupied', 8)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Isolating. Your happiness lies in the company of the people you love.</p>
            </button>
            <button @click="Question('Fearful', 8)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Terrifying. Are you worthy of being loved?</p>
            </button>
            <button @click="Question('Dismissive', 8)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Better. You don’t need anyone else to depend on for love or support.</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question9" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 9:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">When someone doesn’t put in the same effort and energy you put into your bonds, you mostly...</p>
            <button @click="Question('Secure', 9)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Bring it up. Move on for the better, if it doesn’t work out.</p>
            </button>
            <button @click="Question('Preoccupied', 9)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Act out passive-aggressively. You’re just returning the favor.</p>
            </button>
            <button @click="Question('Fearful', 9)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Let the anxiety eat you. You feel the need to know if they still like you.</p>
            </button>
            <button @click="Question('Dismissive', 9)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Do the same. Let the connection drift apart, it’s tiring to put in work.</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question10" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 10:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">To you, distance...</p>
            <button @click="Question('Secure', 10)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Strengthens relationships over time.</p>
            </button>
            <button @click="Question('Preoccupied', 10)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Feels threatening. What if your relationship falls apart ‘cause of it?</p>
            </button>
            <button @click="Question('Fearful', 10)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Is suffocating. They’re out there enjoying what you’re missing out on.</p>
            </button>
            <button @click="Question('Dismissive', 10)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Is draining. We’re leading busy lives, so come what may.</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question11" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 11:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">How do you love?</p>
            <button @click="Question('Secure', 11)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Openly. With nothing to lose. Not afraid to wear your heart on your sleeve.</p>
            </button>
            <button @click="Question('Preoccupied', 11)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Intensely. Like it’s the last day on earth. You go all-out and never want to let go.</p>
            </button>
            <button @click="Question('Fearful', 11)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Impulsively. You’re here for a fun time, not a long while.</p>
            </button>
            <button @click="Question('Dismissive', 11)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Quietly. People always come and go, so you keep your guard up and try not get too attached. You love them from a distance, though.</p>
            </button>
        </div>
    </div>
 </div>
<div v-if="quizPage.question12" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 12:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Vulnerability and opening up feels...</p>
            <button @click="Question('Secure', 12)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Natural. How will they know if you don’t speak up?</p>
            </button>
            <button @click="Question('Preoccupied', 12)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Suffocating. What if they abandon you?</p>
            </button>
            <button @click="Question('Fearful', 12)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Humiliating. Why would anyone care about you?</p>
            </button>
            <button @click="Question('Dismissive', 12)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Trivial. Why do you need other people?</p>
            </button>
        </div>
    </div>
 </div>
 <div v-if="quizPage.question13" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 13:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Why would you rely on yourself?</p>
            <button @click="Question('Secure', 13)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">It puts you at ease.</p>
            </button>
            <button @click="Question('Preoccupied', 13)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">You’re learning to be your own best friend when no one’s there.</p>
            </button>
            <button @click="Question('Fearful', 13)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">The world’s out to get you and you gotta toughen up.</p>
            </button>
            <button @click="Question('Dismissive', 13)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">You learned to trust the hard way.</p>
            </button>
        </div>
    </div>
 </div>
  <div v-if="quizPage.question14" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 14:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">Showing up to situations outside your comfort zone feels...</p>
            <button @click="Question('Secure', 14)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Challenging. You’ll find people you’ll get along with!</p>
            </button>
            <button @click="Question('Preoccupied', 14)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Distressing. What if the people you meet won’t like you?</p>
            </button>
            <button @click="Question('Fearful', 14)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Unsettling. You’d rather avoid it instead.</p>
            </button>
            <button @click="Question('Dismissive', 14)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Non-committal. You just gotta look out for yourself.</p>
            </button>
        </div>
    </div>
 </div>
   <div v-if="quizPage.question15" class="flex w-full h-screen font-BreeSerif bg-questionBG bg-no-repeat bg-cover md:bg-center sm:bg-center">
    <div class="flex flex-col space-y-8 w-full mt-28">
        <div class="pl-32 sm:pl-8">
            <p class="text-4xl 2xl:text-5xl sm:text-3xl">Question 15:</p>
        </div>
        <div class="flex flex-col space-y-5 justify-center text-center items-center">
            <p class=" text-2xl 2xl:text-3xl sm:text-xl pb-4">What is reassurance to you?</p>
            <button @click="Question('Secure', 15)" class="focus:outline-none w-97 sm:w-72 px-16 sm:px-4 py-4 bg-quizblue rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">A love language</p>
            </button>
            <button @click="Question('Preoccupied', 15)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-pink-300 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">A need to put worries to rest</p>
            </button>
            <button @click="Question('Fearful', 15)" class="focus:outline-none w-97 sm:w-72 px-4 sm:px-4 py-4 bg-card1 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">Empty words out of obligation to comfort you</p>
            </button>
            <button @click="Question('Dismissive', 15)" class="focus:outline-none w-97 sm:w-72 px-5 sm:px-4 py-4 bg-red-500 rounded-full text-center">
                <p class="text-xl 2xl:text-2xl sm:text-base">A filler, you don’t like being babied.</p>
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
              <button @click="takeQuiz()" class="focus:outline-none flex-no-shrink py-2 px-4 rounded bg-green-300 hover:bg-green-500">Let's go</button>
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
            AttachmentStyleTotalSecure: 0,
            AttachmentStyleTotalFearful:0,
            AttachmentStyleTotalPreoccupied:0,
            AttachmentStyleTotalDismissive:0,
            // quizPage:[
            //     {question1 :false},
            //     {question2 :false},
            //     {question3 :false},
            //     {question4 :false},
            //     {question5 :false},
            //     {question6 :false},
            //     {question7 :false},
            //     {question8 :false},
            //     {question9 :false},
            //     {question10 :false},
            //     {question11 :false},
            //     {question12 :false},
            //     {question13 :false},
            //     {question14 :false},
            //     {question15 :false},

            // ],
             quizPage:{
                question1 :false,
                question2 :false,
                question3 :false,
                question4 :false,
                question5 :false,
                question6 :false,
                question7 :false,
                question8 :false,
                question9 :false,
                question10 :false,
                question11 :false,
                question12 :false,
                question13 :false,
                question14 :false,
                question15 :false,

             }


        }
    },
    created(){

    },
    methods:{
        takeQuiz(){
           this.quizModalNoti = false;
           this.quizPage.question1 = true;
        },

        Question (AttachmentStyle, QuestionNumber){
            if(AttachmentStyle == "Secure")
            this.AttachmentStyleTotalSecure ++;
            if (AttachmentStyle == "Fearful")
            this.AttachmentStyleTotalFearful ++;
            if (AttachmentStyle == "Preoccupied")
            this.AttachmentStyleTotalPreoccupied ++;
            if (AttachmentStyle == "Dismissive")
            this.AttachmentStyleTotalDismissive ++;

           
            if (QuestionNumber == 1){
                this.quizPage.question1 = false;
                this.quizPage.question2 = true;
            }
            if (QuestionNumber == 2){
                this.quizPage.question2 = false;
                this.quizPage.question3 = true;
            }
            if (QuestionNumber == 3){
                this.quizPage.question3 = false;
                this.quizPage.question4 = true;
            } 
            if (QuestionNumber == 4){
                this.quizPage.question4 = false;
                this.quizPage.question5 = true;
            }
            if (QuestionNumber == 5){
                this.quizPage.question5 = false;
                this.quizPage.question6 = true;
            }
            if (QuestionNumber == 6){
                this.quizPage.question6 = false;
                this.quizPage.question7 = true;
            } 
            if (QuestionNumber == 7){
                this.quizPage.question7 = false;
                this.quizPage.question8 = true;
            }
            if (QuestionNumber == 8){
                this.quizPage.question8 = false;
                this.quizPage.question9 = true;
            }
            if (QuestionNumber == 9){
                this.quizPage.question9 = false;
                this.quizPage.question10 = true;
            }
            if (QuestionNumber == 10){
                this.quizPage.question10 = false;
                this.quizPage.question11 = true;
            }          
            if (QuestionNumber == 11){
                this.quizPage.question11 = false;
                this.quizPage.question12 = true;
            }
            if (QuestionNumber == 12){
                this.quizPage.question12 = false;
                this.quizPage.question13 = true;
            }
            if (QuestionNumber == 13){
                this.quizPage.question13 = false;
                this.quizPage.question14 = true;
            }
            if (QuestionNumber == 14){
                this.quizPage.question14 = false;
                this.quizPage.question15 = true;
            }
            if (QuestionNumber == 15){
                this.quizPage.question15 = false;
                if (this.AttachmentStyleTotalSecure >= this.AttachmentStyleTotalFearful && this.AttachmentStyleTotalSecure >= this.AttachmentStyleTotalPreoccupied && this. AttachmentStyleTotalSecure >= this.AttachmentStyleTotalDismissive){
                   console.log(this.AttachmentStyleTotalSecure);
                   localStorage.setItem("Attachment Result", JSON.stringify('Secure'));
                }
                else if (this.AttachmentStyleTotalFearful >= this.AttachmentStyleTotalSecure && this.AttachmentStyleTotalFearful >= this.AttachmentStyleTotalPreoccupied && this.AttachmentStyleTotalFearful >= this.AttachmentStyleTotalDismissive){
                   
                   console.log(this.AttachmentStyleTotalFearful);
                   localStorage.setItem("Attachment Result", JSON.stringify('Fearful'));
                }
                else if (this.AttachmentStyleTotalPreoccupied >= this.AttachmentStyleTotalSecure && this.AttachmentStyleTotalPreoccupied >= this.AttachmentStyleTotalFearful && this.AttachmentStyleTotalPreoccupied >= this.AttachmentStyleTotalDismissive){
                    console.log(this.AttachmentStyleTotalPreoccupied);
                    localStorage.setItem("Attachment Result", JSON.stringify('Preoccupied'));
                }
                else if (this.AttachmentStyleTotalDismissive >= this.AttachmentStyleTotalSecure && this.AttachmentStyleTotalDismissive >= this.AttachmentStyleTotalFearful && this.AttachmentStyleTotalDismissive >= this.AttachmentStyleTotalPreoccupied){
                    console.log(this.AttachmentStyleTotalDismissive);
                    localStorage.setItem("Attachment Result", JSON.stringify('Dismissive'));
                }

                this.$router.push({ path: "/resultPage" });
                
            }


            
            
            
                  
        }

    }
}
</script>

<style scoped>
</style>