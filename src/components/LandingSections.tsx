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

const scoringTable = [
  { grade: 'A+', score: '97–100', label: 'Immaculate' },
  { grade: 'A', score: '93–96', label: 'Excellent' },
  { grade: 'A-', score: '90–92', label: 'Very clean' },
  { grade: 'B+', score: '87–89', label: 'Solid' },
  { grade: 'B', score: '83–86', label: 'Good' },
  { grade: 'B-', score: '80–82', label: 'Decent' },
  { grade: 'C+', score: '77–79', label: 'Fair' },
  { grade: 'C', score: '73–76', label: 'Needs work' },
  { grade: 'C-', score: '70–72', label: 'Below average' },
  { grade: 'D+', score: '67–69', label: 'Poor' },
  { grade: 'D', score: '63–66', label: 'Bad' },
  { grade: 'D-', score: '60–62', label: 'Very bad' },
  { grade: 'F', score: '0–59', label: 'Critical' },
];

const checkRules = [
  { category: 'Clarity', rules: 'Cyclomatic complexity, file length, nested JSX depth, single-letter variables' },
  { category: 'Duplication', rules: 'Copy-pasted code blocks (10+ lines), duplicate useEffect bodies' },
  { category: 'Dead Code', rules: 'Unused imports, unused exports, unused variables' },
  { category: 'Secrets', rules: 'API keys, passwords, JWT tokens, .env files not in .gitignore' },
  { category: 'AI Slop', rules: 'Bloated useEffect deps, 80+ line functions, TODO clusters, console.log spam, prop drilling, comment-heavy files' },
];

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border bg-secondary/50">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground/80 leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function DocsSection() {
  return (
    <section id="docs" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Documentation</span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold text-foreground">
            Getting started
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to analyze and improve your codebase.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Quick Start */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Quick Start</h3>
            <CodeBlock>{`npx codereportcard .`}</CodeBlock>
            <p className="mt-3 text-sm text-muted-foreground">Or install globally:</p>
            <div className="mt-2">
              <CodeBlock>{`npm install -g codereportcard\ncodereportcard ./my-project`}</CodeBlock>
            </div>
          </motion.div>

          {/* Usage */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Usage</h3>
            <CodeBlock>{`# Scan current directory
codereportcard .

# JSON output (for CI/CD)
codereportcard . --json

# Per-file issue breakdown
codereportcard . --verbose

# Export a shareable PNG report card
codereportcard . --share

# Disable the summary roast
codereportcard . --no-roast

# CI mode — fail if score is below threshold
codereportcard . --fail-under 80

# Only scan files changed vs a branch
codereportcard . --diff main

# Only scan staged files (pre-commit hook)
codereportcard . --staged

# Generate a config file
codereportcard init`}</CodeBlock>
          </motion.div>

          {/* Configuration */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Configuration</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Run <code className="font-mono text-foreground bg-secondary px-1.5 py-0.5 rounded text-xs">codereportcard init</code> to scaffold a config, or create one manually. Supported files: <code className="font-mono text-foreground bg-secondary px-1.5 py-0.5 rounded text-xs">vibecheck.config.js</code>, <code className="font-mono text-foreground bg-secondary px-1.5 py-0.5 rounded text-xs">.vibecheckrc.json</code>, or a <code className="font-mono text-foreground bg-secondary px-1.5 py-0.5 rounded text-xs">"vibecheck"</code> key in package.json.
            </p>
            <CodeBlock title="vibecheck.config.js">{`export default {
  exclude: ['**/generated/**', '**/migrations/**'],
  rules: {
    'file-too-long': { limit: 400, severity: 'warning' },
    'high-complexity': { limit: 15, severity: 'error' },
  },
  thresholds: {
    secretLeakage: 100,
    clarity: 80,
  },
  failUnder: 70,
  weights: {
    clarity: 0.25,
    duplication: 0.15,
    deadCode: 0.20,
    secretLeakage: 0.25,
    aiSlop: 0.15,
  },
};`}</CodeBlock>
          </motion.div>

          {/* CI/CD Integration */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">CI/CD Integration</h3>
            <CodeBlock title="GitHub Actions">{`- name: Code Report Card
  run: npx codereportcard . --fail-under 75 --json`}</CodeBlock>
            <p className="mt-3 text-sm text-muted-foreground">
              The CLI exits with code 1 if the overall score is below the threshold or any category score is below its configured threshold.
            </p>
          </motion.div>

          {/* Git Integration */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Git Integration</h3>
            <CodeBlock>{`# Only check files changed in your feature branch
codereportcard . --diff main

# Pre-commit hook — only check staged files
codereportcard . --staged`}</CodeBlock>
            <p className="mt-3 text-sm text-muted-foreground">Works great with husky:</p>
            <div className="mt-2">
              <CodeBlock title=".husky/pre-commit">{`npx codereportcard . --staged --fail-under 70`}</CodeBlock>
            </div>
          </motion.div>

          {/* What It Checks */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">What It Checks</h3>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left px-4 py-3 font-mono font-semibold text-foreground">Category</th>
                    <th className="text-left px-4 py-3 font-mono font-semibold text-foreground">Rules</th>
                  </tr>
                </thead>
                <tbody>
                  {checkRules.map((row) => (
                    <tr key={row.category} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-mono font-medium text-foreground whitespace-nowrap">{row.category}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.rules}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Scoring */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Scoring</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Each category is weighted equally at 20% by default (configurable via weights in config). Diagnostics are scored by severity.
            </p>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left px-4 py-2 font-mono font-semibold text-foreground">Grade</th>
                    <th className="text-left px-4 py-2 font-mono font-semibold text-foreground">Score</th>
                    <th className="text-left px-4 py-2 font-mono font-semibold text-foreground">Label</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringTable.map((row) => (
                    <tr key={row.grade} className="border-b border-border last:border-0">
                      <td className="px-4 py-2 font-mono font-bold text-foreground">{row.grade}</td>
                      <td className="px-4 py-2 font-mono text-muted-foreground">{row.score}</td>
                      <td className="px-4 py-2 text-muted-foreground">{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
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
            Free & open source. MIT License.
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
              href="https://github.com/AshutoshMore142k4/codereportcard"
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
