<template>
  <div>
    <span v-text=ruleForm.name></span>
    <el-tabs v-model="activeName" @tab-click="handleClick">
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
                    <el-option label="2016" value="2016"></el-option>
                    <el-option label="2017" value="2017"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="项目编号" prop="code">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item label="项目分类" prop="type">
                  <el-radio-group v-model="ruleForm.type" disabled>
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
                    <el-option v-for="item in industryList " :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属乡镇" prop="town">
                  <el-select v-model="ruleForm.town" placeholder="请选择所属乡镇">
                    <el-option v-for="item in townList " :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="责任单位" prop="department">
                  <el-select v-model="ruleForm.department" placeholder="请选择责任单位">
                    <el-option v-for="item in departmentList " :label="item" :value="item"></el-option>
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
                  <el-input v-model.number="ruleForm1.planquestcount"></el-input>
                </el-form-item>
                <el-form-item label="总投资" prop="allprice">
                  <el-input v-model.number="ruleForm1.allprice"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="waitsolvquest">
                  <el-input type="textarea" v-model="ruleForm1.waitsolvquest" placeholder="请输入攻坚行动必须解决的问题"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm1.target" placeholder="请输入攻坚行动必须达到的目标"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="taskType" @change="changeTaskType">
                    <el-radio label="1">按季度</el-radio>
                    <el-radio label="2">按时间</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table :data="taskType == 1 ? tableData:tableData2" border style="width: 100%;margin-bottom: 30px">
                  <el-table-column label="时间节点" width="150">
                    <template scope="scope">
                      <span>{{ scope.row.tnDate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="完成目标" width="300">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper finishItem">
                        <el-tag style="margin: 1px 5px" type="warning" v-for="item in scope.row.tnNote.split(';')">{{
                          item }}
                        </el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <div class="finishItem">
                        <el-button size="small" @click="addNode(scope.$index, scope.row)">修改目标</el-button>
                        <el-button size="small" v-if="scope.row.showBtnAdd" @click="addTask(scope.$index, scope.row)">
                          增加
                        </el-button>
                        <el-button size="small" type="danger" v-if="scope.row.showBtnDel"
                                   @click="delTask(scope.$index, tableData2,scope.row)">删除
                        </el-button>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(1,'ruleForm1')">保存修改</el-button>
                  <el-button @click="cancelback">取消返回</el-button>
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
                  <el-input v-model.number="ruleForm2.zjdarea"></el-input>
                </el-form-item>
                <el-form-item label="未交地面积（亩）" prop="wjdarea">
                  <el-input v-model.number="ruleForm2.wjdarea"></el-input>
                </el-form-item>
                <el-form-item label="目标交地面积（亩）" prop="mbjdarea">
                  <el-input v-model.number="ruleForm2.mbjdarea"></el-input>
                </el-form-item>
                <el-form-item label="总拆迁面积（平方米）" prop="zcqarea">
                  <el-input v-model.number="ruleForm2.zcqarea"></el-input>
                </el-form-item>
                <el-form-item label="未拆迁面积（平方米）" prop="wcqarea">
                  <el-input v-model.number="ruleForm2.wcqarea"></el-input>
                </el-form-item>
                <el-form-item label="目标拆迁面积（平方米）" prop="mbzqarea">
                  <el-input v-model.number="ruleForm2.mbzqarea"></el-input>
                </el-form-item>
                <el-form-item label="总征迁户数（户）" prop="zzqfam">
                  <el-input v-model.number="ruleForm2.zzqfam"></el-input>
                </el-form-item>
                <el-form-item label="未征迁户数（户）" prop="wzqfam">
                  <el-input v-model.number="ruleForm2.wzqfam"></el-input>
                </el-form-item>
                <el-form-item label="目标征迁户数（户）" prop="mbzqfam">
                  <el-input v-model.number="ruleForm2.mbzqfam"></el-input>
                </el-form-item>
                <el-form-item label="计划问题数" prop="planquest">
                  <el-input v-model.number="ruleForm2.planquest"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="waitquest">
                  <el-input type="textarea" v-model="ruleForm2.waitquest" placeholder="请输入攻坚行动必须解决的问题"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm2.target" placeholder="请输入行动必须达到的目标"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="taskType" @change="changeTaskType">
                    <el-radio label="1">按季度</el-radio>
                    <el-radio label="2">按时间</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table :data="taskType == 1 ? tableData:tableData2" border style="width: 100%;margin-bottom: 30px">
                  <el-table-column label="时间节点" width="150">
                    <template scope="scope">
                      <span>{{ scope.row.tnDate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="完成目标" width="300">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper finishItem">
                        <el-tag style="margin: 1px 5px" type="warning" v-for="item in scope.row.tnNote.split(';')">{{
                          item }}
                        </el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <div class="finishItem">
                        <el-button size="small" @click="addNode(scope.$index, scope.row)">修改目标</el-button>
                        <el-button size="small" v-if="scope.row.showBtnAdd" @click="addTask(scope.$index, scope.row)">
                          增加
                        </el-button>
                        <el-button size="small" type="danger" v-if="scope.row.showBtnDel"
                                   @click="delTask(scope.$index, tableData2,scope.row)">删除
                        </el-button>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(2,'ruleForm2')">保存修改</el-button>
                  <el-button @click="cancelback">取消返回</el-button>
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
                  <el-input v-model.number="ruleForm3.invest"></el-input>
                </el-form-item>
                <el-form-item label="年计划投资（亿元）" prop="planinvest">
                  <el-input v-model.number="ruleForm3.planinvest"></el-input>
                </el-form-item>
                <el-form-item label="开竣工状态" prop="status">
                  <el-radio-group v-model="ruleForm3.status">
                    <el-radio label="1">未开工</el-radio>
                    <el-radio label="2">已开工</el-radio>
                    <el-radio label="3">已竣工</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="计划开竣工时间" required>
                  <el-col :span="11">
                    <el-form-item prop="bgtime">
                      <el-date-picker type="date" placeholder="计划开工时间" v-model="ruleForm3.bgtime"
                                      :picker-options="pickeroption0" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="2" style="text-align: center">-</el-col>
                  <el-col :span="11">
                    <el-form-item prop="finishtime">
                      <el-date-picker type="date" placeholder="计划竣工时间" v-model="ruleForm3.finishtime"
                                      :picker-options="pickeroption1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="计划问题数" prop="planquest">
                  <el-input v-model.number="ruleForm3.planquest"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须解决的问题" prop="solvequest">
                  <el-input type="textarea" v-model="ruleForm3.solvequest" placeholder="请输入攻坚行动必须解决的问题"></el-input>
                </el-form-item>
                <el-form-item label="攻坚行动必须达到的目标" prop="target">
                  <el-input type="textarea" v-model="ruleForm3.target" placeholder="请输入攻坚行动必须达到的目标"></el-input>
                </el-form-item>
                <div style="font-size: 0.8em;color: #777;margin-bottom: 20px"> 完成任务时间节点</div>
                <el-form-item label="" prop="resource">
                  <el-radio-group style="margin-left: -250px" v-model="taskType" @change="changeTaskType">
                    <el-radio label="1">按季度</el-radio>
                    <el-radio label="2">按时间</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-table :data="taskType == 1 ? tableData:tableData2" border style="width: 100%;margin-bottom: 30px">
                  <el-table-column label="时间节点" width="150">
                    <template scope="scope">
                      <span>{{ scope.row.tnDate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="完成目标" width="300">
                    <template scope="scope">
                      <div slot="reference" class="name-wrapper finishItem">
                        <el-tag style="margin: 1px 5px" type="warning" v-for="item in scope.row.tnNote.split(';')">{{
                          item }}
                        </el-tag>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <div class="finishItem">
                        <el-button size="small" @click="addNode(scope.$index, scope.row)">修改目标</el-button>
                        <el-button size="small" v-if="scope.row.showBtnAdd" @click="addTask(scope.$index, scope.row)">
                          增加
                        </el-button>
                        <el-button size="small" type="danger" v-if="scope.row.showBtnDel"
                                   @click="delTask(scope.$index, tableData2,scope.row)">删除
                        </el-button>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit(3,'ruleForm3')">保存修改</el-button>
                  <el-button @click="cancelback">取消返回</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <!--添加前期时间节点dialog-->
      <el-dialog title="title" v-model="dialog.prep" :show-close="false" size="small">
        <el-row :gutter="4" style="text-align: left;margin-bottom: 20px" v-if="taskType-1">
          <el-date-picker type="date" placeholder="选择日期" v-model="taskDate"></el-date-picker>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="项目建议书">1.项目建议书</el-checkbox>
              <el-checkbox label="社会稳定风险评估">4.社会稳定风险评估</el-checkbox>
              <el-checkbox label="立项（核准、备案）">7.立项（核准、备案）</el-checkbox>
              <el-checkbox label="环境影响评价">10.环境影响评价</el-checkbox>
              <el-checkbox label="工程规划许可证">13.工程规划许可证</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8">
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="规划选址意见书">2.规划选址意见书</el-checkbox>
              <el-checkbox label="节能审查">5.节能审查</el-checkbox>
              <el-checkbox label="初步设计及概算">8.初步设计及概算</el-checkbox>
              <el-checkbox label="用地规划许可证">11.用地规划许可证</el-checkbox>
              <el-checkbox label="施工图审查">24.施工图审查</el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8">
            <el-checkbox-group class="node-checkbox" v-model="checkList">
              <el-checkbox label="用地（用海）预审">3.用地（用海）预审</el-checkbox>
              <el-checkbox label="可行性研究报告">6.可行性研究报告</el-checkbox>
              <el-checkbox label="招投标">9.招投标</el-checkbox>
              <el-checkbox label="建设用地批准书">12.建设用地批准书</el-checkbox>
              <el-checkbox label="施工许可证">15.施工许可证</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog.prep = false">取 消</el-button>
          <el-button type="primary" @click="submitNode(taskType-1?tableData2:tableData)">确 定</el-button>
        </div>
        <div slot="title">
          {{dialogTitle}}
        </div>
      </el-dialog>

      <!--添加征迁建设时间节点dialog-->
      <el-dialog title="title" v-model="dialog.other" :show-close="false" size="small">
        <el-row :gutter="4" style="text-align: left;margin-bottom: 20px" v-if="taskType-1">
          <el-date-picker type="date" placeholder="选择日期" v-model="taskDate"></el-date-picker>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-input type="textarea" v-model="targetContent" placeholder="请输入目标内容"></el-input>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog.other = false">取 消</el-button>
          <el-button type="primary" @click="submitNode(taskType-1?tableData2:tableData)">确 定</el-button>
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
        pickeroption0: {},
        pickeroption1: {},
        townList: [],
        departmentList: [],
        industryList: [],
        showType: "",
        activeName: 'first',
        taskType: "1",
        taskDate: '',
        /* project basic information:form and rules*/
        ruleForm: {
          pid: localStorage.editPbId,
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
          pid: localStorage.editPbId,
          nodeType: '0',
          planquestcount: '',
          allprice: '',
          waitsolvquest: '',
          target: ''
        },
        rules1: {
          planquestcount: [
            {required: true, type: 'number', message: '请输入计划问题数', trigger: 'change'},
          ],
          allprice: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
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
          pid: localStorage.editPbId,
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
            {required: true, type: 'number', message: '请输入 总交地面积', trigger: 'change'},
          ],
          wjdarea: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
          ],
          mbjdarea: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
          ],
          zcqarea: [
            {required: true, type: 'number', message: '请输入县责任领导', trigger: 'change'},
          ],
          wcqarea: [
            {required: true, type: 'number', message: '请输入项目名称', trigger: 'change'},
          ],
          mbzqarea: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
          ],
          zzqfam: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
          ],
          wzqfam: [
            {required: true, type: 'number', message: '请输入县责任领导', trigger: 'change'},
          ],
          mbzqfam: [
            {required: true, type: 'number', message: '请输入项目名称', trigger: 'change'},
          ],
          planquest: [
            {required: true, type: 'number', message: '请输入直接责任人', trigger: 'change'},
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
          pid: localStorage.editPbId,
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
            {required: true, type: 'number', message: '请输入项目总投资', trigger: 'change'},
          ],
          planinvest: [
            {required: true, type: 'number', message: '请输入年计划投资', trigger: 'change'},
          ],
          status: [
            {required: true, message: '请选择开竣工状态', trigger: 'change'},
          ],
          bgtime: [
            {required: true, type: 'date', message: '请输入计划开工时间', trigger: 'change'},
          ],
          finishtime: [
            {required: true, type: 'date', message: '请输入计划竣工时间', trigger: 'change'},
          ],
          planquest: [
            {required: true, type: 'number', message: '请输入计划问题数导', trigger: 'change'},
          ],
          solvequest: [
            {required: true, message: '请输入攻坚行动必须解决的问题', trigger: 'change'},
          ],
          target: [
            {required: true, message: '请输入攻坚行动必须达到的目标', trigger: 'change'},
          ]
        },
        tableData: [
          {
            tnDate: '第一季度',
            tnNote: '未填写',
          },
          {
            tnDate: '第二季度',
            tnNote: '未填写',
          },
          {
            tnDate: '第三季度',
            tnNote: '未填写',
          },
          {
            tnDate: '第四季度',
            tnNote: '未填写',
          }],
        tableData2: [
          {
            tnDate: '2017-01-01',
            tnNote: '未填写',
            showBtnAdd: true
          }
        ],
        addNodeIndex: '',
        dialog: {
          prep: false,
          other: false
        },
        targetContent: '',
        checkList: [],
        dialogTitle: '目标填写'
      };
    },
    methods: {
      /* 按日期节点增加条目 */
      addTask: function () {
        this.tableData2.push({tnDate: '', tnNote: '未填写', showBtnAdd: false, showBtnDel: true})
      },
      /* 按日期节点删除条目 */
      delTask: function (index, rows, row) {

        this.$http({
          url: localStorage.url + '/project/delTaskNode',
          type: 'POST',
          data: {
            tid: row.tnId,
          },
          success: function (data) {
            if (data.code == 1) {
              console.log("删除失败")
            }
            else {
              rows.splice(index, 1);
            }
            console.log(data)
          },
          error: function (err) {
            console.log(err)
          }
        });
      },
      /* change task node type */
      changeTaskType: function () {
        console.log(this.taskType)
      },
      /*
       update the project basic  information
       */
      baseMessage(formName) {
        const _self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: localStorage.url + '/project/update',
              type: 'POST',
              data: this.ruleForm,
              success: function (data) {
                if (data.code == 1) {
                  console.log("保存失败")
                }
                console.log(data)
                _self.activeName = 'second';
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
       update project other information
       */
      onSubmit(type, formName){
        this.ruleForm1.pid = localStorage.editPbId
        console.log(this.ruleForm1)
        const _self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (type == 1) {
              /* 保存前期项目目标任务信息 */
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
              console.log( _self.ruleForm3)
              /* 保存建设项目目标任务信息 */
              /*开竣工日期格式后再传参*/
              _self.ruleForm3.bgtime = _self.formatDate(_self.ruleForm3.bgtime);
              _self.ruleForm3.finishtime = _self.formatDate(_self.ruleForm3.finishtime);
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

      /* 日期转化 */
      formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
      },
      formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);
      },

      /* add Nodes dialog */
      addNode(index, row) {
        console.log(index, row);
        this.addNodeIndex = index;

        if (this.showType == 1) {
          this.dialog.prep = true

        }
        else {
          this.dialog.other = true

        }
      },
      /* submit node */
      submitNode(rows){
        console.log(this.taskDate)
        if (this.showType == 1) {
          rows[this.addNodeIndex].tnNote = this.checkList.join(";");
          if (this.taskType - 1)rows[this.addNodeIndex].tnDate = this.formatDate(this.taskDate);
          this.dialog.prep = false;
        }
        else {
          rows[this.addNodeIndex].tnNote = this.targetContent;
          if (this.taskType - 1)rows[this.addNodeIndex].tnDate = this.formatDate(this.taskDate);
          this.dialog.other = false;

        }
        console.log("list", this.checkList);
        const _self = this;
        this.$http({
          url: localStorage.url + '/project/saveTaskNode',
          type: 'POST',
          data: {
            pid: localStorage.editPbId,
            date: rows[_self.addNodeIndex].tnDate,
            note: _self.showType == 1 ? _self.checkList.join(";") : _self.targetContent,
            type: _self.taskType
          },
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
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created: function () {
      // 获取乡镇、行业等数组
      this.townList = this.$store.getters.getTown;
      this.departmentList = this.$store.getters.getDepartment;
      this.industryList = this.$store.getters.getIndustry;
    },
    mounted: function () {
      let str = this.$route.path;
      let strs = str.split("/");
      this.showType = strs[2];

      /* get project detial */
      const _self = this;
      this.$http({
        url: localStorage.url + '/project/getProjectInfo',
        type: 'POST',
        data: {pid: localStorage.editPbId},
        success: function (data) {
          if (data.code == 1) {
            console.log("获取不到项目信息")
          }
          else {
            for (let k = 0; k < data.data.tasknode.length; k++) {
              for (let j = 0; j < 4; j++) {
                if (_self.tableData[j].tnDate == data.data.tasknode[k].tnDate) {
                  _self.tableData[j].tnNote = data.data.tasknode[k].tnNote
                }
              }
              if (data.data.tasknode[k].tnType == 2) {
                data.data.tasknode[k].showBtnDel = true;
                _self.tableData2.push(data.data.tasknode[k])
              }
            }
            /* 显示原有的基础信息 */
            _self.ruleForm.pid = data.data.base.pbId;
            _self.ruleForm.name = data.data.base.pbName;
            _self.ruleForm.year = data.data.base.pbYear;
            _self.ruleForm.code = data.data.base.pbCode;
            _self.ruleForm.type = data.data.base.pbType;
            _self.ruleForm.see = data.data.base.pbSee;
            _self.ruleForm.industry = data.data.base.pbIndustry;
            _self.ruleForm.town = data.data.base.pbTown;
            _self.ruleForm.department = data.data.base.pbDepartment;
            _self.ruleForm.firperson = data.data.base.pbFirperson;
            _self.ruleForm.resperson = data.data.base.pbResperson;
            _self.ruleForm.couleader = data.data.base.pbCouleader;
            _self.ruleForm.bdplace = data.data.base.pbBdplace;
            _self.ruleForm.introduce = data.data.base.pbIntroduce;
            _self.ruleForm.owner = data.data.base.pbOwner;
            _self.ruleForm.yzrespperson = data.data.base.pbYzrespperson;
            _self.ruleForm.yzlinkperson = data.data.base.pbYzlinkperson;

            /* 显示原有的目标任务*/
            if (_self.showType == 1) {
              console.log(data.data.task)
              _self.ruleForm1.pid = data.data.task.btProjectid,
                _self.ruleForm1.planquestcount = data.data.task.btPlanquestcount,
                _self.ruleForm1.allprice = data.data.task.btAllprice,
                _self.ruleForm1.waitsolvquest = data.data.task.btWaitsolvquest,
                _self.ruleForm1.target = data.data.task.btTarget

            }
            else if (_self.showType == 2) {
              _self.ruleForm2.pid = data.data.task.remProjectid
              _self.ruleForm2.mbjdarea = data.data.task.remMbjdarea,
                _self.ruleForm2.mbzqfam = data.data.task.remMbzqfam,
                _self.ruleForm2.planquest = data.data.task.remPlanquest,
                _self.ruleForm2.target = data.data.task.remTarget,
                _self.ruleForm2.waitquest = data.data.task.remWaitquest,
                _self.ruleForm2.wcqarea = data.data.task.remWcqarea,
                _self.ruleForm2.mbzqarea = data.data.task.remMbzqarea,
                _self.ruleForm2.wjdarea = data.data.task.remWjdarea,
                _self.ruleForm2.zcqarea = data.data.task.remZcqarea
              _self.ruleForm2.zjdarea = data.data.task.remZjdarea,
                _self.ruleForm2.wzqfam = data.data.task.remWzqfam,
                _self.ruleForm2.zzqfam = data.data.task.remZzqfam
//                _self.ruleForm2.zzqfam = data.data.task.remZzqfam
//                _self.ruleForm2.zzqfam = data.data.task.remZzqfam
            }
            else {
              _self.ruleForm3.pid = data.data.task.btPid,
                _self.ruleForm3.invest = data.data.task.btInvest,
                _self.ruleForm3.planinvest = data.data.task.btPlaninvest,
                _self.ruleForm3.status = data.data.task.btStatus,
                _self.ruleForm3.bgtime = new Date(data.data.task.btBgtime),
                _self.ruleForm3.finishtime =new Date(data.data.task.btFinishtime),
              _self.ruleForm3.planquest = data.data.task.btPlanquest,
                _self.ruleForm3.solvequest = data.data.task.btSolvequest,
                _self.ruleForm3.target = data.data.task.btTarget
            }
          }
        },
        error: function (err) {
          console.log(err)
        }
      });
    }
  };
</script>
<style>
  .el-checkbox + .el-checkbox {
    margin-left: 0;
  }

  .node-checkbox > label {
    width: 100%;
    margin: 3px 0;
    text-align: left;
  }

  .el-table th > .cell {
    text-align: center !important;
  }

  .el-table .cell {
    text-align: center !important;
  }

  .finishItem {
    margin-left: 10px;
    text-align: left !important;
  }

</style>
