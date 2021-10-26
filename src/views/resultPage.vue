<template>
<!-- secure -->
        <div v-if="secureF1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Secure like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Seo Dal-mi</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Start-Up”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Seo Dal-Mi from Start-Up is a young and career-driven millennial with aspiring hopes to become a CEO. Her cunning and confident personality has helped her with personal and professional relationships.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Seo Dal-mi may appear stoic and overbearing, however, she is caring and loving which she often shows to her friends and family.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Secure-bg/securefemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="secureF2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Secure like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Do Bong Soon</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Strong Woman Do Bong Soon”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Growing up in a loving and supportive environment, Do Bong Soon from Strong Woman Do Bong Soon has shown the care and support that she received growing up to her friends and especially to her lover.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Her close family values had made it easier for her to trust the people and her warm and uplifting personality made it unchallenging for them to trust her as well.</p>
                  </div>
                </div>
                <div class="items-center pb-2">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Secure-bg/securefemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>
     <div v-if="secureM1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Secure like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Choi-Taek</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Reply 1988”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Through he lost his mother at a tender age, Choi-Taek from Reply 1988 is not afraid to show his love and affection to his friends and family. Also known for being shy and timid, he was often mistaken for being evasive and indifferent; however, Choi-Taek had no problem expressing his whole-hearted feelings to Deok-Sun.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Secure-bg/securemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>
     <div v-if="secureM2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Secure like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Moon Gang-Tae</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “It's Okay Not to be Okay”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Moon Gang-Tae from It's Okay Not to be Okay openly expresses his love for his younger brother and the people around him. Him being his autistic brother's primary caregiver brought out his loving and selfless nature which he has no trouble showing.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Secure-bg/securemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>

<!-- pre-occupied -->
     <div v-if="preoccupiedF1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Preoccupied like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Yu Na-bi</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Nevertheless”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Growing up in broken family and having to deal with a cheating boyfriend gave Yu Na-bi from Nevertheless a hard time trusting other people. These occasions made her insecure and unsure about herself.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>When she finally entered a new relationship with Jae-eon she chose to continue their relationship despite it being toxic.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Preoccupied-bg/preoccupiedfemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>

    <div v-if="preoccupiedF2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-16">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Preoccupied like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Kim Bok-Joo</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Weightlifting Fairy”</p>
                </div>
                <div class="flex flex-col pl-3 pb-10 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Known for being strong and empowered, Kim Bok-Joo from Weightlifting Fairy has also a soft spot for Jae-Yi. Intimidated that Jae-Yi might not like her back because of her boyish personality. She drastically changed her entire persona hoping that he'll like her back. </p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Preoccupied-bg/preoccupiedfemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="preoccupiedM1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Preoccupied like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Nam Do-San</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Start-Up”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Nam Do-San from Start-Up has always been underdog all his life, he constantly tries to prove himself to his family and friends as a result, it affected his confidence and made it difficult for him to appreciate himself.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>This has also strained hi relationship with Dal-mi though Nam Do-San loves her whole heartedly, he entrusted almost all his emotional bagage to her.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Preoccupied-bg/preoccupiedmale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div
    >
    <div v-if="preoccupiedM2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Preoccupied like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-7.5xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Lee Young-Joon</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “What's Wrong with Secretary Kim?”</p>
                </div>
                <div class="flex flex-col pl-3 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-xl">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Initially introduced as self absorbed and arrogant, Lee Young-Joon from What's Wrong With Secretary Kim? has developed into a caring and sensitive when he meets Kim Miso.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>It becomes clear that his narcissistic demeanor is nothing but a front for protection against emotional vulnerability. when he allowed Kim Miso to enter his life he developed a fear that one day she might leave him.</p>
                  </div>
                </div>
                <div class="items-center pb-1.5">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Preoccupied-bg/preoccupiedmale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 xl:w-90% h-auto"/>
            </div>
        </div>
    </div>

