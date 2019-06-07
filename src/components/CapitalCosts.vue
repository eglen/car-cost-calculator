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
      purchasePrice: 456463
    };
  },
  computed: {
    monthlyCosts: function() {
      var monthlyDepreciation = [];
      for (var month = 0; month < 120; month++) {
        monthlyDepreciation.push(this.costForMonth(this.purchasePrice, month));
      }
      return monthlyDepreciation;
    }
  },
  methods: {
    costForMonth(costNew, month) {
      var ratio = -0.0125;
      return costNew * Math.exp(ratio * month);
    }
  }
};
</script>

<style scoped lang="less">
h1 {
  margin: 40px 0 0;
}
</style>
