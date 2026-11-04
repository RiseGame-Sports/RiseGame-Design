# Dialog

Centered modal over a 60% black scrim, used to confirm a slot booking, close signups, publish reports.

    <Dialog title="Close signups?" onClose={fn}
      footer={<><Button variant="ghost">Cancel</Button><Button>Close signups</Button></>}>
      Parents will no longer be able to pick a time slot.
    </Dialog>

Notes
- The scrim is positioned absolute: give the containing screen position:relative.
- 8px radius, one overlay shadow. Destructive actions still use the normal palette, never red.
