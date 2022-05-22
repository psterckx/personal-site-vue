<template>
  <div class="flex flex-col relative overflow-hidden">
    <nav
      class="
        flex
        text-xl
        py-4
        px-12
        pd:px-24
        xl:px-36
        justify-between
        text-gray-600
      "
    >
      <router-link
        to="/"
        class="
          whitespace-nowrap
          active:text-teal-600
          sm:hover:text-teal-600 sm:hover:border-b-2 sm:hover:border-gray-500
          transition-all
          duration-100
          ease-in-out
          no-active-styles
        "
        >Peter Sterckx</router-link
      >
      <div class="hidden justify-between sm:flex sm:w-4/6 md:w-3/6 lg:w-1/3">
        <router-link
          to="/"
          class="
            hover:text-teal-600 hover:border-b-2 hover:border-gray-500
            transition-all
          "
          >About</router-link
        >
        <router-link
          to="/projects"
          class="
            hover:text-teal-600 hover:border-b-2 hover:border-gray-500
            transition-all
          "
          >Projects</router-link
        >
        <!-- <router-link
          to="/experiences"
          class="
            hover:text-teal-600 hover:border-b-2 hover:border-gray-500
            transition-all
          "
          >Experiences</router-link
        > -->
        <a
          href="./resume.pdf"
          target="_blank"
          class="
            hover:text-teal-600 hover:border-b-2 hover:border-gray-500
            transition-all
          "
          >Resume</a
        >
        <router-link
          to="/contact"
          class="
            hover:text-teal-600 hover:border-b-2 hover:border-gray-500
            transition-all
          "
          >Contact</router-link
        >
      </div>

      <button class="sm:hidden">
        <router-link to="/m">
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </router-link>
      </button>
    </nav>

    <div class="h-screen w-screen flex flex-col overflow-hidden items-center">
      <h1 class="text-2xl font-semibold text-gray-600 sm:hidden mb-4">
        {{ ["Projects"].includes($route.name) ? $route.name : "" }}
      </h1>
      <router-view
        @update-rate="updateRate"
        @toggle-animation="toggleAnimation"
      >
      </router-view>
    </div>

    <div
      class="
        hidden
        bg-red-400
        bg-yellow-400
        bg-orange-400
        bg-green-400
        bg-blue-400
        bg-purple-400
      "
    ></div>

    <div
      v-for="(ball, index) in balls"
      :key="ball.id"
      class="rounded-full absolute overflow-hidden block"
      :class="`bg-${ball.color}-400`"
      :style="{
        transform: `translate(${ball.x}px, ${ball.y}px)`,
        height: `${ball.diameter}px`,
        width: `${ball.diameter}px`,
        zIndex: -(index + 1),
      }"
    ></div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

const baseRate = 0.2;

export default {
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
      max: 30,
      balls: [],
      tick: 0,
      rate: baseRate,
      interval: null,
      animation:
        this.$route.name === "Home" || this.$route.name === "MobileMenu",
      colors: ["red", "yellow", "orange"],
    };
  },
  mounted() {
    if (this.animation) {
      this.startAnimation();
    }
  },
  watch: {
    $route({ name }) {
      this.animation =
        this.$route.name === "Home" || this.$route.name === "MobileMenu";
    },
    animation(newValue, oldValue) {
      if (newValue && !oldValue) {
        this.startAnimation();
      } else if (!newValue && oldValue) {
        this.stopAnimation();
      }
    },
  },
  computed: {
    c() {
      return this.balls.map((ball) => {
        return Math.sqrt(Math.pow(ball.xt, 2) + Math.pow(ball.yt, 2));
      });
    },
  },
  methods: {
    newBall(id) {
      const t = Math.random();
      const diameter = t * 40 + 20;
      return {
        id,
        x: Math.random() * (this.width - diameter - 10) + 10,
        y: this.height,
        xt: Math.random() * 100 - 100 / 2,
        yt: -(1 - t) * 10,
        s: Math.random() * (1 - t) * 0.1,
        diameter,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
      };
    },
    updateRate(rateRate) {
      this.rate = this.rate + rateRate;
    },
    toggleAnimation(value) {
      if (value) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    },
    startAnimation() {
      this.rate = baseRate;
      this.balls = [...[this.newBall(this.balls.length)]];
      this.interval = setInterval(() => {
        this.tick++;
        if (this.tick > 1000 * (1 / this.rate)) {
          this.tick = 0;
          if (this.balls.length < this.max) {
            this.balls = [...[this.newBall(this.balls.length)], ...this.balls];
          }
        }

        this.balls = [
          ...this.balls
            .filter((ball) => {
              return !(ball.y < -ball.diameter * 2);
            })
            .map((ball, index) => {
              if (ball.x > this.width - ball.diameter) {
                // left
                ball.xt = -ball.xt;
              } else if (ball.x < 0) {
                // right
                ball.xt = -ball.xt;
              }

              const k = 1;
              ball.x = ball.x + ((k * ball.xt) / this.c[index]) * ball.s;
              ball.y = ball.y + ((k * ball.yt) / this.c[index]) * ball.s - 0.05;

              return ball;
            }),
        ];
      }, 2);
    },
    stopAnimation() {
      this.rate = baseRate;
      this.balls = [];
      clearInterval(this.interval);
    },
  },
};
</script>

<style scss>
a.router-link-active:not(.no-active-styles) {
  color: #0d9488; /* teal-600 */
  border-bottom: 2px solid #6b7280; /* gray-500 */
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
} */
</style>