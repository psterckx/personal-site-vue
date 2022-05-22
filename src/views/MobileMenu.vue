<template>
  <div
    class="flex flex-col items-center text-4xl w-full mobile-container mt-0 space-y-4"
  >
    <router-link
      to="/"
      class="
        flex
        items-center
        justify-center
        bg-gray-400/75
        w-5/6 
        rounded-full
        text-center text-gray-700
        grow
        transition-all
      "
      >About</router-link
    >
    <router-link
      to="/projects"
      class="
        flex
        items-center
        justify-center
        bg-gray-400/75
        w-5/6 
        rounded-full
        text-center text-gray-700
        grow
      "
      >Projects</router-link
    >
    <a
          href="./resume.pdf"
          target="_blank"
          class="
        flex
        items-center
        justify-center
        bg-gray-400/75
        w-5/6 
        rounded-full
        text-center text-gray-700
        grow
      "
          >Resume</a
        >
    <router-link
      to="/contact"
      class="
        flex
        items-center
        justify-center
        bg-gray-400/75
        w-5/6 
        rounded-full
        text-center text-gray-700
        grow
      "
      >Contact</router-link
    >
  </div>
</template>

<style scoped>
.mobile-container {
  height: calc(100% - 120px);
}
</style>