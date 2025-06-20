<template>
<div :style='{"width":"1000px","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="课程名称" prop="kechengmingcheng">
            <el-select  @change="kechengmingchengChange" v-model="ruleForm.kechengmingcheng" placeholder="请选择课程名称">
              <el-option
                  v-for="(item,index) in kechengmingchengOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="学期" prop="xueqi">
            <el-input v-model="ruleForm.xueqi" 
                placeholder="学期" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="年限" prop="nianxian">
            <el-input v-model="ruleForm.nianxian" 
                placeholder="年限" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="成绩" prop="chengji">
            <el-input v-model="ruleForm.chengji" 
                placeholder="成绩" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="学号" prop="xuehao">
            <el-select  @change="xuehaoChange" v-model="ruleForm.xuehao" placeholder="请选择学号">
              <el-option
                  v-for="(item,index) in xuehaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="学生姓名" prop="xueshengxingming">
            <el-input v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="教师工号" prop="jiaoshigonghao">
            <el-select  @change="jiaoshigonghaoChange" v-model="ruleForm.jiaoshigonghao" placeholder="请选择教师工号">
              <el-option
                  v-for="(item,index) in jiaoshigonghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"80%","padding":"10px","margin":"0 2% 10px","display":"inline-block"}' label="教师姓名" prop="jiaoshixingming">
            <el-input v-model="ruleForm.jiaoshixingming" 
                placeholder="教师姓名" clearable ></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","backgroundColor":"#fff","color":"rgba(255, 255, 255, 1)","backgroundImage":"url(http://codegen.caihongy.cn/20221018/f6c1f39bff574b6cb2564bbedb76b604.png)","outline":"none","borderRadius":"4px","width":"128px","lineHeight":"40px","fontSize":"14px","backgroundSize":"100% 100%","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","backgroundColor":"#fff","color":"#fff","backgroundImage":"url(http://codegen.caihongy.cn/20221018/71c4fd01e19542dda750b9c9523c11bd.png)","outline":"none","borderRadius":"4px","width":"128px","lineHeight":"40px","fontSize":"14px","backgroundSize":"100% 100%","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          kechengmingcheng: '',
          xueqi: '',
          nianxian: '',
          chengji: '',
          xuehao: '',
          xueshengxingming: '',
          jiaoshigonghao: '',
          jiaoshixingming: '',
        },
        kechengmingchengOptions: [],
        xuehaoOptions: [],
        jiaoshigonghaoOptions: [],
        rules: {
          kechengmingcheng: [
          ],
          xueqi: [
          ],
          nianxian: [
          ],
          chengji: [
            { required: true, message: '成绩不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          xuehao: [
          ],
          xueshengxingming: [
          ],
          jiaoshigonghao: [
          ],
          jiaoshixingming: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='kechengmingcheng'){
              this.ruleForm.kechengmingcheng = obj[o];
              continue;
            }
            if(o=='xueqi'){
              this.ruleForm.xueqi = obj[o];
              continue;
            }
            if(o=='nianxian'){
              this.ruleForm.nianxian = obj[o];
              continue;
            }
            if(o=='chengji'){
              this.ruleForm.chengji = obj[o];
              continue;
            }
            if(o=='xuehao'){
              this.ruleForm.xuehao = obj[o];
              continue;
            }
            if(o=='xueshengxingming'){
              this.ruleForm.xueshengxingming = obj[o];
              continue;
            }
            if(o=='jiaoshigonghao'){
              this.ruleForm.jiaoshigonghao = obj[o];
              continue;
            }
            if(o=='jiaoshixingming'){
              this.ruleForm.jiaoshixingming = obj[o];
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.jiaoshigonghao!=''&&json.jiaoshigonghao){
                this.ruleForm.jiaoshigonghao = json.jiaoshigonghao
            }
            if(json.jiaoshixingming!=''&&json.jiaoshixingming){
                this.ruleForm.jiaoshixingming = json.jiaoshixingming
            }
          }
        });
        this.$http.get('option/kechengxinxi/kechengmingcheng', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.kechengmingchengOptions = res.data.data;
          }
        });
        this.$http.get('option/xuesheng/xuehao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.xuehaoOptions = res.data.data;
          }
        });
        this.$http.get('option/jiaoshi/jiaoshigonghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.jiaoshigonghaoOptions = res.data.data;
          }
        });
      },
      // 下二随
      kechengmingchengChange () {
        this.$http.get('follow/kechengxinxi/kechengmingcheng?columnValue=' + this.ruleForm.kechengmingcheng, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.xueqi){
              this.ruleForm.xueqi = res.data.data.xueqi
            }
            if(res.data.data.nianxian){
              this.ruleForm.nianxian = res.data.data.nianxian
            }
            if(res.data.data.chengji){
              this.ruleForm.chengji = res.data.data.chengji
            }
            if(res.data.data.xueshengxingming){
              this.ruleForm.xueshengxingming = res.data.data.xueshengxingming
            }
            if(res.data.data.jiaoshixingming){
              this.ruleForm.jiaoshixingming = res.data.data.jiaoshixingming
            }
          }
        });
      },
      // 下二随
      xuehaoChange () {
        this.$http.get('follow/xuesheng/xuehao?columnValue=' + this.ruleForm.xuehao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.xueqi){
              this.ruleForm.xueqi = res.data.data.xueqi
            }
            if(res.data.data.nianxian){
              this.ruleForm.nianxian = res.data.data.nianxian
            }
            if(res.data.data.chengji){
              this.ruleForm.chengji = res.data.data.chengji
            }
            if(res.data.data.xueshengxingming){
              this.ruleForm.xueshengxingming = res.data.data.xueshengxingming
            }
            if(res.data.data.jiaoshixingming){
              this.ruleForm.jiaoshixingming = res.data.data.jiaoshixingming
            }
          }
        });
      },
      // 下二随
      jiaoshigonghaoChange () {
        this.$http.get('follow/jiaoshi/jiaoshigonghao?columnValue=' + this.ruleForm.jiaoshigonghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.xueqi){
              this.ruleForm.xueqi = res.data.data.xueqi
            }
            if(res.data.data.nianxian){
              this.ruleForm.nianxian = res.data.data.nianxian
            }
            if(res.data.data.chengji){
              this.ruleForm.chengji = res.data.data.chengji
            }
            if(res.data.data.xueshengxingming){
              this.ruleForm.xueshengxingming = res.data.data.xueshengxingming
            }
            if(res.data.data.jiaoshixingming){
              this.ruleForm.jiaoshixingming = res.data.data.jiaoshixingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('xueshengchengji/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('xueshengchengji/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('xueshengchengji/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('xueshengchengji/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: center;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 2px solid #2e61e1;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  background: #BFD2FC;
	  width: 100%;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 2px solid #2e61e1;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  background: #BFD2FC;
	  width: 100%;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 2px solid #2e61e1;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  background: #BFD2FC;
	  width: 100%;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed rgba(64, 158, 255, 1);
	  cursor: pointer;
	  border-radius: 6px;
	  color: rgba(64, 158, 255, 1);
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed rgba(64, 158, 255, 1);
	  cursor: pointer;
	  border-radius: 6px;
	  color: rgba(64, 158, 255, 1);
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed rgba(64, 158, 255, 1);
	  cursor: pointer;
	  border-radius: 6px;
	  color: rgba(64, 158, 255, 1);
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 2px solid #2e61e1;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  background: #BFD2FC;
	  width: 100%;
	  font-size: 14px;
	  height: 120px;
	}
</style>
