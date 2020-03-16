<template>
  <div class="people">
    <h1>This is an list page</h1>
    <input v-model="newContact" />
    <button @click="addContact">Add new item</button>
    <button @click="sortContacts">Sort A-Z</button>

    <transition-group name="slide-up" tag="ul" appear>
      <li class="people__list" v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: "",
      contacts: ["Zuko", "Aang", "Katara", "Sokka"]
    };
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = "";
    },
    sortContacts() {
      this.contacts.sort();
    }
  }
};
</script>

<style lang="less">
.people__list {
  list-style-type: none;
}
</style>
