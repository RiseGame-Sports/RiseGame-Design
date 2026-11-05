# IconButton

Square icon-only control for toolbars, table rows and app chrome.

    <IconButton icon="pencil" label="Edit slot" />
    <IconButton icon="plus" label="Add drill" variant="accent" />

Notes
- 32 / 40 / 48px boxes; 48px is the mobile-app minimum tap target.
- ghost for row actions, outline for toolbars, accent for the one add action.
- Hover colors apply only where the device has hover (`(hover: hover)`). A tap on a phone leaves the resting colors.
