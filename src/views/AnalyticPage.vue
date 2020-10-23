<template>
  <div class="hello">
    <h1>Аналитика</h1>
   <h3>Аналитика по визитам</h3>
   <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  data(){
    return {
     Arr : 
[
  {"date":"2020-07-01","visits":213},
  {"date":"2020-07-02","visits":249},
  {"date":"2020-07-03","visits":179},
  {"date":"2020-07-04","visits":170},
  {"date":"2020-07-05","visits":184},
  {"date":"2020-07-06","visits":202},
  {"date":"2020-07-07","visits":198},
  {"date":"2020-07-08","visits":168},
  {"date":"2020-07-09","visits":176},
  {"date":"2020-07-10","visits":171},
  {"date":"2020-07-11","visits":190},
  {"date":"2020-07-12","visits":154},
  {"date":"2020-07-13","visits":246},
  {"date":"2020-07-14","visits":250},
  {"date":"2020-07-15","visits":227},
  {"date":"2020-07-16","visits":140},
  {"date":"2020-07-17","visits":170},
  {"date":"2020-07-18","visits":125},
  {"date":"2020-07-19","visits":106},
  {"date":"2020-07-20","visits":207},
  {"date":"2020-07-21","visits":222},
  {"date":"2020-07-22","visits":198},
  {"date":"2020-07-23","visits":204},
  {"date":"2020-07-24","visits":213},
  {"date":"2020-07-25","visits":145},
  {"date":"2020-07-26","visits":166},
  {"date":"2020-07-27","visits":163},
  {"date":"2020-07-28","visits":135},
  {"date":"2020-07-29","visits":45}
],
    }
  },
  extends: Line,
  mounted () {
    this.renderChart({
        labels: this.Arr.map((i=>i.date)),
        datasets: [{
            label: 'Просмотры',
            data: this.Arr.map(i=> i.visits),
            backgroundColor: [
                'rgba(128, 0, 128, 0.2)',
            ],
            borderColor: [
                'rgba(128, 0, 128, 1.0)',
            ],
            borderWidth: 3,
            pointBorderColor : 'rgba(128, 0, 128, 1.0)'
        }]
    },)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
