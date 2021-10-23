<template>
  <div class="flex flex-col h-screen w-full">
    <div
      id="HP"
      class="font-Barlow flex flex-row py-8 items-center justify-between px-4 relative"
    >
      <div class="lg:pl-14 md:pl-6">
        <img
          class="w-40 2xl:w-48 md:w-34 sm:w-24 h-auto bg-cover bg-no-repeat"
          src="../assets/first-page/logo.png"
          alt="KFlames Logo"
        />
      </div>
      <div
        class="flex flex-row text-gray-500 space-x-20 pr-32 tracking-wide sm:pr-0 sm:space-x-8 xl:space-x-30 xl:pr-40 md:space-x-12 md:pr-10"
      >
        <a
          href="#HP"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center group "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" w-6 xl:w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 group-hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"
            ></path>
          </svg>
          <p
            class="sm:hidden xl:text-sm 2xl:text-base text-xs group-hover:text-red-500"
          >
            Homepage
          </p>
        </a>
        <a
          href="#AS"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center mt-0.5 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 xl:w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 group-hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M11.933 13.069c0 0 7.059-5.094 6.276-10.924-0.017-0.127-0.059-0.213-0.112-0.268-0.054-0.055-0.137-0.098-0.263-0.115-5.697-0.801-10.674 6.422-10.674 6.422-4.318-0.517-4.004 0.344-5.974 5.076-0.377 0.902 0.234 1.213 0.904 0.959 0.67-0.252 2.148-0.811 2.148-0.811l2.59 2.648c0 0-0.546 1.514-0.793 2.199s0.055 1.311 0.938 0.926c4.624-2.016 5.466-1.694 4.96-6.112zM12.942 7.153c-0.598-0.613-0.598-1.604 0-2.217 0.598-0.611 1.567-0.611 2.166 0s0.598 1.603 0 2.217c-0.599 0.611-1.569 0.611-2.166 0z"
            ></path>
          </svg>
          <p
            class="sm:hidden xl:text-sm 2xl:text-base text-xs group-hover:text-red-500"
          >
            Attachment Styles
          </p>
        </a>
        <a
          @click="$router.push('/genderPage')"
          class="focus:outline-none flex flex-col items-center mt-0.5 cursor-pointer group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 xl:w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 group-hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M19.754 15.631c-0.247-0.371-1.754-2.631-1.754-2.631v-9c0-1.102-0.9-2-2-2h-12c-1.101 0-2 0.898-2 2v9c0 0-1.507 2.26-1.754 2.631-0.246 0.369-0.246 0.582-0.246 0.869v0.5c0 0.5 0.5 1 0.999 1h18.002c0.499 0 0.999-0.5 0.999-1v-0.5c0-0.287 0-0.5-0.246-0.869zM7 16l0.6-1h4.8l0.6 1h-6zM16 12h-12v-8h12v8z"
            ></path>
          </svg>
          <p
            class="sm:hidden xl:text-sm 2xl:text-base text-xs group-hover:text-red-500"
          >
            Personality Test
          </p>
        </a>
        <a
          href="#AU"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center mt-0.5 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 xl:w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 group-hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M15.989 19.129c0-2.246-2.187-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.011-0.234-0.011-0.871zM18.528 13.365c-1.135-0.457-1.605-1.002-1.605-2.066 0-0.641 0.418-0.432 0.602-1.603 0.077-0.484 0.447-0.008 0.518-1.115 0-0.441-0.202-0.551-0.202-0.551s0.103-0.656 0.143-1.159c0.050-0.627-0.364-2.247-2.268-2.247s-2.318 1.62-2.269 2.247c0.042 0.502 0.144 1.159 0.144 1.159s-0.202 0.109-0.202 0.551c0.071 1.107 0.441 0.631 0.518 1.115 0.184 1.172 0.602 0.963 0.602 1.603 0 1.064-0.438 1.562-1.809 2.152-0.069 0.029-0.12 0.068-0.183 0.102 1.64 0.712 4.226 1.941 4.838 4.447h2.645c0 0 0-1.906 0-2.318 0-1-0.273-1.834-1.472-2.317z"
            ></path>
          </svg>
          <p
            class="sm:hidden xl:text-sm 2xl:text-base text-xs group-hover:text-red-500"
          >
            About Us
          </p>
        </a>
      </div>
    </div>

    <div
      class="flex flex-row sm:flex-col px-4 mt-6 justify-center items-center"
    >
      <div
        class="flex flex-col w-45% sm:w-full space-y-3 2xl:space-y-6 lg:pl-14 md:pl-4 sm:text-center "
      >
        <div class="w-full">
          <h1
            class="font-BreeSerif text-7xl md:text-6xl sm:text-6xl xl:text-8xl 2xl:text-8.7xl"
          >
            <span class="pl-3 sm:pl-0">Fan</span><br /><span
              class="text-red-500"
              >the Flames</span
            >
          </h1>
        </div>
        <div class="font-Barlow w-9/12 sm:w-full sm:px-5 md:w-10/12">
          <p class="text-base xl:text-lg 2xl:text-xl font-semibold">
            Take the test and see what awaits you!<br />K-flames is an online
            personality quiz that measures your attachment style
          </p>
        </div>
        <div class="font-BreeSerif items-center pt-8 md:pt-4">
          <button
            @click="$router.push('/genderPage')"
            class="focus:outline-none text-center text-xl xl:text-2xl 2xl:text-3xl w-auto py-2 px-4 tracking-wide border-2 border-black rounded-full hover:bg-red-500 hover:text-white"
          >
            Take the Test
          </button>
        </div>
      </div>
      <div class="flex w-55% justify-center sm:hidden">
        <img
          src="../assets/first-page/mainpicture.png"
          alt=""
          class="w-11/12 md:w-full h-auto"
        />
      </div>
    </div>

    <div
      class="bg-2ndPage bg-no-repeat bgsizecss md:bg-center md:bg-cover sm:bg-center sm:bg-cover w-full h-auto flex flex-col pb-8 mt-6 pt-10"
    >
      <div class="flex flex-row justify-center items-center pt-20">
        <div
          id="AS"
          class="flex flex-col lg:w-4/6 md:w-5/6 space-y-6 md:space-y-4 pt-12 "
        >
          <div class="text-center">
            <h1
              class="font-BreeSerif font-semibold tracking-wider text-4xl  sm:text-3xl md:text-3.5xl xl:text-5xl 2xl:text-5.5xl"
            >
              Read about the
              <span class="text-red-500">4 Attachment Styles</span>
            </h1>
          </div>
          <div class="font-Barlow px-14 text-center">
            <p class="text-base xl:text-lg 2xl:text-xl text-gray-500">
              In order for you to understand the four different attachment
              styles you can read some of their descriptions here.
            </p>
          </div>
        </div>
        <img
          src="../assets/second-page/sparkle.png"
          alt=""
          class=" absolute right-20 md:right-3 pt-3 w-10% h-auto sm:hidden"
        />
      </div>
      <div
        class="font-BreeSerif flex flex-row sm:flex-col justify-center md:h-80 h-auto sm:h-auto sm:items-center xl:h-99 2xl:h-100 md:space-x-6 space-x-10 mt-8 sm:space-x-0 sm:space-y-10 sm:pb-16 "
      >
        <button
          @click="openModal1"
          class="bg-gray-200 shadow-lg h-80 md:h-60 w-56 sm:w-44 md:w-40 sm:h-64 rounded-80 pb-12 focus:outline-none"
        >
          <div
            class="flex flex-col space-y-3 bg-card1 shadow-lg justify-center items-center text-center h-full w-full rounded-80"
          >
            <img
              src="../assets/second-page/blueheart-5.png"
              alt=""
              class="w-60% h-auto mt-8 sm:mt-0 md:mt-0"
            />
            <p class="text-base text-white">Fearful</p>
          </div>
        </button>
        <button
          @click="openModal2"
          class="bg-gray-200 shadow-lg h-80 md:h-60 w-56 sm:w-44 md:w-40 sm:h-64 mt-16 sm:mt-0 rounded-80 pb-12 focus:outline-none"
        >
          <div
            class="flex flex-col space-y-3 bg-pink-300 shadow-lg justify-center items-center text-center h-full w-full rounded-80"
          >
            <img
              src="../assets/second-page/picture.png"
              alt=""
              class="w-60% h-auto mt-8 sm:mt-0 md:mt-0"
            />
            <p class="text-base text-white">Preoccupied</p>
          </div>
        </button>

        <button
          @click="openModal3"
          class="bg-gray-200 shadow-lg h-80 md:h-60 w-56 sm:w-44 sm:h-64 md:w-40 mt-16 sm:mt-0 rounded-80 pb-12 focus:outline-none"
        >
          <div
            class="flex flex-col space-y-3 bg-blue-800 shadow-lg justify-center items-center text-center h-full w-full rounded-80"
          >
            <img
              src="../assets/second-page/heart.png"
              alt=""
              class="w-60% h-auto mt-8 sm:mt-0 md:mt-0"
            />
            <p class="text-base text-white">Secure</p>
          </div>
        </button>

        <button
          @click="openModal4"
          class="bg-gray-200 shadow-lg h-80 md:h-60 w-56 sm:w-44 sm:h-64 md:w-40 rounded-80 pb-12 focus:outline-none"
        >
          <div
            class="flex flex-col space-y-3 bg-red-500 shadow-lg justify-center items-center text-center h-full w-full rounded-80"
          >
            <img
              src="../assets/second-page/moon.png"
              alt=""
              class="w-60% h-auto mt-8 sm:mt-0 md:mt-0"
            />
            <p class="text-base text-white">Dismissive</p>
          </div>
        </button>
      </div>
    </div>

    <div class="flex flex-col px-20 pt-28 sm:px-8 sm:pt-10 md:px-12">
      <div
        id="PT"
        class="flex flex-row sm:flex-col-reverse sm:justify-center justify-between items-center space-x-12 sm:space-x-0 pt-4"
      >
        <div
          class="flex flex-col w-1/2 sm:w-full space-y-6 sm:text-center sm:mt-10 sm:space-y-4 md:space-y-4"
        >
          <div class="font-BreeSerif">
            <h2 class="text-2xl 2xl:text-3xl font-semibold tracking-wide ">
              What is Attachment Theory?
            </h2>
          </div>
          <div class="font-Barlow text-justify">
            <p class="text-sm sm:text-xs xl:text-lg 2xl:text-xl text-gray-500">
              The Adult attachment theory developed by John Bowley is based on
              the hypothesis that the same motivational system that creates a
              tight emotional link among parents and their children also creates
              a bond between adults in emotionally intimate relationships. With
              this, Bowley defined attachment as a lasting psychological
              connectedness between human beings.
            </p>
          </div>
        </div>
        <img
          src="../assets/third-page/laptop-main.png"
          alt=""
          class="w-45% sm:w-64 h-auto"
        />
      </div>
    </div>

    <div
      class="flex flex-col mt-10 bg-4thPage bg-no-repeat bgsizecss md:bg-center md:bg-cover sm:bg-center sm:bg-cover pb-30 w-full h-auto px-10 sm:px-8 md:px-5 sm:mt-0 "
    >
      <div
        class="flex flex-row-reverse sm:flex-col-reverse pb-44 pt-20 justify-between sm:justify-center sm:items-center text-right space-x-12 md:space-x-8 sm:space-x-0"
      >
        <div
          class="flex flex-col w-1/2 sm:w-full sm:text-center space-y-6 sm:mt-10 sm:space-y-4 md:space-y-4"
        >
          <div class="font-BreeSerif">
            <h2 class="text-2xl 2xl:text-3xl font-semibold tracking-wide ">
              How have K-dramas influenced Filipinos?
            </h2>
          </div>
          <div class="font-Barlow pr-8">
            <p
              class="text-sm sm:text-xs xl:text-lg 2xl:text-xl text-gray-500 leading-loose"
            >
              The Philippines is one of the countries in Asia that were
              influenced by this culture and trends. Filipinos are known to be
              warm-hearted and welcoming to various foreign entertainment trends
            </p>
          </div>
          <div class="font-BreeSerif">
            <button
              @click="$router.push('/graphPage')"
              class="focus:outline-none text-center text-2xl 2xl:text-3xl w-auto py-1 px-6 tracking-wide border-2 border-black rounded-full mt-4"
            >
              Read more
            </button>
          </div>
        </div>
        <img
          src="../assets/third-page/hand-glass.png"
          alt=""
          class="w-1/5 md:object-contain md:mt-0 sm:w-56 h-auto mt-16 sm:mt-20"
        />
      </div>
      <div
        class="flex flex-row sm:flex-col sm:space-x-0 justify-between space-x-16 items-start px-8 md:space-x-5"
      >
        <img
          src="../assets/fourth-page/picture.png"
          alt=""
          class="flex w-27% md:w-40% sm:w-52 h-auto mx-auto"
        />
        <div
          id="AU"
          class=" flex flex-col text-right w-65% sm:text-center sm:w-full  sm:mt-10 space-y-6 sm:space-y-4 md:space-y-2"
        >
          <div class="font-BreeSerif">
            <h2 class="text-3xl 2xl:text-4xl font-semibold tracking-wide ">
              About us
            </h2>
          </div>
          <div class="font-Barlow text-right sm:text-center">
            <p
              class="text-sm sm:text-xs xl:text-lg 2xl:text-xl text-gray-500 leading-loose"
            >
              The name K-Flame was derived from the combination of the word
              K-drama and FLAMES game named after the acronym: Friends, Lovers,
              Affectionate, Marriage, Enemies. K-Flame aims to communicate to
              Filipino viewers how their love for K-dramas and characters relate
              to their attachment styles in relationships. Pursuing this project
              will help Filipino Korean drama fans reflect on why they consume
              their favorite media as a way of relieving stress and provide them
              with healthy coping habits to make informed decisions in
              distressing situations. The personalized results and a visual
              personality quiz could help them shed light on ways they need to
              change to minimize unhealthy coping mechanisms and improve their
              close relationships with others.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="font-Barlow pt-10 space-y-6 flex flex-col items-center pb-8 px-20 sm:space-y-4 sm:px-0"
    >
      <div class="text-center ">
        <p>@2021 k-flames.com</p>
      </div>
      <div
        class="flex flex-row justify-center items-center text-center w-full "
      >
        <div
          class="flex flex-row space-x-20 justify-center items-center sm:justify-start w-2/6 sm:space-x-0 md:space-x-10 sm:flex-col"
        >
          <img
            class="w-32 sm:w-24 h-auto bg-cover bg-no-repeat"
            src="../assets/first-page/logo.png"
            alt="KFlames Logo"
          />
          <p class="text-sm">contact us</p>
        </div>
        <div class="w-2/6 justify-center items-center">
          <p class="text-sm">Help us improve</p>
        </div>
        <div
          class="flex flex-row space-x-10 w-2/6 justify-center items-center sm:space-x-0 sm:flex-col"
        >
          <p class="text-sm">share us on</p>
          <div class="flex flex-row space-x-3">
            <a href="" target="_blank" class="focus:outline-none">
              <img src="../assets/socialmedia-icons/facebook.svg" alt="" />
            </a>
            <a href="" target="_blank" class="focus:outline-none">
              <img src="../assets/socialmedia-icons/instagram.svg" alt="" />
            </a>
            <a href="" target="_blank" class="focus:outline-none">
              <img src="../assets/socialmedia-icons/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="hidden items-center bottom-35% right-4 fixed"
      :class="{ showNavMenu: scrolled > 100 }"
    >
      <div
        class="flex flex-col text-gray-500 bg-white p-3 rounded-lg shadow-lg space-y-8 "
      >
        <a
          href="#HP"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z"
            ></path>
          </svg>
        </a>
        <a
          href="#AS"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M11.933 13.069c0 0 7.059-5.094 6.276-10.924-0.017-0.127-0.059-0.213-0.112-0.268-0.054-0.055-0.137-0.098-0.263-0.115-5.697-0.801-10.674 6.422-10.674 6.422-4.318-0.517-4.004 0.344-5.974 5.076-0.377 0.902 0.234 1.213 0.904 0.959 0.67-0.252 2.148-0.811 2.148-0.811l2.59 2.648c0 0-0.546 1.514-0.793 2.199s0.055 1.311 0.938 0.926c4.624-2.016 5.466-1.694 4.96-6.112zM12.942 7.153c-0.598-0.613-0.598-1.604 0-2.217 0.598-0.611 1.567-0.611 2.166 0s0.598 1.603 0 2.217c-0.599 0.611-1.569 0.611-2.166 0z"
            ></path>
          </svg>
        </a>
        <a
          href="#PT"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M19.754 15.631c-0.247-0.371-1.754-2.631-1.754-2.631v-9c0-1.102-0.9-2-2-2h-12c-1.101 0-2 0.898-2 2v9c0 0-1.507 2.26-1.754 2.631-0.246 0.369-0.246 0.582-0.246 0.869v0.5c0 0.5 0.5 1 0.999 1h18.002c0.499 0 0.999-0.5 0.999-1v-0.5c0-0.287 0-0.5-0.246-0.869zM7 16l0.6-1h4.8l0.6 1h-6zM16 12h-12v-8h12v8z"
            ></path>
          </svg>
        </a>
        <a
          href="#AU"
          v-smooth-scroll
          class="focus:outline-none flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-auto 2xl:w-8 sm:w-5 md:w-5 fill-current text-gray-500 hover:text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              d="M15.989 19.129c0-2.246-2.187-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.011-0.234-0.011-0.871zM18.528 13.365c-1.135-0.457-1.605-1.002-1.605-2.066 0-0.641 0.418-0.432 0.602-1.603 0.077-0.484 0.447-0.008 0.518-1.115 0-0.441-0.202-0.551-0.202-0.551s0.103-0.656 0.143-1.159c0.050-0.627-0.364-2.247-2.268-2.247s-2.318 1.62-2.269 2.247c0.042 0.502 0.144 1.159 0.144 1.159s-0.202 0.109-0.202 0.551c0.071 1.107 0.441 0.631 0.518 1.115 0.184 1.172 0.602 0.963 0.602 1.603 0 1.064-0.438 1.562-1.809 2.152-0.069 0.029-0.12 0.068-0.183 0.102 1.64 0.712 4.226 1.941 4.838 4.447h2.645c0 0 0-1.906 0-2.318 0-1-0.273-1.834-1.472-2.317z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div v-if="modal1" class="fixed z-10 inset-0 overflow-y-auto bg-black2">
    <div
      @click.self="openModal1"
      class="flex justify-center w-full items-center p-8 text-center"
    >
      <div class="bg-fearfulBG bg-no-repeat bgsize">
        <div class="flex flex-grow-0 font-BreeSerif flex-col ">
          <div class="mt-8 w-full items-center sm:px-2 px-12">
            <img src="../assets/Header.png" class="w-auto h-auto" />
          </div>
          <div
            class="flex flex-row md:flex-col-reverse md:space-x-0 sm:flex-col-reverse sm:space-x-0 mt-12 justify-center space-x-8"
          >
            <div
              class="text-left md:text-center sm:text-center sm:pl-0 pl-12 flex flex-col mt-8 w-40% md:w-full sm:w-full space-y-3 2xl:space-y-6"
            >
              <h1
                class=" text-6xl sm:text-5xl xl:text-6.5xl 2xl:text-7xl pb-3 pl-3"
              >
                Fearful
              </h1>
              <div
                class="flex flex-col md:text-left md:pl-0 md:w-4/5 md:mx-auto sm:text-left sm:mx-auto sm:w-11/12 space-y-4 pb-5 text-base sm:text-xs 2xl:text-lg"
              >
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    Tarot Cards that resembles this attachment are the Moon and
                    the Hermit. The Hermit represents Solitude and Yearning.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    It's hard for you to entrust your vulnerabilities to others.
                    People want to deepen their bond with you but you push them
                    away as a result of being guarded.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Moon represents Illusion and Revelation. Much like the
                    Hermit, you don't let anyone in your life easily.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    Your need for independence is a front to keep yourself from
                    getting attached because to you, it never ends well.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    It's okay to reach out for help, you are not entirely alone.
                    Don't bottle up everything on your own.
                  </p>
                </div>
              </div>
              <div class="lg:pl-4">
                <button
                  @click="openModal1"
                  class="w-32 2xl:w-40 text-2xl 2xl:text-4xl text-center border border-black rounded-full py-1"
                >
                  return
                </button>
              </div>
            </div>
            <div
              class="w-45% md:w-full sm:w-full justify-end md:justify-center sm:justify-center items-center flex"
            >
              <img
                src="../assets/Tarot-Cards/Fearful_Card.png"
                class="md:w-1/3 sm:w-1/2 xl:w-10/12 h-auto"
              />
            </div>
          </div>
          <div class="mt-20 md:px-14 sm:px-4">
            <h1 class=" text-3xl sm:text-2xl 2xl:text-4xl tracking-wide">
              Examples of Characters with Fearful Attachment Styles
            </h1>
          </div>
          <div
            class="flex flex-col mt-10 w-60% mx-auto text-left text-base sm:text-sm xl:text-lg 2xl:text-2xl space-y-3"
          >
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You might have experienced childhood trauma, abuse, or neglect.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                While you are needy with safety and security in a relationship,
                you also tend to feel that you don't deserve to be loved and are
                likely to fear being hurt again.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You have high anxiety in relationships and often have emotional
                swings of love and hate towards your partner.
              </p>
            </div>
          </div>
          <div
            class="mt-28 w-full flex flex-row sm:flex-col justify-center items-end sm:items-center space-x-10 md:space-x-4 sm:space-x-0"
          >
            <div
              class="flex flex-row items-end justify-start sm:justify-center sm:items-center "
            >
              <div class="flex flex-col space-y-8 relative left-14 sm:left-6 ">
                <p class="text-sm md:text-xs sm:text-xs xl:text-base">
                  <span class="font-semibold">Park Jae-eon</span><br />from
                  "Nevertheless"
                </p>
                <img
                  src="../assets/Fearful/Fearfulmale2.png"
                  class="w-56 sm:w-40 md:w-44 xl:w-72 2xl:w-80 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative sm:right-4 sm:mt-1.5"
              >
                <p class="text-sm md:text-xs sm:text-xs xl:text-base">
                  <span class="font-semibold">Kim Jung-hwan</span><br />from
                  “Reply 1988"
                </p>
                <img
                  src="../assets/Fearful/Fearfulmale1.png"
                  class="w-53 sm:w-36 md:w-40 xl:w-67 2xl:w-72 h-auto"
                />
              </div>
            </div>
            <div
              class="flex flex-row items-end justify-end sm:justify-center sm:items-center sm:mt-10 "
            >
              <div
                class="flex flex-col space-y-8 relative sm:left-4 items-start sm:mt-1.5"
              >
                <p class="text-sm md:text-xs sm:text-xs xl:text-base ml-6">
                  <span class="font-semibold">Jung So-min</span><br />from
                  “Playful Kiss”
                </p>
                <img
                  src="../assets/Fearful/fearfulfemale1.png"
                  class="w-56 sm:w-40 md:w-44 xl:w-72 2xl:w-80 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative right-14 sm:right-6 "
              >
                <p class="text-sm md:text-xs sm:text-xs xl:text-base">
                  <span class="font-semibold">Ju Kyung</span><br />from “True
                  Beauty”
                </p>
                <img
                  src="../assets/Fearful/fearfulfemale2.png"
                  class="w-48 sm:w-32 md:w-36 xl:w-59 2xl:w-64 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="modal2" class="fixed z-10 inset-0 overflow-y-auto bg-black2">
    <div
      @click.self="openModal2"
      class="flex justify-center w-full items-center p-8 text-center"
    >
      <div class="bg-preoccupiedBG bg-no-repeat bgsize ">
        <div class="flex flex-grow-0 font-BreeSerif flex-col ">
          <div class="mt-8 w-full items-center object-contain px-12">
            <img src="../assets/Header.png" class="w-auto h-auto" />
          </div>
          <div
            class="flex flex-row md:flex-col-reverse md:space-x-0 sm:flex-col-reverse sm:space-x-0 mt-12 justify-center space-x-8"
          >
            <div
              class="text-left md:text-center sm:text-center sm:pl-0 pl-12 flex flex-col mt-8 w-40% md:w-full sm:w-full space-y-3 2xl:space-y-6"
            >
              <h1
                class=" text-6xl sm:text-5xl xl:text-6.5xl 2xl:text-7xl pb-3 pl-3"
              >
                Preoccupied
              </h1>
              <div
                class="flex flex-col md:text-left md:pl-0 md:w-4/5 md:mx-auto sm:text-left sm:mx-auto sm:w-11/12 list-disc space-y-4 pb-5 text-base 2xl:text-lg sm:text-sm"
              >
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Hanged Man represents letting go. It's a reminder to
                    practice healthy detachments and recognize your independence
                    from other people/ Because to you, rejections and
                    abandonment make you question your worth. But people's
                    reaction are outside of your hands. And you're enough for
                    yourself.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Lovers represents open communication and lack of
                    self-love. Sometimes you love too much that you can't
                    communicate your needs and set boundaries. People aren't
                    mind readers. Don't dodge heavy topics and wait for others
                    to decide for your. Take responsibility of your own
                    happiness.
                  </p>
                </div>
              </div>
              <div class="lg:pl-4">
                <button
                  @click="openModal2"
                  class="w-32 2xl:w-40 text-2xl 2xl:text-4xl text-center border border-black rounded-full py-1"
                >
                  return
                </button>
              </div>
            </div>
            <div
              class="w-45% md:w-full sm:w-full justify-end md:justify-center sm:justify-center items-center flex"
            >
              <img
                src="../assets/Tarot-Cards/Preoccupied_Card.png"
                class="md:w-1/3 sm:w-1/2 xl:w-10/12 h-auto"
              />
            </div>
          </div>
          <div class="mt-20 md:px-14 sm:px-4">
            <h1 class=" text-3xl sm:text-2xl 2xl:text-4xl tracking-wide">
              Examples of Characters with Preoccupied Attachment Styles
            </h1>
          </div>
          <div
            class="flex flex-col mt-10 w-60% mx-auto text-left text-base sm:text-sm xl:text-lg 2xl:text-2xl space-y-3"
          >
            <div class="flex flex-row space-x-2 ">
              <span>⭐</span>
              <p>
                You have insecurities about your relationship in which you often
                seek their assurance because you worry that your partner doesn't
                love you or might leave you.
              </p>
            </div>
            <div class="flex flex-row space-x-2 ">
              <span>⭐</span>
              <p>
                You crave feelings of intimacy and closeness but you find it
                difficult to fully depend on your partner.
              </p>
            </div>
            <div class="flex flex-row space-x-2 ">
              <span>⭐</span>
              <p>
                Tarot Cards that resemble this attachment styles are the Hanged
                Man and the Lovers.
              </p>
            </div>
          </div>
          <div
            class="mt-28 w-full flex flex-row sm:flex-col justify-center items-end sm:items-center space-x-10 md:space-x-4 sm:space-x-0"
          >
            <div
              class="flex flex-row items-end justify-start sm:justify-center "
            >
              <div class="flex flex-col space-y-8 relative left-14 sm:left-6 ">
                <p
                  class="text-sm md:text-xs sm:text-xs xl:text-base sm:w-24 md:w-28  bg-green-40"
                >
                  <span class="font-semibold">Nam Do-San</span><br />from
                  “Start-Up”
                </p>
                <img
                  src="../assets/Preoccupied/preoccupiedmale1.png"
                  class="w-53 sm:w-36 md:w-40 xl:w-67 2xl:w-72 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative sm:right-4 sm:items-center md:items-center"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs xl:text-base sm:w-24 md:w-28 sm:text-center "
                >
                  <span class="font-semibold">Lee Young-Joon</span><br />from
                  “What’s Wrong With Secretary Kim?”
                </p>
                <img
                  src="../assets/Preoccupied/preoccupiedmale2.png"
                  class="w-53 sm:w-36 md:w-40 xl:w-67 2xl:w-72 h-auto"
                />
              </div>
            </div>
            <div
              class="flex flex-row items-end justify-end sm:justify-center sm:mt-10 "
            >
              <div
                class="flex flex-col space-y-8 relative sm:left-4 items-start"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs xl:text-base sm:w-24  md:w-28 ml-6"
                >
                  <span class="font-semibold">Kim Bok-Joo</span><br />from
                  “Weightlifting Fairy”
                </p>
                <img
                  src="../assets/Preoccupied/preoccupiedfemale2.png"
                  class="w-56 sm:w-40 md:w-44 xl:w-67 2xl:w-72 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative right-14 sm:right-6 sm:items-center md:items-center"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs xl:text-base sm:w-24 md:w-28"
                >
                  <span class="font-semibold">Yu Na-bi</span><br />from
                  “Nevertheless”
                </p>
                <img
                  src="../assets/Preoccupied/preoccuopiedfemale1.png"
                  class="w-48 sm:w-36 md:w-36 xl:w-59 2xl:w-64 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="modal3" class="fixed z-10 inset-0 overflow-y-auto bg-black2">
    <div
      @click.self="openModal3"
      class="flex justify-center w-full items-center p-8 text-center"
    >
      <div class="bg-secureBG bg-no-repeat bgsize ">
        <div class="flex flex-grow-0 font-BreeSerif flex-col ">
          <div class="mt-8 w-full items-center object-contain px-12">
            <img src="../assets/Header.png" class="w-auto h-auto" />
          </div>
          <div
            class="flex flex-row md:flex-col-reverse md:space-x-0 sm:flex-col-reverse sm:space-x-0 mt-8 justify-center space-x-8"
          >
            <div
              class="text-left md:text-center sm:text-center sm:pl-0 pl-12 flex flex-col mt-8 w-40% md:w-full sm:w-full space-y-3 2xl:space-y-6"
            >
              <h1
                class=" text-6xl sm:text-5xl xl:text-6.5xl 2xl:text-7xl pb-3 pl-3"
              >
                Secure
              </h1>
              <div
                class="flex flex-col md:text-left md:pl-0 md:w-4/5 md:mx-auto sm:text-left sm:mx-auto sm:w-11/12 space-y-4 pb-5 text-base sm:text-sm xl:text-lg 2xl:text-2xl"
              >
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Star represents healing but also missed opportunities.
                    You wear your heart on your sleeve and people love your
                    company even if you don't have to talk! They find you
                    comforting to be around because you're geniune with what you
                    say and listen well.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Magician represents greatness and untapped potential. It
                    shares the same qualities of a person with secure
                    attachments styles in getting to know others, because
                    meaningful bonds are important to you. You are sincere in
                    what you say and do, it's why people are drawn to you.
                  </p>
                </div>
              </div>
              <div class="lg:pl-4">
                <button
                  @click="openModal3"
                  class="w-32 2xl:w-40 text-2xl 2xl:text-4xl text-center border border-black rounded-full py-1"
                >
                  return
                </button>
              </div>
            </div>
            <div
              class="w-45% md:w-full sm:w-full justify-end md:justify-center sm:justify-center items-center flex"
            >
              <img
                src="../assets/Tarot-Cards/Secure_Card.png"
                class="md:w-1/3 sm:w-1/2 xl:w-10/12 h-auto"
              />
            </div>
          </div>
          <div class="mt-20 md:px-14 sm:px-4">
            <h1 class=" text-3xl sm:text-2xl 2xl:text-4xl tracking-wide">
              Examples of Characters with Secure Attachment Styles
            </h1>
          </div>
          <div
            class="flex flex-col mt-10 w-60% mx-auto text-left text-base sm:text-sm xl:text-lg 2xl:text-2xl space-y-3"
          >
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You tend to feel secure, stable, and more satisfied in your
                relationship.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You are comfortable expressing your genuine emotions, needs, and
                desires because you know your self-worth.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You can accept love and love, be trusted, and trust others
                easily without being afraid of intimacy.
              </p>
            </div>
          </div>
          <div
            class="mt-28 w-full flex flex-row sm:flex-col justify-center items-end sm:items-center space-x-10 md:space-x-4 sm:space-x-0"
          >
            <div class="flex flex-row items-end justify-start ">
              <div
                class="flex flex-col space-y-8 relative left-14 sm:left-6 items-center "
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28  bg-green-40"
                >
                  <span class="font-semibold">Moon Gang-Tae</span><br />from
                  “It’s Okay Not to be Okay”
                </p>
                <img
                  src="../assets/Secure/securemale2.png"
                  class="w-44 sm:w-32 md:w-40 xl:w-48 2xl:w-60 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative sm:right-4 items-end"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28 sm:text-center "
                >
                  <span class="font-semibold">Choi-Taek</span><br />from “Reply
                  1988”
                </p>
                <img
                  src="../assets/Secure/securemale1.png"
                  class="w-44 sm:w-32 md:w-40 xl:w-48 2xl:w-60 h-auto"
                />
              </div>
            </div>
            <div class="flex flex-row items-end justify-end sm:mt-10 ">
              <div
                class="flex flex-col space-y-8 relative sm:left-4 items-start "
              >
                <p class="text-sm md:text-xs sm:text-xs sm:w-24  md:w-28 ml-6">
                  <span class="font-semibold">Seo Dal-mi</span><br />from
                  “Start-Up”
                </p>
                <img
                  src="../assets/Secure/securefemale1.png"
                  class="w-40 sm:w-28 md:w-36 xl:w-44 2xl:w-56 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative right-14 sm:right-6 items-center sm:items-end"
              >
                <p class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28">
                  <span class="font-semibold">Do Bong Soon</span><br />from
                  “Strong Woman Do Bong Song”
                </p>
                <img
                  src="../assets/Secure/securefemale2.png"
                  class="w-59 sm:w-36 md:w-48 xl:w-63 2xl:w-75 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="modal4" class="fixed z-10 inset-0 overflow-y-auto bg-black2">
    <div
      @click.self="openModal4"
      class="flex justify-center w-full items-center p-8 text-center"
    >
      <div class="bg-dismissiveBG bg-no-repeat bgsize ">
        <div class="flex flex-grow-0 font-BreeSerif flex-col ">
          <div class="mt-8 w-full items-center object-contain px-12">
            <img src="../assets/Header.png" class="w-auto h-auto" />
          </div>
          <div
            class="flex flex-row md:flex-col-reverse md:space-x-0 sm:flex-col-reverse sm:space-x-0 mt-12 justify-center space-x-8"
          >
            <div
              class="text-left md:text-center sm:text-center sm:pl-0 pl-12 flex flex-col mt-8 w-40% md:w-full sm:w-full space-y-3 2xl:space-y-6"
            >
              <h1
                class=" text-6xl sm:text-5xl xl:text-6.5xl 2xl:text-7xl pb-3 pl-3"
              >
                Dismissive
              </h1>
              <div
                class="flex flex-col md:text-left md:pl-0 md:w-4/5 md:mx-auto sm:text-left sm:mx-auto sm:w-11/12 space-y-4 pb-5 text-sm sm:text-xs 2xl:text-base"
              >
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    Tarot Card that resembles this attachment style are the Fool
                    and the Devil.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Fool represents naivety and recklessness. Your love for
                    thrill and diving headfirst into relationships gives you a
                    thick skin to bounce back from heartbreaks when it doesn't
                    go well. You do "no string attached" and are quickly to
                    leave if the relationship loses its spark, or because
                    serious commitments tie you down. Live, laugh, love. But do
                    it responsible. And recognize if you're carrying emotional
                    baggage.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    The Devil represents unhealthy relationships but also
                    breaking free from it. Yes, you're free spirited. But free
                    will doesn't excuse you from the consequences of your
                    overindulging habits. But theres no sense of fulfillment in
                    your relationships, and you feel empty.
                  </p>
                </div>
                <div class="flex flex-row space-x-2">
                  <span>⭐</span>
                  <p>
                    That's why you pursue flings and self-destructive habit to
                    fill in the void. You attract codependent people into your
                    life and get yourself into toxic relationships that keep you
                    from seeking help and healing. It's not too late to break
                    free from that.
                  </p>
                </div>
              </div>
              <div class="lg:pl-4">
                <button
                  @click="openModal4"
                  class="w-32 2xl:w-40 text-2xl 2xl:text-4xl text-center border border-black rounded-full py-1"
                >
                  return
                </button>
              </div>
            </div>
            <div
              class="w-45% md:w-full sm:w-full justify-end md:justify-center sm:justify-center items-center flex"
            >
              <img
                src="../assets/Tarot-Cards/Dismissive_Card.png"
                class="md:w-1/3 sm:w-1/2 xl:w-10/12 h-auto"
              />
            </div>
          </div>
          <div class="mt-20 md:px-14 sm:px-4">
            <h1 class=" text-3xl sm:text-2xl 2xl:text-4xl tracking-wide">
              Examples of Characters with Dismissive Attachment Styles
            </h1>
          </div>
          <div
            class="flex flex-col mt-10 w-60% mx-auto text-left text-base sm:text-sm xl:text-lg 2xl:text-2xl space-y-3"
          >
            <div class="flex flex-row space-x-2 text-center">
              <span>⭐</span>
              <p>
                You are uncomfortable getting too close to others and trust them
                completely.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                You set boundaries for your partner; you are independent and
                emotionally available in your relationship.
              </p>
            </div>
            <div class="flex flex-row space-x-2">
              <span>⭐</span>
              <p>
                The more someone gets close to you, the more you distance
                yourself from them.
              </p>
            </div>
          </div>
          <div
            class="mt-28 w-full flex flex-row sm:flex-col justify-center items-end sm:items-center space-x-10 md:space-x-4 sm:space-x-0"
          >
            <div class="flex flex-row items-end justify-start ">
              <div
                class="flex flex-col space-y-8 relative left-14 sm:left-6 items-start "
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28 lg:w-32 xl:w-auto"
                >
                  <span class="font-semibold">Kim-Shin</span><br />from “Goblin”
                </p>
                <img
                  src="../assets/Dismissive/dismissivemale2.png"
                  class="w-48 sm:w-28 md:w-40 xl:w-60 2xl:w-72 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative sm:right-4 items-center"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28 lg:w-32 xl:w-auto sm:text-center "
                >
                  <span class="font-semibold">Yoo-Seung-ho</span><br />from “I
                  am Not a Robert”
                </p>
                <img
                  src="../assets/Dismissive/dismissivemale1.png"
                  class="w-52 sm:w-32 md:w-44 xl:w-70 2xl:w-80 h-auto"
                />
              </div>
            </div>
            <div class="flex flex-row items-end justify-end sm:mt-10 ">
              <div
                class="flex flex-col space-y-8 relative sm:left-2 items-start "
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28 lg:w-32 xl:w-auto"
                >
                  <span class="font-semibold">Go Moon Young</span><br />from
                  “It’s Okay Not to Be Okay”
                </p>
                <img
                  src="../assets/Dismissive/dismissivefemale1.png"
                  class="z-10 w-44 sm:w-28 md:w-36 xl:w-60 2xl:w-70 h-auto"
                />
              </div>
              <div
                class="flex flex-col space-y-8 relative right-6 sm:right-2 items-end"
              >
                <p
                  class="text-sm md:text-xs sm:text-xs sm:w-24 md:w-28 lg:w-32 xl:w-auto"
                >
                  <span class="font-semibold">Jang Man-Wol</span><br />from
                  “Hotel De Luna”
                </p>
                <img
                  src="../assets/Dismissive/dismissivefemale2.png"
                  class="w-40 sm:w-24 md:w-32 xl:w-52 2xl:w-60 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //<img alt="Vue logo" src="../assets/logo.png">
  // @ is an alias to /src

  export default {
    data() {
      return {
        scrolled: false,
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
      };
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY;
      },
      openModal1() {
        this.modal1 = !this.modal1;
      },
      openModal2() {
        this.modal2 = !this.modal2;
      },
      openModal3() {
        this.modal3 = !this.modal3;
      },
      openModal4() {
        this.modal4 = !this.modal4;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
</script>

<style scoped>
  .showNavMenu {
    display: flex;
  }
  .bgsize {
    background-size: 100% 100%;
  }
  @media screen and (min-width: 1024px) {
    .bgsizecss {
      background-size: 100% 100%;
    }
  }
</style>
