"use client";

interface LinkCardProps {
  id: string;
  label: string;
  url: string;
  description?: string;
  icon: React.ReactNode;
}

export default function LinkCard({ id, label, url, description, icon }: LinkCardProps) {
  const handleClick = async () => {
    // TODO: MongoDB Atlas에 클릭 수 기록
    console.log(`[링크나무] click: ${id}`);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
    >
      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/40 group-hover:text-sky-500 transition-colors">
        {icon}
      </span>
      <span className="flex-1 min-w-0 text-left">
        <span className="block font-semibold text-slate-800 dark:text-slate-100 text-sm">{label}</span>
        {description && (
          <span className="block text-xs text-slate-400 dark:text-slate-500 truncate">{description}</span>
        )}
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300 dark:text-slate-600 group-hover:text-sky-400 transition-colors flex-shrink-0">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}
