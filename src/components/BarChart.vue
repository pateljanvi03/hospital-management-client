<template>
  <Bar
    v-if="isDataReady"
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
      isDataReady: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Patients (Last 7 Days)",
            backgroundColor: "rgb(99 102 241)",
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true
      },
      dates: []
    }
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const dates = [];
      const counts = [];

      const response = await axios.get("/patient/barChart/day");
      for(let i of response.data.barChartData) {
        dates.push(i._id);
        counts.push(i.count || 0)
      }
      this.chartData.labels = dates;

      this.chartData.datasets[0] = {
        label: "Patients (Last 7 Days)",
        backgroundColor: "rgb(99 102 241)",
        data: counts
      }

      this.isDataReady = true;
    }
  }
}
</script>
