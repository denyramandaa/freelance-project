<template>
  <div>
    <div class="w-full bg-gray-500 text-white flex items-center justify-center mb-8 h-48">
      {{$route.params.slug ? $route.params.slug : 'MACHINARY'}} {{product.title}}
    </div>
    <div class="w-full max-w-6xl mx-auto mb-8 px-6 lg:px-0">
      {{product.description}}
    </div>

    <div class="w-full max-w-6xl mx-auto flex items-center justify-end mb-8 px-6 lg:px-0">
      Sort by: 
      <div class="ml-2 bg-gray-500 w-12 rounded h-6" />
    </div>

    <div class="w-full max-w-6xl mx-auto grid grid-cols-2 gap-4 px-6 lg:px-0 lg:grid-cols-4 lg:gap-8 mb-8">
      <div class="border rounded text-grey-500 bg-blue-500 justify-center h-32 items-center flex" v-for="i in 20" :key="i">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPageProduct',
  data: () => ({
    product: {
      title: 'Judulnya mang',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
    }
  })
}
</script>
