/**
 * 全局过滤器
 * 用法：https://cn.vuejs.org/v2/guide/filters.html
 */
import Vue from 'vue';

/**
 * 格式化日期
 * 返回：YYYY年MM月DD日 HH:mm:ss
 */
Vue.filter('dateTimeFormatter', (dateStr, pattern = 'YYYY-DD-MM HH:mm:ss') => {
  return dateStr
});

/**
 * 格式化日期
 * 返回：YYYY-MM-DD
 */
Vue.filter('dateFormatter', (dateStr, pattern = 'YYYY-MM-DD') => {
  return dateStr
});
