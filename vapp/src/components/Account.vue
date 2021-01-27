<template>
  <div id="Account">
    <!--<drizzle-account units="Ether" :precision="2" />-->
    <div id="data" v-if="isDrizzleInitialized">
      <div id="name">
        {{ activeAccount.substring(0,20) }}
        <md-tooltip md-direction="top">{{ activeAccount }}</md-tooltip>
      </div>
      <div id="balance">Balance: {{ convertedBalance }} {{ units }}</div>
    </div>
    <div v-else>Loading...</div>
    <md-icon class="md-size-2x icon">account_circle</md-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const capitalize = ws => ws[0].toUpperCase() + ws.slice(1).toLowerCase()
const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}

export default {
  name: "Account",
  props: {
    units: {
      type: String,
      default: 'Ether'
    },
    precision: {
      type: Number,
      default: 2
    },
  },
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['drizzleInstance', 'isDrizzleInitialized']),
    convertedBalance() {
      const wei = this.activeBalance
      const units = capitalize(this.units)
      return precisionRound(
          this.drizzleInstance.web3.utils.fromWei(wei, units),
          this.precision
      )
    }
  }
}
</script>

<style scoped>

#Account {
  display:flex;
  padding:10px;
  border-radius:30px;
  text-align:left;
  direction:rtl;
  background: rgba(100,100,100,0.15);
}

#Account:hover {
  background:rgba(29, 161, 242, 0.1) !important;
  border-radius: 30px;
}

.icon {
  margin:0 5px 0 0;
  padding:0;
}

#data {
  margin-top:auto;
  margin-bottom:auto;
}

#name {
  font-weight:bold;
}

#balance {
  color:rgba(255,255,255,0.5);
}

</style>