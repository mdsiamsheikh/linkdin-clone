<template>
  <div class="bg-dark feed">
    <div class="flex-container container">
      <div class="left-sidebar"><LeftSidebar></LeftSidebar></div>

      <div class="main">
        <MiddleSidebar></MiddleSidebar>
      </div>
      <div class="right-sidebar">
        <div class="fixed">
          <div class="follow">
            <RightSidevar></RightSidevar>
          </div>
          <div>
            <img src="../asices/image/hirring.jpg" alt="" />
            <div class="mt-2">
              <li-icon
                type="linkedin-logo"
                class="global-footer-compact__linkedin-logo"
                size="14dp"
                color="brand"
                role="img"
                aria-label="LinkedIn"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 14"
                  data-supported-dps="56x14"
                  fill="currentColor"
                  class="mercado-match"
                  width="56"
                  height="14"
                  focusable="false"
                >
                  <g>
                    <path
                      class="background-mercado"
                      fill="#2777C8"
                      d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
                    ></path>
                  </g>
                </svg>
                Created by
                <a href="https://twitter.com/MDSiam52620761">Md Siam Sheikh</a>
                2022</li-icon
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSidebar from "../layouts/leftSidebar.vue";
import RightSidevar from "../layouts/rightSidevar.vue";
import MiddleSidebar from "../layouts/middleSidebar.vue";

export default {
  name: "IndexPage",
  components: { LeftSidebar, RightSidevar, MiddleSidebar },
};
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg-dark {
  background: #f3f2ef;
}
.fixed {
  position: fixed;
  bottom: 0;
  top: 5rem;
  width: 300px;
}

.flex-container {
  margin-top: 3rem;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.mt-2 {
  margin-top: 0.5rem;
}
.right-sidebar {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-right: auto;
}
.right-sidebar img {
  border-radius: 5px;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
}
.right-sidebar a {
  color: #333;
}
.main {
  margin-right: 2rem;
  margin-bottom: 1rem;
}
.right-sidebar a:hover {
  text-decoration: underline;
  color: #0a66c2;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

@media screen and (max-width: 800px) {
  .flex-container {
    grid-template-columns: 1fr;
  }
  .main {
    width: 100%;
  }
}
</style>
