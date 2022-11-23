<template>
  <div
    v-if="show"
    v-click-outside="onClickOutsideMenuBurger"
    class="menu-burger"
  >
    <div>
      <div class="background-gray" />
      <button
        class="btn tasks-in-menu tasks-completed"
        :class="{'buttons-in-menu-active': buttonActiveCompleted}" 
        @click="buttonMenuCompleted"
      >
        Completed
      </button>
      <hr class="hr-in-menu">
      <button
        class="btn tasks-in-menu tasks-in-progress"
        :class="{'buttons-in-menu-active': buttonActiveInProgress}" 
        @click="buttonMenuInProgress"
      >
        In Progress
      </button>
      <hr class="hr-in-menu">
      <button
        class="btn tasks-in-menu tasks-removed"
        :class="{'buttons-in-menu-active': buttonActiveRemoved}" 
        @click="buttonMenuRemoved"
      >
        Removed
      </button>
    </div>
  </div>
</template>

<script>
import {STATUSES} from '@/Constants';
export default {
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
  emits: ['update:show', 'getSortedTasks',],
  data() {
    return {
      buttonActiveCompleted: false,
      buttonActiveInProgress: false,
      buttonActiveRemoved: false,
    }
  },
  methods: {
    onClickOutsideMenuBurger() {
      this.$emit('update:show', false);
    },
    buttonMenuCompleted() {
      this.buttonActiveCompleted = !this.buttonActiveCompleted;
      this.buttonActiveInProgress = false;
      this.buttonActiveRemoved = false;
      this.$emit('getSortedTasks', STATUSES.completed);
    },
    buttonMenuInProgress() {
      this.buttonActiveInProgress = !this.buttonActiveInProgress;
      this.buttonActiveCompleted = false;
      this.buttonActiveRemoved = false;
      this.$emit('getSortedTasks', STATUSES.inProgress);
    },
    buttonMenuRemoved() {
      this.buttonActiveRemoved = !this.buttonActiveRemoved;
      this.buttonActiveInProgress = false;
      this.buttonActiveCompleted = false;
      this.$emit('getSortedTasks', STATUSES.removed);
    },
  }
}
</script>

<style scoped>
.background-gray {
  background: rgba(0, 0, 0, 0.4);
  height: 30px;
  border-radius: 5px 5px 0px  0px;
}
.menu-burger {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-left: auto;
  width: 171px;
  height: 213px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}
.tasks-in-menu {
  color: #C4C4C4;
  font-size: 24px;
  line-height: 9px;
  height: 9px;
  text-align: center;
  margin-left: auto;
  margin-right: auto; 
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 10;
}
.tasks-in-menu:hover {
  color: #4E4E4E;
} 
.hr-in-menu {
  border: none;
  border-top: 2px solid #ECECEC;
}
.btn {
  width: 171px;
  height: 60px;
  background: none;
  border: none;
/*
    border: 1px solid darkmagenta; 
*/
}
.buttons-in-menu-active:hover, .buttons-in-menu-active{
  color: #3D82EB;
}
</style>