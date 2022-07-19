<template>
  <div>
    <ul class="toDosContainer">
      <li class="toDoItem" v-for="(task, i) in tasks" :key="i">
        {{ task.taskName }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { tasks, ITodo } from "../scripts/Type";

export default Vue.extend({
  name: "Tasks",
  data() {
    return {
      tasks,
    };
  },
});
</script>
<style scoped>
.toDosContainer {
  text-align: center;
}
.toDosContainer .toDoItem {
  background-color: #fdbb2d;
  margin: auto;
  list-style-type: none;
  border-radius: 10px;
  padding: 24px 60px;
  width: 50%;
  margin-top: 30px;
  cursor: pointer;
}
</style>
