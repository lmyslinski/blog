---
title:  "Tech debt is your fault"
description: "How to build a culture of continuous tech debt reduction"
pubDatetime: 2022-11-17T00:00:00
tags:
 - tech 
 - leadership
 - product
 - engineering
image:
  path: ../../assets/images/tech-debt.png
---

## Introduction

Tech debt is one of the most brutal adversaries of all tech products. If not taken care of regularly, you might find yourself either struggling to keep the product afloat or even hating your job altogether. There is however a simple solution to that, and I'm quite surprised that this approach is not more prevalent across IT teams and companies:

*If you're part of an engineering team, it is very much your responsibility to make sure that the software you're building evolves sustainably, regardless of your position.*

Before we dive into the details, let's explore a very quick hypothetical case study:

A company decides to build a new product, a team is put together. The initial deadline for the MVP is strict, so the team cuts some corners but they do make the deadline. As the product gets greenlit, requests for new features keep coming in, setting the roadmap for the next iterations. The customer count starts growing, which is great, however having customers also means having bugs, which must be addressed. The technical problems start to pile up, up to a point where development slows down due to process overhead acquired earlier. The team gets increasingly frustrated with addressing legacy issues and having to support new features without resolving old issues. The turnover rate starts to increase, development slows down even further, and cost starts to rise. Sooner or later, the company reaches a critical point where the cost of development gets too high and the leadership starts exploring their options. They usually boil down to these two:

- Taking some time off feature development to clean up the tech debt and address the most painful issues
- Rewriting the software from scratch

Needless to say, both options are rather expensive. The leadership will always have a hard time signing off on essentially sacrificing engineering time for no direct business gain. A rewrite is even more costly, although sometimes it seems like there is no other way. If the product you're working on reaches such a point, you (as the engineering team) have effectively failed.

## The bigger picture

It is naive but common to envision any software product/organization as a group of people working towards a shared goal. From the outside it might seem like that, however internally, different groups have different objectives:

- The product team wants to add more features in response to customer demands
- The finance team wants to keep costs under control and increase revenue
- The support team wants fewer bugs and on-call situations
- The leadership team wants their KPIs met

Instead of having a group of people pulling the rope in the same direction, we have a bunch of different groups pulling the rope in *slightly* different directions. Sometimes these directions overlap, but more often than not they're working *against* one another:

- new features =/= product stability
- stable cost =/= monitoring

And then there's one direction no group is explicitly pulling towards - long-term maintainability, the opposite of which is more commonly known as tech debt. Usually, it's not visible until the interests of other groups start being compromised. But by that point, it can be too late.

## The breakdown

So let's take a step back and think about how we can avoid ending up in such a spot in the first place. There is an important distinction we need to make:

| Small debt               | Large debt      |
|--------------------------|-----------------|
| flaky/failing tests      | architecture    |
| missing automation       | infrastructure  |
| tight component coupling | release process |

Small debt is anything that can be addressed incrementally and usually does not directly translate to business value. Large debt usually requires a larger effort and comes with a much bigger cost/risk of addressing it. In this post, we're only going to focus on the small debt.

One might argue that small debt is not a big deal. There is no way to avoid incurring it with time, as one thing that we know for sure about software is that it is constantly changing. You can go quite far and be very successful while having tons of debt and for the most part you will be fine. That is until you reach a point where you're not. Since small debt is not visible to the outside, it does not directly translate to business value. Or does it?

No engineer likes working on bugs, performing manual, repetitive tasks, or reading through 10-year-old spaghetti code. The more of those, the less your engineering team will enjoy their work. This directly translates to a greater turnover rate, cost of hiring, and ultimately, development cost overall. I don't know a single engineer that has changed jobs because the company lacked fruits at the office or the company events were too rare, but I know a ton who've done so because they were too tired of having to maintain poorly maintained software (myself included).

The engineering team is usually responsible for providing estimates. Although software engineers are notoriously bad at providing estimates, it is where the best solution lies:

*Inflate the estimates by a small margin, get shit fixed.*

This is how you can continuously work on eliminating small tech debt - just bundle it with something else. Need to add a new API endpoint? Great, how about we also bundle increasing test coverage for that module with that workload? The CI time increased from 1h to 2h? Let's set some time aside for fixing that with the next bug fix.

Some might argue that this is not ethically ok. If the organizational culture allows you to be upfront about it, that's great. However, if that's not the case, you're still better off fixing the product as you go along instead of just focusing on the business value. You're the person that's building out the product. There might be no immediate value, but by making the life of you and your peers easier you are providing great implicit value to the company.

I do have to mention the opposite case, where the engineering team places too much effort on achieving technical excellence. There is a fine line to walk here, but ultimately the company will be better off by skewing the effort too far in the tech direction, rather than the opposite. There is always a net positive in having a better, more maintainable product or better documentation. The same cannot be said for building a new feature that might not be used at all. How many companies are focused on building stuff based not on actual customer demand, but based on their own perception of what the customer wants?

## Summary

You don't need to be a CTO, Technical Manager, or anyone with a fancy title. You don't even need to have a position of any organizational power. Even a junior developer should be able to voice their concerns and raise them publicly. It is the responsibility of every engineer in the company to take care of the maintainability of the product and tooling used - for their own sake.

