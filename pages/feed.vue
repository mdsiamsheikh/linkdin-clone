<template>
  <div class="item-container">
    <LeftSidebar></LeftSidebar>
    <MiddleSidebar></MiddleSidebar>
    <RightSidevar></RightSidevar>
  </div>
</template>

<script>
import LeftSidebar from "../components/leftSidebar.vue";
import RightSidevar from "../components/rightSidevar.vue";
import MiddleSidebar from "../components/middleSidebar.vue";

export default {
  name: "IndexPage",
  components: { LeftSidebar, RightSidevar, MiddleSidebar },
};
</script>
<style>
.item-container {
  margin-top: 85px !important;
  display: grid;
  grid-template-columns: 20% 50% 27%;
  width: 84%;
  max-width: 1200px;
  margin: 88px auto;
  gap: 2rem;
  align-content: center;
}

@media (max-width: 765px) {
  .item-container {
    display: inline-block;
  }
}

@media (max-width: 765px) {
  .item-container {
    display: flex;
    align-content: center;
  }
}
</style>
