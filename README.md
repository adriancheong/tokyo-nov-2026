# Tokyo itinerary site

A single static page showing the November 2026 eating itinerary, built to be
shared with family as a link.

## Updating the trip

Everything that changes lives in **`itinerary.js`**. Nothing else needs touching.

```bash
# edit itinerary.js
git commit -am "Move Bird Land to Wednesday"
git push
```

GitHub rebuilds the page within a minute or so. Hard-refresh if you don't see
the change immediately (⌘⇧R).

To preview before pushing, just open `index.html` in a browser — it works
straight off the filesystem, no server needed.

### The shape of the data

Each day is an object with a list of meals:

```js
{
  dow: "Tuesday", date: "10", month: "Nov",
  area: "Ueno Park and Yanaka",
  meals: [
    { slot: "Lunch", time: "Arrive 11:00", name: "Izuei Honten",
      status: "walkin", notes: ["..."] }
  ]
}
```

`status` controls the mark next to each meal:

| value | shows as |
|---|---|
| `booked` | filled red dot — reserved, time is fixed |
| `walkin` | open green ring — just turn up |
| `tbc` | dashed blue ring — being arranged |
| `free` | faint ring — nothing planned |

Every field except `name` is optional. Omit one and that line simply doesn't
render. The optional extras are `jp` (Japanese name), `dish`, `where`, `walk`,
`tel`, `stars`, `notes`, `why`, `menu` and `fallback` — see the existing
entries for how each looks.

## Files

```
index.html          page shell
itinerary.js        ← the trip. this is the one you edit
assets/style.css    styling
assets/render.js    turns the data into the page
.nojekyll           tells GitHub to serve the files as-is
```

`.nojekyll` matters: without it GitHub runs the files through Jekyll, which
ignores anything it doesn't recognise and can silently drop assets.

## Turning on GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: **main**, folder
**/ (root)** → Save.

The URL appears on that same screen after a minute, in the form
`https://<user>.github.io/<repo>/`.

Pages needs the repository to be **public** unless the account is on GitHub Pro
or above. Note that a published Pages site is reachable by anyone with the
link whatever the repo's visibility — access-controlled Pages is an Enterprise
feature only.

## What's deliberately not in here

No reservation numbers, no booking authentication codes, no names, no email
addresses, no totals paid. Restaurant names, public telephone numbers, menu
prices and opening hours are all public information and are included.

The page carries `noindex, nofollow`, which asks search engines to stay away.
It's a request, not a lock.
