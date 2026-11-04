const { Button, Card, Badge, Field, Input, Select, Checkbox, SlotCard, SectionHeading, Logo, Icon, Toast, ProgressBar } = window.RiseGameDesignSystem_66bdc7;

function StepDots({ step }) {
  const labels = ['Division', 'Time slot', 'Player', 'Done'];
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
      {labels.map((l, i) => (
        <span key={l} style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)', fontWeight: 700,
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
          color: i <= step ? 'var(--rg-ink)' : 'var(--text-muted)',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20,
            borderRadius: 'var(--radius-sm)', fontSize: 11,
            background: i < step ? 'var(--rg-accent)' : i === step ? 'var(--rg-ink)' : 'var(--rg-line)',
            color: i === step ? 'var(--rg-white)' : 'var(--rg-black)',
          }}>{i < step ? <Icon name="check" size={12} /> : i + 1}</span>
          {l}
        </span>
      ))}
    </div>
  );
}

function ParentSignup() {
  const data = window.SCHEDULER_DATA;
  const [step, setStep] = React.useState(0);
  const [division, setDivision] = React.useState(data.divisions[1]);
  const [slotId, setSlotId] = React.useState(null);
  const [player, setPlayer] = React.useState('');
  const slot = data.slots.find((s) => s.id === slotId);

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-7) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Logo variant="r" height={44} assetBase="../../../assets/logos/" />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-h3)', fontWeight: 700 }}>{data.league} Tryouts</div>
          <div style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-muted)' }}>Pick a time slot. It takes about a minute.</div>
        </div>
      </div>
      <StepDots step={step} />

      {step === 0 ? (
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <SectionHeading level={3} title="Which division is your athlete trying out for?" />
          <Field label="Division" htmlFor="div" hint="Not sure? Ask your league board.">
            <Select id="div" options={data.divisions} value={division} onChange={(e) => setDivision(e.target.value)} />
          </Field>
          <Button style={{ alignSelf: 'flex-start' }} iconRight="chevron-right" onClick={() => setStep(1)}>Choose a time slot</Button>
        </Card>
      ) : null}

      {step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <SectionHeading level={3} title="Available time slots" />
            <Badge tone="accent">{division}</Badge>
          </div>
          {data.slots.map((s) => (
            <SlotCard key={s.id} date={s.date} time={s.time} location={s.location}
              capacity={s.capacity} spotsLeft={s.capacity - s.taken}
              selected={slotId === s.id} onSelect={() => setSlotId(s.id)} />
          ))}
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="ghost" iconLeft="chevron-left" onClick={() => setStep(0)}>Back</Button>
            <Button disabled={!slotId} iconRight="chevron-right" onClick={() => setStep(2)}>Continue</Button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <SectionHeading level={3} title="Who is trying out?" body={slot.date + ' · ' + slot.time + ' · ' + slot.location} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)' }}>
            <Field label="Player name" required htmlFor="pn"><Input id="pn" value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Jordan Reyes" /></Field>
            <Field label="Date of birth" htmlFor="db"><Input id="db" icon="calendar-days" placeholder="MM / DD / YYYY" /></Field>
            <Field label="Parent email" required htmlFor="pe" hint="Confirmation and reports go here"><Input id="pe" icon="mail" placeholder="you@email.com" /></Field>
            <Field label="Mobile" htmlFor="pm"><Input id="pm" icon="phone" placeholder="(555) 555-5555" /></Field>
          </div>
          <Checkbox label="Text me a reminder the morning of tryouts" defaultChecked />
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="ghost" iconLeft="chevron-left" onClick={() => setStep(1)}>Back</Button>
            <Button disabled={!player.trim()} onClick={() => setStep(3)}>Reserve this slot</Button>
          </div>
        </Card>
      ) : null}

      {step === 3 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Toast>Slot reserved — check your email for the confirmation.</Toast>
          <Card tone="alt" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <SectionHeading level={3} eyebrow="You are on the list" title={player + ' — ' + division} body={slot.date + ' · ' + slot.time + ' · ' + slot.location} />
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Button variant="secondary" iconLeft="calendar-plus">Add to calendar</Button>
              <Button variant="ghost" onClick={() => { setStep(0); setSlotId(null); setPlayer(''); }}>Sign up another player</Button>
            </div>
          </Card>
          <ProgressBar label="Slots filled for this division" value={27} max={60} />
        </div>
      ) : null}
    </div>
  );
}
Object.assign(window, { ParentSignup });
