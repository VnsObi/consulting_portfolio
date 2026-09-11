---
title: "Designing systems for unstable infrastructure"
date: "2025-10-24"
summary: "What I have learned running technology across sites where neither power nor connectivity can be assumed, and how that changes the architecture rather than just the ops plan."
readTime: "6 min read"
tags: ["Infrastructure", "Architecture"]
---

A lot of architecture advice quietly assumes the building stays powered and the link stays up. Those assumptions are load-bearing, and in plenty of places they do not hold.

I run technology operations across multiple healthcare sites, and I build software for organisations working in the same conditions. Power fails. Fibre gets cut. A link degrades to the point where it is technically connected and practically useless, which is often worse than being plainly down.

The instinct is to treat this as an operations problem: buy better hardware, add redundancy, escalate to the provider. Those things help. But past a certain point, unreliable infrastructure is an architecture problem, and no amount of operational effort compensates for software that assumed conditions it does not have.

## Degraded is not the same as down

The failure mode people design for is binary — connected or not. The failure mode that actually causes trouble is the one in between: a connection that responds, slowly, sometimes.

Software handles a refused connection well. It fails fast and you know where you stand. Software handles a connection that takes forty seconds to answer very badly. Requests pile up, timeouts are either too short or too long, retries multiply the load on a link that was already struggling, and the interface gives the user no signal beyond a spinner.

Designing for this means deciding explicitly what the system does when a response is slow rather than absent, and being willing to give up on it rather than wait indefinitely.

## Work locally, reconcile later

The structural answer is that the work has to be able to happen where the people are, without a round trip.

That means the device holds what it needs to function, operations complete against local state, and those changes reconcile with the central system when there is something to reconcile with. In HealthOS this is the core of the design rather than a fallback path — the system treats disconnected operation as normal, and being connected as one of several states rather than the only supported one.

The important discipline is that there can be no operations that only work when connected. The moment one exists, it will be the one somebody needs during an outage.

## Power failures are not clean

Connectivity gets the attention, but power is the messier problem, because a workstation that dies mid-operation does not announce it.

A dropped connection leaves a request unanswered, which is recoverable. A machine losing power halfway through writing something leaves state that may be partially applied, and it comes back up with no memory of what it was doing. If the design assumes operations either complete or do not start, power interruption breaks that assumption directly.

This is why write paths need to be safe to repeat. Not as a nicety, but because after an unplanned shutdown you frequently do not know whether something landed, and the only reasonable move is to attempt it again.

## Make the state visible

When conditions vary, the person using the system needs to know which conditions they are currently in.

This is easy to skip. The system knows it is degraded; surely it can just cope quietly. But coping quietly means someone makes a decision on data that is stale in a way nothing told them about. Showing the state — clearly, persistently, not as a toast that disappears — costs very little and prevents a category of mistake that is otherwise invisible until much later.

## Choose boring components

In an environment where things fail regularly, the value of a component you can reason about goes up sharply.

Debugging a clever distributed setup at 2am, on a site with intermittent connectivity, using a phone as a hotspot, is a specific kind of unpleasant. Simple, well-understood pieces — a Linux box, a container, a database you know the behaviour of — are worth more than sophisticated ones whose failure modes you have only read about.

## The general point

If your environment is genuinely unreliable, resilience cannot be a layer added at the end. It shows up in how state is stored, how operations are structured, how failure is surfaced, and what you are willing to depend on.

Building this way costs more up front. It costs considerably less than discovering, during an outage, that the system was only ever designed for the good case.
