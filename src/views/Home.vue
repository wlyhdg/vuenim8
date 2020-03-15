<template>
  <div class="home">
    <button @click="openModal">Open</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    openModal() {
      alert("bonjour");
    }
  }
};
</script>
