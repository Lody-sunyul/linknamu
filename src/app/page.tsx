import DarkModeToggle from "@/components/DarkModeToggle";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "홍길동",
  initials: "홍",
  bio: "코드와 커피, 책과 산책을 좋아합니다",
};

const links = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/claudecode-gilbut",
    description: "오픈소스 & 개인 프로젝트",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/claudecode-gilbut",
    description: "커리어 & 네트워크",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "blog",
    label: "기술 블로그",
    url: "https://blog.example.com",
    description: "개발 경험 & 학습 기록",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/example",
    description: "일상 & 사진",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4 py-16">
      <DarkModeToggle />

      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-sky-200 dark:shadow-sky-900/40">
          {profile.initials}
        </div>

        {/* Profile */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.bio}</p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>

        <p className="text-xs text-slate-300 dark:text-slate-700 mt-2">링크나무</p>
      </div>
    </main>
  );
}
