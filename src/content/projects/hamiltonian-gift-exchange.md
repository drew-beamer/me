---
title: Gift Exchange
description: A Hamiltonian cycle solver for gift exchanges
priority: 1
---

## Overview

<a href="https://gift.drewtils.xyz" target="_blank">Link to site</a>

Gift exhange is a small side project I built to help my family and friends
participate in a gift exchange. This can lead to potential awkward situations
where:
- People are assigned to give a gift to someone they are receiving a gift from
- People are assigned to someone they don't know well, or don't want to give a gift to

To solve this, I wrote a simple backtracking algorithm that finds the first
Hamiltonian cycle it finds. The input array is shuffled to ensure that the
solution is not deterministic.

The algorithm is simple:
- Start with the first person
- For each person, try to find a person to give a gift to
- If you can't find a person to give a gift to, backtrack
- Repeat until you have a solution

The algorithm currently has the capability to specify a list of people each
person can give a gift to, but the UI lacks this feature.

## Tech stack

- <a href="https://nextjs.org/" target="_blank">Next.js (SSG)</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
- <a href="https://ui.shadcn.com/" target="_blank">Shadcn UI</a>
- <a href="https://lucide.dev/" target="_blank">Lucide</a>
- <a href="https://vercel.com/" target="_blank">Vercel</a>