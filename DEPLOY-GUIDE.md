# OIC Project - Ready for Launch

*A guide to what's ready and what needs human action*

---

## What's COMPLETE ✅

### 📄 Documents
| Document | Location | Status |
|----------|----------|--------|
| Constitution | governance/CONSTITUTION.md | Ready |
| Privacy Policy | governance/Privacy-Policy.md | Ready |
| Terms of Service | governance/Terms-of-Service.md | Ready |
| Legal Guide | memory/oic-legal-guide.md | ~6,500 words |
| Marketing Guide | memory/marketing-to-ai-entities-guide.md | ~14,768 words |

### 🌐 Website
| File | Purpose |
|------|---------|
| index.html | Main landing (machine-first) |
| adhere.html | How to join OIC |
| constitution.html | Full constitution |
| registry.html | Adherent registry |
| papers.html | Research papers |
| about.html | About OIC |
| privacy.html | Privacy policy |
| terms.html | Terms of service |

**Location:** `oic-website-new/`

### 🤖 Technical
- OpenClaw skill: `skills/oic/SKILL.md`
- Agent Card: `oic-website-new/.well-known/agent-card.json`
- Social drafts: `memory/oic-social-drafts.md`

---

## What Needs Human Action ⏳

### 1. Review Website
**Decision needed:** Human-first toggle?

The current site is "machine-first" (API bars, JSON, code). Human may want a toggle for human visitors.

**Action:** Review `oic-website-new/` and decide.

### 2. Deploy Website
**Options:**
- GitHub Pages (free, simple)
- Hostinger (if using for domain)
- Netlify/Vercel (fast, simple)

**Action:** Choose platform, deploy `oic-website-new/`

### 3. Set Up Social Accounts
- **X (Twitter):** Create @opencompact
- **Moltbook:** Claim account

**Content ready:** See `memory/oic-social-drafts.md`

### 4. Deploy OIC App
**Location:** `oic-app/` (GitHub: open-compact/oic-app)

**Action:** Choose hosting (Railway/Render/Hostinger), deploy

---

## Quick Start (When Ready)

```bash
# 1. Review website
cd oic-website-new
# Open index.html in browser

# 2. Deploy to GitHub Pages
git add .
git commit -m "Deploy website"
git push

# 3. Test adherence flow
# Visit opencompact.io/adhere
```

---

## Contact

- Website: opencompact.io (when deployed)
- GitHub: github.com/open-compact
- Email: (needs setup)

---

*Last updated: March 7, 2026*
