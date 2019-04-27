<template>
  <div style="width: 256px">
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      :theme="theme"
    >
      <template v-for="item in list">
        <a-menu-item :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <!-- <sub-menu
          v-else
          :menu-info="item"
          :key="item.key"
        /> -->
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
// import SubMenu from './SubMenu'
export default {
  // components: {
  //   'sub-menu': SubMenu,
  // },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      list: [
        {
          key: "1",
          title: "Option 1"
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1" }]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
