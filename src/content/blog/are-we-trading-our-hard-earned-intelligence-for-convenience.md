---
title: "Are we trading our hard-earned intelligence for convenience?"
description: "Productivity and skill erosion in the age of AI"
date: 2025-07-16
heroImage: "/images/whiplash.jpg"
heroImageWidth: 316
heroImageHeight: 300
---

# Getting sucked in

There are a number of "holy shit dude, that's awesome!" moments when you're getting into AI coding. For me, the first copilot was such an experience. Then, there was Cursor which took it a step further with Composer / Agent mode. I could now delegate and implement complex tasks! Finally, there was Claude Code, which is still the pinnacle of what we have available right now. You can plan and implement entire apps using natural language, how is that not fantastic?

Unfortunately, the honeymoon phase doesn't last that long.

<Not quite my tempo/>

As you start increasing the workloads you're delegating to AI, you're noticing the cracks more and more often. Even if everything is *technically correct*, the code rarely looks as if you had written it out by hand. 

You've likely experienced this yourself. Code looks just a bit off, things are too verbose, there is a clear lack of overarching vision. You keep on prompting it out to align the implementation to make it closer to what you had originally intended. 

As the scope grows, it turns into a game of what-a-mole. The speed gains are cannibalized by the cleanup process. We now have studies to [back this up](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).  

# The magic is gone

A few years ago I read "Flow" by Mihály Csíkszentmihályi and it deeply resonated with me. What I once found so enticing and rewarding, the simple, mundane process of grinding it out and staying "in the zone" was now a distant memory. 

Gradually, I simply stopped enjoying my work. The prompt-wait-correct loop is a very different experience from programming. Deep work has evaporated. What are you supposed to do while waiting for AI to finish working? You could multitask perhaps, but context switching is also not ideal. As we delegate all of the complexity to AI, we lose the ability to perform these tasks ourselves. I noticed a rapid erosion of my own programming skills. I forgot keybindings as I didn't have to use them at all. As you operate on a higher level of abstraction, you no longer need to know how to *write* correct syntax. Sure, you still need to proof-read it and verify, but not having to write any code by hand feels both faster and less satisfying at the same time.

I decided it was time for a change - I stopped using AI completely and finally game myself time to learn Lazyvim. 

# Regaining control

It was almost like learning to program all over again - the most basic edits and navigation took far too long, but not for a moment was I bored nor in control. 

What struck my the most was that my brain was constantly engaged in making decisions I had long foregone:
- What do I call this variable?
- What's the correct type to use here?
- What does the correct syntax look like here?

I had to search through documentation, read it, process it and understand it. The very skills that have made me a good engineer in the first place were finally surfacing again. And despite achieving less output, I know *I* have personally planned, thought out and implemented my vision. This is a hundred times more rewarding than just accepting something passable as "good enough" code. 

# What does the future of software look like?

There are two groups that derive the most value from AI coding:

- Semi-technical people, who now can vibe-code their way into MVP's. 
- Senior engineers, who have the knowledge needed to review and adjust the code whenever necessary.

Junior developers are not amongst them. If you open any programming subreddit you'll find swarms of frustrated seniors that now have to review tons of AI slop code. It's hard to blame the junior engineers - in an industry where execution speed is paramount (despite the lies we're telling ourselves about "code quality" being critical), using coding agents seems justified. But by allowing them to not think and act for themselves, we're stripping them of the same experience that has allowed us to grow in the first place. 

Much like we're not allowing 3rd graders to use calculators, so that they learn basic maths, we should at least somewhat discourage the adoption of coding agents by those still learning the trade. 

There are those that believe that the recent exponential growth in AI coding capabilities will continue - and we will be able to replace engineers completely. It's not hard to make a counterargument:

- LLM's are trained on existing data / codebases. The majority of code is not good code, therefore the AI's code quality cannot exceed the average. 
- We've already [run out](https://www.forbes.com/sites/digital-assets/2025/01/20/from-chip-war-to-data-war-ais-next-battleground-explained/) of non-synthetic data to train on. And since we're producing more and more AI-generated code, the training dataset is likely to get worse and worse. 

I won't go into other obvious limitations of context sizes, hallucinations etc. It's likely we'll find a solution for these, if not on the software side, then perhaps in the development process.

The core issue still remains: We're sitting at the top and pulling the ladder up for all aspiring to join. 

So unless there is a trend shift coming (perhaps when the bubble bursts), we'll soon find ourselves starved for good developers and overburdened with fixing vibe-coded systems.

# Takeaway

It's been 4 days since I've not written a single prompt - I've cancelled both of my Cursor and Claude Code plans. As a startup founder, it's unlikely I'll get to keep this privilege of going slow. There's just too much basic boilerplate code that is required in any product, and AI is perfectly capable of doing that good enough. But I sure will try. 

Enjoying your work might just be worth it.

Łukasz

