# Field

Label + control + hint/error wrapper. Every form control in RiseGame UI sits in a Field.

    <Field label="Player name" hint="As it appears on the roster" htmlFor="p">
      <Input id="p" placeholder="Jordan Reyes" />
    </Field>

Notes
- Errors render in ink with an explanatory sentence: no red, no urgency styling.
