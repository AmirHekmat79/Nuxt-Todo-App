<template>
  <div>
    <ul class="toDosContainer">
      <li class="toDoItem" v-for="(task, i) in tasks" :key="i">
        <span class="taskName">{{ task.taskName }}</span>
        <span class="toDoButtons"
          ><button class="UndoBtn">Undo</button
          ><button class="DeleteBtn">Delete</button></span
        >
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
.toDosContainer .toDoItem {
  text-align: center;
  background-color: #fdbb2d;
  margin: auto;
  list-style-type: none;
  border-radius: 10px;
  padding: 20px 40px;
  width: 50%;
  margin-top: 30px;
  cursor: pointer;
}
.toDoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toDoButtons .UndoBtn,
.DeleteBtn {
  margin: 5px;
  padding: 10px 15px;
  border-radius: 10px;
}

.toDoButtons .DeleteBtn {
  background-color: #c02106;
}

.toDoButtons .DeleteBtn:hover {
  background-color: tomato;
  cursor: pointer;
}

.toDoButtons .UndoBtn {
  background-color: #5b96bd;
}

.toDoButtons .UndoBtn:hover {
  background-color: #acd1ea;
  cursor: pointer;
}

@media (max-width: 1287px) {
  .toDosContainer .toDoItem {
    width: 100%;
    margin: auto;
  }
}
@media (min-width: 1287px) {
  .toDoButtons {
    position: absolute;
    right: 400px;
  }
}
</style>
