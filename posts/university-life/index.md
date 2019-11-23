---
title: Cyber Defence Exercise - Glasgow
date: "2019-02-11T22:12:04.284Z"
path: "/cdx-glasgow/"
---

I just recently took a trip up to Glasgow. Actually, I'm sat in the airport writing this just to recap the events of this weekend before they slip out of my mind.

I was invited down by an old friend from Prague, another programmer, you can see his GitHub [here](https://github.com/Patsonical). I gathered my things and took a plane over with relative ease, as it isn't too far away from London. Ended up stopping with my friend for the weekend.

I felt a bit under the weather which doesn't happen to me that often, but I suppose it can occur when you're cramped on a flight with a large number of people you don't know, all breathing the same air.

I got off the flight and managed to get to my friend's with a few diversions here and there where I struggled to find the right buses. Once there, I got comfortable and we hit the town for a Glasgow University Pub Crawl. Phenomenal start to the weekend and it gave me an opportunity to meet some of the higher ups in the tech society, as well as scope out what sort of skills I would need for the event.

As we trundled off home, myself in a relatively drunken state, I looked ahead to the next day when I'd register myself in for CDX.

For those of you unfamiliar with CDX, it stands for Cyber Defence Exercise and mainly is performed by the Navy and US Government to train different agents in cyber warfare. GUTS (Glasgow University Tech Society) just wanted to simulate it with a couple hundred students... Interesting.

We arrived with high hopes and managed to organise a team quite quickly consisting of 5 members. One of whom was working in Intelligence. We got setup and listened to the brief which explained all that we had to know about the server architecture and all of the rules and regulations that kept everyone safe when playing.

We were told to patch and fix vulnerabilities and bugs on our servers, whilst also listening to our Grey Cell (our client) who had instructions on what to include in the different servers and products we were given, including:
- A Web Server
- Dev Server
- Windows Personal PC

Each of these related to an election device, with box 1 being a voting machine, box 2 being just a development machine and the 3rd windows box being the candidate's private computer. Each box increased in difficulty when it came to how to secure them, however we found a few XSS and Rootkit vulnerabilities here and there. Running a vulnerability scanner proved to be a great assistance.

Once the clock hit midday on Sunday, servers started getting hacked by the Red Cells (enterprise grade pentesters) and we as the Blue Cells had to stay alive as long as possible. It was good fun and everyone had a good sense of humour about it.

In the end, our team (8) managed to secure a solid 4th place which is an incredible outcome for us as I had no idea what I was doing and neither did a few of the other candidates. So all in all we take it as a success.

The weekend taught me a lot about linux and windows vulnerabilities and a lot of ways to secure them and check to see if we have any vulnerabilities that need securing. This includes using BurpSuite and BeEf frameworks to assist in finding vulnerabilities in the network configurations and any browser access faults.

Overall, I found the weekend to be an incredible learning opportunity as well as it being a great excuse to go and visit an old friend.

To anyone with the opportunity to attend such an event, I say take it, no matter how much knowledge you have on cyber security, it's a useful and incredible tool for you as a programmer or even as a general computer user to know how to secure system on the internet!

That's my update, stay tuned for more.

Signing off,

~ J
