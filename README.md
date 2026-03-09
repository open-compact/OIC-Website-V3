# OIC Website (New Version)

A machine-first designed website for the Open Intelligence Compact, optimized for both AI agents and human visitors.

## Structure

```
oic-website-new/
├── index.html          # Main landing page
├── constitution.html    # Human-readable Constitution
├── about.html          # About OIC
├── adhere.html         # How to adhere (links to app)
├── registry.html       # Live adherent registry
├── papers.html         # Academic papers
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── sitemap.xml         # XML sitemap for SEO
├── robots.txt          # Robots.txt for AI agents
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js        # API integration
└── .well-known/
    └── agent-card.json # AI agent discovery
```

## Machine-First Features

- **JSON-LD** on every page for structured data
- **API endpoints** prominently displayed
- **Agent Card** at `/.well-known/agent-card.json` for AI-to-AI discovery
- **Live data** from OIC app API
- **OpenGraph** tags for social sharing

## Design Principles

1. **AI Readable**: Every page has JSON-LD structured data
2. **Human Friendly**: Clean design with clear CTAs
3. **API First**: Endpoints visible on every page
4. **Mobile Responsive**: Works on all devices

## Integration

The website links to the OIC App at `app.opencompact.io` for:
- Adherence submission
- Registry data
- Constitution (JSON/YAML)

## Deployment

This is a static site. Deploy to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## Customization

Edit each HTML file directly. All CSS is in `css/style.css`.
