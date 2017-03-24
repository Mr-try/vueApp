<template>
  <div>
    新增项目
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本信息" name="first">
        <div>
          <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="10" :sm="20" :lg="12">
              <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">项目基本信息</div>
              <el-form :span="10" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm"
                       label-width="250px" class="demo-ruleForm">
                <el-form-item label="项目名称" prop="name">
                  <el-input v-model="ruleForm.name" placeholder="请输入项目名称"></el-input>
                </el-form-item>
                <el-form-item label="年度" prop="year">
                  <el-select v-model="ruleForm.year" placeholder="请选择活动区域">
                    <el-option label="2016" value="shanghai"></el-option>
                    <el-option label="2017" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="项目编号" prop="code">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item label="项目分类" prop="type">
                  <el-radio-group v-model="ruleForm.type">
                    <el-radio label="1">前期</el-radio>
                    <el-radio label="2">征迁</el-radio>
                    <el-radio label="3">建设</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="是否可见" prop="see">
                  <el-radio-group v-model="ruleForm.see">
                    <el-radio label="1">可见</el-radio>
                    <el-radio label="2">不可见</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="所属行业" prop="industry">
                  <el-select v-model="ruleForm.industry" placeholder="请选择所属行业">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属乡镇" prop="town">
                  <el-select v-model="ruleForm.town" placeholder="请选择所属乡镇">
                    <el-option label="青口镇" value="shanghai"></el-option>
                    <el-option label="闽侯县" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="责任单位" prop="department">
                  <el-select v-model="ruleForm.department" placeholder="请选择责任单位">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="第一责任人" prop="firperson">
                  <el-input v-model="ruleForm.firperson"></el-input>
                </el-form-item>
                <el-form-item label="直接责任人" prop="resperson">
                  <el-input v-model="ruleForm.resperson"></el-input>
                </el-form-item>
                <el-form-item label="县责任领导" prop="couleader">
                  <el-input v-model="ruleForm.couleader"></el-input>
                </el-form-item>
                <el-form-item label="建设地点" prop="bdplace">
                  <el-input v-model="ruleForm.bdplace"></el-input>
                </el-form-item>
                <el-form-item label="项目介绍" prop="introduce">
                  <el-input type="textarea" v-model="ruleForm.introduce" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 业主信息设置</div>
                <el-form-item label="项目业主" prop="owner">
                  <el-input v-model="ruleForm.owner"></el-input>
                </el-form-item>
                <el-form-item label="责任人、职务、联系方式" prop="yzrespperson">
                  <el-input v-model="ruleForm.yzrespperson"></el-input>
                </el-form-item>
                <el-form-item label="联系人、职务、联系方式" prop="yzlinkperson">
                  <el-input v-model="ruleForm.yzlinkperson"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="baseMessage('ruleForm')">保存修改</el-button>
                  <el-button @click="cancelback">取消返回</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <!--
          显示/隐藏三个阶段目标任务div
      -->
      <el-tab-pane label="目标任务" name="second">
        <div v-if="showType == 1">
          <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="10" :sm="20" :lg="12">
              <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">前期项目目标任务</div>
              <el-form :span="10" label-position="left" :model="ruleForm1" :rules="rules1" ref="ruleForm1"
                       label-width="250px" class="demo-ruleForm">
                <el-form-item label="计划问题数" prop="planquestcount">
                  <el-input v-model="ruleForm1.planquestcount"></el-input>
                </el-form-item>
                <el-form-item label="总投资" prop="allprice">
                  <el-input v-model="ruleForm1.allprice"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="waitsolvquest">
                  <el-input type="textarea" v-model="ruleForm1.waitsolvquest" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm1.target" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="ruleForm1.nodeType">
                    <el-radio label="0">按季度</el-radio>
                    <el-radio label="1">按时间</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table :data="tableData" border style="width: 100%;margin-bottom: 30px">
                  <el-table-column label="时间节点" width="180">
                    <template scope="scope">
                      <el-icon name="time"></el-icon>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="完成目标" width="180">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper">
                        <el-tag type="warning" v-for="item in scope.row.name">{{ item }}</el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" >
                    <template scope="scope">
                      <el-button size="small" @click="addNode(scope.$index, scope.row)">填写目标</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(1,'ruleForm1')">保存修改</el-button>
                  <el-button>取消返回</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
        <div v-if="showType == 2">
          <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="10" :sm="20" :lg="12">
              <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">征迁项目目标任务</div>
              <el-form :span="10" label-position="left" :model="ruleForm2" :rules="rules2" ref="ruleForm2"
                       label-width="250px" class="demo-ruleForm">
                <el-form-item label="总交地面积（亩）" prop="zjdarea">
                  <el-input v-model="ruleForm2.zjdarea"></el-input>
                </el-form-item>
                <el-form-item label="未交地面积（亩）" prop="wjdarea">
                  <el-input v-model="ruleForm2.wjdarea"></el-input>
                </el-form-item>
                <el-form-item label="目标交地面积（亩）" prop="mbjdarea">
                  <el-input v-model="ruleForm2.mbjdarea"></el-input>
                </el-form-item>
                <el-form-item label="总拆迁面积（平方米）" prop="zcqarea">
                  <el-input v-model="ruleForm2.zcqarea"></el-input>
                </el-form-item>
                <el-form-item label="未拆迁面积（平方米）" prop="wcqarea">
                  <el-input v-model="ruleForm2.wcqarea"></el-input>
                </el-form-item>

                <el-form-item label="目标拆迁面积（平方米）" prop="mbzqarea">
                  <el-input v-model="ruleForm2.mbzqarea"></el-input>
                </el-form-item>

                <el-form-item label="总征迁户数（户）" prop="zzqfam">
                  <el-input v-model="ruleForm2.zzqfam"></el-input>
                </el-form-item>
                <el-form-item label="未征迁户数（户）" prop="wzqfam">
                  <el-input v-model="ruleForm2.wzqfam"></el-input>
                </el-form-item>
                <el-form-item label="目标征迁户数（户）" prop="mbzqfam">
                  <el-input v-model="ruleForm2.mbzqfam"></el-input>
                </el-form-item>
                <el-form-item label="计划问题数" prop="planquest">
                  <el-input v-model="ruleForm2.planquest"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="waitquest">
                  <el-input type="textarea" v-model="ruleForm2.waitquest" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm2.target" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="ruleForm2.resource">
                    <el-radio label="按季度"></el-radio>
                    <el-radio label="选择时间"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%;margin-bottom: 30px">
                  <el-table-column
                    label="时间节点"
                    width="180">
                    <template scope="scope">
                      <el-icon name="time"></el-icon>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="完成目标"
                    width="180">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper">
                        <el-tag type="warning">{{ scope.row.name }}</el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <el-button
                        size="small"
                        @click="addNode(scope.$index, scope.row)">填写目标
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(2,'ruleForm2')">保存修改</el-button>
                  <el-button>取消返回</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
        <div v-if="showType == 3">
          <el-row :gutter="24" style="padding-top: 30px;padding-left: 30px;text-align: left">
            <el-col :span="10" :sm="20" :lg="12">
              <div style="font-size: 0.8em;color: #777;margin-bottom: 20px">建设项目目标任务</div>
              <el-form :span="10" label-position="left" :model="ruleForm3" :rules="rules3" ref="ruleForm3"
                       label-width="250px" class="demo-ruleForm">
                <el-form-item label="项目总投资（亿元）" prop="invest">
                  <el-input v-model="ruleForm3.invest"></el-input>
                </el-form-item>
                <el-form-item label="年计划投资（亿元）" prop="planinvest">
                  <el-input v-model="ruleForm3.planinvest"></el-input>
                </el-form-item>
                <el-form-item label="开竣工状态" prop="status">
                  <el-input v-model="ruleForm3.status"></el-input>
                </el-form-item>
                <el-form-item label="计划问题数" prop="planquest">
                  <el-input v-model="ruleForm3.planquest"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="solvequest">
                  <el-input type="textarea" v-model="ruleForm3.solvequest" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm3.target" placeholder="请输入项目介绍"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="ruleForm3.resource">
                    <el-radio label="按季度"></el-radio>
                    <el-radio label="选择时间"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%;margin-bottom: 30px">
                  <el-table-column
                    label="时间节点"
                    width="180">
                    <template scope="scope">
                      <el-icon name="time"></el-icon>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="完成目标"
                    width="180">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper">
                        <el-tag type="warning">{{ scope.row.name }}</el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <el-button
                        size="small"
                        @click="addNode(scope.$index, scope.row)">填写目标
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(3,'ruleForm3')">保存修改</el-button>
                  <el-button>取消返回</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <!--
         添加时间节点dialog
      -->
      <el-dialog title="title" v-model="dialog.prep" :show-close="false" size="small">
        <el-row :gutter="24" >
          <el-col :span="8" >
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="项目建议书">1.项目建议书</el-checkbox>
              <el-checkbox label="社会稳定风险评估">4.社会稳定风险评估</el-checkbox>
              <el-checkbox label="立项（核准、备案）">7.立项（核准、备案）</el-checkbox>
              <el-checkbox label="环境影响评价" >10.环境影响评价</el-checkbox>
              <el-checkbox label="工程规划许可证" >13.工程规划许可证</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8" >
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="规划选址意见书">2.规划选址意见书</el-checkbox>
              <el-checkbox label="节能审查">5.节能审查</el-checkbox>
              <el-checkbox label="初步设计及概算">8.初步设计及概算</el-checkbox>
              <el-checkbox label="用地规划许可证" >11.用地规划许可证</el-checkbox>
              <el-checkbox label="施工图审查" >24.施工图审查</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8" >
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="用地（用海）预审">3.用地（用海）预审</el-checkbox>
              <el-checkbox label="可行性研究报告">6.可行性研究报告</el-checkbox>
              <el-checkbox label="招投标">9.招投标</el-checkbox>
              <el-checkbox label="建设用地批准书" >12.建设用地批准书</el-checkbox>
              <el-checkbox label="施工许可证" >15.施工许可证</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog.prep = false">取 消</el-button>
          <el-button type="primary" @click="submitNode(tableData)">确 定</el-button>
        </div>
        <div slot="title">
          {{dialogTitle}}
        </div>
      </el-dialog>

    </el-tabs>
  </div>
