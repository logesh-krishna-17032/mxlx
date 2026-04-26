import { useEffect, useMemo, useState } from 'react'
import './App.css'

const weddingDate = new Date('2026-05-29T05:40:00+05:30')

const events = [
  {
    title: 'The Reception',
    date: 'Thursday, May 28, 2026',
    time: '7:00 PM onwards',
    note: 'An evening celebration with family and friends.',
  },
  {
    title: 'The Wedding',
    date: 'Friday, May 29, 2026',
    time: 'Muhurtham 5:40 AM - 6:40 AM',
    note: 'The sacred ceremony and auspicious union.',
  },
]

const rituals = [
  ['Poorvangam', 'Seeking blessings from ancestors for a happy beginning.'],
  ['Engagement', 'The formal union of two families marks the beginning of the wedding journey.'],
  ['Janavasam', 'A celebratory procession welcoming the groom to the wedding venue.'],
  ['Reception', 'A grand evening celebration welcoming guests to share in the joy.'],
  ['Kasiyathirai', 'The groom symbolically chooses marriage over a spiritual journey.'],
  ['Gowri Poojai', 'The bride worships Goddess Gowri for marital happiness and prosperity.'],
  ['Muhurtham', 'The auspicious moment when the bride and groom are united in marriage.'],
  ['Nagavalli Muhurtham', 'A post-wedding ceremony for blessings, protection, and lifelong harmony.'],
  ['Nalungu', 'A light-hearted ritual with games and customs celebrating the newlyweds.'],
]

function getRemainingTime() {
  const distance = Math.max(weddingDate.getTime() - Date.now(), 0)

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

function App() {
  const [remaining, setRemaining] = useState(getRemainingTime)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemainingTime()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const links = useMemo(() => {
    const address =
      'Sri S.A.K JAI MARUTHI MAHAL A/c, Madhanandhapuram Main Road, Chennai 125'
    const details =
      'Wedding ceremony of V. Logesh Krishna and L. Meenakshi at Sri S.A.K Jai Maruthi Mahal A/c, Madhanandhapuram Main Road, Chennai - 125.'

    return {
      maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      calendar: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        'Logesh & Meenakshi Wedding',
      )}&dates=20260529T001000Z/20260529T011000Z&details=${encodeURIComponent(
        details,
      )}&location=${encodeURIComponent(address)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        'Join us for the wedding of V. Logesh Krishna and L. Meenakshi on May 29, 2026 at Sri S.A.K Jai Maruthi Mahal A/c, Chennai.',
      )}`,
    }
  }, [])

  return (
    <main className="page-shell">
      <article className="invite-card" aria-label="Wedding invitation">
        <section className="opening">
          <div className="photo-panel">
            <img
              src="/invite/engagement-hands.jpg"
              alt="Engagement rings of Logesh Krishna and Meenakshi"
            />
          </div>

          <div className="opening-copy">
            <p className="blessing">With the blessings of our families</p>
            <div className="ornament" aria-hidden="true">
              <span />
              <i>Om</i>
              <span />
            </div>
            <h1>
              <span>V. Logesh</span>
              <span>Krishna</span>
              <em>&</em>
              <span>L. Meenakshi</span>
            </h1>
            <p className="invite-line">
              We invite you to celebrate our wedding and bless the beginning of
              our forever.
            </p>
          </div>
        </section>

        <section className="date-block" id="save-date" aria-labelledby="wedding-date">
          <p>Friday</p>
          <h2 id="wedding-date">
            <span>May</span>
            <strong>29</strong>
            <span>2026</span>
          </h2>
          <p>Sri S.A.K Jai Maruthi Mahal A/c, Chennai - 125</p>
        </section>

        <section className="countdown-section" aria-label="Countdown to wedding">
          <p className="section-label">Counting down to the celebration</p>
          <div className="countdown">
            {Object.entries(remaining).map(([label, value]) => (
              <div className="count" key={label}>
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="events" aria-label="Wedding events">
          {events.map((event) => (
            <div className="event" key={event.title}>
              <span className="event-mark" aria-hidden="true" />
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <strong>{event.time}</strong>
              <p>{event.note}</p>
              <address>
                Sri S.A.K Jai Maruthi Mahal A/c
                <br />
                Madhanandhapuram Main Road, Chennai - 125
              </address>
              <a href={links.maps} target="_blank" rel="noreferrer">
                View venue
              </a>
            </div>
          ))}
        </section>

        <section className="rituals" aria-labelledby="rituals-title">
          <p className="section-label">Sacred Wedding Rituals</p>
          <h2 id="rituals-title">Traditions of Blessing</h2>
          <div className="ritual-grid">
            {rituals.map(([name, detail], index) => (
              <div className="ritual" key={name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="closing">
          <div>
            <p>We cannot wait to celebrate this special day with you.</p>
            <strong>With love, Logesh & Meenakshi</strong>
          </div>
          <div className="actions">
            <a href={links.calendar} target="_blank" rel="noreferrer">
              Add to Calendar
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              Share Invite
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App
