# Porter Coffee 3 都市咖啡館網站

一個文青風格的多頁咖啡店網站，使用 HTML5、Tailwind CSS 和 Vanilla JavaScript 開發。

## Project Profile
- **Technology Profile**: Profile C (靜態簡易網頁)
- **技術棧**: HTML5 + TailwindCSS + Vanilla JavaScript

## 功能特色

- 🎨 文青風格設計（Literary & Artistic）
- 📱 完全響應式設計
- ⚡ 平滑滾動與動畫效果
- ♿ WCAG AA 無障礙標準
- 🎯 多頁式架構（7 個頁面）
- 🖼️ SVG 圖標
- 🎨 自定義設計系統（咖啡棕色調）

## 設計系統

### 色彩配置

- **主色調**: 咖啡棕色系 (#6F4E37)
- **次要色**: 奶油與暖色調 (#F5E6D3)
- **強調色**: 暖米色 (#D4A574)、塵粉色 (#E8B4B8)

### 字體配對

- **標題**: Syne（獨特個性）
- **內文**: Manrope（易讀性）

### 視覺特色

- 柔和圓角（rounded-2xl, rounded-3xl）
- 細緻陰影（soft shadows）
- 溫暖漸層（warm gradients）
- 大量留白（generous whitespace）

## 頁面架構

1. **首頁** (`index.html`) - Hero-Centric 設計
2. **關於我們** (`about.html`) - 品牌故事敘事
3. **菜單** (`menu.html`) - Grid 佈局商品展示
4. **空間展示** (`space.html`) - Gallery 照片牆
5. **部落格列表** (`blog.html`) - 文章卡片
6. **部落格詳情** (`blog-detail.html`) - 優質閱讀體驗
7. **聯絡我們** (`contact.html`) - 表單 + 地圖

## 技術棧

- **HTML5**: 語義化結構
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Google Fonts**: Syne + Manrope
- **Vanilla JavaScript**: 輕量級交互

## 本地運行

### 開發模式

```bash
# 安裝依賴
npm install

# 啟動 Tailwind CSS 監聽模式
npm run dev
```

然後在瀏覽器中打開 `index.html` 文件。

### 生產建置

```bash
# 編譯並壓縮 CSS
npm run build
```

## 目錄結構

```
city_coffee3/
├── index.html              # 首頁
├── about.html              # 關於我們
├── menu.html               # 菜單
├── space.html              # 空間展示
├── blog.html               # 部落格列表
├── blog-detail.html        # 部落格文章詳情
├── contact.html            # 聯絡我們
├── assets/
│   ├── css/
│   │   └── tailwind.css    # 編譯後的 Tailwind CSS
│   ├── js/
│   │   ├── main.js         # 全域 JavaScript
│   │   └── navigation.js   # 導航功能
│   ├── images/             # 圖片資源
│   └── icons/              # 圖標
├── styles/
│   └── tailwind.css        # Tailwind 源文件
├── tailwind.config.js      # Tailwind 配置
├── package.json
└── README.md
```

## 功能模組

### 導航功能 (`navigation.js`)

- 滾動時導航列效果
- 手機版選單
- 當前頁面連結高亮
- 平滑滾動

### 全域功能 (`main.js`)

- 淡入動畫觀察器
- 圖片延遲載入
- 表單驗證
- 回到頂部按鈕

## 瀏覽器支援

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 無障礙性

- WCAG AA 標準
- 鍵盤導航支援
- 螢幕閱讀器友善
- 顏色對比度 ≥ 4.5:1
- `prefers-reduced-motion` 支援

## 授權

此專案僅供學習和展示使用。

## 開發者

基於 Antigravity 通用工程規則開發。
