<template>
  <div class="date-input">
    <div>
      <el-container>
        <el-header />
        <span class="demonstration">请填写日期</span>
        <div>
          <view>
            拆零日期：
            <el-input v-model="startDate" placeholder="拆零日期" size="large" id="startInput"
              style="margin-bottom: 10px;margin-top: 10px" />
          </view>

          <view>
            失效日期：
            <el-input v-model="endDate" placeholder="失效日期" size="large" id="endInput" style="margin-top: 10px" />
          </view>
        </div>
        <el-button style="margin-left: 0px;" class="btn-style" type="primary"
          @click="printJS({ printable: 'print-tag', type: 'html', scanStyles: false, style: pageStyle })">打印</el-button>
        <el-button style="margin-left: 0px" class="btn-style" type="danger" @click="resetClick">重置</el-button>
        <el-main />
      </el-container>

      <div id="print-tag" class="text-font" v-show="true">
        <div>拆零日期:{{ startDate }}</div>
        <br></br>
        <div>失效日期:{{ endDate }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import printJS from 'print-js-updated'
const startDate = ref('')
const endDate = ref('')
const today = new Date();
const year = today.getFullYear(); // 获取年份
const month = today.getMonth() + 1; // 获取月份，+1因为getMonth()返回0-11
const day = today.getDate(); // 获取日期号

console.log(`年: ${year}, 月: ${month}, 日: ${day}`)
startDate.value = `${year}-${month}-${day}`
endDate.value = `${year}-${month + 1}-${day}`

function resetClick() {
  dateReset()
}

const dateReset = () => {
  startDate.value = `${year}-${month}-${day}`
  endDate.value = `${year}-${month + 1}-${day}`
  ElNotification({
    title: '重置',
    message: '已重置成功。',
    duration: 2000,
  })
}

const pageStyle = '@media print {#print-tag {font-size: 10px;transform: scale(1);transform-origin: top left;}@page {margin:0px;}}'

</script>

<style scoped>
.date-input {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.date-input .block:last-child {
  border-right: none;
}

.date-input .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.date-input .btn-style {
  margin-top: 10px
}

.text-font {
  font-size: 15px
}

/* @media print {#print-tag {font-size: 30px;transform: scale(0.6);transform-origin: top left;margin-top: 2mm; margin-left: 2mm;}} */

</style>