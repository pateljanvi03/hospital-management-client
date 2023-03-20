<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [ { data: [] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {
    this.loadData();
    this.chartData;
  },
  methods: {
    async loadData() {
      let dates = [];
      let counts = [];
      const response = await axios.get("/patient/barChart/day");
      for(let i of response.data.barChartData) {
        dates.push(i._id);
        counts.push(i.count);
      }

      this.chartData.labels = dates;
      this.chartData.datasets = [
        {
          label: "Patients (Last 7 Days)",
          backgroundColor: "rgb(99 102 241)",
          data: counts
        }
      ];
      console.log(this.chartData);
    }
  }
}
</script>