<!-- Dismissive -->
    
    <div v-if="dismissiveM1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Dismissive like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Yoo Seung-ho</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “I am not a Robot”</p>
                </div>
                <div class="flex flex-col pl-3 pb-3 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Though he lives a wealthy life as a director of a financial group, he grew up sheltered and in isolation cause of his allergic reaction to humans.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>His allergy gives him life-threatening rashes that spread around his body whenever he comes into physical contact with people.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>His trust issues stem from his traumatic past, that's why he protects himself by putting on a front-bossy and demanding. That changes when he meet Aji3-a female homanoid robot designed to care for and connect with people.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Dismissive-bg/dismissivemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="dismissiveM2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Dismissive like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Kim-Shin</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Goblin”</p>
                </div>
                <div class="flex flex-col pl-3 pb-2.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Slain by the King and reincarnated as a powerful Goblin tasked with saving people's lives. He has lived on Earth for 939 years independently, carrying out his duties impersonally.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>People's countless attempts to deceit him while on Earth jaded his outlook, and it's no wonder why supernatural abilities make him appear controlling. Upon meeting his bride-to-be Eun Tak in Canada, his cold personality warms up to her. Only shows his soft quirky side for people he cares for and lets in his space.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Dismissive-bg/dismissivemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="dismissiveF1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Dismissive like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Go Moon Young</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “It's Okay Not to be Okay”</p>
                </div>
                <div class="flex flex-col pl-3 pb-2.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>A renowned children's book writer. She suffers from antisocial personality disorder. She has a rocky relationship with her parents, and her childhood led her to being self-reliant and distrustful. She is objective, aggressive and bluntly honest with what she says.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>This hurts the people around her, but after meeting Gang Tae she learns to be more compassionate and openly express love for those she cares about.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Dismissive-bg/dismissivefemale1.png" alt="" class="w-11/12 md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="dismissiveF2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-60% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-12">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Dismissive like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Jang Man-Wol</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Hotel De Luna”</p>
                </div>
                <div class="flex flex-col pl-3 pb-2.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Because of her traumatic childhood, she helped in founding a clan of bandits that rebelled against a kingdom where she fell in love with its royal guard captain-who later betrayed her. As a result, she killed many people for revenge and was cursed to run a hotel in order to atone for her sins. Her past traumas made her ruthless and self-centered.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Having no one to trust, she is highly independent to a fault and masks vulnerability with arrogance because she's afraid of hurt and betrayal again. No one ever stays long enough to work her because of her stubbornness. She is selective of the people she grows close to and trusts.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Dismissive-bg/dismissivefemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>

    <!-- Fearful  -->
    <div v-if="fearfulM1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-65% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-8">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Fearful like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Kim Jung-hwan</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Reply 1988”</p>
                </div>
                <div class="flex flex-col pl-3 pb-1 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg w-11/12">
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
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Fearful-bg/fearfulmale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="fearfulM2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-65% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-8">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Fearful like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Park Jae-eon</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Nevertheless”</p>
                </div>
                <div class="flex flex-col pl-3 pb-0.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg w-11/12">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>A Walking red flag who evades serious relationships. He makes the most out of his good looks and casually flirts with everyone.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>He experienced abandonment at a young age and it's led hom to avoid settling down. Although he is sweet and romantic towards Na-bi, he doesn't give her assurance and never leaves clear intentions to why he pursues her.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>He is attracted to Na-bi but when he gets a rival for her attention, he becomes avoidant and pushes her away.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Fearful-bg/fearfulmale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="fearfulF1" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-65% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-8">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Fearful like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Jung So-min</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “Playful Kiss”</p>
                </div>
                <div class="flex flex-col pl-3 pb-0.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg w-11/12">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>She has a huge inferiority complex given that she's not smart and pretty. Having a big crush on Seong-Jo makes her insecure of herself because he's the total opposite of her-good-looking, intelligent, and popular. But she does whatever it takes just for him to fall in love with her. She makes up for her flaws by staying true to herself.</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>But Seung-Jo always reject her and acts cold towards her, leading to believe that he is out her league, so she thinks that her love will never be reipricated.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Fearful-bg/fearfulfemale1.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
    <div v-if="fearfulF2" class="flex flex-col font-BreeSerif h-screen w-full">
        <div class="w-11/12 mx-auto items-center">
            <img src="../assets/Header.png" class="w-full h-auto">
          </div>
        <div class="flex flex-row md:flex-col-reverse md:space-x-0 md:items-center mt-16 space-x-3 px-4 h-auto sm:flex-col-reverse sm:items-center sm:space-x-0">
            <div class="flex flex-col w-65% md:w-4/5 md:mt-8 md:text-center sm:w-4/5 sm:mt-8 sm:text-center space-y-6 pl-24 md:pl-0 md:pb-8 sm:pl-0 sm:pb-8 pb-8">
                <div class="flex flex-col space-y-3 ">
                    <p class="sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">Based on your results, you are Fearful like...</p>
                    <h2 class="text-7xl sm:text-5xl xl:text-8xl 2xl:text-9xl tracking-wide text-genderChoiceCol text-stroke">Ju Kyung</h2>
                    <p class="pl-3 md:pl-0 sm:pl-0 sm:text-xl text-2xl xl:text-3xl 2xl:text-4xl">from “True Beauty”</p>
                </div>
                <div class="flex flex-col pl-3 pb-0.5 space-y-4 text-sm sm:text-xs xl:text-base 2xl:text-lg w-11/12">
                  <div class="flex flex-row space-x-2">
                    <span>⭐</span>
                    <p>Having been bullied by her classmates, she has low self-esteem and only feels worthy if people find her beautiful. Because of this, she felt pressured to groom herself and focus on her appearance since she isn't academically smart, so she could reach society's standards and her family's expectations of her. She is very insecure about herself and hides her true self from people, since she doesn't want to disappoint them.</p>
                  </div>
                </div>
                <div class="items-center">
                    <button @click="$router.push('/stickerPage')" class="text-center text-3xl xl:text-4xl 2xl:text-5xl py-4 px-12 tracking-wide border-2 border-black rounded-full bg-red-500">
                        Next
                    </button>
                </div>
            </div>
            <div class="flex w-40% md:w-full sm:w-full relative justify-center items-end">
                <img src="../assets/Fearful-bg/fearfulfemale2.png" alt="" class="w-full md:w-1/2 sm:w-1/2 h-auto"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

            gender:"",
            attachmentResult:"",
            AttachmentStyle:{
                secureF1: false,
                secureF2: false,
                secureM1: false,
                secureM2: false,
                preoccupiedF1: false,
                preoccupiedF2: false,
                preoccupiedM1: false,
                preoccupiedM2: false,
                dismissiveF1: false,
                dismissiveF2: false,
                dismissiveM1: false,
                dismissiveM2: false,
                fearfulF1: false,
                fearfulF2: false,
                fearfulM1: false,
                fearfulM2: false
            }


        }
    },
    created(){
        this.localStorageResults();
    },
    methods:{

         localStorageResults(){
             this.gender = JSON.parse(localStorage.getItem("Gender Value"));
             console.log(this.gender);
             this.attachmentResult = JSON.parse(localStorage.getItem("Attachment Result"));
             console.log(this.attachmentResult);
             this.attachmentProcess();
        },
        attachmentProcess(){
            
            if (this.gender == "male" && this.attachmentResult == "Secure"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.secureM1 = true;
                else if ( rndInt ==2)
                    this.secureM2 = true;    

                console.log(rndInt);
            }
            if (this.gender == "female" && this.attachmentResult == "Secure"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.secureF1 = true;
                else if ( rndInt ==2)
                    this.secureF2 = true;    

                console.log(rndInt);
            }
            if (this.gender == "male" && this.attachmentResult == "Preoccupied"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.preoccupiedM1 = true;
                else if ( rndInt ==2)
                    this.preoccupiedM2 = true;    

                console.log(rndInt);
            }
            if (this.gender == "female" && this.attachmentResult == "Preoccupied"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.preoccupiedF1= true;
                else if ( rndInt ==2)
                    this.preoccupiedF2= true;    

                console.log(rndInt);
            } 
            if (this.gender == "male" && this.attachmentResult == "Fearful"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.fearfulM1 = true;
                else if ( rndInt ==2)
                    this.fearfulM2 = true;    

                console.log(rndInt);
            }
            if (this.gender == "female" && this.attachmentResult == "Fearful"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.fearfulF1= true;
                else if ( rndInt ==2)
                    this.fearfulF2= true;    

                console.log(rndInt);
            }   
            if (this.gender == "male" && this.attachmentResult == "Dismissive"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.dismissiveM1 = true;
                else if ( rndInt ==2)
                    this.dismissiveM2 = true;    

                console.log(rndInt);
            }
            if (this.gender == "female" && this.attachmentResult == "Dismissive"){
                const rndInt = Math.floor(Math.random() * 2) + 1;
                if (rndInt == 1)
                    this.dismissiveF1= true;
                else if ( rndInt ==2)
                    this.dismissiveF2= true;    

                console.log(rndInt);
            }   



        }



    }


}
</script>

<style scoped>
.text-stroke{
    text-shadow: -1.2px -1.2px 0 #000, 1.2px -1.2px 0 #000, -1.2px 1.2px 0 #000, 1.2px 1.2px 0 #000;
}
</style>