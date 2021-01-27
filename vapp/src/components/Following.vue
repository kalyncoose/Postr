<template>
  <div id="Following">
    <h3 class="md-title" style="color:white;font-weight:600;margin:5px 0 10px 10px;">Who to follow</h3>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">@David</span>
      <span class="description">Content Creator, Gamer</span>
      <md-button class="md-raised md-dense follow-btn">Follow</md-button>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">@Biden</span>
      <span class="description">POTUS'21</span>
      <md-button class="md-raised md-dense follow-btn">Follow</md-button>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">@YouTube</span>
      <span class="description">Official Google Account</span>
      <md-button class="md-raised md-dense follow-btn">Follow</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Following"
}
</script>

<style scoped>

#Following {
  background: rgba(100,100,100,0.15) !important;
  border-radius:15px;
  width:100%;
  height:100%;
  text-align:left;
  margin-top:15px;
  padding:5px;
}

.hr-horiz {
  border-bottom:1px solid rgba(100,100,100,0.3);
  width:100%;
}

.content {
  display:flex;
  width:100%;
  padding:10px;
}

.content:hover {
  background:rgba(255,255,255,0.05);
  border-radius:15px;
}

.tag {
  color:white;
  font-weight:bold;
  font-size:1.1em;
}

.description {
  color:rgba(255,255,255,0.5);
  margin-left:10px;
}

.follow-btn {
  border-radius:30px;
  box-shadow:none;
  color:#1DA1F2 !important;
  background:none !important;
  border:1px solid #1DA1F2;
  font-weight:bold;
  font-size:1em;
  text-transform:none;
  margin-left:auto;
}

</style>