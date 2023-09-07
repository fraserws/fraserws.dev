---
layout: /src/layouts/Post.astro
title: How to use Tanstack Query in Next.js 13 App router
summary: Tanstack Query + Next.js 13
publishedAt: "2023-08-20"
---

# Implementing Tanstack Query in a Next.js 13 App Router

In this tutorial, we'll walk you through the process of integrating Tanstack Query into the router of your Next.js 13 application. Tanstack Query is a powerful library that simplifies data fetching, caching, and synchronization with React applications. By incorporating it into your Next.js app, you can significantly enhance your data management capabilities.

## Setup the Next.js 13 App

Let's begin by setting up a new Next.js 13 project. Open your terminal and run either of the following commands:

```bash
yarn create next-app --ts
#or
npx create-next-app --ts
```

During the process, you’ll be prompted to choose which features to enable for the project. Make sure to select “Yes” for TypeScript and ESLint. Additionally, you’ll be asked if you’d like to use the src/ directory and the experimental app/ directory. Select “Yes” for both options, and for the import alias, simply press Tab and Enter to accept.

### Creating the ReactQueryProvider Component

In order to integrate Tanstack Query into your Next.js 13 app, we'll create a component named `ReactQueryProvider` that will wrap your application with the necessary context for querying and caching data. Let's create a file named `ReactQueryProvider.tsx` in the `src/app` folder and add the following code:

```tsx
import {QueryClientProvider } from '@tansktack/react-query'

const queryClient = new QueryClient()

export const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
    return(
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    )
}
```


### Integrating the ReactQueryProvider into the Layout

Now that we have the ReactQueryProvider component, we'll integrate it into the main layout of our Next.js app. Locate the layout.tsx file and make the following modifications:
```tsx
"use client";

import {QueryClient, QueryClientProvider } from '@tansktack/react-query'
import "./global.css"


export default async function RootLayout({children}: {children: React.ReactNode}) {
    return(
        <ReactQueryProvider>
        
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
        </ReactQueryProvider>
    )
}
```
## Conclusion

Congratulations! You've successfully integrated Tanstack Query into the router of your Next.js 13 application. By following this tutorial, you've gained the ability to harness Tanstack Query's features for streamlined data fetching and management within your app. This integration sets the stage for building more dynamic and responsive applications.

Feel free to explore Tanstack Query's documentation to learn more about its capabilities and advanced usage scenarios. Happy coding!

https://tanstack.com/query/latest/docs/react/guides/ssr#using-the-app-directory-in-nextjs-13
