<template>
  <div class="container-calendar">
    <div class="box-calendar-month">
      <div class="month-style"> {{ MONTHS[getMonthNow()] }} </div>
    </div>
    <div class="box-calendar-day">
      <div class="day-style"> {{ getDateNow() }} </div>
    </div>
  </div>
</template>

<script>
import { MONTHS } from '@/Constants';
export default {
  data() {
    return {
      MONTHS
    }
  },
  methods: {
      getDateNow() {
        return new Date(Date.now()).getDate();
      },
      getDayMonthYearNow() {
        return new Date(Date.now()).toDateString();
      },
      getMonthNow() {
        return new Date(Date.now()).getMonth();
      },
   } 
}
</script>

<style scoped>
.box-calendar-day {
  width: 51px;
  height: 30px;
  border: 3px solid #3D82EB;
  border-radius: 0px 0px 9px 9px;
}
.box-calendar-month {
  width: 51px;
  height: 18px;
  background: #3D82EB;
  border: 3px solid #3D82EB;
  border-radius: 6px 6px 0px 0px;
}
.month-style {
  width: 30px;
  height: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  margin: auto;
  margin-top: 3px;
}
.day-style {
  width: 27px;
  height: 21px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  text-align: center;
  color: #3D82EB;
  margin: auto;
}
</style>