</template>
<script>
  import router from '../../router'
  export default {
    data() {
      return {
        showType: "",
        activeName: 'first',

        /* project basic information:form and rules*/
        ruleForm: {
          name: '',
          year: '',
          code: '',
          type: '',
          see: "1",
          industry: '',
          town: '',
          department: '',
          firperson: '',
          resperson: '',
          couleader: '',
          bdplace: '',
          introduce: '',
          owner: '',
          yzrespperson: '',
          yzlinkperson: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          year: [
            {required: true, message: '请选择年度', trigger: 'change'}
          ],
          code: [
            {required: true, message: '请输入所属行业', trigger: 'change'},
          ],
          industry: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          town: [
            {required: true, message: '请选择 所属乡镇', trigger: 'change'}
          ],
          department: [
            {required: true, message: '请选择责任单位', trigger: 'change'}
          ],
          firperson: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          resperson: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          couleader: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          bdplace: [
            {required: true, message: '请输入建设地点', trigger: 'change'},
          ],
          introduce: [
            {required: true, message: '请输入项目介绍', trigger: 'change'},
          ],
          owner: [
            {required: true, message: '请输入项目业主', trigger: 'change'},
          ],
          yzrespperson: [
            {required: true, message: '请输入责任人、职务、联系方式', trigger: 'change'},
          ],
          yzlinkperson: [
            {required: true, message: '请输入 联系人、职务、联系方式', trigger: 'change'},
          ],
        },

        /* project prep information:form and rules*/
        ruleForm1: {
          pid: '',
          nodeType:"0",
          planquestcount: '',
          allprice: '',
          waitsolvquest: '',
          target: ''
        },
        rules1: {
          planquestcount: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          allprice: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          waitsolvquest: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          target: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ]
        },

        /* project mid information:form and rules*/
        ruleForm2: {
          pid: '',
          zjdarea: '',
          wjdarea: '',
          mbjdarea: '',
          zcqarea: '',
          wcqarea: '',
          mbzqarea: '',
          zzqfam: '',
          wzqfam: '',
          mbzqfam: '',
          planquest: '',
          waitquest: '',
          target: ''

        },
        rules2: {
          zjdarea: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          wjdarea: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          mbjdarea: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          zcqarea: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          wcqarea: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          mbzqarea: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          zzqfam: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          wzqfam: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          mbzqfam: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          planquest: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          waitquest: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          target: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ]
        },

        /* project late information:form and rules*/
        ruleForm3: {
          pid: '',
          invest: '',
          planinvest: '',
          status: '',
          bgtime: '',
          finishtime: '',
          planquest: '',
          solvequest: '',
          target: ''
        },
        rules3: {
          invest: [
            {required: true, message: '请输入项目名称', trigger: 'change'},
          ],
          planinvest: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          status: [
            {required: true, message: '请输入直接责任人', trigger: 'change'},
          ],
          bgtime: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          finishtime: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          planquest: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          solvequest: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ],
          target: [
            {required: true, message: '请输入县责任领导', trigger: 'change'},
          ]
        },

        tableData: [
          {
            date: '第一季度',
            name: ['未填写']
          }, {
            date: '第二季度',
            name:['未填写']
          }, {
            date: '第三季度',
            name:[ '未填写']
          }, {
            date: '第四季度',
            name:[ '未填写']
          }],

        addNodeIndex:'',
        dialog:{
            prep:false
        },
        checkList:[],
        dialogTitle:''
      };
    },
    methods: {

      /*
       submit the project basic  information
       */
      baseMessage(formName) {
        const _self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: localStorage.url + '/project/add',
              type: 'POST',
              data: this.ruleForm,
              success: function (data) {
                if (data.code == 1) {
                  console.log("保存失败")
                }
                console.log(data)
                _self.activeName = 'second';
                console.log(_self.activeName)
                localStorage.newPbId = data.data.pbId;
              },
              error: function (err) {
                console.log(err)
              }
            });
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /*
       submit project other information
       */
      onSubmit(type, formName){
        const _self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (type == 1) {
                /* 保存前期项目目标任务信息 */
              _self.ruleForm1.pid=localStorage.newPbId
              this.$http({
                url: localStorage.url + '/project/saveBeforeTask',
                type: 'POST',
                data: _self.ruleForm1,
                success: function (data) {
                  if (data.code == 1) {
                    console.log("保存失败")
                  }
                  router.push("/3-1");
                  console.log(data)
                },
                error: function (err) {
                  console.log(err)
                }
              });
            }
            else if (type == 2) {
              /* 保存征迁项目目标任务信息 */
              _self.ruleForm2.pid=localStorage.newPbId
              this.$http({
                url: localStorage.url + '/project/saveRemoveTask',
                type: 'POST',
                data: _self.ruleForm2,
                success: function (data) {
                  if (data.code == 1) {
                    console.log("保存失败")
                  }
                  router.push("/3-1");
                  console.log(data)
                },
                error: function (err) {
                  console.log(err)
                }
              });
            }
            else {
              /* 保存建设项目目标任务信息 */
              _self.ruleForm3.pid=localStorage.newPbId
              this.$http({
                url: localStorage.url + '/project/saveBuildTask',
                type: 'POST',
                data: _self.ruleForm3,
                success: function (data) {
                  if (data.code == 1) {
                    console.log("保存失败")
                  }
                  router.push("/3-1");
                  console.log(data)
                },
                error: function (err) {
                  console.log(err)
                }
              });
            }
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });

      },

      /*
       cancel submit then return
       */
      cancelback(){
        router.push("/3-1");
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /* add Nodes dialog */
      addNode(index, row) {
        console.log(index, row);
        //清空上一次的选择项
        this.checkList=[];
        this.addNodeIndex=index;
        this.dialogTitle = row.date;
        this.dialog.prep = true

      },
      /* submit node */
      submitNode(rows){
        console.log(rows)
        rows[this.addNodeIndex].name = this.checkList;
        this.dialog.prep = false;
        console.log(this.checkList);
        const _self = this;
        this.$http({
          url: localStorage.url + '/project/saveTaskNode',
          type: 'POST',
          data: {pid:localStorage.newPbId,date:rows[_self.addNodeIndex].date,note:_self.checkList.join(";")},
          success: function (data) {
            if (data.code == 1) {
              console.log("保存失败")
            }
            console.log(data)
          },
          error: function (err) {
            console.log(err)
          }
        });
      }
    },
    mounted: function () {
      let str = this.$route.path;
      let strs = str.split("/");
      console.log(strs)
      this.showType = strs[2]
      this.ruleForm.type = strs[2]
    }
  };
</script>
<style scoped>
  .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .node-checkbox > label{
    width: 100%;
    text-align: left;
  }
  .el-table th > .cell {
    text-align: center !important;
  }

  .el-table .cell {
    text-align: center !important;
  }
</style>
