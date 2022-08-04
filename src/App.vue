<template>
  <Navbar />
  <div class="container my-4">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {Navbar}
}
</script>