<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

/* You can add global styles to this file, and also import other style files */
body,
html {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 !important;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
}

.flex {
  display: flex !important;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-c-m {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  border-radius: 50%;
}

//--------------- button
.app-btn {
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  padding: 0px 16px;
}

.app-btn-small {
  height: 32px;
  font-size: 13px;
}

.app-btn-medium {
  height: 40px;
  font-size: 14px;
  font-weight: 500;
}

.app-btn-big {
  height: 48px;
  font-size: 17px;
  font-weight: 600;
}

.btn-circle {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-circle:focus {
  outline: none;
}

.btn-circle-big {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-circle-big:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn-circle-big:focus {
  outline: none;
}

.btn-circle-sm {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-circle-sm:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.btn-circle-sm:focus {
  outline: none;
}
.btn-oval {
  border-radius: 20px;
}

.btn-green {
  background-color: #00796b;
  color: #ffffff;
}

.btn-green:hover {
  -webkit-filter: brightness(113%);
  filter: brightness(113%);
}

.btn-green:focus {
  outline: none;
}

.btn-white {
  color: #00796b;
  background-color: #f5faf9;
}

.btn-white:hover {
  color: #004d40;
  background-color: #e1efee;
}

.btn-white:focus {
  outline: none;
}

.btn-disabled {
  opacity: 0.6;
  pointer-events: none;
}

.not-available {
  background-color: #c5221f;
  border: solid 1px #c5221f;
  color: #ffffff;
}

.not-available:hover {
  background-color: #983a38;
  border: solid 1px #983a38;
}


//loading 
.gradient {
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
    
    position: relative;
    
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}
</style>
