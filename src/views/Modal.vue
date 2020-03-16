<template>
  <div class="home">
    <h1>This is a modal page</h1>
    <button @click="toggleModal">Open</button>
    <transition name="fade">
      <div v-if="modalRequested" class="home__modal">
        <div class="home__modal--cancel" @click="toggleModal">x</div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      modalRequested: false
    };
  },
  components: {},
  methods: {
    toggleModal() {
      this.modalRequested = !this.modalRequested;
    }
  }
};
</script>

<style lang="less" scoped>
.home__modal {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
}

.home__modal--cancel {
  cursor: pointer;
  color: gainsboro;
  position: absolute;
  right: 30px;
  top: 10px;
  font-size: 2rem;
}
</style>
