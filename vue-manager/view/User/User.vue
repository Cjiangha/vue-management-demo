<template>
  <div>
    <el-dialog
      :title="operateType === 'add' ? '新增' : '更新'"
      :visible.sync="isShow"
      append-to-body
    >
      <common-form
        :form-label="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      >
      </common-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>

    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <common-form
        :form-label="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form2"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </common-form>
    </div>
    <common-table
      @edit="editUser"
      @changePage="getList"
      @del="deleteUser"
      :config="this.config"
      :tableData="tableData"
      :tableLabel="tableLabel"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from "../../src/components/CommonForm.vue";
import CommonTable from "../../src/components/CommonTable.vue";
import debounce from "../../config/VueDebounce"; //防抖

import { getUser, delUser } from "../../api/data";


export default {
  data() {
    return {
      operateType: "add",
      isShow: false,
      /*
        传入数据 
        {
            model
            label
            type
        }
        特殊:select 控件
          {
          model
          label
          type:'select'
          opts: [
            {
              label
              value
            },
            {
              label,
              value
            },
          ],
        },
      */
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      //form submit Object message.
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      //搜索
      searchForm: {
        keyword: "",
      },
      config: {
        page: 1,
        total: 200,
      },
      tableData: [], //拿到的 Table数据
      tableLabel: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        },
        {
          prop: 'sexLabel',
          label: '性别',
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        },
      ],
    };
  },
  methods: {
    confirm: debounce(async function () {
      {
        if (this.operateType === "edit") {
          // 编辑
          this.$http.post("/user/edit", this.operateForm).then((res) => {
            this.isShow = false;
          });
        } else if (this.operateType === "add") {
          //增加
          await this.$http.post("/user/add", this.operateForm).then((res) => {
            this.isShow = false;
          });
        }
        // await this.$children[3].getList(1);
        await this.getList();
      }
    }, 500),

    editUser(row) {
      this.isShow = true;
      this.operateType = "edit";
      this.operateForm = row;
      // 重新渲染
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = {};
      // 重新渲染
    },
    deleteUser(row) {
      var that = this;
      this.$confirm("此操作将永久删除此组件，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let id = row.id;
        delUser({
          id: id,
        }).then((res) => {
          this.$message({
            type: "success",
            message: "删除成功",
          });
          that.getList(this.config.page).bind(this);
        });
      });
    },
    async getList() {
      await getUser({
        page: this.config.page,
        // name,
      }).then(({ data: res }) => {
        
        this.tableData = res.list;
        this.tableData = res.list.map((item) => {
          item.sexLabel = item.sex === 0 ? "女" : "男";
          return item;
        });
        this.config.total = res.count;
      });
    },
  },
  created() {
    this.getList();
  },
  components: {
    CommonForm,
    CommonTable,
  },
};
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>