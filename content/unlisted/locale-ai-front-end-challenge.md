---
title: 'My thought process working through locale.ai FrontEnd Engineering Hiring Task'
---

I've always liked the idea of being able to exactly see what people are doing on my website. every click they make, every navigational flow they go through, every feature they use, being able to capture and analyse all of that information and being able to use such information to make better decisions feels nothing less than amazing. It helps us to iterate, to run experiments, to debunk and ultimately to understand exactly what our users want or don't want.

that's the story from the web. but our physical world doesn't seem much different. Users, Services, Problems waiting to be solved, its the same. but, sadly, there are far fewer tools in existence to solve analytics for the physical world. and that's why locale.ai interests me. you guys are finally solving it.
And from a users perspective, I could feel the joy of someone seeing analytics for their physical businesses and finding instant optimization opportunities. and that excites me, so when I knew there was an opening, I've decided to apply without giving it another thought.

As of this writing, I've been given a task to complete. and here is everything I've learned while doing that.

This is the second time I worked closely with maps. and first time building visualizations on one.
First, I wanted to know what was available to me. what tools, technologies and products exist to help me create visualizations on maps. Locale.ai blog was a good start. I got a rough idea about the stack that powers the locale.ai maps. I knew I was constrained by time and I did not have the time to experiment and try out different frameworks and tools. so I decided to go with the same tools which were mentioned in your blogs.

So for maps and visualizations, I decided to use

1. MapBox
2. DeckGL

Next, I had to choose an application stack. for the JS framework part, I decided to go with my favourite Vue.js, but for CSS, I've decided to take tailwind for a spin. There was all the hype and I have not tried it yet.

So the application stack,

1. Vue.js with Vuex
2. TailwindCSS

then it was time for me to dive deep into the documentation of MapBox and DeckGl. it took me a couple of hours to learn how to put visualizations into the map. and I've understood the map styles available, the type of data needed to build a certain type of visualization etc.

then I've started planning the features. Sticky notes were my favourite tool when it comes to brainstorming ideas. so I took a couple of them. And started writing everything that came to mind. Finally, I shortlisted a couple of ideas that can quickly be prototyped and started working on the project. I've used Figma to quickly try out some ideas before finally writing the code.
I did not end up implementing all of those shortlisted ideas, because of time constraints.
Here is a couple of them I did not implement but that was in my initial plan.

1. Multiple Map Layouts.

    - I thought it would be nice to load different metrics on different parts of the screen and to look at all of them at once.

2. Custom Views

    - I wanted the ability to pick custom cities and save them as custom views. eg: I want to pick all the southern cities and visualize the metrics on only those cities.

3. A Search Bar that is capable of searching everything

    - I've planned to use Dialogueflow, which is a Conversational NLP Platform By Google. ( it was a startup and was later acquired by Google ). They have a simple rest API in which we could send sentences and get meaningful details extracted as the response.

4. Draggale Dialogues

    - Everything on the interface should be draggable, the user should be able to decide where to place them according to their conveniece.

Anyway, I had to decide these were for some other time and move on.

So that sums it up.
I hope I will be able to cut the mark and join all of you guys in building the next generation location analytics platform at locale.ai.

Written with all 💌 in the world and Markdown.
That's Cliche, right? Haha

Akash.
