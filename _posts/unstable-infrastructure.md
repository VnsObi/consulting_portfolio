---
title: "Designing systems for unstable infrastructure"
date: "2025-10-24"
summary: "How to build resilience when power and internet connectivity cannot be guaranteed."
readTime: "5 min read"
---

## The Reality of Constrained Environments

In many global markets, "always online" is a myth. System architects often design for 99.99% uptime assumptions that simply don't exist in regions with unstable power grids or intermittent fiber connectivity.

### The Conflict-Free Replicated Data Type (CRDT) Solution

Moving logic to the client isn't just a performance optimization; it's an operational necessity. By using CRDTs and local-first databases like SQLite or PouchDB, we ensure that business continues even when the connection drops.

1. **Optimistic UI:** Show success immediately, sync later.
2. **Background Sync:** Use Service Workers to retry requests.
3. **Conflict Resolution:** Last-write-wins is rarely enough for inventory management.

> "A system that stops working when the internet blinks is a system that loses money."
