# 國際健康養生會 (yangsheng.hk)

International Association for Health and Yangsheng official website.

純前端 Next.js 15 專案（App Router + TypeScript + Tailwind CSS）。

## 技術棧

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- 靜態資料來源：`src/data/siteContent.ts`

## 本地開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 部署到 Vercel

1. 到 [Vercel](https://vercel.com) 匯入這個 GitHub repository
2. Framework Preset 選擇 **Next.js**
3. 直接 Deploy 即可

## 注意事項

- 圖片目前放在 `public/images/`（請自行把原站圖片放入，或使用外部 URL）
- 聯絡地址與 WhatsApp 號碼請在 `src/data/siteContent.ts` 確認後再上線
- 目前為純前端，無後端與 CMS

## 專案結構

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── data/
│   └── siteContent.ts
└── lib/
    └── utils.ts
```
