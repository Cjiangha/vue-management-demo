<template>
  <!-- table-column 姓名 年龄 性别 出生日期 地址 操作 -->
  <div class="common-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
      <el-table-column prop="sexLabel" label="性别" width="180">
      </el-table-column>
      <el-table-column prop="birth" label="出生日期" width="180">
      </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column prop="operate" label="操作">
        <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）-->
        <template slot-scope="scope">
          <el-button @click="editor(scope.row)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page.sync="config.page"
      :page-size="20"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getUser, delUser } from "../../api/data";
export default {
  props: {
    propspage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tableData: [],
      config: {
        page: 1,
        total: 200,
      },
      isOpen: true,
    };
  },
  methods: {
    async getList(page) {
      await getUser({
        page,
        // name,
      }).then(({ data: res }) => {
        this.tableData = res.list;
        this.tableData = res.list.map((item) => {
          //  第一种写法：
          item.sexLabel = item.sex === 0 ? "女" : "男";
          //  第二种写法
          // if(item.sex === 0){
          //     item.sexLabel = '女'
          // }else{
          //     item.sexLabel = '男'
          // }
          return item;
        });
        this.config.total = res.count;
      });
    },
    handleCurrentChange(val) {
      this.getList(val);
      this.config.page = val;
      return val;
    },
    del(row) {
      this.$confirm("此操作将永久删除此组件，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id;
        delUser({
          id: id,
        }).then((res) => {
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.getList(this.config.page);
        });
      });
    },
    editor(row) {
      this.$emit("edit", row);
    },
    // 存一个状态丢到子组件
  },
  created() {
    this.getList(this.config.page);
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: white;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style> 