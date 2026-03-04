import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Menu, X, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import demoScore from '@/assets/demo-score.png';
import demoLeaderboard from '@/assets/demo-leaderboard.png';

const GITHUB_URL = 'https://github.com/AshutoshMore142k4/codereportcard.git';
const GITHUB_REPO_URL = 'https://github.com/AshutoshMore142k4/codereportcard';

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

function MacWindow({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-2xl shadow-background/50 bg-card">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
        <span className="size-3 rounded-full bg-[hsl(0,72%,55%)]" />
        <span className="size-3 rounded-full bg-[hsl(45,93%,58%)]" />
        <span className="size-3 rounded-full bg-[hsl(142,72%,50%)]" />
        {title && (
          <span className="ml-2 text-xs font-mono text-muted-foreground">{title}</span>
        )}
      </div>
      {children}
    </div>
  );
}

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx codereportcard');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-muted-foreground hover:text-foreground transition-colors ml-2 relative"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="size-3.5 text-[hsl(var(--grade-a))]" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      )}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-card border border-border rounded px-2 py-1 text-foreground animate-fade-in">
          Copied!
        </span>
      )}
    </button>
  );
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0 gradient-radial" />

          <section className="relative pt-28 md:pt-36 pb-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup preset="blur-slide">
                  <a
                    href="https://www.npmjs.com/package/codereportcard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-mono"
                  >
                    <span className="text-foreground animate-pulse-glow">●</span>
                    <span className="text-secondary-foreground">v1.0 — Now live on npm</span>
                    <ChevronRight className="size-3 text-muted-foreground" />
                  </a>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance font-heading text-4xl font-bold md:text-6xl lg:text-7xl tracking-tight text-foreground">
                    Your codebase's{' '}
                    <span className="glow-text">health report</span>
                    , in one command
                  </h1>

                  <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                    codereportcard analyzes your JavaScript & TypeScript projects for complexity, duplication, dead code, secret leakage, and AI slop — scored 0 to 100, graded A+ to F.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-lg bg-foreground/5 blur-lg group-hover:bg-foreground/10 transition-all" />
                      <code className="relative flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-3 font-mono text-sm glow-border">
                        <span className="text-muted-foreground">$</span>
                        <span className="text-foreground">npx codereportcard</span>
                        <CopyButton />
                      </code>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="gap-2 font-mono text-sm border-border hover:border-foreground/30 hover:bg-foreground/5">
                          <Star className="size-4" />
                          Star on GitHub
                        </Button>
                      </a>
                      <a href="#docs">
                        <Button variant="outline" size="lg" className="gap-2 font-mono text-sm border-border hover:border-foreground/30 hover:bg-foreground/5">
                          Docs
                          <ArrowRight className="size-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </AnimatedGroup>

                {/* Demo Screenshots */}
                <AnimatedGroup
                  preset="blur-slide"
                  className="mt-16 max-w-5xl mx-auto"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15, delayChildren: 0.5 },
                      },
                    },
                    item: transitionVariants.item,
                  }}
                >
                  <MacWindow title="codereportcard — score">
                    <img
                      src={demoScore}
                      alt="codereportcard score output showing health grade with category breakdown"
                      className="w-full h-auto"
                    />
                  </MacWindow>
                  <div className="mt-6">
                    <MacWindow title="codereportcard — leaderboard">
                      <img
                        src={demoLeaderboard}
                        alt="codereportcard per-file leaderboard showing worst and cleanest files"
                        className="w-full h-auto"
                      />
                    </MacWindow>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'CLI', href: '#cli' },
  { name: 'Docs', href: '#docs' },
  { name: 'GitHub', href: GITHUB_REPO_URL },
];

function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={cn(
          'fixed z-50 w-full transition-all duration-500',
          isScrolled ? 'py-2' : 'py-4'
        )}
      >
        <div
          className={cn(
            'mx-auto px-6 transition-all duration-500',
            isScrolled ? 'max-w-4xl' : 'max-w-7xl'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500',
              isScrolled
                ? 'rounded-full px-5 py-2 border border-foreground/[0.08] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(255,255,255,0.02)] bg-[rgba(255,255,255,0.03)]'
                : ''
            )}
          >
            <a href="/" className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-foreground glow-text">{'{ }'}</span>
              <span className={cn(
                "font-heading font-bold text-foreground transition-all duration-300",
                isScrolled ? "text-sm" : "text-base"
              )}>codereportcard</span>
            </a>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 block cursor-pointer p-2 lg:hidden"
            >
              {menuState ? <X className="size-5 text-foreground" /> : <Menu className="size-5 text-foreground" />}
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "font-mono text-xs gap-1.5 transition-all duration-300 border-border hover:border-foreground/30",
                    isScrolled && "h-8 text-[11px] px-3"
                  )}
                >
                  <Star className="size-3" />
                  Star
                </Button>
              </a>
              <a href="https://www.npmjs.com/package/codereportcard" target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className={cn(
                    "font-mono text-xs gap-1.5 transition-all duration-300",
                    isScrolled && "h-8 text-[11px] px-3"
                  )}
                >
                  npm install
                  <ArrowRight className="size-3" />
                </Button>
              </a>
            </div>

            {/* Mobile nav */}
            {menuState && (
              <div className="fixed inset-0 z-10 bg-background/95 backdrop-blur-xl lg:hidden">
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="text-xl font-mono text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="font-mono gap-2">
                      <Star className="size-4" />
                      Star on GitHub
                    </Button>
                  </a>
                  <a href="https://www.npmjs.com/package/codereportcard" target="_blank" rel="noopener noreferrer">
                    <Button className="font-mono">npm install</Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeroSection;
