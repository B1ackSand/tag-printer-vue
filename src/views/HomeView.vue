<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
  </el-menu>
  <view v-title title="tag-printer" class="show-body">
    <Home />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Home from '../components/Home.vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.show-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>