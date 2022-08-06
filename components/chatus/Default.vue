<template>
  <div class="chatus fixed z-40">
    <a href="#" class="flex items-center">
      <p class="font-bold text-white text-lg mr-4 hidden lg:block">Chat Us</p>
      <img src="https://mwd-team-project-2.netlify.app/assets/icon/wa.png" alt="whatsup">
    </a>
  </div>
</template>

<script>
export default {
  name: 'DefaultChatus',
}
</script>

<style>
.chatus {
    bottom: 0;
    right: 8px;
    background-color: #33BB47;
    border-radius: 1em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 8px 20px 8px;
}

@media screen and (min-width: 1025px) {
  .chatus {
      right: 16px;
      padding: 8px 32px 8px;
  }
}
</style>