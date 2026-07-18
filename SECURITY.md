# Security policy

Please report suspected vulnerabilities privately through GitHub's
**Security → Report a vulnerability** flow for this repository. Do not open a
public issue with exploit details or sensitive data.

The published site is static: it has no authentication, cookies, analytics,
database, or server-side application code. Embedded simulation artifacts are
first-party, self-contained files loaded into sandboxed frames. The deployment
workflow uses a least-privilege `GITHUB_TOKEN` and pins every action to an
immutable commit.

Supported code is the latest commit on `main`.
