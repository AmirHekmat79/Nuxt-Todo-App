<template>
  <div>
    <div class="container">
      <span>
        <font-awesome-icon icon="moon"> </font-awesome-icon>
      </span>
      <h1>To Do List App</h1>
      <div class="addToolsContainer">
        <input type="text" class="toDoInput" placeholder="Add Your New ToDo" />
        <button class="addButton">Add</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
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
