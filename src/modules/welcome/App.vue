<template>
  <div class="welcome">
    <div>
      <!-- <h2>{{text}}</h2> -->
      <h3>大项目项目文档</h3>
      <img src="~@/assets/imgs/add.svg" alt="">
      <ul>
        <li><a href="https://winning-finance.github.io/his-doc/config/#build" target="_blank" rel="noopener">配置说明</a></li>
        <li><a href="https://winning-finance.github.io/his-doc/plugins/" target="_blank" rel="noopener">his项目常用插件</a></li>
        <li>快开始吧</li>
        <li>wo cao wo cao ddd</li>
      </ul>
    </div>
  </div>
</template>

<script>

import { queryArrearsList } from '@/api/welcome'

export default {
  name: 'his-micro-welcome',
  data () {
    return {
      text: 'his项目初始化项目'
    }
  },
  methods: {
    /**
     *@param
     *  */
    getList (queryData) {
      queryArrearsList(queryData).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.welcome {
  background-color: #fff;
  text-align: center;
  height: 100%;
  & > div {
    margin: 0 auto;
    padding-top: 120px;
    line-height: 60px;
  }
  & h3 {
    font-size: 40px;
  }
  & a {
    color: #2d5afa;
    font-size: 24px;
  }
}
</style>
