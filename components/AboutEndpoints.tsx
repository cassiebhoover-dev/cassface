'use client'

import { useState } from 'react'

interface Param {
  name: string
  type: string
  desc: string
}

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT'
  path: string
  summary: string
  params: Param[]
  response: string
}

const ENDPOINTS: Endpoint[] = [
  {
    method: 'GET',
    path: '/leadership',
    summary: 'Returns current people management capabilities and approach',
    params: [
      { name: 'direct_reports', type: 'integer', desc: '3 — across multiple product pillars' },
      { name: 'model',          type: 'string',  desc: '"player-coach" — IC contribution alongside management, not one or the other' },
      { name: 'framework',      type: 'string',  desc: 'Structured design competency framework for transparent career pathing' },
      { name: 'tooling',        type: 'string',  desc: 'AI-powered DesignOps — 1:1 prep, OKR tracking, weekly Slack digests' },
    ],
    response: '200 OK · { "style": "direct + warm", "availability": "open to new roles" }',
  },
  {
    method: 'GET',
    path: '/product-thinking',
    summary: 'Returns strategic design approach and systems mindset',
    params: [
      { name: 'scope',          type: 'string',  desc: '$0→$100M revenue products, 30,000+ user platforms, enterprise SaaS' },
      { name: 'methods',        type: 'array',   desc: 'Double Diamond, Jobs-to-be-Done, journey mapping, design sprints' },
      { name: 'research_depth', type: 'integer', desc: '150+ user interviews and usability tests across career' },
    ],
    response: '200 OK · { "bias": "shipping over theorizing", "north_star": "clarity" }',
  },
  {
    method: 'POST',
    path: '/collaboration',
    summary: 'Initiates cross-functional partnership. Accepts engineers, PMs, and stakeholders.',
    params: [
      { name: 'workshop_facilitation', type: 'boolean', desc: 'true — runs stakeholder alignment sessions end-to-end' },
      { name: 'handoff_format',        type: 'string',  desc: '"interactive-prototype" — not static redlines' },
      { name: 'async_friendly',        type: 'boolean', desc: 'true — documented decisions, no meeting required' },
    ],
    response: '201 Created · { "alignment": true, "next_step": "kickoff scheduled" }',
  },
  {
    method: 'PUT',
    path: '/design-systems',
    summary: 'Upgrades or rebuilds component libraries and design foundations',
    params: [
      { name: 'components_shipped', type: 'integer', desc: '20+ reusable components scaled across multiple products' },
      { name: 'tokens',             type: 'boolean', desc: 'true — Figma variables, semantic naming conventions' },
      { name: 'wcag_compliance',    type: 'string',  desc: '"AA" — accessibility built in, not bolted on' },
    ],
    response: '200 OK · { "debt_reduced": "30%", "adoption": "cross-product" }',
  },
  {
    method: 'GET',
    path: '/known-limitations',
    summary: 'Returns honest self-assessment. No 500 errors here.',
    params: [
      { name: 'patience_for_red_tape',       type: 'float',   desc: '0.4 — prefers moving fast over process for its own sake' },
      { name: 'tolerance_for_vague_briefs',  type: 'float',   desc: '0.6 — will ask clarifying questions until scope is clear' },
      { name: 'meetings_without_agenda',     type: 'boolean', desc: 'false — will send a doc instead' },
    ],
    response: '200 OK · { "note": "known limitations are features, not bugs" }',
  },
]

const METHOD_CLASS: Record<string, string> = {
  GET:  'method--get',
  POST: 'method--post',
  PUT:  'method--put',
}

export default function AboutEndpoints() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <div className="section-card">
      <div className="section-header">
        <span className="section-title">Endpoints</span>
        <span className="section-version">cassie-sdk@4.0.0</span>
      </div>

      {ENDPOINTS.map((ep, i) => (
        <div
          key={ep.path}
          className={`endpoint-row${openIdx === i ? ' is-open' : ''}`}
          onClick={() => toggle(i)}
        >
          <div className={`endpoint-method ${METHOD_CLASS[ep.method]}`}>
            {ep.method}
          </div>
          <div className="endpoint-body">
            <div className="endpoint-path">{ep.path}</div>
            <div className="endpoint-summary">{ep.summary}</div>

            {/* React conditional render — fires a real DOM insertion so the
                flex parent recomputes height and pushes subsequent cards down */}
            {openIdx === i && (
              <div className="endpoint-detail">
                <table className="param-table">
                  <tbody>
                    {ep.params.map(p => (
                      <tr key={p.name}>
                        <td className="param-name">{p.name}</td>
                        <td className="param-type">{p.type}</td>
                        <td className="param-desc">{p.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="response-block">{ep.response}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
