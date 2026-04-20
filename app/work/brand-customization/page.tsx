import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Brand Customization — Cassie Hoover',
}

export default function BrandCustomization() {
  return (
    <CaasShell urlText="cassie.design — Brand Customization">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Brand Customization</h1>
          <p className="page-header__subtitle">Design Systems · nCino</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          {/* Header */}
          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">
            Design Systems · nCino
          </p>
          <h1 className="font-sans text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Brand Customization
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Giving financial institutions the tools to customize their nCino experience — from color palettes to typography — to reflect their own brand identity.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Role</p>
              <p className="text-sm font-sans text-foreground">Lead Designer</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Team</p>
              <p className="text-sm font-sans text-foreground">Design, Engineering, PM</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Company</p>
              <p className="text-sm font-sans text-foreground">nCino</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Type</p>
              <p className="text-sm font-sans text-foreground">Design Systems</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden bg-stone-100">
            <Image src="/images/brand-customization.jpg" alt="Brand Customization" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Overview</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Financial institutions using nCino needed the platform to feel like their own product — not a generic SaaS tool. Brand Customization gave administrators control over visual identity: colors, fonts, logos, and UI theming.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The challenge was building a system flexible enough to accommodate diverse brand languages while maintaining accessibility standards and design consistency across the platform.
            </p>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Process</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Discovery</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Interviewed administrators and IT stakeholders at financial institutions to understand branding requirements, technical constraints, and how they expected to manage customization over time.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Design Tokens</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Mapped the platform's visual properties to a token system, identifying which values needed to be customizable vs. fixed. Worked closely with engineering to ensure tokens could be applied at runtime without code changes.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Accessibility Guardrails</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Built contrast-checking logic into the customization UI to prevent administrators from applying color combinations that would fail WCAG AA standards.
                </p>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Outcomes</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Financial institutions could now apply their brand identity across the nCino platform without engineering involvement. The feature reduced implementation time for new customers and became a key differentiator in sales conversations.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The design token system built for this project also informed nCino's broader design system — making it easier for product teams to ship accessible, on-brand UI going forward.
            </p>
          </section>

          {/* Nav between projects */}
          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link
              href="/work/draw-schedules"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              ← Draw Schedules
            </Link>
            <Link
              href="/work/event-home-page"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              Event Home Page →
            </Link>
          </div>

      </div>
    </CaasShell>
  )
}
