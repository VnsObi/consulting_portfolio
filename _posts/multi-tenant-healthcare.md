---
title: "Multi-tenancy when the tenants are hospitals"
date: "2026-07-15"
summary: "Three separations get conflated in multi-tenant systems: tenant, role, and workflow. Clinical software makes the cost of confusing them obvious."
readTime: "7 min read"
tags: ["Architecture", "Security"]
---

Multi-tenancy in most SaaS means rows in a shared table with a tenant column, and a discipline about never forgetting the `WHERE` clause. That works until the data is clinical, at which point a forgotten clause is not a bug report — it is one hospital's patients visible inside another hospital.

Building HealthOS forced me to separate three things that often get treated as one problem.

## Separation one: tenant

Hospital A must never see hospital B. This is absolute and has no exceptions, no admin override, no support shortcut.

The mistake I wanted to avoid is enforcing this in application logic. If the tenant boundary lives in the handlers, then it holds only as long as every handler remembers it, forever, including the one written at the end of a long week by someone who joined last month.

So the boundary belongs below the application logic, in a place where writing a query that crosses it is difficult rather than merely discouraged. The specific mechanism matters less than the property: a developer should have to work hard to breach the boundary, not merely be careless.

## Separation two: role

Inside a single hospital, a pharmacist and a nurse are not looking at the same system. Neither is a cashier, a lab scientist, or an administrator.

This is ordinary role-based access control and it is well understood. The part that is less well understood is that roles in a hospital are not tidy. People cover for each other. A small clinic may have one person who is genuinely the front desk and the cashier. A role model that assumes clean separation of duties will be worked around within a week, and workarounds are worse than a model that admitted the overlap up front.

## Separation three: workflow

This is the one that gets missed, and it is the one that shapes clinical software most.

A patient record does not sit still. It moves: front desk, nursing, doctor, laboratory, pharmacy, billing. The same record, the same patient, one continuous visit. At each stage a different person has a different kind of authority over it.

Nursing can record vitals but does not price anything. The doctor orders a test but does not resolve the payment that gates it. Billing can settle an invoice but has no business editing the clinical note that justified it. The lab can enter a result but should not be able to quietly change the order it came from.

None of that is expressible as "user X has role Y". It depends on where the record is in its journey. Authority is a function of the workflow stage, not just of the person.

Treating this as a role problem produces either roles so broad they are meaningless, or a combinatorial explosion of roles like `nurse_who_can_also_amend_lab_orders`. Treating it as a workflow problem — where the record's stage is part of the decision — keeps the role list short and the rules legible.

## Offline makes all three harder

Everything above is easier when there is exactly one copy of the truth and it lives on a server you control.

HealthOS is offline-first, which means the data also lives on devices, in buildings, on a local network, sometimes for a while. The tenant boundary has to hold there too. A local store is not a cache you can be relaxed about — it is the same data with the same obligations, sitting somewhere physically less controlled than a datacentre.

The same applies to roles and workflow stages. A device that has been offline for six hours still has to refuse the operations that a connected device would refuse. Authorisation cannot be something the server does on your behalf, because in three of the four connectivity states the server is not there to do it.

## What I would tell someone starting

Decide the tenant boundary before you write the first query, and put it somewhere that does not rely on everyone remembering it.

Then ask whether the thing you are about to call a role is actually a role, or whether it is a stage in a process wearing a role's clothes. In any system where a record moves between people — clinical, logistics, claims, onboarding — it is usually the second one, and the model gets much simpler once you say so.
