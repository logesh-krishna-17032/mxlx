import { useEffect, useMemo, useState } from 'react'
import './App.css'

const weddingDate = new Date('2026-05-29T05:40:00+05:30')

const events = [
  {
    title: 'The Reception',
    date: 'Thursday, May 28, 2026',
    time: '7:00 PM onwards',
    note: 'An evening celebration with family and friends.',
    icon: '✺',
    calendarDates: '20260528T133000Z/20260528T173000Z',
  },
  {
    title: 'The Wedding',
    date: 'Friday, May 29, 2026',
    time: 'Muhurtham 5:40 AM - 6:40 AM',
    note: 'The sacred ceremony and auspicious union.',
    icon: 'ॐ',
    calendarDates: '20260529T001000Z/20260529T011000Z',
  },
]

// const rituals = [
//   ['Poorvangam', 'Seeking blessings from ancestors for a happy beginning.'],
//   ['Engagement', 'The formal union of two families marks the beginning of the wedding journey.'],
//   ['Janavasam', 'A celebratory procession welcoming the groom to the wedding venue.'],
//   ['Reception', 'A grand evening celebration welcoming guests to share in the joy.'],
//   ['Kasiyathirai', 'The groom symbolically chooses marriage over a spiritual journey.'],
//   ['Gowri Poojai', 'The bride worships Goddess Gowri for marital happiness and prosperity.'],
//   ['Muhurtham', 'The auspicious moment when the bride and groom are united in marriage.'],
//   ['Nagavalli Muhurtham', 'A post-wedding ceremony for blessings, protection, and lifelong harmony.'],
//   ['Nalungu', 'A light-hearted ritual with games and customs celebrating the newlyweds.'],
// ]

function getRemainingTime() {
  const distance = Math.max(weddingDate.getTime() - Date.now(), 0)

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

function getCalendarUrl(title: string, dates: string) {
  const address =
    'Sri S.A.K JAI MARUTHI MAHAL A/c, Madhanandhapuram Main Road, Chennai 125'
  const details =
    'Wedding celebration of V. Logesh Krishna and L. Meenakshi at Sri S.A.K Jai Maruthi Mahal A/c, Madhanandhapuram Main Road, Chennai - 125.'

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title,
  )}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
    address,
  )}`
}

function App() {
  const [remaining, setRemaining] = useState(getRemainingTime)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemainingTime()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const links = useMemo(() => {
    return {
      calendar: getCalendarUrl(
        'Logesh & Meenakshi Wedding',
        '20260529T001000Z/20260529T011000Z',
      ),
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        'Join us for the wedding of V. Logesh Krishna and L. Meenakshi on May 29, 2026 at Sri S.A.K Jai Maruthi Mahal A/c, Chennai.',
      )}`,
    }
  }, [])

  return (
    <main className="page-shell">
      <article className="invite-card" aria-label="Wedding invitation">
        <section className="opening">
          <div className="scene-decor" aria-hidden="true">
            <span className="hanging-lamp lamp-left" />
            <span className="hanging-lamp lamp-right" />
            <span className="petal petal-one" />
            <span className="petal petal-two" />
            <span className="petal petal-three" />
            <span className="floating-particle particle-one" />
            <span className="floating-particle particle-two" />
            <span className="floating-particle particle-three" />
            <span className="floating-particle particle-four" />
            <span className="floating-particle particle-five" />
          </div>
          <div className="photo-panel" aria-hidden="true">
            <img
              src="/invite/engagement-hands.jpg"
              alt="Engagement rings of Logesh Krishna and Meenakshi"
            />
          </div>

          <div className="opening-copy">
            <p className="blessing">With the blessings of our families</p>
            <div className="ornament" aria-hidden="true">
              <span />
              <i>ॐ</i>
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
          <div className="divider" aria-hidden="true">
            <span />
            <i>ॐ</i>
            <span />
          </div>
          <p>Friday</p>
          <h2 id="wedding-date">
            <span>May</span>
            <strong>29</strong>
            <span>2026</span>
          </h2>
          <p>Sri S.A.K Jai Maruthi Mahal A/c, Chennai - 125</p>
          <div className="ceremony-strip" aria-label="Ceremony dates">
            <div>
              <span>Reception</span>
              <strong>May 28</strong>
              <small>7:00 PM onwards</small>
            </div>
            <div>
              <span>Wedding</span>
              <strong>May 29</strong>
              <small>Muhurtham 5:40 AM</small>
            </div>
          </div>
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
              <span className="event-mark" aria-hidden="true">
                {event.icon}
              </span>
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <strong>{event.time}</strong>
              <p>{event.note}</p>
              <address>
                Sri S.A.K Jai Maruthi Mahal A/c
                <br />
                Madhanandhapuram Main Road, Chennai - 125
              </address>
              <a
                href={getCalendarUrl(`Logesh & Meenakshi - ${event.title}`, event.calendarDates)}
                target="_blank"
                rel="noreferrer"
              >
                Save the date
              </a>
            </div>
          ))}
        </section>

        {/* <section className="memory-section" aria-labelledby="memory-title">
          <div className="memory-photo">
            <img
              src="/invite/engagement-portrait.jpg"
              alt="Engagement cake with Meenu and Logesh written on it"
            />
          </div>
          <div className="memory-copy">
            <p className="section-label">Engagement Moment</p>
            <h2 id="memory-title">Meenu & Logesh</h2>
            <p>
              A sweet memory from the beginning of this journey, carried forward
              into the wedding celebration.
            </p>
          </div>
        </section> */}

        <section className="map-section" aria-labelledby="map-title">
          <div className="divider" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>
          <p className="section-label">Venue Location</p>
          <h2 id="map-title">Sri S.A.K Jai Maruthi Mahal</h2>
          <p className="map-address">Madhanandhapuram Main Road, Chennai - 125</p>
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.206914771899!2d80.14309138743664!3d13.022491581022159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526102b7e797e9%3A0x2c2aa3e32d6feb6e!2sSri%20S%20A%20K%20Jai%20Maruthi%20Mahal%2C%20Madhanandhapuram%2C%20Chennai!5e0!3m2!1sen!2sin!4v1777221807247!5m2!1sen!2sin"
              title="Sri S.A.K Jai Maruthi Mahal map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* <section className="rituals" aria-labelledby="rituals-title">
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
        </section> */}

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
