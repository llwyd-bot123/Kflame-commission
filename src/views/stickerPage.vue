<template>
    <div class="flex justify-center">
        <button @click="$router.push('/')" class="focus:outline-none mt-8">
            <img
          class="w-40 2xl:w-48 md:w-34 sm:w-24 h-auto bg-cover bg-no-repeat"
          src="../assets/first-page/logo.png"
          alt="KFlames Logo"
        >
        </button>
    </div>
        <div class="relative flex mt-8 items-center md:text-center sm:text-center pb-8 lg:flex-row md:flex-col-reverse sm:flex-col-reverse ">
            <div class="z-10  flex flex-col  w-60% space-y-6 sm:space-y-3 md:space-y-4 lg:pl-14 md:pt-8 sm:pt-4">
                <h1 class="font-BreeSerif text-7.5xl md:text-6xl sm:text-4xl xl:text-8xl 2xl:text-8.5xl">
                    Thanks for<br>taking our test!
                </h1>
                <div class="font-Barlow">
                    <p class="text-3xl xl:text-4xl 2xl:text-5xl sm:text-xl md:text-2xl">
                        You can download our stickers here.
                    </p>
                </div>
                <div class=" font-BreeSerif items-center pt-4 md:pt-0">
                    <a href="https://drive.google.com/drive/folders/1ZJFqTtS9AZKFOkdOv3-xvW7IVkH-qW9c?fbclid=IwAR3MNX8HeIZynxW8txI7oYkCPD55jpUOwrW8FMS36pU01dsGpOFw4gJNbwI" target="_blank"
                        class="cursor-pointer focus:outline-none text-center text-3xl xl:text-4xl 2xl:text-5xl sm:text-xl md:text-2xl w-auto py-3 px-10 tracking-wide border-4 border-black rounded-full hover:bg-red-500 hover:text-white">
                            Download
                    </a>
                </div>
                <div class="flex flex-col font-Barlow md:items-center sm:items-center space-y-3 xl:pt-12 md:pt-0 ">
                    <p class="text-lg xl:text-xl sm:text-base md:text-base 2xl:text-2xl">Don't forget to share us on:</p>
                    <div class="flex flex-row space-x-2 ">
                        <a href="" target="_blank" class="focus:outline-none">
                            <img src="../assets/socialmedia-icons/facebook.svg" class="w-7 xl:w-8 2xl:w-10 h-auto">
                        </a>
                        <a href="" target="_blank" class="focus:outline-none">
                            <img src="../assets/socialmedia-icons/instagram.svg" class="w-7 xl:w-8 2xl:w-10 h-auto">
                        </a>
                        <a href="" target="_blank" class="focus:outline-none">
                            <img src="../assets/socialmedia-icons/twitter.svg" class="w-7 xl:w-8 2xl:w-10 h-auto">
                        </a>
                    </div>
                </div>
            </div>
            <div class="z-10  flex w-40% md:w-full sm:w-full justify-center lg:pb-5">
                <img src="../assets/Finalpage_illustration.png" alt="" class="w-11/12 md:w-2/5 sm:w-1/2 h-auto"/>
            </div>
            <div class="absolute bottom-0 w-full h-auto">
            <img src="../assets/Backrgounds/Stickerpage_bg.png" alt="w-full h-auto">
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
</style>