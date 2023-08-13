<template>
  <div>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    
    <div class="flex items-center mt-4 text-3xl font-bold tracking-tight  sm:text-5xl space-x-4">
      <h1 class="text-indigo-500">404</h1>
      <h1 class="text-gray-900">Page not found</h1>
    </div>
    <el-empty description="Sorry, we couldn’t find the page you’re looking for." :image-size="200">
    </el-empty>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a :href="$withBase('/')" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
      <a href="https://github.com/open17/vuepress-theme-qbook/issues" target="_blank" class="text-sm font-semibold text-gray-900">Report it<span aria-hidden="true">&rarr;</span></a>
    </div>
    
  </div>
</main>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>