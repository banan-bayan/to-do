<template>
  <div class="app">
    <MyHead
     @getSortedTasks="optionTasks"
    />
    <TaskList 
      :tasks="filteredTask"
      @remove="removeTask"
      @completed="completedTask"
    />
    <TaskForm @create="createTask"/>
  </div>
</template>

<script>
import MyHead from "@/components/UI/MyHead.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
export default {
  components: {MyHead, TaskList, TaskForm,},
  data() {
    return {
      tasks: [
        {id: 1, title: 'Build a modern To do app', status: 'inProgress'},
        {id: 2, title: 'Workout for 30 miites at the gym', status: 'inProgress'},
        {id: 3, title: 'Buy groceries(milk, vegetables, fruits, fish)', status: 'inProgress'},
        {id: 4, title: 'Clean the house and backyard', status: 'inProgress'},
        {id: 5, title: 'Take the car to the autoshop for an oil change', status: 'inProgress'},
      ],
      selectedFilter: 'inProgress',
    }
  }, 
  methods: {  
    optionTasks(param) { 
      this.selectedFilter = param;
    },
    createTask(task) {
      this.tasks.push(task);
    },
    completedTask(task) {
      this.tasks = this.tasks.map(t => t.id === task.id ? {...task, status: 'completed'} : t);  
    },
    removeTask(task) {
      this.tasks = this.tasks.map(t =>  t.id === task.id  ? { ...task, status: 'removed'} : t);
    }, 
  },
  computed: {
    filteredTask() {
      return this.tasks.filter(t => t.status === this.selectedFilter);
    }
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
  margin: 15px 5px 0 5px;
}
</style>
