<template>
  <form 
    @submit.prevent 
    class="form"
  >
    <button 
      class="btn-create"
      @click="createTask"
      :disabled="titleInput.length < 9"
    >
      <IconCreate  
        v-if="selectedFilter === 'inProgress'"
      />
    </button>
    <myInput
      v-if="selectedFilter === 'inProgress'"
      v-model="titleInput"
      type="text" 
      placeholder="Create New Item"
      v-on:keypress.enter="createTask"
    />
  </form> 
</template>

<script>
import IconCreate from "@/components/icons/IconCreate.vue";
import MyInput from "@/components/UI/MyInput.vue";
export default {
  components: {MyInput, IconCreate},
  props: {
    selectedFilter: {
      type: String,
    }
  },
  data() {
    return {
      titleInput: '',
      }
    },
  methods: {
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.titleInput,
        status: 'inProgress',
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