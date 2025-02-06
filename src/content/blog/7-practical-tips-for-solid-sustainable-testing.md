---
title:  "7 practical tips for solid, sustainable testing"
description: ""
date: 2023-08-26
heroImage: "/images/testing.jpg"
heroImageWidth: 1024
heroImageHeight: 1024
---

# 7 practical tips for solid, sustainable testing

Every other tweet/blog post/video makes hard opinions about stuff.

*“Always Do X!”*

*“Never do Y!”*

*“Only stupid people do Z in 2023!”*

As you can probably tell, most of the time these claims are sort of right at the best of times, and blatantly wrong at the worst case. The reason for that is mostly, because, well, *it depends*. *Sometimes* they might be great advice, *sometimes* they might be horrible.

Testing is one such domain where there seems to be a lot of commandments, and I’d like to present a different viewpoint on some of them (while reinforcing others):

## 1. Test coverage % is a great metric and should only go up

Has your PR ever been rejected due to reduced test coverage spat out by some automated metric tool? That’s definitely been the case for me. Now per se, this is a **solid** rule to stick to. There are however some cases, where it’s justifiable - ex. when you’re covering this feature set already with a different set of tests.

Instead of thinking about coverage in terms of the percentage of code paths covered, we should rank it based on **importance and impact.**

Having test coverage for a process that bills customer’s credit cards is pretty damn important. The same cannot be said for the position of a label on a screen.

Personal story:

I once was at a company that ran a billing process at the end of the year. A cron job would kick in to generate payment documents and upload these to the bank servers, which would then deduct payments from customer’s bank accounts.

There was a bug in this process, resulting in documents getting generated with an invalid year. The result was that customers were billed for the previous year, not the current one, resulting in thousands of people getting charged incorrectly (who might have no longer been customers).

The best part? This has happened for 2 years in a row.

Validate your critical business processes. The rest is a cherry on top.



## 2. All environments must be accounted for

If you’ve heard the term “support matrix” you probably know where this is going. If your product is supported on Mac, Linux and Windows you need to test it on Mac, Linux and Windows. As simple as that. Not doing so is a recipe for having more critical escalations in the middle of the night.

If you’re building enterprise-level software, it’s more likely than not that a support matrix is a thing. Ideally, you should be setting up environments (in an automated way!) for each and every combination in that matrix. In practice, it might be an overkill and sometimes you can cover multiple cases with a single environment.

You don’t have to do this on **every** CI run. Once a week, heck, even once a month is fine too. Chances are you’re most likely not doing Continuous Delivery, so as long you do this regularly before shipping stuff, you’re in a good spot.

Bottom line: Test every configuration that you support (even if sparingly)

## 3. Mocking stuff is hard

In the age of microservices, we’re doing more API calls than ever. This of course means that there’s more and more “black boxes” integrated into our systems, which we cannot validate or abstract over properly during testing.

![Mocking not cool](/images/mock.jpg)

We’ve come to accept mocking servers and responses as a valid solution to this problem.

The list of issues with mocking is long and extensive:

- hard to get right
- costly to implement and maintain
- become outdated fast

Instead of mocking, call real services whenever possible. Whenever you want to add test coverage for complex service calls, aim to do this on the end-to-end level. This is especially true for things like Kubernetes API calls or a services developed by different teams at your company, while less so for established, well known external APIs (i.e. Stripe)

## 4. Use smoke testing

A Smoke test is the most important test there is. If you’re going to write just a single test for an application, make it a smoke test. Why? Because it answers the fundamental question we need to answer when creating software:

*Does this even work?*

No other type of test is more valuable. Having 80% unit test coverage is useless if you find out that the application server is not going up due to a botched dependency upgrade.

Do smoke testing.

## 5. TDD is overhyped

There are times when TDD is very useful, but your mileage will vary a lot.

If you’re working on a shiny new startup, **don’t even bother.** Startups need to move fast, you will be changing the API and implementation details a ton. TDD only slows you down. It doesn’t need to be perfect, it can have a ton of edge cases, all that matters is that you can iterate fast. Having to change an API means rewriting not just the code, but also the test coverage. This is purely wasted time. Whatever testing you need to do to prove your point (the endpoint works), just use **Postman and manual testing.**

Are you extending a large, existing codebase with a solid customer base? By all means, **go for TDD.** Because the universe that you’re navigating is well established, it’s unlikely that your effort will go to waste. And you’ll likely have an easier time getting that implementation right when chaining 10 different service calls together.

There are of course nuances on both ends. Sometimes, the easiest way to test something (even at a startup) is writing some simple unit tests (e.g. state machine transitions). Likewise, whenever you’re trying to get a POC done in a larger codebase not writing tests is perfectly fine too. Always keep the big picture in mind.

I’ve wasted too much time writing and deleting obsolete tests to consider TDD to be a good choice for my day-to-day stuff, but it definitely has it’s place.

## 6. Having flaky tests is worse than having no tests at all

I’d like you to imagine a software team that employs a QA engineer, whose sole job is to look at the amount of failed tests and make a judgment call whether the amount of failed tests is good enough to ship the software.

I’ve been on that team. In fact, I was put in charge of it. The memory of this practice still haunts me to this day.

Flaky tests are **evil.** They muddy the waters and introduce a false sense of security (we have coverage!). If you find yourself in a dramatic situation as I did, face the truth and **delete them.** You should strive to just fix them if possible, but if that’s not possible (too much effort required), at least face the reality and start writing tests from scratch which do actually give you valid information.

## 7. Minimize runtime dependencies, support testing on dev machines

Sometimes there are processes that we want to have coverage for, yet they fall outside the regular testing pyramid structure. This includes stuff like external file generation, infrastructure modifications and so on.

It’s not uncommon to handle these with a combination of bash scripts, obscure util executables that have not been maintained for 5 years and a truckload of undocumented assumptions.

Code is read and updated far more than it’s written. You should always make it as easy as possible for future you (or whoever replaces you in the future) to pick up where you left off. This means that any dependency on an external tool should be added with extreme care.

Does it run on all systems? Will this tool still be available in a few years?

Making sure that a new developer on the team can set up their dev env as seamlessly as possible should always be one of your top priorities. Good DX leads to lower turnovers, resulting in better technical excellence and ownership. Be mindful of your future self.

Lastly, make sure that whatever it is you have set up in CI can also be done locally. It doesn’t have to be identical, but it should be close enough to allow you to make modifications to the CI suite without having to depend on the CI for validation of the suite.

**Summary**

I hope some of you will find this useful in your future work. There’s definitely a lot more to be said about each of these topics, and if you do happen do disagree please let me know on [Twitter](https://twitter.com/lukmyslinski) or elsewhere - the best way for us to grow is by making a case for our own opinions.

Happy coding,

LM
