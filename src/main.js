// ���� vue.js ��Ĭ��ֵ
import Vue from 'vue'
// ���� App.vue ��Ĭ��ֵ
import App from './App'

// ���� false ����ֹ Vue ������ʱ����������ʾ
Vue.config.productionTip = false

// eslint ���ã����� new һ��ʵ���󲻸�ֵ������û��ʹ�� eslint������У�����һ��ע�Ͳ���ȱ��
/* eslint-disable no-new */
// ����һ���µ� Vue ʵ��
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
