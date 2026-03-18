import { useState } from 'react'

// ─── Shared Data ─────────────────────────────────────────────────────────────

const logoUrl =
  'https://static.wixstatic.com/media/7b3aeb_e9e2f38532e3421d8c9f9c5c57e1f2d5~mv2.png'

const heroPosts = [
  {
    date: 'March 3, 2026',
    title:
      'Global Experts Convene at UN to Formalize "Industriology" and Launch Industry Assessment Report',
    excerpt:
      '26 February 2026, New York, U.S.A. The International Academy for Arts and Cultural Studies organized the Global Industriology Forum at UN Headquarters in New York.',
    image: 'https://static.wixstatic.com/media/6f074e_98c3b7e06bac439e99a3fde6ef215015~mv2.jpg',
  },
  {
    date: 'December 8, 2025',
    title: 'At Carnegie Hall, Diplomacy Finds Harmony and Beethoven Gets the Last Word',
    excerpt:
      'Ambassadors, educators, cultural leaders, and invited guests gathered for "Better Together," a concert honoring the work and global agenda of the 80th United Nations General Assembly.',
    image: 'https://static.wixstatic.com/media/6f074e_9910a021c68a4b90a75208ade86b9f0a~mv2.jpg',
  },
  {
    date: 'November 18, 2025',
    title:
      'UNITAR-NYO, IAA, and Teachers College Host International Symposium on Early Childhood Policy at United Nations Headquarters',
    excerpt:
      'The full-day programme brought together emerging scholars, UN experts, and international practitioners for an immersive exploration of global early childhood policy.',
    image: 'https://static.wixstatic.com/media/6f074e_aacb0eb763144a808cfe3eb551936499~mv2.png',
  },
]

const navItems = [
  'Home', 'About Us', 'Events', 'News', 'Faculty',
  'Programs', 'Our Focus', 'Get Involved', 'Contact', 'Donate',
]

const sdgColors = [
  '#e5243b', '#dda63a', '#4c9f38', '#c5192d', '#ff3a21',
  '#26bde2', '#fcc30b', '#a21942', '#fd6925', '#dd1367',
  '#fd9d24', '#bf8b2e', '#3f7e44', '#0a97d9', '#56c02b',
  '#00689d', '#19486a',
]

const programCards = [
  { title: 'Trash Picking', image: 'https://static.wixstatic.com/media/11062b_8556233c07a147a2afe7f016df55e977~mv2.jpg' },
  { title: 'Animals Farm', image: 'https://static.wixstatic.com/media/11062b_3a6042f90a294abcba8f622ade919ee9~mv2.jpg' },
  { title: 'Man Painting a Wall', image: 'https://static.wixstatic.com/media/11062b_ed6ccfc00e6b470484e601030e5d245c~mv2.jpeg' },
  { title: 'UN Symposium', image: heroPosts[2].image },
  { title: 'Cultural Diplomacy', image: heroPosts[1].image },
  { title: 'Global Forum', image: heroPosts[0].image },
  { title: 'Arts Education', image: 'https://static.wixstatic.com/media/11062b_8556233c07a147a2afe7f016df55e977~mv2.jpg' },
  { title: 'Community Action', image: 'https://static.wixstatic.com/media/11062b_3a6042f90a294abcba8f622ade919ee9~mv2.jpg' },
  { title: 'Creative Practice', image: 'https://static.wixstatic.com/media/11062b_ed6ccfc00e6b470484e601030e5d245c~mv2.jpeg' },
  { title: 'Research Exchange', image: heroPosts[0].image },
  { title: 'Sustainable Futures', image: heroPosts[2].image },
  { title: 'Concert Dialogue', image: heroPosts[1].image },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <path d="M14.5 8.5h-2.2V7c0-.7.5-.9.8-.9h1.3V3.7h-1.8c-2.2 0-3.1 1.6-3.1 3.2v1.6H7.7v2.6h1.8v5.2h2.8v-5.2h1.9l.3-2.6Z" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <>
        <rect x="4.2" y="4.2" width="11.6" height="11.6" rx="3.2" />
        <circle cx="10" cy="10" r="2.9" />
        <circle cx="14.2" cy="5.9" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: (
      <>
        <path d="M16.8 6.2c-.2-.9-.9-1.6-1.8-1.8C13.8 4 10 4 10 4s-3.8 0-5 .4c-.9.2-1.6.9-1.8 1.8C3 7.4 3 10 3 10s0 2.6.2 3.8c.2.9.9 1.6 1.8 1.8 1.2.4 5 .4 5 .4s3.8 0 5-.4c.9-.2 1.6-.9 1.8-1.8C17 12.6 17 10 17 10s0-2.6-.2-3.8Z" />
        <path d="m8.5 12.9 4-2.9-4-2.9v5.8Z" fill="white" stroke="none" />
      </>
    ),
  },
]

const concertPhoto =
  'https://static.wixstatic.com/media/06808a_ce60b44cb538432d8d05af18592d01c0~mv2.jpg'

// ─── Version Switcher ─────────────────────────────────────────────────────────

