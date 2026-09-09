# 福岡旅箱 · Fukuoka Travel Toolbox

2026/09/19–09/25 福岡七天六夜家族旅遊 PWA，參考 [toolbox-in-seoul](https://github.com/michael1874888/toolbox-in-seoul) 的旅遊工具箱概念製作。

## MVP 功能

- 7 天行程與每日時間軸
- 第 3 天、第 4 天各自提供 A/B 方案
- A 方案預設顯示，切換選擇會保存在瀏覽器
- 航班、住宿、博多站行李寄放資訊
- 出發前 checklist，完成狀態會保存在瀏覽器
- 日圓／台幣概算工具
- Google Maps、官方交通與景點資訊快速連結
- PWA manifest 與 service worker，支援加入主畫面與基本離線瀏覽

## 本機預覽

這是一個不需要建置工具的靜態 PWA。可在此資料夾執行：

```bash
python3 -m http.server 4173
```

接著開啟 <http://localhost:4173>。

## 方案設計

- Day 3 A：博多舊市區
- Day 3 B：海之中道
- Day 4 A：公共交通前往二見ヶ浦
- Day 4 B：租車／包車串連岐志、野北、二見ヶ浦

兩天的方案是獨立狀態，互不覆蓋；預設皆為 A。
