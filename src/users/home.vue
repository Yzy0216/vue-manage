<template>
<el-row class="home" :gutter="20">
  <el-col :span="8" style="margin-top:20px">
    <!-- 用户信息卡片 -->
    <el-card shadow="hover">
      <div class="user">
        <img :src="userImg" alt="">
        <div class="userinfo">
        <p class="name">Admin</p>
        <p class="access">超级管理员</p>
        </div>
      </div>
      <div class="login-info">
        <p>上次登录地点：</p>
        <p>上次登录的时间：</p>
      </div>
<!-- 品牌购买详情卡片 -->
    </el-card>
<el-card style="margin-top:20px;height:460px">
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        v-for="(val,key) in tableLabel"
        :key="key"
        :prop="key"
        :label="val">
      </el-table-column>
    </el-table>
</el-card>
  </el-col>
  <el-col :span="16" style="margin-top:20px">
    <div class="num">
      <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
         <i class="icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
         <div class="detail">
           <p class="num">¥{{item.value}}</p>
           <p class="txt">{{item.name}}</p>
         </div>
      </el-card>
    </div>
    <el-card style="height:280px"></el-card>
    <div class="graph">
      <el-card style="height:260px"></el-card>
      <el-card style="height:260px"></el-card>
    </div>

  </el-col>
</el-row>
</template>

<script>
import {getData} from '../../api/data.js'
export default {
name:'home',
data(){
  return{
    userImg:require('../assets/images/user.png'),
  tableData:[],
        tableLabel:{
           name: '品牌',
           todayBuy: '今日购买',
            monthBuy: '本月购买',
            totalBuy: '总购买'
        },
countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],

  }
},
mounted(){
  getData().then(res=>{
    const {code,data}=res.data
if(code===2000){
  this.tableData=data.tableData
}
  })
}
}
</script>

<style>

</style>