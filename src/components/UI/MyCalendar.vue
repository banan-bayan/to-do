<template>
  <div class="container-calendar">
    <div class="box-calendar-month">
      <div class="month-style"> {{ months[getMonthNow()] }} </div>
    </div>
    <div class="box-calendar-day">
      <div class="day-style"> {{ getDateNow() }} </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        months: ['JAN','FEB','MAR','APR',
                 'MAY','JUNE','JULY','AUG',
                 'SEP','OCT','NOV','DEC',
                ]
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
  width: 17px;
  height: 10px;
  border: 1px solid #3D82EB;
  border-radius: 0px 0px 3px 3px;
}
.box-calendar-month {
  width: 17px;
  height: 6px;
  background: #3D82EB;
  border: 1px solid #3D82EB;
  border-radius: 2px 2px 0px 0px;
}
.month-style {
  width: 10px;
  height: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 5px;
  line-height: 6px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  margin: auto;
  margin-top: 1px;
}
.day-style {
  width: 9px;
  height: 7px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 8px;
  text-align: center;
  color: #3D82EB;
  margin: auto;
}
</style>