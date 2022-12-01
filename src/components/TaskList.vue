<template>
  <div v-if="tasks.length > 0">
    <TaskItem  
      v-for="task in tasks" 
      :key="task.id" 
      class="task-item" 
      :task="task"
      :selectedFilter="selectedFilter"
      @remove="$emit('remove', task)"
      @completed="$emit('completed', task)"
      @delete="$emit('delete', task)"
    /> 
  </div>
  <p
    v-else
    class="task-list-is-empty"
  >
    Task list is currently empty
  </p>      
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
      required: true,
    }
  },
  emits: ['completed', 'remove', 'delete']
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