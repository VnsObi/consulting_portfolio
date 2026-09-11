---
title: "What an AI agent needs before you can leave it running"
date: "2026-05-06"
summary: "Notes from taking a retrieval-and-reasoning agent from a working demo to something that runs unattended and touches a blockchain."
readTime: "8 min read"
tags: ["AI", "Architecture"]
---

I delivered a research and decision agent for a blockchain-based truth-market product. It collected claims, used retrieval and language-model workflows to interpret the evidence behind them, and then carried the result through to on-chain operations.

The gap between the version that worked in a demo and the version that could be left running was larger than the gap between having no agent and having a demo. Most of what follows is what lives in that gap.

## A demo has a human in it

The unstated component of every agent demo is the person watching it. They notice when the output is nonsense. They re-run it. They quietly skip the case that would have embarrassed the system, and they stop it before it does anything expensive.

Production removes that person. Everything they were doing has to be built.

That reframing was the most useful thing I did on the project. For each step, I asked what the human demonstrator would have caught there — and then implemented that specific check, rather than reaching for general robustness.

## Structured output is a correctness requirement

An agent that returns prose has handed you a parsing problem and called it an answer.

Forcing the model to emit structured output changes the failure mode into something you can act on. When a field is missing or a value is outside the permitted set, that is a detectable condition with an obvious response. When the model instead writes a fluent paragraph that means something slightly different from last time, you find out much later and in a worse way.

Structured output does not make the model correct. It makes incorrectness visible, which is the property you actually need.

## Logs have to reconstruct a decision

Ordinary application logging records what happened. For an agent, that is not enough, because the interesting question is never "did it run" — it is "why did it conclude that".

The answer depends on things a normal log throws away: what was retrieved, what was passed to the model, what came back before any post-processing, and which branch the result took. If you cannot reassemble that chain afterwards, you cannot debug a bad decision. You can only observe that one occurred and shrug.

This is the part I would push hardest on with anyone building a similar system. The logging is not operational overhead around the agent. It is part of the agent.

## Failure handling, because the model will fail

Eventually the model returns something unusable. Malformed, empty, confidently wrong, or simply a timeout because the provider is having an afternoon.

That is not an exceptional case to be handled someday. At any real volume it is a routine case, and it needs a defined path: retry with different framing, fall back, or stop and surface the item rather than guessing. Which of those is right depends on what happens next, which brings up the thing that dominated the design.

## The asymmetry that shapes everything

A bad language-model output costs almost nothing. You discard it and try again.

An on-chain action based on a bad output costs money and cannot be undone.

Those two facts sit next to each other in the same pipeline, and the entire architecture follows from taking the difference seriously. There has to be a gate between "the model produced something" and "the system did something irreversible" — a point where the result is validated as a claim about the world before it becomes a transaction.

Retries need the same care. Retrying a read is free. Retrying a write that may have already landed is a way to do the same expensive thing twice, so operations have to be idempotent or guarded in a way that survives being attempted more than once.

## Batching is not only an optimisation

Batch and multicall operations look like performance work and get deprioritised as such. In this system they were closer to correctness work.

Sending many operations individually means many opportunities to be interrupted halfway, leaving a partially applied set of changes that nothing is tracking. Grouping them reduces both cost and the number of distinct states the system can be caught in.

## Timing is part of the domain

The product ran in encrypted rounds with challenge cycles, which means operations had deadlines. An agent that is correct but late is wrong.

That has to be explicit in the design: know the deadline, know how long each step typically takes, and decide in advance what to do when the budget runs out. An agent that discovers it is late by missing the window has no strategy — it just fails.

## Some of it only appears in production

After delivery there was remediation work, and I would expect that on any comparable system. Certain failures are only reachable through real traffic over real time: the provider behaving differently under load, an input shape nobody anticipated, a slow drift in what the retrieved context looks like.

Planning for a hardening period after launch is more honest than assuming the system is finished when it ships. It is going to happen either way; the only question is whether it was budgeted.
