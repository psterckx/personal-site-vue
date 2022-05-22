<template>
  <!-- <div class="flex">
    <div class="visible sm:invisible">Mobile</div>
    <div class="invisible sm:visible md:invisible">Small</div>
    <div class="invisible md:visible lg:invisible">Medium</div>
    <div class="invisible lg:visible xl:invisible">Large</div>
    <div class="invisible xl:visible 2xl:invisible">Extra Large</div>
    <div class="invisible 2xl:visible">Extra Extra Large</div>
  </div> -->

  <div
    class="
      w-5/6
      sm:w-4/6
      md:w-1/2
      lg:w-2/3
      flex
      self-center
      justify-center
      mt-16
      sm:mt-16
      md:mt-20
      lg:mt-20
      prose
    "
  >
    <img
      class="rounded-lg shadow-xl w-3/6 hidden lg:block"
      src="../assets/profile_1.jpeg"
      alt=""
    />
    <div class="self-center lg:-mt-24 lg:pl-10 lg:mb-10">
      <h2 class="text-4xl mb-4 mt-0 lg:mt-24">Hi, I'm Peter!</h2>
      <div>
        <p>
          I'm a software engineer currently working at Capital One.
          <br /><br />
          My interets include spaceflight, robotics, AWS / serverless, web development, and silly web animations.
        </p>
      </div>
      <div class="flex w-full mt-10 toggle">
        <label for="toggle" class="flex items-center cursor-pointer">
          <div class="relative">
            <input
              type="checkbox"
              id="toggle"
              class="sr-only"
              :checked="animation"
              @click="toggleAnimation"
            />
            <div class="oval block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              class="
                dot
                absolute
                left-1
                top-1
                bg-white
                w-6
                h-6
                rounded-full
                transition
              "
            ></div>
          </div>
          <div class="ml-3 text-gray-700 font-medium">
            Animations {{ animation ? "on" : "off" }}.
          </div>
      </label>
      </div>
      <button
        ontouchstart=""
        class="
          mt-10
          rounded-lg
          p-2
          text-lg
          active:bg-teal-500 active:text-white
          sm:hover:bg-teal-500 sm:hover:text-white
          transition-color
          duration-100
          ease-in
          bg-gray-200
        "
        @click="updateRate"
      >
      <!-- hover:outline-teal-500 hover:bg-teal-500 hover:text-white -->
        More balls please!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["updateRate", "toggleAnimation"],
  data() {
    return {
      rateRate: 0.5,
      animation: true,
    };
  },
  methods: {
    updateRate() {
      this.$emit("updateRate", this.rateRate);
    },
    toggleAnimation() {
      this.animation = !this.animation;
      this.$emit("toggleAnimation", this.animation);
    },
  },
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
}
input:checked ~ .oval {
  background-color: rgb(20 184 166);
}
</style>