<template>
  <div>
    <div class="container">
      <h1>To Do List App</h1>
      <div class="addToolsContainer">
        <input
          type="text"
          class="toDoInput"
          placeholder="Add Your New ToDo"
          v-model="currentTodo"
          @keyup.enter="addTodo()"
        />
        <button class="addButton" @click="addTodo()">Add</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      currentTodo: "",
    };
  },
  methods: {
    addTodo() {
      console.log(this.currentTodo);
    },
  },
});
</script>
<style scoped>
.container h1 {
  text-align: center;
  margin: 30px;
}
.addToolsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.addToolsContainer .addButton,
.toDoInput {
  margin: 5px;
  padding: 10px 20px;
  border-radius: 10px;
}

.toDoInput {
  width: 100%;
  text-align: center;
}
.addToolsContainer .addButton {
  background: linear-gradient(#ffb347, #ffcc33);
}

.addToolsContainer .addButton:hover {
  background: linear-gradient(#66ff47, #33ff81);
  cursor: pointer;
}
</style>
