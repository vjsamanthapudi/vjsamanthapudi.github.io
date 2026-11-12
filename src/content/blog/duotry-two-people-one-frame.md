---
title: 'Two people, one frame: why I built DuoTry'
description: Virtual try-on has always been a solo act. This is the story of building one for couples, and of the decisions that shaped it, including which image model to trust with two real faces.
pubDate: 2026-11-11
tags: [duotry, ai, image-generation, building-in-public]
draft: false
---

Every couple getting ready for an event asks the same question, usually while holding two hangers
and running late:

> _"Does this go with yours?"_

You can hold fabrics next to each other, squint, or ask a busy sibling. But the honest answer
usually arrives too late, in the photographs. I built **DuoTry** to move that answer to the
beginning.

---

## 1. The gap: what mirrors and virtual try-ons miss

At a family event in May 2026, I noticed something interesting: while individuals could easily
check their own outfits in a mirror, they had no easy way to figure out how their outfits looked
**together**.

Couples traditionally face two inconvenient options:

1. **Buy first, find out later:** Purchase the outfits, stand side by side, and hope for the best.
   If something clashes, you're stuck returning or replacing items.
2. **Stitch things together manually:** Use individual virtual try-on tools, download the generated
   images, and combine them in a separate photo editor.

This problem multiplies when planning a wedding, especially for couples living in different cities
or countries, coordinating multiple events (pre-wedding shoots, traditional ceremonies,
receptions) without ever standing in front of a mirror together.

---

## 2. Introducing DuoTry

DuoTry extends virtual try-on technology from an individual act into a shared experience. The
concept is simple:

1. Upload photographs of both people.
2. Select or link the garments each person wants to try.
3. Generate a combined visualization of both people together.

<figure>
  <img src="/blog/duotry/how-it-works.svg" width="600" height="350" alt="Four inputs, a photo of you, your outfit, a photo of your partner and your partner's outfit, flow into DuoTry and come out as one picture of both of you wearing the outfits side by side." />
  <figcaption>DuoTry in one picture: two people and two outfits go in, one shared frame comes out.</figcaption>
</figure>

It brings the entire visualization experience into one place, allowing couples to experiment and
make decisions together, no matter where they are located.

<!-- REVIEW: optional real screenshot of the app.
![The DuoTry screen: two photo slots, two outfit slots, and the generated look](/blog/duotry/app.png)
-->

---

## 3. The technical dilemma: specialist vs. generalist

When building DuoTry, I faced a crucial technical choice for generating the image:

- **The Specialist (e.g., IDM-VTON):** Open-source diffusion models built specifically to put a
  garment on a single person.
- **The Generalist (Google's Gemini image model / Nano Banana):** A general model that accepts
  multiple reference images and written instructions.

<!-- REVIEW: IDM-VTON is a placeholder. The project files do not record which Hugging Face model
     you compared against. Swap in the real one, or drop the name. -->

On paper, the specialist should win. But standard try-on models have zero concept of
**"together"**. Running them separately would still leave me with two isolated images.
Furthermore, wedding outfits (like heavily embroidered sherwanis or complex saree drapes) live far
outside standard try-on datasets.

I chose the generalist because it could handle both dressing individuals and composing two people
into a single scene. Choosing it was the right call, and the beginning of the hard part.

---

## 4. Solving the face problem (building an assembly line)

My first version produced beautiful outfits, but the faces belonged to complete strangers. People
will forgive a slightly wrong hemline, but they will never forgive a stranger's face on their
shoulders.

<!-- REVIEW: optional before/after pair. An early single-request result beside a current one
     would make this section land much harder than the words do.
![An early result where the faces drifted, beside a current result](/blog/duotry/before-after.png)
-->

Getting reliable faces required shifting strategy:

- **Isolating References:** Ensuring product catalog models didn't sneak into our identity.
- **Step-by-Step Processing:** Instead of asking the model to invent an entire scene at once,
  DuoTry dresses each person in their own photo first, estimates relative heights, and then
  combines them.
- **Automated Inspectors:** I built a multi-step pipeline where automated "inspectors" check each
  step for face and outfit accuracy, giving corrections before moving forward.

<figure class="wide">
  <img src="/blog/duotry/assembly-line.svg" width="600" height="500" alt="The DuoTry pipeline: dress you, dress your partner and estimate relative heights at the same time; inspect each dressed photo with one fix allowed; combine the two into one scene; inspect again with one recombine allowed; then show the final look." />
  <figcaption>The assembly line. Green boxes are the inspectors. Each gets one chance to fix what it finds, and then the line moves on.</figcaption>
</figure>

Because this careful assembly line takes time (running up to 13 model calls per look), the app
processes jobs in the background while the page checks in asynchronously.

---

## 5. What I've learned

Building DuoTry taught me three valuable lessons:

1. **Look for the missing word:** The opening in a crowded market wasn't a better try-on tool. It
   was adding the word **"together"**.
2. **Pick the tool for the hardest problem:** DuoTry is a try-on product that doesn't use a try-on
   model, because the hardest part was never the clothes. It was two people in one frame.
3. **Build verification checks:** Never trust a generative model's first answer when dealing with
   human identity.

Next time someone holds up two hangers and stresses over whether they match, you won't have to
guess anymore. Try DuoTry out, and let me know what it gets right and what it gets wrong!

<p><a class="cta" href="https://oz5xnwyvcgtwnehyuxmdprogty0ifihh.lambda-url.us-east-1.on.aws/">Try DuoTry →</a></p>

<p class="note"><strong>Source code:</strong> coming to GitHub soon. I'll link the repository here once it is public.</p>
