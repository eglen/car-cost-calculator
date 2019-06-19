import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  mounted() {
    // Overwriting base render method with actual data.
    // this.chartData is created in the mixin.
    this.renderChart(this.chartData, {
      maintainAspectRatio: false,
      responsive: true
    });
  }
};
