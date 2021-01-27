<template>
  <div id="Base">
    <div class="md-layout home-panel">
      <div class="md-layout-item">
        <Menu />
        <div id="Account">
          <Account />
        </div>
      </div>
      <div class="hr-vert home-panel" />
      <div class="md-layout-item">
        <Home :contract-name="contract_name" :method="method" :method-args="method_args" />
      </div>
      <div class="hr-vert home-panel" />
      <div class="md-layout-item">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Home from "@/components/Home";
import Sidebar from "@/components/Sidebar";
import Account from "@/components/Account";

export default {
  name: "Base",
  components: {
    Menu,
    Home,
    Sidebar,
    Account
  },
  data: () => {
    return {
      contract_name: 'Post',
      method: 'post',
      method_args: ['x']
    }
  }
}
</script>

<style scoped>

#Base {
  height:100vh;
  overflow:hidden;
}

.home-panel {
  height:100vh;
}

.hr-vert {
  height:100%;
  width:1px;
  background-color:rgba(100,100,100,0.15);
  /*background-color:rgb(56, 68, 77);*/
  /*background-color:#34495e;*/
}

#Account {
  width:inherit;
  margin-left:18%;
  margin-bottom:5px;
  position:absolute;
  bottom:0;
}

</style>