<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    <div class="py-4">
      <div>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardState label="Patients Today" duration="daily"></DashboardState>
          <DashboardState label="Patients This week" duration="weekly"></DashboardState>
          <DashboardState label="Patients This month" duration="monthly"></DashboardState>
        </dl>
        <!-- <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardState label="Revenue Today" duration="daily" type="revenue"></DashboardState>
          <DashboardState label="Revenue This week" duration="weekly" type="revenue"></DashboardState>
          <DashboardState label="Revenue This month" duration="monthly" type="revenue"></DashboardState>
        </dl> -->
      </div>
      <BarChart></BarChart>
      <!-- <RevenueTable></RevenueTable> -->
    </div>
  </div>
</template>

<script>
import DashboardState from "../components/DashboardState.vue";
import BarChart from "../components/BarChart.vue";
export default {
  components: {
    DashboardState,
    BarChart
  }
}
</script>
