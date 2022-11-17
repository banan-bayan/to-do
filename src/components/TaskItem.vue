<template>
  <div class="task">
    <button 
      class="btn btn-complete"
      @click="$emit('completed', task)"
    >
    </button>
    <div class="task__title"> {{ task.title }} </div> 
    <button  
      class="btn btn-delete" 
      @click="$emit('remove', task)"
    > 
      <IconDelete/>
    </button> 
  </div> 
</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";
export default {
  components: {IconDelete},
  props: {
    task: {
        type: Object,
        required: true,
    }
  }
}
</script>

<style scoped>

.task__title {
  overflow: hidden;
  text-overflow: clip;
  /*
  border: 1px solid green;
  */
  margin-left: 10px;
  margin-right: 10px;
  max-width: 970px;
}
.task {
  /*
  max-width: 1122px;
  width: 1122px;
  */
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

  /*
    border-top: 0.4px solid rgba(202, 196, 196, 0.5);
  width: 1122px;
  margin: 0px 69px 0px 66px;
  */
  box-shadow: 0 9px 9px 3px rgba(202, 196, 196, 0.7); 
  border-radius: 0 0 15px 15px;
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