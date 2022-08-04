<template>
  <div class="h-96">
    index default
    <div class="flex flex-col">
      <nuxt-link class="text-blue-700 hover:text-blue-800" to="/products">to Page Product</nuxt-link>
      <nuxt-link class="text-blue-700 hover:text-blue-800" to="/products/ProductA">to page Product slug ProductA</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
