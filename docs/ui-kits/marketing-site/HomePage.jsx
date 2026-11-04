const { Button, Card, SectionHeading, ProductTile, Testimonial, Logo } = window.RiseGameDesignSystem_66bdc7;

const PRODUCTS = [
  { icon: 'calendar-days', name: 'Tryout Scheduler', job: 'The easiest way for leagues to manage tryout signups online. Create time slots, share a link with parents, and let the system handle the rest: no phone calls, no spreadsheets, no chaos.', href: 'https://signups.risegame.com', cta: 'Open Scheduler' },
  { icon: 'clipboard-list', name: 'Tryout App', job: 'The fastest way for leagues to run organized, fair player evaluations. Set up drills, upload your player list, and invite coaches, all before the first kid steps on the field.', href: 'https://www.risegame.com/products', cta: 'Learn more' },
  { icon: 'users', name: 'Draft Platform', job: 'A streamlined draft experience that feels like fantasy sports, backed by real tryout data. Coaches compare athletes side-by-side and make confident picks in real time.', href: 'https://www.risegame.com/products', cta: 'Learn more' },
  { icon: 'file-text', name: 'Player Reports', job: 'Give parents the clarity they have always wanted. RiseGame Reports turn tryout scores into a detailed, readable breakdown, so every family knows exactly where their athlete stands and what to work on next.', href: 'https://www.risegame.com/products', cta: 'Learn more' },
  { icon: 'chart-no-axes-column', name: 'Elevate Tracking App', job: 'Stay connected to every athlete journey from the sideline. The RiseGame Tracking App gives coaches and parents real-time visibility into player development, attendance, and performance throughout the season.', href: 'https://www.risegame.com/products', cta: 'Learn more' },
];

const QUOTES = [
  { quote: 'We all try our best to give 100% to prep for tryouts and drafts for our league. Our board members also all work and have 100 other things to take care of in life. This was a HUGE help making our tryouts and drafts easier for not just the coaches but our league admins who set it up every year.', name: 'Jeremy P.', role: 'League President', location: 'Dallas, TX' },
  { quote: 'Being a first time head coach, this app made it extremely easy to keep track of players and rating them for our draft. I like the grading scale and it was nice to be able to easily keep track of everything. Our league also used the draft platform and it was really cool having all of my scores and notes automatically show up.', name: 'Stephen S.', role: 'Coach', location: 'Houston, TX' },
  { quote: 'After many years of evaluating players while flipping paper tryout lists outside in the wind, it was wonderful to use nothing but the phone to quickly rank players on skills. Our league set the drills up beforehand, so I just showed up and started scoring.', name: 'George L.', role: 'Coach', location: 'Lakeland, FL' },
];

const POSTS = [
  { title: 'Podcast #5: Bear Mayer, Bruce Bolt CEO', date: 'August 22, 2025' },
  { title: 'Podcast #4: Vincent Blue, Houston Astros Organization', date: 'August 4, 2025' },
  { title: 'Podcast #3: Todd Whitting, University of Houston Head Baseball Coach', date: 'July 24, 2025' },
];

function Section({ children, dark, tight, style }) {
  return (
    <section style={{
      padding: (tight ? 'var(--section-y-tight)' : 'var(--section-y)') + ' var(--space-6)',
      background: dark ? 'var(--surface-dark)' : 'var(--surface-page)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)', ...style,
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <div>
      <Section dark style={{ paddingTop: 'var(--space-9)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--size-display-2)', lineHeight: 'var(--leading-display)', color: 'var(--rg-white)' }}>Empower Youth Sports with RiseGame</h1>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)', color: 'var(--rg-dark-mute)', textWrap: 'pretty' }}>
              Transform your organization&rsquo;s management and your athlete&rsquo;s journey with RiseGame&rsquo;s comprehensive products: RiseGame Tryouts for leagues, RiseGame Draft for seamless team selections, and the RiseGame Reports for tracking player development that parents will love.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <Button size="lg" href="mailto:info@risegame.com">Request a Demo</Button>
              <Button size="lg" variant="secondary" onDark onClick={() => onNavigate('Products')}>See the products</Button>
            </div>
          </div>
          <Photo label="Hero video: risegame.com/tutorials" height={300} />
        </div>
      </Section>

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 'var(--space-8)', alignItems: 'center' }}>
          <Photo label="Photo: dad and kid on the field" height={280} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <SectionHeading eyebrow="Insiders, not vendors" title="RiseGame Gets It" />
            <p style={{ margin: 0, fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-muted)', textWrap: 'pretty' }}>
              At RiseGame, we recognize the evolving landscape of youth sports and the unique challenges faced by leagues, parents, and athletes alike. Our team comprises parents, coaches, and board members who have traveled the complex journey of youth athletics.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: 'var(--text-muted)', textWrap: 'pretty' }}>
              For parents, our comprehensive RiseGame app and Reports provide essential visibility into their child&rsquo;s development, celebrating each achievement along the way.
            </p>
          </div>
        </div>
      </Section>

      <Section style={{ background: 'var(--surface-chrome)' }}>
        <SectionHeading eyebrow="Products" title="Explore Our Solutions for Leagues and Parents" style={{ marginBottom: 'var(--space-6)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'var(--space-4)' }}>
          {PRODUCTS.map((p) => <ProductTile key={p.name} icon={p.icon} name={p.name} job={p.job} href={p.href} ctaLabel={p.cta} />)}
        </div>
      </Section>

      <Section dark>
        <SectionHeading onDark eyebrow="Testimonials" title="Inspiring Success Stories From RiseGame Users" style={{ marginBottom: 'var(--space-6)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-4)' }}>
          {QUOTES.map((q) => <Testimonial key={q.name} tone="dark" assetBase="../../../assets/logos/" {...q} />)}
        </div>
      </Section>

      <Section tight>
        <SectionHeading eyebrow="Blog" title="Our Latest Blog Articles" style={{ marginBottom: 'var(--space-6)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'var(--space-4)' }}>
          {POSTS.map((p) => (
            <Card key={p.title} interactive padding="0" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <Photo label="Post image" height={150} style={{ border: 0, borderRadius: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-4)' }}>
                <h4 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--size-h4)' }}>{p.title}</h4>
                <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>{p.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark tight>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Logo variant="rocket" onDark height={44} assetBase="../../../assets/logos/" />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--size-h2)', color: 'var(--rg-white)' }}>Already checked us out? Request a demo.</h2>
          </div>
          <Button size="lg" href="mailto:info@risegame.com">Lets Chat</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomePage, Section });
