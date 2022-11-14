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
.b{
  height: 20px;
  width: 20px;
}
.task__title {
  overflow: hidden;
  margin-left: 16px;
  max-width: 300px;
  text-overflow: clip;
}
.task {
  max-width: 374px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 23px;
  width: 374px;
  margin: 0px 23px 0px 22px; 
  padding: 8px 0px 8px 10px;
  border-color: black;
  border-bottom: 0.4px solid rgba(202, 196, 196, 0.5);;  
}
.task:hover {
  transition: all 0.1s ease 0s; 
  display: flex;
  justify-content: flex-start;
  width: 374px;
  margin: 0px 23px 0px 22px;
  box-shadow: 0 3px 3px 1px rgba(202, 196, 196, 0.7); 
  border-radius: 0 0 5px 5px;
}
.btn {
 background: none;
 border: none;
}
.btn-delete {
  margin-top: 2px;
  margin-left: auto;
}
.btn-complete{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #CBCBCB;
 }
 .btn-complete:hover {
  background: #4E4E4E;
 }
</style>