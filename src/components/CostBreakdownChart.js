import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  props: ["chartOptions"],
  mixins: [reactiveProp],
  mounted() {
    // this.chartData is created in the mixin.
    this.renderChart(this.chartData, this.chartOptions);
  }
};
