<template>
<div>
  <header class="header fixed top-0 left-0 z-40 w-full px-6 lg:px-0 border-red-me border-b-4" :class="{ 'active' : scrolled }">
    <div class="max-w-6xl mx-auto flex justify-between py-6">
      <div class="logo"><nuxt-link to="/"><img src="https://raw.githubusercontent.com/denyramandaa/noname-froze-food/3e3ddc3ee9151de948fc49fced01cf60179be64d/assets/icon/logo.png" alt="logo"></nuxt-link></div>
      <div class="justify-center items-center hidden lg:flex">
        <div v-for="i in menus" :key="i.name" class="px-4">
          <div class="capitalize font-bold txt-grey cursor-pointer" @click="gointTo(i.url)">{{ i.name }}</div>
        </div>
      </div>
      <div class="burger-menu block lg:hidden" @click="openMenu = true">
        <img src="https://raw.githubusercontent.com/denyramandaa/noname-froze-food/3e3ddc3ee9151de948fc49fced01cf60179be64d/assets/icon/burger.png" alt="burger-icon">
      </div>
    </div>
  </header>
  <section class="overlay-side min-h-screen fixed top-0 left-0 z-50 w-full" v-if="openMenu" @click="openMenu = false"></section>
  <section class="side-menu fixed right-0 top-0 z-50 block lg:hidden w-4/6 bg-white" :class="{ 'show' : openMenu }">
    <div class="relative min-h-screen flex items-center mx-8">
      <div class="close-menu absolute right-0" @click="openMenu = false">
        <img src="https://raw.githubusercontent.com/denyramandaa/noname-froze-food/3e3ddc3ee9151de948fc49fced01cf60179be64d/assets/icon/close.png" alt="close-icon">
      </div>
      <div class="w-full">
          <div class="logo mb-6"><img src="https://raw.githubusercontent.com/denyramandaa/noname-froze-food/3e3ddc3ee9151de948fc49fced01cf60179be64d/assets/icon/logo.png" alt="logo"></div>
          <div v-for="(i, key) in menus" :key="i.name"  class="text-center border-yellow-fry" :class="{ 'border-b' : key != menus.length-1 }">
            <div class="capitalize txt-grey block w-full py-6" @click="gointTo(i.url)">{{ i.name }}</div>
          </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data: () => ({
    menus: [{
      name: 'home',
      url: 'home'
    },{
      name: 'coorporate',
      url: 'coorporate'
    },{
      name: 'product',
      url: 'product'
    },{
      name: 'help',
      url: 'help'
    }],
    openMenu: false,
    scrolled: false
  })
}
</script>

<style scoped>
.burger-menu {
  width: 28px;
}
.close-menu {
  top: 42px;
}
.side-menu {
  transform: translateX(100%);
  transition: transform .4s cubic-bezier(.46,.54,.17,1),-webkit-transform .4s cubic-bezier(.46,.54,.17,1);
}
.side-menu.show {
  transform: translateX(0%);
}
.sub-title {
  position: relative;
}
.sub-title::before, .sub-title::after {
  content: '';
  position: absolute;
  top: 50%;
  height: 2px;
  width: 60px;
  background-color: #CCCCCC;
}
.sub-title::before {
  transform: translate(-50%, -50%);
  left: -50%;
}
.sub-title::after {
  right: -50%;
  transform: translate(50%, -50%);
}
.overlay-side::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}
.overlay-yellow::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(179 154 98 / 75%);
  z-index: 1;
}
.bg-side {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}
header {
  background-color: #fff;
}
.border-red-me {
  border-color: #DC1919;
}
header.active .thu{
  margin-top: 1rem;
}
</style>