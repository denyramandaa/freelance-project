<template>
  <div>
    <!-- <section class="jumbotron bg-white w-full">
      <div class="swiper-container swiper--jumbotron absolute left-0 top-0 h-full w-full">
        <div class="swiper-wrapper">
          <div v-for="i in jumbotronImage" class="swiper-slide ratio-16-9 w-full bg-cover bg-center" :style="{ 'background-image': 'url(assets/img/' + i + ')' }"></div>
        </div>
      </div>
      <div class="ratio-16-9 max-w-6xl mx-auto relative z-5 flex justify-center items-center">
        <div class="max-w-xl px-8 text-center">
          <h1 class="text-5xl lg:text-6xl font-lora text-white lg:leading-tight txt-shadow font-bold">Quis scelerisque.</h1>
          <p class="text-base lg:text-lg text-white mt-4 lg:mt-8 txt-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
        </div>
        <div class="absolute jumbotron--prev cursor-pointer hidden lg:block"></div>
        <div class="absolute jumbotron--next cursor-pointer hidden lg:block"></div>
        <div class="absolute button-wrapper flex justify-center w-full md:justify-start px-8 lg:px-0 lg:hidden">
          <div class="jumbotron--prev mr-6 cursor-pointer"></div>
          <div class="jumbotron--next cursor-pointer"></div>
        </div>
        <div class="absolute pagination-wrapper w-full flex justify-center">
            <div class="jumbotron--pagination"></div>
        </div>
      </div>
    </section> -->
    <div class="mx-auto">
      <div class="w-full ratio-16-9"></div>
    </div>
    <section class="w-full max-w-6xl mx-auto py-24">
      <div class="lg:flex lg:-mx-4 items-center">
          <div class="lg:w-1/2 px-6 mb-12 lg:mb-0 lg:px-4">
            <h3 class="font-bold font-lora txt-grey text-4xl">Coorporate</h3>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
            <a href="#" class="rounded uppercase px-8 py-1 mt-6 lg:mt-8 inline-block text-white font-bold bg-yellow-gold">LEARN MORE</a>
          </div>
          <div class="lg:w-1/2 px-6 mb-12 lg:mb-0 lg:px-4">
            <img class="w-full" src="https://mwd-team-project-4.netlify.app/assets/img/04.jpg" alt="product">
          </div>
        </div>
    </section>
    <section class="w-full py-24" id="our-product">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="font-bold font-lora txt-grey text-4xl lg:text-5xl pb-6 with-border relative">Our Product</h3>
          <p class="mt-6 txt-grey px-6 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
        </div>
        <div class="lg:flex mt-8 lg:mt-12 lg:-mx-4 flex-wrap">
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/04.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/05.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/14.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/06.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/07.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/08.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/04.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-1/2 lg:w-1/4 px-6 mb-12 lg:mb-8 lg:px-4">
            <img src="https://mwd-team-project-4.netlify.app/assets/img/05.jpg" alt="product">
            <h4 class="text-2xl mt-4 font-lora font-bold txt-grey"><a href="#">Lorem Ipsum</a></h4>
            <p class="mt-4 txt-grey mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-red-me  w-full py-24" id="why-us">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="font-bold font-lora text-white text-4xl lg:text-5xl pb-6 with-border relative">Why MAGROF?</h3>
        </div>
        <div class="flex flex-wrap mt-8 lg:mt-16 lg:-mx-4">
          <div class="w-2/4 lg:w-1/4 text-center px-4 mb-12">
            <img class="w-2/3 lg:w-1/3 mx-auto" src="https://mwd-team-project-4.netlify.app/assets/icon/01.png" alt="icon">
            <h3 class="font-lora font-bold text-white mt-4 lg:mt-12 text-xl">Lorem Ipsum</h3>
            <p class="text-white mt-2 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-2/4 lg:w-1/4 text-center px-4 mb-12">
            <img class="w-2/3 lg:w-1/3 mx-auto" src="https://mwd-team-project-4.netlify.app/assets/icon/02.png" alt="icon">
            <h3 class="font-lora font-bold text-white mt-4 lg:mt-12 text-xl">Lorem Ipsum</h3>
            <p class="text-white mt-2 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-2/4 lg:w-1/4 text-center px-4 mb-12">
            <img class="w-2/3 lg:w-1/3 mx-auto" src="https://mwd-team-project-4.netlify.app/assets/icon/03.png" alt="icon">
            <h3 class="font-lora font-bold text-white mt-4 lg:mt-12 text-xl">Lorem Ipsum</h3>
            <p class="text-white mt-2 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
          <div class="w-2/4 lg:w-1/4 text-center px-4 mb-12">
            <img class="w-2/3 lg:w-1/3 mx-auto" src="https://mwd-team-project-4.netlify.app/assets/icon/04.png" alt="icon">
            <h3 class="font-lora font-bold text-white mt-4 lg:mt-12 text-xl">Lorem Ipsum</h3>
            <p class="text-white mt-2 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque at neque duis orci morbi vestibulum.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.ratio-16-9 {
  padding-bottom: 56.25%;
  background-color: #D9D9D9;
}
.bg-yellow-gold {
    background-color: #DBBF80;
}
.bg-red-me {
    background-color: #DC1919;
}
</style>
<script>
export default {
  name: 'IndexPage',
  data: () => ({
    jumbotronImage: ['https://mwd-team-project-4.netlify.app/assets/img/01.jpg','https://mwd-team-project-4.netlify.app/assets/img/cov1.jpg','https://mwd-team-project-4.netlify.app/assets/img/cov2.jpg','https://mwd-team-project-4.netlify.app/assets/img/cov3.jpg']
  })
}
</script>
