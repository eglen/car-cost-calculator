<template>
  <div>
    <input type="number" v-model="purchasePrice" />
    <p>{{ monthlyCosts }}</p>
  </div>
</template>

<script>
export default {
  name: "CapitalCosts",

  data: function() {
    return {
      purchasePrice: 50000
    };
  },
  computed: {
    monthlyCosts: function() {
      var monthlyValue = [];
      var monthlyDepreciation = [];
      for (var month = 0; month < 48; month++) {
        monthlyValue.push(this.valueAtMonth(this.purchasePrice, month));
        if (month > 0) {
          monthlyDepreciation.push(monthlyValue[month - 1] - monthlyValue[month]);
        }
      }
      this.$store.dispatch("updateSeries", monthlyDepreciation);
      return monthlyDepreciation;
    },
    storedCosts: function() {
      return this.$store.getters.getCapitalCosts;
    }
  },
  methods: {
    valueAtMonth(purchasePrice, month) {
      var ratio = -0.0125;
      return purchasePrice * Math.exp(ratio * month);
    }
  }
};
</script>

<style scoped lang="less">
h1 {
  margin: 40px 0 0;
}
</style>
