<template>
  <div class="date-input">
    <div>
      <el-container style="width: 100%;">
        <el-header>
          <span class="demonstration">请填写日期：</span>
        </el-header>

        <el-main>
          <div>
            <view>
              拆零日期：
              <el-input v-model="startDate" placeholder="拆零日期" size="large" id="startInput"
                style="margin-bottom: 10px; margin-top: 10px;" />
            </view>
            <view>
              失效日期：
              <el-input v-model="endDate" placeholder="失效日期" size="large" id="endInput" style="margin-top: 10px" />
            </view>
          </div>
          <div>
            <el-button class="btn-style" type="primary"
              @click="printJS({ printable: 'print-tag', type: 'html', scanStyles: false, style: pageStyle })">打印</el-button>
          </div>
          <div>
            <el-button class="btn-style" type="danger" @click="resetClick">重置</el-button>
          </div>

          <div id="print-tag" class="text-style" style="margin-top: 10px;" v-show="true">
            <div>拆零日期:{{ startDate }}</div>
            <div style="margin-top: 0.5mm;">失效日期:{{ endDate }}</div>
          </div>
        </el-main>
      </el-container>
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
    duration: 1451,
  })
}

const pageStyle = '@media print {#print-tag {font-size: 10px;transform: scale(1);transform-origin: top left;margin: 0px;margin-top: 10px;size: portrait;}@page {margin:0px;}}'

</script>

<style scoped>
.date-input {
  display: flex;
  padding: 0;
  margin: auto;
}

.date-input .block:last-child {
  border-right: none;
}

.date-input .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  margin-top: 20px;
  font-size: large;
}

.date-input .btn-style {
  width: 100%;
  margin: auto;
  margin-top: 10px;
}

.text-style {
  font-size: 18px;
}
</style>