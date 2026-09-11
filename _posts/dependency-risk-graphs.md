---
title: "A risk score you cannot explain is noise"
date: "2026-03-10"
summary: "Modelling package dependencies as a graph for Argus Protocol, and why tracing the reason behind a score mattered more than the scoring itself."
readTime: "7 min read"
tags: ["Security", "Architecture"]
---

Argus Protocol analyses package dependencies and propagates risk across the relationships between them. The premise is simple enough to state in a sentence: a problem in one package matters to everything that depends on it, directly or otherwise.

Turning that sentence into infrastructure took longer, and the hardest requirement was not the one I expected.

## The graph is the easy part

Packages are nodes. A dependency is an edge. Risk originates somewhere and flows along the edges toward the things that would be affected by it. That structure falls out of the problem almost immediately.

The complications arrive as soon as you try to propagate anything across it.

Dependency graphs contain cycles, so naive recursion does not terminate. They are also deep — a package six levels down is still in your build, and the thing that compromises you is rarely a direct dependency you chose deliberately. It is usually something you have never heard of that arrived as a transitive dependency of something you did choose.

Then there is the question of what happens to risk as it travels. If it dilutes with distance, a serious problem far away becomes invisible, which defeats the point. If it does not dilute at all, everything in a large ecosystem eventually scores as maximum risk, which also defeats the point because a score that is always red carries no information.

Neither extreme is usable, and there is no universally correct answer in between. What there is instead is a set of rules that have to be defensible — which is where the real requirement showed up.

## Nobody acts on a number

Imagine you are told one of your dependencies scores 7.4.

Your first question is not "how was that computed". It is "what am I supposed to do about it", and you cannot answer that without knowing what produced the number. Is it 7.4 because the package itself has a known problem, or because something eleven levels down does? Is the risk in code you could actually change, or in a transitive dependency you have no relationship with?

A score with no reason attached gets ignored. Not disputed — ignored, which is worse, because the system keeps producing output and nobody reads it. A security tool that is routinely dismissed is not neutral; it is actively harmful, because it occupies the space where a tool people trust could have been.

So the requirement became: every score has to carry the chain of reasons that produced it, back to the origin. Not a summary. The actual path, so that someone can look at it and see that risk entered at a specific package for a specific reason and reached them through a specific sequence of dependencies.

## That requirement shapes the data model

Once reason tracing is a hard requirement rather than a nice-to-have, it stops being a reporting feature and starts driving the storage design.

You cannot compute scores, store the numbers, and reconstruct the reasoning later — the reasoning is gone. The propagation has to record why at the moment it happens, as a first-class part of the result rather than a log line beside it. What gets persisted is not a score per package but a score plus the derivation that justifies it.

This costs more to store and more to compute. It is worth it, because the alternative produces output nobody uses.

It also has a useful side effect: a system that can explain its conclusions is a system whose rules you can argue with. When a score looks wrong, the trace shows whether it is the rule that is wrong or the data, and both are fixable. Without the trace you only have an opinion about a number.

## Visualisation is not decoration

Given a graph and a set of traced reasons, the natural presentation is the graph itself, with risk states visible on it.

This is one of the few cases where a visualisation is not a nicer way to show a table. The shape of the thing is the explanation. Seeing that risk fans out from one node into a large cluster of dependents communicates something that a sorted list of scores genuinely cannot, because the list has thrown away the relationships that made the scores what they are.

## What carries over

Most of this generalises past package dependencies. Any system that propagates a derived judgement across relationships — credit, fraud, access, supply chain, service dependencies — runs into the same three questions.

How does the value change as it travels, and can you defend that choice. Can the result be traced back to its cause, or does it arrive as an assertion. And is the output shaped so that the person receiving it knows what to do next.

Get the first one wrong and the numbers are poor. Get the second one wrong and it does not matter how good the numbers are, because nobody will act on them.
