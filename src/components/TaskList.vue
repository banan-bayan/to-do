<template>
  <div v-if="tasks.length > 0">
    <PostItem 
      class="postItem" 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task"
      @remove="$emit('remove', task)"
      @completed="$emit('completed', task)"
    /> 
  </div>
  <p class="task-list-is-empty" v-else> Task list is currently empty </p>      
</template>

<script>
import PostItem from "@/components/TaskItem.vue"
export default {
  components: {PostItem},
  props: {
    tasks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
 .postItem {
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