function VersionSwitcher({ active, onChange }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 9999, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '10px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
      <span style={{ color: '#aaa', fontSize: '13px', marginRight: '8px', fontFamily: 'sans-serif' }}>Design Version：</span>
      {[
        { key: 'original', label: 'Original' },
        { key: 'v1', label: 'Version 1' },
        { key: 'v2', label: 'Version 2' },
      ].map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          style={{
            padding: '6px 18px',
            borderRadius: '20px',
            border: active === key ? '2px solid #009cde' : '2px solid #444',
            background: active === key ? '#009cde' : 'transparent',
            color: active === key ? '#fff' : '#bbb',
            fontFamily: 'sans-serif',
            fontSize: '13px',
            fontWeight: active === key ? '600' : '400',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

// ─── Original Page ────────────────────────────────────────────────────────────

function OriginalPage({ activeHero, setActiveHero }) {
  const activePost = heroPosts[activeHero]

  return (
    <div className="min-h-screen bg-ia-white text-ia-copy">
      <header className="border-b border-ia-blue/20">
        <div className="h-[7px] w-full bg-ia-blue" />

        <div className="mx-auto flex w-full max-w-[1381px] items-start justify-between px-5 pb-4 pt-3 lg:px-0">
          <a href="https://www.iaarts.org" className="shrink-0">
            <img
              src={logoUrl}
              alt="International Academy for Arts and Cultural Studies"
              className="h-[155px] w-[191px] object-cover"
            />
          </a>

          <div className="flex flex-col items-end gap-4 pt-2">
            <button
              type="button"
              className="flex h-10 w-[120px] items-center justify-end gap-2 text-[15px] text-ia-blue transition hover:text-ia-blue-soft"
            >
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-ia-blue/35">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <path d="M10 10.2a3.8 3.8 0 1 0-3.8-3.8 3.8 3.8 0 0 0 3.8 3.8Zm0 1.8c-3.4 0-6.2 1.7-6.2 3.8V17h12.4v-1.2c0-2.1-2.8-3.8-6.2-3.8Z" />
                </svg>
              </span>
              <span>Log In</span>
            </button>

            <form
              action="https://www.iaarts.org/search"
              className="flex h-[31px] w-[210px] items-center overflow-hidden rounded-[6px] border border-[#817f7f] bg-white"
            >
              <input
                type="search"
                placeholder="Search..."
                className="h-full flex-1 border-0 px-3 text-[13px] text-[#323232] placeholder:text-[#8f8f8f] focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-full w-10 items-center justify-center text-[#3d9be9] transition hover:bg-ia-blue hover:text-white"
                aria-label="Search"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                  <path d="m15.7 14.6 3.2 3.2a.2.2 0 0 1 0 .3l-.8.8a.2.2 0 0 1-.3 0l-3.2-3.2a6 6 0 1 1 1.1-1.1ZM11 15.8a4.9 4.9 0 1 0 0-9.8 4.9 4.9 0 0 0 0 9.8Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <nav className="bg-ia-title text-white">
          <div className="mx-auto flex w-full max-w-[1381px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-[6px] text-[13px] lg:px-0">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-brand whitespace-nowrap transition hover:text-ia-blue"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>
        <section className="px-3 pb-12 pt-0 lg:px-0">
          <div className="mx-auto max-w-[1381px]">
            <div className="relative overflow-hidden bg-[#dfe7ec] shadow-ia-hero">
              <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[776px]">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 lg:px-14 lg:pb-12">
                  <div className="max-w-[760px]">
                    <p className="mb-4 font-brand text-[13px] uppercase tracking-[0.24em] text-white/80">
                      Latest News
                    </p>
                    <h1 className="font-brand text-[28px] leading-[1.16] text-white sm:text-[38px] lg:text-[58px]">
                      {activePost.title}
                    </h1>
                    <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-white/88 lg:text-[17px]">
                      {activePost.excerpt}
                    </p>
                    <p className="mt-5 text-[13px] uppercase tracking-[0.18em] text-white/70">
                      {activePost.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 bg-white px-0 pb-0 pt-4 md:grid-cols-3">
              {heroPosts.map((post, index) => (
                <button
                  key={post.title}
                  type="button"
                  onClick={() => setActiveHero(index)}
                  className={`border px-5 py-5 text-left transition ${
                    index === activeHero
                      ? 'border-ia-blue bg-[#f1f9fd] shadow-[inset_0_3px_0_0_rgba(0,156,222,1)]'
                      : 'border-[#d7e8f1] bg-white hover:border-ia-blue/60 hover:bg-[#fbfdfe]'
                  }`}
                >
                  <p className="font-brand text-[11px] uppercase tracking-[0.22em] text-ia-blue">
                    {post.date}
                  </p>
                  <h2 className="mt-3 font-brand text-[20px] leading-[1.3] text-ia-title">
                    {post.title}
                  </h2>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-[60px]">
          <div className="mx-auto max-w-[980px]">
            <h2 className="font-brand text-center text-[38px] leading-none text-ia-title">
              Our Commitment
            </h2>

            <div className="mx-auto mt-10 max-w-[850px] text-center text-[17px] leading-[2.05] text-[#454545]">
              <p>
                Committed to advancing global understanding through arts, culture,
                and policy, IAA aligns its work with the United Nations Sustainable
                Development Goals.
              </p>
              <p className="mt-5">
                Through close collaboration with UNITAR-NYO and ECOSOC, the academy
                facilitates research, dialogue, and training that support peace,
                prosperity, and sustainable development.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-8">
              <img
                src="https://static.wixstatic.com/media/7b3aeb_7b1b221b1dbe4d5dba41c90dfc7dc603~mv2.png"
                alt="Sustainable Development Goals wheel"
                className="h-[135px] w-[135px] object-cover"
              />

              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-[repeat(6,minmax(0,1fr))]">
                {sdgColors.map((color, index) => (
                  <div
                    key={color}
                    className="flex h-[88px] flex-col justify-between rounded-sm p-3 text-left text-white shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    <span className="font-brand text-[12px] uppercase tracking-[0.16em]">
                      Goal
                    </span>
                    <span className="font-brand text-[34px] leading-none">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-[60px]">
          <div className="mx-auto max-w-[980px]">
            <h2 className="font-brand text-center text-[38px] leading-none text-ia-title">
              Upcoming Events
            </h2>

            <div className="mt-9 flex min-h-[416px] items-center justify-center border border-[#d9e8f2] bg-[#fbfdff] px-8 py-14">
              <div className="max-w-[620px] text-center">
                <p className="font-brand text-[14px] uppercase tracking-[0.24em] text-ia-blue">
                  Event Calendar
                </p>
                <p className="mt-6 text-[18px] leading-8 text-[#4b4b4b]">
                  No public events are currently listed on the homepage. The
                  original site renders this area as an empty-state events widget
                  with substantial white space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-3 py-[60px] lg:px-0">
          <div className="mx-auto max-w-[1381px]">
            <h2 className="font-brand text-center text-[38px] leading-none text-ia-title">
              Programs
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-[6px] md:grid-cols-4 xl:grid-cols-6">
              {programCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className={`group relative overflow-hidden ${
                    index % 5 === 0 ? 'md:col-span-1 md:row-span-2 md:h-[416px]' : 'h-[230px] md:h-[236px]'
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-brand text-[11px] uppercase tracking-[0.18em] text-white/80">
                      Program
                    </p>
                    <h3 className="mt-2 font-brand text-[18px] leading-tight text-white">
                      {card.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-[66px]">
          <img
            src={concertPhoto}
            alt="Concert Photo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/42" />

          <div className="relative mx-auto w-full max-w-[809px] bg-white/95 px-8 py-[62px] shadow-ia-card backdrop-blur-[1px] sm:px-12">
            <h2 className="font-brand text-center text-[38px] leading-none text-ia-title">
              Sign up for Email Updates
            </h2>
            <p className="mx-auto mt-[18px] max-w-[433px] text-center text-[18px] leading-[1.8] text-[#4a4a4a]">
              Receive announcements about programs, events, and international
              partnerships from IAA.
            </p>

            <form className="mx-auto mt-[50px] max-w-[595px]">
              <div className="grid gap-x-12 gap-y-11 md:grid-cols-2">
                <label className="block">
                  <span className="sr-only">First name</span>
                  <input type="text" placeholder="First name" className="form-line-input" />
                </label>
                <label className="block">
                  <span className="sr-only">Last name</span>
                  <input type="text" placeholder="Last name" className="form-line-input" />
                </label>
                <label className="block md:col-span-1">
                  <span className="sr-only">Email</span>
                  <input type="email" placeholder="Email" className="form-line-input" />
                </label>
                <div className="flex items-start md:justify-end">
                  <button
                    type="submit"
                    className="h-[50px] w-full border border-ia-blue bg-ia-blue px-6 font-brand text-[14px] uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-ia-blue md:w-[270px]"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-0">
        <div className="h-[10px] w-full bg-ia-blue" />
        <div className="mx-auto flex w-full max-w-[1381px] flex-col items-start justify-between gap-8 px-5 py-8 md:flex-row md:items-center lg:px-0">
          <img src={logoUrl} alt="IAA footer logo" className="h-[155px] w-[191px] object-cover" />

          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="text-[15px] leading-7 text-[#4a4a4a] md:text-right">
              <p>International Academy for Arts and Cultural Studies</p>
              <p>New York, NY</p>
              <p>info@iaarts.org</p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ia-blue/35 text-ia-blue transition hover:bg-ia-blue hover:text-white"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current stroke-current stroke-[1.2]">
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Version 1 — UN-Inspired Design ──────────────────────────────────────────

const UN_BLUE = '#009EDB'
const UN_DARK = '#1c3f6e'
const UN_NAVY = '#1a2a4a'

const unLanguages = [
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
]

const v1SocialLinks = [
  ...socialLinks,
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <path d="M5.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2.5 7h3v9h-3V7Zm5 0h2.8v1.2h.04C10.84 7.5 11.9 7 13.1 7c3 0 3.9 1.8 3.9 4.2V16h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.42 0-1.63 1.1-1.63 2.22V16h-3V7Z" />
    ),
  },
]

const footerLinkCols = [
  ['Home', 'About Us', 'Events', 'News'],
  ['Faculty', 'Programs', 'Our Focus', 'Get Involved'],
  ['Contact', 'Donate', 'Privacy Policy', 'Site Map'],
]

function V1Page({ activeHero, setActiveHero }) {
  const activePost = heroPosts[activeHero]
  const [activeLang, setActiveLang] = useState('en')
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div style={{ fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif" }} className="min-h-screen bg-white text-[#333]">

      {/* Roboto from Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');`}</style>

      {/* ── Language Bar ─────────────────────────────────────────────────────── */}
      <div style={{ background: UN_NAVY, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Globe icon + 6 language tabs */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: 'rgba(255,255,255,0.5)', marginRight: 8, flexShrink: 0 }}>
              <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm5.3 5h-2.1c-.23-1.1-.58-2.08-1.05-2.87A6.52 6.52 0 0 1 15.3 7ZM10 3.52c.7.88 1.24 2.07 1.56 3.48H8.44C8.76 5.59 9.3 4.4 10 3.52ZM3.7 11a6.6 6.6 0 0 1 0-2h2.42a13.5 13.5 0 0 0 0 2H3.7Zm.3 1h2.1c.23 1.1.58 2.08 1.05 2.87A6.52 6.52 0 0 1 4 12ZM6.1 7H4a6.52 6.52 0 0 1 3.15-2.87C6.68 4.92 6.33 5.9 6.1 7ZM10 16.48c-.7-.88-1.24-2.07-1.56-3.48h3.12c-.32 1.41-.86 2.6-1.56 3.48ZM11.73 11H8.27a11.8 11.8 0 0 1 0-2h3.46a11.8 11.8 0 0 1 0 2Zm.21 1c-.32 1.41-.86 2.6-1.56 3.48-.7-.88-1.24-2.07-1.56-3.48h3.12Zm.21-4c-.32-1.41-.86-2.6-1.56-3.48A6.14 6.14 0 0 1 12.15 7h-3.12Zm1.7 6.87C14.32 14.08 14.67 13.1 14.9 12H17a6.52 6.52 0 0 1-3.15 2.87ZM16.3 11h-2.42a13.5 13.5 0 0 0 0-2H16.3a6.6 6.6 0 0 1 0 2Z" />
            </svg>
            {unLanguages.map((lang, i) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderRight: i < unLanguages.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                  color: activeLang === lang.code ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontWeight: activeLang === lang.code ? '500' : '400',
                  fontSize: '12px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textDecoration: activeLang === lang.code ? 'underline' : 'none',
                  textUnderlineOffset: 3,
                  transition: 'color 0.15s',
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '12px', fontFamily: 'inherit', padding: '8px 0', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <svg viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: 'currentColor' }}>
              <path d="m15.7 14.6 3.2 3.2a.2.2 0 0 1 0 .3l-.8.8a.2.2 0 0 1-.3 0l-3.2-3.2a6 6 0 1 1 1.1-1.1ZM11 15.8a4.9 4.9 0 1 0 0-9.8 4.9 4.9 0 0 0 0 9.8Z" />
            </svg>
            Search
          </button>
        </div>

        {/* Expandable search bar */}
        {searchOpen && (
          <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px 12px' }}>
            <form style={{ display: 'flex', overflow: 'hidden', borderRadius: 2, border: '1px solid rgba(255,255,255,0.2)' }}>
              <input
                autoFocus
                type="search"
                placeholder="Search iaarts.org…"
                style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', padding: '9px 14px', fontSize: '14px', fontFamily: 'inherit', outline: 'none' }}
              />
              <button
                type="submit"
                style={{ background: UN_BLUE, border: 'none', color: '#fff', padding: '0 20px', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: '500', letterSpacing: '0.04em' }}
              >
                GO
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: 1381, margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="https://www.iaarts.org" style={{ flexShrink: 0 }}>
            <img
              src={logoUrl}
              alt="International Academy for Arts and Cultural Studies"
              style={{ height: 110, width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Log In + Donate */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              type="button"
              style={{ background: 'none', border: `1px solid ${UN_BLUE}`, color: UN_BLUE, padding: '8px 18px', fontSize: '13.5px', fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, fontWeight: '500', borderRadius: 2, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = UN_BLUE; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = UN_BLUE }}
            >
              <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: 'currentColor' }}>
                <path d="M10 10.2a3.8 3.8 0 1 0-3.8-3.8 3.8 3.8 0 0 0 3.8 3.8Zm0 1.8c-3.4 0-6.2 1.7-6.2 3.8V17h12.4v-1.2c0-2.1-2.8-3.8-6.2-3.8Z" />
              </svg>
              Log In
            </button>
            <a
              href="#"
              style={{ background: '#e8a020', color: '#fff', padding: '9px 24px', fontSize: '13.5px', fontFamily: 'inherit', fontWeight: '700', textDecoration: 'none', letterSpacing: '0.04em', borderRadius: 2, display: 'inline-block', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#c88010'}
              onMouseLeave={e => e.currentTarget.style.background = '#e8a020'}
            >
              Donate
            </a>
          </div>
        </div>

        {/* ── Navigation ── */}
        <nav style={{ background: UN_BLUE }}>
          <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap' }}>
            {navItems.filter(i => i !== 'Donate').map((item, idx, arr) => (
              <a
                key={item}
                href="#"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontWeight: '500',
                  padding: '13px 16px',
                  display: 'block',
                  letterSpacing: '0.015em',
                  borderRight: idx < arr.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                  fontFamily: 'inherit',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section>
          <div style={{ maxWidth: 1381, margin: '0 auto' }}>

            {/* Hero image */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 560 }}>
              <img
                src={activePost.image}
                alt={activePost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.05) 100%)' }} />

              {/* Breadcrumb */}
              <div style={{ position: 'absolute', top: 20, left: 40, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.75)' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>HOME</a>
                <span>›</span>
                <span style={{ color: '#fff', fontWeight: 500 }}>NEWS</span>
              </div>

              {/* Text overlay */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 40px 44px' }}>
                <div style={{ maxWidth: 760 }}>
                  <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.75)', marginBottom: 14, fontWeight: 500 }}>
                    Latest News · {activePost.date}
                  </p>
                  <h1 style={{ fontSize: 'clamp(24px, 3.4vw, 50px)', lineHeight: 1.14, color: '#fff', fontWeight: 700, margin: '0 0 18px' }}>
                    {activePost.title}
                  </h1>
                  <p style={{ fontSize: 16, lineHeight: 1.78, color: 'rgba(255,255,255,0.88)', maxWidth: 640, margin: '0 0 28px' }}>
                    {activePost.excerpt}
                  </p>
                  {/* Read More button */}
                  <a
                    href="#"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #fff', color: '#fff', padding: '10px 24px', fontSize: '12.5px', fontWeight: '600', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s', background: 'transparent', borderRadius: 1, fontFamily: 'inherit' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = UN_BLUE }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
                  >
                    Read More
                    <svg viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: 'currentColor' }}>
                      <path d="M10.7 4.3 16.4 10l-5.7 5.7-1.4-1.4 3.8-3.8H3V9h10.1L9.3 5.7l1.4-1.4Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* News tabs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: '#ddd', padding: 2 }}>
              {heroPosts.map((post, index) => (
                <button
                  key={post.title}
                  type="button"
                  onClick={() => setActiveHero(index)}
                  style={{
                    background: index === activeHero ? '#fff' : '#f5f5f5',
                    border: 'none',
                    borderTop: `3px solid ${index === activeHero ? UN_BLUE : 'transparent'}`,
                    padding: '22px 26px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { if (index !== activeHero) e.currentTarget.style.background = '#eff4f8' }}
                  onMouseLeave={e => { if (index !== activeHero) e.currentTarget.style.background = '#f5f5f5' }}
                >
                  <p style={{ fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.2em', color: UN_BLUE, marginBottom: 10, fontWeight: 600 }}>
                    {post.date}
                  </p>
                  <h2 style={{ fontSize: 16.5, lineHeight: 1.4, color: '#1a1a1a', fontWeight: index === activeHero ? 600 : 400, margin: '0 0 14px' }}>
                    {post.title}
                  </h2>
                  <span style={{ fontSize: 12.5, color: UN_BLUE, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    Read More ›
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Commitment ───────────────────────────────────────────────── */}
        <section style={{ padding: '80px 20px', background: '#fff' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <p style={{ textAlign: 'center', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: UN_BLUE, fontWeight: 600, margin: '0 0 12px' }}>
              ABOUT US
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(26px, 3vw, 40px)', color: '#111', fontWeight: 700, margin: '0 0 20px', lineHeight: 1.2 }}>
              Our Commitment
            </h2>
            <div style={{ width: 48, height: 3, background: UN_BLUE, margin: '0 auto 44px' }} />

            <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', fontSize: 17, lineHeight: 1.92, color: '#454545' }}>
              <p>
                Committed to advancing global understanding through arts, culture, and policy,
                IAA aligns its work with the United Nations Sustainable Development Goals.
              </p>
              <p style={{ marginTop: 22 }}>
                Through close collaboration with UNITAR-NYO and ECOSOC, the academy facilitates
                research, dialogue, and training that support peace, prosperity, and sustainable
                development.
              </p>
            </div>

            <div style={{ marginTop: 52, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
              <img
                src="https://static.wixstatic.com/media/7b3aeb_7b1b221b1dbe4d5dba41c90dfc7dc603~mv2.png"
                alt="SDG Wheel"
                style={{ width: 120, height: 120, objectFit: 'contain' }}
              />
              <div style={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
                {sdgColors.map((color, index) => (
                  <div
                    key={color}
                    title={`Sustainable Development Goal ${index + 1}`}
                    style={{ backgroundColor: color, height: 82, borderRadius: 2, padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.15)' }}
                  >
                    <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.9, fontWeight: 500 }}>Goal</span>
                    <span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1 }}>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Upcoming Events ──────────────────────────────────────────────── */}
        <section style={{ padding: '80px 20px', background: '#f4f6f9' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: UN_BLUE, fontWeight: 600, margin: '0 0 10px' }}>
                  CALENDAR
                </p>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#111', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                  Upcoming Events
                </h2>
              </div>
              <a
                href="#"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: UN_BLUE, textDecoration: 'none', fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', borderBottom: `2px solid ${UN_BLUE}`, paddingBottom: 2, transition: 'opacity 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                View All Events ›
              </a>
            </div>

            <div style={{ minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '56px 32px', borderLeft: `4px solid ${UN_BLUE}`, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              <svg viewBox="0 0 48 48" style={{ width: 44, height: 44, fill: UN_BLUE, opacity: 0.35, marginBottom: 18 }}>
                <path d="M38 6h-2V2h-4v4H16V2h-4v4h-2C7.8 6 6 7.8 6 10v32c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4Zm0 36H10V18h28v24Zm0-28H10v-4h28v4Z" />
              </svg>
              <p style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.2em', color: UN_BLUE, fontWeight: 600, margin: '0 0 14px' }}>
                Event Calendar
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.72, color: '#666', textAlign: 'center', maxWidth: 460, margin: '0 0 28px' }}>
                No upcoming events at this time. Please check back soon for announcements about conferences, symposia, and cultural programmes.
              </p>
              <a
                href="#"
                style={{ display: 'inline-block', background: UN_BLUE, color: '#fff', padding: '10px 26px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', borderRadius: 2, letterSpacing: '0.05em', fontFamily: 'inherit', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = UN_DARK}
                onMouseLeave={e => e.currentTarget.style.background = UN_BLUE}
              >
                Subscribe for Updates
              </a>
            </div>
          </div>
        </section>

        {/* ── Programs ─────────────────────────────────────────────────────── */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: UN_BLUE, fontWeight: 600, margin: '0 0 10px' }}>
                  WHAT WE DO
                </p>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', color: '#111', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                  Programs
                </h2>
              </div>
              <a
                href="#"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: UN_BLUE, textDecoration: 'none', fontSize: '12.5px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', borderBottom: `2px solid ${UN_BLUE}`, paddingBottom: 2, transition: 'opacity 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Explore All Programs ›
              </a>
            </div>
          </div>

          <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
              {programCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="group"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: index % 5 === 0 ? 420 : 236,
                    gridRow: index % 5 === 0 ? 'span 2' : 'span 1',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', pointerEvents: 'none' }}>
                    <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.75)', margin: '0 0 5px', fontWeight: 500 }}>Program</p>
                    <h3 style={{ fontSize: 16, lineHeight: 1.3, color: '#fff', fontWeight: 600, margin: 0 }}>{card.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Email Sign Up ─────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', padding: '80px 20px', overflow: 'hidden' }}>
          <img
            src={concertPhoto}
            alt="Concert"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: `rgba(28, 63, 110, 0.84)` }} />

          <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto', background: '#fff', padding: '56px 52px', boxShadow: '0 12px 48px rgba(0,0,0,0.22)' }}>
            <p style={{ textAlign: 'center', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: UN_BLUE, fontWeight: 600, margin: '0 0 12px' }}>
              STAY INFORMED
            </p>
            <h2 style={{ textAlign: 'center', fontSize: 32, color: '#111', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2 }}>
              Sign up for Email Updates
            </h2>
            <div style={{ width: 44, height: 3, background: UN_BLUE, margin: '0 auto 22px' }} />
            <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 1.78, color: '#555', maxWidth: 400, margin: '0 auto 40px' }}>
              Receive announcements about programs, events, and international partnerships from IAA.
            </p>

            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 32px' }}>
                {['First name', 'Last name'].map(ph => (
                  <input
                    key={ph}
                    type="text"
                    placeholder={ph}
                    style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px 0', fontSize: 15, fontFamily: 'inherit', outline: 'none', width: '100%', transition: 'border-color 0.2s', background: 'transparent' }}
                    onFocus={e => e.target.style.borderBottomColor = UN_BLUE}
                    onBlur={e => e.target.style.borderBottomColor = '#ccc'}
                  />
                ))}
                <input
                  type="email"
                  placeholder="Email address"
                  style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px 0', fontSize: 15, fontFamily: 'inherit', outline: 'none', width: '100%', transition: 'border-color 0.2s', background: 'transparent' }}
                  onFocus={e => e.target.style.borderBottomColor = UN_BLUE}
                  onBlur={e => e.target.style.borderBottomColor = '#ccc'}
                />
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button
                    type="submit"
                    style={{ width: '100%', background: UN_BLUE, color: '#fff', border: 'none', padding: '13px 0', fontSize: '13.5px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.07em', textTransform: 'uppercase', borderRadius: 2, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = UN_DARK}
                    onMouseLeave={e => e.currentTarget.style.background = UN_BLUE}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: UN_NAVY }}>

        {/* Top accent stripe */}
        <div style={{ height: 4, background: UN_BLUE }} />

        {/* Main footer content */}
        <div style={{ maxWidth: 1381, margin: '0 auto', padding: '52px 20px 36px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, alignItems: 'start' }}>

          {/* Logo + contact */}
          <div>
            <img
              src={logoUrl}
              alt="IAA footer logo"
              style={{ height: 100, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 22, opacity: 0.9 }}
            />
            <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              International Academy<br />
              for Arts and Cultural Studies<br />
              New York, NY<br />
              info@iaarts.org
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {footerLinkCols.map((col, ci) => (
              <div key={ci}>
                {col.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{ display: 'block', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 13.5, padding: '5px 0', fontFamily: 'inherit', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar: social + copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', maxWidth: 1381, margin: '0 auto', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {v1SocialLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = UN_BLUE; e.currentTarget.style.borderColor = UN_BLUE; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
              >
                <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: 'currentColor', stroke: 'currentColor', strokeWidth: 0.6 }}>
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', margin: 0 }}>
            © {new Date().getFullYear()} International Academy for Arts and Cultural Studies. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

// ─── Version 2 — UN Media Dark Portal ────────────────────────────────────────

const D_BG      = '#0f0f0f'   // page background
const D_SURFACE = '#1a1a1a'   // card / panel background
const D_HOVER   = '#252525'   // card hover
const D_BORDER  = '#2c2c2c'   // subtle dividers
const D_TEXT    = '#f0f0f0'   // primary text
const D_MUTED   = '#888888'   // secondary text
const D_BLUE    = '#009EDB'   // UN blue accent
const D_LIVE    = '#e53935'   // LIVE badge red

const audioLangs = [
  { code: 'orig', label: 'Original' },
  { code: 'ar',   label: 'AR' },
  { code: 'zh',   label: 'ZH' },
  { code: 'en',   label: 'EN' },
  { code: 'fr',   label: 'FR' },
  { code: 'ru',   label: 'RU' },
  { code: 'es',   label: 'ES' },
]

const mediaCategories = [
  { id: 'all',     label: 'All Content' },
  { id: 'ga',      label: 'General Assembly' },
  { id: 'sc',      label: 'Security Council' },
  { id: 'hr',      label: 'Human Rights' },
  { id: 'climate', label: 'Climate & Environment' },
  { id: 'culture', label: 'Arts & Culture' },
]

const videoCards = [
  { title: 'Global Industriology Forum — Full Session Recording', duration: '2:14:38', category: 'General Assembly', date: '3 Mar 2026',  image: heroPosts[0].image,  live: false, views: '12.4K' },
  { title: 'Better Together: Concert at Carnegie Hall',           duration: '1:52:10', category: 'Arts & Culture',   date: '8 Dec 2025',  image: heroPosts[1].image,  live: false, views: '8.7K'  },
  { title: 'Early Childhood Policy Symposium — Full Day',         duration: '6:08:22', category: 'Human Rights',     date: '18 Nov 2025', image: heroPosts[2].image,  live: false, views: '5.1K'  },
  { title: 'Community Action in Urban Arts Programmes',           duration: '0:48:15', category: 'Arts & Culture',   date: '2 Nov 2025',  image: programCards[1].image, live: false, views: '3.2K' },
  { title: 'Sustainable Futures Forum — Panel Discussion',        duration: '1:30:00', category: 'Climate & Environment', date: '15 Oct 2025', image: programCards[10].image, live: false, views: '6.9K' },
  { title: 'Creative Practice: Artists in Residence Showcase',    duration: '0:55:44', category: 'Arts & Culture',   date: '29 Sep 2025', image: programCards[8].image, live: false, views: '2.8K'  },
  { title: 'Cultural Diplomacy: Music as a Bridge',               duration: '1:08:30', category: 'Arts & Culture',   date: '21 Sep 2025', image: programCards[4].image, live: false, views: '4.4K'  },
  { title: 'Global Forum on Arts and Policy — Closing Remarks',   duration: '0:34:52', category: 'General Assembly', date: '3 Sep 2025',  image: programCards[5].image, live: false, views: '7.2K'  },
]

const upcomingSchedule = [
  { time: '14:00 EST', title: 'Security Council: Open Briefing — Maintenance of International Peace', type: 'Security Council', langs: 6 },
  { time: '15:30 EST', title: 'General Assembly Plenary: Sustainable Development Agenda Review',      type: 'General Assembly',  langs: 6 },
  { time: '17:00 EST', title: 'High-Level Forum on Arts, Culture and Diplomacy — IAA Annual Session', type: 'Arts & Culture',    langs: 4 },
]

// Reusable 16:9 video card
function VideoCard({ card, large = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      style={{ background: D_SURFACE, borderRadius: 3, overflow: 'hidden', cursor: 'pointer', transition: 'background 0.2s, transform 0.2s', transform: hovered ? 'translateY(-2px)' : 'none', ...(hovered && { background: D_HOVER }) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
        <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: hovered ? 0.75 : 0.88, transition: 'opacity 0.3s' }} />

        {/* LIVE badge */}
        {card.live && (
          <span style={{ position: 'absolute', top: 10, left: 10, background: D_LIVE, color: '#fff', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 2 }}>
            ● LIVE
          </span>
        )}

        {/* Duration */}
        {!card.live && (
          <span style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.82)', color: '#fff', fontSize: 11.5, fontWeight: 500, padding: '2px 7px', borderRadius: 2, letterSpacing: '0.03em' }}>
            {card.duration}
          </span>
        )}

        {/* Play button (hover) */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
          <div style={{ width: large ? 64 : 48, height: large ? 64 : 48, borderRadius: '50%', background: 'rgba(0,158,219,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 20 20" style={{ width: large ? 26 : 20, height: large ? 26 : 20, fill: '#fff', marginLeft: 3 }}>
              <path d="M5 3.5 17 10 5 16.5V3.5Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div style={{ padding: large ? '16px 18px' : '12px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: D_BLUE, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.category}</span>
          <span style={{ fontSize: 10.5, color: D_MUTED }}>· {card.date}</span>
        </div>
        <h3 style={{ fontSize: large ? 16 : 14, lineHeight: 1.45, color: D_TEXT, fontWeight: 500, margin: '0 0 8px' }}>{card.title}</h3>
        <p style={{ fontSize: 11.5, color: D_MUTED, margin: 0 }}>{card.views} views</p>
      </div>
    </article>
  )
}

function V2Page({ activeHero, setActiveHero }) {
  const activePost = heroPosts[activeHero]
  const [audioLang, setAudioLang] = useState('en')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div style={{ fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif", background: D_BG, color: D_TEXT, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .live-dot { animation: livePulse 1.4s ease-in-out infinite; }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header style={{ background: '#111', borderBottom: `1px solid ${D_BORDER}`, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1381, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

          {/* Logo + wordmark */}
          <a href="https://www.iaarts.org" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}>
            <img src={logoUrl} alt="IAA" style={{ height: 44, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 20, fontWeight: 100 }}>|</span>
            <span style={{ color: '#fff', fontSize: 13.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.88 }}>Media</span>
          </a>

          {/* Nav links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: item === 'Donate' ? D_BLUE : 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 13, fontWeight: item === 'Donate' ? 700 : 400, padding: '0 14px', height: 60, display: 'flex', alignItems: 'center', borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s', letterSpacing: '0.01em', fontFamily: 'inherit' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = D_BLUE }}
                onMouseLeave={e => { e.currentTarget.style.color = item === 'Donate' ? D_BLUE : 'rgba(255,255,255,0.65)'; e.currentTarget.style.borderBottomColor = 'transparent' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Search + Log In */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {searchOpen ? (
              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', border: `1px solid ${D_BLUE}`, borderRadius: 2, overflow: 'hidden' }}>
                <input
                  autoFocus
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  placeholder="Search archive…"
                  style={{ background: '#1c1c1c', border: 'none', color: '#fff', padding: '7px 14px', fontSize: 13, fontFamily: 'inherit', outline: 'none', width: 220 }}
                />
                <button type="button" onClick={() => setSearchOpen(false)} style={{ background: 'none', border: 'none', color: D_MUTED, padding: '0 10px', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>✕</button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                style={{ background: 'none', border: `1px solid ${D_BORDER}`, color: 'rgba(255,255,255,0.6)', padding: '7px 14px', borderRadius: 2, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontFamily: 'inherit', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = D_BLUE; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = D_BORDER; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >
                <svg viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: 'currentColor' }}>
                  <path d="m15.7 14.6 3.2 3.2a.2.2 0 0 1 0 .3l-.8.8a.2.2 0 0 1-.3 0l-3.2-3.2a6 6 0 1 1 1.1-1.1ZM11 15.8a4.9 4.9 0 1 0 0-9.8 4.9 4.9 0 0 0 0 9.8Z" />
                </svg>
                Search
              </button>
            )}
            <button
              type="button"
              style={{ background: D_BLUE, border: 'none', color: '#fff', padding: '8px 18px', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer', borderRadius: 2, fontWeight: 600, letterSpacing: '0.04em', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#007ab8'}
              onMouseLeave={e => e.currentTarget.style.background = D_BLUE}
            >
              Log In
            </button>
          </div>
        </div>
      </header>

      <main>

        {/* ── Featured / Hero ───────────────────────────────────────────────── */}
        <section style={{ background: '#000' }}>
          <div style={{ maxWidth: 1381, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px' }}>

              {/* Main featured video */}
              <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000', overflow: 'hidden' }}>
                <img src={activePost.image} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />

                {/* LIVE badge */}
                <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span className="live-dot" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: D_LIVE }} />
                  <span style={{ background: D_LIVE, color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', padding: '3px 10px', borderRadius: 2 }}>LIVE</span>
                  <span style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.8)', fontSize: 11, padding: '3px 10px', borderRadius: 2, backdropFilter: 'blur(4px)' }}>
                    {activePost.date}
                  </span>
                </div>

                {/* Text */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 32px 32px' }}>
                  <span style={{ display: 'inline-block', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.18em', color: D_BLUE, fontWeight: 600, marginBottom: 12 }}>General Assembly</span>
                  <h1 style={{ fontSize: 'clamp(20px, 2.4vw, 36px)', lineHeight: 1.2, color: '#fff', fontWeight: 700, margin: '0 0 12px', maxWidth: 540 }}>{activePost.title}</h1>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: 480, margin: '0 0 24px' }}>{activePost.excerpt}</p>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      style={{ background: D_BLUE, color: '#fff', border: 'none', padding: '11px 26px', fontSize: 13, fontWeight: 600, cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit', letterSpacing: '0.04em', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#007ab8'}
                      onMouseLeave={e => e.currentTarget.style.background = D_BLUE}
                    >
                      <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: 'currentColor' }}><path d="M5 3.5 17 10 5 16.5V3.5Z" /></svg>
                      Watch Live
                    </button>
                    <button
                      type="button"
                      style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', padding: '11px 22px', fontSize: 13, fontWeight: 500, cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    >
                      <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: 'currentColor' }}><path d="M10 13.5 5 8.5h3V3h4v5.5h3L10 13.5ZM3 15h14v2H3v-2Z" /></svg>
                      Download
                    </button>
                    <button
                      type="button"
                      style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', padding: '11px 22px', fontSize: 13, fontWeight: 500, cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                    >
                      <svg viewBox="0 0 20 20" style={{ width: 15, height: 15, fill: 'currentColor' }}><path d="M16 10c0 3.3-2.7 6-6 6a5.97 5.97 0 0 1-4.7-2.3L3 15V9h6.2L7.3 10.9A4 4 0 0 0 10 12a4 4 0 0 0 0-8c-1.5 0-2.8.8-3.5 2H4.3A6 6 0 0 1 10 4c3.3 0 6 2.7 6 6Z" /></svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Side: news tab selector */}
              <div style={{ background: '#0a0a0a', borderLeft: `1px solid ${D_BORDER}`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '14px 18px', borderBottom: `1px solid ${D_BORDER}` }}>
                  <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: D_MUTED, fontWeight: 600 }}>Up Next</span>
                </div>
                {heroPosts.map((post, index) => (
                  <button
                    key={post.title}
                    type="button"
                    onClick={() => setActiveHero(index)}
                    style={{ display: 'flex', gap: 12, padding: '14px 18px', background: index === activeHero ? '#1c1c1c' : 'transparent', borderLeft: `3px solid ${index === activeHero ? D_BLUE : 'transparent'}`, border: 'none', borderBottom: `1px solid ${D_BORDER}`, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.15s', alignItems: 'flex-start' }}
                    onMouseEnter={e => { if (index !== activeHero) e.currentTarget.style.background = '#161616' }}
                    onMouseLeave={e => { if (index !== activeHero) e.currentTarget.style.background = 'transparent' }}
                  >
                    <div style={{ flexShrink: 0, width: 80, height: 48, borderRadius: 2, overflow: 'hidden' }}>
                      <img src={post.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: index === activeHero ? 1 : 0.65 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: index === activeHero ? D_BLUE : D_MUTED, margin: '0 0 5px', fontWeight: 600 }}>{post.date}</p>
                      <p style={{ fontSize: 12.5, lineHeight: 1.45, color: index === activeHero ? D_TEXT : 'rgba(255,255,255,0.6)', margin: 0, fontWeight: index === activeHero ? 500 : 400, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{post.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Audio Language Switcher ── */}
            <div style={{ background: '#151515', borderTop: `1px solid ${D_BORDER}`, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: D_MUTED, fontWeight: 600, flexShrink: 0 }}>
                🎧 Audio Channel:
              </span>
              <div style={{ display: 'flex', gap: 4 }}>
                {audioLangs.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setAudioLang(lang.code)}
                    style={{ background: audioLang === lang.code ? D_BLUE : '#2a2a2a', color: audioLang === lang.code ? '#fff' : 'rgba(255,255,255,0.55)', border: 'none', padding: '5px 14px', fontSize: 12, fontWeight: audioLang === lang.code ? 700 : 400, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', transition: 'all 0.15s', letterSpacing: '0.04em' }}
                    onMouseEnter={e => { if (audioLang !== lang.code) { e.currentTarget.style.background = '#383838'; e.currentTarget.style.color = '#fff' } }}
                    onMouseLeave={e => { if (audioLang !== lang.code) { e.currentTarget.style.background = '#2a2a2a'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' } }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <span style={{ fontSize: 11.5, color: D_MUTED, marginLeft: 4 }}>
                {audioLang === 'orig' ? 'Floor audio — no interpretation' : `Simultaneous interpretation active`}
              </span>
            </div>
          </div>
        </section>

        {/* ── Coming Up ────────────────────────────────────────────────────── */}
        <section style={{ padding: '48px 20px 40px', borderBottom: `1px solid ${D_BORDER}` }}>
          <div style={{ maxWidth: 1381, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: D_TEXT, margin: 0, letterSpacing: '0.01em' }}>Coming Up</h2>
                <span style={{ fontSize: 11.5, color: D_MUTED }}>All times Eastern Standard Time</span>
              </div>
              <a href="#" style={{ fontSize: 12.5, color: D_BLUE, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 5, borderBottom: `1px solid ${D_BLUE}`, paddingBottom: 1 }}>
                Full Live Schedule ›
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {upcomingSchedule.map((ev, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 20, background: D_SURFACE, padding: '16px 20px', borderLeft: `3px solid ${D_BORDER}`, borderRadius: 2, cursor: 'pointer', transition: 'background 0.15s, border-color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = D_HOVER; e.currentTarget.style.borderLeftColor = D_BLUE }}
                  onMouseLeave={e => { e.currentTarget.style.background = D_SURFACE; e.currentTarget.style.borderLeftColor = D_BORDER }}
                >
                  <span style={{ flexShrink: 0, fontSize: 14, fontWeight: 700, color: D_BLUE, minWidth: 80, fontVariantNumeric: 'tabular-nums' }}>{ev.time}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14.5, color: D_TEXT, margin: '0 0 4px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.title}</p>
                    <span style={{ fontSize: 11.5, color: D_MUTED }}>
                      {ev.type} · {ev.langs} language{ev.langs > 1 ? 's' : ''} available
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button type="button" style={{ background: D_BLUE, color: '#fff', border: 'none', padding: '6px 16px', fontSize: 12, fontWeight: 600, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', letterSpacing: '0.04em', transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#007ab8'}
                      onMouseLeave={e => e.currentTarget.style.background = D_BLUE}
                    >
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Browse Archive ────────────────────────────────────────────────── */}
        <section style={{ padding: '52px 20px' }}>
          <div style={{ maxWidth: 1381, margin: '0 auto' }}>

            {/* Section header + category filter */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: D_TEXT, margin: 0 }}>Browse Archive</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: D_MUTED }}>
                  <path d="M3 5h2.6a2 2 0 0 0 3.8 0H17V3H9.4a2 2 0 0 0-3.8 0H3v2Zm14 4h-2.6a2 2 0 0 0-3.8 0H3v2h7.6a2 2 0 0 0 3.8 0H17V9Zm0 6H9.4a2 2 0 0 0-3.8 0H3v2h2.6a2 2 0 0 0 3.8 0H17v-2Z" />
                </svg>
                <span style={{ fontSize: 12, color: D_MUTED }}>Filter:</span>
              </div>
            </div>

            {/* Category pills */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 32 }}>
              {mediaCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ background: activeCategory === cat.id ? D_BLUE : '#222', color: activeCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.55)', border: `1px solid ${activeCategory === cat.id ? D_BLUE : D_BORDER}`, padding: '6px 16px', fontSize: 12.5, fontWeight: activeCategory === cat.id ? 600 : 400, cursor: 'pointer', borderRadius: 20, fontFamily: 'inherit', transition: 'all 0.15s', letterSpacing: '0.02em' }}
                  onMouseEnter={e => { if (activeCategory !== cat.id) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#555' } }}
                  onMouseLeave={e => { if (activeCategory !== cat.id) { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = D_BORDER } }}
                >
                  {cat.label}
                </button>
              ))}
              {/* Advanced Filters */}
              <button
                type="button"
                style={{ background: 'none', color: D_MUTED, border: `1px solid ${D_BORDER}`, padding: '6px 16px', fontSize: 12.5, fontWeight: 400, cursor: 'pointer', borderRadius: 20, fontFamily: 'inherit', transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#555' }}
                onMouseLeave={e => { e.currentTarget.style.color = D_MUTED; e.currentTarget.style.borderColor = D_BORDER }}
              >
                <svg viewBox="0 0 20 20" style={{ width: 12, height: 12, fill: 'currentColor' }}>
                  <path d="M3 5h2.6a2 2 0 0 0 3.8 0H17V3H9.4a2 2 0 0 0-3.8 0H3v2Zm14 4h-2.6a2 2 0 0 0-3.8 0H3v2h7.6a2 2 0 0 0 3.8 0H17V9Zm0 6H9.4a2 2 0 0 0-3.8 0H3v2h2.6a2 2 0 0 0 3.8 0H17v-2Z" />
                </svg>
                Advanced Filters
              </button>
            </div>

            {/* Video grid — 4 columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {videoCards.map((card, i) => <VideoCard key={i} card={card} />)}
            </div>

            {/* Load more */}
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button
                type="button"
                style={{ background: 'none', color: D_BLUE, border: `1px solid ${D_BLUE}`, padding: '11px 40px', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = D_BLUE; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = D_BLUE }}
              >
                Load More
              </button>
            </div>
          </div>
        </section>

        {/* ── Action Buttons Section ────────────────────────────────────────── */}
        <section style={{ padding: '52px 20px', background: '#111', borderTop: `1px solid ${D_BORDER}` }}>
          <div style={{ maxWidth: 1381, margin: '0 auto' }}>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: D_BLUE, fontWeight: 600, margin: '0 0 12px', textAlign: 'center' }}>FOR MEDIA PROFESSIONALS</p>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: D_TEXT, margin: '0 0 44px', textAlign: 'center' }}>Access & Services</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {[
                {
                  icon: <path d="M10 13.5 5 8.5h3V3h4v5.5h3L10 13.5ZM3 15h14v2H3v-2Z" />,
                  title: 'Download Footage',
                  desc: 'High-resolution video clips and B-roll for accredited media organisations. Multiple formats available.',
                  action: 'Access Download Portal',
                  primary: true,
                },
                {
                  icon: <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm1 12H9v-5h2v5Zm0-7H9V5h2v2Z" />,
                  title: 'Media Accreditation',
                  desc: 'Apply for press credentials to access IAA events, UN briefings, and restricted conference areas.',
                  action: 'Apply Now',
                  primary: false,
                },
                {
                  icon: <path d="M17 3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 12H4V5h12v10Zm-8-2h2v-4H8v4Zm0-5h2V6H8v2Z" />,
                  title: 'Request for Footage',
                  desc: 'Submit a formal request to license archival footage or still images for editorial and educational use.',
                  action: 'Submit Request',
                  primary: false,
                },
              ].map(({ icon, title, desc, action, primary }) => (
                <div
                  key={title}
                  style={{ background: D_SURFACE, padding: '36px 32px', borderTop: `3px solid ${primary ? D_BLUE : D_BORDER}`, cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = D_HOVER}
                  onMouseLeave={e => e.currentTarget.style.background = D_SURFACE}
                >
                  <svg viewBox="0 0 20 20" style={{ width: 28, height: 28, fill: D_BLUE, marginBottom: 18 }}>{icon}</svg>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: D_TEXT, margin: '0 0 12px' }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.72, color: D_MUTED, margin: '0 0 28px' }}>{desc}</p>
                  <a
                    href="#"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: D_BLUE, textDecoration: 'none', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: `1px solid ${D_BLUE}`, paddingBottom: 2 }}
                  >
                    {action} ›
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Email Sign Up ─────────────────────────────────────────────────── */}
        <section style={{ padding: '56px 20px', background: D_BG, borderTop: `1px solid ${D_BORDER}` }}>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.28em', color: D_BLUE, fontWeight: 600, margin: '0 0 12px' }}>STAY INFORMED</p>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: D_TEXT, margin: '0 0 14px' }}>Subscribe to Alerts</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: D_MUTED, margin: '0 0 36px' }}>
              Get notified about live sessions, new recordings, and media releases from IAA.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: 0, maxWidth: 460, margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{ flex: 1, background: '#1c1c1c', border: `1px solid ${D_BORDER}`, borderRight: 'none', color: D_TEXT, padding: '12px 16px', fontSize: 14, fontFamily: 'inherit', outline: 'none', borderRadius: '2px 0 0 2px' }}
                onFocus={e => e.target.style.borderColor = D_BLUE}
                onBlur={e => e.target.style.borderColor = D_BORDER}
              />
              <button
                type="submit"
                style={{ background: D_BLUE, color: '#fff', border: 'none', padding: '12px 26px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: '0 2px 2px 0', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#007ab8'}
                onMouseLeave={e => e.currentTarget.style.background = D_BLUE}
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#080808', borderTop: `1px solid ${D_BORDER}` }}>
        <div style={{ maxWidth: 1381, margin: '0 auto', padding: '44px 20px 28px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 60, alignItems: 'start' }}>

          {/* Logo + tagline */}
          <div>
            <img src={logoUrl} alt="IAA Media" style={{ height: 80, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.7, marginBottom: 16, display: 'block' }} />
            <p style={{ fontSize: 12, lineHeight: 1.8, color: '#555', margin: 0 }}>
              IAA Media · International Academy<br />for Arts and Cultural Studies<br />New York, NY · info@iaarts.org
            </p>
          </div>

          {/* Footer links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {footerLinkCols.map((col, ci) => (
              <div key={ci}>
                {col.map(link => (
                  <a key={link} href="#" style={{ display: 'block', color: '#555', textDecoration: 'none', fontSize: 13, padding: '4.5px 0', fontFamily: 'inherit', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555'}
                  >{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: `1px solid #1a1a1a`, maxWidth: 1381, margin: '0 auto', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {v1SocialLinks.map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}
                style={{ width: 34, height: 34, borderRadius: '50%', border: `1px solid #2a2a2a`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = D_BLUE; e.currentTarget.style.color = D_BLUE }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#555' }}
              >
                <svg viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: 'currentColor', stroke: 'currentColor', strokeWidth: 0.6 }}>{item.icon}</svg>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: '#3a3a3a', margin: 0 }}>
            © {new Date().getFullYear()} International Academy for Arts and Cultural Studies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [activeHero, setActiveHero] = useState(0)
  const [activeVersion, setActiveVersion] = useState('original')
  return (
    <div>
      <VersionSwitcher active={activeVersion} onChange={setActiveVersion} />

      {activeVersion === 'original' && (
        <OriginalPage activeHero={activeHero} setActiveHero={setActiveHero} />
      )}
      {activeVersion === 'v1' && (
        <V1Page activeHero={activeHero} setActiveHero={setActiveHero} />
      )}
      {activeVersion === 'v2' && (
        <V2Page activeHero={activeHero} setActiveHero={setActiveHero} />
      )}
    </div>
  )
}
export default App
