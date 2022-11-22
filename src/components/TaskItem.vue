<template>
  <div  class="task">
    <button class="btn btn-complete" @click="$emit('completed', task)" v-if="selectedFilter===STATUSES.inProgress"></button>
    <button class="btn-completed" v-if="selectedFilter===STATUSES.completed"></button>
    <div class="task__title"> {{ task.title }} </div>
    <button  class="btn btn-delete" @click="$emit('remove', task)" v-if="selectedFilter===STATUSES.inProgress || selectedFilter===STATUSES.completed"><IconDelete/></button>
    <button  class="btn btn-deleted"  v-if="selectedFilter===STATUSES.removed"><IconDelete/></button>  
  </div> 
</template>

<script>
import { STATUSES } from "@/Constants";
import IconDelete from "@/components/icons/IconDelete.vue";
export default {
  data() {
    return {
      STATUSES
    }
  },
  components: {IconDelete, },
  props: {
    task: {
        type: Object,
        required: true,
    },
    selectedFilter: {
      type: String,
      
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
.btn-deleted {
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
   /*
  border: 1px solid green;
  */
}
.task {
  flex: 0 1 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  padding: 0px 0px 0px 15px;
  border-bottom: 0.4px solid rgba(202, 196, 196, 0.5);
  /*
  border: 1px solid darkred;
  */
}
.task:hover {
  transition: all 0.1s ease 0s; 
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 9px 9px 3px rgba(202, 196, 196, 0.7); 
  border-radius: 0 0 15px 15px;
  /*
    border-top: 0.4px solid pink;
  */
}
.btn {
 background: none;
 border: none;
}
.btn-delete {
  margin-top: 0px;
  margin-left: auto;
  flex: 0 1 1%;
  /*
  border: 1px solid red;
  */
}
.btn-complete{
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  border: 3px solid #CBCBCB;
  /*
  border: 1px solid red;
  */
 }
 .btn-complete:hover {
  background: #4E4E4E;
 }
</style>