<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-Layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        collapsible
        :theme="navTheme"
        v-model="collapsed"
        :trigger="null"
        width="256px"
      >
        <div class="logo">Ant Design Vue Admin</div>
        <SideMenu :theme="navTheme"></SideMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer.vue";
import SideMenu from "./SideMenu.vue";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "light";
    }
  },
  components: {
    Header,
    Footer,
    SideMenu,
    SettingDrawer
  }
};
</script>

<style lang="less" scoped>
.trigger {
  font-size: 20px;
  padding: 0px 20px;
  line-height: 64px;
  &:hover {
    background: #ffffff;
  }
}
.logo {
  color: #000000;
  line-height: 64px;
  font-weight: 600;
  font-size: 20px;
  height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark .logo {
  color: #ffffff;
  line-height: 64px;
  text-align: center;
}
</style>
