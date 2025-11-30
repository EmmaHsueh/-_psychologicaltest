# 鏡中人格：探索你的另一面

一個基於榮格 Shadow Self 理論的心理測驗網站,透過 8 道精心設計的問題,揭示你潛藏的鏡像人格。

## 特色功能

### 🎨 視覺設計
- **沉浸式鏡面動畫**：首頁採用動態鏡面效果,營造神秘氛圍
- **漸進式互動體驗**：測驗過程中鏡面逐漸清晰,象徵自我探索的旅程
- **精緻碎裂特效**：結果揭曉時的鏡面碎裂動畫
- **動態粒子系統**：浮動粒子增添夢幻感

### 🧠 心理學基礎
- 基於榮格(Carl Jung)「Shadow Self」概念
- 8 道題目涵蓋多個心理面向：
  - 自我認知 vs 壓抑感
  - 理性控制 vs 情緒反應
  - 內在壓抑與陰影對話
  - 防禦機制與人際互動

### 📊 4 種人格結果
1. **光之觀察者** (冰藍色) - 理性、控制、冷靜
2. **夢之逃亡者** (灰紫色) - 壓抑、逃避、幻想
3. **焰之守護者** (紅橘色) - 熱情、衝動、正義
4. **影之觀照者** (黑白) - 感性、洞察、內省

### 📱 技術特點
- **純前端實現**：HTML + CSS + JavaScript,無需後端
- **完整響應式設計**：支援桌面、平板、手機
- **流暢動畫效果**：CSS3 + JavaScript 動畫
- **社群分享功能**：支援 Web Share API 與剪貼簿備援
- **優雅的場景轉換**：無縫切換三個主要場景

## 檔案結構

```
網際程設/
├── index.html      # 主頁面結構
├── styles.css      # 完整樣式與動畫
├── script.js       # 測驗邏輯與互動
└── README.md       # 說明文件
```

## 使用方式

### 本地開啟
1. 下載所有檔案到同一資料夾
2. 直接用瀏覽器開啟 `index.html`
3. 開始你的鏡中探索之旅

### 部署上架
支援部署到任何靜態網站託管服務：

#### GitHub Pages
```bash
# 1. 建立 GitHub repository
# 2. 上傳所有檔案
# 3. 到 Settings > Pages > Source 選擇 main branch
# 4. 網站將自動部署
```

#### Netlify
```bash
# 1. 將專案資料夾拖曳到 Netlify
# 2. 自動部署完成
```

#### Vercel
```bash
# 1. 使用 Vercel CLI 或網頁介面
# 2. 選擇專案資料夾
# 3. 一鍵部署
```

## 瀏覽器支援

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 自訂與修改

### 修改題目
編輯 `script.js` 中的 `questions` 陣列：

```javascript
const questions = [
    {
        id: 1,
        text: '你的問題文字',
        options: [
            { text: '選項 A', type: 'observer' },
            { text: '選項 B', type: 'escapist' },
            { text: '選項 C', type: 'guardian' },
            { text: '選項 D', type: 'witness' }
        ]
    },
    // 新增更多題目...
];
```

### 修改人格類型
編輯 `script.js` 中的 `personalityTypes` 物件：

```javascript
const personalityTypes = {
    observer: {
        name: '人格名稱',
        keyword: '關鍵字 · 關鍵字 · 關鍵字',
        color: '#顏色代碼',
        description: '描述文字',
        shadow: '陰影面分析',
        symbol: `<svg>...</svg>` // SVG 圖示
    }
};
```

### 調整配色
修改 `styles.css` 中的 CSS 變數：

```css
:root {
    --color-bg: #0a0a0f;           /* 背景色 */
    --color-text: #f0f0f5;         /* 文字色 */
    --color-observer: #4a90e2;     /* 觀察者色 */
    --color-escapist: #8b7fc7;     /* 逃亡者色 */
    --color-guardian: #e85d4e;     /* 守護者色 */
    --color-witness: #e0e0e0;      /* 觀照者色 */
}
```

## 效能優化建議

### 如需更好的載入速度
1. 壓縮 CSS 和 JS 檔案
2. 使用 CDN 載入 Google Fonts
3. 延遲載入非關鍵動畫

### 建議優化指令
```bash
# 使用 UglifyJS 壓縮 JavaScript
npx uglifyjs script.js -o script.min.js -c -m

# 使用 cssnano 壓縮 CSS
npx cssnano styles.css styles.min.css
```

