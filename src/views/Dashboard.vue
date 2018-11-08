<template>
    <div class="dashboard container">
        <h1 class="center">Valor de um BitCoin</h1>
        <!-- Tá dando erro pq o ESLint tá ativado, tem algum jeito de desativar
        com comentários e eu n faço a minima ideia -->
        <div v-for="currency in info" class="currency center">
            {{ currency.description }}:
            <span class="lighten">
                <span v-html="currency.symbol"></span>{{ currency.rate_float |
                 currencydecimal }}
            </span>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
    name: 'Dashboard',
    data() {
        return {
            info: null
        }
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }, 
    mounted(){
        axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
}
</script>

<style scoped>

</style>