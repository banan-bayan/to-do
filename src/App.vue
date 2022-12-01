<template>
  <div class="app">
    <MyHead @getSortedTasks="optionTasks" />
    <TaskList 
      :tasks="filteredTask"
      :selectedFilter="selectedFilter"
      @remove="removeTask"
      @completed="completedTask"
      @delete="deleteTask"
    />
    <TaskForm  
      :selectedFilter="selectedFilter" 
      @create="createTask"
    />
  </div>
</template>

<script>
import MyHead from "@/components/UI/MyHead.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import {STATUSES} from "@/Constants.js";
export default {
  components: {MyHead, TaskList, TaskForm,},
  data() {
    return {
      tasks: [
        {id: 1, title: 'Build a modern To do app', status: STATUSES.inProgress},
        {id: 2, title: 'Workout for 30 minutes at the gym', status: STATUSES.inProgress},
        {id: 3, title: 'Buy groceries(milk, vegetables, fruits, fish)', status: STATUSES.inProgress},
        {id: 4, title: 'Clean the house and backyard', status: STATUSES.inProgress},
        {id: 5, title: 'Take the car to the autoshop for an oil change', status: STATUSES.inProgress},
      ],
      selectedFilter: STATUSES.inProgress,
    }
  },
  computed: {
    filteredTask() { 
     return this.tasks.filter(t => t.status === this.selectedFilter);
    }
  },
  methods: { 
    optionTasks(param) { 
      this.selectedFilter = param;
    },
    deleteTask(removedTask) {
     for (let key in removedTask) {
       delete removedTask[key]
      }
    },
    createTask(task) {
      this.tasks.push(task);
    },
    completedTask(task) {
      this.tasks = this.tasks.map(t => t.id === task.id ? {...task, status: STATUSES.completed} : t);  
    },
    removeTask(task) {
      this.tasks = this.tasks.map(t =>  t.id === task.id  ? { ...task, status: STATUSES.removed} : t);
    }, 
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
}
.app {
  max-width: 2500px;
  height: 867px;
  z-index: 1;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
</style>
