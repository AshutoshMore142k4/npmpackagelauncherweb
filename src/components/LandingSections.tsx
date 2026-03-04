import { motion } from 'framer-motion';
import { Brain, Copy, Skull, Lock, Bot, GitBranch, Terminal, FileJson, Image, Settings, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    icon: Brain,
    title: 'Clarity',
    description: 'Cyclomatic complexity, deep nesting, unreadable names, oversized files',
    color: 'text-grade-a',
  },
  {
    icon: Copy,
    title: 'Duplication',
    description: 'Copy-pasted blocks, repeated useEffect logic, redundant patterns',
    color: 'text-grade-b',
  },
  {
    icon: Skull,
    title: 'Dead Code',
    description: 'Unused imports, exports, and variables quietly rotting in your codebase',
    color: 'text-grade-d',
  },
  {
    icon: Lock,
    title: 'Secret Leakage',
    description: "API keys, tokens, and credentials that shouldn't be committed",
    color: 'text-destructive',
  },
  {
    icon: Bot,
    title: 'AI Slop',
    description: 'Oversized functions, TODO clusters, console.log spam, prop drilling',
    color: 'text-accent',
  },
];

const cliFeatures = [
  { flag: '--fail-under 80', desc: 'Fails CI if score drops below threshold', icon: CheckCircle2 },
  { flag: '--diff main', desc: 'Only scans files changed in your PR', icon: GitBranch },
  { flag: '--staged', desc: 'Runs as a pre-commit hook', icon: Terminal },
  { flag: '--json', desc: 'Machine-readable output for pipelines', icon: FileJson },
  { flag: '--share', desc: 'Exports a shareable PNG report card', icon: Image },
  { flag: 'init', desc: 'Scaffolds config with custom rules & weights', icon: Settings },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">What it analyzes</span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold text-foreground">
            Five dimensions of code health
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Each category is scored independently, then combined into a single 0–100 score with an A+ to F grade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="flex items-start gap-4">
                <cat.icon className={cn("size-5 mt-0.5 shrink-0", cat.color)} />
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Extra card: the "result" */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-xl border border-foreground/20 bg-card p-6 glow-border flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl font-bold text-foreground font-mono glow-text">A+</div>
            <p className="mt-2 text-sm text-muted-foreground">Your target grade</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function CLISection() {
  return (
    <section id="cli" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Built for real workflows</span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold text-foreground">
            CLI-first, pipeline-ready
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Drop it into your CI, pre-commit hooks, or just run it locally. Zero config required.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {cliFeatures.map((feat) => (
            <motion.div
              key={feat.flag}
              variants={itemVariants}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-foreground/20 transition-colors"
            >
              <feat.icon className="size-5 text-foreground mt-0.5 shrink-0" />
              <div>
                <code className="font-mono text-sm text-foreground">{feat.flag}</code>
                <p className="text-xs text-muted-foreground mt-1">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-foreground glow-text">{'{ }'}</span>
            <span className="font-heading font-bold text-foreground">codereportcard</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            Free & open source. Built for developers who care about code quality.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.npmjs.com/package/codereportcard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              npm
            </a>
            <a
              href="https://github.com/AbiruzzamanMolla/codereportcard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
