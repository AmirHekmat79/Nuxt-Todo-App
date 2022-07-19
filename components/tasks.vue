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
<style scoped></style>
