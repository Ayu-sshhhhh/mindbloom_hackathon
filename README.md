<div align="center">

<br />

# 🌿 MindBloom

### *Nurture Your Mind, one entry at a time.*

A mental wellness journaling app with AI sentiment analysis,
mood trend tracking, voice recording, password recovery, and a calming nature-inspired design.

<br />

[![HTML5](https://img.shields.io/badge/HTML5-Standalone-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Supabase](https://img.shields.io/badge/Supabase-2-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-4a7c59?style=flat-square)](LICENSE)

<br />

[Live Demo](#) &nbsp;·&nbsp; [Report a Bug](../../issues) &nbsp;·&nbsp; [Request a Feature](../../issues)

<br />

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📝 **Text Journaling** | Distraction-free writing with an elegant serif composer |
| 🎙️ **Voice Recording** | Record voice entries transcribed locally |
| 🧠 **AI Sentiment Analysis** | Every entry gets a mood score (1–10) with themes and labels |
| 📊 **Mood Trend Charts** | Interactive area chart showing emotional patterns over time |
| 🌱 **Wellness Alerts** | Gentle nudges toward support resources when mood trends downward |
| 🔐 **Password Recovery** | 3-step email verification + OTP reset flow |
| 🌙 **Dark Mode** | Full dark/light mode, synced and persisted locally |
| 🔒 **Private by Design** | All data stays in your browser — nothing leaves your device |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |

---

## 🚀 Quick Start — Standalone (No Setup)

The simplest way to run MindBloom is the **single-file version** — no install, no server needed.

```bash
# Just open this file in any browser:
mindbloom_wellness_app.html
```

All features work offline. Data is saved to your browser's `localStorage`.

---

## 🛠️ Full React App Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- A [Supabase](https://supabase.com) project (free tier works)

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/mindbloom.git
cd mindbloom
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
ANTHROPIC_API_KEY=your-anthropic-key-here   # server-side only
```

### 3. Set up the database

```bash
# Using Supabase CLI
supabase login
supabase link --project-ref your-project-id
supabase db push
```

Or run the SQL files manually in your Supabase dashboard:
- `supabase/migrations/001_initial_schema.sql`
- `supabase/migrations/002_rls_policies.sql`

### 4. Deploy edge functions

```bash
supabase functions deploy analyze-sentiment
supabase functions deploy transcribe-audio
supabase functions deploy wellness-check
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Project Structure

```
mindbloom/
│
├── 📄 mindbloom_wellness_app.html     ← ✅ Standalone single-file app (use this!)
│
├── 📁 public/
│   └── favicon.svg
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 auth/
│   │   │   └── AuthPage.tsx           ← Sign in, sign up, forgot password
│   │   ├── 📁 dashboard/
│   │   │   ├── Dashboard.tsx          ← Main layout + wellness check
│   │   │   ├── Sidebar.tsx            ← Navigation
│   │   │   ├── Composer.tsx           ← Text + voice entry composer
│   │   │   ├── EntriesTab.tsx         ← Entry history list
│   │   │   ├── InsightsTab.tsx        ← Mood charts & analytics
│   │   │   └── SettingsTab.tsx        ← Profile & preferences
│   │   ├── 📁 landing/
│   │   │   └── LandingPage.tsx        ← Home / marketing page
│   │   └── 📁 ui/
│   │       ├── MoodBadge.tsx
│   │       ├── Navbar.tsx
│   │       └── WellnessAlert.tsx
│   ├── 📁 hooks/
│   │   ├── useAuth.ts
│   │   ├── useEntries.ts
│   │   ├── useInsights.ts
│   │   ├── useTheme.ts
│   │   └── useVoiceRecorder.ts
│   ├── 📁 lib/
│   │   ├── api.ts                     ← Supabase API calls
│   │   ├── supabase.ts                ← Supabase client
│   │   └── utils.ts
│   ├── 📁 types/
│   │   └── index.ts
│   ├── 📁 styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
│
├── 📁 supabase/
│   ├── config.toml
│   ├── 📁 migrations/
│   │   ├── 001_initial_schema.sql
│   │   └── 002_rls_policies.sql
│   └── 📁 functions/
│       ├── analyze-sentiment/index.ts
│       ├── transcribe-audio/index.ts
│       └── wellness-check/index.ts
│
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── netlify.toml                       ← One-click Netlify deploy
├── vercel.json                        ← One-click Vercel deploy
└── .env.example
```

---

## 🔐 Password Recovery Flow

MindBloom includes a full 3-step account recovery system:

1. **Enter email** — verifies your account exists in the database
2. **Verification code** — a 6-digit OTP is generated (valid 10 minutes) with resend support
3. **Set new password** — updates your password hash and signs you in automatically

---

## 🚢 Deploy

### Netlify (recommended for static)
```bash
npm run build
# drag & drop the dist/ folder to netlify.com/drop
```
Or connect your GitHub repo — Netlify auto-detects the `netlify.toml`.

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages (standalone HTML only)
Push the repo and enable GitHub Pages pointing to the root — `mindbloom_wellness_app.html` will be served directly.

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © MindBloom — see [LICENSE](LICENSE) for details.
