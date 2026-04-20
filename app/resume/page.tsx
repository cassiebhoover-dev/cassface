import CaasShell from '@/components/CaasShell'
import ChangelogTimeline from '@/components/ChangelogTimeline'

export const metadata = {
  title: 'Changelog — CaaS by Cassie',
  description: 'Full release history — 14 years of commits. Work history as semantic versioned release notes.',
}

export default function ResumePage() {
  return (
    <CaasShell urlText="cassie.design/changelog">

      {/* Page header */}
      <div className="page-header">
        <div>
          <h1 className="page-header__title">Changelog</h1>
          <p className="page-header__subtitle">Full release history · 14 years of commits</p>
        </div>
      </div>

      {/* Filter + Timeline (client component) */}
      <ChangelogTimeline />

    </CaasShell>
  )
}
