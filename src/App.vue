<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // 调用API从本地缓存中获取数据
    const logs = this.getStorageSync('logs') || []
    logs.unshift(Date.now())
    this.setStorageSync('logs', logs)
  }
}
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

/******reset********/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
}
body{
  font-family:Arial,"STHeiti", Helvetica, sans-serif;
  background:#efefef;
  font-size:14px;
  color:#444!important;
  width:100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}


table{
  border-collapse:collapse;
  border-spacing:0
}
fieldset, img{
  border:0
}
legend{
  display:none
}
// address, caption, cite, code, dfn, em, strong, th, var{
//   font-style:normal;
//   font-weight:normal
// }
ol, ul{
  list-style:none
}
caption, th{
  text-align:left
}
h1, h2, h3, h4, h5, h6{
  font-size:100%;
  font-weight:normal
}
q:before, q:after{
  content:''
}
abbr, acronym{
  border:0
}
a{
     text-decoration:none;
}
html{-webkit-text-size-adjust:none;width:100%;height:100% } /*????iphone??safari????????????*/
input[type="text"], input[type="button"], input[type="submit"], input[type="search"]{
  -webkit-appearance:none;
  border-radius:0;
}

html, body {
    height: 100%;
    width: auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%!important;
    text-size-adjust: 100%!important;
  }
  .bg{
  width: 100%;
  height: 100%;
}
</style>
