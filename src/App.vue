<template>
  <div id="app">
    <!-- <div style="position: relative; height: 200px"> -->
      <CostBreakdownChart :height="350" :chart-data="chartData" :chart-options="chartOptions"/>
    <!-- </div> -->
    <CapitalCosts msg="Placeholder" />
  </div>
</template>

<script>
import CapitalCosts from "./components/CapitalCosts.vue";
import CostBreakdownChart from "./components/CostBreakdownChart";
import { range } from "lodash";

export default {
  name: "app",
  components: {
    CapitalCosts,
    CostBreakdownChart
  },
  data () {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  mounted () {
  },
  computed: {
    chartData () {

      return {
        labels: range(1, this.$store.getters.getCapitalCosts.length),
        datasets: [
          {
            label: 'Depreciation',
            // backgroundColor: '#992222',
            data: this.$store.getters.getCapitalCosts
          }
        ]
      };
    }
  },
  methods: {
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