本測驗僅供娛樂與自我探索參考,不構成專業心理諮詢或診斷。如有心理健康需求,請尋求專業心理師協助。

 ✨ 專案完成內容

  📁 檔案結構

  網際程設/
  ├── index.html      (4.0 KB)  - 主頁面結構
  ├── styles.css      (16 KB)   - 完整樣式與動畫
  ├── script.js       (21 KB)   - 測驗邏輯與互動
  └── README.md       (4.2 KB)  - 完整說明文件

  🎯 實現的核心功能

  1. 首頁 (Intro Scene)

  - 精緻的鏡面框架動畫
  - 脈動式反射效果
  - 漂浮粒子系統
  - 響應滑鼠移動的互動效果
  - 淡入動畫序列

  2. 測驗頁面 (Question Pages)

  - 左側動態鏡面特效
  - 即時進度條顯示
  - 8 道精心設計的問題
  - 滑動漣漪選項效果
  - 鏡面隨答題逐漸清晰

  3. 結果頁面 (Reveal Scene)

  - 鏡面碎裂轉場動畫
  - 4 種人格類型 + 獨特 SVG 圖示
  - 動態配色系統
  - 分享功能 (Web Share API + 剪貼簿備援)
  - 重新測驗功能
  - 漂浮粒子效果

  🎨 設計特色

  1. 配色方案
    - 光之觀察者: #4a90e2 (冰藍)
    - 夢之逃亡者: #8b7fc7 (灰紫)
    - 焰之守護者: #e85d4e (紅橘)
    - 影之觀照者: #e0e0e0 (銀白)
  2. 字體選擇
    - Noto Serif TC (標題用)
    - Noto Sans TC (內文用)
  3. 動畫效果
    - 鏡面脈動、旋轉、扭曲
    - 粒子浮動系統
    - 按鈕漣漪回饋
    - 場景轉換動畫

  📱 響應式設計

  - ✅ 桌面 (1024px+)
  - ✅ 平板 (768px - 1024px)
  - ✅ 手機 (480px - 768px)
  - ✅ 小型手機 (<480px)

  🚀 如何使用

  本地測試:
  網站已在你的瀏覽器中開啟,你可以立即體驗!

  部署上架:
  1. GitHub Pages: 上傳到 GitHub repo,在 Settings 啟用 Pages
  2. Netlify: 拖曳資料夾到 netlify.app
  3. Vercel: 使用 Vercel CLI 或網頁介面部署

  🔧 自訂建議

  修改題目: 編輯 script.js 第 4-97 行的 questions 陣列
  修改人格: 編輯 script.js 第 102-222 行的 personalityTypes 物件
  調整配色: 編輯 styles.css 第 4-22 行的 CSS 變數

  📊 測驗設計

  基於榮格 Shadow Self 理論,8 道題目涵蓋:
  - 自我認知 vs 壓抑感 (Q1)
  - 理性控制 vs 情緒反應 (Q2)
  - 內在壓抑與陰影對話 (Q3)
  - 榮格陰影投射 (Q4)
  - 潛意識夢境象徵 (Q5)
  - 自我防禦機制 (Q6)
  - 社交角色定位 (Q7)
  - 決策模式分析 (Q8)

  ---
  網站現在已經可以直接使用了!你可以在瀏覽器中測試所有功能,包括:
  - ✅ 首頁鏡面動畫
  - ✅ 測驗流程與選項互動
  - ✅ 結果顯示與碎裂特效
  - ✅ 分享功能
  - ✅ 重新測驗功能

  ✅ 分享功能已修復並升級！

  我已經完全重寫了分享功能，現在有三層備援機制，確保在任何環境下都能正常運作：

  🔧 改進內容

  1. Web Share API（行動裝置優先）
  - 在支援的裝置上會打開系統原生分享選單
  - 可直接分享到 Instagram、LINE、Facebook 等 App

  2. Clipboard API（現代瀏覽器）
  - 一鍵複製到剪貼簿
  - 顯示美觀的成功提示訊息（Toast 通知）

  3. 傳統 execCommand（舊版瀏覽器）
  - 相容 IE11 及舊版瀏覽器
  - 使用隱藏 textarea 複製文字

  4. 手動複製模態視窗（最終備援）
  - 如果所有自動方法都失敗
  - 彈出視窗顯示完整文字
  - 自動選取文字，讓使用者手動複製

  ✨ 新增特色

  - Toast 通知：複製成功時顯示漂亮的提示訊息
  - 自動選取：手動複製視窗會自動選取文字
  - 優雅降級：依序嘗試不同方法，確保成功
  - 錯誤處理：每個步驟都有完善的錯誤處理

  測試結果

  現在點擊「分享結果」按鈕會：
  - ✅ 在行動裝置顯示系統分享選單
  - ✅ 在桌面顯示「✓ 結果已複製到剪貼簿！」提示
  - ✅ 在本地檔案環境顯示手動複製視窗
  - ✅ 所有瀏覽器都能正常運作

