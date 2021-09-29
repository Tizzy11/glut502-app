<template>
  <div>
    <h2 class="h2-back" @click="switchTo('/HomePage')"> < </h2>
    <el-card class="box-card" >
<!--      <h4 class="h4-eventTitle"></h4>-->
<!--      <p class="p-eventDetail"></p>-->
      <h3 class="p-roll">8A第四周宿舍排名</h3>
    </el-card>
    <br>
    <el-card class="box-card" style="height: 550px">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="排名"
          width="110">
        </el-table-column>
        <el-table-column
          prop="name"
          label="宿舍"
          width="110">
        </el-table-column>
        <el-table-column
          prop="address"
          label="分数">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HonourRoll",
  methods: {
    clickItem: function (path) {
      this.$router.push(path);
    },
    switchTo(path) {
      // console.log(this.$router)
      this.$router.replace(path)
    }
  },
  data() {
    return {
      tableData: [{
        date: '1',
        name: '8A502',
        address: '96'
      }, {
        date: '2',
        name: '8A606',
        address: '92'
      }, {
        date: '3',
        name: '8A106',
        address: '90'
      }, {
        date: '4',
        name: '8A201',
        address: '87'
      },{
        date: '5',
        name: '8A307',
        address: '84'
      },{
        date: '6',
        name: '8A503',
        address: '83'
      },{
        date: '7',
        name: '8A405',
        address: '80'
      },{
        date: '8',
        name: '8A201',
        address: '79'
      },{
        date: '9',
        name: '8A105',
        address: '77'
      },{
        date: '10',
        name: '8A603',
        address: '75'
      },{
        date: '11',
        name: '8A208',
        address: '74'
      },{
        date: '12',
        name: '8A604',
        address: '71'
      },{
        date: '13',
        name: '8A406',
        address: '70'
      },{
        date: '14',
        name: '8A507',
        address: '68'
      },{
        date: '15',
        name: '8A402',
        address: '65'
      }]
    }
  }
}
</script>

<style scoped>
.h2-back{
  width: 25px;
  margin-top: 0;
}
.p-roll{
  text-align: center;
}
.box-card{
  height:100%;
  overflow:auto;
}
</style>
