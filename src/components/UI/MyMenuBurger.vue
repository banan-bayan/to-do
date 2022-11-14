<template>
  <div
    v-if="show"
    v-click-outside="onClickOutsideMenuBurger"
    class="menu-burger"
  >
    <div>  
      <button
        @click="buttonMenuCompleted"
        class="btn tasks-in-menu tasks-completed" 
        
      
      >
        Completed
      </button>
      <hr class="hr-in-menu">
      <button
        @click="buttonMenuInProgress"
        class="btn tasks-in-menu tasks-in-progress" 
      
       
      >
        In Progress
      </button>
      <hr class="hr-in-menu">
      <button
        @click="buttonMenuRemoved"
        class="btn tasks-in-menu tasks-removed" 
       
      >
        Removed
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonActiveCompleted: false,
      buttonActiveInProgress: false,
      buttonActiveRemoved: false,
    }
  },
  name: 'MyMenuBurger',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    selectedFilter: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClickOutsideMenuBurger() {
      this.$emit('update:show', false)
    },
    buttonMenuCompleted() {
      //  @click="buttonMenuCompleted"
      //   :class="{'buttons-in-menu-active': buttonActiveCompleted}"
      ////this.buttonActiveCompleted = !this.buttonActiveCompleted;
      //this.buttonActiveInProgress = false;
      //this.buttonActiveRemoved = false;
      this.$emit('optionTasks','completed');
    },
    buttonMenuInProgress() {
      // @click="buttonMenuInProgress" css
      //   :class="{'buttons-in-menu-active': buttonActiveInProgress}"
      // @click="$emit('optionTaskInProgress', selectedFilter)"
      //this.buttonActiveInProgress = !this.buttonActiveInProgress;
      //this.buttonActiveCompleted = false;
     // this.buttonActiveRemoved = false;
      this.$emit('optionTasks','inProgress');
    },
    buttonMenuRemoved() {
      // @click="buttonMenuRemoved" css
      //   :class="{'buttons-in-menu-active': buttonActiveRemoved}"
      //this.buttonActiveRemoved = !this.buttonActiveRemoved;
      //this.buttonActiveInProgress = false;
     // this.buttonActiveCompleted = false;
      this.$emit('optionTasks','removed');
    },
  }
}
</script>

<style scoped>
 
.menu-burger {
    position: absolute;
    width: 57px;
    height: 61px;
    left: 358px;
    top: 37px;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px 0px 5px 5px;
 }
.tasks-in-menu {
    color: #C4C4C4;
    font-size: 8px;
    line-height: 9px;
    height: 9px;
    text-align: center;
    margin-left: auto;
    margin-right: auto; 
    transition: all 0.3s ease 0s;
    font-weight: 600;    
}
.tasks-in-menu:hover {
  color: #5a7878;
  font-weight: 500;
  transition: all 0.2s ease 0s;
  font-weight: 600;
} 
 .btn .tasks-completed {
    width: 39px;
    margin-top: 5px;
    padding-top: 1px;
    margin-bottom: 6px;
 }
 .btn .tasks-in-progress {
    width: 41px;
    margin-top: 4px;
    padding-top: 1px;
    margin-bottom: 6px;
    padding-bottom: 1px; 
 }
 .btn .tasks-removed {
    width: 34px;
    padding-top: 1px;
    margin-top: 1px;
    margin-bottom: 5px;
    padding-bottom: 1px;
 }
 .hr-in-menu {
  margin: 0;
  padding: 0;
  border-top: 1px solid #ECECEC;
  border-left: none;
  border-right: none;
  border-bottom: none;
  size: 1px;
 }
 .btn {
    width: 57px;
    height: 20px;
    background: none;
    border: none;
 }
 .buttons-in-menu-active:hover {
  color: #3D82EB;
  font-weight: 600;
 }
 .buttons-in-menu-active {
  color: #3D82EB;
  font-weight: 600;
 }
</style>