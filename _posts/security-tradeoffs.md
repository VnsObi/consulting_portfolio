---
title: "Security trade-offs for small teams"
date: "2025-12-10"
summary: "The controls I put in first when there is no security budget, no dedicated team, and real consequences if something goes wrong."
readTime: "6 min read"
tags: ["Security", "Infrastructure"]
---

Most security guidance is written for organisations with a security function. If you are a small team, or one person covering technology for an organisation that has other priorities, most of that guidance is describing a destination with no route to it.

I work across both ends of this. I run technology operations for healthcare sites where the data is genuinely sensitive, and I have set up access control and engineering process for a distributed startup team. In neither case was there a security department. Here is where I put the effort.

## Frameworks are maps, not checklists

ISO 27001 and the NIST Cybersecurity Framework are useful to me as structure — they name the categories so you notice the one you forgot. They are not a to-do list for a small team, and treating them as one produces a lot of documentation and not much security.

Read them for coverage. Implement based on what would actually hurt you.

## Identity first, because it is the thing that scales

The single highest-value control is knowing who someone is and being able to remove them.

Everything else depends on it. Access reviews are meaningless without identity. Audit logs are unattributable. Offboarding turns into an archaeology exercise across a dozen systems, which is why so many organisations have live accounts belonging to people who left two years ago.

Consolidate onto one identity provider and connect everything you can to it. This is unglamorous and it is the work that makes the rest possible.

## Least privilege, applied where it costs you nothing

The full version of least privilege is a large project. The cheap version is most of the benefit: default to no access, and grant on request.

The reason this stays cheap is that it is only cheap at the start. Retrofitting it onto a system where everyone has been an administrator for three years is genuinely hard, because you no longer know which of those permissions anyone is actually using. Starting closed and opening up deliberately costs almost nothing; the same end state reached backwards costs a great deal.

## Secrets are where small teams are most exposed

In my experience this is the most common serious weakness, and it is rarely the result of anyone being careless in the moment.

Credentials get shared in a chat to unblock someone, put in a config file to get a deployment working, or committed because the repository was private at the time. Each of those is a reasonable decision under deadline pressure. Collectively they mean the organisation no longer knows where its credentials are, which means it cannot rotate them, which means a departing contractor is an open question rather than a solved one.

Decide where secrets live before the first deadline, because after it you will be moving them rather than placing them.

## Match the control to the actual risk

A clinic's patient records and a startup's staging environment do not deserve the same controls, and pretending otherwise is how security becomes something people route around.

When the friction is disproportionate to the risk, people build workarounds, and the workarounds are always worse than the control they avoided — a shared password, a permanently open port, an exception that was meant to be temporary. A control that is bypassed is worse than no control, because it also produces the false belief that the risk is handled.

## Security in the build, not after it

The cheapest place to handle a security concern is in the design, when it is still a decision rather than a defect.

Who can see this. What happens if this device is lost. Where does this credential come from. Those questions cost minutes during architecture and days once the system exists. This is the main reason I want security in the architecture review rather than in a scan at the end — a scan tells you what you built wrong, which is useful, but by then you are paying to change it.

## The honest summary

For a small team, I would rather have four controls that are genuinely in place than twenty that exist on paper.

Know who your users are. Give them the least you can. Keep your secrets somewhere deliberate. Make sure you can reconstruct what happened. That is not a complete security programme, and it is far more than most organisations of that size actually have.
