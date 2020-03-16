<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/drawer">Drawer</router-link> |
      <router-link to="/cards">Cards</router-link> |
      <router-link to="/simple">Simple</router-link> |
      <router-link to="/stagger">Stagger</router-link> |
      <router-link to="/state">State</router-link> |
      <router-link to="/timeline">Timeline</router-link> |
      <router-link to="/master">Master</router-link>
    </div>
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: orangered;
    }
  }
}

/* Transitions */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}

.slide-up-move {
  // "move" class specifies what happens to item in transition-group
  transition: transform 0.8s ease-in;
}

button {
  color: white;
  background: linear-gradient(#d85b2f, #e88d5d);
  padding: 1em;
  margin: auto 0.2em;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(26, 8, 1, 0.2);
}
</style>
