<template>
  <div>
    <div class="container">
      <span>
        <font-awesome-icon
          :icon="Icon"
          class="themeIcon"
          @click="changeTheme()"
          :class="[Icon == 'moon' ? 'darkThemeIcon' : 'lightThemeIcon']"
        >
        </font-awesome-icon>
      </span>
      <h1 :class="[Icon == 'moon' ? 'light' : 'dark']">To Do List App</h1>
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
      <div class="taskListsContainer">
        <Tasks :addTodoMethod="addTodo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { tasks, ITodo } from "../scripts/Type";
import Tasks from "../components/Tasks.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    Tasks,
  },
  data() {
    return {
      currentTodo: "",
      currentStatus: "Undo",
      Icon: "moon",
    };
  },
  methods: {
    addTodo() {
      if (this.currentTodo) {
        let newTodo: ITodo = {
          id: tasks.length + 1,
          taskName: this.currentTodo,
          taskStatus: this.currentStatus,
        };
        tasks.push(newTodo);
        this.currentTodo = "";
      }
    },
    changeTheme() {
      if (this.Icon == "moon") {
        this.Icon = "sun";
        document.body.style.backgroundColor = "#79cbca";
      } else {
        this.Icon = "moon";
        document.body.style.backgroundColor = "#232526";
      }
    },
  },
});
</script>
<style scoped>
.container h1 {
  text-align: center;
  margin: 30px;
}
.dark {
  color: #232526;
}

.darkThemeIcon {
  color: #eee;
}
.lightThemeIcon {
  color: #ffcc33;
}
.themeIcon {
  position: absolute;
  font-size: 48px;
  top: 27px;
  cursor: pointer;
  transition: all 0.5s;
}
.light {
  color: #eee;
}
.addToolsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.addToolsContainer .addButton,
.toDoInput {
  margin: 5px;
  padding: 10px 18px;
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
