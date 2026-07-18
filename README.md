# discrete-event-systems.github.io

The Astro source for the Discrete Event Systems organization site:
[discrete-event-systems.github.io](https://discrete-event-systems.github.io/).

The site has separate simulation and game galleries. It is static and does not
need the Rust web server, Postgres, authentication, cookies, analytics, or any
third-party browser requests.

## Artifact provenance

The gallery copies first-party, self-contained HTML renders from the existing
DES repositories without removing or replacing the originals:

| Site artifact | Source |
| --- | --- |
| elevator, Track3t, soccer IP/MIP views | `discrete-event-systems/des-web.rs`, originally generated under `ORESoftware/discrete-event-system` |
| bathroom occupancy lab | `ORESoftware/discrete-event-system.rs` |
| voting algorithm lab | `ORESoftware/discrete-event-system.rs` |

Large HTML artifacts stay gzip-compressed in Git and are decompressed in the
browser only when their sandboxed player approaches the viewport. CI verifies
every vendored file against [`ARTIFACTS.sha256`](ARTIFACTS.sha256) before the
site can deploy.

## Development

Requires Node 22.12 or newer.

```sh
npm ci
npm run build
npm run dev
```

`npm run build` runs Astro's type checker before producing `dist/`.

## Deployment and security

GitHub Actions builds and deploys `main` to GitHub Pages. The workflow uses
least-privilege job permissions, disables persisted checkout credentials, and
pins every action to an immutable commit SHA. Dependabot tracks both npm and
Actions updates.

Embedded artifacts are first-party files loaded into sandboxed frames with no
same-origin access. See [SECURITY.md](SECURITY.md) for private reporting.
