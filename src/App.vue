<template>
  <div id="app">
    <!-- <div style="position: relative; height: 200px"> -->
      <CostBreakdownChart :height="100" :chart-data="chartdata" :options="chartoptions"/>
    <!-- </div> -->
    <CapitalCosts msg="Placeholder" />
  </div>
</template>

<script>
import CapitalCosts from "./components/CapitalCosts.vue";
import CostBreakdownChart from "./components/CostBreakdownChart";

export default {
  name: "app",
  components: {
    CapitalCosts,
    CostBreakdownChart
  },
  data () {
    return {
      //datacollection: {},
      chartoptions: {
        maintainAspectRatio: false,
        responsive: true
      }
    }
  },
  mounted () {
    this.fillData()
  },
  computed: {
    chartdata () {
      return {
        labels: ['Capital Costs'],
        datasets: [
          {
            label: 'Depreciation',
            backgroundColor: '#992222',
            data: this.$store.getters.getCapitalCosts
          }
        ]
      };
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['Capital Costs'],
        datasets: [
          {
            label: 'Depreciation',
            backgroundColor: '#992222',
            data: this.$store.getters.getCapitalCosts
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
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
