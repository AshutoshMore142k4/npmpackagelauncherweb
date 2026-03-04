import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TextEffect } from '@/components/ui/text-effect';
import { cn } from '@/lib/utils';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div className="relative">
          {/* Grid pattern background */}
          <div className="absolute inset-0 grid-pattern opacity-40" />
          {/* Radial glow */}
          <div className="absolute inset-0 gradient-radial" />

          <section className="relative pt-28 md:pt-36 pb-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup preset="blur-slide">
                  <a
                    href="https://www.npmjs.com/package/codereportcard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-mono"
                  >
                    <span className="text-primary animate-pulse-glow">●</span>
                    <span className="text-secondary-foreground">v1.0 — Now live on npm</span>
                    <ChevronRight className="size-3 text-muted-foreground" />
                  </a>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance font-heading text-4xl font-bold md:text-6xl lg:text-7xl tracking-tight">
                    <span className="text-foreground">Your codebase's </span>
                    <span className="glow-text text-primary">health report</span>
                    <span className="text-foreground">, in one command</span>
                  </h1>

                  <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                    codereportcard analyzes your JavaScript & TypeScript projects for complexity, duplication, dead code, secret leakage, and AI slop — scored 0 to 100, graded A+ to F.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-lg bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all" />
                      <code className="relative flex items-center gap-3 rounded-lg border border-primary/30 bg-card px-6 py-3 font-mono text-sm glow-border">
                        <span className="text-muted-foreground">$</span>
                        <span className="text-primary">npx codereportcard</span>
                        <button
                          onClick={() => navigator.clipboard.writeText('npx codereportcard')}
                          className="text-muted-foreground hover:text-primary transition-colors ml-2"
                          title="Copy to clipboard"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        </button>
                      </code>
                    </div>
                    <a href="https://github.com/AbiruzzamanMolla/codereportcard" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="gap-2 font-mono text-sm border-border hover:border-primary/50 hover:bg-primary/5">
                        View on GitHub
                        <ArrowRight className="size-4" />
                      </Button>
                    </a>
                  </div>
                </AnimatedGroup>

                {/* Terminal Demo */}
                <AnimatedGroup
                  preset="blur-slide"
                  className="mt-16 max-w-3xl mx-auto"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05, delayChildren: 0.5 },
                      },
                    },
                    item: transitionVariants.item,
                  }}
                >
                  <TerminalDemo />
                </AnimatedGroup>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function TerminalDemo() {
  return (
    <div className="terminal-bg rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-destructive/70" />
          <div className="size-3 rounded-full bg-accent/70" />
          <div className="size-3 rounded-full bg-primary/70" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">terminal</span>
      </div>
      {/* Terminal body */}
      <div className="p-6 font-mono text-sm leading-relaxed space-y-1 text-left">
        <div>
          <span className="text-primary">$</span>{' '}
          <span className="text-foreground">npx codereportcard</span>
        </div>
        <div className="text-muted-foreground mt-3">Scanning 47 files...</div>
        <div className="mt-4 border border-border rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-foreground font-semibold text-base">📋 Code Report Card</span>
            <span className="text-xs text-muted-foreground">my-react-app</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-grade-a">87</div>
                <div className="text-xs text-muted-foreground mt-1">Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-grade-b">B+</div>
                <div className="text-xs text-muted-foreground mt-1">Grade</div>
              </div>
              <div className="flex-1 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">🧠 Clarity</span>
                  <span className="text-grade-a">92</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">📋 Duplication</span>
                  <span className="text-grade-b">85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">💀 Dead Code</span>
                  <span className="text-grade-a">90</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">🔐 Secrets</span>
                  <span className="text-grade-a">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">🤖 AI Slop</span>
                  <span className="text-grade-c">72</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-muted-foreground text-xs">
          ✓ Report generated in 1.2s
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'CLI', href: '#cli' },
  { name: 'Docs', href: 'https://www.npmjs.com/package/codereportcard' },
  { name: 'GitHub', href: 'https://github.com/AbiruzzamanMolla/codereportcard' },
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
          'fixed z-50 w-full transition-all duration-300',
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-primary glow-text">{'{ }'}</span>
              <span className="font-heading font-bold text-foreground">codereportcard</span>
            </a>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 block cursor-pointer p-2 lg:hidden"
            >
              {menuState ? <X className="size-5 text-foreground" /> : <Menu className="size-5 text-foreground" />}
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="https://www.npmjs.com/package/codereportcard" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="font-mono text-xs gap-1.5">
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
                      className="text-xl font-mono text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
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
