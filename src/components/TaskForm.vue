<template>
  <form 
    class="form" 
    @submit.prevent
  >
    <button 
      class="btn-create"
      :disabled="titleInput.length < 9"
      @click="createTask"
    >
      <IconCreate  
        v-if="selectedFilter === STATUSES.inProgress"
      />
    </button>
    <myInput
      v-if="selectedFilter === STATUSES.inProgress"
      v-model="titleInput"
      type="text" 
      placeholder="Create New Item"
      @keypress.enter="createTask"
    />
  </form> 
</template>

<script>
import { STATUSES } from "@/Constants";
import IconCreate from "@/components/icons/IconCreate.vue";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components: {MyInput, IconCreate},
  props: {
    selectedFilter: {
      type: String,
      required: true,
    } 
  },
  emits: ['create'],
  data() {
    return {
      titleInput: '',
      STATUSES,
      }
    },
  methods: {
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.titleInput,
        status: STATUSES.inProgress, 
      }
      this.$emit('create', newTask);  
      this.titleInput = '';
    }
  }
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 64px;
  margin: 0px 0px 0px 0px; 
  padding: 0px 0px 0px 15px;
  /*
  padding: 24px 0px 8px 0px;
  border: 1px solid purple;
  */ 
}
.btn-create {
  align-self: flex-end;
  align-items: flex-end;
  background: none;
  border: none;
  margin-bottom: 13px;
  margin-right: 8px;
  /*
  border: 1px solid darkgreen;
  */ 
}
</style>