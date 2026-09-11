---
title: "Four connectivity states, one clinic"
date: "2026-09-02"
summary: "Offline-first is usually modelled as a boolean. Building HealthOS taught me that a hospital needs at least four states, and that the user has to be able to see which one they are in."
readTime: "8 min read"
tags: ["Architecture", "Offline-first", "Healthcare"]
---

Most software treats connectivity as a boolean. You are online, or you are offline and the app shows a grey banner and stops being useful.

That model does not survive contact with a hospital in a place where the link is unreliable. A ward cannot stop admitting patients because a fibre cut happened somewhere upstream. The pharmacy still dispenses. The lab still runs samples. Billing still has to record what was done, because a consultation nobody recorded is a consultation nobody gets paid for.

So when I designed HealthOS, connectivity stopped being a boolean and became a state machine with four states. The status badge in the top bar is not decoration — it is the most important control in the interface.

## The four states

**Cloud.** Normal operation. The device is reaching the central service, reads are current, writes go straight through.

**Offline.** No connection to anything. The device works entirely from its local store. Every screen still renders, every workflow still completes, and writes are queued locally.

**LAN Hub.** This is the state most systems miss, and it is the one that matters most in practice. The building has a working local network but no route to the internet. The hospital has not lost its ability to coordinate — five devices in the same corridor can still agree with each other. They just cannot reach anything outside. In this state devices sync to an on-site hub instead of the cloud.

**Syncing.** Connectivity has returned and queued local work is reconciling with the server. This is not an instant. It is a period, sometimes a long one, during which the device holds a mix of confirmed and unconfirmed state.

## Why LAN Hub earns its place

A naive design collapses LAN Hub into Offline, because from the cloud's point of view they look identical: the server hears nothing either way.

But they are not the same for the people doing the work. Consider a patient moving from front desk to nursing to the doctor to the lab. If each device is independently offline, that patient's record forks four ways and has to be merged later. If those same devices can see each other over the local network, the record moves with the patient and there is nothing to merge.

The difference between those two outcomes is not a performance detail. It is the difference between a clean afternoon and an evening spent reconciling four versions of the same visit by hand.

## Syncing has to be visible

The instinct is to hide sync. Run it in the background, keep the interface clean, do not bother the user with plumbing.

I think that instinct is wrong for clinical software. What a user can trust on screen changes depending on the state they are in. In Cloud, the queue count they are looking at is current. In Offline, it is current as of this device — another nurse may have admitted someone five minutes ago and this screen has no way of knowing. Those two numbers look identical. Only the badge tells them apart.

Hiding the state means asking people to make decisions about patients without telling them how fresh their information is. So the badge is always on screen, and it says exactly one of the four things.

## What this costs you

Offline-first is not a feature you add. It is a constraint that reaches into every layer, and it is worth being honest about the price.

Identifiers cannot come from the database. If a device creates a patient record with no connection, something has to assign that record an identity locally, and that identity has to survive the merge. Auto-incrementing primary keys assigned by the server are no longer available to you.

Every write path needs a local equivalent. There is no such thing as an operation that only works when connected, because any of them might be attempted in any of the four states.

Conflicts become real rather than theoretical. Two devices can legitimately touch the same record while unable to see each other, and something has to decide what happens. That decision is domain-specific — the right answer for an inventory count is not the right answer for a set of clinical notes, and a single global rule will be wrong for one of them.

And the tenant boundary has to hold on the device. A hospital's data sitting in a local store is still that hospital's data, with the same access rules it has on the server.

## What I would tell someone starting

Decide early how many states your system actually has, and design for the honest number rather than the convenient one. Two is almost always too few for environments where connectivity is genuinely unreliable.

Then put the state in front of the user. The system knowing which mode it is in is not the same as the person using it knowing, and in clinical work that gap is where mistakes live.
