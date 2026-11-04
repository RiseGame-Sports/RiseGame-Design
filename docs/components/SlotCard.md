# SlotCard

A bookable tryout time slot in the Scheduler: time, date, location, remaining spots.

    <SlotCard date="Sat, Feb 21" time="9:00 to 9:45 AM" location="Field 3" spotsLeft={4} capacity={12} onSelect={fn} />

Notes
- Full slots dim to 55% and read "Full" in neutral: no red, no countdown urgency.
- Selected state is a 2px accent border, not a fill.
