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
