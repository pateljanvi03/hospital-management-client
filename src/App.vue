<template class="h-full bg-gray-100">
  <div id="app" class="h-full bg-gray-100">
    <div>
      <SideBar v-if="$route.path !== '/login'"></SideBar>
      <TopBar v-if="$route.path !== '/login'"></TopBar>
      <div v-if="$route.path !== '/login'" class="md:pl-64 flex flex-col">
        <main class="flex-1 " >
          <div class="py-6 px-12 bg-gray-100">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";

export default {
  components: {
    SideBar,
    TopBar
  }
}
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>
