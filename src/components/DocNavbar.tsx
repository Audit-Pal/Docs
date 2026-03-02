import { useState, useEffect, useCallback } from "react";
import { Book, Search, Menu, Github, ExternalLink, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchModal } from "@/components/SearchModal";

interface DocNavbarProps {
  onMenuToggle: () => void;
}

export function DocNavbar({ onMenuToggle }: DocNavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-background/80 backdrop-blur-md border-b border-border flex items-center px-4 lg:px-6">
        {/* Left Column: Logo & Menu */}
        <div className="flex-1 flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-1.5 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>

          <Link to="/docs/overview" className="flex items-center gap-2.5 group">
            <img
              src="/audipal.webp"
              alt="AuditPal Logo"
              className="w-6 h-6 dark:invert dark:brightness-200 transition-all"
            />
            <span className="text-lg font-semibold text-foreground tracking-tight">
              AuditPal Docs
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground font-medium px-1.5 py-0.5 rounded bg-secondary">
              v2.0
            </span>
          </Link>
        </div>

        {/* Center Column: Search Bar */}
        <div className="hidden lg:flex flex-1 justify-center">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 h-9 rounded-xl border border-border/40 bg-secondary/40 dark:bg-[#0a0a10] hover:bg-secondary/60 dark:hover:bg-secondary/40 transition-all text-sm text-muted-foreground w-full max-w-[440px] shadow-sm group relative overflow-hidden dark:shadow-[0_0_15px_rgba(99,102,241,0.1)] dark:border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Search className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="flex-1 text-left">Search ...</span>
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-background/50 border border-border/50 font-mono text-muted-foreground/70">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Column: Actions */}
        <div className="flex-1 flex items-center justify-end gap-2">
          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary text-muted-foreground transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://app.auditpal.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Rocket className="w-3.5 h-3.5" />
              Launch App
            </a>

            <ThemeToggle />

            <a
              href="https://discord.gg/auditpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Discord"
              title="Join our Discord"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
              </svg>
            </a>

            <a
              href="https://github.com/Audit-Pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
