<template>
  <div v-if="tasks.length > 0">
    <TaskItem 
      class="task-item" 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task"
      @remove="$emit('remove', task)"
      @completed="$emit('completed', task)"
      :selectedFilter="selectedFilter"
    /> 
  </div>
  <p class="task-list-is-empty" v-else> Task list is currently empty </p>      
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
export default {
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    selectedFilter: {
      type: String,
      requered: true,
    }
  }
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: flex-start;
}
.task-list-is-empty {
  font-weight: 600;
  font-size: 39px;
  margin: 7px 23px 0px 102px;
  padding: 7px 0px 0px 10px;
}
</style>