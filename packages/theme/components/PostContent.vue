<template>
 <Content class="md-content markdown-body el-icon-s-promotion" id="article-container" /> 
</template>

<script>
export default {

}
</script>

<style scoped>
.md-content {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei, Source Han Sans SC,
    Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC,
    WenQuanYi Micro Hei, SimSun, sans-serif;
}
/* markdown样式更改 取消#符号 */
.markdown-body >>> .header-anchor {
  display: none;
}
#article-container.md-content >>> h1 {
  color: #344c67;
}
#article-container.md-content >>> h2,
#article-container.md-content >>> h3,
#article-container.md-content >>> h4,
#article-container.md-content >>> h5,
#article-container.md-content >>> h6 {
  color: #344c67;
  border-bottom: none;
}
#article-container.md-content >>> h1::before,
#article-container.md-content >>> h2::before,
#article-container.md-content >>> h3::before,
#article-container.md-content >>> h4::before,
#article-container.md-content >>> h5::before,
#article-container.md-content >>> h6::before {
  color: #f47466;
  content: '\e7ba';
  line-height: 1;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
#article-container.md-content::before {
  content: '';
}
.md-content >>> .footnotes-sep {
  background-color: transparent;
  /* border-bottom: 0.3rem dashed #a0a0a0; */
}
.md-content >>> .custom-tip-block {
  padding: 8px 16px;
  border-radius: 4px;
  margin: 20px 0;
  font-weight: 600;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.md-content >>> .custom-tip-block>p{
  font-weight: 400;
}
.md-content >>> .error {
  border-left: 5px solid #fe6c6f;
  background-color: #fff6f7;
}
.md-content >>> .tip {
  border-left: 5px solid #409EFF;
  background-color: #d9ecff;
}
.md-content >>> .warning {
  border-left: 5px solid #E6A23C;
  background-color: #faecd8;
}
.md-content >>> .info {
  border-left: 5px solid #909399;
  background-color: #e9e9eb;
}
.md-content >>> .success {
  border-left: 5px solid #67C23A;
  background-color: #e1f3d8;
}
  
</style>
