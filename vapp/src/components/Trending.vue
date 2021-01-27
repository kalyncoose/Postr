<template>
  <div id="Trending">
    <h3 class="md-title" style="color:white;font-weight:600;margin:5px 0 10px 10px;">What's trending</h3>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#Crypto</span>
      <span class="description">Here is the latest trends about crypto.</span>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#TrumpOut</span>
      <span class="description">Donald Trump to leave office next week.</span>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#Kishimoto</span>
      <span class="description">Another trendy thing about Japan.</span>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#SeductiveSunday</span>
      <span class="description">People are wondering why this is trending.</span>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#BidenHarrisInauguration</span>
      <span class="description">1,4980 posts</span>
    </div>
    <div class="hr-horiz" />
    <div class="content">
      <span class="tag">#ETH</span>
      <span class="description">Ethereum is on a bull run.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trending"
}
</script>

<style scoped>

#Trending {
  background: rgba(100,100,100,0.15) !important;
  border-radius:15px;
  width:100%;
  height:100%;
  text-align:left;
  padding:5px;
}

.hr-horiz {
  border-bottom:1px solid rgba(100,100,100,0.3);
  width:100%;
}

.content {
  display:grid;
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
}

</style>