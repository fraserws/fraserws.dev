---
layout: /src/layouts/Post.astro
title: Exploring Astro
summary: Tanstack Query + Next.js 123
publishedAt: "2023-08-20"

---


## 1. Ships ZERO JavaScript By Default

One of the standout features of Astro is its commitment to performance. Unlike many other web development frameworks, Astro defaults to sending only pure HTML to the browser, completely bypassing JavaScript by default. This means that your web pages are inherently static, resulting in blazing-fast load times.

## 2. Built-in Markdown Support (and MDX)

Are you a fan of Markdown, but tired of the hassle of setting up syntax highlighting and code formatting? Astro has your back. With Astro, you not only get robust Markdown support but also built-in code highlighting right out of the box. This means you can focus on crafting your content without being bogged down by technical intricacies.

## 3. Astro Integrations (Tailwind, MDX, SEO, and More)

Astro's ecosystem is a treasure trove of convenience for web developers. It seamlessly integrates with various tools and libraries like Tailwind CSS, MDX (Markdown with JSX extensions), and SEO optimization. Gone are the days of wrestling with complex configuration files or wasting time on boilerplate code. Astro's straightforward approach allows you to add these integrations with just a few clicks, streamlining your development process.

## 4. Bring Your Own Framework (React, Svelte, Vue, and More)

Astro's "Bring Your Own Framework" (BYOF) feature is a game-changer. If you're already comfortable working with frameworks like React, Svelte, or Vue, you can easily incorporate them into your Astro project. This means you can leverage your existing components and expertise without forcing unnecessary JavaScript on your users. By adding a simple client load tag, you control when and if JavaScript is loaded, optimizing your app's performance.


## 5. Islands Architecture

Astro's innovative "Islands Architecture" is the future of efficient JavaScript loading. This concept lets you define components within a page, ensuring that only specific components require JavaScript. As a result, JavaScript is loaded asynchronously for those precise components, supercharging your website's loading speed.

But it doesn't stop there. Astro takes it a step further with support for lazy loading islands, meaning that components are hydrated (JavaScript is activated) only when they scroll into view. This flexibility and performance boost have convinced many, including me, to migrate their blogs to Astro.

In conclusion, Astro is not just another web development tool; it's a paradigm shift.For the reasons mentioned above I think it is a great choice for building your next website or blog. If you're interested in learning more about Astro, check out the official documentation or join the Astro Discord community.

Happy coding!
