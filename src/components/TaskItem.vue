<template>
  <div class="task">
    <button
      v-if="selectedFilter===STATUSES.inProgress"
      class="btn btn-complete"
      @click="$emit('completed', task)"
    />
    <button
      v-if="selectedFilter===STATUSES.completed"
      class="btn-completed"
    />
    <div class="task__title">
      {{ task.title }}
    </div>
    <button
      v-if="selectedFilter===STATUSES.inProgress || selectedFilter===STATUSES.completed"
      class="btn btn-remove"
      @click.stop="$emit('remove', task)"
    >
      <IconDelete />
    </button>
    <button
      v-if="selectedFilter===STATUSES.removed"
      class="btn btn-delete"
      @click.stop="$emit('delete', task)"
    >
      <IconDelete />
    </button>  
  </div> 
</template>

<script>
import { STATUSES } from "@/Constants";
import IconDelete from "@/components/icons/IconDelete.vue";
export default {
  components: {IconDelete},
  props: {
    task: {
      type: Object,
      required: true,
    },
    selectedFilter: {
      type: String,
      required: true,
      
    }
  },
  emits: ['completed','remove', 'delete'],
  data() {
    return {
      STATUSES
    }
  }
}
</script>

<style scoped>
.btn-completed  {
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  border: 3px solid rgb(20, 248, 20);
  background: none;
}
.btn-delete {
  margin-top: 0px;
  margin-left: auto;
  flex: 0 1 1%;
  background: none;
  border: none;
}
.task__title {
  overflow: hidden;
  text-overflow: clip;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
}
.task {
  flex: 0 1 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  padding: 0px 0px 0px 15px;
  border-bottom: 0.4px solid rgba(202, 196, 196, 0.5);
}
.task:hover {
  transition: all 0.1s ease 0s; 
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 9px 9px 3px rgba(202, 196, 196, 0.7); 
  border-radius: 0 0 15px 15px;
}
.btn {
 background: none;
 border: none;
}
.btn-remove {
  margin-top: 0px;
  margin-left: auto;
  flex: 0 1 1%;
}
.btn-complete{
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  border: 3px solid #CBCBCB;
 }
 .btn-complete:hover {
  background: #4E4E4E;
 }
</style>