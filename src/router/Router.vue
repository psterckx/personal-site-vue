<template></template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      projects: {
        thermostat:
          "https://gist.github.com/psterckx/7c476532f7399b15b974ee3dff919d3f/",
        sns: "https://github.com/psterckx/starship-notification-system",
        tictactoe:
          "https://gist.github.com/psterckx/b40040d5abe9e218ebd6849527389968",
      },
    };
  },
  beforeMount() {
    if (this.projects[this.name]) {
      window.location.href = this.projects[this.name];
    } else {
      this.$router.push({ name: "Projects" });
    }
  },
};
</script>
