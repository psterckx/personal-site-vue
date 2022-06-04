<template>
  <div class="overflow-scroll p-container">
    <div
      class="
        w-3/4
        sm:w-5/6
        lg:w-4/6
        2xl:w-1/2
        xl:px-20
        mx-auto
        spacing-y-10
        p-2
        pt-4
        sm:pt-16
        pb-24
        sm:pb-0
      "
    >
      <div v-for="project in projects" :key="project.name">
        <a
          class="
            flex flex-col
            sm:flex-row
            justify-between
            items-center
            hover:cursor-pointer hover:bg-gray-200
            bg-gray-100
            transition-all
            rounded-xl
            mb-12
            shadow-lg
            overflow-hidden
            group
            hover:scale-[1.01]
            md:h-[14rem]
            lg:h-[14rem]
            xl:h-[15rem]
            2xl:h-[16rem]
          "
          :href="project.link"
          target="_blank"
        >
          <img
            :src="project.image"
            class="sm:mb-0 sm:-ml-12 sm:w-1/2 transition-all scale-105"
          />
          <div class="flex flex-col py-6 px-6 sm:py-0 sm:px-6 md:px-10 prose">
            <h3 class="md:text-2xl mb-2 sm:mb-1 sm:text-xl">
              {{ project.name }}
            </h3>
            <p class="sm:text-sm md:text-md">
              {{ project.description }}
            </p>
            <p class="sm:text-sm md:text-md" v-if="project.photo_creds" v-html="project.photo_creds"></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import thermostat_img from "../assets/thermostat_controller.jpg";
import starship_img from "../assets/starship_with_sns.jpg";
import tictactoe_img from "../assets/tictactoe.jpg";

export default {
  data() {
    return {
      projects: [
        {
          name: "Thermostat Controller",
          image: thermostat_img,

          link: "https://gist.github.com/psterckx/7c476532f7399b15b974ee3dff919d3f/",
          description:
            "The thermostat in my apartment has a simple control interface with two buttons to increase and decrease the temperature. No fancy scheduling features or IoT capabilities. So I decided to enhance it.",
        },
        {
          name: "Starship Notification Service",
          image: starship_img,
          link: "https://github.com/psterckx/starship-notification-system",
          description:
            "A Starship notification system built using AWS Lambda, SNS, and S3 and deployed with the Serverless Application Framework.",
        },
        {
          name: "Online Multiplayer Tic Tac Toe Game",
          image: tictactoe_img,
          link: "https://gist.github.com/psterckx/b40040d5abe9e218ebd6849527389968",
          description:
            "An online multiplayer tic tac toe game built using websockets, serverless AWS services, and Vue.",
          photo_creds: "Photo by <a href=\"https://unsplash.com/@treatzone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Matthew Davis</a> on <a href=\"https://unsplash.com/s/photos/tic-tac-toe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>",
        },
      ],
    };
  },
};
</script>

<style scoped>
.p-container {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.p-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>