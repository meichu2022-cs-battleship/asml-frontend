<template>
  <div>
    <p class="text-center text-capitalize fs-1 fw-bold" style="color: #0b1a8c">
      2022 Meichu Hackathon
    </p>
    <p class="text-secondary">
      ASML作為全球頂尖半導體設備商，通常被定位為硬體公司，然而實際上我們擁有全世界規模最大、最先進的軟體團隊之一，若沒有軟體創新，ASML
      的微影系統幾乎不可能在持續微縮的尺寸下生產晶片。
      <br />ASML 全球有超過
      3,000位軟體工程師致力於全方位的軟體產品，推動現代化半導體廠，實踐摩爾定律。
      微影系統本質上是一個投影系統，利用光線穿透印有電路圖的光罩，在矽晶片上投印出電路圖。<br />
      ASML 提供全方位的微影技術解決方案（lithographic
      solution），量測可以快速測量矽晶圓上的成像表現，並及時回傳數據給微影系統，以確保在量產晶片的狀態下能維持穩定的微影效能。
      我們的檢測系統則有助於在數十億個圖案中，定位和分析單個晶片缺陷。<br />歡迎大家一起微影創新，改變世界！
    </p>
    <a
      href="http://localhost:8080/Contact"
      class="btn text-light fw-bold px-sm-4 py-sm-3 Stars"
      >Start Detect</a
    >
  </div>
</template>

<script>
export default {
  name: 'lefthead'
}
</script>

<style scoped>
div {
  padding: 4px;
}

p:first-child {
  color: #667eea;
}

p {
  text-align: justify;
  line-height: 1.6;
  padding: 20px;
}
.Stars {
  background-color: #114287;
}
</style>
