---
title: "MLnative post-mortem"
description: 'Why our initial startup idea failed'
date:   '2025-02-05'
---

You have to be a little egotistic to start a company. You need just the right amount of confidence, arrogance and skill to make this work. Nvidia's founder and CEO, Jensen Huang said that had he known how hard this would be he would never do it in the first place. 

And that's why it often works - The self-confidence makes you overestimate your advantages and underestimate the challenges. So you set your eyes on the horizon, pack your bags and shut the door behind you with a mighty "I quit!", resonating in the halls of your now-former employer.

I never wrote a postmortem retrospective for MLnative's original idea (an MLops platform). We've spent close to a year chasing that pony and we've successfully pivoted into something entirely different since then. Now that we're 2 years into this journey, it might be a good moment to reflect on why things didn't work out originally.

TLDR:
- The market did not work as we expected
- Not enough market differentiation from competition
- Too bleak selling point
- Invalid growth strategy

# The Original Idea

For most of 2021 I was leading a small team of contractors for an MLOps startup, Algorithmia. Fast forward to 2022, the platform has been bought out by Datarobot, a much larger fish in the pond. It was clear from the start this was simply getting rid of competition and the product will soon be sunset. 

The product itself was a b2b private-cloud platform for storing, sharing and running ML models. The product was ok technically, they had plenty of customers and traction. However, I knew it was going to go away rather sooner than later. It would be a shame if a validated market and a proven customer base would go to waste... 

And so I've coined the idea of building my own Algorithmia v2. Better of course, with more features, done **properly**. 

Since I was close to customer data at that time, I once looked into what the customers were actually paying for the platform. 

It literally **blew my mind** to see singular customers paying in the range of ~$10k a month for a single instance. If this is a what you can charge for such a platform, then it shouldn't really be that hard to be cashflow positive, right?

I've found a cofounder and quit at the end of 2022.

# So, How Did It Go?

From the previous section you might have already guess what comes next. 
We've built an MVP in a few months only to find out there aren't actually a lot of companies interested in a non-proven product from two no-names, let alone companies willing to pay thousands of dollars per month for it. 

One critical mistake we've made was not understanding the market we were in. In 2023, things were much different than back in 2018 when Algorithmia was founded. There were plenty of open-source options available, and selling a closed source platform is a hard sell without an enterprise sales team. None of us was also an ML engineer, so our understanding of the problems and expectations was based on second-hand reports. 

I now think that this is the only path where we could've been successful:
- Build a great open-source product
- Have it become popular enough, so that people at large companies start using it
- Build an enterprise offering on top of the open-source product

This is what most successful companies have done in the space (ex. Seldon) and in hindsight it's easy to see why - it's much easier to sell to people that are already using your product then it is to convince an entire organization to integrate a product from some obscure, small startup as a part of their core tech stack. 

The only scenario where a closed source product could've worked is if our feature set was enticing enough to justify it. But that was not the case. We've primarily focused on GPU-sharing (using the same GPU for running multiple models) and autoscaling which was quite complex at the time, especially on top of Kubernetes. This translates to potentially large cost-savings to customers. Little did we know, there aren't that many companies next door that have these kinds of problems, and those that are are mostly focused on building custom-tailored solutions in-house. Had we been US-based, perhaps the landscape would be a bit different. But when your best shot at marketing a product like this is a cold email, you're gonna have a bad time. 

There is one more elephant in the room that I haven't mentioned and that's my **ego as a developer**. One of the reasons I was passionate about building this product in the first place is because it was **complex and difficult**. 

For most of my career I've always looked for challenging problems to work on. Massive scale, microservices, Kubernetes, you know the drill. This product has ticked all the boxes for me, since not only was this something for me to show off proudly, it was also supposed to make me rich. The IT industry has built a cult around doing "things that scale", regardless of the *actual* requirements. 

That's probably the biggest fuckup of all - not understanding that **complexity is poison** for any company, let alone a startup. I would never pick Kubernetes again in a non-corporate environment. You need to be quick to develop and iterate, your tech stack needs to help you achieve that goal, not hold you back. 

# Time To Pivot

By late 2023 we could see this wasn't really going anywhere, so we started looking for alternative ideas and ultimately, that's how CVtoBlind was created. 

We've done almost everything differently than we did the first time and this time, it worked. We've had customers before we had the POC ready. We've shipped a POC in less than 2 months and kicked 2024 off with our first invoice. Things have been growing steadily since then and we've learned even more over the past year than the previous one - but that's a topic for a different post.

Thanks for reading and I hope you find this helpful!

Łukasz