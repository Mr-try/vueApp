/**
 * Created by ty on 2017/3/21.
 */
import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//在这里定义通用的变量
export default new Vuex.Store({
  state: {
    town: ["南屿镇", "小箬乡", "竹岐乡", "洋里乡", "青口镇", "尚干镇", "南通镇", "甘蔗街道", "上街镇", "白沙镇", "江洋农场", "祥谦镇", "廷坪乡", "荆溪镇", "大湖乡", "鸿尾乡", "甘蔗镇"],
    department:["尚干镇", "祥谦镇", "南通镇", "上街镇", "竹岐乡", "鸿尾乡", "荆溪镇", "甘蔗街道", "白沙镇", "洋里乡", "大湖乡", "县委宣传部", "青口投资区管委会", "闽侯经济技术开发区管委会", "县住建局", "县交通局", "县教育局", "大学新校区建设指挥部", "南通物流城建设指挥部", "县城竹岐新区建设指挥部", "闽江南港南岸堤路建设指挥部"],
    industry:["建筑业","农林水","工业交通","商贸","金融业"]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getTown: (state) => state.town,
    getDepartment: (state) => state.department,
    getIndustry: (state) => state.industry
  }
})
