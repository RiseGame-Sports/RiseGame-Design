# ScoreScale

Tap-to-score row for coach evaluation. Always call the output "evaluation scores", never bare "scores".

    <ScoreScale label="Fielding" max={5} value={4} onChange={setScore} size="lg" />

Notes
- size="lg" (52px) for on-field mobile use; "sm" for read-only report tables.
- No colour ramp across the scale — only the selected number goes accent.
