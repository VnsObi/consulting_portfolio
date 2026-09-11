---
title: "When custom software is worth it"
date: "2025-11-02"
summary: "I have deployed bought systems across multiple healthcare sites and I am building a platform from scratch. The decision between the two is less about cost than about who owns the problem."
readTime: "7 min read"
tags: ["Architecture", "Delivery"]
---

I have been on both sides of this decision in the same year.

In my work running technology operations across healthcare sites, I have rolled out systems we bought: EMR, connectivity, ticketing, HR platforms. At the same time, through VNSIS, I am building HealthOS from scratch — a clinical and administrative platform for hospitals working in difficult conditions.

Neither choice is the default. What follows is how I actually decide.

## Buying is the correct answer more often than builders admit

If something exists, it is maintained, and it does most of what you need, buy it. You are not only buying the software. You are buying every edge case its vendor has already hit, every compliance question they have already answered, and the fact that its bugs are someone else's weekend.

The mistake is comparing the purchase price to the cost of writing the first version. That is not the comparison. The comparison is the purchase price against the cost of writing it and then owning it for as long as your organisation exists — patching it, migrating it, and explaining it to whoever inherits it after you leave.

Most internal tools are never valued honestly this way, which is how organisations end up maintaining a small pile of bespoke systems that no vendor would have bothered to build because the market for them is one company.

## What actually pushes me to build

**The thing is the point of the organisation.** If the capability is the reason a customer chooses you, handing it to a vendor means competing on someone else's roadmap.

**The environment invalidates the assumptions the product is built on.** This is the HealthOS case, and it is the strongest reason I know. Most clinical systems assume reliable connectivity. Not as a configurable option — as a foundation. You cannot buy your way out of that with settings, because the assumption reaches into how the software stores state and when it decides an operation succeeded. When a product's architecture contradicts your operating conditions, customisation will not save you.

**The integration cost exceeds the build cost.** Sometimes the pieces exist but making them talk to each other is a bigger project than the thing itself, with a worse result and more moving parts.

**Regulation or data residency closes off the standard option.** Less common than people claim, but genuine when it applies.

## What should not push you to build

Not liking the interface. Not being able to get a feature prioritised. Not the belief that your requirements are unusually special — they usually are not, and the vendor has met them before.

And not the fact that building looks cheap because you already employ engineers. Their time is not free; it is committed to something else, and that something else is what you are really paying.

## The version people skip: buy it, then build around it

This gets dismissed as a compromise, and it is frequently the right answer.

Buy the commodity core. Build the thin layer that makes it fit how you actually work — the integration, the reporting nobody else needs, the workflow specific to your operation. You get the vendor's maintenance burden on the large complicated part, and ownership of the small part that is genuinely yours.

The discipline is keeping that layer thin. It has a tendency to grow until you have built the whole system anyway, without ever deciding to.

## The question underneath

Every build-versus-buy decision is really about who owns the problem when it breaks at an inconvenient time.

Buy, and the answer is a vendor, on their schedule, with their priorities — which is a genuinely good deal for problems that are not central to you. Build, and the answer is you, permanently.

The second is the right trade when the problem is one you cannot afford to have someone else's priorities attached to. For most problems in most organisations, it is not.
