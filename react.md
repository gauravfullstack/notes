# Performance & Scalability: React / Next.js (4 YOE)

---

## 1. Measuring Performance

1. ★ How do you find out why a web page is slow? Walk me through your approach.
   - Which tools do you use (Lighthouse, Chrome DevTools, React Profiler, WebPageTest)?
   - How do you tell whether the bottleneck is network, JS execution, or rendering?
2. ★ What are Core Web Vitals (LCP, INP, CLS)?
   - How do you improve each one?
   - What's the difference between lab data and field data?
3. What's the difference between FCP, LCP and TTI?
4. How do you monitor performance in production, not just locally?

---

## 2. React Rendering Performance

5. ★ What causes unnecessary re-renders in React?
   - How do you detect them?
6. ★ When would you use `React.memo`, `useMemo` and `useCallback`?
   - When do they hurt instead of help?
   - Does `useCallback` alone prevent a child re-render?
7. ★ How can Context API cause performance problems?
   - How would you fix it?
8. How does state placement (lifting up vs. colocating) affect performance?
9. Why are keys important in lists, and what happens if you use the array index?
10. How do you optimize a component that renders slowly because of heavy computation?
11. What does `useTransition` or `useDeferredValue` solve?
12. What is the React Profiler, and how do you read a flamegraph?

---

## 3. Large Lists & User Input

13. ★ How would you render a list of 10,000 items smoothly?
    - What is virtualization, and how does it work?
    - When would you choose pagination over infinite scroll?
14. ★ Debounce vs. throttle: what's the difference?
    - Where would you use each in a search box?
15. How would you handle a heavy filter/sort on a large dataset without freezing the UI?
    - Would you do it on the client or the server?

---

## 4. Bundle Size & Loading

16. ★ How do you reduce the JavaScript bundle size?
    - How do you analyze what's making it large?
17. ★ What are code splitting and lazy loading?
    - Where do you split: routes, components, or libraries?
    - What happens to UX while a lazy component loads?
18. What is tree shaking, and what can stop it from working?
19. How do you handle heavy third-party scripts (analytics, chat widgets, payment SDKs)?
20. How do you optimize images and fonts?

---

## 5. Next.js-Specific

21. ★ SSR vs. SSG vs. ISR vs. CSR: when would you use each?
    - Which would you pick for a hotel listing page and why?
    - Which would you pick for a user dashboard?
22. ★ What is hydration, and why can it become a performance bottleneck?
    - What causes hydration mismatch errors?
23. ★ How does `next/image` improve performance?
24. What do Server Components change for performance?
    - How is a Server Component different from SSR?
    - What does Next.js cache by default?
25. What is streaming, and where do `Suspense` and `loading.tsx` help?
26. How does route prefetching work in Next.js?
27. How would you handle SEO and performance together on dynamic pages?
28. How do you optimize `getServerSideProps` or server-side data fetching so that TTFB doesn't suffer?

---

## 6. Data Fetching & Caching

29. ★ How does TanStack Query (or SWR) improve performance?
    - What are `staleTime` and `cacheTime`/`gcTime`?
    - How do you avoid unnecessary refetches?
30. ★ What are request waterfalls, and how do you avoid them?
    - What is parallel fetching?
31. How do you use browser caching, HTTP caching and CDN caching for a frontend app?
32. How do you handle optimistic updates?

---

## 7. Scalability

33. ★ How do you structure a React/Next.js codebase so that it scales to a large team and many features?
    - How do you manage shared components and utilities across multiple apps?
34. ★ How do you scale state management as the app grows?
    - When do you move from local state to Context, and then to Redux?
35. ★ What would you do if traffic suddenly increased 10x?
    - What happens on the frontend and server side?
    - Where do CDN, caching and static generation help?
36. How would you deploy a Next.js app so that it scales (containers, CDN, load balancing)?
37. What is a micro-frontend, and when is it a good or bad idea?
38. How do you keep performance from regressing over time?
    - Would you use performance budgets, CI checks, or Lighthouse CI?
39. How do you handle errors and failures gracefully at scale (error boundaries, retries, fallbacks)?

---

## 8. Scenario-Based

40. ★ A search results page is lagging when users apply filters. How would you debug and fix it?
41. ★ The LCP on your homepage is 5 seconds. What do you check, and in what order?
42. A user reports that the app slows down after being open for a long time. What could be the cause?
    - How do you find a memory leak?
43. Your page loads fast, but clicking a button feels laggy. What does that indicate?

---

## 9. Project-Linked (Prepare From Your Own Experience)

44. ★ What is the biggest performance improvement you've made?
    - What was the problem, how did you measure it, and what changed afterward?
   
45. 


# Question 1: How do you find out why a web page is slow? Walk me through your approach.

Performance & Scalability

React / Next.js

4 YOE

The goal is to answer this like a developer who has actually debugged performance issues in a real application—not someone who has memorized a list of tools.

## 1. Understand what the interviewer is asking

The interviewer doesn't just want to hear that you use Lighthouse or Chrome DevTools. They want to understand whether you can:

- Identify where the slowness is coming from.
- Separate network, JavaScript execution, and rendering problems.
- Use the right tools to confirm your assumptions.
- Fix the actual bottleneck instead of blindly optimizing everything.
- Measure performance again to verify the improvement.

The key idea: Don't guess the problem. Measure it, identify the bottleneck, fix it, and measure again.

## 2. My interview-ready answer

When I find that a web page is slow, I don't start optimizing the code immediately. First, I try to understand what exactly is slow—is the page taking too long to load, is the content appearing late, or is the page loaded but interactions feel laggy?

I usually start by reproducing the issue and checking it under realistic conditions, because a page that works fine on my laptop might behave differently on a slower network or a less powerful device.

Then I use **Chrome DevTools** to investigate the problem. In the Network tab, I check whether API requests are taking too long, whether there are too many requests, or whether large JavaScript and image files are delaying the page.

Next, I check the Performance panel to understand what's happening on the main thread. If I see long JavaScript tasks, expensive event handlers, or heavy rendering work, that gives me a direction to investigate. If React components are rendering more often than expected, I use the React DevTools Profiler to identify which components are taking time to render.

I also use **Lighthouse** to get an initial overview of performance issues, such as large resources, render-blocking files, and Core Web Vitals opportunities. If I need to understand performance across different network conditions or locations, I can use WebPageTest.

Once I identify the bottleneck, I focus on the relevant fix. For example, if the API is slow, I investigate data fetching and caching. If the JavaScript bundle is large, I look at code splitting and lazy loading. If rendering is expensive, I look at component structure, unnecessary re-renders, and heavy computations.

Finally, I measure the page again under the same conditions to confirm that the change actually improved performance without breaking anything else.

So, my overall approach is to **reproduce the issue, measure it, identify the bottleneck, apply a targeted fix, and validate the result**.

## 3. How do I identify the actual bottleneck?

Remember these three categories. Most frontend performance investigations start here.

A. Network bottleneck

Tool: Chrome DevTools → Network

What I look for:

- Slow API responses or long request queues.
- Large JavaScript, CSS, or image files.
- Too many requests or requests blocking important resources.

Example fix: Reduce unnecessary API calls, optimize images, cache responses, or move static assets behind a CDN.

B. JavaScript execution bottleneck

Tool: Chrome DevTools → Performance

What I look for:

- Long tasks on the main thread.
- Expensive filtering, sorting, or calculations.
- Heavy event handlers and excessive JavaScript execution.

Example fix: Debounce input, reduce unnecessary work, split large bundles, or move suitable computations to a Web Worker.

C. Rendering bottleneck

Tools: Chrome DevTools → Performance and React DevTools → Profiler

What I look for:

- Components rendering repeatedly.
- Expensive React render work.
- Large DOM trees, costly layouts, or excessive painting.

Example fix: Keep state close to where it's used, reduce unnecessary re-renders, virtualize large lists, or simplify expensive DOM and CSS operations.

One important distinction: a React re-render doesn't automatically mean the browser repaints the entire page. React may render a component without causing a corresponding DOM change. That's why I use the React Profiler and Chrome's Performance panel together when necessary.

## 4. Practical example: a slow hotel listing page

Let's say you're working on a hotel booking application. The listing page takes several seconds to display hotel cards.

Here's how I'd investigate it.

### 1

Check the Network tab

If the hotel search API takes 2.5 seconds to return, the backend, database, or network path might be contributing to the delay. I'd inspect the request timing and response size before deciding where to investigate further.

### 2

Check the Performance panel

If the API responds quickly but the browser spends a long time executing JavaScript, I'd look for expensive transformations, large component trees, or long tasks.

### 3

Check the React Profiler

If hotel cards render repeatedly whenever a filter changes, I'd inspect state updates, props, and component boundaries to find unnecessary work.

### 4

Apply and validate the fix

Depending on the evidence, I might optimize the API, virtualize a large result list, or reduce expensive renders. Then I'd compare the before-and-after measurements.

The important point is that I wouldn't immediately add `React.memo` or change the API without first identifying which part is actually slow.

## 5. Tools I use and when

| Tool                          | Main purpose                                                            |
| ----------------------------- | ----------------------------------------------------------------------- |
| Chrome DevTools — Network     | API latency, request timing, resource sizes                             |
| Chrome DevTools — Performance | Main-thread activity, long tasks, layout and paint                      |
| React DevTools Profiler       | Component render duration and render patterns                           |
| Lighthouse                    | Initial audit, loading performance and optimization opportunities       |
| WebPageTest                   | Detailed loading analysis under different network and device conditions |

A practical tip: Lighthouse is a good starting point, but its audit score alone doesn't tell me exactly why a particular interaction is slow. I use the appropriate profiling tool to investigate the underlying cause.

## 6. Likely interviewer cross-questions

1\. What if the API is fast, but the page is still slow?I'd inspect JavaScript execution and rendering. The browser might be doing expensive data transformations, rendering too many components, decoding large images, or processing a large DOM tree.

2\. How do you know if React re-renders are the problem?I'd record the interaction in React DevTools Profiler, identify components with expensive render durations, and inspect why they rendered. Then I'd optimize only the components or state updates that are contributing to the delay.

3\. Would you always optimize a component that re-renders frequently?

4\. Why isn't Lighthouse enough?

5\. How do you confirm your fix worked?

## 7. Quick revision: remember this sequence

## Reproduce → Measure → Diagnose → Fix → Validate

Network · JavaScript · Rendering

If you remember only one thing, remember this: I don't optimize blindly. I identify the bottleneck using measurements, apply a targeted fix, and verify the improvement.

## Your practice task

Before moving to Question 2, try explaining this question in your own words as if an interviewer asked you:

"Your hotel listing page is taking five seconds to become usable. Walk me through how you would investigate it."

Don't worry about using perfect English or covering every detail. I'll review your answer in four parts:

1. Corrected version — natural, interview-ready English.
2. Mistakes or missing technical points — what needs improvement.
3. Improvement tips — how to make your answer sound like a confident 4 YOE engineer.
4. Quick practice task — one short follow-up to reinforce the concept.

5. # Question 2: What are Core Web Vitals (LCP, INP, CLS)?

## 1. Understand what the interviewer is asking

The interviewer wants to know whether you understand how to measure the experience users actually have when visiting a website.

It's not enough for a page to load successfully. Users should see the important content quickly, be able to interact with the page without frustrating delays, and not experience the layout jumping around unexpectedly.

That's what Core Web Vitals help us measure.

The three metrics are:

- LCP: How quickly the main content appears.
- INP: How responsive the page is to user interactions.
- CLS: How much the page layout unexpectedly shifts.

## 2. Interview-ready answer

Core Web Vitals are a set of Google metrics that help us measure the real user experience of a website, mainly in terms of loading performance, interactivity, and visual stability.

There are three main metrics: LCP, INP, and CLS.

**LCP, or Largest Contentful Paint**, measures how long it takes for the largest visible content element in the viewport to appear. For example, on a hotel listing page, it could be the main banner or a large hotel image. If that content takes too long to load, the page feels slow.

**INP, or Interaction to Next Paint**, measures how responsive a page is to user interactions, such as clicking a button, applying a filter, or opening a menu. If the user clicks a filter and the interface takes too long to respond visually, INP can be affected.

**CLS, or Cumulative Layout Shift**, measures unexpected layout movement while the page is loading or being used. For example, if a hotel image loads without reserved space and pushes the hotel details downward, the layout shifts and CLS increases.

To improve LCP, I focus on making the main content load sooner by optimizing critical images, reducing server response time, and avoiding render-blocking resources.

To improve INP, I investigate long JavaScript tasks, unnecessary rendering work, and expensive event handlers that delay the browser from responding to user input.

To improve CLS, I reserve space for images and other dynamic content, define image dimensions, and avoid inserting content above existing content unexpectedly.

I also distinguish between lab data and field data. Lab data is collected in a controlled test environment, using tools such as Lighthouse. Field data comes from actual users visiting the website under different devices, network conditions, and usage patterns.

So, I use lab data to reproduce and investigate problems, and field data to understand how the website performs for real users.

## 3. Understand each metric and how to improve it

## A. LCP — Largest Contentful Paint

Measures loading performance

LCP tracks when the largest eligible content element visible in the viewport is rendered.

Good target: 2.5 seconds or less

Measured at the 75th percentile of page visits.

How I'd improve it:

- Improve server response time (TTFB).
- Optimize and prioritize the main image.
- Avoid lazy-loading the LCP image.
- Reduce render-blocking CSS and JavaScript.
- Preload critical resources when appropriate.


## B. INP — Interaction to Next Paint

Measures interactivity

INP evaluates the latency of user interactions throughout a visit, using the interaction delays and their next visual update.

Good target: 200 milliseconds or less

Measured at the 75th percentile.

How I'd improve it:

- Break up long JavaScript tasks.
- Reduce expensive calculations during interactions.
- Avoid unnecessary component rendering.
- Keep event handlers lightweight.
- Defer non-urgent updates when appropriate.


## C. CLS — Cumulative Layout Shift

Measures visual stability

CLS measures unexpected layout shifts during a page visit. It is a score, not a time measurement.

Good target: 0.1 or less

Measured at the 75th percentile.

How I'd improve it:

- Set explicit image and video dimensions.
- Reserve space for advertisements and dynamic widgets.
- Avoid inserting content above existing content.
- Use appropriate font-loading strategies.
- Animate with `transform` instead of properties that trigger layout when possible.

## 4. Lab data vs. field data

This is a common interview follow-up.

| Lab data                                            | Field data                                                   |
| --------------------------------------------------- | ------------------------------------------------------------ |
| Collected in a controlled test environment          | Collected from real user experiences                         |
| Useful for reproducing and debugging issues         | Useful for understanding actual user experience              |
| Can use Lighthouse and controlled browser profiling | Can use real-user monitoring (RUM) and Chrome UX Report data |
| Conditions are defined by the test setup            | Devices, networks, and interactions vary                     |
| Useful during development and before releases       | Useful for monitoring production performance                 |

Example: Lighthouse shows that your hotel listing page has a good LCP under simulated conditions, but real users still experience slow loading.

I'd investigate field data by device type, page type, and network conditions. The problem might affect users on slower devices or networks but not appear in my local test.

One important distinction: Chrome UX Report provides aggregated field data for eligible experiences, while a RUM solution can help monitor a site's own users in more detail.

## 5. Practical example: a hotel listing page

Imagine a hotel listing page with the following problems:

Problem 1: The main hotel image appears late

Metric: LCP

I'd inspect image size, request priority, server response time, and whether the image is discovered early enough.

Problem 2: Applying a price filter feels slow

Metric: INP

I'd profile the interaction and investigate expensive filtering, sorting, or React rendering work.

Problem 3: Hotel cards jump when images load

Metric: CLS

I'd reserve the image space using dimensions or an appropriate aspect ratio so the cards don't shift unexpectedly.

This example helps connect the metrics to actual frontend engineering decisions instead of treating them as definitions to memorize.

## 6. Likely interviewer cross-questions

1\. Are Core Web Vitals measured only during the initial page load?No. LCP is a loading metric, while INP considers interactions throughout a visit. CLS reflects layout shifts during the visit, with its scoring designed to account for shifts over time.

2\. Can a page have a good LCP but a poor INP?

3\. Is CLS measured in milliseconds?

4\. How do you measure Core Web Vitals in production?

5\. What is the difference between INP and FID?

## 7. Key points to remember

# LCP

Loading

How quickly the main content appears

Good: ≤ 2.5 s

# INP

Interactivity

How quickly the page responds to interactions

Good: ≤ 200 ms

# CLS

Visual stability

How much unexpected layout movement occurs

Good: ≤ 0.1

Remember the targets as 2.5 seconds, 200 milliseconds, and 0.1 respectively. These are Google's good thresholds, assessed at the 75th percentile of page visits.

The overall takeaway: Core Web Vitals measure three different aspects of user experience. I use lab tools to diagnose issues and field data to understand how the application performs for real users.





Understood. From Question 3 onward, I'll keep the notes in GitHub-compatible Markdown (`.md`) format, with consistent headings, tables, code formatting, and interview-ready answers that you can copy directly into your notes.

# Question 3: What's the difference between FCP, LCP and TTI?

## 1. Understand What the Interviewer Is Asking

The interviewer wants to know whether you understand how a browser loads and displays a webpage and how we measure different stages of that process.

The three terms represent different milestones:

- FCP (First Contentful Paint): When the browser first displays content.
- LCP (Largest Contentful Paint): When the largest eligible content element becomes visible.
- TTI (Time to Interactive): An older metric intended to indicate when a page becomes reliably interactive.

The important thing is that a page displaying content doesn't necessarily mean that the page is ready for user interaction.

## 2. Interview-Ready Answer

When I measure page loading performance, I look at different milestones because each one tells me something different about the user experience.

FCP, or First Contentful Paint, measures how long it takes for the browser to render the first piece of content, such as text, an image, or an SVG. It tells me when the user first sees something on the screen.

LCP, or Largest Contentful Paint, measures when the largest eligible content element in the visible viewport is rendered. For example, on a hotel listing page, it could be a large hotel image or a heading. It helps me understand when the main content becomes visible.

TTI, or Time to Interactive, was designed to estimate when a page had become reliably interactive, meaning it could respond consistently to user input without being blocked by excessive JavaScript execution.

For example, a page might display its heading quickly, giving it a good FCP. However, if the main hotel images take longer to load, its LCP could be poor. Similarly, the page might display its content while heavy JavaScript is still running, making interactions feel slow.

One important point is that TTI is no longer a recommended Core Web Vital and has been removed from Lighthouse's standard performance metric set. For modern performance analysis, I focus more on LCP for loading and INP for responsiveness.

So, in simple terms, FCP tells me when content first appears, LCP tells me when the main content appears, and TTI was an attempt to measure when the page became reliably interactive.

## 3. Comparison Table

| Metric | Full Form                | What It Measures                                            | Good Target / Status                            |
| ------ | ------------------------ | ----------------------------------------------------------- | ----------------------------------------------- |
| FCP    | First Contentful Paint   | Time until the first content is rendered                    | `≤ 1.8 seconds`                                 |
| LCP    | Largest Contentful Paint | Time until the largest eligible visible content is rendered | `≤ 2.5 seconds`                                 |
| TTI    | Time to Interactive      | When the page becomes reliably interactive                  | Legacy metric; no current Core Web Vital target |

FCP and LCP targets refer to Google's good-performance thresholds at the 75th percentile of page visits. TTI is a historical metric, so avoid treating it as a current Core Web Vital.

## 4. Practical Example: Hotel Listing Page

Imagine a user opens a hotel search results page.

| Timeline | What Happens                                                          |
| -------- | --------------------------------------------------------------------- |
| `0.8s`   | The page heading appears — FCP                                        |
| `2.2s`   | The main hotel image appears — LCP                                    |
| Later    | Heavy JavaScript continues processing and makes interactions sluggish |

In this example, the page displays content quickly, but that alone doesn't guarantee a good experience. The user may still wait for important content or experience delayed interactions.

The exact time at which the page becomes interactive depends on the browser's workload and the application's implementation; it cannot be determined from FCP and LCP alone.

## 5. When Would I Use These Metrics?

- FCP: To understand how quickly users first see a visual response from the page.
- LCP: To investigate delays in displaying the primary content.
- TTI: Mainly when analyzing older performance reports or legacy monitoring systems.
- INP: To measure how responsive the page is to real user interactions in modern performance monitoring.

For a current React or Next.js application, I'd typically monitor FCP and LCP for loading insights and INP for responsiveness rather than relying on TTI.

## 6. Likely Interviewer Cross-Questions

### Q1. Can FCP be good while LCP is poor?

Yes. The browser might render a heading or a small piece of text quickly, resulting in a good FCP, while the main image or other large content appears much later, resulting in a poor LCP.

### Q2. Does LCP tell us whether a page is interactive?

No. LCP measures when the largest eligible content element is rendered. It doesn't tell us whether JavaScript is blocking user interactions. For responsiveness, INP is a more relevant metric.

### Q3. Why is TTI no longer commonly used?

TTI was useful as a lab metric, but it could be difficult to interpret consistently and wasn't as representative of real-world interaction responsiveness. Modern performance analysis emphasizes Core Web Vitals such as INP, which measures actual interaction latency.

### Q4. Which metric would you prioritize if the homepage looks blank for too long?

I'd investigate FCP first to understand when the first content appears, then LCP to identify when the main content becomes visible. I'd also inspect server response time, render-blocking resources, and the critical rendering path to find the cause.

## 7. Key Points to Remember

Remember this sequence:

FCP → LCP → Interactivity

- FCP: First content appears.
- LCP: Main content appears.
- TTI: Legacy metric for reliable interactivity.
- INP: Modern Core Web Vital for responsiveness.

The key takeaway is that displaying the first pixel of meaningful content and displaying the main content are different milestones. Neither alone guarantees that the page will respond quickly to user interactions.


# Question 4: How do you monitor performance in production, not just locally?

## 1. Understand What the Interviewer Is Asking

The interviewer wants to know how you ensure a React or Next.js application performs well for real users after deployment, not just on your development machine.

They want to understand whether you can:

- Collect performance data from real users.
- Monitor Core Web Vitals and page-loading metrics.
- Identify which pages, devices, or user journeys have performance issues.
- Detect regressions after deployments.
- Use monitoring data to investigate and fix problems.

The key idea: Local testing helps identify potential problems, but production monitoring tells us how the application performs under real-world conditions.

## 2. Interview-Ready Answer

When I monitor performance in production, I combine real-user monitoring, error tracking, and performance testing as part of the overall process.

First, I use Real User Monitoring (RUM) to understand how the application performs for actual users. I collect metrics such as LCP, INP, CLS, and page-load timings. This helps me understand whether users are experiencing slow loading, delayed interactions, or unexpected layout shifts.

Next, I break down the data by page or route, device type, browser, and network conditions where possible. For example, in a hotel booking application, the homepage might perform well while the hotel listing page is slow because it loads many images or performs expensive filtering.

I can use tools such as Sentry, Datadog RUM, or New Relic Browser to collect performance data and investigate issues. I also use Chrome UX Report data when I need aggregated real-user Core Web Vitals information for eligible pages.

I then establish performance thresholds and alerts so that we can detect problems early. For example, if LCP increases significantly after a deployment, I'd compare the affected routes and investigate whether the change introduced a larger JavaScript bundle, slower data fetching, or an expensive rendering operation.

I also use Lighthouse or Lighthouse CI in development and CI pipelines to catch potential performance regressions before they reach production.

Finally, after fixing an issue, I verify the improvement using production data rather than relying only on local testing.

So, my approach is to collect real-user data, identify performance problems, investigate the root cause, and continuously monitor the impact of fixes and deployments.

## 3. Understand the Main Types of Monitoring

There are three important approaches to remember.

### A. Real User Monitoring (RUM)

RUM collects performance information from actual users visiting your application.

What I monitor:

- Core Web Vitals: LCP, INP, and CLS.
- Page-load and navigation timings.
- Performance differences across routes, devices, and browsers.
- User interaction latency and relevant errors.

Example: Users on mobile devices experience poor LCP on the hotel listing page. RUM helps identify the affected page and user segment.

### B. Synthetic Monitoring

Synthetic monitoring runs predefined tests under controlled conditions, even when real users aren't visiting the page.

Tools: Lighthouse CI and WebPageTest.

What I monitor:

- Page-loading performance under consistent test conditions.
- Important user journeys.
- Performance regressions between builds.
- Changes in resource loading and bundle size.

Example: A Lighthouse CI check detects that a new release has increased the homepage's JavaScript bundle size.

### C. Error and Performance Monitoring

Tools such as Sentry and Datadog can help correlate performance issues with errors, slow transactions, or changes in application behavior, depending on the product and configuration.

Example: A particular route becomes slower after deployment, and the monitoring data also shows repeated failed API requests.

The combination of these approaches helps us detect issues, investigate causes, and validate fixes.

## 4. Practical Example: Monitoring a Hotel Listing Page

Imagine we deploy a new version of a hotel booking application. Shortly afterward, users report that the hotel listing page feels slow.

| Step           | What I'd Do                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| 1. Detect      | Check RUM dashboards for changes in LCP, INP, and CLS.                                             |
| 2. Narrow down | Identify the affected route, devices, browsers, and user segments.                                 |
| 3. Investigate | Use browser traces, network timings, error data, and deployment comparisons.                       |
| 4. Fix         | Optimize the actual bottleneck, such as image loading, API requests, or expensive React rendering. |
| 5. Validate    | Compare performance before and after the fix and monitor the next deployment.                      |

For example, if the listing page's LCP worsens after a release, I'd check whether the main hotel image is being loaded too late or whether server response time has increased. I wouldn't assume that React rendering is the problem without supporting evidence.

## 5. What Should We Monitor in Production?

| Metric or Signal              | Why It Matters                                           |
| ----------------------------- | -------------------------------------------------------- |
| LCP                           | Shows how quickly the main content appears.              |
| INP                           | Shows how responsive the page is to user interactions.   |
| CLS                           | Shows whether the page layout shifts unexpectedly.       |
| TTFB                          | Helps investigate server response delays.                |
| JavaScript errors             | Identifies failures that can affect the user experience. |
| API latency and failure rates | Helps identify slow or unreliable backend dependencies.  |
| JavaScript bundle size        | Helps detect unnecessary growth in downloaded code.      |
| Route-level performance       | Identifies pages that need targeted optimization.        |

Not every signal needs to be collected using the same tool. For example, browser RUM is useful for user-experience metrics, while backend monitoring helps investigate server-side latency.

## 6. How Would I Set Up Performance Monitoring in a Next.js Application?

A practical setup could look like this:

1. Collect browser metrics: Capture Core Web Vitals and navigation timings using a RUM solution or browser APIs.
2. Add route-level visibility: Associate measurements with the relevant page or route, without collecting unnecessary personal information.
3. Integrate error tracking: Capture JavaScript errors and relevant performance traces.
4. Create dashboards and alerts: Track trends and alert on meaningful regressions rather than every small fluctuation.
5. Add CI performance checks: Use Lighthouse CI or bundle-size checks to catch potential regressions before deployment.
6. Review production results: Compare real-user metrics after releases and investigate sustained degradation.

For Next.js, the exact instrumentation depends on whether the application uses the App Router or Pages Router and which monitoring provider is selected.

## 7. Likely Interviewer Cross-Questions

### Q1. What's the difference between RUM and Lighthouse?

Lighthouse runs an audit under controlled conditions and is useful for reproducing and diagnosing performance problems. RUM collects performance data from real users, reflecting the diversity of devices, networks, and user behavior.

### Q2. How do you know whether a deployment caused a performance regression?

I'd compare production metrics before and after the deployment, focusing on affected routes and user segments. I'd also inspect changes to the bundle, data-fetching behavior, and rendering code to identify a likely cause.

### Q3. What would you do if only mobile users reported slow performance?

I'd segment the RUM data by device and network conditions. Then I'd investigate large resources, JavaScript execution time, image optimization, and device-specific rendering costs. I would validate the issue on a representative mobile device or throttled test environment.

### Q4. Would you rely only on Core Web Vitals?

No. Core Web Vitals are important user-experience metrics, but they don't explain every problem. I'd also examine API latency, JavaScript errors, resource loading, route-level behavior, and relevant user interactions to identify the underlying cause.

### Q5. How do you prevent performance from getting worse over time?

I'd establish performance baselines, add automated checks to CI, monitor real-user metrics, and review regressions after releases. Performance should be part of the development and deployment process rather than a one-time optimization task.

## 8. Key Points to Remember

Remember this sequence:

Collect → Segment → Investigate → Alert → Validate

- Collect: Measure performance for real users.
- Segment: Find the affected pages and user groups.
- Investigate: Identify the underlying bottleneck.
- Alert: Detect meaningful performance regressions.
- Validate: Confirm that the fix improves production performance.

The key takeaway: Local tools help us find problems under controlled conditions, while production monitoring tells us whether real users are experiencing those problems. A strong frontend engineer uses both to maintain performance over time.



# Question 5: What causes unnecessary re-renders in React, and how do you detect them?

## 1. Understand What the Interviewer Is Asking

The interviewer wants to know whether you understand how React decides to render components and how you identify rendering work that affects performance.

They want to know:

- What triggers a component to re-render?
- Which re-renders are unnecessary or expensive?
- How do you identify the root cause?
- How do you optimize rendering without adding unnecessary complexity?

The key idea: A re-render is not automatically a performance problem. The problem is when rendering work is unnecessarily expensive or causes noticeable delays in the user experience.

## 2. Interview-Ready Answer

In React, a component can re-render for several reasons. The most common ones are when its state changes, its parent re-renders, or a context value it consumes changes.

However, not every re-render is unnecessary. React needs to re-render components when their data changes so that the UI stays in sync with the application state.

The problem starts when a component performs expensive rendering work even though the relevant data hasn't meaningfully changed, or when an update causes a large part of the component tree to render unnecessarily.

For example, imagine a hotel listing page where a user changes a price filter. If the entire page re-renders, including unrelated components such as the header, navigation, and static promotional sections, I would investigate whether the state is placed too high in the component tree.

I usually start by reproducing the interaction and using the React DevTools Profiler to see which components rendered and how much time they took. Then I inspect their props, state, context dependencies, and parent components to understand why those renders happened.

Depending on what I find, I might move state closer to the component that needs it, split a large component into smaller ones, avoid unnecessary context updates, or use `React.memo`, `useMemo`, and `useCallback` where they provide a measurable benefit.

I don't apply memoization everywhere because it also has a cost and doesn't solve every rendering problem.

Finally, I profile the interaction again to verify that the optimization actually improves performance.

So, my approach is to identify what triggers the render, determine whether it causes a real performance problem, and then apply the smallest effective optimization.

## 3. What Causes Re-renders in React?

There are four common causes to understand.

### A. State Changes

When a component updates its state using `useState` or `useReducer`, React schedules a render.

```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Here, the component re-renders when `count` changes because the UI depends on that state.

This is expected behavior, not an unnecessary re-render.

### B. Parent Component Re-renders

When a parent component re-renders, React normally renders its child components too, unless an optimization such as `React.memo` allows a child to skip rendering.

```
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <HotelHeader />
    </>
  );
}
```

In this example, `Parent` re-renders when `count` changes. `HotelHeader` can also render even though it doesn't use `count`.

If `HotelHeader` is expensive to render and its props remain unchanged, memoization or a better component structure might help.

### C. Context Value Changes

When a component consumes a context, it re-renders when the context value it receives changes according to React's comparison rules.

```
<BookingContext.Provider value={{ user, currency }}>
  {children}
</BookingContext.Provider>
```

Here, the object literal creates a new object whenever the provider renders. Because the context value has a different reference, consumers can re-render even if `user` and `currency` haven't meaningfully changed.

The solution depends on the situation. We might stabilize the value, split unrelated contexts, or reduce the number of components that consume the context.

### D. New Object, Array, or Function References

JavaScript compares objects and functions by reference, not by their contents.

```
<HotelCard
  hotel={hotel}
  onSelect={() => selectHotel(hotel.id)}
  options={{ showRating: true }}
/>
```

If this code runs again during a parent render, the inline function and object are newly created.

If `HotelCard` is wrapped in `React.memo`, those new references can cause its props to be considered changed, preventing the memoized component from skipping its render.

Possible solutions include stabilizing references when useful or restructuring the component so that memoization is not needed.

## 4. How Do I Detect Unnecessary Re-renders?

I generally use this process.

| Step | Tool or Technique              | What I Check                                                                 |
| ---- | ------------------------------ | ---------------------------------------------------------------------------- |
| 1    | Reproduce the issue            | Which interaction causes the slowdown?                                       |
| 2    | React DevTools Profiler        | Which components render, and how much time do they take?                     |
| 3    | Component and state inspection | Are unrelated components updating because state is placed too high?          |
| 4    | Props and context inspection   | Are values changing unnecessarily due to new object or function references?  |
| 5    | Chrome DevTools Performance    | Is React rendering actually contributing to a long task or slow interaction? |
| 6    | Profile again                  | Did the optimization improve the interaction?                                |

### A useful distinction

- React DevTools Profiler helps identify component rendering work.
- Chrome DevTools Performance helps show the broader browser activity, including JavaScript execution, layout, painting, and other main-thread work.

A component may re-render without changing the DOM. Therefore, I don't assume that every React render causes a full browser repaint or that every render needs optimization.

## 5. Practical Example: Hotel Listing Page

Imagine a hotel listing page with 100 hotel cards, a search bar, a header, and several filters.

Whenever a user types into the search box, the page becomes sluggish.

My investigation might look like this:

1. Reproduce the issue: Type into the search box and observe when the lag occurs.
2. Profile the interaction: Use React DevTools Profiler to see whether all 100 hotel cards render on each keystroke.
3. Identify the cause: Check whether search state is stored in a high-level parent, causing unrelated components to render.
4. Choose a targeted fix: Colocate state where possible, debounce expensive search work if appropriate, and consider memoizing expensive hotel cards when their props remain stable.
5. Validate: Record the same interaction again and compare render duration and responsiveness.

For very large lists, virtualization might be more effective than memoizing every card because it reduces how many items need to be rendered in the first place.

The important point is that I select the optimization based on the bottleneck rather than automatically adding `React.memo` to every component.

## 6. Common Optimization Techniques

| Technique         | When It Helps                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------- |
| State colocation  | Prevents unrelated parts of the component tree from updating due to local state changes. |
| `React.memo`      | Can skip a child component render when its props are unchanged.                          |
| `useMemo`         | Can reuse an expensive calculation's result while its dependencies remain unchanged.     |
| `useCallback`     | Can preserve a function reference between renders when that stability is useful.         |
| Context splitting | Prevents components from subscribing to unrelated context values.                        |
| Virtualization    | Reduces the number of rendered items in a large list.                                    |

These techniques solve different problems. For example, `useMemo` does not prevent a component from rendering, and `useCallback` alone does not stop a child component from re-rendering.

We'll cover those distinctions in detail in Question 6.

## 7. Likely Interviewer Cross-Questions

### Q1. Does every state update cause a re-render?

Not necessarily. React may skip work in some cases, such as when a state update provides a value equal to the current value according to `Object.is`. But when state meaningfully changes, React generally renders the component to update the UI.

### Q2. Does `React.memo` prevent all re-renders?

No. It can allow a component to skip rendering when its props are unchanged, but the component can still re-render when its own state or consumed context changes. It is also a performance optimization, not a guarantee that rendering will never occur.

### Q3. How do you know whether a re-render is actually a problem?

I'd use profiling data to determine whether the render contributes meaningful execution time or a noticeable delay. Frequent renders are not inherently bad if they are inexpensive and the UI remains responsive.

### Q4. Can a component re-render without changing the DOM?

Yes. React can execute a component and determine that its resulting output doesn't require a DOM update. Component rendering and browser painting are different stages of the rendering process.

### Q5. Would you use `React.memo` on every component?

No. Memoization adds comparison work and can make code more complex. I'd use it when a component is expensive to render, receives stable props, and profiling suggests that skipping renders would provide a meaningful benefit.

## 8. Key Points to Remember

Remember this sequence:

Trigger → Profile → Identify → Optimize → Validate

- Trigger: Identify what causes the component to render.
- Profile: Find expensive rendering work using React DevTools.
- Identify: Inspect state placement, props, context, and component relationships.
- Optimize: Apply a targeted fix.
- Validate: Confirm the improvement with another profile.

The key takeaway: React re-renders are normal. A good frontend engineer understands what triggers them, identifies which ones actually affect performance, and optimizes only where there is a measurable benefit.



# Question 6: When Would You Use `React.memo`, `useMemo`, and `useCallback`?

## 1. Understand What the Interviewer Is Asking

The interviewer wants to know whether you understand how React memoization works and whether you can choose the right optimization for a real performance problem.

They want to know:

- What is the difference between `React.memo`, `useMemo`, and `useCallback`?
- When should you use each one?
- When can memoization make performance worse instead of better?
- Does `useCallback` alone prevent a child component from re-rendering?

The key idea: All three help avoid unnecessary work, but they optimize different things.

- `React.memo` memoizes a component's render result based on its props.
- `useMemo` memoizes a calculated value.
- `useCallback` memoizes a function reference.

## 2. Interview-Ready Answer

In React, I use `React.memo`, `useMemo`, and `useCallback` when I identify unnecessary rendering or expensive calculations that affect performance.

`React.memo` is used to prevent a component from re-rendering when its props haven't changed. For example, if I have a hotel listing page with many hotel cards, I can memoize a hotel card so it can skip rendering when its props remain the same, even if its parent re-renders.

`useMemo` is used to cache the result of an expensive calculation between renders. For example, if I'm filtering and sorting a large list of hotels, I can use `useMemo` to avoid repeating that calculation when its dependencies haven't changed.

`useCallback` is used to preserve a function reference between renders. This is particularly useful when I pass callbacks to memoized child components, because creating a new function on every render can cause those children to render again.

One important thing to understand is that `useCallback` alone doesn't prevent a child component from re-rendering. It only preserves the function reference. If I want a child to skip rendering based on unchanged props, I may also need `React.memo`.

I also avoid using these optimizations everywhere. Memoization has its own costs, such as dependency comparisons, memory usage, and additional code complexity. If a calculation is cheap or a component renders quickly, memoization might not provide any meaningful benefit.

So, I generally profile the application first, identify the expensive work, choose the appropriate optimization, and then measure again to confirm that it actually improves performance.

## 3. Understand Each Optimization

### A. `React.memo` — Optimize Component Rendering

`React.memo` is a higher-order component that can skip re-rendering a function component when its props are unchanged according to a shallow comparison using `Object.is` for individual prop values.

Example:

```
import { memo, useState } from "react";

const HotelCard = memo(function HotelCard({ hotel }) {
  console.log("HotelCard rendered");

  return (
    <div>
      <h3>{hotel.name}</h3>
      <p>Price: {hotel.price}</p>
    </div>
  );
});

function HotelList() {
  const [count, setCount] = useState(0);

  const hotel = {
    id: 1,
    name: "Taj Hotel",
    price: 5000,
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <HotelCard hotel={hotel} />
    </>
  );
}
```

In this example, `HotelCard` receives a new `hotel` object whenever `HotelList` renders. Even though the object's contents are the same, its reference changes, so `React.memo` cannot skip the render based on its default props comparison.

To make this optimization effective, the `hotel` object needs a stable reference when its data hasn't changed, or the component's props should be designed differently.

When I use it:

- Expensive child components render frequently.
- Parent components update for reasons unrelated to the child.
- Props remain stable across those parent renders.

When I avoid it:

- The component is cheap to render.
- Its props change on almost every render.
- The comparison cost or added complexity outweighs the benefit.

Important: `React.memo` doesn't prevent re-renders caused by the component's own state updates or changes to context it consumes.

### B. `useMemo` — Optimize Expensive Calculations

`useMemo` caches the result of a calculation between renders while its dependencies remain unchanged.

Example:

```
import { useMemo, useState } from "react";

function HotelList({ hotels }) {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = useMemo(() => {
    return hotels
      .filter((hotel) => hotel.price <= maxPrice)
      .filter((hotel) =>
        hotel.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.price - b.price);
  }, [hotels, maxPrice, searchTerm]);

  return (
    <div>
      <p>Matching hotels: {filteredHotels.length}</p>
    </div>
  );
}
```

Here, React can reuse the filtered and sorted array when `hotels`, `maxPrice`, and `searchTerm` haven't changed.

Without `useMemo`, the filtering and sorting operations would run whenever the component executes.

When I use it:

- A calculation is expensive enough to affect rendering performance.
- The inputs remain unchanged across renders.
- Profiling indicates that repeating the calculation is a problem.

When I avoid it:

- The calculation is inexpensive.
- Dependencies change on every render, so the cached result is rarely reused.
- The optimization adds more complexity than value.

Important: `useMemo` doesn't prevent the component from rendering. It only helps avoid recalculating a value when its dependencies haven't changed.

### C. `useCallback` — Optimize Function References

`useCallback` caches a function reference between renders while its dependencies remain unchanged.

Example:

```
import { memo, useCallback, useState } from "react";

const HotelCard = memo(function HotelCard({ hotel, onSelect }) {
  console.log("HotelCard rendered");

  return (
    <button onClick={() => onSelect(hotel.id)}>
      Select {hotel.name}
    </button>
  );
});

function HotelList({ hotels }) {
  const [count, setCount] = useState(0);

  const handleSelect = useCallback((hotelId) => {
    console.log("Selected hotel:", hotelId);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          onSelect={handleSelect}
        />
      ))}
    </>
  );
}
```

Here, `handleSelect` retains the same reference when `HotelList` re-renders because it has no changing dependencies.

If the `hotel` prop references also remain stable, the memoized `HotelCard` components can skip rendering when `count` changes.

When I use it:

- Passing callbacks to memoized child components.
- Keeping a function reference stable for a dependency-based Hook when appropriate.
- Avoiding repeated downstream work caused by changing function references.

When I avoid it:

- The function is cheap and reference stability doesn't matter.
- The callback is passed to a component that renders anyway.
- It adds unnecessary dependencies or makes the code harder to maintain.

Important: `useCallback` doesn't prevent a child from re-rendering by itself. It preserves a function reference; the child must have a reason and the appropriate conditions to skip rendering.

## 4. Quick Comparison Table

| Feature                                    | `React.memo`                               | `useMemo`                              | `useCallback`                           |
| ------------------------------------------ | ------------------------------------------ | -------------------------------------- | --------------------------------------- |
| What it memoizes                           | Component rendering based on props         | A calculated value                     | A function reference                    |
| Main purpose                               | Skip eligible child renders                | Avoid repeating expensive calculations | Preserve callback identity              |
| What it returns                            | A memoized component                       | A cached value                         | A cached function                       |
| Prevents the parent from rendering?        | No                                         | No                                     | No                                      |
| Prevents its own component from rendering? | Can skip renders caused by unchanged props | No                                     | No                                      |
| Typical example                            | Expensive hotel card                       | Filtering and sorting hotels           | Event handler passed to a memoized card |

A simple way to remember the difference:

- `React.memo` → Component
- `useMemo` → Value
- `useCallback` → Function

## 5. Does `useCallback` Alone Prevent a Child Re-render?

No. This is one of the most important interview points.

Consider this example:

```
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

function Child({ onClick }) {
  console.log("Child rendered");

  return <button onClick={onClick}>Click me</button>;
}
```

Even though `handleClick` has a stable reference, `Child` can still re-render whenever `Parent` re-renders because `Child` is not memoized.

If we change the child to:

```
const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return <button onClick={onClick}>Click me</button>;
});
```

Now `Child` can skip re-rendering when `onClick` remains the same and its other relevant conditions haven't changed.

The distinction is:

- `useCallback` keeps the function reference stable.
- `React.memo` allows the child to skip rendering when its props are unchanged.

Both optimizations are useful only when they address an actual source of unnecessary work.

## 6. When Can Memoization Hurt Performance?

Memoization isn't free. It can introduce extra work or complexity.

### A. Unnecessary memoization

Wrapping every component in `React.memo` can add comparison overhead and make the code harder to understand without improving performance.

### B. Dependencies change on every render

```
const filteredHotels = useMemo(() => {
  return filterHotels(hotels, filters);
}, [hotels, filters]);
```

If `filters` is recreated as a new object on every render, the calculation may run every time anyway.

The right fix depends on why the reference changes. For example, we could stabilize the object, move the calculation, or simplify the state structure.

### C. Incorrect dependencies

```
const handleSelect = useCallback(() => {
  console.log(selectedHotel);
}, []);
```

If `selectedHotel` changes, this callback can continue using the old value captured by its closure.

The correct dependency is:

```
const handleSelect = useCallback(() => {
  console.log(selectedHotel);
}, [selectedHotel]);
```

Missing dependencies can introduce stale-value bugs. Dependencies should reflect the reactive values the callback or calculation uses, rather than being omitted just to keep a reference stable.

### D. Props change frequently

If a memoized component receives new object or function references on every render, React may still need to render it. In that case, memoization may not provide much benefit.

### E. Overcomplicated code

If a component is inexpensive and already performs well, adding several Hooks just to avoid small amounts of work can make maintenance more difficult.

My rule: I use memoization when there is a clear performance reason, not simply because a component or function exists.

## 7. Practical Example: Optimizing a Hotel Listing Page

Imagine a hotel listing page displaying 200 hotels. Each card shows the hotel name, price, rating, and a selection button.

The user changes a sort dropdown, and the entire list becomes sluggish.

I'd approach the problem like this:

1. Profile first: Use React DevTools Profiler to identify expensive components and calculations.
2. Optimize calculations: If filtering and sorting are expensive and their inputs often remain unchanged, consider `useMemo`.
3. Optimize cards: If hotel cards render unnecessarily when unrelated parent state changes, consider `React.memo`.
4. Stabilize callbacks: If memoized cards receive new callback references every render, consider `useCallback`.
5. Check list size: If rendering 200 cards is still expensive, consider virtualization rather than relying only on memoization.
6. Measure again: Compare render durations and interaction responsiveness after the changes.

The right solution might use one technique or several. The goal is not to use all three Hooks everywhere; it's to remove the work that actually causes the slowdown.

## 8. Likely Interviewer Cross-Questions

### Q1. Does `useMemo` guarantee that React will never recalculate a value?

No. `useMemo` is a performance optimization, not a semantic guarantee. React can discard its cached value in certain circumstances, so the calculation should remain correct even if it runs again.

### Q2. What's the difference between `useMemo` and `useCallback`?

`useMemo` caches the result of calling a calculation function, while `useCallback` caches the function reference itself. Conceptually, `useCallback(fn, deps)` is similar to `useMemo(() => fn, deps)`.

### Q3. Can `React.memo` stop a component from rendering when its context changes?

No. A component that consumes a context can re-render when that context value changes, even if the component is wrapped in `React.memo`.

### Q4. Should you use `useCallback` for every event handler?

No. Most event handlers don't need it. I'd use `useCallback` when a stable function reference helps a memoized child skip rendering or is needed for another dependency-sensitive optimization.

### Q5. How do you decide whether memoization is worth it?

I'd profile the relevant interaction, identify the expensive work, apply the smallest appropriate optimization, and compare the results. If there is no meaningful improvement, I'd reconsider whether the optimization is necessary.

## 9. Key Points to Remember

Remember this sequence:

Component → Value → Function

- `React.memo`: Can skip a component render when its props remain unchanged.
- `useMemo`: Can reuse an expensive calculation's result.
- `useCallback`: Can preserve a function reference.
- Common limitation: New object, array, or function references can prevent memoization from helping.
- Best practice: Profile first, optimize selectively, and measure again.

The key takeaway: These tools solve different performance problems. Understanding what each one memoizes—and what it doesn't—is more important than using them everywhere.



# Question 7: How Can Context API Cause Performance Problems, and How Would You Fix Them?

## 1. Understand What the Interviewer Is Asking

The interviewer wants to know whether you understand how React Context works and what happens when context values change in a large component tree.

They want to know:

- Why can Context API trigger unnecessary rendering work?
- What happens when a provider's value changes?
- How do you prevent unrelated components from re-rendering?
- When would you split contexts or use a different state management solution?

The key idea: Context API is useful for sharing data across components, but when a context value changes, every component that consumes that context may re-render—even if it only uses a small part of the value.

## 2. Interview-Ready Answer

Context API is useful when I need to share data across multiple components without passing props through every level of the component tree. For example, I might use it for authentication information, theme settings, or currency preferences in a booking application.

However, Context API can cause performance problems when a frequently changing context value is consumed by many components.

For example, imagine that I have a `BookingContext` containing the user's profile, selected currency, and current search filters. Whenever the search filters change, every component consuming that context can re-render, even if some components only need the user's profile or currency.

Another common issue is creating a new object as the provider value on every render. React compares context values using `Object.is`, so a newly created object is considered different even when its properties contain the same values.

To solve these problems, I first identify which components are rendering unnecessarily using React DevTools Profiler. Then I try to split a large context into smaller contexts based on how the data is used and how frequently it changes.

I also keep state close to the components that need it, and I may stabilize provider values with `useMemo` when appropriate. If the application has complex shared state and frequent updates, I might consider a state management solution that supports more selective subscriptions.

I wouldn't avoid Context API altogether, because it's useful for many application-level concerns. The important thing is to use it carefully and avoid putting unrelated, frequently changing state into one large context.

## 3. Why Can Context API Cause Performance Problems?

There are three common reasons.

### A. Many Components Consume the Same Context

Consider a booking application with a single context containing several unrelated values:

```
const BookingContext = createContext();

function BookingProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("INR");
  const [filters, setFilters] = useState({});

  const value = {
    user,
    currency,
    filters,
    setUser,
    setCurrency,
    setFilters,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}
```

Suppose different components consume this context:

- `UserProfile` needs the user information.
- `CurrencySelector` needs the currency.
- `HotelResults` needs the search filters.

When the filters change, the provider renders again and creates a new `value` object. Because the context value has changed, all three consumers can re-render—even though `UserProfile` and `CurrencySelector` may not need the updated filters.

This becomes expensive when a large number of components consume the same frequently changing context.

### B. Creating a New Provider Value on Every Render

Consider this example:

```
<CurrencyContext.Provider
  value={{ currency, setCurrency }}
>
  {children}
</CurrencyContext.Provider>
```

The object passed to `value` is recreated whenever the provider renders.

Even if `currency` hasn't changed, the new object reference can cause consumers to receive an updated context value.

A possible optimization is:

```
const value = useMemo(
  () => ({ currency, setCurrency }),
  [currency]
);

return (
  <CurrencyContext.Provider value={value}>
    {children}
  </CurrencyContext.Provider>
);
```

Now the value object can retain its reference when `currency` remains unchanged.

This helps avoid context updates caused only by recreating the object. It does not prevent updates when the actual context data changes, nor does it prevent renders caused by other sources.

### C. Frequently Changing State Is Shared Too Broadly

Suppose the search filters update on every interaction, but the same context also contains authentication and theme information.

Those concerns have different update patterns. Combining them into one context can cause unrelated consumers to participate in frequent updates.

The better approach is to organize context around related data and update frequency rather than placing all application state into one provider.

## 4. How Would I Fix Context Performance Problems?

| Solution                         | When I'd Use It                                                               | Benefit                                                              |
| -------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Split contexts                   | One context contains unrelated data                                           | Consumers subscribe only to relevant context values.                 |
| Memoize provider values          | Provider renders create new object references unnecessarily                   | Avoids updates caused only by unstable value references.             |
| Colocate state                   | State is used by only a small part of the component tree                      | Reduces the number of components affected by updates.                |
| Split components                 | A component consumes context but only a small part needs the changing value   | Keeps context-dependent rendering work more localized.               |
| Use selector-based subscriptions | Large shared state changes frequently and consumers need only specific slices | Can reduce updates to components whose selected data hasn't changed. |

### Solution 1: Split Contexts

Instead of keeping everything in `BookingContext`, separate the concerns.

```
const UserContext = createContext();
const CurrencyContext = createContext();
const SearchFiltersContext = createContext();
```

Now `UserProfile` can consume `UserContext`, `CurrencySelector` can consume `CurrencyContext`, and `HotelResults` can consume `SearchFiltersContext`.

When search filters change, components consuming only the other contexts won't re-render because of that context update, provided those context values remain unchanged and no other update affects them.

This is often the simplest fix when unrelated data is combined into one context.

### Solution 2: Memoize the Provider Value

If a provider recreates an object on every render, `useMemo` can stabilize the value when its dependencies haven't changed.

```
const value = useMemo(
  () => ({
    currency,
    setCurrency,
  }),
  [currency]
);
```

This is useful when profiling shows that provider value identity is causing unnecessary context updates.

However, memoization is not a replacement for good state design. If the context value changes frequently because its actual data changes, consumers will still receive those updates.

### Solution 3: Keep State Close to Where It Is Used

Imagine that hotel filters are only needed by the search section.

Instead of storing them in a global context used throughout the application, I could keep them inside the search page or a dedicated search component.

That way, changing the filters doesn't automatically trigger updates across unrelated parts of the application through a shared context.

This is called state colocation, and it often solves the problem without introducing additional libraries.

### Solution 4: Use a State Management Library When Needed

If the application has large shared state with frequent updates, I might consider Redux with selectors or a library such as Zustand that supports selective subscriptions.

For example, a component subscribing only to the selected currency can avoid re-rendering when unrelated state changes, provided the selector's result remains unchanged and the subscription is configured appropriately.

I wouldn't introduce a state management library just because Context exists. I'd consider it when the complexity and update patterns justify the additional abstraction.

## 5. Practical Example: Hotel Booking Application

Imagine the following components share booking-related state:

```
BookingProvider
├── Header
│   └── UserProfile
├── CurrencySelector
├── SearchFilters
└── HotelResults
    ├── HotelCard
    ├── HotelCard
    └── HotelCard
```

Suppose all of them consume one large context containing user details, currency, and filters.

When a user changes the price filter, the context value changes. Every component consuming that context can re-render, potentially triggering rendering work throughout the hotel list.

I'd approach the issue as follows:

1. Profile the interaction: Use React DevTools Profiler to identify which components render and how much time they take.
2. Inspect context usage: Find which components consume the context and which values they actually need.
3. Separate concerns: Put user details, currency preferences, and search filters into appropriately scoped contexts.
4. Optimize remaining work: Stabilize provider values where useful and consider memoizing expensive hotel cards if their props remain unchanged.
5. Validate: Profile the filter interaction again to confirm that the amount of unnecessary rendering work has decreased.

The important point is that splitting contexts reduces unnecessary context-driven renders, while component memoization addresses a different problem. They can work together.

## 6. Likely Interviewer Cross-Questions

### Q1. Does every component inside a Context Provider re-render when its value changes?

No. Components that consume the changed context are eligible to re-render. Components that don't consume it aren't automatically re-rendered merely because the context value changed, although they may still render because of parent updates or other causes.

### Q2. Does `React.memo` prevent a component from re-rendering when its context changes?

No. `React.memo` can skip renders based on unchanged props, but it doesn't block updates from a context the component consumes.

### Q3. Is Context API bad for performance?

No. Context API is appropriate for many shared values, such as themes, locale settings, and authentication information. Problems usually arise from overly broad contexts, frequent updates, or unstable provider values.

### Q4. Will `useMemo` on the provider value solve every Context performance problem?

No. It can prevent unnecessary context updates caused by a new object reference, but it won't prevent updates when the actual context value changes. It also won't fix expensive rendering caused by unrelated state or parent updates.

### Q5. When would you choose Redux or Zustand instead of Context API?

I'd consider them when shared state becomes complex, updates frequently, or many components need selective access to different parts of the state. The decision should be based on the application's update patterns and maintainability requirements, not simply its size.

## 7. Key Points to Remember

Remember this sequence:

Identify → Split → Stabilize → Colocate → Validate

- Identify: Use React DevTools Profiler to find expensive renders.
- Split: Separate unrelated or frequently changing context values.
- Stabilize: Memoize provider values when unstable references cause unnecessary updates.
- Colocate: Keep state close to the components that need it.
- Validate: Measure whether the changes improve performance.

The key takeaway: Context API itself isn't the problem. A poorly structured context can spread updates across too many components. The goal is to make state dependencies more focused and reduce unnecessary rendering work without adding complexity that the application doesn't need.



# Question 8: How does state placement (lifting up vs. colocating) affect performance?

## 1. Understand the Question

The interviewer wants to know whether you understand where React state should live in a component tree and how that decision affects re-renders, component communication, and maintainability.

The two main concepts are:

- Lifting state up: Moving state to a common parent when multiple components need to share or coordinate it.
- State colocation: Keeping state as close as possible to the components that actually use it.

The goal is to keep shared state consistent without causing unnecessary parts of the application to re-render.

## 2. Interview-Ready Answer

"I generally follow the principle of keeping state as close as possible to where it's used. This is called state colocation.

For example, if a search input has its own temporary input state and only that component needs it, I keep the state inside the search component instead of placing it in a page-level component.

However, when multiple components need the same state, I lift it to their nearest common parent. For example, on a hotel booking page, the selected destination or check-in date might need to be shared between the search form, the results list, and the results summary.

The performance problem occurs when I lift state too high unnecessarily. Updating that state can cause the parent component and its descendants to re-render, depending on how the component tree is structured. It can also increase prop drilling.

To improve performance, I keep unrelated state local, lift only genuinely shared state, and use techniques like component composition and memoization when profiling shows they're needed.

So, my rule is: colocate local state, lift shared state only as high as necessary, and optimize based on measured performance."

## 3. Lifting State Up vs. State Colocation

### A. Lifting state up

When two or more components need to read or update the same state, move that state to their nearest common parent.

HotelSearchPage

Owns shared search criteria

SearchForm

Updates dates

HotelResults

Uses search criteria

Both components use the same source of truth owned by HotelSearchPage.

Benefits

- Keeps shared data consistent.
- Makes coordination between sibling components straightforward.
- Avoids maintaining duplicate copies of the same state.

Performance risk

If `HotelSearchPage` also renders a large, unrelated section, updating its state may cause that section to render again. The exact impact depends on the component tree and whether rendering is skipped through techniques such as `React.memo`.

### B. State colocation

Keep state inside the smallest component that needs to own and update it.

For example, a hotel search input might track the text currently being typed locally, while the parent only receives the submitted search query.

```
import { useState } from "react";

function HotelSearchInput({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(input);
      }}
    >
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter destination"
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

Here, each keystroke updates the input's local state. The parent doesn't need to own that temporary value unless other components need it immediately.

Benefits

- Limits the scope of state updates.
- Reduces unnecessary parent-level rendering.
- Makes components easier to understand and reuse.
- Avoids passing unrelated state through many layers.

## 4. Practical Example: Hotel Booking Page

Imagine a hotel booking page with these sections:

- Search form
- Hotel results
- Map
- Sort dropdown
- Login modal
- Reviews section

A poor state design might place every piece of state in the top-level page component, even when most components don't need it.

A better approach is to place state according to its purpose:

| State                                  | Recommended location                        | Reason                                                  |
| -------------------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| Search input text before submission    | Search input                                | Only the input needs every keystroke                    |
| Submitted destination and travel dates | Nearest common parent or search-state owner | Results and summary need consistent criteria            |
| Sort dropdown's open/closed state      | Sort component                              | It is local UI state                                    |
| Login modal visibility                 | Component that coordinates login UI         | Only relevant parts need this state                     |
| Selected hotel                         | Shared owner of results and booking summary | Both need the same selection                            |
| Individual review expansion            | Review item                                 | Expanding one review shouldn't require page-level state |

The exact owner depends on which components need the state. If the selected hotel must be accessed by distant components, a shared state mechanism may be appropriate—but moving everything into global state is not automatically better.

## 5. How State Placement Affects Re-Renders

Consider this example:

```
function HotelSearchPage() {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <>
      <HotelSearchForm />
      <HotelResults />
      <SortDropdown
        open={sortOpen}
        onToggle={() => setSortOpen((value) => !value)}
      />
    </>
  );
}
```

Opening the dropdown updates state owned by `HotelSearchPage`. React will render the page component again and normally reconcile its child elements. `HotelSearchForm` and `HotelResults` may also render again if they aren't able to bail out.

If only the dropdown needs this state, colocating it can reduce the work:

```
function SortDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen((value) => !value)}>
        Sort hotels
      </button>

      {open && <div>Sort options go here</div>}
    </div>
  );
}
```

Now toggling the dropdown updates its own state instead of the page's state. Unrelated siblings are no longer rendered again because of this state update.

Important: A re-render is not the same as a DOM update. React can render a component without making any visible DOM changes. The objective is to reduce unnecessary work, not to prevent every render.

## 6. Common Mistakes to Avoid

- Lifting all state to the page: Creates a broad update scope even for small UI changes.
- Keeping shared state in multiple places: Can cause inconsistent values and synchronization bugs.
- Using global state for everything: Adds complexity and doesn't automatically improve performance.
- Adding `React.memo` everywhere: Memoization has a cost and is most useful when profiling identifies expensive or frequent renders.
- Confusing state ownership with rendering: A component may render because its parent renders even if its own state hasn't changed.

## 7. Likely Follow-Up Questions

Q1. Does moving state down always improve performance?

Not always. It helps when the state is truly local. If multiple components need the same value, keeping it too low can lead to duplicated state or awkward communication.

Q2. What if distant components need the same state?

First consider whether they can share a common owner through props or component composition. If that becomes cumbersome, Context or a dedicated state-management solution may be appropriate. Choose based on the state’s scope and update frequency.

Q3. Does lifting state up always re-render every child?

It causes the owning parent to render when its state changes. Child components may also render, but memoization and component structure can allow some children to skip rendering. A changed prop or consumed context value can still trigger a render.

Q4. How do you decide whether to optimize further?

Use React DevTools Profiler to identify which components render, how often they render, and where rendering time is spent. Then adjust state placement or memoization and measure again.

## 8. Key Points to Remember

- Colocate local state to limit the scope of updates.
- Lift shared state to the nearest common parent that needs to coordinate it.
- Avoid lifting unrelated state to the page or application root.
- Avoid duplicating shared state just to reduce renders.
- Use Context or external state management when component communication justifies it.
- Use the React Profiler before adding performance optimizations.

One-line interview summary: Keep state as local as possible, lift it only when components need to share it, and use profiling to verify whether the state structure is causing unnecessary rendering.


# Question 9: Why are keys important in lists, and what happens if you use the array index?

## 1. Understand the Question

The interviewer wants to know whether you understand how React identifies list items between renders and how incorrect keys can cause UI bugs, incorrect state preservation, and unnecessary DOM updates.

In React, the `key` prop helps React identify which list item was added, removed, or reordered.

For example, on a hotel booking website, hotel results may be sorted by price, rating, or distance. React needs a reliable way to identify each hotel when the order changes.

## 2. Interview-Ready Answer

"In React, keys help identify individual elements in a list across renders. They allow React to match items between the previous and next render when items are added, removed, or reordered.

I prefer using a stable, unique identifier from the data, such as a hotel ID or product ID.

Using the array index as a key can cause problems when the list is dynamic. For example, if I sort a hotel list or remove an item from the beginning, the indexes of the remaining items change. React may associate a component's existing state with the wrong item, which can lead to incorrect UI behavior.

Index keys are generally acceptable for static lists that never change order, insert, or remove items, and where the items don't have meaningful local state. But for dynamic lists, I use stable IDs.

Also, keys should be unique among siblings, and they are used internally by React rather than being passed to the component as a normal prop."

## 3. How React Uses Keys

Consider a hotel list:

```
const hotels = [
  { id: "h101", name: "Grand Palace" },
  { id: "h102", name: "Ocean View" },
  { id: "h103", name: "Mountain Retreat" },
];

function HotelList() {
  return (
    <ul>
      {hotels.map((hotel) => (
        <li key={hotel.id}>{hotel.name}</li>
      ))}
    </ul>
  );
}
```

Here, `hotel.id` is a stable identifier. If the hotels are reordered, React can match each item using its key.

For example:

| Before sorting            | After sorting             |
| ------------------------- | ------------------------- |
| `h101` — Grand Palace     | `h103` — Mountain Retreat |
| `h102` — Ocean View       | `h101` — Grand Palace     |
| `h103` — Mountain Retreat | `h102` — Ocean View       |

Because the keys remain the same, React can track the hotels even though their positions change.

Important: Keys help React reconcile elements correctly. They do not guarantee that a component will never re-render.

## 4. What Goes Wrong With Array Index Keys?

Consider this implementation:

```
function HotelList({ hotels }) {
  return (
    <ul>
      {hotels.map((hotel, index) => (
        <li key={index}>{hotel.name}</li>
      ))}
    </ul>
  );
}
```

Suppose the original list is:

| Index key | Hotel            |
| --------- | ---------------- |
| `0`       | Grand Palace     |
| `1`       | Ocean View       |
| `2`       | Mountain Retreat |

Now, the user removes the first hotel.

| Index key after removal | Hotel            |
| ----------------------- | ---------------- |
| `0`                     | Ocean View       |
| `1`                     | Mountain Retreat |

React sees keys `0` and `1` still present, even though those keys now represent different hotels. It may reuse the existing component instances for different data.

This can cause problems if list items maintain local state, such as:

- An expanded/collapsed section.
- A selected checkbox.
- An input field's value.
- An item's temporary loading or editing state.

For simple elements containing only static text, the visible result may still appear correct. The risk becomes much greater when items are stateful or the list changes frequently.

## 5. Practical Example: Stateful Hotel Cards

Imagine every hotel card allows users to mark a hotel as a favorite.

```
import { useState } from "react";

function HotelCard({ hotel }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <h3>{hotel.name}</h3>

      <button onClick={() => setFavorite((value) => !value)}>
        {favorite ? "Favorited" : "Add to favorites"}
      </button>
    </div>
  );
}

function HotelList({ hotels }) {
  return hotels.map((hotel) => (
    <HotelCard key={hotel.id} hotel={hotel} />
  ));
}
```

With `key={hotel.id}`, React can preserve the component instance for the same hotel when the list is reordered.

If you instead use `key={index}`, React may preserve the favorite state at a position rather than with the intended hotel when items are removed or reordered. A different hotel could appear favorited.

In a real application, favorite status may be stored centrally or on the server, but this example illustrates the component-state problem.

## 6. When Is Using an Index Acceptable?

| Scenario                         | Index key?         | Reason                                          |
| -------------------------------- | ------------------ | ----------------------------------------------- |
| Static list that never changes   | Usually acceptable | Item positions remain stable                    |
| List with insertions or removals | Avoid              | Indexes shift                                   |
| List sorted or reordered         | Avoid              | Positions no longer identify the same items     |
| Stateful input components        | Avoid              | State can become associated with the wrong item |
| List with stable database IDs    | Prefer the ID      | Identity remains stable across updates          |

An index is not inherently wrong in every situation. The key question is whether an item's position remains a reliable representation of its identity.

## 7. Common Mistakes to Avoid

- Using random keys: `key={Math.random()}` changes keys on each render and can cause components to be remounted, losing local state and doing extra work.
- Using non-unique keys: Duplicate keys among siblings make reconciliation unreliable.
- Assuming keys prevent re-renders: Keys help React match list items; they are not a memoization mechanism.
- Expecting `key` as a prop: React does not pass `key` to the component. Pass an ID separately if the component needs it.
- Using array indexes by default: Choose a stable identifier when the data provides one.

## 8. Likely Follow-Up Questions

Q1. Does a key need to be globally unique?

No. It needs to be unique among the sibling elements in that list. The same key can be used in a separate list elsewhere.

Q2. What happens when a key changes?

React generally treats the element as a different component instance, which can cause the old instance to unmount and a new one to mount. Local state may be reset.

Q3. Can I use the hotel name as a key?

Only if it is guaranteed to be unique among the sibling items and remains stable. A database ID is usually safer because names can be duplicated or changed.

Q4. Are keys only important for performance?

No. They also affect correctness. Stable keys help React preserve the correct component identity and local state as the list changes.

## 9. Key Points to Remember

- Keys help React identify list items across renders.
- Prefer stable IDs from your data.
- Index keys are risky when lists are inserted into, filtered, removed from, or reordered.
- Incorrect keys can associate local component state with the wrong item.
- Keys must be unique among siblings, but not globally.
- Keys are not passed to components as ordinary props.
- Keys support reconciliation; they do not automatically prevent re-renders.

One-line interview summary: Use stable, unique keys to preserve item identity across renders. Array indexes are suitable mainly for static lists where positions never change and items don't rely on meaningful local state.



# Question 10: How do you optimize a component that renders slowly because of heavy computation?

## 1. Understand the Question

The interviewer wants to know how you identify and optimize expensive calculations inside React components.

A component might render slowly because it performs operations such as:

- Filtering or sorting thousands of records.
- Performing complex calculations during rendering.
- Transforming large API responses.
- Processing nested data structures.
- Recalculating derived values on every render.

The key is to identify the actual bottleneck, avoid unnecessary recalculation, and keep expensive work from blocking important user interactions.

## 2. Interview-Ready Answer

"If a React component is rendering slowly because of heavy computation, I first use the React DevTools Profiler and browser Performance panel to understand where the time is being spent.

If the component is repeatedly performing the same expensive calculation with unchanged inputs, I consider using `useMemo` to cache the result between renders.

I also check whether the calculation can be simplified, whether unnecessary data is being processed, or whether the operation should happen on the server instead of the client.

For large datasets, I might use server-side filtering and sorting, pagination, or virtualization so that the browser doesn't process or render more data than necessary.

If the computation is genuinely CPU-intensive and still blocks the main thread, I consider moving it to a Web Worker. For calculations triggered by user input, I may also use techniques such as debouncing or `useDeferredValue` to improve responsiveness.

I don't apply memoization everywhere. I measure the performance first, optimize the actual bottleneck, and then profile again to confirm the improvement."

## 3. Understand the Main Optimization Techniques

### A. Use `useMemo` to avoid repeated calculations

Consider a hotel booking application that filters and sorts thousands of hotels based on price.

Without memoization:

```
function HotelResults({ hotels, maxPrice }) {
  const filteredHotels = hotels
    .filter((hotel) => hotel.price <= maxPrice)
    .sort((a, b) => a.price - b.price);

  return <HotelList hotels={filteredHotels} />;
}
```

Whenever `HotelResults` renders, the filtering and sorting run again—even if `hotels` and `maxPrice` haven't changed.

With `useMemo`:

```
import { useMemo } from "react";

function HotelResults({ hotels, maxPrice }) {
  const filteredHotels = useMemo(() => {
    return hotels
      .filter((hotel) => hotel.price <= maxPrice)
      .sort((a, b) => a.price - b.price);
  }, [hotels, maxPrice]);

  return <HotelList hotels={filteredHotels} />;
}
```

Now React can reuse the previous result when both dependencies remain unchanged.

Important considerations:

- Dependencies must include every reactive value used by the calculation.
- If `hotels` receives a new array reference on every render, the calculation may still run every time.
- `useMemo` is a performance optimization, not a correctness guarantee.
- Sorting mutates an array, so make sure you are not sorting shared state or props directly. The example above is safe because `filter()` creates a new array before `sort()` runs.

### B. Simplify the algorithm

Memoization doesn't fix an inefficient algorithm.

Suppose you need to find whether each hotel belongs to a list of selected hotel IDs.

A less efficient approach:

```
const selectedHotels = hotels.filter((hotel) =>
  selectedIds.includes(hotel.id)
);
```

If `hotels` and `selectedIds` are both large arrays, repeated `includes()` checks can become expensive.

A more efficient approach:

```
const selectedIdSet = new Set(selectedIds);

const selectedHotels = hotels.filter((hotel) =>
  selectedIdSet.has(hotel.id)
);
```

Building a `Set` takes time proportional to the number of IDs on average, and lookups are typically much faster than repeatedly scanning an array.

The general principle is to examine the algorithm's time complexity before reaching for React-specific optimizations.

### C. Move expensive work outside the component when appropriate

If a calculation doesn't depend on props, state, or other changing inputs, avoid repeating it during every render.

For example, a static lookup table can be created at module scope:

```
const HOTEL_CATEGORY_LABELS = {
  luxury: "Luxury",
  budget: "Budget",
  boutique: "Boutique",
};

function HotelCategory({ category }) {
  return <span>{HOTEL_CATEGORY_LABELS[category]}</span>;
}
```

For complex transformations that depend on changing inputs, keep the calculation in a suitable function and memoize it only when measurement indicates a benefit.

## 4. What If the Computation Blocks the Main Thread?

JavaScript running on the browser's main thread can delay painting and user interactions. If a computation takes a long time, even a well-structured React component can feel frozen.

Use the following decision guide:

Problem: The same calculation runs repeatedly

Consider `useMemo` and stable dependencies.

Problem: The algorithm itself is inefficient

Reduce work, improve data structures, or optimize the algorithm.

Problem: Too much data is processed or rendered

Use server-side processing, pagination, or virtualization.

Problem: Heavy CPU work blocks interaction

Consider a Web Worker to move computation off the main thread.

### Using a Web Worker

A Web Worker runs JavaScript in a background thread, allowing suitable CPU-intensive work to happen without blocking the browser's main thread.

Typical use cases include:

- Processing large datasets.
- Complex calculations.
- Parsing or transforming large amounts of data.
- Computationally expensive search or analysis.

Workers have communication and data-transfer overhead, so they're not useful for every small calculation. They also cannot directly manipulate the DOM.

## 5. `useMemo` vs. `useDeferredValue` vs. Web Workers

| Technique              | Primary purpose                                   | Best suited for                                                      |
| ---------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| `useMemo`              | Reuse a calculation's result                      | Expensive calculations with unchanged dependencies                   |
| `useDeferredValue`     | Let less-urgent UI updates lag behind urgent ones | Keeping typing responsive while results update                       |
| Web Worker             | Run CPU-intensive JavaScript off the main thread  | Heavy computations that would otherwise block interaction            |
| Server-side processing | Avoid doing large work in the browser             | Large datasets or operations better suited to backend infrastructure |
| Virtualization         | Render only visible list items                    | Very long lists with expensive rendering                             |

These techniques solve different problems and can be combined when necessary.

## 6. Practical Example: Hotel Search Filters

Imagine a page with 20,000 hotel records and filters for price, rating, and amenities.

A user changes the maximum price several times. Each change triggers filtering and sorting, and the page starts to lag.

I would approach it in this order:

1. Profile the page: Determine whether the delay comes from filtering, sorting, React rendering, or DOM updates.
2. Reduce unnecessary work: Avoid recalculating results when the underlying data and filters haven't changed.
3. Optimize the calculation: Improve the algorithm and use appropriate data structures.
4. Reduce the workload: If practical, filter and sort on the server rather than processing all 20,000 records on every interaction.
5. Limit rendering: Use pagination or virtualization if the results list is large.
6. Improve responsiveness: If filtering remains CPU-intensive, consider a Web Worker or deferred updates.
7. Measure again: Verify that interaction latency and rendering time have improved.

The best solution depends on which stage is actually expensive. For example, `useMemo` won't fix a slow backend request, and virtualization won't fix a long-running calculation that blocks the main thread before rendering begins.

## 7. Common Mistakes to Avoid

- Adding `useMemo` everywhere: It adds complexity and has its own overhead.
- Assuming `useMemo` makes calculations faster: It primarily avoids repeating calculations when dependencies are unchanged.
- Ignoring dependency identity: New object or array references can invalidate memoization.
- Confusing computation with rendering: A component may be slow because of CPU work, React rendering, DOM updates, or a combination.
- Using `setTimeout` as a CPU optimization: It may postpone work but doesn't move it off the main thread.
- Moving everything to a Web Worker: Worker setup and data transfer can cost more than a small calculation.

## 8. Likely Follow-Up Questions

Q1. Does `useMemo` prevent component re-renders?

No. It caches a calculated value. The component can still render again; `useMemo` may simply allow it to reuse the previous result.

Q2. What is the difference between `useMemo` and `React.memo`?

`useMemo` caches a calculated value within a component. `React.memo` can skip rendering a child component when its props are unchanged, subject to React's normal behavior and any context or state updates.

Q3. When would you use a Web Worker instead of `useMemo`?

When profiling shows that CPU-intensive work is blocking the main thread. `useMemo` can avoid repeating a calculation, but when that calculation must run, it still runs on the main thread.

Q4. Can `useMemo` make a slow API request faster?

No. It can cache a local calculation based on available data, but it doesn't directly reduce network latency. API caching, request deduplication, backend optimization, or server-side processing may be more relevant.

Q5. How would you prove your optimization worked?

Compare before-and-after measurements using the React Profiler and browser Performance panel. Check render duration, long tasks, and interaction responsiveness under comparable conditions.

## 9. Key Points to Remember

- Profile before optimizing.
- Use `useMemo` when expensive calculations repeat unnecessarily.
- Improve algorithm complexity and data structures where possible.
- Use server-side processing or virtualization to reduce the amount of work.
- Consider Web Workers for CPU-heavy tasks that block the main thread.
- Use `useDeferredValue` when keeping urgent interactions responsive is the goal.
- Measure again to confirm the actual improvement.

One-line interview summary: Identify the bottleneck first, eliminate repeated or unnecessary computation, reduce the amount of data processed, and move genuinely CPU-intensive work off the main thread when appropriate.



# Question 11: What does `useTransition` or `useDeferredValue` solve?

## 1. Understand the Question

The interviewer wants to know how you keep a React application responsive when an update triggers expensive rendering.

For example, imagine a hotel booking page with thousands of results. When a user types into a search box, the input itself should respond immediately, even if filtering and rendering the hotel list takes more time.

React provides two hooks to help manage update priority:

- `useTransition`: Lets you mark certain state updates as non-urgent.
- `useDeferredValue`: Lets a part of the UI use a deferred version of a changing value so that expensive updates don't have to keep up with every urgent update.

Both help improve perceived responsiveness, but they solve slightly different problems.

## 2. Interview-Ready Answer

"`useTransition` and `useDeferredValue` help keep React interfaces responsive when some updates are more expensive than others.

For example, on a hotel search page, I want the search input to update immediately, but rendering thousands of filtered hotel results may take longer.

With `useTransition`, I can mark the state update that triggers the expensive results rendering as a non-urgent transition. React can prioritize urgent updates, such as typing, over that transition.

With `useDeferredValue`, I can let the expensive results component receive a slightly older value while the user is typing, then update the results when React has an opportunity to render them.

I use `useTransition` when I control the state update and want to mark it as non-urgent. I use `useDeferredValue` when I have a changing value and want its expensive consumer to lag behind temporarily.

Neither hook makes the underlying computation inherently faster. They help React schedule rendering so urgent interactions can remain responsive. If the computation itself is extremely expensive, I may still need memoization, virtualization, a Web Worker, or server-side processing."

## 3. `useTransition`: Mark an Update as Non-Urgent

### Example: Updating hotel search results

```
import { useState, useTransition } from "react";

function HotelSearch({ hotels }) {
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;

    // Urgent: update the input immediately.
    setQuery(value);

    // Non-urgent: update the state used by expensive results.
    startTransition(() => {
      setFilterQuery(value);
    });
  }

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <>
      <input value={query} onChange={handleChange} />

      {isPending && <p>Updating results...</p>}

      <HotelList hotels={filteredHotels} />
    </>
  );
}
```

### How it works

1. The user types a character.
2. `setQuery(value)` updates the controlled input urgently.
3. `startTransition()` marks the results-related state update as non-urgent.
4. React can prioritize urgent work over the transition and may interrupt or restart transition rendering if newer updates arrive.
5. `isPending` indicates that transition work is pending.

Important: `startTransition` does not delay the callback like `setTimeout`. It marks React state updates inside the callback as transitions.

Also, in this example, `filter()` still runs as part of rendering. If filtering itself takes a long time synchronously, the main thread can still be blocked. For large datasets, optimize the calculation or move the work off the main thread as appropriate.

## 4. `useDeferredValue`: Defer a Changing Value

Sometimes you don't directly control the state update, or you want an expensive child component to use a deferred version of a value.

For example:

```
import { useState, useDeferredValue, memo } from "react";

const HotelResults = memo(function HotelResults({ query, hotels }) {
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(query.toLowerCase())
  );

  return <HotelList hotels={filteredHotels} />;
});

function HotelSearch({ hotels }) {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <HotelResults query={deferredQuery} hotels={hotels} />
    </>
  );
}
```

### How it works

- `query` updates immediately as the user types.
- `deferredQuery` may temporarily retain the previous value while React prioritizes the urgent update.
- React later attempts to render the results using the latest value.
- `memo` helps the results component skip an urgent parent render when its props haven't changed, allowing the deferred update to be useful.

Why is `memo` relevant here?

Without memoization, `HotelResults` may still render when its parent renders, even while `deferredQuery` is unchanged. `useDeferredValue` is most useful when the expensive consumer can skip those urgent renders—for example, with `React.memo` and stable props.

## 5. `useTransition` vs. `useDeferredValue`

| Aspect                    | `useTransition`                             | `useDeferredValue`                                                           |
| ------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- |
| Main purpose              | Mark a state update as non-urgent           | Defer updates to a value used by a consumer                                  |
| Best when                 | You control the state update                | You want a consumer to use a deferred value                                  |
| Main API                  | `startTransition()` and `isPending`         | `useDeferredValue(value)`                                                    |
| Owns state?               | No; it works with your state setter         | No; it derives a deferred version of a value                                 |
| Typical use case          | Switching tabs or updating filtered results | Keeping a heavy results component from following every keystroke immediately |
| Makes computation faster? | No                                          | No                                                                           |
| Requires a fixed delay?   | No                                          | No                                                                           |

A simple way to remember the difference:

- `useTransition`: "This state update is less urgent."
- `useDeferredValue`: "This value can update later for this part of the UI."

## 6. When Should You Use Them?

Search box with expensive results

Use `useDeferredValue` when the input should update immediately while a memoized results component can update later. Use `useTransition` when you control the state update that triggers the results rendering.

Switching between heavy tabs or views

Use `useTransition` when switching the active view triggers expensive rendering and the current interaction should remain responsive.

Filtering tens of thousands of records

These hooks may improve scheduling, but consider server-side filtering, pagination, virtualization, or a Web Worker if the workload is too large.

## 7. Important Limitations and Common Mistakes

- They don't debounce input. React can defer rendering, but these hooks don't wait for a fixed number of milliseconds before running a request.
- They don't make API requests faster. Network caching, request deduplication, and backend optimization address different problems.
- They don't eliminate expensive calculations. Synchronous CPU-heavy work can still block the main thread.
- They don't make controlled inputs non-urgent. React does not allow transition updates to control text inputs directly. Keep the input's own state urgent.
- They don't replace memoization. A deferred value can be less effective if its expensive consumer re-renders unnecessarily.
- They don't guarantee a specific delay. React schedules updates based on rendering priorities and available time, not a fixed timer.

## 8. Likely Follow-Up Questions

Q1. Can I use `useTransition` to debounce an API call?

No. A transition changes the priority of React updates, not the timing of network requests. Use a debounce mechanism when you want to wait until typing pauses before making a request.

Q2. Does `useDeferredValue` prevent re-renders?

No. It allows a consumer to temporarily use an older value. To skip unnecessary urgent renders of that consumer, `React.memo` and stable props may also be needed.

Q3. What is the difference between `useDeferredValue` and `useMemo`?

`useDeferredValue` helps prioritize when a value-dependent UI update happens. `useMemo` caches a calculation result when its dependencies haven't changed. They address different concerns and can be used together.

Q4. What happens if the user keeps typing?

React can prioritize the urgent input updates and postpone or restart deferred rendering. The results may temporarily lag behind the input, then catch up when React can render them.

Q5. When would you avoid these hooks?

For cheap components that already render quickly, they may add unnecessary complexity. I would first measure whether rendering is actually affecting responsiveness.

## 9. Key Points to Remember

- `useTransition` marks state updates as non-urgent.
- `useDeferredValue` lets a consumer use a changing value later.
- Keep controlled input updates urgent.
- Use `React.memo` when appropriate to prevent unnecessary renders of expensive consumers.
- Neither hook replaces debouncing, efficient algorithms, virtualization, or server-side processing.
- Profile the application and verify that interaction responsiveness improves.

One-line interview summary: Use `useTransition` to mark an update as non-urgent and `useDeferredValue` to let an expensive consumer lag behind a changing value, keeping important interactions responsive without pretending the underlying work has become faster.




# Question 12: What is the React Profiler, and how do you read a flamegraph?

## 1. Understand the Question

The interviewer wants to know how you identify performance bottlenecks in a React application and determine which components are taking too much time to render.

The React Profiler is a profiling tool available in React Developer Tools. It helps you inspect component renders, their durations, and how rendering work changes between commits.

A flamegraph visualizes the components involved in a particular commit and helps you investigate which parts of the component tree are taking time.

For example, on a hotel booking website, changing one filter should update the relevant results. If dozens of unrelated components render again, the Profiler can help you investigate why.

## 2. Interview-Ready Answer

"I use the React DevTools Profiler to understand which components are rendering, how often they're rendering, and how much time React spends rendering them.

I start recording, reproduce the slow interaction, such as changing a hotel filter, and stop the recording. Then I inspect the commits and flamegraph to identify components that render frequently or take significant time.

In the flamegraph, each rectangle represents a component in the recorded render. The component's width generally reflects its rendering duration relative to other components in that commit, while the vertical hierarchy shows the component tree.

I also check why a component rendered, using the available profiling details, to see whether its state, props, context, or parent rendering caused the update.

Once I identify the bottleneck, I choose the appropriate fix. That might involve colocating state, stabilizing props, using `React.memo`, `useMemo`, or `useCallback`, or reducing the amount of data rendered through virtualization.

Finally, I profile the same interaction again to verify that the optimization actually improved performance rather than simply adding complexity."

## 3. How to Use the React Profiler

Step 1: Open the Profiler

Open your application in the browser, launch React Developer Tools, and select the Profiler tab.

Step 2: Record the slow interaction

Start recording, reproduce the issue, and stop recording. For example, change a hotel filter or switch tabs.

Step 3: Inspect the flamegraph

Select a commit and examine component durations, the component hierarchy, and which components rendered.

Step 4: Identify the bottleneck

Use the available ranked view and render information to find expensive components or unnecessary rendering.

Note: The images are illustrative references to the profiling interface; the exact layout and available details can vary by React DevTools version.

## 4. How to Read a Flamegraph

Imagine a hotel results page with this component tree:

HotelSearchPage

Parent component

SearchForm

Fast

HotelResults

Expensive

BookingSummary

Fast

When inspecting a flamegraph, focus on these details:

- Rectangles: Each rectangle represents a component in the recorded commit.
- Width: Generally represents how much time the component took to render relative to other components in that commit. Wider rectangles deserve investigation, but width alone does not prove a performance problem.
- Vertical hierarchy: Shows parent-child relationships in the component tree.
- Colors: Indicate rendering information according to the Profiler's legend and selected view. Don't assume a specific color always means a slow component.
- Commits: Represent React's committed updates. Inspect individual commits to understand the work associated with a particular interaction.

A component's duration is not necessarily the same as the total time spent in its entire subtree. Parent and child timings can overlap in the visual hierarchy, so avoid adding their durations together blindly.

## 5. Render Time vs. Actual User-Perceived Performance

This is an important interview distinction.

The React Profiler helps you investigate React rendering performance, but it does not tell the whole story of browser performance.

| Tool                       | What it helps you investigate                                                |
| -------------------------- | ---------------------------------------------------------------------------- |
| React DevTools Profiler    | Component rendering, commits, and render durations                           |
| Chrome Performance panel   | Main-thread activity, JavaScript execution, layout, painting, and long tasks |
| Network panel              | API latency, downloads, caching, and resource loading                        |
| Lighthouse                 | Audits and performance metrics such as LCP and CLS                           |
| Real User Monitoring (RUM) | Performance experienced by actual users in production                        |

For example, if clicking a hotel filter feels slow because a large synchronous JavaScript calculation blocks the main thread, use the browser Performance panel alongside React Profiler. If the results are slow because an API takes two seconds, inspect the Network panel and backend timing instead.

## 6. Practical Example: Hotel Filters Causing Lag

Suppose changing a filter makes the page feel slow.

I would follow this approach:

1. Reproduce the problem: Use the same dataset and interaction each time.
2. Record a profile: Capture the render associated with changing the filter.
3. Find expensive components: Check whether `HotelResults`, individual hotel cards, or unrelated sections are rendering.
4. Investigate the cause: Check state placement, prop changes, context updates, and expensive calculations.
5. Apply a targeted fix: Colocate local state, memoize an expensive calculation, use `React.memo` where beneficial, or virtualize a large list.
6. Measure again: Compare the same interaction before and after the change.

For example, if opening a sort dropdown causes 500 hotel cards to render again, I would first check whether the dropdown's state is unnecessarily owned by the page component. Moving that local state into the dropdown might eliminate the unrelated renders without requiring memoization across the entire page.

## 7. Common Mistakes to Avoid

- Optimizing the widest rectangle automatically: First establish whether its duration matters to the user.
- Confusing render duration with network time: React Profiler is not a network profiler.
- Assuming every render is bad: Rendering is normal; unnecessary or expensive rendering is what you investigate.
- Adding memoization everywhere: Memoization can add overhead and complexity.
- Ignoring production differences: Development profiling and production behavior can differ. Use appropriate profiling builds and real-user measurements when necessary.
- Comparing unrelated recordings: Compare similar interactions, data volumes, and test conditions.

## 8. Likely Follow-Up Questions

Q1. What is a commit in React Profiler?

A commit is an update in which React applies completed rendering work to the UI. The Profiler groups component measurements around these commits.

Q2. Does the Profiler show why a component rendered?

React DevTools provides render-related details, including available information about changed props and component updates. The exact details depend on the version and profiling setup.

Q3. What is the difference between the flamegraph and ranked view?

The flamegraph shows components in their tree hierarchy for a selected commit. The ranked view sorts components by rendering duration, making it easier to identify components with the highest measured times.

Q4. Can React Profiler identify a slow API?

Not directly. Use the browser Network panel, application monitoring, or backend traces to investigate API latency.

Q5. What if the Profiler shows that rendering is fast, but the page still feels slow?

Investigate other causes such as long JavaScript tasks, network delays, layout, painting, image loading, or third-party scripts with the browser Performance and Network panels.

## 9. Key Points to Remember

- React DevTools Profiler helps investigate component rendering and commits.
- Record the exact interaction that causes the slowdown.
- Use the flamegraph to inspect component hierarchy and render durations.
- Use the ranked view to find components with high measured render times.
- Determine why components rendered before choosing an optimization.
- Combine React profiling with browser Performance and Network tools.
- Re-profile after every meaningful optimization.

One-line interview summary: I use React Profiler to identify expensive or unnecessary component renders, inspect their causes, apply targeted optimizations, and measure again to verify the improvement.



# Question 13: How would you render a list of 10,000 items smoothly? Virtualization; pagination vs. infinite scroll.

## 1. Understand the Question

The interviewer wants to know how you handle large datasets without making a React application slow or unresponsive.

Rendering 10,000 items at once can create several performance problems:

- React must create and reconcile a large number of elements.
- The browser must manage a large DOM tree.
- Layout, styling, and painting can become expensive.
- Scrolling and interactions may become sluggish.
- Memory usage can increase.

The main techniques to consider are:

- Virtualization: Render only the items currently visible, plus a small buffer.
- Pagination: Display a limited number of items per page.
- Infinite scroll: Load more items as the user approaches the bottom.
- Server-side filtering: Retrieve only the data needed for the current query.

The right solution depends on whether the main bottleneck is DOM rendering, data processing, network transfer, or memory usage.

## 2. Interview-Ready Answer

"If I need to render 10,000 items in React, I wouldn't immediately render all of them into the DOM. First, I would identify the performance bottleneck and understand whether the entire dataset actually needs to be available on the client.

If the main problem is rendering a large list, I would use virtualization. Libraries such as `react-window` or TanStack Virtual allow me to render only the visible items and a small overscan buffer instead of all 10,000 items.

If the data comes from an API, I would also consider server-side pagination, filtering, and sorting so that the client doesn't download or process unnecessary records.

Pagination is useful when users need clear page boundaries and navigation. Infinite scroll is useful for continuous browsing, while virtualization can keep the DOM small in either case.

For a hotel booking application, I might combine server-side filtering and pagination with virtualization if each page still contains many results. Finally, I would measure scrolling performance, interaction latency, memory usage, and network activity to verify the solution."

## 3. Virtualization: Render Only What Is Visible

Virtualization, also called windowing, limits the number of rendered list items to those around the visible viewport.

Suppose the application has 10,000 hotel results, but only around 15 cards fit on the screen. Instead of rendering all 10,000 cards, virtualization might render those 15 visible cards plus a small number above and below them.

Conceptually:

```
Dataset: 10,000 hotels

Without virtualization:
[Hotel 1]
[Hotel 2]
[Hotel 3]
...
[Hotel 10,000]

With virtualization:
[Spacer representing earlier items]
[Visible hotel cards]
[Small overscan buffer]
[Spacer representing later items]
```

The spacers or equivalent positioning logic preserve the overall scrollable area while keeping most items out of the DOM.

### Why virtualization improves performance

- Fewer DOM nodes need to be managed.
- Less work is required for layout and painting.
- Scrolling remains smoother for large lists.
- The browser uses fewer resources for rendered elements.

Virtualization does not automatically reduce the cost of downloading or filtering all 10,000 records. Those problems may require server-side processing, pagination, or better algorithms.

### Example using a virtualization library

For example, TanStack Virtual provides the mechanics for rendering only the visible portion of a list.

```
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

function HotelList({ hotels }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: hotels.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: "600px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const hotel = hotels[virtualRow.index];

          return (
            <div
              key={hotel.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {hotel.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

What matters in this example:

- `count` tells the virtualizer how many items exist.
- `getScrollElement` identifies the scrollable container.
- `estimateSize` supplies the estimated height of each item.
- `overscan` renders a few additional items outside the visible region to reduce flickering during scrolling.
- A stable key, such as `hotel.id`, identifies each item.
- `getVirtualItems()` provides the subset that should currently be rendered.

This example assumes a fixed estimated item height. Lists with variable-height cards need appropriate measurement and sizing behavior.

## 4. Pagination vs. Infinite Scroll vs. Virtualization

| Aspect          | Pagination                            | Infinite scroll                                       | Virtualization                              |
| --------------- | ------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| How it works    | Displays a defined page of results    | Loads additional results as the user scrolls          | Renders only items near the viewport        |
| DOM size        | Limited by page size                  | Can grow unless combined with virtualization          | Kept relatively small                       |
| Data fetching   | Usually page by page                  | Usually triggered near the bottom                     | Does not inherently control fetching        |
| Navigation      | Easy to return to a specific page     | Can be harder to revisit a specific position          | Depends on the surrounding navigation       |
| Best use case   | Search results, tables, admin screens | Feeds and continuous browsing                         | Very large lists requiring smooth scrolling |
| Main limitation | Users must navigate between pages     | Can accumulate lots of data and complicate navigation | Adds implementation complexity              |

Important interview distinction: Pagination and infinite scroll control how users access results. Virtualization controls how many items are rendered at once. They are not mutually exclusive.

## 5. Which Approach Would You Choose?

### Scenario A: Hotel search results

I would typically use server-side pagination or incremental loading because the total result set may be large and the filters can change frequently.

If each batch still contains many complex hotel cards, I would add virtualization.

### Scenario B: Admin table with 10,000 records

I would consider server-side filtering, sorting, and pagination. If users need a long, continuously scrollable table, virtualization may be a better fit.

### Scenario C: Social media feed

Infinite scroll is often a good browsing experience. To prevent the DOM and memory usage from growing indefinitely, I would consider virtualization or removing old items outside the active window.

### Scenario D: All 10,000 items are already loaded locally

If the data is already available and the main issue is rendering, virtualization is a strong candidate. If filtering or sorting is also slow, I would optimize those operations separately.

## 6. Additional Optimizations

Virtualization is often the main solution, but several other optimizations can help:

- Use stable keys: Avoid index keys when items can be inserted, removed, or reordered.
- Keep list items lightweight: Avoid expensive calculations inside every item render.
- Memoize selectively: Use `React.memo` for expensive rows when stable props make skipping renders worthwhile.
- Optimize images: Use appropriately sized images and lazy-load off-screen content.
- Move filtering and sorting to the server: Particularly useful when the dataset is large.
- Avoid unnecessary state updates: Don't cause every row to render when only one row changes.
- Use cursor-based pagination where appropriate: It can be more suitable than offset-based pagination for large or frequently changing datasets.

## 7. Common Mistakes to Avoid

- Rendering all 10,000 items and relying only on `React.memo`.
- Assuming virtualization reduces API response size.
- Using infinite scroll without considering DOM growth and memory.
- Choosing pagination when the product requires continuous browsing.
- Forgetting accessibility, keyboard navigation, or focus management in virtualized lists.
- Assuming a virtualization library automatically solves expensive filtering and sorting.

## 8. Likely Follow-Up Questions

Q1. Does virtualization reduce the number of API calls?

No. Virtualization reduces the number of rendered items. API calls are controlled separately by the data-fetching strategy.

Q2. Can pagination and virtualization be used together?

Yes. The application can fetch one page at a time and virtualize the items within that page.

Q3. What is overscan?

Overscan means rendering a few items just outside the visible viewport. It helps scrolling feel smoother because nearby items are already rendered before they enter the viewport.

Q4. Why not use `React.memo` for all 10,000 items?

Memoization may reduce some component rendering, but the browser still has to manage a large DOM tree. Virtualization reduces the number of mounted items, which addresses a different source of overhead.

Q5. What if the list contains items with different heights?

Use a virtualization library that supports dynamic measurement or variable-sized items. Accurate measurement is important to avoid incorrect scroll positioning and layout jumps.

## 9. Key Points to Remember

- Virtualization renders only visible items and a small buffer.
- Pagination and infinite scroll control how results are delivered to users.
- Virtualization reduces DOM and rendering work, not necessarily data-fetching or computation costs.
- Combine server-side filtering and pagination with virtualization when appropriate.
- Use stable keys and keep row rendering efficient.
- Measure scrolling, responsiveness, memory, and network activity after implementing the solution.

One-line interview summary: For 10,000 items, I would avoid rendering the entire list at once, use virtualization to keep the DOM small, and combine it with pagination or incremental data fetching when the dataset itself is also expensive to load or process.



# Question 14: Debounce vs. throttle; usage in a search box

## 1. Understand the Question

The interviewer wants to know how you control the frequency of function execution when users interact with an application.

For example, on a hotel booking website, a user might type a destination into a search box. If the application sends an API request on every keystroke, it can generate unnecessary requests and put extra load on the backend.

Two common techniques help manage this:

- Debouncing: Executes a function after a specified period of inactivity.
- Throttling: Limits how frequently a function can execute during a continuous stream of events.

Both help control execution frequency, but they solve different problems.

## 2. Interview-Ready Answer

"Debouncing and throttling are techniques used to control how frequently a function executes.

Debouncing delays execution until the user stops triggering an event for a specified period. For example, in a hotel search box, I might debounce API requests by 300 milliseconds so that the request runs after the user pauses typing rather than after every keystroke.

Throttling limits execution to at most a specified frequency during continuous events. For example, I might throttle a scroll handler or resize calculation so it doesn't run too frequently while the user is scrolling or resizing the browser.

I choose debouncing when I care about the final input after a pause, and throttling when I need periodic execution during continuous activity.

In a real application, I also handle cleanup, stale requests, and race conditions so that an older API response doesn't overwrite the latest search results."

## 3. Debouncing: Wait Until Activity Stops

Imagine the user types `Delhi` into a hotel destination search box.

Without debouncing, the application might make five requests:

```
D → request 1
De → request 2
Del → request 3
Delh → request 4
Delhi → request 5
```

With a 300 ms debounce delay, if the user types continuously and pauses only after entering `Delhi`, the application sends one request after that pause.

### React example

```
import { useEffect, useState } from "react";

function HotelSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery.trim()) return;

    // Trigger the search using debouncedQuery.
    console.log("Searching hotels for:", debouncedQuery);
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Enter destination"
    />
  );
}
```

### How it works

1. The user types into the input.
2. The first effect schedules a timer.
3. If another keystroke occurs before 300 ms, React cleans up the previous effect and clears its timer.
4. When the user pauses typing for 300 ms, `debouncedQuery` updates.
5. The second effect reacts to the settled query and triggers the search.

The input itself remains responsive because its state updates immediately. Only the search operation is delayed.

When to use debouncing:

- Search suggestions.
- API requests triggered by typing.
- Autosave after the user stops editing.
- Validation that is expensive or unnecessary on every keystroke.

## 4. Throttling: Limit Execution Frequency

Consider a hotel results page with a scroll handler that checks whether the user is approaching the bottom of the page.

Without throttling, the scroll handler might execute many times during a single scrolling gesture.

Throttling limits how frequently the handler executes, such as once every 200 ms.

### Example throttle utility

```
function throttle(callback, delay) {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
```

Usage:

```
const handleScroll = throttle(() => {
  console.log("Checking scroll position");
}, 200);

window.addEventListener("scroll", handleScroll);
```

This illustrates a basic leading-edge throttle: it runs immediately when eligible, then ignores calls until the interval has elapsed.

Important: This simplified utility does not schedule a trailing call. If an event happens during the throttled interval, the latest event may be ignored. In production, choose or implement the throttle behavior deliberately, and clean up event listeners when components unmount.

When to use throttling:

- Scroll position calculations.
- Window resize handlers.
- Mouse movement tracking.
- Continuous event handlers that should run periodically.

## 5. Debounce vs. Throttle

| Aspect         | Debouncing                                         | Throttling                                          |
| -------------- | -------------------------------------------------- | --------------------------------------------------- |
| Execution rule | After a period of inactivity                       | At a limited frequency                              |
| Typical timing | Runs after the event stream pauses                 | Can run during the event stream                     |
| Search input   | Ideal for waiting until typing pauses              | Usually less suitable for final search queries      |
| Scroll events  | Useful when only the final scroll position matters | Useful for periodic scroll calculations             |
| Autosave       | Useful after editing pauses                        | Useful for periodic saves during continuous editing |
| Main benefit   | Avoids work for intermediate events                | Prevents work from running too frequently           |

Easy way to remember:

- Debounce = wait until the activity settles.
- Throttle = allow execution at a controlled rate.

## 6. Production Considerations for Search APIs

Debouncing reduces the number of requests, but it doesn't solve every search problem.

### A. Handle stale responses

Suppose the user searches for `Delhi`, then quickly searches for `Dubai`. The Delhi request might finish after the Dubai request and incorrectly overwrite the newer results.

You can use `AbortController` to cancel the previous request when a new one starts.

```
useEffect(() => {
  if (!debouncedQuery.trim()) return;

  const controller = new AbortController();

  async function fetchHotels() {
    try {
      const response = await fetch(
        `/api/hotels?destination=${encodeURIComponent(debouncedQuery)}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      // Update results using data.
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Hotel search failed:", error);
      }
    }
  }

  fetchHotels();

  return () => controller.abort();
}, [debouncedQuery]);
```

This assumes `debouncedQuery` has already been debounced, as in the previous example.

### B. Choose the delay carefully

A 300 ms debounce is a common starting point, not a universal rule.

- Too short: More requests may still be sent.
- Too long: Search suggestions may feel sluggish.

Choose a delay based on the desired user experience, API cost, and measured latency.

### C. Consider caching and request deduplication

If users repeatedly search for the same destination, a data-fetching library such as TanStack Query or SWR can help cache results and manage requests.

Debouncing controls when a search starts; caching controls whether the application needs to fetch the same data again.

### D. Keep the input responsive

Do not debounce the controlled input's own state update. Update the input immediately and debounce the expensive side effect or derived search query instead.

## 7. Common Mistakes to Avoid

- Using throttling when the requirement is to search only after typing pauses.
- Debouncing every input update and making the text field feel delayed.
- Forgetting to clear debounce timers during cleanup.
- Ignoring race conditions between concurrent API requests.
- Assuming debouncing makes each request faster.
- Using a fixed delay without considering user experience and backend behavior.
- Forgetting that throttling implementations differ in whether they execute at the beginning, end, or both ends of an interval.

## 8. Likely Follow-Up Questions

Q1. Is debouncing enough to prevent duplicate API requests?

It reduces requests caused by rapid repeated input, but it doesn't guarantee deduplication. Caching, request deduplication, and cancellation may also be needed.

Q2. Does debouncing improve Core Web Vitals?

Not automatically. It can reduce unnecessary work, but any improvement in metrics such as INP depends on whether the original event handling was causing performance problems.

Q3. Can I use debouncing and throttling together?

Yes, when different operations have different requirements. For example, you could debounce a search request and throttle scroll-position tracking.

Q4. What happens if a user clears the search input?

The application should cancel pending timers or requests where appropriate and clear or reset the results according to the product's expected behavior.

Q5. How would you test a debounced search?

Verify that rapid typing triggers only the expected final search, that clearing the input behaves correctly, and that stale responses cannot replace newer results.

## 9. Key Points to Remember

- Debouncing waits until the event stream pauses.
- Throttling limits how often a function runs during continuous activity.
- Use debouncing for search boxes and autosave after typing stops.
- Use throttling for continuous events such as scrolling and resizing.
- Keep controlled input updates immediate.
- Handle cleanup, request cancellation, and stale responses.
- Use caching and request deduplication when repeated searches need further optimization.

One-line interview summary: I use debouncing when an action should run after the user pauses, such as searching after typing, and throttling when an action should run periodically during continuous activity, such as scrolling.



# Question 15: Heavy filter/sort large dataset — client vs. server?

## 1. Understand the Question

The interviewer wants to know where you would perform filtering and sorting when an application works with a large dataset.

For example, a hotel booking website might have 50,000 hotels with filters for destination, price, rating, amenities, and sorting by price or popularity.

You have two main options:

- Client-side filtering and sorting: Download the data to the browser and process it using JavaScript.
- Server-side filtering and sorting: Send filter and sort criteria to the backend, which processes the dataset and returns the matching results.

The decision depends on dataset size, network costs, computational complexity, freshness requirements, and user experience.

## 2. Interview-Ready Answer

"If I'm working with a large dataset, I first consider its size, where the data comes from, and how expensive the filtering and sorting operations are.

Client-side filtering works well when the dataset is relatively small, already available in the browser, and inexpensive to process. It gives users immediate feedback and avoids making a new API request for every filter change.

For larger datasets, I generally prefer server-side filtering and sorting. Instead of downloading every record, the client sends the selected filters, sorting criteria, and pagination parameters to the backend. The server processes the query and returns only the required results.

For example, on a hotel search page with thousands of hotels, I would send the destination, price range, rating, sort order, and pagination information to the API. The backend can use database indexes and query optimization to retrieve the relevant hotels efficiently.

On the frontend, I would debounce text-based searches when appropriate, avoid unnecessary requests, handle loading and error states, and use caching where beneficial.

If the dataset is large enough that either network transfer or server processing becomes expensive, I would measure both sides and optimize the actual bottleneck rather than automatically choosing one approach."

## 3. Client-Side Filtering and Sorting

In client-side processing, the browser downloads the dataset and performs filtering and sorting locally.

### Example

```
const filteredHotels = hotels
  .filter((hotel) => hotel.price <= maxPrice)
  .filter((hotel) => hotel.rating >= minRating)
  .toSorted((a, b) => a.price - b.price);
```

This example assumes `hotels` is already available in the browser and that the runtime supports `toSorted()`, which returns a new sorted array.

### Advantages

- Fast feedback once the data is loaded.
- No additional network request for each filter change.
- Useful for small datasets and interactive local filtering.
- Can work with cached data when the user temporarily loses connectivity.

### Disadvantages

- Large downloads increase network transfer and memory usage.
- Filtering and sorting can block the browser's main thread.
- The client must maintain the dataset in memory.
- Data may become stale if the underlying source changes.
- Downloading all records may expose data the user doesn't need or shouldn't receive.

### When I would choose it

Client-side processing is suitable for relatively small datasets, such as filtering a few hundred already-loaded records in an admin panel.

The exact threshold depends on record size, device capability, filtering complexity, and the application's performance requirements.

## 4. Server-Side Filtering and Sorting

In server-side processing, the client sends the filtering and sorting criteria to the backend.

### Example API request

```
GET /api/hotels?destination=Delhi&maxPrice=8000&minRating=4&sortBy=price&sortOrder=asc&page=1&pageSize=20
```

The server applies the filters, sorts the matching records, and returns only the requested page.

Example response:

```
{
  "items": [
    {
      "id": "h101",
      "name": "Grand Palace",
      "price": 6500,
      "rating": 4.5
    },
    {
      "id": "h102",
      "name": "City Comfort",
      "price": 7200,
      "rating": 4.2
    }
  ],
  "page": 1,
  "pageSize": 20,
  "total": 1240
}
```

### Advantages

- Transfers only the required records.
- Reduces browser memory usage.
- Avoids processing the entire dataset on the client.
- Can leverage database indexes and query optimization.
- Makes it easier to apply consistent filtering and sorting rules.

### Disadvantages

- Filter changes may require additional network requests.
- User experience depends on network latency and server response time.
- The backend must handle query load efficiently.
- Poor caching or repeated requests can increase server load.
- Database queries can still be slow without appropriate indexing and optimization.

### When I would choose it

For hotel search results containing tens of thousands of records, server-side filtering, sorting, and pagination would generally be my starting point.

The backend should validate the requested filters and sort fields rather than trusting arbitrary query parameters.

## 5. Client vs. Server: Comparison

| Factor                | Client-side                              | Server-side                           |
| --------------------- | ---------------------------------------- | ------------------------------------- |
| Dataset size          | Small or moderate                        | Large                                 |
| Initial download      | Can be large                             | Usually smaller                       |
| Filter responsiveness | Immediate after data loads               | Depends on request latency            |
| Browser CPU usage     | Higher for expensive operations          | Usually lower                         |
| Browser memory usage  | Can be high                              | Usually lower                         |
| Backend load          | Lower for repeated local operations      | Higher with repeated queries          |
| Data freshness        | Depends on local cache and refreshes     | Can retrieve fresher data             |
| Offline support       | Possible with previously downloaded data | Requires connectivity for new queries |
| Pagination            | Often unnecessary for small lists        | Common for large result sets          |

Neither approach is always better. The right choice depends on the workload and where the cost of processing is lowest.

## 6. A Practical React Implementation

For a large hotel dataset, I would keep the selected filters in React state and fetch filtered results from the backend.

```
import { useEffect, useState } from "react";

function HotelSearch() {
  const [maxPrice, setMaxPrice] = useState(8000);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchHotels() {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          maxPrice: String(maxPrice),
          page: "1",
          pageSize: "20",
        });

        const response = await fetch(
          `/api/hotels?${params}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to load hotels");
        }

        const data = await response.json();
        setHotels(data.items);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchHotels();

    return () => controller.abort();
  }, [maxPrice]);

  return (
    <section>
      <label>
        Maximum price: ₹{maxPrice}
        <input
          type="range"
          min="1000"
          max="20000"
          step="500"
          value={maxPrice}
          onChange={(event) =>
            setMaxPrice(Number(event.target.value))
          }
        />
      </label>

      {loading && <p>Loading hotels...</p>}
      {error && <p role="alert">{error}</p>}

      {hotels.map((hotel) => (
        <article key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>₹{hotel.price}</p>
        </article>
      ))}
    </section>
  );
}
```

This illustrates the core approach: the frontend owns the filter state, while the backend returns a filtered page.

In production, I would consider a few further improvements:

- Debounce high-frequency inputs, especially text searches.
- Use a query library such as TanStack Query for caching and request lifecycle management.
- Avoid resetting the loading state incorrectly when an earlier request is aborted.
- Preserve or reset pagination appropriately when filters change.
- Validate and whitelist sort fields on the server.
- Consider URL query parameters so users can share or revisit their searches.

## 7. How to Optimize a Heavy Filter/Sort Operation

If filtering or sorting is still slow, I would investigate the following in order.

1\. Measure the bottleneck

Determine whether the delay comes from downloading data, server query execution, client-side computation, or rendering results.

2\. Reduce the amount of data

Use server-side filtering, pagination, or incremental loading when the client doesn't need the entire dataset.

3\. Optimize the query

On the backend, review database indexes, query plans, and the amount of data returned. An index can speed up suitable queries, although it also has storage and write costs.

4\. Reduce unnecessary requests

Debounce text input, cancel obsolete requests, and reuse cached results when appropriate.

5\. Reduce rendering work

If the result list is large, use virtualization. Consider memoization only when profiling identifies unnecessary calculations or renders.

6\. Keep interactions responsive

If client-side processing remains CPU-intensive, consider a Web Worker or moving the computation to the server.

## 8. Common Mistakes to Avoid

- Downloading the entire database just to filter a few records.
- Sending an API request for every keystroke without considering debouncing.
- Assuming server-side processing is always faster; network latency and inefficient database queries still matter.
- Applying `useMemo` to solve a problem caused by excessive network transfer.
- Forgetting to cancel obsolete requests or prevent stale responses from overwriting newer results.
- Ignoring pagination when a search can return thousands of records.
- Trusting client-provided sort fields or filter values without server-side validation.

## 9. Likely Follow-Up Questions

Q1. What if the dataset contains only 200 records?

Client-side filtering may be simpler and faster if those records are already loaded and inexpensive to process. I would still consider record size, device performance, and freshness requirements.

Q2. What if the user changes filters rapidly?

I would debounce high-frequency input where appropriate, cancel obsolete requests, and ensure that older responses cannot overwrite newer results. A query library can also help manage caching and request state.

Q3. Can virtualization replace server-side pagination?

No. Virtualization limits rendered DOM elements, while server-side pagination limits the records fetched for each request. They solve different problems and can be combined.

Q4. How would you sort millions of records?

I would generally sort on the server or database, using appropriate indexes and an efficient query plan where possible. I would return a limited page rather than transfer all records to the browser.

Q5. How would you keep results fast when users apply multiple filters?

I would send the combined filter criteria to the backend, optimize the query, cache suitable results, avoid redundant requests, and return only the requested page.

## 10. Key Points to Remember

- Client-side filtering works well for smaller, already-loaded datasets.
- Server-side filtering and sorting are generally preferable for large datasets.
- Pagination reduces the number of records transferred per request.
- Virtualization reduces the number of DOM elements rendered.
- Debouncing, cancellation, and caching help manage repeated filter changes.
- Profile the network, computation, backend query, and rendering stages separately.

One-line interview summary: I choose client-side filtering for small, readily available datasets and server-side filtering with pagination for large datasets, then optimize the actual bottleneck using profiling, caching, efficient queries, and virtualization where appropriate.


# Question 16: How do you reduce JavaScript bundle size?

## 1. What is JavaScript bundle size?

When we build a React or Next.js application, the bundler processes our JavaScript code and its dependencies into files that the browser can download and execute. These files are called JavaScript bundles.

A large JavaScript bundle can lead to:

- Slower page downloads, especially on mobile networks.
- Longer JavaScript parsing, compilation, and execution.
- Delayed hydration in server-rendered applications.
- Poor interaction responsiveness because the main thread is busy.
- Worse Core Web Vitals, particularly INP and potentially LCP.

For example, imagine a hotel booking website where the homepage downloads the JavaScript required for the homepage, admin dashboard, payment flow, charts, and date-picker libraries—even though the user only wants to search for hotels.

This is unnecessary JavaScript and can increase the initial loading time.

The goal is not just to reduce the total JavaScript size, but to reduce the amount of JavaScript users must download and execute for the current page.

## 2. How would you approach reducing bundle size?

I would follow a measurement-driven approach rather than randomly removing libraries or optimizing code.

### Step 1: Measure and analyze the bundle

First, I would identify which files and dependencies contribute most to the JavaScript bundle.

Useful tools include:

- Chrome DevTools — Network tab to inspect downloaded JavaScript files and their transfer sizes.
- Lighthouse — to identify excessive JavaScript and its impact on performance.
- `@next/bundle-analyzer` — to visualize the contents of Next.js bundles.
- Source Map Explorer — to understand which modules contribute to generated bundle files.

For Next.js, I can configure a bundle analyzer to inspect the production build.

```
npm install --save-dev @next/bundle-analyzer
```

Example configuration:

```
// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
```

Run the production build with analysis enabled:

```
ANALYZE=true npm run build
```

The exact configuration can vary by Next.js version and module system.

The analyzer helps identify whether a large dependency, shared module, charting library, or duplicated package is responsible for the bundle size.

### Step 2: Remove unused dependencies and code

I would check whether the application imports packages or utilities that are no longer needed.

For example, if the application uses only a small date-formatting function, importing an entire utility library may include more code than necessary, depending on the package's module format and bundler configuration.

Instead of:

```
import _ from "lodash";

const formattedHotels = _.sortBy(hotels, "price");
```

Use a narrower import when supported:

```
import sortBy from "lodash/sortBy";

const formattedHotels = sortBy(hotels, "price");
```

This can help reduce the amount of included code, although the actual result depends on the package and build tooling.

I would also remove unused dependencies from `package.json` after confirming that nothing relies on them.

### Step 3: Implement code splitting and lazy loading

Code splitting separates an application into smaller JavaScript chunks so that the browser does not need to download every feature upfront.

For example, a hotel booking application might have:

- A homepage.
- A hotel search results page.
- A booking and payment flow.
- An admin dashboard.

The homepage should not need to load the JavaScript for the admin dashboard or a payment form that is not currently visible.

In React, a component can be loaded lazily:

```
import { lazy, Suspense } from "react";

const HotelMap = lazy(() => import("./HotelMap"));

function HotelResults() {
  return (
    <Suspense fallback={<p>Loading map...</p>}>
      <HotelMap />
    </Suspense>
  );
}
```

Now the map component can be placed in a separate chunk and loaded when needed.

Important: Lazy loading is most useful for features that are not required for the initial view. Delaying critical content can make the user experience worse.

For route-level splitting in Next.js, pages and routes are generally split automatically. Additional splitting may be useful for large client-side components that are not immediately needed.

### Step 4: Use tree shaking

Tree shaking removes unused exports from modules when the bundler can statically determine which code is unnecessary.

For example:

```
// utils.js
export function formatPrice(price) {
  return `₹${price}`;
}

export function calculateTax(amount) {
  return amount * 0.18;
}
```

If a component imports only `formatPrice`:

```
import { formatPrice } from "./utils";
```

A production build may eliminate `calculateTax` if it is unused and the module is compatible with tree shaking.

Tree shaking works best when code uses static ES module imports and exports.

Things that can make tree shaking less effective include:

- CommonJS modules that are difficult for the bundler to analyze.
- Side effects that prevent safe removal of code.
- Importing broad package entry points that expose unnecessary functionality.
- Package configurations that do not correctly declare side effects.

Tree shaking is usually handled by modern production bundlers, but I would verify its actual effect in the generated bundle.

### Step 5: Reduce third-party libraries

Third-party libraries can contribute significantly to bundle size.

For example, a booking application might use:

- A charting library for admin analytics.
- A date-picker library for selecting travel dates.
- A map SDK for hotel locations.
- An analytics SDK for tracking user behavior.

I would ask:

1. Is this library required on the initial page?
2. Are we using its entire functionality?
3. Can we replace it with a smaller alternative?
4. Can it be loaded only when the user needs it?
5. Is the same functionality already provided elsewhere in the application?

For example, an interactive map does not necessarily need to load when a user first opens the hotel results page. It can be loaded when the user opens map view.

The objective is to avoid loading a large dependency just because one feature uses it.

### Step 6: Avoid duplicate dependencies

Sometimes multiple dependencies include different versions of the same underlying library, increasing the final bundle size.

I would inspect the dependency tree:

```
npm ls
```

I would then check whether:

- Multiple versions of a package are installed.
- Different libraries provide overlapping functionality.
- Shared code is being duplicated across bundles.
- Dependency versions can be aligned safely.

However, two installed versions do not automatically mean both are included in every browser bundle. I would confirm duplication using the bundle analyzer before changing dependencies.

### Step 7: Optimize client-side JavaScript in Next.js

In Next.js App Router, Server Components can help reduce the JavaScript sent to the browser.

For example:

```
// app/hotels/page.jsx
import HotelList from "./HotelList";
import HotelFilters from "./HotelFilters";

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <>
      <HotelFilters />
      <HotelList hotels={hotels} />
    </>
  );
}
```

If these components do not require client-side interactivity, they can remain Server Components by default.

For interactive filters:

```
"use client";

export default function HotelFilters() {
  // Interactive state and event handlers
  return <button>Apply filters</button>;
}
```

I would keep the client boundary as small as practical and avoid importing large client-only dependencies into high-level components.

Important distinction: Server Components reduce the amount of component JavaScript shipped to the browser, but they do not eliminate all client JavaScript. Interactive Client Components and their dependencies still need to be downloaded and executed.

### Step 8: Use production builds and verify improvements

Development builds can contain extra debugging code and do not represent the final production bundle accurately.

After making changes, I would:

1. Build the application for production.
2. Compare bundle sizes before and after.
3. Check the Network tab for downloaded JavaScript.
4. Measure JavaScript execution and main-thread activity.
5. Test important pages and user interactions.
6. Verify that lazy-loaded features still work correctly.

I would also monitor bundle size in CI to prevent future regressions.

## 3. Common optimization techniques at a glance

| Technique                  | What it improves                      | Example                                   |
| -------------------------- | ------------------------------------- | ----------------------------------------- |
| Remove unused dependencies | Avoids unnecessary code               | Delete an unused UI package               |
| Tree shaking               | Removes unused exports                | Import only required utilities            |
| Code splitting             | Separates code into chunks            | Split booking flow from homepage          |
| Lazy loading               | Delays nonessential code              | Load hotel map when requested             |
| Smaller dependencies       | Reduces library overhead              | Replace an oversized utility package      |
| Avoid duplicate modules    | Prevents repeated code                | Align compatible dependency versions      |
| Server Components          | Reduces client-side JavaScript        | Render static hotel details on the server |
| Dynamic imports            | Loads features on demand              | Defer a large charting component          |
| Production analysis        | Identifies actual bundle contributors | Use Next.js bundle analyzer               |

## 4. What should I prioritize first?

I would prioritize changes based on measurable impact and implementation risk.

1. Analyze the bundle to identify the largest contributors.
2. Remove unnecessary dependencies and duplicate code.
3. Split large, noncritical features out of the initial loading path.
4. Reduce client-side JavaScript, particularly in Next.js applications.
5. Replace oversized dependencies where a smaller alternative is appropriate.
6. Measure the result using production builds and real performance metrics.

I would not start by manually optimizing every small function. Large dependencies and unnecessary client-side code usually deserve investigation first.

## 5. Common interview follow-up questions

### Q1. Does reducing bundle size always improve performance?

Not necessarily. A smaller bundle generally reduces download and processing costs, but performance also depends on network conditions, caching, server response time, rendering, and JavaScript execution.

I would measure real user impact rather than treating bundle size as the only performance metric.

### Q2. What is the difference between code splitting and tree shaking?

| Code splitting                                         | Tree shaking                                     |
| ------------------------------------------------------ | ------------------------------------------------ |
| Divides code into separate chunks.                     | Removes unused code.                             |
| Helps avoid loading all code upfront.                  | Helps reduce code included in bundles.           |
| Often works with dynamic imports and route boundaries. | Depends on static analysis and module structure. |

They solve different problems and can be used together.

### Q3. Does lazy loading always improve performance?

No. It can reduce initial JavaScript, but it may introduce loading delays when the user opens the deferred feature. Lazy loading should generally target noncritical or conditionally used components.

### Q4. How do you know if a package is making the bundle large?

I would use a bundle analyzer to inspect the production output, then verify which chunks are downloaded and how much JavaScript the browser executes. I would not assume that a package is expensive based only on its name or installed size.

### Q5. How do Server Components help with bundle size?

Server Components execute on the server and do not require their component implementation to be shipped to the browser as client-side JavaScript. However, their rendered output and data may still be sent to the client, and Client Components still contribute JavaScript to the browser bundle.

### Q6. What is the difference between bundle size and transfer size?

- Bundle size: The size of the generated JavaScript file.
- Transfer size: The amount transferred over the network, often reduced by compression such as gzip or Brotli.

I would inspect both because a file's compressed network size can be substantially smaller than its uncompressed size.

## 6. One-line interview answer

“I reduce JavaScript bundle size by analyzing production bundles, removing unused and duplicate dependencies, applying tree shaking and code splitting, lazy-loading noncritical features, and minimizing client-side JavaScript in Next.js. I then validate the improvements with production bundle analysis and real performance metrics.”

Key takeaway: Focus on shipping less unnecessary JavaScript to the browser, especially during the initial page load, and verify that each optimization improves actual user experience.



# Question 17: What is code splitting and lazy loading? Where would you split the code, and what UX would you show while a lazy component loads?

## 1. What is code splitting?

Code splitting is a technique that divides a large JavaScript bundle into smaller chunks so the browser can download the code when it is needed instead of loading everything upfront.

In a React application, the initial bundle might contain code for the homepage, hotel search, payment flow, admin dashboard, charts, and maps. Loading all of this immediately can delay the initial page load.

With code splitting, we can separate these features into smaller bundles and load only the required code for the current route or feature.

For example, in a hotel booking application:

- The homepage loads its essential code.
- The hotel results page loads its search-related code.
- The payment component loads when the user starts booking.
- The analytics dashboard loads when an administrator opens it.

This reduces the amount of JavaScript the browser needs to download and execute initially.

## 2. What is lazy loading?

Lazy loading means postponing the loading of a resource or component until it is needed.

Code splitting and lazy loading are related, but they are not the same thing:

| Code splitting                                | Lazy loading                                          |
| --------------------------------------------- | ----------------------------------------------------- |
| Divides code into separate chunks.            | Delays loading until a feature is needed.             |
| Determines how code can be separated.         | Determines when that code should be loaded.           |
| Can happen automatically at route boundaries. | Often uses dynamic imports or lazy component loading. |

Code splitting creates the opportunity to load code separately. Lazy loading takes advantage of that separation to defer loading.

## 3. How do you implement lazy loading in React?

React provides `React.lazy()` and `Suspense` for loading components dynamically.

### Example: Lazy-load a hotel map

Suppose the hotel results page initially displays a list of hotels, but the interactive map is optional.

```
import { lazy, Suspense, useState } from "react";

const HotelMap = lazy(() => import("./HotelMap"));

function HotelResults() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <h1>Hotel Results</h1>

      <button onClick={() => setShowMap(true)}>
        View Map
      </button>

      {showMap && (
        <Suspense fallback={<p>Loading map...</p>}>
          <HotelMap />
        </Suspense>
      )}
    </div>
  );
}

export default HotelResults;
```

### How it works

1. `lazy()` declares that the component should be loaded through a dynamic import.
2. The map's code can be placed in a separate JavaScript chunk.
3. The map is rendered only after the user clicks View Map.
4. `Suspense` displays the fallback while the component's code is loading.
5. Once the component is ready, React renders the map.

The important point is that the map's JavaScript does not need to be downloaded just to display the initial hotel list, provided it is not imported elsewhere in a way that eagerly loads it.

## 4. Where should you split the code?

I would split code based on routes, feature boundaries, component size, and when the user needs each feature—not simply because a component is large.

### A. Route-level splitting

Different routes often require different code.

For example:

| Route      | Code required                   |
| ---------- | ------------------------------- |
| `/`        | Homepage and search form        |
| `/hotels`  | Hotel listings and filters      |
| `/booking` | Booking details                 |
| `/payment` | Payment flow                    |
| `/admin`   | Charts and administration tools |

In Next.js, route-level code splitting is handled automatically for pages and route segments. I would generally rely on this built-in behavior before adding custom splitting.

### B. Feature-level splitting

Some components are used only when a specific feature is opened.

Examples include:

- Interactive maps.
- Rich text editors.
- Large charting libraries.
- PDF previews.
- Advanced date pickers.
- Complex modals and booking widgets.

These are good candidates for lazy loading when they are not needed for the initial view.

### C. Below-the-fold content

If a page contains heavy content far below the initial viewport, I would consider deferring its JavaScript or data until the user approaches that content.

However, not all below-the-fold content should automatically be lazy-loaded. The decision depends on its cost, importance, and expected usage.

### D. Rarely used features

Features used by a small percentage of users are good candidates for deferred loading.

For example, an admin-only analytics module should not unnecessarily increase the initial JavaScript downloaded by ordinary hotel-booking customers.

### E. Avoid excessive splitting

Splitting every small component can create too many chunks and additional loading overhead.

I would avoid unnecessary splitting when:

- A component is small and used immediately.
- The component is essential to the initial page.
- The extra network request or loading delay outweighs the benefit.
- A feature is almost always opened immediately after its parent page loads.

The goal is to balance initial bundle size against the cost of loading deferred features.

## 5. How would you handle lazy loading in Next.js?

Next.js provides built-in route splitting and supports additional lazy loading through dynamic imports.

### Example: Dynamically load an interactive map

```
"use client";

import dynamic from "next/dynamic";

const HotelMap = dynamic(() => import("./HotelMap"), {
  loading: () => <p>Loading hotel map...</p>,
});

export default function HotelResults() {
  return (
    <section>
      <h1>Available Hotels</h1>
      <HotelMap />
    </section>
  );
}
```

The dynamic import allows Next.js to split the component into a separate chunk. The `loading` option specifies what to display while the component loads.

Important distinction: This example defers the map component's loading, but it does not wait for a button click. If the component is rendered immediately, its chunk may be requested as part of the initial rendering process. To load it only when requested, conditionally render the component after a user action.

For example:

```
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const HotelMap = dynamic(() => import("./HotelMap"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

export default function HotelResults() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section>
      <h1>Available Hotels</h1>

      <button onClick={() => setShowMap(true)}>
        View Map
      </button>

      {showMap && <HotelMap />}
    </section>
  );
}
```

Here, the map is conditionally rendered after the user requests it.

The `ssr: false` option is useful only when the component must run exclusively in the browser—for example, because it depends on browser APIs during rendering. It must be used in a Client Component and is not necessary for every dynamically imported component.

## 6. What UX should you show while a lazy component loads?

Lazy loading reduces upfront work, but it introduces a possible delay when the user opens a feature. A good fallback makes that delay predictable and visually stable.

I would choose the fallback based on what the component is expected to display.

[Icons in UI Design. History, Types, Libraries, and Motion | by Muhammad Dani Asyrofi | Bootcamp | Feb, 2026 | Medium](https://images.openai.com/static-rsc-4/TPcU8BlSf1kJEN-qdo85cpKxO7-Q8svtOtjBRqbpdTPfH9R1fykEY8gjx7lRzdwvmQvKOi4I7emKGK9pyxOdyB0zxxUzguU3SMp0rDmhA9z0YJQQS-0r48qljehLgXXSxBbeSHsbFqRF97k1JuKWBaHGB4wI0kNJh2nklYf_bNc?purpose=inline)

A. Skeleton UI

Best for hotel cards, search results, maps, or dashboards where the approximate layout is already known.

Skeletons help preserve the page structure and reduce layout shifts.

[Loader - Framer UI Kit and Design System — Kompa](https://images.openai.com/static-rsc-4/aF-1Xh_w7Dkn7f4KqZ-emO94ATZRvDeM9So0QBzThsQ0BlQYzIrs7pEEu2ohBo7LxZOMiZESROVgjUpltMk95QN75bqN6qQIzen9Vt2zbTAI9Rhdg1O6bEGieY5ohvHE-WhMq6zyR6YdQZr71V-0kU3m9QC5oTjz1taYoSyDr_o?purpose=inline)

B. Loading indicator

Suitable for short operations or compact components where a full skeleton is unnecessary.

Keep it near the component being loaded so the user understands what is happening.

[No-Code App Development with Glide | BRIX Agency](https://images.openai.com/static-rsc-4/PeJ8QofgLSbaCFGABNOAPxIpefEhebaeb46CHlKlPMKxC2g6EN2lJBQx9xleY_cLJ-QkObjMLHwQ19Zuo8SFCQ9lj2TH776ghEuRzudfHllHwJRIY8U6fjZ8OzzoABmLOuiIq28fuijK_1jTmL9ZePu3Qx4mMlnpM99MsUHNsgM?purpose=inline)

C. Stable placeholder

Useful for maps, charts, and media components.

Reserve the expected width and height to avoid the surrounding content jumping when the component appears.

### UX principles I would follow

- Reserve space: Prevent layout shifts by keeping the fallback close to the final component's dimensions.
- Match the final layout: Prefer skeletons for complex layouts and simple indicators for small components.
- Keep the page usable: Essential content should remain visible while optional features load.
- Avoid unnecessary loading states: Very small chunks may load quickly enough that an elaborate fallback is not useful.
- Handle failures: A loading fallback does not handle a failed chunk download. Use appropriate error handling and a retry or recovery option where practical.
- Consider accessibility: Provide meaningful loading status announcements when needed, and ensure focus and keyboard behavior remain sensible.

### Example: Skeleton fallback

```
<Suspense
  fallback={
    <div className="hotel-map-skeleton" aria-busy="true">
      Loading hotel map...
    </div>
  }
>
  <HotelMap />
</Suspense>
```

The CSS should give `.hotel-map-skeleton` a suitable minimum height or fixed aspect ratio so that the layout remains stable.

## 7. Common mistakes to avoid

| Mistake                                              | Why it is a problem                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------- |
| Lazy-loading critical above-the-fold content         | Can delay the content users need immediately                              |
| Splitting every small component                      | Can add unnecessary loading overhead                                      |
| Showing a blank area while loading                   | Makes the application appear broken                                       |
| Forgetting error handling                            | Failed chunk downloads can leave features unusable                        |
| Using a fallback with a different layout size        | Can cause layout shifts                                                   |
| Lazy-loading without measuring                       | May add complexity without meaningful performance improvement             |
| Assuming dynamic import means user-triggered loading | A rendered dynamic component may load immediately when its parent renders |

## 8. Common interview follow-up questions

### Q1. Does `React.lazy()` automatically display a loading indicator?

No. `React.lazy()` allows React to load a component dynamically, but a surrounding `Suspense` boundary is needed to specify what should be rendered while that component is suspended.

### Q2. Can lazy loading improve Core Web Vitals?

It can help when it reduces unnecessary initial JavaScript downloads and execution, potentially improving loading and responsiveness. But lazy-loading critical content can make performance worse, so the result depends on what is deferred.

### Q3. What happens if a lazy-loaded component fails to load?

`Suspense` handles the loading state, not the error state. A React Error Boundary or an appropriate framework-level error-handling mechanism can show a fallback and offer recovery. Retrying a failed chunk may require additional logic or a page reload, depending on the failure.

### Q4. Should you lazy-load every modal?

Not necessarily. A large, rarely opened modal may be a good candidate. A small modal used frequently may not benefit enough to justify the extra loading delay. I would evaluate its size, usage frequency, and effect on the initial bundle.

### Q5. What is the difference between lazy loading a component and lazy loading its data?

- Component lazy loading: Defers downloading or evaluating the component's JavaScript.
- Data lazy loading: Defers fetching the information needed by the component.

For a hotel map, I might defer both the map SDK and its location data until the user opens map view.

## 9. One-line interview answer

“Code splitting divides the application into smaller JavaScript chunks, while lazy loading defers loading those chunks until they are needed. I use route-level splitting and selectively lazy-load heavy, noncritical features such as maps and charts, with skeletons or stable placeholders, proper error handling, and production performance measurements.”

Key takeaway: Split code around meaningful routes and features, defer only what is not immediately needed, and provide a stable, accessible loading experience while deferred components load.


# Question 18: What is tree shaking, and what can prevent it from working?

## 1. What is tree shaking?

Tree shaking is a build-time optimization that removes unused code from the final JavaScript bundle.

Modern bundlers analyze which functions, variables, and exports are actually used by the application. Code that can be safely proven unnecessary is eliminated from the production output.

For example, imagine a hotel booking application has utility functions for formatting prices, calculating taxes, and generating invoices, but a particular page only uses price formatting.

```
// utils.js
export function formatPrice(price) {
  return `₹${price}`;
}

export function calculateTax(amount) {
  return amount * 0.18;
}

export function generateInvoice(booking) {
  return `Invoice for ${booking.id}`;
}
```

The page imports only the function it needs:

```
import { formatPrice } from "./utils";

console.log(formatPrice(2500));
```

If the bundler can determine that the other exports are unused and safe to remove, it can eliminate `calculateTax` and `generateInvoice` from the production bundle.

This reduces unnecessary JavaScript, download size, and potentially parsing and execution time.

Important: Tree shaking is not simply deleting every function that is not directly called. The bundler must determine that removing the code will not change the program's observable behavior.

## 2. How does tree shaking work?

Tree shaking generally relies on static analysis of ES modules.

The process looks like this:

1. The bundler analyzes the application's import and export statements.
2. It builds a dependency graph of modules.
3. It identifies exports that are used by the application.
4. It determines which unused code can be safely removed.
5. It generates optimized production bundles.

For example:

```
import { formatPrice } from "./utils";
```

This makes the requested dependency explicit.

Compare that with:

```
import * as utils from "./utils";

console.log(utils.formatPrice(2500));
```

The second form does not automatically prevent tree shaking—modern bundlers can often analyze it—but dynamic access to exports or other patterns that obscure which properties are used can make analysis more difficult.

Tree shaking typically works best with statically analyzable ES module imports and exports.

## 3. What can prevent tree shaking?

Several factors can make tree shaking less effective or prevent certain code from being removed.

### A. CommonJS modules

CommonJS uses `require()` and `module.exports`, whereas ES modules use `import` and `export`.

CommonJS example:

```
const utils = require("./utils");

console.log(utils.formatPrice(2500));
```

Because CommonJS supports dynamic module loading and export patterns, determining exactly which code is unused can be harder.

ES module example:

```
import { formatPrice } from "./utils.js";

console.log(formatPrice(2500));
```

The ES module structure makes static analysis easier.

Interview point: CommonJS does not make tree shaking impossible in every case, but it can limit how effectively a bundler identifies unused code.

### B. Side effects

A side effect is behavior that changes something outside a function's return value, such as modifying global state, registering an event listener, or changing a prototype.

For example:

```
// setup.js
window.appConfig = {
  theme: "dark",
};
```

Even if no exported function is imported from this file, removing the import could change application behavior because the module initializes global configuration.

```
import "./setup.js";
```

The bundler must preserve this import if its side effect is required.

Other examples of side effects include:

- Registering custom elements.
- Installing polyfills.
- Importing CSS.
- Initializing a third-party SDK.

Side effects are not inherently bad. The important thing is that bundlers must preserve those that affect the application's behavior.

### C. Incorrect `sideEffects` configuration

Packages can declare whether their files contain side effects using the `sideEffects` field in `package.json`.

For example:

```
{
  "sideEffects": false
}
```

This tells compatible bundlers that the package's files can be treated as side-effect-free for relevant optimization decisions.

However, this declaration must be accurate.

Consider a package that imports CSS:

```
import "./styles.css";

export function HotelCard() {
  return null;
}
```

If the package incorrectly declares that all files have no side effects, a bundler might remove the CSS import when it considers it unused.

A more appropriate declaration could be:

```
{
  "sideEffects": ["**/*.css"]
}
```

This marks CSS files as side-effectful while allowing other files to be optimized where safe.

Key point: Never mark a package as side-effect-free unless that declaration accurately reflects its behavior.

### D. Dynamic property access

Static property access is easier for bundlers to analyze:

```
import * as utils from "./utils.js";

utils.formatPrice(2500);
```

Dynamic access is harder to analyze:

```
import * as utils from "./utils.js";

const methodName = getMethodName();

utils[methodName](2500);
```

The bundler may not know which export will be used at runtime. As a result, it may need to retain more code.

The exact result depends on the bundler and the surrounding code.

### E. Importing an entire library unnecessarily

Suppose an application uses only one function from a large utility library.

```
import * as utilities from "some-utility-library";

utilities.formatPrice(2500);
```

Depending on the library's module format and build setup, this may make it harder to eliminate unused functionality.

Prefer a narrow, statically analyzable import when the library supports it:

```
import formatPrice from "some-utility-library/formatPrice";
```

The correct import path depends on the package's public API. Avoid relying on internal paths that the package does not support.

### F. Incorrect package exports or build configuration

Some packages publish only CommonJS output or provide module metadata that does not support effective static analysis.

Tree shaking can also be weakened by bundler configuration, unsupported module formats, or transformations that obscure import/export relationships.

I would inspect the package's published files and production bundle before concluding that the bundler is at fault.

### G. Importing modules with required initialization

Some modules perform setup as soon as they are imported.

For example:

```
import "some-library/register";
```

Even though this import does not request a named export, it may register functionality that the application needs.

Removing such an import could break the application, so the bundler must preserve the relevant initialization behavior.

## 4. Tree shaking vs. code splitting vs. minification

These techniques are related, but they solve different problems.

| Technique      | Purpose                                    | Example                                                  |
| -------------- | ------------------------------------------ | -------------------------------------------------------- |
| Tree shaking   | Removes unused code                        | Remove unused utility exports                            |
| Code splitting | Separates code into chunks                 | Separate payment code from the homepage                  |
| Minification   | Makes code smaller through transformations | Shorten variable names and remove unnecessary whitespace |
| Compression    | Reduces bytes transferred over the network | Use gzip or Brotli                                       |
| Lazy loading   | Defers loading until needed                | Load a hotel map when the user opens map view            |

These techniques can work together in a production build.

For example, a payment component may be split into its own chunk, unused exports may be removed from that chunk, and the remaining JavaScript may be minified and compressed.

## 5. How would you debug tree shaking in a React or Next.js application?

I would follow a practical process rather than assuming that unused code is being removed.

1. Build for production. Development builds may not apply the same optimizations.
2. Inspect the bundle. Use a bundle analyzer to identify which dependencies and modules contribute to the output.
3. Check module formats. Determine whether the dependency publishes ES modules or only CommonJS.
4. Inspect imports. Look for broad imports, dynamic property access, or unnecessary dependencies.
5. Check side effects. Review package metadata and confirm that CSS, initialization code, and other required behavior are preserved.
6. Compare the output. Make a controlled change and inspect the resulting production bundle.
7. Run tests. Confirm that the optimization has not removed required initialization or styling.

For a Next.js project, I would use the bundle analyzer to investigate client-side chunks in particular, because those files directly affect the JavaScript downloaded by users.

## 6. Practical hotel booking example

Imagine the application has a shared utility module:

```
// booking-utils.js
export function formatPrice(price) {
  return `₹${price}`;
}

export function calculateCancellationFee(amount) {
  return amount * 0.1;
}

export function generateBookingPDF(booking) {
  // PDF generation logic
}
```

The hotel listing page only needs `formatPrice`, but the PDF generation functionality imports a large PDF library.

A sensible approach would be to:

- Keep imports statically analyzable.
- Ensure unused exports can be removed where safe.
- Avoid eagerly importing the PDF library into the hotel listing bundle.
- Dynamically load the PDF feature when the user requests an invoice.
- Analyze the production build to verify that the PDF library is absent from the initial listing chunk.

This combines tree shaking and code splitting rather than relying on either technique alone.

## 7. Common interview follow-up questions

### Q1. Does tree shaking work in development mode?

It depends on the bundler and its configuration. Development mode often prioritizes fast builds and debugging, while production mode applies more aggressive optimizations. I would evaluate the production build to determine the actual result.

### Q2. Does using named imports guarantee tree shaking?

No. Named imports make dependencies easier to analyze, but the result also depends on module format, side effects, package configuration, and bundler capabilities.

### Q3. Can tree shaking remove CSS?

CSS can be removed or retained depending on how it is imported, whether it is considered side-effectful, and how the bundler processes styles. Incorrect `sideEffects` metadata can accidentally remove required styles.

### Q4. Is tree shaking the same as dead-code elimination?

They are closely related but not identical.

- Tree shaking commonly refers to identifying and removing unused module exports and their associated code.
- Dead-code elimination is broader and can remove unreachable statements, unused branches, and other code that has no observable effect.

Modern production bundlers and minifiers may apply both.

### Q5. If a package is large, can tree shaking always make it small?

No. Some libraries have unavoidable core functionality, required initialization, or module formats that make unused code difficult to remove. If a package remains large after optimization, I would consider a smaller alternative, a narrower supported import, or loading the feature separately.

## 8. One-line interview answer

“Tree shaking removes unused code from production bundles through static analysis of module imports and exports. It works best with ES modules and accurate side-effect metadata, but CommonJS, dynamic access, required initialization, and incorrect package configuration can limit its effectiveness. I verify the result by analyzing production bundles.”

Key takeaway: Tree shaking removes code that can safely be proven unnecessary; code splitting controls how code is divided and loaded. For real performance gains, use both where appropriate and verify the production output.



# Question 19: How do you handle heavy third-party scripts (analytics, chat widgets, payment SDKs)?

## 1. Why are third-party scripts a performance problem?

Third-party scripts are JavaScript files loaded from external providers or services rather than being implemented entirely within our application.

Common examples include:

- Analytics: Google Analytics, Mixpanel, Amplitude.
- Chat widgets: Intercom, Zendesk.
- Payment SDKs: Stripe, PayPal, Razorpay.
- Advertising and tracking: Ad pixels and marketing tags.
- Monitoring: Error tracking and session replay tools.

These scripts can affect performance because they may:

- Add extra network requests and DNS/TLS connection overhead.
- Download and execute large amounts of JavaScript.
- Consume browser main-thread time.
- Delay hydration or compete with application code for CPU resources.
- Create long tasks that make clicks, scrolling, and typing feel sluggish.
- Load additional scripts and dependencies of their own.

For example, on a hotel booking website, loading an analytics SDK, a chat widget, an advertising pixel, and a payment SDK on the homepage can waste bandwidth and CPU resources before the user even searches for a hotel.

The key principle is to load each third-party script only when it is needed, at the appropriate priority, without delaying critical user-facing functionality.

## 2. How would you approach the problem?

I would follow a measurement-driven approach.

### Step 1: Identify expensive third-party scripts

First, I would open Chrome DevTools and inspect the Network and Performance panels.

In the Network panel, I would:

- Filter by JavaScript.
- Identify requests to external domains.
- Inspect transfer sizes and loading times.
- Check which scripts initiate additional requests.
- Identify scripts loaded on every route unnecessarily.

In the Performance panel, I would investigate long tasks, scripting time, and main-thread activity. The Coverage panel can also help identify JavaScript that is downloaded but not used during a particular session.

I would then classify scripts by importance.

| Script type                     | Priority                    | Typical loading strategy                                      |
| ------------------------------- | --------------------------- | ------------------------------------------------------------- |
| Essential payment functionality | High when entering checkout | Load when the payment flow requires it                        |
| Analytics                       | Usually noncritical         | Load after initial rendering or with low priority             |
| Chat widget                     | Optional                    | Load on interaction or when needed                            |
| Advertising pixels              | Usually noncritical         | Load according to business and consent requirements           |
| Error monitoring                | Important for observability | Initialize early when practical, but avoid blocking rendering |

The exact priority depends on the product. For example, a payment SDK may be unnecessary on the homepage but essential on the checkout page.

### Step 2: Load scripts asynchronously or defer them

For a plain HTML script, there are two common attributes:

```
<script src="analytics.js" async></script>
```

```
<script src="analytics.js" defer></script>
```

Their behavior differs:

| `async`                                                  | `defer`                                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Downloads in parallel with HTML parsing.                 | Downloads in parallel with HTML parsing.                                       |
| Executes as soon as it is ready.                         | Executes after HTML parsing completes.                                         |
| Execution order is not guaranteed between async scripts. | Deferred classic scripts execute in document order.                            |
| Useful for independent scripts.                          | Useful for scripts that depend on document parsing and need ordered execution. |

Neither attribute makes a script free: once executed, it can still consume CPU and block the main thread.

I would also avoid using `async` blindly for scripts that depend on one another.

### Step 3: Load scripts only when needed

This is often the biggest improvement.

Instead of loading every SDK globally, I would load each one based on the feature that requires it.

For example:

- Load the chat widget when the user opens the support panel.
- Load the payment SDK when the user enters the checkout flow.
- Load analytics after the application has initialized, subject to consent requirements.
- Load a map SDK only when the user opens the map view.

This avoids paying the download and execution cost on routes where the script provides no value.

### Step 4: Minimize the work performed by third-party code

I would review whether the application is loading:

- Multiple analytics tools tracking the same events.
- Duplicate versions of the same SDK.
- Unnecessary plugins or tracking tags.
- Features that can be removed or configured more efficiently.
- Large SDKs that can be replaced with lighter integrations.

For example, if several analytics tools are recording the same page views and events, consolidating tracking may reduce both JavaScript execution and network activity.

I would verify the result using real measurements rather than assuming that a script is expensive based only on its file size.

## 3. How do you handle third-party scripts in Next.js?

Next.js provides the `next/script` component, which supports different loading strategies.

### A. Use `afterInteractive` for noncritical scripts

```
import Script from "next/script";

export default function HotelHomepage() {
  return (
    <>
      <h1>Find your next hotel</h1>

      <Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  );
}
```

`afterInteractive` loads the script after some hydration has occurred. It is suitable for many scripts that do not need to run before the page becomes interactive.

However, it does not mean the script can never affect responsiveness. Once downloaded, its JavaScript can still compete for main-thread time.

### B. Use `lazyOnload` for low-priority scripts

```
import Script from "next/script";

export default function HotelHomepage() {
  return (
    <>
      <h1>Find your next hotel</h1>

      <Script
        src="https://example.com/chat-widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
```

This strategy delays loading until the browser is idle after the page has loaded, making it suitable for some low-priority integrations.

However, it is not the same as loading on user interaction. If the chat widget should load only when the user clicks a support button, an interaction-driven strategy is more appropriate.

### C. Load a script when the user opens a feature

For a feature that is not immediately required, I would conditionally render the integration.

```
"use client";

import { useState } from "react";
import Script from "next/script";

export default function SupportChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Contact Support
      </button>

      {open && (
        <Script
          src="https://example.com/chat-widget.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
```

This illustrates conditional loading, but it is not a complete chat integration: the provider may require initialization code, configuration, callbacks, and a way to open the actual widget after the SDK is ready.

In production, I would follow the provider's documented integration pattern and ensure that the script is initialized only once.

Important: Avoid assuming that adding a script tag alone fully initializes a third-party SDK. Some SDKs require a specific initialization sequence or a provider-specific React component.

## 4. How would you handle payment SDKs?

Payment SDKs require special consideration because they are directly involved in a critical user journey.

For a hotel booking application, I would generally avoid loading a large payment SDK on the homepage or hotel results page.

Instead, I would load it when the user reaches checkout or begins the payment step.

My approach would be:

1. Keep browsing and hotel search lightweight.
2. Load the payment SDK at the appropriate checkout stage.
3. Display a clear loading state while the payment interface initializes.
4. Disable only the payment action that cannot proceed yet.
5. Handle SDK loading failures with a recovery path.
6. Never assume that a frontend payment result is sufficient proof of payment; the backend must verify payment status securely.

I would not delay essential payment functionality so aggressively that users encounter unnecessary waiting at the moment they need to pay.

## 5. How would you handle analytics scripts?

Analytics is usually not required to render the page, so it should not unnecessarily delay critical content.

I would:

- Avoid blocking rendering while analytics initializes.
- Use an appropriate deferred loading strategy.
- Avoid duplicate analytics libraries.
- Batch or minimize event processing when supported.
- Prevent analytics initialization from running multiple times accidentally.
- Respect applicable privacy and consent requirements before setting cookies or sending tracking data.

For example, I would not make the hotel search results wait for an analytics request to complete before rendering.

However, if analytics is used for business-critical attribution, I would also consider whether delaying it could cause events to be missed. Performance optimization should preserve the required tracking behavior.

## 6. How would you handle chat widgets?

Chat widgets are often large and unnecessary until a visitor requests assistance.

A sensible strategy is to show a lightweight support button first and load the actual chat integration when the user opens it.

Benefits include:

- Less JavaScript on the initial page.
- Fewer requests during initial rendering.
- Less main-thread work for users who never use chat.
- Better performance on mobile devices.

I would also consider loading the widget after a user has spent some time on the page or when it approaches the point of use, provided that this does not create a poor user experience.

If the widget is expected to be immediately available, I would balance that requirement against the cost of loading it lazily.

## 7. Additional considerations

### A. Use a Web Worker where appropriate

A Web Worker can move certain CPU-intensive computations off the main thread, helping keep the interface responsive.

However, you generally cannot move an arbitrary third-party DOM-manipulating script into a worker. The script must support an appropriate worker-based execution model.

For third-party scripts that support it, a worker-based integration may be worth considering. For most chat widgets and payment SDKs, selective loading and scheduling are more practical first steps.

### B. Use resource hints selectively

Resource hints can reduce connection setup costs for important external origins.

For example:

```
<link rel="preconnect" href="https://payments.example.com">
```

`preconnect` can establish a connection earlier, but it also consumes resources. I would use it only for origins that are likely to be needed soon, rather than preconnecting to every third-party domain.

### C. Monitor third-party impact in production

I would track:

- LCP, INP, and CLS.
- Long tasks and main-thread blocking.
- Script loading failures.
- Performance differences with and without a particular integration.
- Real-user performance across devices and network conditions.

I would also establish a process for reviewing new third-party scripts before they are added to the application.

## 8. Common interview follow-up questions

### Q1. Does `async` guarantee that a script will not block the main thread?

No. It allows the browser to download the script without waiting for HTML parsing to finish, but executing the script still uses the main thread in a typical browser integration and can delay rendering or interactions.

### Q2. What is the difference between `afterInteractive` and `lazyOnload` in Next.js?

- `afterInteractive` loads a script after some page hydration has occurred.
- `lazyOnload` delays a low-priority script until the browser is idle after the page has loaded.

The choice depends on when the script is actually needed.

### Q3. Should all third-party scripts be loaded after the page becomes interactive?

No. Some scripts may be required for essential functionality or early monitoring. I would prioritize based on the user journey, performance impact, and business requirements rather than applying one rule to every integration.

### Q4. How do you stop third-party scripts from affecting INP?

I would identify long tasks and expensive event handlers, defer nonessential scripts, load integrations on demand, and reduce unnecessary script execution. If the third-party code itself performs heavy synchronous work, the available options may be limited, so replacing or removing the integration may be necessary.

### Q5. What if a third-party script fails to load?

I would make sure the core application remains usable, show a suitable fallback for the affected feature, and provide a retry or alternative path where appropriate. For payments, I would avoid reporting success until the payment has been verified by the backend.

## 9. One-line interview answer

“I manage heavy third-party scripts by measuring their network and main-thread impact, loading them with appropriate priorities, deferring optional integrations, and loading feature-specific SDKs only when needed. In Next.js, I use `next/script` strategies such as `afterInteractive` and `lazyOnload`, while preserving critical functionality, consent requirements, error handling, and production monitoring.”

Key takeaway: Treat third-party JavaScript as a performance cost that must be justified. Load it at the point of need, not automatically on every page.



# Question 20: How do you optimize images and fonts?

## 1. Why are images and fonts important for performance?

Images and fonts can significantly affect page loading speed, visual stability, and user experience.

Images often account for a large portion of the bytes downloaded by a web page. Large images can delay the Largest Contentful Paint (LCP), especially when the main hero image loads slowly.

Fonts can delay text rendering, cause layout shifts when fallback fonts are replaced, and add unnecessary network requests if multiple font files or weights are downloaded.

For example, on a hotel booking website:

- A large hero image may delay the homepage's LCP.
- Hotel thumbnail images may consume excessive bandwidth.
- An image carousel may download many images that the user never views.
- Multiple font weights may increase the initial page's download size.
- A custom font loading late may cause text to shift or appear invisible temporarily.

My goal is to deliver the right image and font, in the right format and size, at the right time.

## 2. How do you optimize images?

### A. Choose the correct image format

Different formats are suitable for different types of images.

| Format | Best use case                                     | Key benefit                                        |
| ------ | ------------------------------------------------- | -------------------------------------------------- |
| AVIF   | Photographs and detailed images                   | Often achieves excellent compression               |
| WebP   | Photographs and web graphics                      | Good compression with broad modern browser support |
| JPEG   | Photographs and legacy compatibility              | Widely supported                                   |
| PNG    | Images requiring lossless quality or transparency | Preserves detail and transparency                  |
| SVG    | Logos, icons, simple vector graphics              | Scales without rasterization blur                  |

I would generally consider AVIF or WebP for photographic content, while keeping SVG for appropriate logos and icons.

The best choice depends on image quality requirements, browser support, and the actual output size. I would compare the results rather than choosing a format based on its name alone.

### B. Resize images to the dimensions actually needed

One common mistake is downloading a huge image and displaying it in a small container.

For example, a hotel card may display an image at approximately 320 × 200 pixels, but the original image could be 3000 × 2000 pixels.

Downloading the original unnecessarily increases transfer size.

I would generate appropriately sized image variants and serve the closest suitable dimensions for the display.

For responsive images, HTML supports `srcset` and `sizes`:

```
<img
  src="/images/hotel-640.webp"
  srcset="
    /images/hotel-320.webp 320w,
    /images/hotel-640.webp 640w,
    /images/hotel-960.webp 960w
  "
  sizes="(max-width: 600px) 100vw, 320px"
  width="320"
  height="200"
  alt="Hotel swimming pool"
/>
```

The browser uses the available variants and the declared sizing information to select an appropriate resource.

This avoids forcing every device to download the largest image.

### C. Compress images

Compression reduces the amount of data transferred over the network.

I would:

- Use an efficient format such as WebP or AVIF when appropriate.
- Adjust quality settings to avoid unnecessarily large files.
- Remove unnecessary metadata when possible.
- Generate multiple sizes for responsive layouts.
- Avoid repeatedly recompressing images in ways that degrade quality.

The goal is to find a balance between image quality and file size.

### D. Lazy-load below-the-fold images

Images that are far below the initial viewport usually do not need to load immediately.

Native browser lazy loading is straightforward:

```
<img
  src="/images/hotel-room.webp"
  loading="lazy"
  width="640"
  height="400"
  alt="Hotel room"
/>
```

This allows the browser to defer loading the image until it approaches the viewport.

However, I would not lazy-load the main LCP image by default. If the hero image is the main content users see immediately, delaying its request can worsen LCP.

A practical strategy is:

- Above-the-fold, critical image: load promptly.
- Below-the-fold images: consider `loading="lazy"`.
- Images unlikely to be viewed: avoid eager downloads.
- Image carousels: defer nonvisible slides when appropriate.

### E. Prevent layout shifts

Images without reserved dimensions can cause the page layout to jump when they load.

For example:

```
<img
  src="/images/hotel.webp"
  width="640"
  height="400"
  alt="Hotel exterior"
/>
```

Providing dimensions lets the browser reserve space before the image finishes downloading.

For responsive layouts, CSS can also reserve the correct aspect ratio:

```
.hotel-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
```

This helps reduce Cumulative Layout Shift (CLS).

### F. Prioritize the LCP image

If the main hero image is responsible for a slow LCP, I would check whether it is:

- Discovered late by the browser.
- Loaded at an unnecessarily large resolution.
- Delivered from a slow origin.
- Blocked by other high-priority resources.
- Being lazy-loaded accidentally.

For a critical image, I would ensure it is discoverable early and assigned an appropriate loading priority.

For example:

```
<img
  src="/images/homepage-hero.webp"
  fetchpriority="high"
  width="1440"
  height="700"
  alt="Featured hotel destination"
/>
```

I would use high priority selectively, generally for the most important image rather than every image on the page.

## 3. How do you optimize images in Next.js?

Next.js provides the `next/image` component, which supports responsive image sizing, optimization, and loading-related features.

Example:

```
import Image from "next/image";

export default function HotelCard() {
  return (
    <Image
      src="/images/hotel.webp"
      alt="Luxury hotel"
      width={640}
      height={400}
      sizes="(max-width: 600px) 100vw, 320px"
    />
  );
}
```

Important considerations:

- `width` and `height` help establish the image's intrinsic dimensions and prevent layout shifts.
- `sizes` helps the browser select an appropriately sized responsive image.
- Next.js can optimize supported images through its configured image optimization pipeline.
- The `loading` prop can control lazy loading where appropriate.
- `priority` in older Next.js patterns or `preload` in newer versions can be used for a critical LCP image, depending on the version.
- Remote images need appropriate configuration when using the default image optimization loader.

For images that should be lazy-loaded, the default behavior is generally suitable. For a critical above-the-fold image, I would evaluate its priority based on the actual page layout and the Next.js version.

Important: `next/image` does not automatically fix every image-performance problem. Choosing appropriate source images, responsive sizes, caching, and loading priorities still matters.

## 4. How do you optimize fonts?

### A. Use modern font formats

For self-hosted web fonts, WOFF2 is generally a good default because it offers efficient compression and broad support in modern browsers.

I would avoid loading unnecessarily large font files or legacy formats unless the application requires compatibility with older browsers.

### B. Use only the required font weights and styles

A common mistake is loading every available font weight even though the design uses only a few.

For example, a page might need only regular and semibold weights, but the application loads regular, medium, semibold, bold, and several italic variants.

Each additional font file can increase the amount of data the browser downloads.

I would include only the weights and styles the design actually needs.

### C. Prefer self-hosting when appropriate

Self-hosting fonts can provide more control over caching, delivery, and privacy.

However, self-hosting is not always automatically faster than using a font CDN. I would consider:

- Network location and CDN performance.
- Cache behavior.
- Privacy requirements.
- Number of external connections.
- Font format and subset size.

The correct choice depends on the application's infrastructure and requirements.

### D. Use `font-display` appropriately

The CSS `font-display` property controls how text behaves while a font is loading.

```
@font-face {
  font-family: "AppSans";
  src: url("/fonts/app-sans.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

With `font-display: swap`, the browser displays fallback text while the custom font loads, then swaps to the custom font.

This avoids leaving text invisible while waiting for the font, although the font swap can still cause a layout shift if the fallback font has significantly different metrics.

Other values include:

| Value      | Behavior                                                                |
| ---------- | ----------------------------------------------------------------------- |
| `swap`     | Shows fallback text immediately and swaps when the font is available    |
| `block`    | May temporarily hide text while waiting for the font                    |
| `fallback` | Uses a short block period followed by a limited swap period             |
| `optional` | Gives the browser discretion to use the custom font based on conditions |

For many user-facing websites, `swap` is a reasonable starting point. I would evaluate the visual and performance effects rather than applying it without consideration.

### E. Preload only critical fonts

If a custom font is required for the initial viewport, preloading it may reduce the time before the browser discovers and downloads it.

```
<link
  rel="preload"
  href="/fonts/app-sans-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

I would preload only fonts that are genuinely critical.

Preloading every weight or font file can waste bandwidth and compete with more important resources, such as the LCP image.

### F. Use font subsetting where appropriate

A font file may contain glyphs for many languages even when the application uses only a subset of them.

Font subsetting creates smaller files containing only the required character ranges.

For example, an application that supports only Latin characters in a particular interface may not need the entire multilingual font file for that text.

However, multilingual applications must preserve the required glyphs and language coverage. An overly aggressive subset can cause missing characters or unexpected fallback fonts.

### G. Use Next.js font optimization

In Next.js, `next/font` can optimize local and supported Google Fonts by self-hosting and serving font files as part of the application's build.

Example using a Google Font:

```
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

Benefits include:

- Reduced reliance on runtime requests to an external font provider.
- Font optimization during the build process.
- Control over selected subsets and font configuration.
- A convenient way to apply fonts consistently across the application.

For local fonts, `next/font/local` can be used.

I would still limit unnecessary font weights and subsets because loading too many font variants can increase the amount of font data required.

## 5. How images and fonts affect Core Web Vitals

| Metric | How images and fonts can affect it                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| LCP    | A large, late-discovered hero image can delay the main content's rendering                                                            |
| CLS    | Images without reserved dimensions and font swaps can shift page content                                                              |
| INP    | Image decoding and font-related work can contribute to competition for browser resources, though their impact depends on the workload |

When investigating poor LCP, I would first determine which element is the LCP element. If it is an image, I would inspect discovery time, request priority, transfer size, and rendering delay.

For poor CLS, I would look for images without reserved space and custom fonts that cause significant changes in text dimensions.

## 6. Practical hotel booking example

Imagine a hotel listing page with a large hero image, dozens of hotel thumbnails, and a custom font.

I would optimize it in this order:

1. Hero image: Serve an appropriately sized AVIF or WebP image and ensure it is discovered early.
2. Hotel thumbnails: Generate responsive image sizes and lazy-load thumbnails below the fold.
3. Image layout: Reserve dimensions or aspect ratios to avoid layout shifts.
4. Fonts: Use WOFF2, keep only required weights, and choose a suitable `font-display` strategy.
5. Critical resources: Preload only resources that are genuinely needed early.
6. Caching and delivery: Configure suitable caching and efficient CDN delivery.
7. Validation: Compare LCP and CLS before and after the changes using field data and browser tools.

I would make changes based on measurements instead of optimizing every asset indiscriminately.

## 7. Common interview follow-up questions

### Q1. Should we lazy-load the hero image?

Usually not if it is the LCP image. I would make it discoverable early and load it with appropriate priority. Lazy loading is generally more useful for below-the-fold images.

### Q2. What is the difference between `preload` and `prefetch`?

- Preload is for a resource needed soon on the current page.
- Prefetch is generally for a resource that may be needed for a future navigation or later use.

I would use preload sparingly because excessive preloading can compete with critical resources.

### Q3. What causes font-related CLS?

When a fallback font is replaced by the custom font, differences in glyph widths, line heights, and font metrics can change the dimensions of text and surrounding content.

To reduce the impact, I would use an appropriate fallback font, optimize font loading, and consider metric-compatible fallback settings where necessary.

### Q4. Is WebP always better than JPEG?

No. WebP often provides better compression for comparable visual quality, but the result depends on the image, quality settings, and browser requirements. I would compare the actual file sizes and visual quality.

### Q5. Does `next/image` automatically lazy-load all images?

Images are generally lazy-loaded by default when they are not configured for eager loading or preloading. Critical images should be treated differently when appropriate. The exact API and recommended priority configuration can vary by Next.js version.

### Q6. Does using a CDN automatically optimize images?

No. A CDN can improve delivery latency, caching, and distribution, but image resizing, compression, format selection, and responsive delivery still need appropriate configuration.

## 8. One-line interview answer

“I optimize images by serving responsive, compressed formats, lazy-loading noncritical images, reserving layout space, and prioritizing the LCP image. For fonts, I use efficient WOFF2 files, load only required weights, configure `font-display`, and preload only critical fonts. In Next.js, I use `next/image` and `next/font`, then validate the impact on LCP and CLS.”

Key takeaway: Optimize what the browser downloads, when it downloads it, and how much layout or rendering work is required when the resource arrives.


# NEXT.JS FUNDAMENTALS - PHASE 01
## Interview Q&A (OTA Platform Context)

---

## **Q1: What's Next.js and why would you use it instead of Create React App?**

**Answer:**

"Next.js is a React framework that handles routing, server-side rendering, and optimization out of the box. With Create React App, I have to build everything manually - routing, server rendering, image optimization, caching.

For an OTA platform like a flight search app, Next.js is perfect. Why? Because flight listings, hotel details need to be server-rendered for SEO. A user searches flights, we render that page on server, Google can crawl it, it ranks in search. With CRA, it's all client-side, not SEO-friendly.

Also, Next.js gives us automatic route optimization, image optimization out of the box, API routes built-in. We don't need separate backend server for simple endpoints."

---

## **Q2: App Router vs Pages Router - which one and why?**

**Answer:**

"App Router is the new way (Next.js 13+), Pages Router is the old way. You should use App Router for new projects.

The difference: Pages Router uses `/pages` folder, App Router uses `/app` folder.

In Pages Router:
```
/pages/flights.js → route /flights
/pages/flights/[id].js → route /flights/:id
```

In App Router:
```
/app/flights/page.js → route /flights
/app/flights/[id]/page.js → route /flights/:id
```

App Router is better because:
1. Server components by default (better performance)
2. Layouts are easier
3. Error handling built-in
4. Parallel routes (advanced)

For a new OTA project, I'd use App Router. Simpler, more modern."

---

## **Q3: How does file-based routing work in Next.js?**

**Answer:**

"File-based routing means the folder structure automatically becomes your routes. You don't configure routes manually.

For an OTA platform:

```
/app/flights/page.js → URL: /flights (Flight search page)
/app/flights/[id]/page.js → URL: /flights/123 (Single flight detail)
/app/hotels/page.js → URL: /hotels (Hotel listing)
/app/bookings/page.js → URL: /bookings (User bookings)
/app/profile/settings/page.js → URL: /profile/settings (Nested route)
```

So file structure = URL structure. No route configuration needed. If you create a file, the route exists.

Dynamic routes use `[name]` syntax. Like `/flights/[id]` catches `/flights/123`, `/flights/456`, etc. Inside the component, you access `id` from params."

---

## **Q4: What's dynamic routing? Show an example from OTA.**

**Answer:**

"Dynamic routing means URL has variable parts. Like `/flights/123` where 123 is a flight ID that changes.

In OTA, when user clicks a flight, they go to `/flights/[flightId]`. That `[flightId]` is dynamic - it could be any flight ID.

```
/app/flights/[flightId]/page.js
```

Inside component:
```javascript
export default function FlightDetail({ params }) {
  const { flightId } = params;
  // Fetch flight details for this ID
  // Show flight info
}
```

So same component handles `/flights/123`, `/flights/456`, `/flights/789`. Each shows different flight based on ID."

**Follow-up:** "What if you have multiple dynamic segments?"
- "Like `/flights/[from]/[to]/[date]` for search results. Each segment is in params. In OTA, this would be flight search from Delhi to Mumbai on Dec 15th."

---

## **Q5: What are layouts and how do they work?**

**Answer:**

"Layouts wrap your pages. They're UI that's shared across multiple pages. Like header, navigation, footer - they don't change when you navigate.

For OTA:
- Header with logo and search is same everywhere
- Navigation (Flights, Hotels, Bookings) is same everywhere
- They shouldn't re-render when user navigates

```
/app/layout.js (Root layout - header, nav, footer)
  /app/flights/layout.js (Only for flights section)
    /app/flights/page.js (Search results)
    /app/flights/[id]/page.js (Flight details)
  /app/hotels/layout.js (Only for hotels section)
    /app/hotels/page.js (Hotel search)
```

Root layout wraps everything. Flights layout only wraps flight pages. Hotel layout only wraps hotel pages.

User navigates from /flights to /hotels - only page content changes, layout stays same (no re-render)."

**Follow-up:** "Why not just put everything in root layout?"
- "Because flights section might have different sidebar, styling, context. Hotel section different. Nested layouts let each section have its own layout."

---

## **Q6: What's the difference between Client Components and Server Components?**

**Answer:**

"Server Components run on server, Client Components run in browser.

**Server Components (default):**
- Can access database directly
- Can keep secrets (API keys)
- Can't use browser APIs (useState, onClick)
- Better for fetching data

**Client Components (use 'use client'):**
- Can use browser APIs (useState, useEffect)
- Can use hooks
- Can handle user interactions
- Can't access database directly

For OTA:

**Server Component** - fetch flights from database:
```javascript
export default async function FlightsList() {
  const flights = await fetch('SELECT * FROM flights');
  return flights.map(f => <FlightCard flight={f} />);
}
```

**Client Component** - handle search form:
```javascript
'use client';

export default function SearchForm() {
  const [from, setFrom] = useState('');
  const handleSearch = () => { /* search */ };
  return (
    <form onSubmit={handleSearch}>
      <input value={from} onChange={(e) => setFrom(e.target.value)} />
    </form>
  );
}
```

Server Components = less JavaScript sent to browser = faster."

**Follow-up:** "When do you use 'use client'?"
- "When you need useState, onClick, hooks, browser APIs. Most interactive stuff. But default to server components when possible."

---

## **Q7: How does the Metadata API work for SEO?**

**Answer:**

"Metadata is page title, description, tags that search engines read. Metadata API lets you set this per page.

For OTA, flight search results page should have:
```javascript
export const metadata = {
  title: 'Flights from Delhi to Mumbai',
  description: 'Search and book cheap flights from Delhi to Mumbai. Compare airlines and prices.',
  keywords: 'flights, Delhi, Mumbai, booking'
};

export default function Flights() {
  return <div>Flights list</div>;
}
```

When Google crawls `/flights`, it sees this metadata in HTML head.

For dynamic pages like flight detail:
```javascript
export async function generateMetadata({ params }) {
  const flight = await fetch(`/api/flights/${params.id}`);
  return {
    title: `${flight.airline} - Flight ${flight.number}`,
    description: `Book ${flight.airline} flight from ${flight.from} to ${flight.to}`
  };
}

export default function FlightDetail({ params }) {
  // Show flight
}
```

Different flight, different metadata. Important for SEO ranking."

---

## **Q8: What are loading and error UI components?**

**Answer:**

"Loading UI shows spinner while page is loading. Error UI shows when something fails.

For OTA, when user navigates to flights page:

```
/app/flights/page.js (Main page)
/app/flights/loading.js (Shows while loading)
/app/flights/error.js (Shows if error)
```

Loading component:
```javascript
export default function Loading() {
  return <div>Searching flights...</div>;
}
```

Error component:
```javascript
'use client';

export default function Error({ error }) {
  return <div>Failed to load flights: {error.message}</div>;
}
```

When user goes to /flights:
1. loading.js shows
2. Page fetches data
3. Page renders or error.js shows if failed

Automatic, no manual state management needed."

**Follow-up:** "Is this automatic?"
- "Yes, Next.js automatically shows loading.js while page is rendering/fetching. If error, shows error.js."

---

## **Q9: How do environment variables work in Next.js?**

**Answer:**

"Environment variables store secrets and configs. Like API keys, database URLs, etc.

For OTA, you might have:
```
NEXT_PUBLIC_API_URL=https://api.mmt.com (public, can be in client)
DATABASE_URL=postgresql://... (secret, server only)
STRIPE_SECRET_KEY=sk_xxx (secret, server only)
```

In `.env.local`:
```
NEXT_PUBLIC_GOOGLE_MAPS_KEY=xxx
API_SECRET=yyy
```

In code:
```javascript
// Server component - can access both
const apiSecret = process.env.API_SECRET;

// Client component - can ONLY access NEXT_PUBLIC_ variables
const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
```

Prefix with `NEXT_PUBLIC_` if browser needs it. Otherwise it's server-only (secret)."

**Follow-up:** "Why have both public and secret?"
- "Secret variables stay on server, never sent to browser. Public ones are in client bundle (visible in browser). For API keys, use secret. For public config, use public."

---

## **Q10: How does Link component work and why not use `<a>` tag?**

**Answer:**

"Link is Next.js component for navigation. It's better than regular `<a>` tag because it prefetches pages.

When user hovers over link, Next.js prefetches that page in background. When they click, page is already loaded - instant navigation.

```javascript
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href="/flights">Flights</Link>
      <Link href="/hotels">Hotels</Link>
      <Link href={`/flights/${flightId}`}>Flight Details</Link>
    </>
  );
}
```

For OTA:
- User sees flight in search results
- They hover over flight card
- Link prefetches that flight detail page
- They click
- Page loads instantly

With regular `<a>` tag, page loads from scratch each time - slower.

Also, Link prevents full page reload. Only component content changes, layout stays same (no flash)."

---

## **Q11: What's a not-found page and when do you use it?**

**Answer:**

"Not-found page shows when user goes to URL that doesn't exist.

For OTA, if user goes to `/flights/invalid-id` and that flight doesn't exist:

```
/app/not-found.js
```

```javascript
export default function NotFound() {
  return (
    <div>
      <h1>Flight not found</h1>
      <Link href="/flights">Back to flights</Link>
    </div>
  );
}
```

In flight detail component:
```javascript
import { notFound } from 'next/navigation';

export default async function FlightDetail({ params }) {
  const flight = await fetch(`/api/flights/${params.id}`);
  
  if (!flight) {
    notFound();  // Shows not-found.js
  }
  
  return <div>{flight.name}</div>;
}
```

Better than showing error. Semantic way to say "page doesn't exist"."

---

## **Q12: How are static assets handled in Next.js?**

**Answer:**

"Static assets (images, fonts, PDFs) go in `/public` folder. They're served from root URL.

```
/public/logo.png → /logo.png
/public/fonts/roboto.ttf → /fonts/roboto.ttf
/public/images/flight.jpg → /images/flight.jpg
```

For OTA:
```javascript
<Image src="/flight-banner.jpg" alt="Flights" width={800} height={400} />
```

Use Next.js `Image` component (not `<img>`) because it optimizes:
- Lazy loads images
- Responsive sizes
- WebP format
- Caches

Regular `<img>` loads full image always, no optimization."

---


# SSR vs SSG vs ISR vs CSR - PRACTICAL EXAMPLES
---

## **SCENARIO: Building a Flights List Component**

Let's build the same flights list 4 different ways. Same UI, different rendering strategies.

---

## **1. SSR (Server-Side Rendering) - Fetch on Every Request**

**When:** Data changes frequently (flight search results, live prices)

```javascript
// app/flights/page.js
// This component runs on SERVER every time user visits

export default async function FlightsList() {
  // 🔴 Server fetches on EVERY request
  const response = await fetch('https://api.flights.com/flights', {
    // Don't cache - always fresh
    cache: 'no-store'
  });
  
  const flights = await response.json();
  
  // 🔴 HTML rendered on server
  return (
    <div className="flights-container">
      <h1>Available Flights</h1>
      <div className="flights-grid">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h2>{flight.airline}</h2>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Price: ₹{flight.price}</p>
            <p>Departure: {flight.departure}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**What happens:**

```
User visits /flights
  ↓
Server receives request
  ↓
Server fetches flights from API (real-time prices)
  ↓
Server renders component to HTML
  ↓
Server sends HTML to browser
  ↓
Browser displays flights (always fresh)

User refreshes page
  ↓
Server fetches AGAIN (new prices)
  ↓
Repeat
```

**Pros:**
- ✅ Always fresh data (real-time prices)
- ✅ SEO friendly (HTML sent to Google)
- ✅ Can keep secrets (API keys safe on server)

**Cons:**
- ❌ Slow (server fetches every request)
- ❌ Server load high (every user hits server)
- ❌ No caching

**Real OTA use:**
```
Flight search results (/flights?from=DEL&to=BOM)
- Prices change constantly
- User wants latest prices
- SSR perfect here
```

---

## **2. SSG (Static Site Generation) - Fetch at Build Time**

**When:** Content doesn't change (FAQ, about, static pages)

```javascript
// app/popular-flights/page.js
// This component runs at BUILD TIME, not on every request

export const revalidate = false;  // Never revalidate

export default async function PopularFlights() {
  // 🟢 Fetches at BUILD TIME ONLY
  const response = await fetch('https://api.flights.com/popular', {
    // Cache indefinitely (it's built once)
    cache: 'force-cache'
  });
  
  const flights = await response.json();
  
  // 🟢 HTML generated at build time, served as static file
  return (
    <div className="flights-container">
      <h1>Most Popular Flights This Month</h1>
      <div className="flights-grid">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h2>{flight.airline}</h2>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Price: ₹{flight.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**What happens:**

```
Developer runs: npm run build
  ↓
Next.js runs this component ONCE
  ↓
Server fetches popular flights ONCE
  ↓
Next.js generates HTML file
  ↓
Saves as static file (popular-flights.html)
  ↓
Deploy to production
  ↓

User 1 visits /popular-flights
  ↓
Browser gets pre-built HTML instantly ⚡
  ↓
User 2 visits /popular-flights
  ↓
Browser gets SAME HTML instantly ⚡
  ↓
User 3 visits /popular-flights
  ↓
Browser gets SAME HTML instantly ⚡

Developer makes changes
  ↓
Developer runs: npm run build
  ↓
Repeat (rebuild, redeploy)
```

**Pros:**
- ✅ Super fast (pre-built static HTML)
- ✅ No server load (just serve static files)
- ✅ CDN friendly (cache forever)

**Cons:**
- ❌ Stale data (built once, doesn't update)
- ❌ Must rebuild to update (redeploy)
- ❌ Not ideal for changing content

**Real OTA use:**
```
/about - company info (never changes)
/faq - frequently asked questions (rarely changes)
/blog - old blog posts (don't change)
/terms - terms & conditions (rarely change)
```

---

## **3. ISR (Incremental Static Regeneration) - Static + Periodic Update**

**When:** Content changes slowly (trending flights, popular routes, top hotels)

```javascript
// app/trending-flights/page.js
// Static HTML served, but regenerates every 60 seconds

export const revalidate = 60;  // Regenerate every 60 seconds (1 minute)

export default async function TrendingFlights() {
  // 🟡 Fetches at build time
  // 🟡 Refetches every 60 seconds
  const response = await fetch('https://api.flights.com/trending', {
    // Revalidate after 60 seconds
    next: { revalidate: 60 }
  });
  
  const flights = await response.json();
  
  // 🟡 HTML pre-built, but updates periodically
  return (
    <div className="flights-container">
      <h1>Trending Flights Today</h1>
      <p>Last updated: {new Date().toLocaleTimeString()}</p>
      <div className="flights-grid">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h2>{flight.airline}</h2>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Price: ₹{flight.price}</p>
            <p>Bookings: {flight.bookings}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**What happens:**

```
Developer runs: npm run build
  ↓
Next.js generates HTML for trending flights
  ↓
Saves as static file
  ↓
Deploy to production
  ↓

Time: 00:00
User 1 visits /trending-flights
  ↓
Browser gets pre-built HTML ⚡ (fast)
  ↓

Time: 00:30 (30 seconds later)
User 2 visits /trending-flights
  ↓
Browser gets SAME cached HTML ⚡ (still fast)
  ↓

Time: 01:00 (60 seconds later - REVALIDATE TIME)
User 3 visits /trending-flights
  ↓
Next.js detects: revalidate time passed
  ↓
Server regenerates HTML in BACKGROUND
  ↓
Browser gets NEW HTML with fresh data
  ↓

Time: 01:30
User 4 visits /trending-flights
  ↓
Browser gets updated HTML ⚡ (fresh + fast)
```

**Pros:**
- ✅ Fast for most users (cached static HTML)
- ✅ Fresh data (regenerates periodically)
- ✅ Low server load (not every request)
- ✅ Perfect balance

**Cons:**
- ⚠️ First user after revalidate might see old data (but revalidating in background)
- ⚠️ Data not real-time (wait up to 60 seconds for update)

**Real OTA use:**
```
/trending-flights - popular routes (update every 60 seconds)
/top-hotels - trending hotels (update every 60 seconds)
/deals - limited-time deals (update every 30 minutes)
/recommendations - personalized (update every 24 hours)
```

---

## **4. CSR (Client-Side Rendering) - Fetch in Browser**

**When:** User-specific data or interactive features (bookings, profile, favorites)

```javascript
// app/my-bookings/page.js
'use client';  // 🔵 This is Client Component

import { useEffect, useState } from 'react';

export default function MyBookings() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // 🔵 Browser fetches from API route (not external API)
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/my-bookings', {
          // Send authToken cookie automatically (user-specific)
          credentials: 'include'
        });
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        setFlights(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBookings();
  }, []);  // Run once on mount
  
  // 🔵 HTML generated in browser after data arrives
  if (loading) return <p>Loading your bookings...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="flights-container">
      <h1>Your Bookings</h1>
      <div className="flights-grid">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h2>{flight.airline}</h2>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Booking ID: {flight.bookingId}</p>
            <button>Cancel Booking</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Backend API route
// app/api/my-bookings/route.js
export async function GET(request) {
  // Verify user is logged in
  const token = request.cookies.get('authToken')?.value;
  if (!token) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const userId = verifyToken(token).userId;
  
  // Fetch user's bookings from database
  const bookings = await db.bookings.find({ userId });
  
  return Response.json(bookings);
}
```

**What happens:**

```
User visits /my-bookings
  ↓
Browser receives empty HTML + JavaScript
  ↓
Browser shows loading spinner
  ↓
JavaScript runs: fetch('/api/my-bookings')
  ↓
Browser sends request with auth token
  ↓
Server fetches user's bookings from database
  ↓
Browser receives data (bookings)
  ↓
Browser renders bookings
  ↓
User sees their bookings ✅

Wait 30 seconds
  ↓
Browser content stays same (cached in browser)
  ↓
User refreshes
  ↓
Repeat fetch
```

**Pros:**
- ✅ User-specific data (personalized)
- ✅ Real-time updates (fresh every time)
- ✅ Interactive (can like, cancel, etc)
- ✅ Can access user context (logged in)

**Cons:**
- ❌ Slow initial load (fetch after JavaScript loads)
- ❌ Blank page until data arrives
- ❌ Not SEO friendly (Google sees empty HTML)
- ❌ Extra server request

**Real OTA use:**
```
/my-bookings - user-specific bookings (CSR)
/my-profile - user-specific profile (CSR)
/favorites - user's saved flights (CSR)
/search-history - user's searches (CSR)
```
---


## **Q7: How does Next.js caching work and when do you revalidate?**

**Answer:**

"Next.js has automatic caching. When you fetch, it caches the response. Next time you fetch same URL, it returns cached version - no server hit.

For OTA flights list:

```javascript
// app/flights/page.js
export default async function Flights() {
  const flights = await fetch('https://api.flights.com/flights', {
    next: { revalidate: 3600 }  // Cache for 1 hour
  });
  
  const data = await flights.json();
  return <FlightsList flights={data} />;
}
```

First visit: Fetch flights, cache response, show
After 1 hour: Cache expires, fetch fresh flights
Within 1 hour: Serve cached flights (instant)

When to revalidate immediately:

```javascript
// app/api/flights/route.js

export async function POST(request) {
  const newFlight = await request.json();
  await db.flights.create(newFlight);
  
  // Clear cache immediately
  revalidatePath('/flights');
  
  return Response.json({ success: true });
}
```

For OTA:
- Flight listings cache 1 hour (prices don't change constantly)
- Flight search results cache 30 minutes
- User bookings don't cache (always fresh)
- When price changes, admin updates, we invalidate cache"

**Follow-up:** "What if user wants fresh data immediately?"
- "Use cache: 'no-store' to not cache, or revalidatePath() to clear cache after update."

---

## **Q8: How do you handle SEO and metadata in dynamic pages?**

**Answer:**

"For dynamic pages like flight detail, metadata changes based on data. You generate metadata based on params.

For OTA flight detail page (/flights/123):

```javascript
// app/flights/[flightId]/page.js

export async function generateMetadata({ params }) {
  const flight = await fetch(
    `https://api.flights.com/flights/${params.flightId}`
  );
  const data = await flight.json();
  
  return {
    title: `${data.airline} Flight - ${data.from} to ${data.to}`,
    description: `Book ${data.airline} flight from ${data.from} to ${data.to}. Price: ${data.price}. Departure: ${data.departure}`,
    openGraph: {
      title: data.airline,
      description: `Fly from ${data.from} to ${data.to}`,
      images: [data.image]
    }
  };
}

export default async function FlightDetail({ params }) {
  const flight = await fetch(
    `https://api.flights.com/flights/${params.flightId}`
  );
  const data = await flight.json();
  
  return (
    <div>
      <h1>{data.airline} - {data.flightNumber}</h1>
      <p>Price: {data.price}</p>
    </div>
  );
}
```

When Google crawls `/flights/123`:
- HTML head has dynamic metadata about that flight
- Search results show flight airline, price, route
- Social media shows flight image and info

Every flight has different metadata - better SEO ranking."

**Follow-up:** "What's openGraph?"
- "Social media metadata. When user shares link on Twitter/Facebook, it shows flight info and image."

---

## **Q9: What's middleware and when would you use it?**

**Answer:**

"Middleware intercepts requests before they reach your routes. Like a security guard checking every request.

For OTA, protecting user routes:

```javascript
// middleware.js (root of project)

import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('authToken')?.value;
  
  // If user accessing /bookings without login, redirect to login
  if (request.nextUrl.pathname.startsWith('/bookings')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/bookings/:path*', '/profile/:path*']  // Run on these routes
};
```

Flow:
1. User tries to access /bookings
2. Middleware intercepts
3. Check if user logged in (has token)
4. If not logged in → redirect to /login
5. If logged in → continue to /bookings

Other uses:
- Adding headers to requests
- Logging analytics
- A/B testing (show version A to 50%, B to 50%)
- Rate limiting (block after X requests)

For OTA:
- Protect `/bookings`, `/profile` routes
- Track user activity
- Add security headers
- Redirect old URLs"

**Follow-up:** "Can middleware access database?"
- "No. Middleware is lightweight, runs at edge (CDN level). Can only check headers, cookies, params."

---


## **Q11: What's hydration and why is it important?**

**Answer:**

"Hydration is when React takes server-rendered HTML and makes it interactive on browser.

For OTA flight search:

1. Server renders: `<div>Flight from DEL to BOM</div>`
2. Sends HTML to browser
3. Browser shows HTML instantly (fast!)
4. Browser downloads React JavaScript
5. React 'hydrates' - attaches event listeners, makes interactive
6. User can now click buttons, forms work

Without hydration: HTML is just text, not interactive.
With hydration: Same HTML + JavaScript = interactive.

Why important?
- Fast initial load (HTML renders instantly)
- Then interactive (JavaScript makes clickable)

Issue - Hydration mismatch:
```javascript
export default function Component() {
  const [date, setDate] = useState(new Date());
  // On server: renders one date
  // On browser: renders different date (now)
  // Mismatch = error
}
```

Fix:
```javascript
'use client';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;  // Skip rendering until mounted
  
  const date = new Date();
  return <div>{date}</div>;
}
```

For OTA: Server renders flight list for SEO, browser hydrates to make interactive (sorting, filtering)."

---




## **Q1: How do you optimize images in Next.js?**

**Answer:**

"Next.js Image component optimizes automatically. It's better than regular `<img>` tag.

Regular img tag problems:
- Loads full resolution always
- No lazy loading
- Doesn't adapt to device
- Large file size

Next.js Image benefits:
- Lazy loads (loads when visible)
- Responsive (different sizes for mobile/desktop)
- WebP format (smaller file size)
- Caches efficiently

For OTA flight cards:

```javascript
import Image from 'next/image';

export default function FlightCard({ flight }) {
  return (
    <div>
      <Image 
        src={flight.image}
        alt={flight.airline}
        width={400}
        height={300}
        priority={false}  // Lazy load
      />
      <p>{flight.airline}</p>
      <p>₹{flight.price}</p>
    </div>
  );
}
```

When user scrolls to flight:
- Image lazy loads
- Responsive size (mobile smaller than desktop)
- WebP if browser supports
- Cached on browser

Result: Images load 3-5x faster."

**Follow-up:** "What's the priority prop?"
- "Use priority={true} for above-fold images (hero banner). They load immediately. Other images lazy load. Don't use priority on all images."

---

## **Q2: What's code splitting and how does Next.js handle it automatically?**

**Answer:**

"Code splitting means breaking your JavaScript into chunks instead of one big bundle. Each route gets its own chunk - only downloaded when needed.

For OTA:

```
Without code splitting:
- User goes to home page
- Downloads ALL JavaScript (flights, hotels, bookings, etc)
- 500kb bundle, 2 seconds to load

With code splitting:
- User goes to home page
- Downloads only home page code (~50kb)
- Flights code, hotels code stay separate
- When user navigates to flights, downloads flights code
- Each route: 50-100kb chunks instead of 500kb
- Home loads in 0.5 seconds
```

Next.js does this automatically! You don't do anything.

But you can optimize more:

```javascript
// app/flights/[id]/expensive-chart.js
// This chart is big, heavy. Only show if user clicks 'details'

import dynamic from 'next/dynamic';

const FlightChart = dynamic(
  () => import('./flight-chart-component'),
  { loading: () => <p>Loading chart...</p> }
);

export default function FlightDetail() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <>
      <h1>Flight Details</h1>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && <FlightChart />}
    </>
  );
}
```

Chart code only downloads when user clicks button - not on page load."

**Follow-up:** "How much bundle reduction can you get?"
- "Depends on app size. Typically 60-70% reduction on initial load. Rest loads as user navigates."

---

## **Q3: How do you implement lazy loading for heavy components?**

**Answer:**

"Lazy loading means load component only when needed. For OTA, user detail page might have:
- User profile (needed)
- Booking history (needed)
- Customer reviews (needed)
- Interactive map (heavy, maybe not needed immediately)
- Analytics dashboard (heavy, rarely used)

Load the heavy stuff only when user scrolls to it:

```javascript
// app/user/[userId]/page.js

'use client';

import dynamic from 'next/dynamic';
import { useRef, useEffect, useState } from 'react';

const MapComponent = dynamic(
  () => import('./map-component'),
  { loading: () => <p>Loading map...</p> }
);

const AnalyticsDashboard = dynamic(
  () => import('./analytics-dashboard'),
  { loading: () => <p>Loading analytics...</p> }
);

export default function UserProfile({ params }) {
  const [showMap, setShowMap] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const mapRef = useRef(null);
  
  // Detect when user scrolls to map section
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setShowMap(true);
      }
    });
    
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <h1>User Profile</h1>
      <Profile user={params.userId} />
      
      <div ref={mapRef}>
        {showMap && <MapComponent />}
      </div>
      
      <button onClick={() => setShowAnalytics(true)}>
        Show Analytics
      </button>
      {showAnalytics && <AnalyticsDashboard />}
    </>
  );
}
```

Result:
- Map loads only when user scrolls to it
- Analytics loads only when user clicks button
- Initial page loads faster"

**Follow-up:** "What if user never scrolls to map?"
- "Map code is never downloaded. Saves bandwidth and loading time."

---

## **Q4: What's prefetching and why does Next.js do it automatically?**

**Answer:**

"Prefetching means loading resources before user needs them. Next.js Link component prefetches automatically.

For OTA flight search:

```javascript
// app/flights/page.js
import Link from 'next/link';

export default function FlightsList({ flights }) {
  return (
    <div>
      {flights.map(flight => (
        <Link key={flight.id} href={`/flights/${flight.id}`}>
          <FlightCard flight={flight} />
        </Link>
      ))}
    </div>
  );
}
```

When user hovers over Link:
1. Next.js detects hover
2. Prefetches `/flights/[id]` page in background
3. Page downloads silently
4. User clicks link
5. Page already loaded - instant navigation!

No manual code needed. Link does it automatically on:
- Hover
- Touch (mobile)
- Visible in viewport

Benefits:
- Navigation feels instant
- User sees 0 loading delay
- Better perceived performance

You can control:
```javascript
<Link href="/flights" prefetch={false}>
  No prefetch (for rarely used links)
</Link>

<Link href="/flights" prefetch={true}>
  Always prefetch (even on slow networks)
</Link>
```

For OTA: Every Link prefetches by default, so users experience fast navigation."

---

## **Q5: How do you optimize bundle size? What tools do you use?**

**Answer:**

"Bundle size = amount of JavaScript sent to browser. Larger bundle = slower load.

For OTA, you might have:
- React (40kb)
- Next.js runtime (30kb)
- Your code (50kb)
- Libraries (50kb)
= 170kb total

To optimize:

**1. Analyze what's in bundle:**
```bash
npm install --save-dev @next/bundle-analyzer

# In next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

# Run: ANALYZE=true npm run build
# See visual breakdown of all packages
```

**2. Find heavy packages:**

```
lodash: 70kb → replace with lodash-es
moment: 65kb → replace with dayjs
```

**3. Remove unused code:**

```javascript
// ❌ Imports entire lodash
import _ from 'lodash';
_.map(items, item => item.id);

// ✅ Import only what you need (tree-shake)
import { map } from 'lodash-es';
map(items, item => item.id);
```

**4. Dynamic imports:**

```javascript
// Don't import at top if not needed immediately
import heavy from 'heavy-lib';

// Instead, import when needed
const heavy = await import('heavy-lib');
```

**5. Next.js auto-optimizations:**

- Code splitting by route
- Minification
- Tree-shaking
- Image optimization
- Dead code elimination

For OTA: Initial bundle should be <100kb (gzipped). After optimization, typically 40-60kb."

**Follow-up:** "What's gzipped?"
- "Servers compress JavaScript before sending. 60kb becomes 20kb over network. Browser decompresses it."

---



## **CACHING & DEPLOYMENT**

---

## **Q9: What are the different caching strategies in Next.js?**

**Answer:**

"Next.js has multiple caching layers. Understanding them is key to performance.

**1. Data Cache (Fetch Cache)**

```javascript
// app/flights/page.js

export default async function Flights() {
  // Data cached indefinitely by default
  const flights = await fetch('https://api.flights.com/flights');
  
  // Cache for 1 hour
  const hotels = await fetch('https://api.hotels.com/hotels', {
    next: { revalidate: 3600 }
  });
  
  // Don't cache
  const prices = await fetch('https://api.prices.com/live', {
    cache: 'no-store'
  });
  
  return <div>{flights}</div>;
}
```

**2. Router Cache (Browser)**

When user navigates to `/flights`, Next.js caches the page. Clicking back, it shows cached version instantly.

```javascript
// Revalidate router cache on route change
revalidatePath('/flights');
```

**3. Full Route Cache (Static Generation)**

```javascript
// app/faq/page.js
export const revalidate = 3600;  // ISR - cache 1 hour

export default function FAQ() {
  return <div>FAQs</div>;
}
```

Page built at build time, served as static HTML.

**4. Image Cache**

Next.js Image component caches optimized images.

```javascript
<Image 
  src="/flight.jpg" 
  alt="Flight"
  width={400}
  height={300}
  priority={false}  // Lazy load
/>
```

For OTA caching strategy:

```
Flight Search (/flights?from=DEL&to=BOM):
  - SSR, revalidate every 30 minutes
  - Prices change often, can't be static
  - User gets fresh results

Trending Flights (/trending):
  - ISR, revalidate every 60 minutes
  - Popular flights shown to everyone
  - Static HTML for speed, updates hourly

FAQ Page (/faq):
  - SSG, revalidate daily
  - Static content, never changes
  - Served as static file

User Bookings (/bookings):
  - No cache, always fresh
  - User-specific data
  - Fetched on every request
```

**Follow-up:** "When do you use which strategy?"
- "Static (SSG) for content that rarely changes. ISR for content that changes slowly. SSR/no-cache for real-time data."

---

## **Q10: How do you deploy Next.js to Vercel?**

**Answer:**

"Vercel is optimal hosting for Next.js (made by same team).

**1. Push code to GitHub:**

```bash
git push origin main
```

**2. Connect to Vercel:**

- Go to vercel.com
- Click 'New Project'
- Select your GitHub repo
- Click 'Import'

**3. Set environment variables:**

```
In Vercel dashboard:
- Settings → Environment Variables
- Add DATABASE_URL=postgresql://...
- Add JWT_SECRET=xxx
- Add STRIPE_SECRET_KEY=xxx
```

**4. Deploy automatically:**

```
- Push to main branch
- Vercel automatically builds and deploys
- Live in ~2 minutes
```

**5. Preview deployments:**

```
- Push to feature branch
- Vercel creates preview deployment
- PR shows preview link
- Test before merging to main
```

For OTA:

```
Production (vercel.com/mmt-ota):
- from main branch
- all environment variables set
- real database
- real Stripe API

Staging (staging.mmt-ota.vercel.app):
- from staging branch
- test environment variables
- test database
- test Stripe API

Preview (per PR):
- from feature branches
- test-specific changes
- test database
- full isolated environment
```

Vercel benefits:
- Zero-config deployment
- Automatic HTTPS
- Global CDN (fast everywhere)
- Automatic image optimization
- Built-in analytics
- Automatic rollback if build fails"

**Follow-up:** "What if deployment fails?"
- "Vercel automatically rolls back to previous version. You can also manually revert from dashboard."



# Question 21: SSR vs. SSG vs. ISR vs. CSR — when would you use each?

## 1. Understanding the four rendering strategies

In React and Next.js, rendering strategy determines where and when HTML is generated and how the browser receives the page.

The four main approaches are:

- SSR (Server-Side Rendering): Generate HTML on the server for each request.
- SSG (Static Site Generation): Generate HTML at build time.
- ISR (Incremental Static Regeneration): Generate static pages and refresh them periodically or through on-demand revalidation.
- CSR (Client-Side Rendering): Generate or update the main UI in the browser using JavaScript.

Each approach has different trade-offs involving freshness, performance, SEO, server load, and interactivity.

## 2. SSR — Server-Side Rendering

With SSR, the server generates HTML for a page when a request arrives.

### How it works

1. A user requests a page.
2. The server fetches the required data.
3. The server renders HTML using that data.
4. The browser receives and displays the HTML.
5. Client-side JavaScript hydrates interactive components when required.

### Example: Hotel availability page

Suppose a user searches for hotels in Goa for specific dates.

The available hotels and prices may change frequently depending on inventory, occupancy, and pricing rules.

With SSR, the server can fetch the relevant data for the incoming request and render the page using that data.

```
// Conceptual Next.js App Router example
export default async function HotelsPage({ searchParams }) {
  const { destination, checkIn, checkOut } =
    await searchParams;

  const hotels = await searchHotels({
    destination,
    checkIn,
    checkOut,
  });

  return <HotelList hotels={hotels} />;
}
```

This example assumes the search function runs on the server and the relevant page uses a dynamic rendering strategy where needed. Actual rendering behavior depends on the Next.js version, configuration, caching, and data access.

### ✅ Advantages

- Faster initial content: Users can see page content before all JavaScript finishes loading.
- SEO-friendly: Search engines can read page content directly from the HTML.
- Fresh data: The server can fetch the latest data for each request.
- Best for dynamic pages: Useful for hotel search results where prices and availability can change.

### ❌ Disadvantages

- Slower server response: Fetching data and generating HTML can take time.
- More server work: The server needs to process incoming requests.
- Higher resource usage: Heavy traffic can put more load on the server.
- Still needs JavaScript: Interactive features, like filters and buttons, may need hydration before they work.

### When would I use SSR?

I would consider SSR for pages where data depends on the incoming request or needs to be relatively fresh, such as hotel availability, personalized pricing, or search results.

However, SSR does not guarantee that every value is perfectly up to date. Data caching, database consistency, and inventory updates still matter.

## 3. SSG — Static Site Generation

With SSG, HTML is generated ahead of time, typically during the production build.

The generated files can then be served through a CDN without rendering the entire page for each request.

### How it works

1. The application builds the page using available data.
2. HTML is generated during the build.
3. The resulting page is deployed to static hosting or a CDN.
4. Users receive the pre-generated page.

### Example: Hotel destination guide

Imagine a hotel booking website has editorial pages such as:

- Best hotels in Jaipur.
- Things to do in Goa.
- Best beach resorts in Kerala.

These pages might change only occasionally.

```
// Conceptual static page
export default function GoaGuide({ hotels }) {
  return <HotelList hotels={hotels} />;
}
```

The page can be generated at build time using a framework's static-generation mechanism.

### Advantages

- Very fast responses when served from a CDN.
- Low per-request server rendering cost.
- Good SEO when the generated HTML contains meaningful content.
- Predictable performance under high traffic.

### Disadvantages

- Content can become outdated after the build.
- Generating every possible dynamic URL at build time may be impractical.
- Frequently changing data requires a separate freshness strategy.

### When would I use SSG?

I would use SSG for content that changes infrequently, such as destination guides, marketing pages, documentation, and static informational pages.

It is less suitable when every request needs fresh availability or user-specific information.

## 4. ISR — Incremental Static Regeneration

ISR combines the performance benefits of static pages with a mechanism for refreshing them after deployment.

Instead of rebuilding the entire application whenever data changes, selected pages can be regenerated periodically or revalidated on demand.

### How it works

1. A page is generated and cached.
2. Requests receive the cached version.
3. After the configured revalidation interval or an explicit revalidation event, the page can be regenerated.
4. Updated content becomes available according to the framework's revalidation behavior.

### Example: Hotel destination listing

Suppose a destination page displays popular hotels, descriptions, and general ratings. These details do not need to be regenerated for every request.

```
// app/destinations/goa/page.jsx
export const revalidate = 300;

export default async function GoaPage() {
  const hotels = await getPopularHotels("Goa");

  return <HotelList hotels={hotels} />;
}
```

In a compatible Next.js App Router configuration, this declares a five-minute revalidation interval for the route's cached output and relevant data behavior. Actual caching depends on the route, data-fetching configuration, deployment platform, and Next.js version.

### Advantages

- Fast responses from cached pages.
- Less rendering work per request than uncached SSR.
- Content can refresh without a complete application rebuild.
- Useful for high-traffic pages with moderately changing content.

### Disadvantages

- Cached content may temporarily be stale.
- Revalidation behavior can be more complex than pure SSG.
- It is not automatically appropriate for every data source.
- Strictly time-sensitive data needs a more explicit freshness strategy.

### When would I use ISR?

I would consider ISR for popular destination pages, property detail pages, category pages, and other content that can tolerate a controlled amount of staleness.

For exact room availability or final booking prices, I would generally fetch or validate the authoritative data when needed rather than relying only on a periodically regenerated page.

## 5. CSR — Client-Side Rendering

With CSR, the browser executes JavaScript to render or update the UI. Data may be fetched from an API after the application loads.

### How it works

1. The browser downloads the HTML and JavaScript.
2. JavaScript executes to render the UI.
3. The application fetches data from an API.
4. The UI updates when the response arrives.

### Example: User dashboard

A signed-in user opens their booking dashboard to view upcoming trips and recent activity.

```
"use client";

import { useEffect, useState } from "react";

export default function BookingDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      try {
        const response = await fetch("/api/bookings");
        if (!response.ok) {
          throw new Error("Failed to load bookings");
        }

        const data = await response.json();
        setBookings(data);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return <BookingList bookings={bookings} />;
}
```

This is a simplified example. A production dashboard should also handle request errors, authentication, stale responses, and suitable data caching.

### Advantages

- Good for highly interactive interfaces.
- Supports client-side state updates without reloading the entire page.
- Can use client-side data-fetching and caching libraries.
- Well suited to private, personalized application interfaces.

### Disadvantages

- The initial UI may be delayed while JavaScript executes and data loads.
- Large client bundles can hurt responsiveness.
- SEO may be less reliable if important content is absent from the initial HTML.
- The browser must perform rendering and data-fetching work.

### When would I use CSR?

I would use CSR for highly interactive dashboards, internal admin tools, live filters, and interfaces where client-side state and frequent updates are central.

However, a dashboard can also use SSR or Server Components for its initial content and then use client-side rendering for interactions. These approaches are not mutually exclusive at the page level.

## 6. SSR vs. SSG vs. ISR vs. CSR: comparison

| Feature                         | SSR                                 | SSG                              | ISR                                                     | CSR                                        |
| ------------------------------- | ----------------------------------- | -------------------------------- | ------------------------------------------------------- | ------------------------------------------ |
| When is the main HTML rendered? | Per request                         | At build time                    | Initially at build time or generation, then regenerated | Primarily in the browser                   |
| Data freshness                  | Can be fresh per request            | Usually fixed until rebuilt      | Updated through revalidation                            | Updated through client fetches             |
| Initial response speed          | Depends on server and data fetching | Usually very fast                | Usually very fast for cached pages                      | May be delayed by JavaScript and API calls |
| Server workload                 | Rendering may occur per request     | Low per-request rendering cost   | Lower when serving cached pages                         | API/backend still performs data work       |
| SEO                             | Good with meaningful server HTML    | Good with meaningful static HTML | Good with meaningful generated HTML                     | Requires more care for important content   |
| Personalized request data       | Suitable                            | Not inherently request-specific  | Not inherently request-specific                         | Suitable after client-side data fetching   |
| Common use case                 | Search results requiring fresh data | Marketing and static content     | Popular pages with tolerable staleness                  | Interactive private dashboards             |

One important distinction: rendering strategy and caching strategy are related but separate concepts. An SSR page may use cached data, and a page that uses client-side rendering may also use a caching library.

## 7. Which would I pick for a hotel listing page, and why?

I would choose based on what the listing page displays and how frequently its data changes.

For a hotel search page that depends on the destination, travel dates, guest count, room availability, and current prices, I would generally favor server-rendered results with a deliberate data-fetching and caching strategy.

My reasoning:

1. Search parameters are known from the incoming request or URL.
2. Useful hotel information can be present in the initial HTML.
3. Search results can be indexed where the URL and content are intended to be indexable.
4. The application can retrieve relevant inventory and pricing data for the search.
5. Client-side interactions can then update filters, sorting, and selected options.

However, I would not necessarily perform every operation through uncached SSR.

A practical design could combine multiple strategies:

- SEO destination pages: SSG or ISR for popular, relatively stable landing pages.
- Date-specific hotel search: SSR or another server-backed rendering approach with appropriate data freshness.
- Interactive filters and sorting: Client-side state for fast interactions, with server requests when needed.
- Final room availability and booking price: Revalidate against the authoritative backend before booking.

For example, a page at `/hotels/goa` might be generated using ISR, while `/hotels/goa?checkIn=...&checkOut=...` may need request-specific search data.

The correct choice depends on whether the page is a stable destination landing page or a live inventory search.

## 8. Which would I pick for a user dashboard?

For a personalized dashboard, I would usually use a hybrid approach: server-render the initial shell and, where useful, initial user-specific data, then use client-side rendering and data caching for interactive sections.

For example:

- Upcoming bookings can be fetched on the server and rendered in the initial HTML.
- Filters and tab selection can use client-side state.
- Booking status updates can be refreshed through a client-side data-fetching library.
- Charts can be loaded on demand if they are not immediately visible.

Why not use SSG or ISR for the entire personalized dashboard?

A shared static page cannot safely contain user-specific booking information. Personalized data must be fetched and cached with appropriate user isolation to avoid exposing one user's data to another.

CSR can work well for dashboards, especially when the content is private and the initial HTML does not need to contain all the data. But using CSR for everything can delay the initial useful content, so a hybrid approach is often preferable.

My interview answer: For a dashboard, I would prioritize authentication, data isolation, interactivity, and responsive updates. I would use Server Components or SSR for the initial content where beneficial and client-side fetching for interactive or frequently refreshed sections.

## 9. How does this map to Next.js App Router?

In modern Next.js, these are useful mental models, but actual behavior depends on route configuration, caching, and the framework version.

- Server Components are the default in the App Router and execute on the server. They do not automatically mean that a route is rendered dynamically on every request.
- Client Components enable browser-side state, event handlers, and effects. They can still participate in server-generated initial HTML in supported configurations.
- Static rendering allows route output to be generated and reused.
- Dynamic rendering is used when request-specific information or other dynamic behavior requires it.
- Revalidation lets eligible cached data or route output be refreshed.
- Streaming and Suspense can let parts of a page appear while other parts are still loading.

A page may combine server-rendered data, static content, and interactive client components rather than following one rendering strategy exclusively.

## 10. Common interview follow-up questions

### Q1. Is SSR always better for SEO than CSR?

SSR makes meaningful content available in the initial HTML, which can make crawling more straightforward. However, search engines can also process JavaScript in many cases. The best strategy depends on the content, crawlability, rendering cost, and SEO requirements.

### Q2. Does ISR guarantee fresh data on every request?

No. ISR is designed to reuse generated output and refresh it through revalidation. A visitor may receive cached content that is not the latest version. Data requiring strict freshness should use an appropriate validation or fetching strategy.

### Q3. Can a page use SSR and CSR together?

Yes. A page can deliver initial HTML from the server and then use client-side JavaScript for interactions, filtering, sorting, and subsequent data updates.

### Q4. Why not use SSR for every page?

SSR can add server workload and increase TTFB when data fetching or rendering is slow. Stable content can often be served faster and more economically through static generation or caching.

### Q5. Can CSR be used for SEO-sensitive pages?

It can, but it requires careful consideration of crawlability, initial HTML, metadata, and content rendering. For important public landing pages, server-rendered or statically generated HTML is often the simpler and more predictable choice.

### Q6. What is the difference between SSG and ISR?

SSG generates static output ahead of time and generally keeps it until a new build or update. ISR adds a mechanism to regenerate eligible output after deployment without rebuilding the entire site.

## 11. One-line interview answer

“I choose SSR for request-specific or freshness-sensitive pages, SSG for stable content, ISR for frequently visited pages that can tolerate controlled staleness, and CSR for highly interactive client-driven experiences. For a hotel listing, I would combine server-rendered search results with client-side filters and authoritative availability checks; for a user dashboard, I would use a hybrid approach with server-rendered initial data and client-side updates.”

Key takeaway: Choose rendering based on data freshness, personalization, SEO, interactivity, and cost—not by assuming one strategy is always faster or better.



# Q22. What is hydration, and why can it become a performance bottleneck?

## 1. What is hydration?

Interview answer:

Hydration is the process where React attaches event handlers to server-rendered HTML and makes the page interactive.

For example, in Next.js, the server sends HTML to the browser first. The user can see the page, but interactive features like buttons need JavaScript to work. React hydrates the HTML to enable those interactions.

## 2. How does hydration work?

1. The server generates HTML.
2. The browser displays the HTML.
3. JavaScript downloads and executes.
4. React hydrates the page.
5. The page becomes interactive.

## 3. Why can hydration become a performance bottleneck?

Hydration can be slow when the browser has too much JavaScript to execute or too many components to initialize.

Common reasons are:

- Large JavaScript bundles: Too much JavaScript takes longer to download and execute.
- Too many Client Components: More components need client-side JavaScript.
- Expensive calculations: Heavy operations delay the browser.
- Main-thread blocking: JavaScript execution can delay clicks, scrolling, and typing.

How do you optimize it?

I would reduce unnecessary JavaScript, use Server Components where possible, lazy-load heavy components, and optimize expensive operations.

## 4. How does hydration affect Core Web Vitals?

- LCP: Heavy JavaScript can delay the main content from appearing.
- INP: Heavy JavaScript can delay user interactions.
- CLS: Hydration mismatches or layout changes can cause visual shifts.

Hydration does not automatically cause performance problems. It becomes an issue when too much work is required on the browser.

## 5. What is a hydration mismatch?

A hydration mismatch happens when the HTML generated by the server does not match the initial UI rendered by React in the browser.

### Common causes

- `Date.now()` — server and browser may generate different times.
- `Math.random()` — server and browser may generate different values.
- `localStorage` or `window` — browser-specific data may differ from server output.
- Invalid HTML nesting — the browser may change the HTML structure.
- Different data — the server and client may render different content.

How do you fix it?

I would make sure the server and the initial client render produce the same output. For browser-specific data, I can read it inside `useEffect` when appropriate.

## 6. How do you debug hydration errors in Next.js?

I would check the error message, compare the server and client output, look for browser-specific APIs or changing values, and verify that the initial data is consistent.

## 7. Common interview follow-up questions

Q. Is hydration the same as rendering?

No. Rendering creates the UI, while hydration makes server-rendered HTML interactive.

Q. Does SSR eliminate JavaScript?

No. Interactive React components still need client-side JavaScript.

Q. How do you reduce hydration cost in Next.js?

I use Server Components for static UI, reduce unnecessary JavaScript, lazy-load heavy components, and minimize client-side work.

Q. Can hydration mismatches affect performance?

Yes. They can cause extra rendering work, warnings, and unexpected visual changes.

Q. Should we use `useEffect` to fix every hydration mismatch?

No. The best solution is to keep the initial server and client output consistent. `useEffect` is useful when browser-specific data needs to be applied after hydration.


# 25. What is Streaming, and Where Do `Suspense` and `loading.tsx` Help?

## 1. What is Streaming in Next.js?

Streaming allows the server to send a page to the browser in smaller chunks as parts of the UI become ready, instead of waiting for the entire page to finish rendering.

Without streaming, a slow data request for one section can delay the delivery of other content if the rendering path waits for that request.

With streaming, Next.js can send the initial page shell and ready content first, then deliver slower sections as they finish rendering.

### Example: Hotel search page

Suppose a hotel search page contains:

- Search filters
- Hotel listing results
- Personalized recommendations
- Customer reviews

The hotel listing data might be available quickly, while recommendations take two seconds to load.

Without an appropriate streaming boundary, the slow recommendations can delay content that could otherwise be displayed earlier.

With streaming, the browser can receive the page shell and available content while recommendations are still loading.

Benefits:

- Users see useful content sooner.
- Slow sections don't necessarily block the entire page.
- Loading states can be displayed for individual sections.
- Perceived performance improves even when the total data-fetching time remains unchanged.

Streaming doesn't automatically make the backend faster. It allows the application to deliver available content without waiting for every section.

## 2. What is `Suspense`?

`Suspense` is a React component that lets you define a fallback UI to display while its children are not ready to render.

For example:

```
import { Suspense } from "react";
import HotelRecommendations from "./HotelRecommendations";

export default function HotelPage() {
  return (
    <main>
      <h1>Available Hotels</h1>

      <Suspense fallback={<p>Loading recommendations...</p>}>
        <HotelRecommendations />
      </Suspense>
    </main>
  );
}
```

If `HotelRecommendations` suspends while waiting for supported asynchronous work, React can show the fallback until that section is ready.

### How does it work?

1. React encounters a Suspense boundary.
2. If its children suspend, React renders the fallback for that boundary.
3. The server can stream other ready content without waiting for that section.
4. When the suspended content is ready, React can send the completed section to the browser.

The exact behavior depends on the rendering environment and how the child suspends.

Important: `Suspense` does not automatically handle every asynchronous operation. For example, starting a fetch inside an ordinary `useEffect` does not, by itself, make that component suspend. Use a supported Suspense-enabled data source or an appropriate framework mechanism.

## 3. What is `loading.tsx` in Next.js?

`loading.tsx` is a special file in the Next.js App Router that provides a route-segment loading UI.

Next.js automatically integrates it with a Suspense boundary around the relevant page content, allowing the loading UI to appear while that content is being prepared.

Example folder structure:

```
app/
└── hotels/
    ├── loading.tsx
    ├── page.tsx
    └── HotelList.tsx
```

`app/hotels/loading.tsx`

```
export default function Loading() {
  return (
    <div>
      <p>Finding the best hotels for you...</p>
    </div>
  );
}
```

`app/hotels/page.tsx`

```
import HotelList from "./HotelList";

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <main>
      <h1>Available Hotels</h1>
      <HotelList hotels={hotels} />
    </main>
  );
}
```

When the route's page content suspends during rendering, Next.js can show the loading UI while the content is prepared.

This is particularly useful for route navigation and pages that perform server-side data fetching.

### What does `loading.tsx` actually improve?

- Provides immediate feedback during navigation.
- Helps users understand that content is loading rather than assuming the page is frozen.
- Enables streaming behavior around the route segment.
- Can make transitions feel faster even if the underlying request takes the same amount of time.

One limitation: layouts shared by the route are not replaced by the route's `loading.tsx`. Also, work that blocks before the relevant boundary can render may delay the fallback itself.

## 4. `Suspense` vs. `loading.tsx`

| Feature     | `Suspense`                                    | `loading.tsx`                                        |
| ----------- | --------------------------------------------- | ---------------------------------------------------- |
| Type        | React component                               | Next.js special file convention                      |
| Purpose     | Defines a fallback for a specific UI boundary | Defines a loading UI for a route segment             |
| Scope       | Can wrap an individual component or section   | Applies automatically to the relevant route segment  |
| Granularity | Fine-grained control                          | Route-level loading experience                       |
| Typical use | Recommendations, reviews, analytics panels    | Hotel search route or dashboard navigation           |
| Fallback    | Supplied through the `fallback` prop          | Exported as the default component from `loading.tsx` |

Interview takeaway: Use `loading.tsx` for route-level loading states and `Suspense` for more granular loading boundaries within a page.

## 5. When should you use `Suspense` boundaries?

Use separate boundaries when sections have different loading times and can be displayed independently.

For example, a hotel details page might render its title and basic information immediately while reviews and recommendations load separately.

```
import { Suspense } from "react";
import Reviews from "./Reviews";
import Recommendations from "./Recommendations";

export default function HotelDetailsPage() {
  return (
    <main>
      <h1>Grand Palace Hotel</h1>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<p>Loading recommendations...</p>}>
        <Recommendations />
      </Suspense>
    </main>
  );
}
```

This lets each section reveal its content independently when the rendering architecture supports streaming.

Avoid creating excessive boundaries without a clear UX reason. Too many unrelated loading states can make the page feel fragmented.

## 6. Common performance mistakes

- Waiting for every request before returning JSX: This can delay the first useful streamed content.
- Putting all content under one large Suspense boundary: One slow section may keep all content inside that boundary in its fallback state.
- Using an empty or unhelpful fallback: A meaningful skeleton can better communicate the expected layout.
- Assuming streaming reduces server latency: It changes delivery and rendering behavior; it does not inherently make the data source faster.
- Ignoring layout shifts: Loading skeletons should resemble the final content dimensions to avoid unnecessary CLS.
- Placing a boundary too late: If expensive or blocking work happens before React reaches the boundary, the fallback may not appear early enough.

## 7. Common interview follow-up questions

Q1. Does streaming improve LCP?

It can, particularly when the LCP element can be delivered earlier instead of waiting for unrelated slow content. But if the LCP element itself depends on a slow request, streaming other sections might not materially improve LCP.

Q2. Does streaming reduce total page-rendering time?

Not necessarily. It can improve when users receive useful content, even when the total time needed to finish rendering remains the same.

Q3. Can I use `Suspense` without Next.js?

Yes. `Suspense` is a React feature. Next.js adds framework-level integration, including the `loading.tsx` convention.

Q4. Does `loading.tsx` replace `Suspense`?

No. Next.js uses Suspense boundaries to support its route-level loading UI. You can still use additional Suspense boundaries for independently loading sections.

Q5. Can streaming work with Server Components?

Yes. Server Components can suspend while server-side data is being prepared, allowing the framework to stream ready UI and fallbacks as appropriate.

## 8. One-line interview answer

Streaming lets Next.js deliver ready UI progressively rather than waiting for the entire page; `Suspense` defines loading boundaries for individual sections, while `loading.tsx` provides a route-level loading experience, improving perceived performance and allowing users to interact with available content sooner.


# 27. How would you handle SEO and performance together on dynamic pages?

The challenge with dynamic pages is to make content discoverable by search engines, fast to load, and up to date without generating a separate static page for every possible URL.

For example, on a hotel booking website, pages such as `/hotels/goa`, `/hotels/goa/beach-resorts`, and `/hotels/123` need relevant content and metadata, while availability and prices may change frequently.

My approach is to choose the right rendering strategy, generate meaningful metadata, control duplicate URLs, and optimize data fetching and caching together.

## 1. Choose the right rendering strategy

Different pages have different SEO and freshness requirements.

| Page type                     | Recommended approach                                         | Reason                                                                    |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Marketing or destination page | SSG or ISR                                                   | Content is relatively stable and can be served quickly                    |
| Hotel detail page             | SSG/ISR where suitable, or SSR for request-dependent content | Supports indexing while balancing freshness                               |
| Search results page           | SSR or a carefully designed hybrid approach                  | Search parameters and inventory can change                                |
| Logged-in booking dashboard   | Usually CSR or server-rendered personalized content          | Requires user-specific data and generally isn't a public SEO landing page |

The key is to avoid using one rendering strategy for every route.

- SSG: Generates HTML ahead of time.
- ISR: Allows statically generated content to be revalidated.
- SSR: Generates HTML at request time when fresh or request-specific content is needed.
- CSR: Renders or updates content in the browser; useful for interactive features, but relying on it for all important public content can complicate SEO.

In the Next.js App Router, Server Components can be used with these rendering strategies; they are not themselves a separate alternative to SSR.

## 2. Generate meaningful, dynamic metadata

Every important public page should have an appropriate title, description, canonical URL, and other relevant metadata.

For example, the Goa hotel listing page should not use the same generic title as every other destination.

In Next.js App Router:

```
// app/hotels/[city]/page.jsx

export async function generateMetadata({ params }) {
  const { city } = await params;
  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Hotels in ${formattedCity} | Find Your Stay`,
    description:
      `Explore hotels in ${formattedCity}, compare amenities, and find a stay that suits your trip.`,
    alternates: {
      canonical: `https://example.com/hotels/${city}`,
    },
  };
}

export default async function CityHotelsPage({ params }) {
  const { city } = await params;
  const hotels = await getHotelsByCity(city);

  return (
    <main>
      <h1>Hotels in {city}</h1>
      {/* Render hotel results */}
    </main>
  );
}
```

This is an illustrative example; in production, normalize and validate the route parameter and construct canonical URLs from a trusted site origin.

Important: Metadata generation may require fetching data. If that work is slow, it can delay metadata availability or the response behavior, depending on the rendering strategy and framework version. Avoid unnecessary duplicate data requests and use appropriate caching.

Also, metadata should accurately describe the actual page content. Avoid generating thousands of near-identical pages with only a city name changed.

## 3. Render important SEO content on the server

For public pages, make sure the primary content is available in the initial server-rendered HTML where practical.

For example, a hotel detail page should expose its:

- Hotel name and description.
- Location and amenities.
- Relevant images.
- Review information, when available.
- Links to related destination pages.

A search engine should not have to rely entirely on client-side JavaScript fetching before the main page content becomes available.

In Next.js, Server Components can fetch data and render this content on the server:

```
// app/hotels/[id]/page.jsx

export default async function HotelPage({ params }) {
  const { id } = await params;
  const hotel = await getHotelById(id);

  if (!hotel) {
    notFound();
  }

  return (
    <main>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p>{hotel.location}</p>
    </main>
  );
}
```

Use Client Components for interactions such as date selection, favorite buttons, and dynamic filters rather than making the entire page client-rendered unnecessarily.

Performance benefit: This can reduce the amount of JavaScript required to display primary content and improve the initial rendering experience.

## 4. Control duplicate URLs and indexing

Dynamic pages can generate a huge number of URLs through query parameters and filters.

For example:

```
/hotels/goa
/hotels/goa?sort=price
/hotels/goa?sort=rating
/hotels/goa?adults=2
/hotels/goa?adults=2&sort=price
```

Not every variation needs to be indexed as a separate search result.

I would:

1. Define which URL patterns represent valuable search landing pages.
2. Use canonical URLs for equivalent or duplicate content.
3. Apply appropriate `noindex` directives to pages that should not appear in search results.
4. Configure `robots.txt` thoughtfully, remembering that blocking crawling is not the same as guaranteeing a URL won't be indexed.
5. Provide an XML sitemap containing canonical URLs that should be indexed.
6. Use real links and sensible pagination for crawlable listing pages.

Canonical tags are hints to search engines, not guaranteed instructions. Also, don't canonicalize genuinely different pages to an unrelated page simply to reduce the number of URLs.

## 5. Optimize performance without serving stale data

SEO and performance are closely related, but optimizing one should not compromise the other.

For example, caching hotel descriptions for several minutes might be acceptable, while caching room availability for too long could show users outdated information.

A practical strategy:

| Data                             | Strategy                                                         |
| -------------------------------- | ---------------------------------------------------------------- |
| Destination descriptions         | Static generation or longer-lived caching                        |
| Hotel descriptions and amenities | Cache and revalidate when appropriate                            |
| Search result summaries          | Cache according to query and freshness requirements              |
| Live room availability           | Fresh data or short-lived caching, based on product requirements |
| Final booking price              | Revalidate on the server before confirming the booking           |

Avoid fetching the same data separately for page rendering and metadata generation when the framework can reuse or deduplicate the request.

Where possible, fetch independent data concurrently rather than creating unnecessary request waterfalls.

## 6. Improve Core Web Vitals

A page that is indexable can still provide a poor user experience if it loads slowly or responds sluggishly.

I would measure and optimize:

- LCP: Prioritize the main content and hero image; avoid delaying the LCP image with lazy loading.
- INP: Reduce expensive JavaScript, unnecessary React re-renders, and long-running event handlers.
- CLS: Reserve space for images, advertisements, and asynchronously loaded content.

Other useful optimizations include code splitting, responsive images with `next/image`, font optimization, CDN delivery, and caching.

Validate changes with Lighthouse for lab diagnostics and real-user monitoring for field performance. Passing a Lighthouse audit alone does not guarantee good real-user Core Web Vitals.

## 7. Use structured data where appropriate

Structured data can help search engines understand the page's content and may make the page eligible for certain search-result enhancements.

For a hotel page, relevant structured data may include appropriate lodging, hotel, or offer information, provided it matches the actual content and Google's applicable guidelines.

Example of rendering JSON-LD:

```
export default function HotelStructuredData({ hotel }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.city,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
```

In production, validate and sanitize the input data, generate structured data that accurately reflects visible content, and avoid adding review ratings or prices that are not supported by the page.

Structured data does not guarantee rich results or higher rankings.

## 8. How I would approach this in an interview

For a dynamic hotel listing page, I would follow this sequence:

1. Identify the SEO requirement: Decide whether the route should be publicly indexed.
2. Choose rendering: Use SSG/ISR for suitable stable content and SSR where request-time data is necessary.
3. Render primary content: Make the important content available in the initial HTML where practical.
4. Generate metadata: Use unique titles, descriptions, and appropriate canonical URLs.
5. Control URL variations: Prevent duplicate or low-value parameter combinations from becoming an indexing problem.
6. Optimize loading: Use caching, parallel data fetching, responsive images, and limited client-side JavaScript.
7. Protect freshness: Revalidate important data and verify availability and pricing before booking.
8. Measure and validate: Check crawlability, rendered HTML, metadata, Core Web Vitals, and real-user performance.

## 9. Common interview follow-up questions

Q1. Is SSR always better for SEO than CSR?

No. Search engines can render JavaScript, but server-rendering important public content can make discovery and content availability more straightforward. The correct strategy depends on the page and its requirements.

Q2. Should every dynamic URL be indexed?

No. Index valuable pages with distinct content and search intent. Control duplicate, empty, and low-value URL variations.

Q3. Can aggressive caching hurt SEO?

It can if it serves outdated or incorrect content for too long. Choose cache policies according to how frequently the content changes and how accurate it must remain.

Q4. Does good Core Web Vitals performance guarantee better rankings?

No. Page experience is one consideration among many. Relevant content, crawlability, technical SEO, and other ranking signals remain important.

Q5. How would you handle pages with thousands of products or hotels?

Use server-side pagination or another crawlable navigation strategy, keep metadata and canonical URLs consistent, avoid exposing every filter combination as an indexable page, and optimize data retrieval and caching.

## 10. One-line interview answer

I handle SEO and performance together by choosing the right rendering strategy for each dynamic page, rendering important content on the server where appropriate, generating accurate metadata and canonical URLs, controlling duplicate pages, and optimizing caching and Core Web Vitals without sacrificing data freshness.



# 29. ★ How does TanStack Query (or SWR) improve performance?

## 1. What is React Query?

TanStack Query (formerly React Query) is a library for managing server state in React applications. It simplifies fetching, caching, synchronizing, updating, and refetching data from APIs.

Example: fetching users, displaying products, updating a profile, or deleting an order.

- `useQuery` → Fetch and read data.
- `useMutation` → Create, update, or delete data.
- Query cache → Reuse previously fetched data.
- Automatic refetching → Refresh data when certain events occur.

## 2. How to implement it in a React project

Install the library:

```
npm install @tanstack/react-query
```

Wrap your application with `QueryClientProvider`, usually in `main.jsx`:

```
import { QueryClient, QueryClientProvider }
  from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
```

Now any child component can use TanStack Query hooks.

## 3. Old way vs. TanStack Query

| Traditional React (`useEffect`)                 | TanStack Query                                  |
| ----------------------------------------------- | ----------------------------------------------- |
| Manage loading, error, and data states manually | Built-in status and data states                 |
| Fetch using `useEffect`                         | Fetch using `useQuery`                          |
| Implement caching yourself                      | Automatic query caching                         |
| Handle duplicate requests yourself              | Shares cached queries with the same key         |
| Manually refetch or refresh data                | Automatic and manual refetching                 |
| Manually synchronize updated API data           | Mutations, invalidation, and refetching support |

Traditional approach:

```
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/api/users")
    .then(res => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    })
    .then(setUsers)
    .catch(console.error)
    .finally(() => setLoading(false));
}, []);
```

TanStack Query approach:

```
import { useQuery } from "@tanstack/react-query";

function Users() {
  const {
    data: users,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    staleTime: 60_000,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <button onClick={() => refetch()}>
        Refresh
      </button>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
```

The query approach handles caching and refetching for you, while you still define the API request and UI states.

## 4. Main interview concepts

`useQuery`

Fetches and reads server data. Returns values such as `data`, `error`, `isPending`, `isError`, `isFetching` and `refetch`.

```
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

`queryKey`

Uniquely identifies cached data. It must include variables that affect the query result.

```
queryKey: ["user", userId]
```

Different IDs mean different cache entries. Changing the key automatically updates the query.

`staleTime` — How long data is fresh

```
staleTime: 60_000 // 1 minute
```

Data remains fresh for one minute. Once stale, it becomes eligible for automatic refetching on triggers such as mounting, window focus, or reconnection. Stale does not mean deleted.

`gcTime` — How long inactive cache remains

```
gcTime: 5 * 60 * 1000
```

After a query has no active observers, its cached data is eligible for garbage collection after five minutes by default.

Interview trap: `staleTime` controls freshness; `gcTime` controls the lifetime of unused cache. `cacheTime` was the old name before v5.

`refetch` and `invalidateQueries`

```
refetch(); // Manually rerun this query
```

```
queryClient.invalidateQueries({
  queryKey: ["users"],
});
```

Invalidation marks matching queries stale and normally triggers a background refetch for active queries. Use invalidation when data may have changed after a mutation.

`useMutation` — Create, update, delete

```
const mutation = useMutation({
  mutationFn: updateUser,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["users"],
    });
  },
});

mutation.mutate(updatedUser);
```

Common properties: `mutate`, `mutateAsync`, `isPending`, `isError`, `isSuccess`. Use `onSuccess` to refresh affected query data.

## 5. Other commonly asked features

- `enabled` — Run a query only when a condition is true, such as when `userId` exists.
- `refetchInterval` — Poll an API periodically, e.g. every 5 seconds.
- `select` — Transform or select a subset of the returned data.
- `retry` — Configure retries after a failed request.
- `invalidateQueries` — Mark cached results stale, commonly after mutations.
- `isPending` vs. `isFetching` — `isPending` indicates no successful data is available yet; `isFetching` indicates a request is currently running, including background refetches.
- `isLoading` — In v5, this is essentially `isPending && isFetching`, useful for the initial loading state.
- `enabled: false` — Disables automatic query execution; you can still trigger `refetch()` manually.

## 6. Benefits to remember

1. Less boilerplate than manually managing `useEffect` and multiple state variables.
2. Automatic caching and request deduplication.
3. Better loading, error, and background-refresh handling.
4. Synchronization between components using the same query key.
5. Easier data refresh after creating, updating, or deleting records.
6. Configurable retries, polling, and cache lifetimes.

One-line interview answer: TanStack Query is a server-state management library that simplifies API fetching, caching, background synchronization, and mutations in React, reducing the need to manually manage these concerns with `useEffect`.

They improve performance by reusing cached data, avoiding duplicate requests, managing background refetching, and keeping the UI responsive while data refreshes.

They are especially useful in applications such as hotel booking platforms, dashboards, and search pages, where users repeatedly view and update server data.

## 1. What problem do they solve?

Imagine a hotel listing page where users change filters, open a hotel detail page, and then return to the listing.

Without a server-state library, developers might repeatedly fetch the same data, manually manage loading and error states, and write custom logic to prevent duplicate requests.

TanStack Query and SWR provide built-in mechanisms for:

- Caching responses by query key.
- Sharing cached results between components.
- Deduplicating concurrent requests for the same query.
- Refetching stale data when appropriate.
- Managing loading, error, and background-fetching states.
- Updating the cache after mutations.
- Retrying failed requests according to configured policies.

They don't automatically make a slow API faster. They reduce unnecessary work and improve how the application manages and displays server data.

## 2. Example using TanStack Query

Consider a hotel availability component:

```
"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchHotels(city) {
  const response = await fetch(
    `/api/hotels?city=${encodeURIComponent(city)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return response.json();
}

export default function HotelList({ city }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotels", city],
    queryFn: () => fetchHotels(city),
    staleTime: 60_000,
  });

  if (isPending) return <p>Loading hotels...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <ul>
      {data.map((hotel) => (
        <li key={hotel.id} key={hotel.id}>
          {hotel.name}
        </li>
      ))}
    </ul>
  );
}
```

The example above illustrates the query configuration, but the list item should have only one `key` prop. The corrected line is:

```
<li key={hotel.id}>{hotel.name}</li>
```

Here, `queryKey: ["hotels", city]` identifies the cached data for that city. Different cities have different cache entries, while components using the same key can share the query's data and request lifecycle.

`staleTime: 60_000` means the data is considered fresh for 60 seconds after it is successfully updated. During that period, mounting another observer of the same query won't trigger a refetch solely because the cached data is stale—it isn't stale yet.

## 3. What are `staleTime` and `cacheTime` / `gcTime`?

These are two different concepts, and interviewers often expect you to explain the difference clearly.

- `staleTime` determines how long cached data is considered fresh.
- `gcTime` determines how long an inactive query remains in memory before it can be garbage-collected.

In TanStack Query v5, `cacheTime` was renamed to `gcTime`.

| Setting                | What it controls                                      | Typical default in TanStack Query v5 |
| ---------------------- | ----------------------------------------------------- | ------------------------------------ |
| `staleTime`            | How long data remains fresh                           | `0`                                  |
| `gcTime`               | How long inactive cached data is retained             | 5 minutes in the browser             |
| `refetchOnWindowFocus` | Refetches stale queries when the window regains focus | `true`                               |
| `refetchOnReconnect`   | Refetches stale queries after reconnection            | `true`                               |

Defaults can vary by environment and configuration. For example, the default `gcTime` during server rendering is different from the browser default.

### How `staleTime` works

Suppose hotel results are fetched at 10:00:00 and the query has:

```
staleTime: 60_000
```

The data is considered fresh for 60 seconds after it is successfully updated.

- At 10:00:20, another component uses the same query: the fresh cache can be reused without a refetch triggered by staleness.
- At 10:01:10, the data is stale.
- When a configured refetch trigger occurs, such as mounting an observer or returning to the browser tab, TanStack Query may refetch it.

Important: `staleTime` does not schedule a refetch to happen exactly when the timer expires. It controls freshness; refetch triggers are separate.

### How `gcTime` works

Imagine a user visits a hotel page and then navigates away.

When no component is observing that query, it becomes inactive. TanStack Query can retain its cached data for the configured `gcTime`.

If the user returns before garbage collection, the cached result may be reused immediately, with a background refetch if it is stale.

If the user returns after the inactive cache has been garbage-collected, the query generally needs to fetch its data again.

### Quick memory trick

- `staleTime` = When is the data considered old?
- `gcTime` = How long do we keep unused data in memory?

Setting a longer `staleTime` can reduce network requests. Setting a longer `gcTime` can improve cache reuse when users revisit pages, at the cost of retaining more inactive data in memory.

## 4. How do you avoid unnecessary refetches?

This is the practical part of the interview question.

### 1. Set an appropriate `staleTime`

The default `staleTime` is `0`, so data becomes stale immediately after being fetched. This doesn't mean it refetches continuously, but stale queries can refetch when relevant triggers occur.

For relatively stable hotel descriptions, a longer freshness period may be appropriate:

```
useQuery({
  queryKey: ["hotel", hotelId],
  queryFn: () => fetchHotel(hotelId),
  staleTime: 5 * 60 * 1000,
});
```

For rapidly changing availability, use a shorter freshness period based on product requirements.

### 2. Use stable and complete query keys

Query keys identify the data being requested. Include every variable that changes the result.

```
useQuery({
  queryKey: ["hotels", city, checkIn, checkOut],
  queryFn: () => fetchHotels({ city, checkIn, checkOut }),
});
```

This allows results for different cities and date ranges to be cached independently.

Avoid omitting important parameters from the key, as that can cause incorrect data reuse. Also avoid unnecessary key changes, which create separate cache entries.

### 3. Avoid unnecessary component remounts

Repeatedly unmounting and remounting components can trigger additional query lifecycle checks.

Keep component structure and keys stable where possible. When a component remounts, fresh cached data can still be reused, but stale data may trigger a refetch according to the query settings.

### 4. Configure refetch triggers intentionally

TanStack Query can refetch stale queries when a component mounts, the browser window regains focus, or the network reconnects.

If those requests are unnecessary for a particular query, adjust the relevant options:

```
useQuery({
  queryKey: ["hotel-amenities", hotelId],
  queryFn: () => fetchAmenities(hotelId),
  staleTime: 10 * 60 * 1000,
  refetchOnWindowFocus: false,
});
```

Use this only when the data can safely remain unchanged for that period. Disabling focus refetching globally may leave important information stale.

### 5. Debounce rapidly changing search parameters

If users type into a search box or rapidly change filters, don't immediately send a new request for every keystroke unless that behavior is required.

Debouncing the input can reduce requests. Query keys should use the settled search value, and obsolete requests should be cancelled where possible.

### 6. Reuse cache data after mutations

After a successful update, update the cache or invalidate the affected queries instead of unnecessarily refetching the entire application.

For example, after a user saves a hotel to favorites, update or invalidate the relevant favorite data rather than refreshing unrelated hotel descriptions and reviews.

### 7. Avoid duplicate fetching logic

If multiple components need the same server data, use the same query key and query client instead of creating separate independent `useEffect` fetching logic in every component.

TanStack Query can share the query's cached state and coordinate concurrent requests for the same query.

## 5. What about SWR?

SWR provides similar server-state features, using a cache key to identify data and a fetcher to retrieve it.

```
"use client";

import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch hotels");
    }

    return response.json();
  });

export default function HotelList() {
  const { data, error, isLoading } = useSWR(
    "/api/hotels?city=Goa",
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 2000,
    }
  );

  if (isLoading) return <p>Loading hotels...</p>;
  if (error) return <p>Could not load hotels.</p>;

  return data.map((hotel) => (
    <p key={hotel.id}>{hotel.name}</p>
  ));
}
```

SWR uses a stale-while-revalidate approach: it can return cached data while fetching fresh data in the background.

| Concept                  | TanStack Query                                      | SWR                                           |
| ------------------------ | --------------------------------------------------- | --------------------------------------------- |
| Data identification      | `queryKey`                                          | Cache key                                     |
| Freshness configuration  | `staleTime`                                         | Revalidation behavior and configuration       |
| Inactive cache retention | `gcTime` in v5                                      | Cache-provider and cache-management behavior  |
| Deduplication            | Coordinates requests for the same query             | `dedupingInterval` helps deduplicate requests |
| Mutations                | `useMutation`, query invalidation and cache updates | `useSWRMutation`, `mutate` and cache updates  |
| Common use               | Rich server-state management and complex workflows  | Lightweight fetching and revalidation         |

Don't assume SWR's `dedupingInterval` is equivalent to TanStack Query's `staleTime`: one concerns deduplication of requests, while the other defines data freshness.

## 6. Common interview follow-up questions

Q1. If `staleTime` is zero, does TanStack Query refetch on every render?

No. It marks data stale immediately, but refetching is controlled by query lifecycle events and configured triggers. An ordinary React re-render doesn't necessarily trigger a new network request.

Q2. Does increasing `gcTime` make data fresher?

No. It keeps inactive data in memory longer. Freshness is controlled separately by `staleTime`.

Q3. How would you handle live hotel availability?

Use a freshness policy suitable for availability, refetch when appropriate, and always revalidate availability and price on the server before confirming a booking.

Q4. How does TanStack Query help with pagination?

It can cache results by page or query parameters and support placeholder data so the previous page's results remain visible while the next page loads.

Q5. Does TanStack Query replace Redux?

Not necessarily. TanStack Query specializes in server state. Redux can still be useful for complex client-owned state and application workflows. Many applications use both, while simpler applications may need neither Redux nor a separate global store.

## 7. One-line interview answer

TanStack Query and SWR improve performance through caching, request deduplication, background revalidation, and cache updates. In TanStack Query, `staleTime` controls how long data is fresh, while `gcTime` controls how long inactive cached data is retained; I tune these settings based on data freshness requirements and configure refetch triggers to avoid unnecessary network requests.

# 30. ★ What are Request Waterfalls, and How Do You Avoid Them?

## 1. What is a request waterfall?

A request waterfall occurs when one network request must finish before the next request can start, even though some of those requests could have run independently.

This creates unnecessary waiting time and can make a page feel slow.

### Example: Hotel booking page

Suppose a hotel detail page needs three pieces of data:

1. Hotel details — 300 ms
2. Room availability — 500 ms
3. Customer reviews — 400 ms

A waterfall implementation might fetch them sequentially:

```
const hotel = await fetchHotel(hotelId);
const rooms = await fetchRooms(hotelId);
const reviews = await fetchReviews(hotelId);
```

Sequential requests

Hotel details — 300 ms

Room availability — 500 ms

Customer reviews — 400 ms

Total waiting time: approximately 1,200 ms

The requests are independent, but the code forces each one to wait for the previous request to finish.

## 2. What is parallel fetching?

Parallel fetching means starting multiple independent requests at approximately the same time and waiting for their results together.

Instead of waiting for each request sequentially, use `Promise.all()` when all results are required and the requests do not depend on each other.

```
const [hotel, rooms, reviews] = await Promise.all([
  fetchHotel(hotelId),
  fetchRooms(hotelId),
  fetchReviews(hotelId),
]);
```

Parallel requests

Hotel details

300 ms

Room availability

500 ms

Customer reviews

400 ms

Total waiting time: approximately 500 ms

In this simplified example, the total time approaches the slowest request rather than the sum of all three durations.

Actual timings depend on network latency, server capacity, connection limits, and backend processing.

## 3. How do you identify request waterfalls?

I would use Chrome DevTools Network and the browser's Performance panel.

Look for:

- Requests that begin only after another request completes.
- Long gaps between related API requests.
- Repeated calls to the same endpoint.
- API requests that block the initial page content.
- A component fetching data only after it mounts, even though the data could have been requested earlier.

For example, if the hotel page starts fetching reviews only after hotel details have rendered, ask whether the review request genuinely depends on the hotel response or whether both could have started together.

## 4. How do you avoid request waterfalls?

### 1. Use `Promise.all()` for independent requests

This is the simplest fix when all requests can run concurrently.

```
const [profile, bookings, notifications] = await Promise.all([
  fetchProfile(),
  fetchBookings(),
  fetchNotifications(),
]);
```

Use it when the page needs all three results before proceeding.

Important: `Promise.all()` rejects if any promise rejects. If some results are optional, use appropriate error handling or `Promise.allSettled()` rather than allowing an optional failure to break the entire page.

### 2. Start requests before awaiting them

Even without `Promise.all()`, you can start independent operations first.

```
const hotelPromise = fetchHotel(hotelId);
const roomsPromise = fetchRooms(hotelId);
const reviewsPromise = fetchReviews(hotelId);

const hotel = await hotelPromise;
const rooms = await roomsPromise;
const reviews = await reviewsPromise;
```

All three requests start before the first `await` blocks execution.

### 3. Avoid parent-child fetching waterfalls in React

A common problem occurs when a parent component fetches data, renders a child, and the child then starts another independent request.

If the requests are independent, consider starting them earlier, fetching them together at a higher level, or using a server-state library that coordinates requests.

However, keep state and data fetching at a level that makes sense for the component structure. Moving every request into one global parent can create unnecessary coupling.

### 4. Fetch data closer to the server

In Next.js App Router, Server Components can access backend services directly when appropriate.

Instead of rendering a page, making a browser request to an API route, and having that route call another backend, the server component may call the backend service directly.

This can eliminate unnecessary network hops. It does not automatically eliminate waterfalls: sequential `await` statements on the server can still cause them.

### 5. Use caching and request deduplication

Libraries such as TanStack Query and SWR can reuse cached results and deduplicate certain concurrent requests for the same query.

Caching reduces repeated network activity; parallel fetching reduces the waiting time between independent requests. They solve related but different problems.

### 6. Use streaming for independently rendered sections

Sometimes you don't need every request to finish before showing the page.

With Next.js Server Components, `Suspense`, and streaming, the page can show available content while slower sections load independently.

For example, hotel details can appear while reviews and recommendations are still being fetched.

This improves the time to useful content, even if the total time to finish all requests remains unchanged.

## 5. When should requests remain sequential?

Not every sequential request is a performance bug.

If one request needs the result of another, the dependency is real.

For example:

```
const hotel = await fetchHotel(hotelId);
const rooms = await fetchRooms(hotel.id);
```

If the room API requires an identifier returned by the hotel API, the second request must wait.

In this situation, you can still look for ways to improve the architecture:

- Include the required identifier in the original route when safe and reliable.
- Provide a backend endpoint that returns both datasets.
- Fetch the data in parallel if the dependency can be removed.
- Cache the first result if it is suitable for reuse.

Don't introduce concurrency that violates real data dependencies.

## 6. `Promise.all()` vs. streaming

| Approach                  | Best use                                                   | Main benefit                                             |
| ------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| `Promise.all()`           | Independent requests whose results are all needed together | Reduces total waiting time                               |
| `Promise.allSettled()`    | Independent requests that can fail separately              | Allows partial results despite failures                  |
| Streaming with `Suspense` | Sections that can render independently                     | Displays ready content without waiting for every section |
| Caching                   | Repeated requests for reusable data                        | Avoids some network and backend work                     |

These approaches can be combined. For example, fetch a hotel's details and room availability in parallel, then stream recommendations separately.

## 7. Common interview follow-up questions

Q1. Does `Promise.all()` make API calls faster?

It doesn't make the individual endpoints execute faster. It starts independent requests concurrently, reducing the overall waiting time.

Q2. Can parallel fetching overload the backend?

Yes. Launching too many requests simultaneously can exhaust connection pools or overload services. Use bounded concurrency or backend aggregation when appropriate.

Q3. Is parallel fetching always better than one combined API request?

No. A combined endpoint can reduce network round trips, but it may increase payload size or force unrelated work to be performed together. Measure the actual bottleneck.

Q4. How do Server Components help avoid waterfalls?

They can fetch data directly on the server and coordinate independent requests before rendering. But developers still need to start independent operations concurrently and use streaming where appropriate.

Q5. How do you confirm the fix worked?

Compare request timing in DevTools, server-side traces, and real-user metrics before and after the change. Check that requests now overlap and that the page's TTFB or time to useful content improves.

## 8. One-line interview answer

A request waterfall occurs when independent requests run sequentially, creating unnecessary waiting time. I avoid it by starting independent fetches in parallel with `Promise.all()`, eliminating unnecessary network hops, reusing cached data, and using streaming when different page sections can render independently.


# 31. How do you use browser caching, HTTP caching, and CDN caching for a frontend app?

Caching improves frontend performance by reusing previously downloaded resources or previously generated responses instead of repeatedly fetching and processing the same data.

In a React or Next.js application, I use different caching layers depending on what is being cached, how frequently it changes, and whether the content is safe to share between users.

For example, on a hotel booking website, JavaScript bundles and hotel images can often be cached for a long time, while room availability and booking prices need stricter freshness rules.

## 1. Understand the three caching layers

1\. Browser cache

Closest to the user

Stores resources in the user's browser so repeat visits can avoid downloading them again.

2\. HTTP caching

Controlled through HTTP headers

Defines how browsers and shared caches store, reuse, or revalidate HTTP responses.

3\. CDN caching

Closer to users geographically

Stores eligible responses at edge locations, reducing the distance to the origin server.

These are related rather than completely separate technologies. HTTP cache headers can control both browser caching and, depending on the CDN and its configuration, shared-cache behavior.

## 2. Browser caching

Browser caching stores resources locally so the browser can reuse them on subsequent visits.

Typical resources include:

- JavaScript and CSS bundles.
- Fonts and images.
- Static JSON responses, where appropriate.
- Other cacheable HTTP responses.

### Example: Cache versioned static assets

For assets with content-hashed filenames, such as `app.a81f23.js`, you can safely set a long cache lifetime because a changed file receives a different URL.

```
Cache-Control: public, max-age=31536000, immutable
```

This means:

- `public`: the response may be stored by shared caches as well.
- `max-age=31536000`: the response is fresh for up to one year.
- `immutable`: clients should not need to revalidate the resource while it remains fresh.

This is suitable for genuinely versioned assets, not for mutable files whose URL stays the same.

### What happens when the file changes?

Suppose you deploy a new JavaScript bundle.

- Previous bundle: `app.a81f23.js`
- New bundle: `app.f09c42.js`

The browser can keep using the old cached bundle when an older HTML document references it, while new HTML references the new filename.

Interview point: Long-lived browser caching works best when static assets use content-hashed filenames.

## 3. HTTP caching

HTTP caching uses response headers to tell browsers and shared caches how to handle responses.

The most important headers to understand are `Cache-Control`, `ETag`, and `Last-Modified`.

### A. `Cache-Control`

Example for a response that should be revalidated before reuse:

```
Cache-Control: no-cache
```

Despite its name, `no-cache` does not mean the response cannot be stored. It means the cache must validate the response before reusing it.

Compare the main directives:

| Directive         | Meaning                                                                      |
| ----------------- | ---------------------------------------------------------------------------- |
| `max-age=300`     | Response is fresh for 300 seconds                                            |
| `no-cache`        | May be stored, but must be revalidated before reuse                          |
| `no-store`        | Do not store the response                                                    |
| `private`         | Intended for private caches, such as a user's browser                        |
| `public`          | Allows shared caches to store the response, subject to applicable rules      |
| `s-maxage=300`    | Sets freshness for shared caches, overriding `max-age` there when applicable |
| `must-revalidate` | Once stale, the cache must validate before reuse                             |

The exact effect depends on the response, cache implementation, and other directives.

### B. `ETag` and conditional requests

An `ETag` is a validator identifying a particular version of a response.

Example:

```
ETag: "hotel-list-v12"
Cache-Control: no-cache
```

When the cached response needs validation, the browser can send:

```
If-None-Match: "hotel-list-v12"
```

If the resource has not changed, the server can respond:

```
HTTP/1.1 304 Not Modified
ETag: "hotel-list-v12"
```

The browser reuses its stored response body instead of downloading the entire representation again.

This can reduce transferred bytes, although the request still incurs network latency.

`Last-Modified` and `If-Modified-Since` provide another mechanism for conditional validation.

## 4. CDN caching

A Content Delivery Network (CDN) caches eligible responses at edge locations closer to users.

Without a CDN, users in different regions may need to retrieve static assets from the same origin server. With a CDN, requests can often be served from a nearby edge cache.

### How it works

1. The user requests an image or public page.
2. The CDN checks whether it has a usable cached response.
3. On a cache hit, it returns the response from the edge.
4. On a cache miss, it fetches the response from the origin, subject to its caching rules.
5. The response may be cached for subsequent requests.

Benefits include lower latency, reduced origin load, and better performance during traffic spikes.

### Example: CDN cache policy

A public, relatively stable response might use:

```
Cache-Control: public, max-age=60, s-maxage=300
```

Here, the browser's freshness lifetime is 60 seconds, while shared caches can use a five-minute freshness lifetime.

A CDN may also have platform-specific cache rules, cache-key settings, and purge mechanisms. Verify that the CDN honors the intended headers and does not override them unexpectedly.

Important: A CDN does not automatically make every response cacheable. Cookies, authorization, cache keys, response headers, and CDN configuration can affect whether a response is stored or reused.

## 5. What should you cache in a frontend application?

Consider this practical strategy for a hotel booking platform.

| Resource                  | Suggested strategy                                    | Reason                                         |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Hashed JS/CSS bundles     | Long-lived browser and CDN caching                    | Content changes produce new filenames          |
| Fonts and public images   | Long-lived caching where URLs are versioned           | Usually reusable across sessions               |
| Destination descriptions  | CDN or server caching with suitable revalidation      | Changes relatively infrequently                |
| Hotel search results      | Short-lived caching or revalidation                   | Depends on dates, filters, and freshness needs |
| Room availability         | Strict freshness policy or short-lived caching        | Inventory can change rapidly                   |
| Final booking price       | Revalidate on the server during booking               | Avoid confirming stale pricing                 |
| Personalized account data | Private caching or no-store, depending on sensitivity | Must not leak between users                    |

The exact policy should follow business requirements rather than applying one caching rule to every endpoint.

## 6. Cache invalidation: how do you keep data fresh?

Caching introduces a trade-off: faster responses versus potentially stale content.

Common strategies include:

1\. Versioned URLs

Use content hashes for static assets. A new version gets a new URL, avoiding ambiguity about whether the old asset should be reused.

2\. Time-based expiration

Use `max-age`, `s-maxage`, or application-specific revalidation policies to control freshness.

3\. Purging or invalidating CDN entries

After changing important content, purge the affected CDN entries if immediate replacement is required.

4\. Conditional revalidation

Use `ETag` or `Last-Modified` so caches can check whether a resource changed without downloading its entire body again.

5\. Application-level cache invalidation

For Next.js applications, invalidate the relevant cached data or route when supported by the version and caching strategy being used.

Interview point: Cache invalidation should be part of the design, not something added only after stale-data bugs appear.

## 7. How do you handle caching in Next.js?

Next.js has its own rendering and data-caching mechanisms in addition to standard HTTP and CDN caching.

For example, in the Pages Router, a public page using `getServerSideProps` can set suitable HTTP headers:

```
export async function getServerSideProps({ res }) {
  const hotels = await getPublicHotels();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=300"
  );

  return {
    props: { hotels },
  };
}
```

This is appropriate only if the returned content is safe to share among users. Confirm that your CDN supports the desired stale-while-revalidate behavior.

For the App Router, distinguish between:

- Browser and CDN HTTP caching.
- Server-side data caching.
- Route rendering and prerendering.
- The client-side Router Cache.

These layers have different behavior. Next.js defaults vary by version and configuration, so don't assume that setting an HTTP header controls every internal Next.js cache.

## 8. Common mistakes to avoid

- Caching personalized responses publicly: Can expose user-specific data to other users.
- Using long cache lifetimes for mutable URLs: Users may continue seeing old assets or data.
- Assuming `no-cache` means `no-store`: They have different semantics.
- Ignoring cache keys: Responses can be reused incorrectly if important request dimensions are missing.
- Caching all query parameters indiscriminately: Can create excessive cache entries or cache the wrong response.
- Ignoring invalidation: Updated content may remain unavailable until a cache expires or is purged.
- Assuming every CDN honors origin headers identically: Platform-specific configuration matters.

## 9. Common interview follow-up questions

Q1. What is the difference between browser caching and CDN caching?

Browser caching stores responses on the user's device. CDN caching stores eligible responses at shared edge locations, allowing reuse by multiple users.

Q2. What is the difference between `no-cache` and `no-store`?

`no-cache` permits storage but requires revalidation before reuse. `no-store` instructs caches not to store the response.

Q3. Why use hashed filenames with long cache lifetimes?

A changed asset receives a new URL, so clients can safely retain old versions while new HTML references the latest files.

Q4. Can caching improve TTFB?

Yes. A browser cache hit may avoid a network request entirely, while a CDN or server cache hit can avoid expensive origin processing. The benefit depends on the request path and cache-hit rate.

Q5. How would you handle rapidly changing booking data?

Use a freshness policy appropriate to availability and price, avoid sharing personalized responses, and revalidate critical information on the server before confirming the booking.

## 10. One-line interview answer

I use browser caching for repeat visits, HTTP cache headers and validators to control freshness, and CDN caching to serve reusable content closer to users. I combine long-lived caching for versioned static assets with carefully controlled caching and server-side revalidation for dynamic or personalized data.



# 32. How do you handle optimistic updates?

An optimistic update is a technique where the UI updates immediately when a user performs an action, without waiting for the server to confirm success.

If the request succeeds, the UI stays updated. If it fails, the application rolls back the change or reconciles the UI with the latest server state.

Optimistic updates improve perceived performance because users see immediate feedback instead of waiting for network latency.

For example, on a hotel booking website, when a user saves a hotel to their favourites, the heart icon changes immediately rather than waiting for the API response.

## 1. How optimistic updates work

The typical flow is:

1. The user performs an action.
2. The frontend immediately updates the UI.
3. The API request runs in the background.
4. If the request succeeds, the frontend confirms or reconciles the change.
5. If the request fails, the frontend rolls back the optimistic change and informs the user.

```
User clicks "Save hotel"
         |
         v
Update UI immediately
         |
         v
Send API request
         |
     +---+---+
     |       |
   Success  Failure
     |       |
     v       v
Confirm    Roll back
update     UI + show error
```

## 2. Example using React

Suppose a user clicks the favourite button on a hotel card.

```
import { useState } from "react";

function FavouriteButton({ hotelId, initialFavourite }) {
  const [isFavourite, setIsFavourite] =
    useState(initialFavourite);

  const [isSaving, setIsSaving] = useState(false);

  async function handleToggle() {
    if (isSaving) return;

    const previousValue = isFavourite;
    const nextValue = !previousValue;

    // Optimistically update the UI
    setIsFavourite(nextValue);
    setIsSaving(true);

    try {
      const response = await fetch(
        `/api/hotels/${hotelId}/favourite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isFavourite: nextValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update favourite");
      }
    } catch (error) {
      // Roll back if the request fails
      setIsFavourite(previousValue);
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <button onClick={handleToggle} disabled={isSaving}>
      {isFavourite ? "♥ Saved" : "♡ Save hotel"}
    </button>
  );
}
```

### What is happening here?

- `setIsFavourite(nextValue)` updates the UI immediately.
- The API request persists the change on the server.
- If the API fails, the previous value is restored.
- The loading state prevents another toggle while the request is in progress.

Important: This is a basic example. In a production application, I would also show a user-friendly error message, handle stale server data, and consider whether disabling repeated clicks provides the desired UX.

## 3. How to handle optimistic updates with TanStack Query

In a larger React application, I would generally prefer TanStack Query when the data is managed through a shared server-state cache.

Its mutation lifecycle provides hooks for updating the cache optimistically and rolling back on failure.

```
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

function useToggleFavourite(hotelId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (isFavourite) => {
      const response = await fetch(
        `/api/hotels/${hotelId}/favourite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavourite }),
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      return response.json();
    },

    onMutate: async (isFavourite) => {
      const queryKey = ["hotel", hotelId];

      await queryClient.cancelQueries({ queryKey });

      const previousHotel =
        queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) =>
        old ? { ...old, isFavourite } : old
      );

      return { previousHotel, queryKey };
    },

    onError: (_error, _value, context) => {
      if (context?.previousHotel) {
        queryClient.setQueryData(
          context.queryKey,
          context.previousHotel
        );
      }
    },

    onSettled: (_data, _error, _value, context) => {
      if (context?.queryKey) {
        queryClient.invalidateQueries({
          queryKey: context.queryKey,
        });
      }
    },
  });
}
```

### Key callbacks

| Callback    | Responsibility                                                                   |
| ----------- | -------------------------------------------------------------------------------- |
| `onMutate`  | Cancel relevant queries, snapshot previous data, and apply the optimistic change |
| `onError`   | Restore the previous data if the mutation fails                                  |
| `onSuccess` | Optionally update the cache using the server's confirmed response                |
| `onSettled` | Revalidate or invalidate relevant queries after the mutation finishes            |

The example assumes the hotel detail query uses the key `["hotel", hotelId]`. If the favourite status also appears in hotel listings, those caches may need updating or invalidating too.

## 4. What problems can optimistic updates cause?

Optimistic updates improve responsiveness, but they introduce consistency challenges.

### A. API failure

The UI shows a successful change, but the server rejects the request.

Solution: Roll back the optimistic change and display an error or retry option.

### B. Race conditions

Suppose a user toggles a favourite several times quickly. Multiple requests can finish in a different order than they were sent, leaving the UI inconsistent with the server.

Solution: Disable repeated actions where appropriate, serialize mutations, or use server-supported versioning and idempotent operations.

### C. Stale cache data

A hotel may appear in several places: a search result, a favourites list, and a detail page. Updating only one cache can make these views disagree.

Solution: Update all relevant query caches or invalidate them after the mutation.

### D. Concurrent users

Another user or process might change the same data while the current user is making an update.

Solution: Treat the server as the source of truth. Use server responses, conflict detection, or version checks where necessary.

### E. Incorrect rollback

Restoring an old snapshot can overwrite a newer change made by another mutation.

Solution: For overlapping mutations, use a concurrency-aware rollback strategy instead of blindly restoring stale snapshots.

## 5. When should you use optimistic updates?

| Use optimistic updates                         | Be more cautious                                           |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Like or favourite buttons                      | Booking confirmation                                       |
| Following or unfollowing                       | Payment processing                                         |
| Marking a notification as read                 | Inventory and room availability                            |
| Simple preference changes                      | Financial transactions                                     |
| Adding or removing a low-risk item from a list | Operations with complex validation or irreversible effects |

For example, a hotel favourite action is a good candidate because failure is easy to recover from. A booking should not be presented as confirmed until the server verifies availability and successfully completes the booking process.

You can still show immediate feedback for a booking action, such as a loading state or “Checking availability,” without falsely displaying a confirmed reservation.

## 6. Common interview follow-up questions

Q1. What is the difference between optimistic and pessimistic updates?

An optimistic update changes the UI before server confirmation and rolls back if necessary. A pessimistic update waits for server confirmation before displaying the final change.

Q2. Why cancel queries in `onMutate`?

To reduce the chance that an in-flight query returns stale data and overwrites the optimistic cache update.

Q3. Why invalidate a query after a mutation?

To retrieve authoritative server data and reconcile the cache, especially when the server applies additional business rules.

Q4. Is optimistic updating always better for UX?

No. It is most useful for frequent, low-risk actions with predictable outcomes. For sensitive or high-impact operations, accurate server confirmation is more important than making the UI appear instantly successful.

Q5. What is the difference between optimistic UI and optimistic cache updates?

Optimistic UI describes the user experience of showing a change before confirmation. An optimistic cache update specifically modifies cached server state so other components reading that cache can immediately reflect the change.

## 7. Key takeaways

- Update the UI immediately to improve perceived responsiveness.
- Keep a snapshot or another reliable way to recover the previous state.
- Roll back on failure and show meaningful feedback.
- Use TanStack Query's mutation lifecycle for shared server-state caching.
- Handle concurrent mutations and related caches carefully.
- Never treat an optimistic result as authoritative confirmation for payments or bookings.

One-line interview answer: I use optimistic updates for low-risk actions to make the UI feel instant, update local or query-cache state before the API responds, roll back on failure, and reconcile with the server to keep the application consistent.


# 32. How do you handle optimistic updates?

An optimistic update is a technique where the UI updates immediately when a user performs an action, without waiting for the server to confirm success.

If the request succeeds, the UI stays updated. If it fails, the application rolls back the change or reconciles the UI with the latest server state.

Optimistic updates improve perceived performance because users see immediate feedback instead of waiting for network latency.

For example, on a hotel booking website, when a user saves a hotel to their favourites, the heart icon changes immediately rather than waiting for the API response.

## 1. How optimistic updates work

The typical flow is:

1. The user performs an action.
2. The frontend immediately updates the UI.
3. The API request runs in the background.
4. If the request succeeds, the frontend confirms or reconciles the change.
5. If the request fails, the frontend rolls back the optimistic change and informs the user.

```
User clicks "Save hotel"
         |
         v
Update UI immediately
         |
         v
Send API request
         |
     +---+---+
     |       |
   Success  Failure
     |       |
     v       v
Confirm    Roll back
update     UI + show error
```

## 2. Example using React

Suppose a user clicks the favourite button on a hotel card.

```
import { useState } from "react";

function FavouriteButton({ hotelId, initialFavourite }) {
  const [isFavourite, setIsFavourite] =
    useState(initialFavourite);

  const [isSaving, setIsSaving] = useState(false);

  async function handleToggle() {
    if (isSaving) return;

    const previousValue = isFavourite;
    const nextValue = !previousValue;

    // Optimistically update the UI
    setIsFavourite(nextValue);
    setIsSaving(true);

    try {
      const response = await fetch(
        `/api/hotels/${hotelId}/favourite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isFavourite: nextValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update favourite");
      }
    } catch (error) {
      // Roll back if the request fails
      setIsFavourite(previousValue);
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <button onClick={handleToggle} disabled={isSaving}>
      {isFavourite ? "♥ Saved" : "♡ Save hotel"}
    </button>
  );
}
```

### What is happening here?

- `setIsFavourite(nextValue)` updates the UI immediately.
- The API request persists the change on the server.
- If the API fails, the previous value is restored.
- The loading state prevents another toggle while the request is in progress.

Important: This is a basic example. In a production application, I would also show a user-friendly error message, handle stale server data, and consider whether disabling repeated clicks provides the desired UX.

## 3. How to handle optimistic updates with TanStack Query

In a larger React application, I would generally prefer TanStack Query when the data is managed through a shared server-state cache.

Its mutation lifecycle provides hooks for updating the cache optimistically and rolling back on failure.

```
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

function useToggleFavourite(hotelId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (isFavourite) => {
      const response = await fetch(
        `/api/hotels/${hotelId}/favourite`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavourite }),
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      return response.json();
    },

    onMutate: async (isFavourite) => {
      const queryKey = ["hotel", hotelId];

      await queryClient.cancelQueries({ queryKey });

      const previousHotel =
        queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) =>
        old ? { ...old, isFavourite } : old
      );

      return { previousHotel, queryKey };
    },

    onError: (_error, _value, context) => {
      if (context?.previousHotel) {
        queryClient.setQueryData(
          context.queryKey,
          context.previousHotel
        );
      }
    },

    onSettled: (_data, _error, _value, context) => {
      if (context?.queryKey) {
        queryClient.invalidateQueries({
          queryKey: context.queryKey,
        });
      }
    },
  });
}
```

### Key callbacks

| Callback    | Responsibility                                                                   |
| ----------- | -------------------------------------------------------------------------------- |
| `onMutate`  | Cancel relevant queries, snapshot previous data, and apply the optimistic change |
| `onError`   | Restore the previous data if the mutation fails                                  |
| `onSuccess` | Optionally update the cache using the server's confirmed response                |
| `onSettled` | Revalidate or invalidate relevant queries after the mutation finishes            |

The example assumes the hotel detail query uses the key `["hotel", hotelId]`. If the favourite status also appears in hotel listings, those caches may need updating or invalidating too.

## 4. What problems can optimistic updates cause?

Optimistic updates improve responsiveness, but they introduce consistency challenges.

### A. API failure

The UI shows a successful change, but the server rejects the request.

Solution: Roll back the optimistic change and display an error or retry option.

### B. Race conditions

Suppose a user toggles a favourite several times quickly. Multiple requests can finish in a different order than they were sent, leaving the UI inconsistent with the server.

Solution: Disable repeated actions where appropriate, serialize mutations, or use server-supported versioning and idempotent operations.

### C. Stale cache data

A hotel may appear in several places: a search result, a favourites list, and a detail page. Updating only one cache can make these views disagree.

Solution: Update all relevant query caches or invalidate them after the mutation.

### D. Concurrent users

Another user or process might change the same data while the current user is making an update.

Solution: Treat the server as the source of truth. Use server responses, conflict detection, or version checks where necessary.

### E. Incorrect rollback

Restoring an old snapshot can overwrite a newer change made by another mutation.

Solution: For overlapping mutations, use a concurrency-aware rollback strategy instead of blindly restoring stale snapshots.

## 5. When should you use optimistic updates?

| Use optimistic updates                         | Be more cautious                                           |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Like or favourite buttons                      | Booking confirmation                                       |
| Following or unfollowing                       | Payment processing                                         |
| Marking a notification as read                 | Inventory and room availability                            |
| Simple preference changes                      | Financial transactions                                     |
| Adding or removing a low-risk item from a list | Operations with complex validation or irreversible effects |

For example, a hotel favourite action is a good candidate because failure is easy to recover from. A booking should not be presented as confirmed until the server verifies availability and successfully completes the booking process.

You can still show immediate feedback for a booking action, such as a loading state or “Checking availability,” without falsely displaying a confirmed reservation.

## 6. Common interview follow-up questions

Q1. What is the difference between optimistic and pessimistic updates?

An optimistic update changes the UI before server confirmation and rolls back if necessary. A pessimistic update waits for server confirmation before displaying the final change.

Q2. Why cancel queries in `onMutate`?

To reduce the chance that an in-flight query returns stale data and overwrites the optimistic cache update.

Q3. Why invalidate a query after a mutation?

To retrieve authoritative server data and reconcile the cache, especially when the server applies additional business rules.

Q4. Is optimistic updating always better for UX?

No. It is most useful for frequent, low-risk actions with predictable outcomes. For sensitive or high-impact operations, accurate server confirmation is more important than making the UI appear instantly successful.

Q5. What is the difference between optimistic UI and optimistic cache updates?

Optimistic UI describes the user experience of showing a change before confirmation. An optimistic cache update specifically modifies cached server state so other components reading that cache can immediately reflect the change.

## 7. Key takeaways

- Update the UI immediately to improve perceived responsiveness.
- Keep a snapshot or another reliable way to recover the previous state.
- Roll back on failure and show meaningful feedback.
- Use TanStack Query's mutation lifecycle for shared server-state caching.
- Handle concurrent mutations and related caches carefully.
- Never treat an optimistic result as authoritative confirmation for payments or bookings.

One-line interview answer: I use optimistic updates for low-risk actions to make the UI feel instant, update local or query-cache state before the API responds, roll back on failure, and reconcile with the server to keep the application consistent.


# 33. How do you structure a React/Next.js codebase so that it scales to a large team and many features?

When a React or Next.js application grows, the biggest challenge is not just writing more components. It is keeping features independent, making code easy to discover, preventing duplicated logic, and allowing multiple developers to work without constantly affecting each other's code.

I prefer a feature-based architecture with clear separation of responsibilities, shared components for reusable UI, and shared utilities for common business or technical logic.

For a hotel booking platform, features might include hotel search, hotel details, bookings, payments, user authentication, and favourites.

## 1. Organize code by feature, not only by file type

A common beginner structure groups every component, hook, and utility into separate global folders:

```
src/
├── components/
├── hooks/
├── services/
├── utils/
├── types/
└── pages/
```

This works for small applications, but as the project grows, a single feature may require changes across many folders. It becomes harder to understand which code belongs together.

A feature-based structure keeps related functionality together.

### Recommended structure for a Next.js App Router application

```
src/
├── app/                         # Routes and layouts
│   ├── (storefront)/
│   │   ├── hotels/
│   │   │   ├── page.tsx
│   │   │   └── [hotelId]/
│   │   │       └── page.tsx
│   │   └── bookings/
│   │       └── page.tsx
│   ├── api/
│   ├── layout.tsx
│   └── globals.css
│
├── features/
│   ├── hotel-search/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── types.ts
│   ├── hotel-details/
│   ├── bookings/
│   ├── payments/
│   └── auth/
│
├── components/
│   ├── ui/                      # Button, Input, Modal
│   └── layout/                  # Header, Footer, Sidebar
│
├── lib/                         # API clients and integrations
├── hooks/                       # Truly app-wide hooks
├── utils/                       # Generic utilities
└── types/                       # Truly shared types
```

The route files in `app/` should generally orchestrate the page, while feature folders own most feature-specific implementation details.

The exact structure depends on the application. I would avoid creating empty folders or abstractions before there is a real need for them.

## 2. Separate responsibilities clearly

I like to define boundaries so each part has a clear purpose.

| Layer            | Responsibility                         | Example                 |
| ---------------- | -------------------------------------- | ----------------------- |
| `app/`           | Routing, layouts, page composition     | `/hotels/[hotelId]`     |
| `features/`      | Feature-specific UI and logic          | Hotel search filters    |
| `components/ui/` | Reusable presentation components       | Button, Input, Dialog   |
| `services/`      | Feature-specific API operations        | Search available hotels |
| `lib/`           | Shared infrastructure and integrations | API client, logging     |
| `utils/`         | Generic, mostly pure helpers           | Date formatting         |
| `types/`         | Types shared across features           | Common pagination types |

One important distinction: not every reusable component belongs in the global shared folder.

If a component is used only by hotel search, keep it inside `features/hotel-search/components`. Move it to a shared location when multiple features genuinely need it.

This prevents the shared folder from becoming a dumping ground for unrelated code.

## 3. Keep feature dependencies under control

In a large team, dependency direction matters as much as folder structure.

For example:

- Hotel search can depend on shared UI components.
- Hotel details can depend on shared API infrastructure.
- Shared UI components should not depend on hotel-search-specific logic.
- One feature should not import another feature's internal implementation without an explicit reason.

A simple dependency model is:

```
             app/
              |
       +------+------+
       |             |
 hotel-search   hotel-details
       |             |
       +------+------+
              |
        shared packages
```

This is a conceptual model rather than a requirement that every dependency must follow exactly this diagram.

I would use package exports, lint rules, or dependency-boundary tooling when the team needs to enforce these boundaries. Avoid circular imports and deep imports into another feature's private files.

## 4. How do you manage shared components and utilities across multiple apps?

For multiple applications, I would consider a monorepo when the apps share significant UI, types, business logic, or tooling.

A monorepo keeps related apps and packages in one repository while allowing them to be built and maintained as separate units.

### Example monorepo structure

```
company-platform/
├── apps/
│   ├── customer-web/            # Customer-facing Next.js app
│   ├── admin-dashboard/         # Internal React/Next.js app
│   └── partner-portal/          # Partner-facing app
│
├── packages/
│   ├── ui/                      # Shared design system
│   ├── api-client/              # Shared API client
│   ├── types/                   # Shared contracts
│   ├── utils/                   # Generic utilities
│   ├── eslint-config/
│   └── tsconfig/
│
├── package.json
└── workspace configuration
```

Tools such as Turborepo and Nx can help manage workspace dependencies, build caching, and affected-project execution.

### What should go into shared packages?

`packages/ui`

Shared Button, Input, Dialog, DatePicker, design tokens, and accessibility patterns.

`packages/api-client`

Common HTTP configuration, authentication integration, error normalization, and request helpers where appropriate.

`packages/types`

Shared API contracts and domain types that multiple applications genuinely need.

`packages/utils`

Generic helpers such as date formatting, currency formatting, and safe parsing.

I would keep application-specific pages, feature workflows, and app-specific state inside their respective apps rather than pushing everything into shared packages.

### Example: Reusing a shared component

```
import { Button } from "@company/ui";

export function BookHotelButton() {
  return (
    <Button variant="primary">
      Book hotel
    </Button>
  );
}
```

Both the customer application and the admin dashboard can reuse the same component, maintaining consistent behavior and styling.

However, the shared component should remain generic. Hotel booking business rules should not be embedded into the design-system Button.

## 5. Should you use a monorepo or separate repositories?

| Consideration                    | Monorepo                                          | Multiple repositories                                            |
| -------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| Sharing components and utilities | Straightforward through workspace packages        | Usually requires published packages or another sharing mechanism |
| Cross-app changes                | Easier to coordinate in one change                | Often requires coordinated releases                              |
| Independent deployment           | Supported with appropriate CI/CD                  | Naturally separated                                              |
| Build tooling                    | Requires workspace and build configuration        | Each repository can evolve independently                         |
| Access control                   | May be less granular                              | Repository-level access is easier to isolate                     |
| Best fit                         | Closely related apps with substantial shared code | Apps with independent ownership, access, or release needs        |

My approach: I would choose a monorepo when the apps are closely related and benefit from shared packages and coordinated changes. I would not adopt one simply because the company has multiple applications.

## 6. How do you keep shared packages from becoming a bottleneck?

Shared packages introduce their own challenges. A breaking change in a shared Button, API client, or type definition can affect several applications.

I would address this with:

- Clear ownership: Assign maintainers for important shared packages.
- Versioning: Use semantic versioning when packages are independently published.
- Automated tests: Test shared components and utilities independently.
- Affected-app CI: Run relevant checks for every app that depends on a changed package.
- Compatibility: Prefer backward-compatible changes when multiple apps consume a package.
- Documentation: Document public APIs and usage conventions.
- Controlled exports: Expose supported package APIs rather than allowing unrestricted deep imports.

In a monorepo using workspace dependencies, changes can often be tested across affected apps before merging. Independently published packages generally need a release and upgrade strategy.

## 7. How does this architecture improve performance?

Architecture primarily improves maintainability, but it can also support better frontend performance.

For example:

1. Feature boundaries make it easier to load heavy features only when needed.
2. Shared packages can reduce duplicated implementation, though they do not automatically reduce bundle size.
3. Clear Server Component and Client Component boundaries in Next.js help prevent unnecessary JavaScript from reaching the browser.
4. Dependency analysis makes it easier to detect large shared packages or accidental imports.
5. Separate build targets can prevent one application's dependencies from unnecessarily entering another application's bundle.

For Next.js specifically, I would avoid turning an entire application layout into a Client Component just because one small component needs interactivity. Keep interactive state in the smallest appropriate client-side boundary.

Also, a shared package should not automatically include browser-only dependencies in server-side code or import a large library for a tiny helper.

## 8. Common mistakes in large React/Next.js codebases

- Over-abstraction: Creating a generic framework before understanding actual reuse.
- A giant shared folder: Mixing unrelated UI, business logic, and utilities.
- Cross-feature coupling: Importing internal files directly from other features.
- Duplicated business rules: Different apps implementing the same validation differently.
- Uncontrolled shared-package changes: Breaking several applications with one modification.
- One global state store for everything: Making unrelated features dependent on shared state.
- Ignoring bundle boundaries: Pulling heavy client-side dependencies into commonly used components.
- Confusing monorepo with micro-frontends: A monorepo is a repository strategy; micro-frontends are an application architecture strategy. They solve different problems.

## 9. Common interview follow-up questions

Q1. Why is feature-based architecture better than a type-based folder structure?

It keeps related functionality together, makes ownership clearer, and reduces the need to navigate multiple global folders for a single feature.

Q2. When should a component become shared?

When multiple consumers genuinely need the same behavior and API. I would first keep feature-specific components local and extract them when reuse becomes clear.

Q3. How do you avoid circular dependencies between features?

Define dependency rules, keep shared packages independent of feature-specific implementations, expose intentional public APIs, and enforce boundaries through linting or workspace tooling.

Q4. Does a monorepo automatically improve performance?

No. It primarily improves code sharing and coordination. Build caching and affected-project execution can improve developer and CI performance, while runtime bundle performance still depends on imports, dependencies, and code splitting.

Q5. How would you manage a shared UI library used by several apps?

I would define a stable component API, establish ownership, maintain accessibility and visual tests, document usage, and run affected-app checks whenever the package changes.

## 10. Key takeaways

- Organize the application around business features and clear responsibilities.
- Keep feature-specific components and logic local until genuine reuse emerges.
- Use shared packages for stable, cross-application functionality.
- Choose a monorepo when shared code and coordinated development justify it.
- Establish dependency boundaries, package ownership, testing, and versioning.
- In Next.js, keep server/client boundaries and bundle dependencies intentional.

One-line interview answer: I structure React and Next.js applications around independent features, keep shared UI and infrastructure in well-defined packages, and enforce dependency boundaries through tooling and CI. For multiple related apps, I consider a monorepo with workspace packages so teams can reuse code safely without coupling every feature together.


# 34. How do you scale state management as the app grows?

When building a React or Next.js application, I don't start with Redux by default. I start with local state and introduce more powerful state-management solutions only when the application's requirements justify them.

My approach is to keep state as local as possible and move it to a broader scope only when multiple components or features need to share it.

For example, in a hotel booking application, a search input might use local state, user authentication might use Context or a dedicated state solution, and complex shared workflows might benefit from Redux Toolkit.

## 1. Understand the different types of state

Before choosing a state-management solution, I identify what kind of state the application needs.

| State type           | Example                                               | Typical solution                                                 |
| -------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| Local UI state       | Modal open, dropdown selected                         | `useState`, `useReducer`                                         |
| Shared UI state      | Theme, locale, authentication UI                      | Context or a state library                                       |
| Server state         | Hotel listings, booking details, availability         | TanStack Query, SWR, or framework data fetching                  |
| URL state            | Search filters, destination, page number              | URL search parameters                                            |
| Complex client state | Multi-step booking workflow, cross-feature selections | Context, Redux Toolkit, or another store depending on complexity |
| Form state           | Input values, validation, dirty fields                | Local state or a form library                                    |

One important distinction is that server state and client state have different responsibilities.

If hotel listings come from an API, I generally wouldn't copy all that data into Redux just because Redux is available. A server-state library can manage fetching, caching, refetching, and request status more naturally.

## 2. Stage 1: Start with local state

Use `useState` or `useReducer` when state belongs to one component or a small, closely related group of components.

### Example: Hotel search input

```
import { useState } from "react";

function HotelSearchInput() {
  const [destination, setDestination] = useState("");

  return (
    <input
      value={destination}
      onChange={(event) => setDestination(event.target.value)}
      placeholder="Where do you want to stay?"
    />
  );
}
```

The destination input owns its state because no other component needs to control it yet.

When local state is enough:

- The state has one clear owner.
- Only a few nearby components need it.
- Updates are easy to understand.
- There is no need for global coordination.

I would not introduce Context or Redux for a single input, modal, or dropdown. Doing so adds complexity without providing meaningful benefits.

## 3. Stage 2: Lift state up or introduce Context

When multiple components need the same state, I first consider lifting it to their nearest common parent.

If the state must pass through many unrelated intermediate components, or several parts of the application need access to the same value, Context may be a better option.

### Example: Theme or authentication context

```
import {
  createContext,
  useContext,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
```

Now multiple components can access the theme without passing props through every intermediate component.

```
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
```

### When should I use Context?

Context is useful when:

- Several components need the same value.
- The value is relatively stable or updates at a manageable frequency.
- The shared state has a clear owner.
- I want to avoid excessive prop drilling.

Examples include theme, locale, and shared application configuration.

However, Context is not automatically a replacement for Redux. When a context value changes, components consuming that context can re-render. Frequently changing, large context values can become a performance problem.

To address this, I can split contexts by responsibility, stabilize provider values where appropriate, and keep frequently changing state close to the components that need it.

## 4. Stage 3: Introduce Redux Toolkit when complexity justifies it

As the application grows, state may be shared across many distant components and updated through complex workflows.

For example, a booking flow might involve:

- Selected hotel and room.
- Guest details.
- Selected dates.
- Coupon application.
- Booking progress.
- Cross-page state transitions.

If this state requires coordinated updates, predictable transitions, debugging, and clear ownership across many features, Redux Toolkit may be appropriate.

### Example: Redux Toolkit slice

```
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelId: null,
  checkIn: null,
  checkOut: null,
  guests: 2,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setHotel(state, action) {
      state.hotelId = action.payload;
    },

    setDates(state, action) {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },

    setGuests(state, action) {
      state.guests = action.payload;
    },

    resetBooking() {
      return initialState;
    },
  },
});

export const {
  setHotel,
  setDates,
  setGuests,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
```

Redux Toolkit lets me define state transitions in one place and dispatch actions from different components.

The apparent mutation syntax inside reducers is supported by Redux Toolkit's Immer integration, which produces immutable state updates.

I would connect this slice to a configured Redux store and use `useSelector` and `useDispatch` in components that need it.

### When would I move to Redux Toolkit?

I would consider it when:

- Many distant components need the same client-side state.
- State transitions are complex and need a predictable structure.
- Multiple features coordinate updates to shared state.
- Debugging state changes and inspecting action history are valuable.
- The team benefits from consistent patterns and explicit ownership.

I would not move to Redux just because the project has many components or because the team has grown. A large application with well-isolated features may work perfectly well with local state, Context, URL state, and a server-state library.

## 5. The progression at a glance

Local state

One component or a small component subtree

`useState` / `useReducer`

Context or lifted state

Shared values needed by multiple components

Context API / common parent

Redux Toolkit or another store

Complex shared client state and coordinated updates

Centralized actions, reducers, selectors, and debugging

This is a decision framework, not a mandatory migration path. You can use all three approaches together in the same application.

## 6. Where does TanStack Query fit?

This is an important interview distinction.

Suppose the hotel search page fetches thousands of hotels over time, supports pagination, and needs background refetching.

I would typically use TanStack Query or SWR for that server-owned data rather than manually maintaining API responses, loading flags, errors, and cache invalidation in Redux.

```
import { useQuery } from "@tanstack/react-query";

function HotelList({ destination }) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["hotels", destination],
    queryFn: async () => {
      const response = await fetch(
        `/api/hotels?destination=${encodeURIComponent(destination)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      return response.json();
    },
    enabled: Boolean(destination),
  });

  if (isPending) return <p>Loading hotels...</p>;
  if (isError) return <p>Unable to load hotels.</p>;

  return (
    <ul>
      {data.map((hotel) => (
        <li key={hotel.id}>{hotel.name}</li>
      ))}
    </ul>
  );
}
```

This keeps responsibilities clear:

- Redux or Context can manage client-owned workflow state.
- TanStack Query manages cached server data and request lifecycles.
- URL parameters manage shareable filters and pagination.
- Local state manages temporary component interactions.

The same application may not need Redux at all if these simpler tools adequately meet its requirements.

## 7. How do you avoid unnecessary re-renders as state grows?

Choosing the correct library is only part of the solution. State placement and subscription patterns also matter.

- Keep state close to the components that use it.
- Split large Context providers by responsibility.
- Use Redux selectors to subscribe to the specific data a component needs.
- Avoid putting every API response into one global store.
- Use memoization only when profiling shows it is useful.
- Avoid duplicating the same state across local state, Context, Redux, and a query cache.

For example, if only the guest-count selector needs the guest count, the rest of the page should not need to subscribe to the entire booking object.

## 8. Common interview follow-up questions

Q1. Is Context a replacement for Redux?

Not in every case. Context distributes values through a component tree, while Redux Toolkit provides a structured external store with reducers, actions, selectors, and debugging tools. Context can be sufficient for simple shared state.

Q2. Should API data be stored in Redux?

Not by default. TanStack Query, SWR, or framework-level data fetching is often better suited to server-state caching and refetching. Redux can still be used if there is a specific architectural reason.

Q3. When should state be stored in the URL?

When users should be able to bookmark, share, or navigate backward and forward through a state, such as hotel destination, dates, filters, sorting, or pagination.

Q4. Can we use local state and Redux together?

Yes. Local state is suitable for temporary UI interactions, while Redux can hold client state that needs to be shared across distant components.

Q5. Does Redux automatically prevent re-renders?

No. Components using `useSelector` can re-render when their selected value changes. Good selectors, stable references, and appropriate state normalization help avoid unnecessary updates.

## 9. Key takeaways

- Start with local state and lift it only when sharing is necessary.
- Use Context for relatively straightforward shared values.
- Introduce Redux Toolkit when shared client-state complexity justifies its structure.
- Use TanStack Query or SWR for server-state caching and synchronization.
- Put shareable search state in the URL.
- Optimize subscriptions and state boundaries instead of moving everything into a global store.

One-line interview answer: I scale state management based on ownership and complexity: local state for component-specific interactions, Context for simple shared values, and Redux Toolkit when complex client state needs predictable, coordinated updates. I keep server state in a query cache and shareable filters in the URL rather than putting everything into one global store.


# 35. What would you do if traffic suddenly increased 10x?

If traffic suddenly increases tenfold, my priority is to keep the application available, protect critical user journeys, reduce unnecessary load on the backend, and scale the system without degrading the user experience.

I would approach this from both the frontend and backend perspectives. On the frontend, I would reduce unnecessary requests and heavy client-side work. On the infrastructure side, I would use CDN caching, appropriate server-side caching, static generation, and horizontal scaling where needed.

For example, imagine a hotel booking website receives ten times its normal traffic because of a major holiday sale.

## 1. What happens when traffic increases 10x?

A sudden traffic spike affects multiple layers of the application.

```
             10x traffic spike
                    |
                    v
              CDN / Edge
              /         \
        Cache hit      Cache miss
            |               |
            v               v
       Serve cached      Load balancer
        response              |
                              v
                       Application servers
                              |
                              v
                         Database / APIs
```

If most requests are cacheable, the CDN can absorb a large portion of the increase. If most requests require uncached server processing or database queries, the origin infrastructure may become overloaded.

### Potential problems

| Layer              | What can go wrong?                                                                     |
| ------------------ | -------------------------------------------------------------------------------------- |
| Frontend           | Slow page loads, increased API requests, long main-thread tasks                        |
| CDN                | Cache misses, incorrect cache keys, insufficient edge capacity or configuration issues |
| Application server | High CPU and memory usage, connection exhaustion, increased latency                    |
| Database           | Too many concurrent queries, connection pool exhaustion, lock contention               |
| External APIs      | Rate limits, timeouts, increased costs                                                 |
| User experience    | Failed searches, stale results, booking errors, repeated submissions                   |

A tenfold increase in traffic does not necessarily mean every layer needs ten times as much capacity. The impact depends on request patterns, cache hit rates, and how much work each request requires.

## 2. What would I do on the frontend?

My first goal would be to reduce the work the frontend creates and ensure that the application remains responsive.

### A. Reduce unnecessary API calls

- Debounce hotel search input.
- Cancel obsolete requests when users change filters.
- Deduplicate identical requests where appropriate.
- Avoid fetching the same data independently in multiple components.
- Use pagination or infinite scrolling instead of fetching enormous datasets.
- Prevent repeated submissions of critical actions, such as booking requests.

For example, if a user types a destination into a search box, I would avoid sending an API request for every keystroke. Debouncing the request reduces unnecessary backend traffic.

### B. Cache reusable data

I would reuse suitable cached data through browser caching, CDN caching, or a server-state library such as TanStack Query.

For example, hotel descriptions and destination metadata may be reusable across many users, while room availability and final prices require stricter freshness rules.

### C. Reduce JavaScript and rendering costs

- Lazy-load noncritical features.
- Split heavy components and routes.
- Virtualize large hotel result lists.
- Optimize images and fonts.
- Avoid unnecessary React re-renders.
- Keep the initial JavaScript bundle small.

These changes reduce client-side processing and improve responsiveness. However, frontend optimization alone cannot solve an overloaded backend.

## 3. Where do CDN and caching help?

A CDN is one of the most effective tools for absorbing a traffic spike because it can serve cacheable content without sending every request to the origin server.

### CDN caching

I would prioritize cacheable resources such as:

- JavaScript and CSS bundles.
- Public images and fonts.
- Static destination pages.
- Public content that does not change frequently.
- Other responses that are safe to share across users.

For versioned static assets, a long-lived policy is appropriate:

```
Cache-Control: public, max-age=31536000, immutable
```

For a public response that can tolerate short periods of staleness, a policy might be:

```
Cache-Control: public, max-age=60, s-maxage=300
```

The second example allows a shorter freshness lifetime in the browser and a longer one in shared caches, subject to the CDN's configuration.

### Server-side caching

For expensive operations, I would consider caching results such as:

- Popular destination metadata.
- Public hotel details.
- Frequently requested search results, when freshness requirements permit.
- Aggregated data that is expensive to calculate repeatedly.

The cache key must include the dimensions that affect the result, such as destination, dates, occupancy, and relevant filters. Otherwise, users may receive incorrect results.

I would also avoid caching personalized responses publicly or allowing one user's data to be served to another.

### Why caching matters

Suppose 100,000 requests arrive for a popular public resource. If a large majority can be served from cache, only a fraction need to reach the origin, substantially reducing application and database load.

The actual benefit depends on cache hit rate, expiration policies, and how much processing each miss requires.

## 4. Where does static generation help?

Static generation moves page generation out of the request path for content that can be prepared ahead of time.

For a hotel platform, I might use static generation for:

- Destination landing pages.
- Popular city guides.
- SEO-focused hotel category pages.
- Public informational content.

These pages can often be served from a CDN without rendering a fresh page on the application server for every visitor.

For content that changes periodically, Incremental Static Regeneration (ISR) can help refresh generated pages without requiring every request to generate the page from scratch.

However, I would not blindly statically generate every hotel search result. Search results may depend on travel dates, guest counts, availability, pricing, and other rapidly changing inputs.

A sensible strategy is to statically generate stable content while handling dynamic search and booking operations through appropriately cached or uncached server requests.

## 5. What would I do on the server side?

If the origin servers are becoming overloaded, I would focus on capacity, request efficiency, and protecting critical dependencies.

### A. Scale application servers horizontally

Run additional application instances behind a load balancer, assuming the infrastructure and application support horizontal scaling.

This helps distribute incoming requests across multiple instances.

I would also check:

- CPU and memory utilization.
- Request queue length.
- Response latency and error rate.
- Connection pool limits.
- Whether sessions or other state are incorrectly tied to individual instances.

Adding instances will not solve every bottleneck. If all instances overload the same database, the database may still fail.

### B. Optimize database access

- Add or correct indexes for common query patterns.
- Remove unnecessary queries and N+1 query patterns.
- Reduce the amount of data returned.
- Use connection pooling appropriately.
- Cache expensive, reusable query results.
- Check slow-query logs and database saturation.

For hotel search, I would inspect queries involving destination, dates, occupancy, availability, and pricing rather than assuming that adding more application servers is enough.

### C. Protect downstream services

During a traffic spike, I would use appropriate timeouts, bounded retries with backoff and jitter, rate limits, and concurrency limits.

Retries must be controlled: aggressive retries can amplify overload and make an incident worse.

For noncritical functionality, I would consider graceful degradation. For example, recommendations or review summaries could temporarily be omitted while core hotel search and booking remain available.

I would also use idempotency mechanisms for booking and payment operations to prevent duplicate processing when clients retry requests.

## 6. How would I prioritize actions during an actual incident?

I would not begin by rewriting the frontend or randomly increasing server capacity. I would first establish which layer is failing.

1. Measure the impact

   Check request volume, latency percentiles, error rates, CPU, memory, database load, and CDN cache hit ratio.
2. Identify the bottleneck

   Determine whether the problem is frontend request volume, cache misses, application processing, database saturation, or a downstream dependency.
3. Apply immediate mitigations

   Enable safe caching where possible, scale overloaded services, rate-limit abusive traffic, and disable or degrade noncritical expensive features.
4. Protect critical journeys

   Prioritize search, checkout, booking confirmation, and payment integrity over nonessential features.
5. Validate and stabilize

   Monitor error rates and latency after every significant change, then address the underlying capacity or performance issue.

## 7. How do I decide what can be cached or statically generated?

| Content                         | Strategy during high traffic                             |
| ------------------------------- | -------------------------------------------------------- |
| JS, CSS, fonts, public images   | Long-lived CDN and browser caching with versioned URLs   |
| Destination landing pages       | Static generation and CDN caching                        |
| Public hotel descriptions       | Server/CDN caching with suitable revalidation            |
| Hotel search results            | Carefully keyed, short-lived caching when safe           |
| Availability and live pricing   | Freshness-aware caching and server-side revalidation     |
| Checkout and payment operations | Preserve correctness; enforce validation and idempotency |

The key principle is that not every request needs a fresh server computation, but every critical transaction must preserve correctness.

## 8. Common interview follow-up questions

Q1. Does a CDN solve a 10x traffic spike by itself?

No. It helps absorb cacheable traffic, but cache misses, dynamic API requests, and database-heavy operations can still overload the origin.

Q2. Would you scale the frontend or backend first?

I would identify the bottleneck first. If origin CPU and database load are saturated, I would prioritize backend mitigation. If the API is healthy but the browser is unresponsive, I would focus on client-side JavaScript and rendering.

Q3. Does static generation work for personalized pages?

Not as a single shared personalized response. I would separate static public content from user-specific data and fetch personalized information through an appropriately secured path.

Q4. How can retries make an outage worse?

When overloaded services receive repeated requests, retries increase traffic and resource consumption. Bounded retries, backoff, jitter, and concurrency limits help prevent this feedback loop.

Q5. How would you know whether caching is helping?

I would monitor cache hit ratio, origin request volume, response latency, origin CPU, database load, and stale-data or cache-invalidation issues.

## 9. Key takeaways

- Measure the bottleneck before choosing a mitigation.
- Use CDN caching to serve reusable content close to users.
- Use static generation for stable pages that do not need per-request rendering.
- Cache dynamic data only when the freshness and isolation rules are safe.
- Scale application instances while monitoring database and downstream capacity.
- Reduce unnecessary frontend requests and JavaScript work.
- Protect critical transactions and degrade nonessential functionality gracefully.

One-line interview answer: If traffic increases 10x, I first identify the bottleneck using latency, error-rate, infrastructure, and cache metrics. Then I reduce origin load through CDN and server caching, use static generation for stable content, scale overloaded services horizontally, optimize database access, and protect critical booking and payment flows from overload and duplicate requests.


# 36. How would you deploy a Next.js app so that it scales (containers, CDN, load balancing)?

When deploying a Next.js application for scale, my goal is to make it highly available, horizontally scalable, fast for users, and easy to deploy without downtime.

I would typically use a CDN for static assets and cacheable content, containerized Next.js instances for application rendering, a load balancer to distribute traffic, and appropriate caching for data and pages.

For example, imagine deploying a hotel booking platform that needs to support thousands of users searching for hotels simultaneously.

## 1. Understand the deployment architecture

A typical container-based deployment looks like this:

```
                  Users
                    |
                    v
              CDN / Edge
           (static assets,
           cacheable pages)
                    |
                    v
             Load Balancer
                    |
          +---------+---------+
          |         |         |
          v         v         v
       Next.js   Next.js   Next.js
       Container Container Container
          |         |         |
          +---------+---------+
                    |
          +---------+---------+
          |                   |
          v                   v
      Database           External APIs
                    |
                    v
             Monitoring / Logs
```

Each layer has a distinct responsibility:

- CDN: Serves cacheable resources close to users and reduces origin traffic.
- Load balancer: Distributes incoming requests across healthy application instances.
- Next.js containers: Render pages, execute server-side logic, and handle API requests.
- Database and external services: Supply the data needed by the application.
- Monitoring: Tracks latency, errors, resource utilization, and availability.

The exact architecture depends on whether the app is mostly static, dynamically rendered, or a combination of both.

## 2. Containerize the Next.js application

Containers package the application and its runtime dependencies into a consistent deployment unit.

For production, I would generally use a multi-stage Docker build and Next.js standalone output to avoid shipping unnecessary build dependencies.

### Step 1: Configure Next.js

In `next.config.js`:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

module.exports = nextConfig;
```

Standalone output creates a minimal server deployment containing the required runtime files and traced dependencies.

### Step 2: Create a production Dockerfile

```
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

This assumes a standard npm-based project with a `public` directory and a Next.js standalone build. Adapt the copy commands if the project structure differs.

### Why use a multi-stage build?

- Dependencies and build tools stay out of the final image when not needed at runtime.
- The runtime image is smaller and generally has a reduced attack surface.
- Build and runtime environments are more consistent.
- The same image can be promoted across environments.

In production, I would also pin base-image versions, scan images for vulnerabilities, run as a non-root user, and use a `.dockerignore` file.

## 3. Scale containers horizontally

A single container has finite CPU, memory, and request-processing capacity. If traffic increases, I would run multiple instances of the same application image.

For example:

```
                  Load Balancer
                  /     |     \
                 v      v      v
              App-1   App-2   App-3
```

A container orchestrator such as Kubernetes or a managed container platform can scale the number of instances based on CPU, memory, request load, or other suitable metrics.

I would configure:

- Health checks so unhealthy instances stop receiving traffic.
- Resource requests and limits to manage CPU and memory consumption.
- Autoscaling to respond to changing demand.
- Graceful shutdown so in-flight requests can finish during deployments or scale-in.
- Rolling deployments to replace instances gradually.

Autoscaling needs sensible thresholds and sufficient startup capacity. If traffic rises faster than new instances can start, caching and spare capacity become especially important.

## 4. Put a CDN in front of the application

A CDN reduces latency and origin load by serving reusable content from edge locations.

I would prioritize:

- Hashed JavaScript and CSS files.
- Public images and fonts.
- Static pages and public content where caching is safe.
- Other cacheable responses with an explicit freshness policy.

For example, versioned static assets can use:

```
Cache-Control: public, max-age=31536000, immutable
```

However, I would not indiscriminately cache every dynamic page or API response.

For a hotel booking app:

| Resource                  | Deployment strategy                                     |
| ------------------------- | ------------------------------------------------------- |
| JS, CSS, fonts            | CDN with long-lived caching for versioned assets        |
| Destination landing pages | Static generation and CDN caching                       |
| Public hotel descriptions | Suitable server/CDN caching                             |
| Search results            | Carefully keyed, short-lived caching if appropriate     |
| Room availability         | Freshness-aware server requests                         |
| Checkout and payment      | Correctness-first processing and server-side validation |

The CDN's cache keys, cookie behavior, query parameters, and origin headers must be configured correctly. Personalized responses must not be shared between users.

## 5. Understand load balancing and application state

The load balancer distributes requests across healthy application instances.

For example, one request may reach Container A, while the next reaches Container B. The application should continue working correctly regardless of which instance handles the request.

This means I avoid relying on in-memory state in a particular container for information that must survive across requests.

Examples include:

- User sessions.
- Shopping carts and booking progress.
- Shared rate-limit counters.
- Frequently reused server-side data.

Depending on the requirements, these may belong in a database, a shared cache such as Redis, or a suitable managed service.

Authentication should use a secure, appropriately configured mechanism, and the application must not assume that consecutive requests reach the same container.

Important: Next.js can use internal caches and generated artifacts. When running multiple replicas, verify whether the relevant cache is local to each instance or shared. If consistent cross-instance caching or invalidation is required, configure an appropriate shared cache or supported cache handler.

## 6. Handle Next.js rendering and caching correctly

Next.js supports several rendering strategies, and each affects the deployment architecture.

| Rendering strategy                    | Deployment implications                                                                |
| ------------------------------------- | -------------------------------------------------------------------------------------- |
| Static generation (SSG)               | Pages can often be served directly from a CDN                                          |
| Incremental Static Regeneration (ISR) | Requires a compatible revalidation and cache strategy across instances                 |
| Server-side rendering                 | Application instances must handle rendering requests                                   |
| Client-side rendering                 | Initial shell can be static, but browser API calls still require backend capacity      |
| Server Components                     | Can reduce client JavaScript, but server-rendered work still consumes server resources |

For example, destination pages can be statically generated, while hotel search results may require dynamic data. The booking confirmation must use authoritative server-side results.

I would also distinguish Next.js's internal data and route caches from ordinary HTTP/CDN caching. Their defaults vary by Next.js version and configuration.

## 7. Manage environment variables and secrets

I would separate configuration from the application image.

Examples include:

- Database connection strings.
- API endpoints.
- Authentication secrets.
- Payment provider credentials.
- Environment-specific feature flags.

Sensitive values should be supplied through the deployment platform's secret manager or equivalent mechanism, not committed to Git or embedded in the Docker image.

Only variables explicitly intended for browser exposure should use the `NEXT_PUBLIC_` prefix. Values exposed that way can become part of the client bundle and should never contain secrets.

## 8. Prevent downtime during deployments

For production deployments, I would use rolling or blue-green deployment strategies.

A typical rolling deployment:

1. Build and test a new application image.
2. Deploy the new image to a subset of instances.
3. Verify readiness and application health.
4. Gradually replace the old instances.
5. Roll back if error rates or latency increase.

I would also make database changes backward-compatible where possible, since old and new application versions may temporarily run at the same time.

Readiness and liveness checks should serve different purposes: readiness determines whether an instance should receive traffic, while liveness determines whether it needs restarting.

## 9. Monitor the deployment and scale proactively

I would track:

- Request rate and error rate.
- P50, P95, and P99 response latency.
- CPU and memory utilization.
- Container restarts and autoscaling events.
- CDN cache hit ratio and origin request volume.
- Database latency and connection pool usage.
- Next.js rendering time and API dependency latency.
- Core Web Vitals from real users.

If response latency increases while CPU remains low, the bottleneck might be database latency or an external API rather than a lack of containers. Scaling should follow evidence, not assumptions.

## 10. Common interview follow-up questions

Q1. Does putting Next.js in Docker automatically make it scalable?

No. Containers provide a consistent deployment unit. Horizontal scaling also requires orchestration or another way to manage replicas, health checks, traffic distribution, and shared state.

Q2. Why use a CDN if we already have multiple application containers?

The CDN serves cacheable content without sending every request to the origin. This reduces latency and protects application instances from unnecessary work.

Q3. Why is in-memory session storage a problem with multiple replicas?

Requests can reach different instances, and an instance can be restarted or replaced. State that must survive those events should be stored in an appropriate shared or persistent system.

Q4. What is the difference between load balancing and autoscaling?

Load balancing distributes requests across available instances. Autoscaling changes the number of instances according to demand or configured policies.

Q5. What is the biggest Next.js-specific deployment concern?

Ensuring that rendering, environment configuration, and caching behave correctly across replicas. In particular, verify ISR and cache invalidation behavior instead of assuming every instance automatically shares the same cache.

## Key takeaways

- Package the application with a production-ready multi-stage Docker build.
- Run multiple healthy instances behind a load balancer.
- Use a CDN for static assets and safely cacheable content.
- Choose static generation, ISR, SSR, or CSR according to page requirements.
- Keep cross-request state and shared caches outside individual containers when needed.
- Deploy gradually, configure health checks, and monitor real production traffic.

One-line interview answer: I would deploy Next.js as a production container image, run multiple replicas behind a load balancer, use a CDN for static and cacheable content, configure shared state and cache invalidation where necessary, and use autoscaling, health checks, rolling deployments, and monitoring to maintain availability as traffic grows.

# 37. What is a micro-frontend, and when is it a good or bad idea?

A micro-frontend is an architectural approach where a large frontend application is divided into smaller, independently developed and maintained parts, often owned by different teams.

The idea is similar to microservices on the backend, but applied to the frontend. Each team can own a specific business area, develop its UI, test it, and potentially deploy it independently.

For example, a hotel booking platform might have separate teams responsible for hotel search, booking, payments, and user accounts.

## 1. How does a micro-frontend work?

Instead of building one large frontend application, we divide it into smaller applications that integrate into a unified user experience.

```
                Hotel Booking Platform
                         |
                 Application Shell
                  /      |      \
                 /       |       \
                v        v        v
           Hotel Search Booking  Account
           Frontend     Frontend Frontend
                |        |        |
             Team A    Team B   Team C
```

The application shell typically handles shared concerns such as navigation, layout, authentication integration, and loading the appropriate frontend.

Each micro-frontend owns a specific feature or business domain.

Possible integration approaches include:

- Build-time integration: Packages are combined during the build.
- Runtime integration: Separately built frontend modules are loaded by a host application.
- Route-based integration: Different frontend applications own different routes.
- Web Components or iframe integration: Components or isolated applications are embedded into a host page, depending on the requirements.

A micro-frontend does not require a particular framework or integration technology.

## 2. Monolithic frontend vs. micro-frontends

| Aspect                 | Monolithic frontend                           | Micro-frontends                                      |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------- |
| Codebase               | Usually one main application                  | Multiple frontend applications or modules            |
| Team ownership         | Teams collaborate within a shared application | Teams can own separate business areas                |
| Deployment             | Often coordinated                             | Can be independent, depending on architecture        |
| Shared dependencies    | Easier to centralize                          | Requires careful dependency management               |
| Consistency            | Easier to enforce globally                    | Requires shared design systems and conventions       |
| Operational complexity | Generally lower                               | Generally higher                                     |
| Best suited for        | Small to medium teams and cohesive products   | Large organizations with distinct frontend ownership |

A modular monolith can also support large teams. Splitting an application into separate deployments is not automatically better than maintaining strong module boundaries within one application.

## 3. When is a micro-frontend a good idea?

### A. Multiple teams need independent ownership

Suppose three teams own different parts of a hotel platform:

- Team A owns hotel search and filters.
- Team B owns booking and checkout.
- Team C owns account management.

If each team needs to release features independently, micro-frontends can reduce coordination between teams.

### B. Different features have different release cycles

The payment team may need to deploy checkout improvements independently of the hotel search team.

Micro-frontends can allow these features to be released separately, provided the integration contracts and deployment setup support independent releases.

### C. The organization has a genuinely large frontend

When a single frontend repository becomes difficult to coordinate across many teams, independently owned frontend modules may improve team autonomy.

However, I would first consider whether feature-based architecture, clear package boundaries, and monorepo tooling could solve the problem with less complexity.

### D. Incremental migration is required

A micro-frontend approach can help an organization replace an older frontend gradually, migrating one business area at a time while the rest of the application continues to operate.

## 4. When is a micro-frontend a bad idea?

### A. The team is small

For a team of three or four developers building one product, separate frontend applications often introduce unnecessary complexity.

You may end up managing multiple builds, deployments, routing systems, dependency versions, and integration contracts without receiving enough organizational benefit.

### B. Features are tightly coupled

Suppose the hotel search page, pricing widget, and checkout flow frequently need coordinated changes to shared state and UI behavior.

Splitting them into independently deployed applications can make those changes harder because teams must coordinate across application boundaries.

### C. Performance is a major concern

Multiple frontend applications may introduce:

- Duplicate React or other framework dependencies.
- Larger JavaScript downloads.
- Additional network requests.
- More complicated loading sequences.
- Multiple hydration or initialization costs.
- CSS conflicts and inconsistent styling.

These problems are not inevitable, but they require deliberate design. Independent deployment does not automatically mean better runtime performance.

### D. There is no shared design system or ownership model

Without agreed conventions for navigation, accessibility, error handling, authentication, and component styling, the product can become inconsistent.

Micro-frontends require clear ownership and stable integration contracts.

## 5. How would you implement micro-frontends in React or Next.js?

I would begin by identifying business boundaries and deciding how the applications should integrate.

For example, a route-based design could look like this:

```
Hotel Booking Platform
|
├── /hotels/*       → Hotel Search application
├── /booking/*      → Booking application
├── /account/*      → Account application
└── /admin/*        → Admin application
```

A reverse proxy or routing layer can direct requests to the appropriate application. Other approaches include runtime module integration or a shared host application.

With Next.js, I would carefully consider routing, server rendering, asset paths, authentication, caching, and how each application handles errors. Combining multiple Next.js applications requires explicit integration and deployment planning; it is not automatically achieved just by creating separate projects.

### Important implementation considerations

1\. Shared design system

Use a shared UI package for buttons, inputs, typography, design tokens, and accessibility conventions.

2\. Independent deployments

Each team should be able to deploy its application without requiring every other team to deploy simultaneously.

3\. Shared authentication

Agree on secure authentication and authorization contracts rather than independently implementing incompatible session handling.

4\. Cross-application communication

Prefer explicit, minimal interfaces. Avoid tightly coupling applications through shared internal state or undocumented browser events.

5\. Dependency management

Avoid downloading duplicate framework dependencies unnecessarily, but do not create fragile runtime coupling just to force every application to share exactly the same version.

6\. Observability

Use consistent logging, error tracking, performance monitoring, and release identifiers across applications.

## 6. How do micro-frontends affect performance?

Micro-frontends can improve organizational scalability, but their effect on runtime performance depends on implementation.

I would measure:

- Total JavaScript downloaded and executed.
- Duplicate dependencies across applications.
- Route-transition latency.
- Core Web Vitals, especially LCP and INP.
- Time spent initializing each frontend.
- Number of requests required to render the page.
- Whether independently loaded applications block the critical rendering path.

To keep performance under control, I would:

- Load only the frontend modules required for the current route.
- Share dependencies carefully where the integration mechanism supports it.
- Avoid loading every micro-frontend at application startup.
- Cache versioned assets at the CDN.
- Keep shared UI packages lightweight.
- Set and enforce performance budgets.

## 7. Micro-frontends vs. a monorepo

These concepts solve different problems.

| Concept          | What it addresses                                                      |
| ---------------- | ---------------------------------------------------------------------- |
| Monorepo         | How code for multiple apps and packages is organized and maintained    |
| Micro-frontends  | How a frontend is divided into independently owned or integrated parts |
| Modular monolith | How one application is divided into clear internal modules             |

You can have multiple micro-frontends in a monorepo, or maintain them in separate repositories. You can also use a monorepo to manage a single modular frontend.

Interview point: I would not introduce micro-frontends just because the codebase is large. I would introduce them when team autonomy and independent delivery justify the added operational and runtime complexity.

## 8. Common interview follow-up questions

Q1. Do micro-frontends always deploy independently?

No. Independent deployment is a common goal, but it depends on how applications are integrated, how contracts are managed, and whether shared dependencies force coordinated releases.

Q2. How do micro-frontends share state?

I prefer sharing as little state as possible. Cross-application communication can use explicit APIs, URL state, or well-defined events. Each application should generally own its local state.

Q3. How do you avoid duplicate React bundles?

Depending on the integration strategy, I would configure dependency sharing, use compatible versions, inspect production bundles, and verify that the solution actually reduces downloads without creating fragile runtime coupling.

Q4. Are micro-frontends the same as microservices?

No. Microservices divide backend functionality into independently managed services. Micro-frontends divide frontend functionality into independently managed UI modules or applications. They may align by business domain, but they are separate architectural decisions.

Q5. What would you choose for a medium-sized team?

I would generally start with a modular React or Next.js application, feature-based folders, shared packages, and clear module boundaries. I would consider micro-frontends later if independent team ownership and deployment became real requirements.

## 9. Key takeaways

- Micro-frontends divide a frontend into independently owned modules or applications.
- They are most valuable when large teams need autonomy and independent delivery.
- They add integration, deployment, testing, and performance complexity.
- A monorepo and shared design system can support reuse across applications.
- Strong module boundaries in a single frontend may be sufficient for many products.

One-line interview answer: I would use micro-frontends when a large organization needs independently owned and deployed frontend domains. For a smaller team or tightly coupled product, I would prefer a modular React or Next.js application because it is simpler to maintain, test, and optimize.


# Q39. How do you handle errors and failures gracefully at scale? (Error Boundaries, Retries, Fallbacks)

## 1. Introduction

In a large React or Next.js application, errors can occur at different levels:

- Rendering errors: A component crashes while rendering.
- API errors: A backend request fails because of a server error, timeout, or network issue.
- User input errors: A form contains invalid data.
- Authentication errors: A session expires or a user lacks permission.
- Third-party failures: A payment SDK, analytics script, or external service becomes unavailable.
- Unexpected errors: Bugs or unhandled exceptions occur in the application.

The goal is not to prevent every error. It is to contain failures, preserve unaffected functionality, provide useful feedback, and recover safely whenever possible.

For example, in a hotel booking application, if the reviews API fails, users should still be able to view hotel details and room availability. A failure in one non-critical feature should not crash the entire page.

## 2. Error Boundaries in React

An Error Boundary is a React component that catches errors thrown during rendering and lifecycle methods of its child components, then displays a fallback UI instead of allowing the affected component tree to crash.

### Example

Suppose a hotel details page contains several independent sections:

- Hotel information
- Room availability
- Reviews
- Nearby attractions

If the reviews component crashes, an Error Boundary can isolate that failure and display a fallback only for reviews.

```
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Send error details to a monitoring service
    console.error("Component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <p>Reviews are temporarily unavailable.</p>
          <button
            onClick={() =>
              this.setState({ hasError: false })
            }
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Usage:

```
function HotelDetailsPage() {
  return (
    <>
      <HotelInformation />

      <RoomAvailability />

      <ErrorBoundary>
        <HotelReviews />
      </ErrorBoundary>

      <NearbyAttractions />
    </>
  );
}
```

If `HotelReviews` throws during rendering, the other sections can remain available.

Important: This example's retry button only resets the boundary. It does not necessarily fix the underlying error or rerun failed data requests. A production implementation should ensure that the failed component or request can recover.

### What Error Boundaries do not catch

Error Boundaries generally do not catch errors from:

- Event handlers
- Asynchronous callbacks, such as a `setTimeout`
- Promise rejections that are not handled
- Server-side rendering errors through the traditional client Error Boundary mechanism

Handle these failures explicitly with `try/catch`, rejected-promise handling, or framework-specific error handling.

### Next.js error handling

In the Next.js App Router, use an `error.tsx` file to provide route-segment error UI. It acts as a framework-managed Error Boundary for errors in the relevant segment.

```
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert">
      <h2>Something went wrong.</h2>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
```

- `error.tsx` must be a Client Component.
- `reset()` attempts to render the segment again.
- A root-level `app/error.tsx` does not catch errors in the root layout itself; `app/global-error.tsx` handles errors at that level.
- Use `not-found.tsx` for not-found states rather than treating them as unexpected crashes.

## 3. Handle API Errors Properly

An API failure should be represented as a predictable application state rather than causing the whole page to crash.

A useful approach is to distinguish between:

| Failure                   | Recommended handling                                             |
| ------------------------- | ---------------------------------------------------------------- |
| Network failure           | Show an error state and offer retry                              |
| HTTP 400 validation error | Display field-level or actionable validation messages            |
| HTTP 401                  | Refresh authentication when supported or ask the user to sign in |
| HTTP 403                  | Show an access-denied message                                    |
| HTTP 404                  | Show a not-found state                                           |
| HTTP 429                  | Respect `Retry-After` and apply appropriate backoff              |
| HTTP 5xx                  | Retry selectively and show a fallback if the failure continues   |
| Request timeout           | Stop waiting indefinitely; offer a safe retry                    |

Remember that `fetch()` does not automatically reject its promise for HTTP errors such as `404` or `500`. Check `response.ok`.

```
async function fetchHotels() {
  const response = await fetch("/api/hotels");

  if (!response.ok) {
    throw new Error(
      `Failed to fetch hotels: ${response.status}`
    );
  }

  return response.json();
}
```

The calling component or data-fetching layer should catch the error and update the UI accordingly.

```
async function loadHotels() {
  try {
    setStatus("loading");

    const data = await fetchHotels();

    setHotels(data);
    setStatus("success");
  } catch (error) {
    setStatus("error");
  }
}
```

In production, use a well-defined state model and avoid exposing raw server errors or sensitive details to users.

## 4. Retries: When and How to Use Them

A retry attempts a failed operation again. Retries are useful for transient failures, but indiscriminate retries can make an outage worse.

### Retry strategy

1. Retry only failures that may be temporary.
2. Use a limited number of attempts.
3. Apply exponential backoff.
4. Add jitter to avoid many clients retrying simultaneously.
5. Respect server instructions such as `Retry-After`.
6. Stop retrying when the operation is no longer relevant, such as after a user navigates away.

A common backoff strategy is:

\\[ \text{delay}\_n = \min(\text{maxDelay}, \text{baseDelay} \times 2^n) \\]

Random jitter can then be added to the delay.

For example, a hotel search request might retry a temporary network failure with increasing delays rather than sending requests continuously.

### Example with a retry helper

```
const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(
  url,
  { retries = 2, baseDelay = 500 } = {}
) {
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error = new Error(
          `HTTP ${response.status}`
        );

        error.status = response.status;
        throw error;
      }

      return await response.json();
    } catch (error) {
      const retryable =
        !error.status ||
        error.status === 429 ||
        error.status >= 500;

      if (!retryable || attempt >= retries) {
        throw error;
      }

      const delay = Math.min(
        5000,
        baseDelay * 2 ** attempt
      );

      const jitter = Math.random() * 200;

      await sleep(delay + jitter);
    }
  }
}
```

This is an illustrative example. A production retry helper should also handle cancellation, timeouts, `Retry-After`, and retry policies appropriate to the endpoint. Avoid retrying every `5xx` or network error blindly.

### When not to retry automatically

Be particularly careful with operations that change server state.

For example, if a hotel booking request times out, the booking may have succeeded even though the browser never received the response. Retrying the request blindly could create a duplicate booking.

Use idempotency keys, server-side duplicate protection, or a booking-status lookup before attempting the operation again.

## 5. Fallback UI and Graceful Degradation

A fallback gives users a useful alternative when the normal experience is unavailable.

| Situation                         | Fallback                                                    |
| --------------------------------- | ----------------------------------------------------------- |
| Hotel reviews API fails           | Keep hotel details available and show “Reviews unavailable” |
| Recommendations fail              | Hide recommendations or show a lightweight placeholder      |
| Search API fails                  | Preserve the user's filters and offer retry                 |
| Image fails to load               | Show a placeholder image                                    |
| Payment provider fails            | Explain the problem and offer a safe next step              |
| Optional third-party widget fails | Disable that widget without blocking the page               |

Good fallback UI should:

- Explain what failed in user-friendly language.
- Preserve user input where possible.
- Offer a meaningful recovery action.
- Avoid blank screens and infinite loading indicators.
- Keep critical functionality working whenever possible.

Use skeletons for loading, error messages for failures, and empty states when a successful response contains no results. These states should not be confused with one another.

## 6. Error Handling with TanStack Query

Libraries such as TanStack Query help manage server-state failures, retries, caching, loading states, and background refetches.

```
import { useQuery } from "@tanstack/react-query";

function HotelReviews({ hotelId }) {
  const {
    data,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["hotel-reviews", hotelId],
    queryFn: () => fetchReviews(hotelId),
    retry: 2,
  });

  if (isPending) {
    return <p>Loading reviews...</p>;
  }

  if (isError) {
    return (
      <div role="alert">
        <p>Reviews are temporarily unavailable.</p>
        <button onClick={() => refetch()}>
          Try again
        </button>
      </div>
    );
  }

  return <ReviewsList reviews={data} />;
}
```

This keeps the request lifecycle separate from the UI rendering logic.

Note: TanStack Query's retry defaults and behavior can vary by environment and configuration. Set an explicit policy when predictable behavior matters. The query function must also throw on HTTP failures for the query to recognize them as errors.

## 7. Handling Errors at Scale

In a large production application, displaying an error message is not enough. Teams need to detect, understand, prioritize, and prevent recurring failures.

### A. Centralized error monitoring

Use tools such as Sentry, Datadog, or New Relic to collect:

- Error messages and stack traces
- Affected routes and components
- Release or deployment version
- Browser and device information
- Frequency and number of affected users
- Relevant request or trace identifiers

Capture enough context to diagnose failures, but avoid logging passwords, access tokens, payment details, or unnecessary personal data.

### B. Classify and prioritize errors

Not every error has the same business impact.

- Critical: Booking or payment flow is broken.
- High: Hotel search fails for many users.
- Medium: Reviews or recommendations are unavailable.
- Low: A non-essential widget fails.

Prioritize errors based on user impact, frequency, affected functionality, and business criticality—not merely the number of exceptions.

### C. Prevent cascading failures

For systems with multiple dependencies:

- Use timeouts so requests do not hang indefinitely.
- Limit retries and use exponential backoff with jitter.
- Use circuit breakers where appropriate to stop repeatedly calling a failing dependency.
- Cache safe, previously fetched data when freshness requirements permit.
- Keep non-critical services isolated from critical user journeys.
- Apply rate limits and concurrency limits to protect backend services.

For example, a recommendations service should not prevent users from searching for or booking a hotel.

### D. Track reliability metrics

Monitor:

- Frontend error rate
- Failed API request rate
- Retry success rate
- JavaScript crash rate
- Percentage of users affected
- Latency and timeout rate
- Booking or checkout completion rate

Alert on meaningful increases and correlate them with deployments, API incidents, and specific browsers or routes.

## 8. Common Mistakes to Avoid

- Wrapping the entire application in one boundary and showing a blank screen for every error.
- Retrying every failed request indefinitely.
- Retrying non-idempotent operations without duplicate protection.
- Showing raw stack traces or server messages to users.
- Swallowing errors without logging or reporting them.
- Treating every empty response as an error.
- Assuming an Error Boundary catches asynchronous errors.
- Showing a retry button that only resets the UI without addressing the underlying failure.
- Logging sensitive user or authentication data.

## 9. Interview Follow-up Questions

Q. Does an Error Boundary catch API errors?

Not automatically. If an API error is handled in a promise or event handler, manage it through explicit error state or a data-fetching library. An Error Boundary catches errors during React rendering and related lifecycle processing, not arbitrary asynchronous failures.

Q. Should every API request be retried?

No. Retry only likely transient failures, limit attempts, use backoff, and consider endpoint semantics. Validation errors generally need correction, while non-idempotent operations require special care.

Q. What is the difference between an Error Boundary and an API error state?

An Error Boundary isolates rendering failures in a component subtree. An API error state represents a failed data request and lets the UI display a targeted message, retry action, or fallback.

Q. How do you avoid a complete page failure?

Place boundaries around meaningful feature sections, isolate optional services, and ensure critical features can continue operating when non-critical features fail.

Q. How do you know whether the fix worked?

Verify the behavior locally and in staging, then monitor production error rates, affected users, retries, latency, and business outcomes after release.

## 10. Key Takeaways

- Use Error Boundaries to isolate rendering failures.
- Handle API and asynchronous errors explicitly.
- Apply bounded retries with backoff and jitter to appropriate transient failures.
- Provide fallback UI that preserves critical functionality.
- Protect state-changing operations against duplicate execution.
- Use centralized monitoring, prioritization, and reliability metrics to manage failures at scale.

One-line interview answer:

“I handle failures at multiple layers: Error Boundaries for rendering crashes, explicit error states and bounded retries for API failures, and graceful fallbacks to isolate non-critical features. At scale, I combine monitoring, structured logging, timeouts, and safe recovery strategies so failures remain contained and critical user journeys continue working.”


# Q40. A Search Results Page Is Lagging When Users Apply Filters. How Would You Debug and Fix It?

## 1. Introduction

When a search results page becomes slow after users apply filters, the problem can come from several layers:

- React rendering: Too many components re-render when a filter changes.
- Expensive computation: Filtering, sorting, or grouping a large dataset takes too long.
- Network requests: API calls are slow, duplicated, or triggered on every interaction.
- Large DOM: Thousands of result cards are rendered simultaneously.
- State management: Filter state is updated inefficiently or placed too high in the component tree.
- Backend performance: Database queries or search APIs take too long.
- Third-party code: Analytics or other scripts block the main thread.

My approach would be to reproduce the lag, measure where the time is spent, identify the bottleneck, optimize that layer, and verify the improvement.

For example, imagine a hotel search page displaying 2,000 hotels. When a user selects a price range, the page freezes for a second before updating the results. I would investigate whether the delay comes from JavaScript computation, React rendering, the API, or DOM updates rather than immediately adding memoization.

## 2. Step 1: Reproduce and Measure the Problem

First, I would reproduce the issue under realistic conditions.

I would test:

- Applying one filter versus multiple filters.
- Filtering a small dataset versus thousands of results.
- Rapidly changing filters.
- Using a low-end device or CPU throttling.
- Testing on a fast and a slow network.
- Comparing the initial page load with subsequent filter interactions.

Then I would use these tools:

| Tool                        | What I investigate                                                  |
| --------------------------- | ------------------------------------------------------------------- |
| Chrome DevTools Performance | Long tasks, scripting time, layout, paint, and main-thread blocking |
| Chrome DevTools Network     | API duration, payload size, duplicate requests, and waterfalls      |
| React DevTools Profiler     | Components that re-render and how much time commits consume         |
| Lighthouse                  | Broader page performance issues and opportunities                   |
| Backend/APM monitoring      | Server latency, database queries, and API bottlenecks               |

I would measure the interaction from the user's action to the updated results, not just the initial page-load time.

Important: A slow interaction is not automatically a React problem. The browser might be waiting for the API, calculating a large dataset, or updating an excessive number of DOM nodes.

## 3. Step 2: Identify the Actual Bottleneck

I would investigate the following areas in order, guided by the profiling results.

### A. Expensive filtering and sorting

Suppose the application filters 10,000 hotel records every time the user changes a price slider.

```
const filteredHotels = hotels
  .filter((hotel) => hotel.price <= maxPrice)
  .filter((hotel) => hotel.rating >= minRating)
  .sort((a, b) => a.price - b.price);
```

This computation runs again whenever the component renders.

Potential fixes:

- Profile the computation before optimizing it.
- Use `useMemo` when expensive filtering can reuse the same result across unrelated renders.
- Reduce unnecessary intermediate arrays and repeated calculations.
- Use more efficient algorithms or data structures when appropriate.
- Move large-scale filtering to the server if the dataset is too large for the client.

```
const filteredHotels = useMemo(() => {
  return hotels
    .filter(
      (hotel) =>
        hotel.price <= maxPrice &&
        hotel.rating >= minRating
    )
    .sort((a, b) => a.price - b.price);
}, [hotels, maxPrice, minRating]);
```

This avoids recalculating the filtered list when these dependencies have not changed.

However, `useMemo` does not make the filtering itself inherently faster. If the filter values change on every slider movement, the calculation still runs. I would also check whether the computation is actually expensive before adding memoization.

### B. Unnecessary React re-renders

A filter change might trigger rendering of the entire page, including unrelated components such as the header, navigation, and hotel cards.

For example:

```
function SearchPage() {
  const [maxPrice, setMaxPrice] = useState(500);

  return (
    <>
      <Header />

      <PriceFilter
        value={maxPrice}
        onChange={setMaxPrice}
      />

      <HotelList maxPrice={maxPrice} />
    </>
  );
}
```

Every update to `maxPrice` causes `SearchPage` to render again. Its children are also evaluated, although React may skip some work when memoization or other optimizations apply.

Potential fixes:

- Keep filter state close to the components that need it.
- Split large components into smaller, focused components.
- Use `React.memo` for expensive children when their props remain unchanged.
- Use `useMemo` for expensive derived values and `useCallback` when stable function identity helps memoized children.
- Avoid recreating large objects and arrays unnecessarily.
- Avoid putting frequently changing filter values in a broad Context consumed by unrelated components.

Use React DevTools Profiler to confirm which components are consuming time before applying these optimizations.

### C. Too many DOM elements

Even if filtering is fast, rendering thousands of hotel cards can make the browser slow.

For example, displaying 5,000 cards simultaneously increases the amount of DOM that React and the browser must manage.

Fix: Use list virtualization.

Libraries such as TanStack Virtual or `react-window` render only the visible items and a small overscan region.

Benefits include:

- Fewer mounted components.
- Less DOM work.
- Faster rendering and scrolling.
- Lower memory usage in large lists.

Virtualization is especially useful when the user can scroll through a large result set. It does not reduce the cost of fetching or filtering the complete dataset by itself.

## 4. Step 3: Optimize API Requests

If applying a filter triggers a network request, I would inspect whether requests are slow, excessive, or duplicated.

### Common problems

- Sending a request on every keystroke or slider movement.
- Fetching the same data multiple times.
- Refetching all results when only one parameter changes.
- Downloading thousands of records when only one page is needed.
- Allowing older, slower requests to overwrite newer results.

### A. Debounce rapid filter changes

For a search input, wait until the user pauses typing before sending a request.

```
useEffect(() => {
  const timer = setTimeout(() => {
    fetchHotels(searchTerm);
  }, 300);

  return () => clearTimeout(timer);
}, [searchTerm]);
```

This reduces unnecessary requests during rapid typing. The cleanup cancels the pending timer, but it does not cancel a request that has already started.

For a price slider, another option is to update the slider value immediately while applying the search only after the user releases the slider.

### B. Cancel obsolete requests

If a user changes filters several times, an earlier request might finish after a later one and display outdated results.

```
useEffect(() => {
  const controller = new AbortController();

  async function loadHotels() {
    try {
      const response = await fetch(
        `/api/hotels?maxPrice=${maxPrice}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("Failed to load hotels");
      }

      const data = await response.json();
      setHotels(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      }
    }
  }

  loadHotels();

  return () => controller.abort();
}, [maxPrice]);
```

The cleanup aborts the previous request when the dependency changes or the component unmounts. This reduces wasted work and helps prevent stale responses from being applied.

### C. Use server-side filtering and pagination

For large datasets, I would send filter parameters to the backend instead of downloading every hotel and filtering everything in the browser.

Example:

```
GET /api/hotels?maxPrice=500&rating=4&page=1&limit=20
```

The server can filter, sort, and paginate the results using database indexes and optimized queries.

For repeated requests, a server-state library such as TanStack Query can help with caching, request deduplication, and background refetching.

## 5. Step 4: Keep the UI Responsive During Updates

Sometimes the computation is unavoidable, but it should not make the interface feel frozen.

### Use `useTransition`

`useTransition` lets React treat certain state updates as non-urgent, allowing more urgent interactions to remain responsive.

```
const [isPending, startTransition] = useTransition();

function handleFilterChange(value) {
  setFilterValue(value);

  startTransition(() => {
    setAppliedFilter(value);
  });
}
```

The input can update immediately while the results update as a lower-priority transition.

This is useful when rendering the results is expensive. However, `useTransition` does not make synchronous JavaScript computation faster. A very expensive filter calculation can still block the main thread, so algorithmic improvements, server-side filtering, or a Web Worker may be needed.

### Use `useDeferredValue`

`useDeferredValue` can let an expensive results view lag behind a rapidly changing input value.

```
const deferredFilter = useDeferredValue(filterValue);

const filteredHotels = useMemo(() => {
  return filterHotels(hotels, deferredFilter);
}, [hotels, deferredFilter]);
```

The input can stay responsive while React works toward rendering the results for the deferred value.

For best results, expensive result components may need memoization so unrelated urgent renders do not repeat the same expensive work.

## 6. Step 5: Optimize the Backend if Needed

If Network timing shows that the API itself is slow, frontend memoization will not solve the underlying bottleneck.

I would investigate:

- Database query execution time.
- Missing or ineffective indexes on frequently filtered columns.
- Large response payloads.
- Sequential backend calls that could run in parallel.
- Repeated requests for identical data.
- Slow search infrastructure or external service dependencies.

Potential fixes include:

- Adding appropriate database indexes.
- Returning only required fields.
- Using server-side pagination and sorting.
- Caching frequently requested search results where freshness rules allow.
- Parallelizing independent backend calls.
- Using a dedicated search engine when the product and dataset justify it.

The key is to optimize the layer that the measurements identify as slow.

## 7. A Practical Debugging Decision Table

| What I observe                             | Likely cause                                          | First action                                                      |
| ------------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------- |
| Long scripting tasks when a filter changes | Expensive JavaScript computation                      | Profile the function and optimize the algorithm                   |
| Many components render after each change   | Broad state updates or unstable props                 | Use React Profiler; colocate state and memoize selectively        |
| Smooth computation but slow scrolling      | Excessive DOM nodes                                   | Add list virtualization                                           |
| Long API duration                          | Backend or network bottleneck                         | Inspect Network timings and server traces                         |
| Many requests while dragging a slider      | Requests fired too frequently                         | Debounce or apply on release                                      |
| Old results replace newer results          | Race condition                                        | Cancel obsolete requests or guard response application            |
| Input freezes while results update         | Main-thread work or expensive rendering               | Reduce work, use transitions, or move computation off-thread      |
| Performance degrades as filters accumulate | Repeated computation or inefficient query composition | Profile cumulative filtering and optimize the data/query strategy |

## 8. How I Would Validate the Fix

After implementing changes, I would compare the same interaction before and after the fix.

I would check:

- Filter-to-results update latency.
- Main-thread long tasks.
- Number of React commits and expensive component renders.
- API request count and duration.
- DOM node count.
- Responsiveness on slower devices.
- Correctness when users change filters rapidly.
- Error handling and loading states when requests fail.

I would also test combinations of filters, empty results, pagination, and back-to-back interactions to ensure performance improvements do not introduce incorrect results or stale UI.

## 9. Interview Follow-up Questions

Q. Should filtering always happen on the server?

No. Client-side filtering works well for small datasets that are already available locally. Server-side filtering is generally preferable for large datasets, frequently changing data, or cases where transferring the entire dataset would be expensive.

Q. Does `React.memo` fix a slow filter?

Not necessarily. It can prevent unnecessary child renders when props remain unchanged, but it does not make an expensive filtering algorithm faster.

Q. Is debouncing enough to fix a laggy slider?

Not always. Debouncing reduces how frequently work is triggered. It does not reduce the cost of each computation. Applying filters on release, optimizing the computation, or moving filtering to the server may be more appropriate.

Q. When would you use a Web Worker?

When profiling shows substantial CPU-heavy JavaScript computation that can run independently of the UI thread, such as processing a large dataset. A Web Worker keeps that computation off the main thread, although communication and data-transfer costs must be considered.

Q. How do you prevent stale API responses?

Abort obsolete requests where possible, or track request identity and apply only the latest relevant response. A server-state library can also help manage request lifecycles and caching.

## 10. Key Takeaways

- Measure first: Use Chrome Performance, Network, and React Profiler.
- Optimize rendering: Colocate state and memoize only where profiling justifies it.
- Optimize computation: Reduce repeated work and use efficient algorithms.
- Optimize large lists: Use virtualization when many items would otherwise be mounted.
- Optimize requests: Debounce rapid input, cancel obsolete requests, and cache suitable responses.
- Choose the right data layer: Use server-side filtering and pagination for large datasets.
- Keep interactions responsive: Consider transitions, deferred values, or Web Workers where appropriate.
- Validate the outcome: Compare real interaction latency and verify correctness.

One-line interview answer:

“I would profile the filter interaction to determine whether the bottleneck is computation, React rendering, DOM size, network requests, or backend latency. Then I’d apply targeted fixes such as efficient filtering, selective memoization, virtualization, debouncing, request cancellation, server-side pagination, and caching, and verify the improvement with before-and-after measurements.”


# Q41. The LCP on Your Homepage Is 5 Seconds. What Do You Check, and in What Order?

## 1. Understand the Problem

Largest Contentful Paint (LCP) measures how long it takes for the largest visible image, text block, or other eligible content element in the viewport to render.

An LCP of 5 seconds is considered poor. Google's recommended thresholds are:

| LCP                 | Rating            |
| ------------------- | ----------------- |
| 2.5 seconds or less | Good              |
| 2.5–4 seconds       | Needs improvement |
| More than 4 seconds | Poor              |

My first step would be to identify the actual LCP element and determine which part of its loading process is causing the delay.

For example, on a hotel-booking homepage, the LCP element might be a large hero image, a promotional banner, or a prominent heading.

I would not start by randomly optimizing JavaScript or compressing every image. I would investigate the bottleneck in a systematic order.

## 2. Step 1: Confirm and Identify the LCP Element

First, I would establish what is being measured and which element is responsible.

Tools:

- Chrome DevTools → Performance
- Chrome DevTools → Lighthouse
- PageSpeed Insights
- Real User Monitoring (RUM) data

I would check:

- Is the LCP consistently around 5 seconds?
- Does it happen on mobile, desktop, or both?
- Does it occur on a cold load or a repeat visit?
- Which DOM element is the LCP element?
- Is the element an image, text block, or background image?

I would also compare lab results with real-user data. Lighthouse is useful for controlled diagnostics, while field data reveals how the page performs for actual users.

Why this comes first: The right optimization depends on the element. A hero image has different loading problems from a heading rendered late because of client-side JavaScript.

## 3. Step 2: Break Down the LCP Timeline

LCP can be understood through four important phases:

1. Time to First Byte (TTFB): How long it takes to receive the first byte of the HTML response.
2. Resource Load Delay: How long the browser waits before starting to load the LCP resource.
3. Resource Load Duration: How long the LCP resource takes to download.
4. Element Render Delay: How long the browser waits to render the element after the resource is available.

For text-based LCP elements, resource load phases may not apply in the same way because there might not be a separate image or font resource responsible for the element.

I would inspect these phases to identify where the five seconds are being spent.

For example:

| LCP phase              | Possible problem                      | Direction to investigate                           |
| ---------------------- | ------------------------------------- | -------------------------------------------------- |
| TTFB                   | Slow server response                  | Server rendering, backend calls, caching, CDN      |
| Resource load delay    | Browser discovers hero image too late | HTML discovery, lazy loading, CSS background image |
| Resource load duration | Image is too large or network is slow | Image format, dimensions, compression, CDN         |
| Element render delay   | Rendering is blocked                  | JavaScript execution, CSS, fonts, main-thread work |

This breakdown helps me prioritize the correct fix instead of applying generic performance optimizations.

## 4. Step 3: Check TTFB First

If the HTML response itself is slow, I would investigate TTFB before optimizing the image.

I would check:

- Is server-side rendering waiting for multiple API calls?
- Are independent data requests happening sequentially?
- Is the server performing expensive computation?
- Is dynamic rendering preventing effective caching?
- Is the CDN serving the page from the expected location?
- Are backend or database queries slow?

### Potential fixes

- Parallelize independent server-side requests.
- Cache reusable or relatively static homepage data.
- Use a CDN for appropriate content.
- Reduce unnecessary server-side computation.
- Use static generation or incremental regeneration when the content and freshness requirements allow it.
- Avoid blocking the entire page on non-critical data.

For example, if a hotel homepage waits for reviews, recommendations, and promotional content before returning its initial HTML, I would investigate whether those requests can be parallelized or whether non-critical sections can load separately.

Important: I would not switch every page to static generation automatically. The rendering strategy must fit the page's personalization and freshness requirements.

## 5. Step 4: Check Whether the LCP Resource Is Discovered Early

If the LCP element is a hero image, I would check when the browser discovers and starts downloading it.

Common problems include:

- The image is lazy-loaded even though it is visible immediately.
- The image URL is inserted only after JavaScript executes.
- The image is defined as a CSS background and discovered late.
- The HTML or CSS contains a chain of dependencies before the image can be requested.
- The resource has low fetch priority.

### Potential fixes

Do not lazy-load the above-the-fold LCP image. Lazy loading is useful for below-the-fold images, but it can delay the most important image.

Make the image discoverable in the initial HTML where possible. Use an appropriate responsive image implementation and, if needed, preload the correct resource.

With Next.js, I would inspect the `next/image` configuration and current framework version. The appropriate LCP priority or preload configuration depends on the version being used.

Example:

```
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/images/homepage-hero.webp"
      alt="Explore hotels and destinations"
      width={1600}
      height={700}
      sizes="100vw"
      fetchPriority="high"
      loading="eager"
    />
  );
}
```

This illustrates an eagerly loaded, high-priority hero image. In a real application, I would confirm that it is the actual LCP image and avoid assigning high priority to multiple competing resources unnecessarily.

## 6. Step 5: Check Image Size and Download Time

If the browser starts downloading the LCP image promptly but takes too long to finish, I would investigate its transfer size and delivery.

I would check:

- Is the image much larger than its displayed dimensions?
- Is a mobile device downloading a desktop-sized image?
- Is the format unnecessarily heavy?
- Is the CDN delivering the resource efficiently?
- Is image caching configured correctly?
- Is the browser downloading multiple competing high-priority resources?

### Potential fixes

- Use appropriately sized responsive images.
- Use modern formats such as WebP or AVIF when suitable.
- Compress images without unacceptable visual quality loss.
- Use a CDN with image optimization where appropriate.
- Configure `srcset` and `sizes` correctly.
- Set explicit dimensions or aspect ratios to prevent layout shifts.

The goal is to deliver the right image at the right size—not simply to compress every image regardless of its actual impact.

## 7. Step 6: Check JavaScript and Main-Thread Blocking

Even after an image downloads, the browser may take too long to render it because the main thread is busy.

I would inspect the Chrome Performance trace for:

- Long JavaScript tasks.
- Expensive hydration.
- Large third-party scripts.
- Synchronous work during startup.
- Excessive React rendering.
- Heavy client-side initialization.

### Potential fixes

- Remove unused JavaScript and dependencies.
- Split code by route or feature.
- Defer non-critical scripts.
- Reduce unnecessary hydration and client-side work.
- Use React Server Components where appropriate in the Next.js App Router.
- Move CPU-intensive independent calculations to a Web Worker when justified.

For a Next.js homepage, I would also check whether components that do not require browser interactivity are unnecessarily implemented as Client Components.

Important: Code splitting and Server Components can reduce JavaScript work, but they will not directly fix an oversized hero image or a slow server response. The fix must match the measured cause.

## 8. Step 7: Check CSS and Fonts

CSS and fonts can also delay rendering, especially when the LCP element is text or when critical styling blocks the first meaningful render.

I would check:

- Are large stylesheets blocking rendering?
- Are custom fonts delaying visible text?
- Are unnecessary font weights being downloaded?
- Is the LCP text invisible until a font loads?
- Is the critical CSS unnecessarily large?

### Potential fixes

- Remove unused CSS.
- Reduce unnecessary font variants and weights.
- Use appropriate font-display behavior.
- Preload only genuinely critical fonts when justified.
- Use `next/font` where appropriate in Next.js.
- Avoid unnecessary CSS dependencies for above-the-fold content.

I would verify the impact carefully because font-display settings involve a trade-off between showing fallback text early and maintaining visual consistency.

## 9. Step 8: Check Third-Party Scripts

Analytics, chat widgets, advertising scripts, and experimentation tools can compete for network bandwidth or block the main thread.

I would inspect the Network and Performance panels to identify which scripts run before the LCP element renders.

Potential fixes include:

- Loading non-critical scripts after the initial render.
- Deferring chat widgets until user interaction.
- Using the appropriate Next.js `<Script>` loading strategy.
- Removing unused third-party tools.
- Reducing duplicate analytics initialization.

I would not delay essential functionality simply to improve a metric. The goal is to prevent non-critical scripts from interfering with the initial experience.

## 10. Step 9: Validate the Fix in Lab and Production

After applying the targeted fix, I would test under the same conditions used to establish the baseline.

I would compare:

- LCP before and after the change.
- The specific LCP element.
- TTFB and the relevant LCP subparts.
- Image discovery and download timing.
- Main-thread blocking.
- Mobile and desktop performance.
- Field data after the release.

I would also check for regressions in other Core Web Vitals, especially INP and CLS.

A Lighthouse score improvement alone is not enough. I want evidence that the actual LCP delay has decreased and that real users experience the improvement.

## 11. My Investigation Order at a Glance

Use this sequence in an interview to show that your debugging approach is structured and measurement-driven.

| Order | What I check                | What I am trying to discover                           |
| ----- | --------------------------- | ------------------------------------------------------ |
| 1     | Identify the LCP element    | What is actually slow to render?                       |
| 2     | Break down the LCP timeline | Which phase contributes most to the delay?             |
| 3     | TTFB                        | Is the server or HTML response slow?                   |
| 4     | Resource discovery          | Does the browser start loading the LCP resource late?  |
| 5     | Resource download           | Is the resource too large or slow to transfer?         |
| 6     | Main-thread work            | Is JavaScript or hydration delaying rendering?         |
| 7     | CSS and fonts               | Are rendering dependencies blocking the element?       |
| 8     | Third-party scripts         | Are non-critical scripts competing with critical work? |
| 9     | Re-test and monitor         | Did the change improve lab and real-user performance?  |

This is a diagnostic order, not a rule that every page must follow every step. If the LCP breakdown clearly identifies the dominant cause, I would prioritize that cause immediately.

## 12. Interview Follow-up Questions

Q. What if the hero image is already optimized but LCP is still 5 seconds?

I would inspect TTFB, resource discovery delay, and element render delay. The image might be discovered too late, or JavaScript and CSS might prevent it from rendering promptly.

Q. Should I preload every large image?

No. Preload only resources that are genuinely critical and would otherwise be discovered late. Preloading too many resources can compete for bandwidth and make performance worse.

Q. Is lazy loading good for LCP?

Lazy loading is useful for below-the-fold images. For the visible LCP image, lazy loading can delay discovery and should generally be avoided.

Q. Can reducing JavaScript improve LCP?

Yes, if JavaScript execution, hydration, or main-thread contention delays the LCP element. However, if the main problem is TTFB or image download time, JavaScript reduction may have limited impact.

Q. How do you know the improvement works for real users?

I would monitor field LCP data, segmented by device and relevant page types, and assess the 75th percentile rather than relying only on a single local Lighthouse run.

## 13. Key Takeaways

- Identify the actual LCP element before changing code.
- Break down LCP into TTFB, resource load delay, resource load duration, and element render delay.
- Fix the largest measured bottleneck first.
- Ensure the LCP image is discoverable early and is not unnecessarily lazy-loaded.
- Optimize server responses, image delivery, JavaScript, CSS, fonts, and third-party scripts according to evidence.
- Validate improvements in both lab testing and real-user data.

One-line interview answer:

“If my homepage LCP is 5 seconds, I first identify the LCP element and break down its timing into TTFB, resource discovery delay, download duration, and render delay. Then I fix the dominant bottleneck—whether it is server latency, image delivery, JavaScript, CSS, or third-party scripts—and validate the result using Lighthouse and real-user performance data.”


# Q42. A User Reports That the App Slows Down After Being Open for a Long Time. What Could Be the Cause, and How Do You Find a Memory Leak?

## 1. Introduction

If a React application becomes progressively slower after running for a long time, I would suspect a memory leak, excessive memory usage, accumulating event listeners or timers, or repeated background work.

A memory leak occurs when the application retains objects that are no longer needed, preventing the garbage collector from reclaiming their memory.

For example, in a hotel-booking application, a user might browse hotel listings, open and close filters, view hotel details, and navigate between pages. If every navigation adds event listeners or starts timers without cleaning them up, the application may gradually consume more memory and become sluggish.

However, not every performance slowdown is a memory leak. I would profile the application over time to identify the actual cause.

## 2. Common Causes of Slowdown Over Time

| Cause                          | Example                                                 | Possible impact                             |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| Memory leaks                   | Event listeners or subscriptions are never removed      | Memory usage grows over time                |
| Uncleared timers               | `setInterval` continues after a component unmounts      | Background work and memory usage increase   |
| Unreleased subscriptions       | WebSocket or event-bus subscriptions accumulate         | Duplicate updates and unnecessary rendering |
| Retained references            | Large arrays or objects remain referenced unnecessarily | Garbage collector cannot reclaim memory     |
| Excessive DOM nodes            | Hidden elements or old components remain mounted        | More memory and rendering work              |
| Repeated API polling           | Multiple polling loops remain active                    | More requests and background processing     |
| Expensive repeated computation | Filtering or sorting runs unnecessarily                 | Main-thread work increases                  |
| Large caches                   | Application caches grow without limits                  | Memory consumption increases                |

I would distinguish between a true leak and legitimate high memory usage. A large dataset may consume substantial memory without leaking if the application releases it when it is no longer needed.

## 3. How I Would Find a Memory Leak

I would follow a systematic debugging process using Chrome DevTools.

### Step 1: Reproduce the Problem

First, I would reproduce the slowdown with a consistent sequence of actions.

For example:

1. Open the hotel search page.
2. Apply and remove filters several times.
3. Open and close hotel detail panels.
4. Navigate between pages repeatedly.
5. Leave the application open and repeat the workflow.
6. Observe whether memory usage or interaction latency keeps increasing.

I would record the same workflow so I could compare memory usage before and after the suspected leak.

### Step 2: Check Memory Usage in Chrome DevTools

Open Chrome DevTools and select the Memory panel.

I would use these tools:

- Heap snapshot: Shows objects retained in JavaScript memory.
- Allocation instrumentation on timeline: Helps identify allocations and whether they remain retained over time.
- Allocation sampling: Helps identify functions responsible for allocating memory.

I would also use the Performance panel to investigate long tasks, garbage collection activity, and changes in responsiveness.

The key question is not simply whether memory usage increases. It is whether memory that should have been released remains retained after repeated workflows.

### Step 3: Take Heap Snapshots

I would take a heap snapshot at the beginning, perform the same actions several times, and then take another snapshot.

I would compare the snapshots and look for:

- Increasing numbers of detached DOM nodes.
- Repeated instances of components or objects that should have been discarded.
- Growing arrays, maps, and caches.
- Event listeners or closures retaining large objects.
- Objects that remain reachable through unexpected references.

In the heap snapshot, I would inspect Retained Size and the Retainers path to understand what is keeping an object alive.

For example, if a closed hotel-detail panel is no longer visible but its component-related data remains retained through an event listener, I would investigate where that listener was registered and why it was not removed.

### Step 4: Inspect Allocation Over Time

A heap snapshot shows what is retained at a particular point. Allocation profiling helps me understand where objects are being created.

I would:

1. Start an allocation recording.
2. Repeat the suspected user workflow.
3. Stop recording.
4. Inspect functions and object types associated with allocations.
5. Check whether allocations remain retained after the workflow completes and garbage collection occurs.

If each time a filter opens the application creates more objects that remain retained, I would trace the references keeping them alive.

I would not assume every allocation is a leak. React rendering and normal user interactions naturally allocate temporary objects.

## 4. Common React Memory Leak Examples and Fixes

### A. Event listeners not removed

Problem:

```
useEffect(() => {
  window.addEventListener("resize", handleResize);
}, []);
```

The listener remains registered after the component unmounts. If the component mounts repeatedly, registrations may accumulate.

Fix:

```
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

The cleanup function removes the listener when the effect is cleaned up.

The handler reference must match the one used when registering the listener.

### B. Timers not cleared

Problem:

```
useEffect(() => {
  setInterval(() => {
    fetchHotelPrices();
  }, 5000);
}, []);
```

The interval is never cleared, so it can continue running after the component unmounts.

Fix:

```
useEffect(() => {
  const intervalId = setInterval(() => {
    fetchHotelPrices();
  }, 5000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

This prevents the interval from continuing after the effect is cleaned up.

### C. Subscriptions not cleaned up

Suppose a component subscribes to a WebSocket or event emitter every time it mounts.

```
useEffect(() => {
  const unsubscribe = hotelEvents.subscribe(
    handleHotelUpdate
  );

  return () => {
    unsubscribe();
  };
}, []);
```

The cleanup prevents obsolete subscriptions from continuing to receive updates.

If subscriptions are not removed, the same event may trigger multiple handlers, causing duplicate work and potentially retaining old component-related references.

### D. Async requests and stale updates

An API request might remain in progress after a component unmounts. The request itself does not always mean a memory leak, but obsolete requests can waste resources and retain data unnecessarily.

Where appropriate, cancel the request:

```
useEffect(() => {
  const controller = new AbortController();

  async function loadHotels() {
    try {
      const response = await fetch("/api/hotels", {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    }
  }

  loadHotels();

  return () => controller.abort();
}, []);
```

Cancellation is useful for avoiding obsolete work, but it does not replace proper cleanup of listeners, timers, or other retained resources.

### E. Unbounded caches

An application might store every previously viewed hotel in a global `Map`:

```
const hotelCache = new Map();

function cacheHotel(hotel) {
  hotelCache.set(hotel.id, hotel);
}
```

If the cache grows indefinitely, memory usage can increase even though no conventional event-listener leak exists.

Possible fixes include:

- Limiting the cache size.
- Applying a time-to-live policy.
- Evicting old entries.
- Caching only required fields.
- Using a server-state library with an appropriate cache lifecycle.

The correct policy depends on how frequently the data changes and whether users need previously fetched results.

## 5. Distinguish a Memory Leak from Other Performance Problems

| Observation                                         | Possible explanation                             | How to investigate                          |
| --------------------------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| Memory steadily increases after repeated workflows  | Memory leak or unbounded cache                   | Compare heap snapshots and retained objects |
| Memory rises and later falls                        | Normal allocation and garbage collection         | Inspect allocation and GC patterns          |
| Memory stays relatively stable, but clicks are slow | Expensive JavaScript or rendering                | Chrome Performance and React Profiler       |
| DOM node count grows after navigation               | Detached nodes or components that remain mounted | Inspect DOM nodes and heap retainers        |
| Duplicate API requests appear over time             | Repeated effects, polling, or subscriptions      | Network panel and subscription cleanup      |
| Slowdown happens mainly on large result sets        | Excessive DOM, computation, or data retention    | Profile rendering and data processing       |

The most important distinction is that a memory leak is about memory that remains unnecessarily retained, while a performance problem can also occur because the application repeatedly performs expensive work.

## 6. What About React-Specific Issues?

I would pay particular attention to:

- Effects that register resources without returning cleanup functions.
- Components that repeatedly subscribe to global stores or event emitters.
- Large objects retained by closures.
- Global state that keeps obsolete page data.
- Long-lived references to DOM nodes.
- Polling or WebSocket handlers that multiply after navigation.
- Caches that never evict data.

I would also verify that the component really unmounts when expected. Sometimes the problem is not a memory leak but that a component remains mounted and continues doing work.

React Strict Mode in development may run additional setup and cleanup cycles to help expose unsafe effect behavior. I would verify the issue in an appropriate production-like environment before drawing conclusions from development-only behavior.

## 7. How I Would Fix and Verify the Leak

Once I identify the retaining reference, I would:

1. Remove the unnecessary reference or resource.
2. Add correct cleanup for listeners, timers, subscriptions, and requests.
3. Bound caches and release obsolete data where appropriate.
4. Repeat the original workflow.
5. Capture fresh heap snapshots and compare retained objects.
6. Verify that memory returns toward a stable baseline after garbage collection.
7. Re-test responsiveness and monitor production reports.

I would not expect memory usage to return to exactly the same number after every workflow. Browsers can retain memory for reuse, and heap measurements naturally fluctuate. The goal is to eliminate unwanted growth and ensure the application remains responsive over time.

## 8. Interview Follow-up Questions

Q. What is the fastest way to identify a memory leak in Chrome?

Use the Memory panel to capture and compare heap snapshots before and after repeating the suspected workflow. Inspect retained objects and their retainers. Allocation profiling can help identify where the objects originate.

Q. Does every event listener cause a memory leak?

No. A listener is normal when its lifetime is intentional. A leak occurs when the listener or its references remain after they are no longer needed.

Q. Can React state cause a memory leak?

State alone does not automatically cause a leak. However, global state or long-lived references that retain obsolete or very large datasets can cause excessive memory usage.

Q. How do you know if a fix worked?

Repeat the same workflow, compare heap snapshots and retained objects, verify that memory no longer grows unexpectedly, and check that responsiveness remains stable.

Q. Can a memory leak cause slow rendering?

Yes. Excessive retained memory can increase garbage collection pressure and resource consumption. However, rendering may also be slow for unrelated reasons, so I would profile both memory and CPU activity.

## 9. Key Takeaways

- Reproduce the slowdown with a repeatable workflow.
- Use Chrome DevTools Memory to compare heap snapshots and inspect retained references.
- Check allocation timelines, detached DOM nodes, and unexpected object retention.
- Clean up event listeners, timers, subscriptions, and obsolete requests.
- Avoid unbounded caches and unnecessary global references.
- Confirm the fix through repeated profiling and stable long-term behavior.

One-line interview answer:

“I would reproduce the slowdown, compare heap snapshots in Chrome DevTools, and inspect retained objects and their reference paths. In React, I would investigate missing effect cleanup, accumulating listeners or timers, subscriptions, and unbounded caches, then fix the underlying retention and verify that memory and interaction performance remain stable over repeated workflows.”


# Q43. Your Page Loads Fast, but Clicking a Button Feels Laggy. What Does That Indicate?

## 1. Introduction

If a page loads quickly but clicking a button feels laggy, it usually indicates a runtime performance problem rather than an initial page-load problem.

The page may have good loading metrics, but JavaScript execution, React rendering, main-thread blocking, or an expensive event handler can delay the response to user interactions.

For example, on a hotel-booking website, the homepage might load in one second, but clicking the “Apply Filters” button freezes the interface for 500 milliseconds because the application filters thousands of hotels and re-renders a large list.

I would investigate the interaction itself using Chrome DevTools and React Profiler instead of focusing on image optimization or initial bundle size alone.

## 2. Step 1: Identify What Feels Slow

First, I would determine where the delay occurs:

- Does the button respond visually late?
- Does the click register immediately, but the results appear late?
- Does the entire page freeze after clicking?
- Does the delay happen only on certain actions or datasets?
- Is the delay caused by an API response or local processing?

This helps distinguish between slow event handling, rendering, and network latency.

For example:

| User experience                              | Possible cause                                       |
| -------------------------------------------- | ---------------------------------------------------- |
| Button does not visually respond immediately | Main thread is blocked or feedback is delayed        |
| Button responds, but results appear late     | Expensive computation, rendering, or network request |
| Entire page freezes                          | Long-running JavaScript or heavy synchronous work    |
| Only a large list causes lag                 | Excessive rendering or expensive filtering           |
| UI updates after a long API wait             | Backend or network latency                           |

## 3. Step 2: Check INP and Interaction Timing

I would check Interaction to Next Paint (INP), a Core Web Vital that measures interaction responsiveness.

INP evaluates how quickly the page provides the next visual update after interactions such as clicks, taps, and keyboard input.

| INP              | Rating            |
| ---------------- | ----------------- |
| 200 ms or less   | Good              |
| 200–500 ms       | Needs improvement |
| More than 500 ms | Poor              |

I would use Chrome DevTools Performance recordings to inspect the interaction timeline and determine whether the delay comes from event processing, rendering, or presentation of the next frame.

A good LCP does not guarantee a good INP. A page can display its content quickly but still feel unresponsive when users interact with it.

## 4. Step 3: Investigate Main-Thread Blocking

JavaScript execution, style calculations, layout, and rendering compete for the browser's main thread.

If a click triggers a long-running synchronous task, the browser cannot promptly process other work or render the next frame.

For example:

```
function handleApplyFilters() {
  const filteredHotels = hotels
    .filter((hotel) => hotel.price <= maxPrice)
    .sort((a, b) => a.price - b.price);

  setFilteredHotels(filteredHotels);
}
```

If `hotels` contains thousands of records, this filtering and sorting operation may take long enough to block the interface.

### How I would investigate

In Chrome DevTools:

1. Open the Performance panel.
2. Start recording.
3. Click the slow button.
4. Stop recording after the interaction finishes.
5. Inspect the Main thread for long tasks and expensive JavaScript functions.
6. Check whether time is spent in event handlers, React rendering, style recalculation, or layout.

I would use the recording to identify the expensive operation rather than assuming the button itself is the problem.

### Potential fixes

- Optimize algorithms and avoid repeated calculations.
- Use `useMemo` when expensive derived values can be reused.
- Move CPU-heavy independent calculations to a Web Worker when appropriate.
- Break up long tasks when possible.
- Avoid unnecessary synchronous work inside event handlers.

Important: `useMemo` avoids recalculation only when its dependencies remain unchanged. It does not make a calculation faster when the dependencies change on every interaction.

## 5. Step 4: Check for Excessive React Re-renders

Sometimes the event handler is fast, but clicking the button updates state that causes a large part of the application to re-render.

Example:

```
function SearchPage() {
  const [filters, setFilters] = useState({});
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <Header />
      <FilterPanel
        filters={filters}
        onChange={setFilters}
      />
      <HotelList filters={filters} />
      <HelpButton onClick={() => setShowHelp(true)} />
      {showHelp && <HelpPanel />}
    </>
  );
}
```

A state update in `SearchPage` can cause its child components to be evaluated again. Whether this becomes expensive depends on the component tree, props, and rendering work.

### How I would fix it

- Use React DevTools Profiler to identify expensive renders.
- Keep state close to the components that need it.
- Split large components into smaller components.
- Use `React.memo` for expensive children when their props remain stable.
- Use `useCallback` when stable callback identity helps a memoized child.
- Avoid placing frequently changing state in broad Context providers unnecessarily.

I would apply memoization selectively because unnecessary memoization adds complexity and may not improve performance.

## 6. Step 5: Check Network Requests

If the button triggers an API request, I would inspect the Network panel.

Questions I would ask:

- Is the request taking too long?
- Are multiple requests triggered by a single click?
- Is the response payload unnecessarily large?
- Is the UI waiting for non-critical requests before updating?
- Are duplicate or obsolete requests being made?

Potential fixes include:

- Optimizing the API or database query.
- Reducing response payload size.
- Caching appropriate responses.
- Cancelling obsolete requests.
- Updating the interface with immediate loading feedback.
- Separating independent requests when possible.

If the API is slow, React memoization alone will not solve the problem.

## 7. Step 6: Improve Perceived Responsiveness

Even when an operation takes time, the interface should acknowledge the user's action immediately.

For example:

```
function SearchButton({ loading, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Searching..." : "Search hotels"}
    </button>
  );
}
```

For expensive non-urgent React updates, I might consider `useTransition`:

```
const [isPending, startTransition] = useTransition();

function handleFilterChange(nextFilter) {
  setFilterValue(nextFilter);

  startTransition(() => {
    setAppliedFilter(nextFilter);
  });
}
```

This allows React to treat the results update as non-urgent while keeping the filter input responsive.

However, `useTransition` does not make arbitrary synchronous JavaScript faster. If the main thread is blocked by a long computation, I would still need to optimize or move that work elsewhere.

Other useful techniques include:

- Showing immediate pressed or loading states.
- Keeping animations lightweight.
- Avoiding unnecessary layout recalculations.
- Virtualizing large result lists.
- Keeping urgent input updates separate from expensive results rendering.

## 8. Debugging Decision Table

| Finding                                          | Likely bottleneck               | Action                                       |
| ------------------------------------------------ | ------------------------------- | -------------------------------------------- |
| Long task immediately after click                | Expensive JavaScript            | Profile and optimize computation             |
| Many components render on click                  | React rendering                 | Profile, colocate state, memoize selectively |
| Large DOM update                                 | Excessive rendered elements     | Virtualization or simpler markup             |
| Long network request                             | API or backend                  | Optimize fetching, payload, and server work  |
| Multiple requests per click                      | Duplicate event or effect logic | Fix request triggering and deduplicate       |
| UI freezes during computation                    | Main-thread blocking            | Optimize, chunk, or use a Web Worker         |
| Operation takes time but UI provides no feedback | Poor perceived responsiveness   | Add immediate feedback and loading states    |

## 9. How I Would Validate the Fix

After making a change, I would:

1. Repeat the same interaction under the same conditions.
2. Compare the Performance recordings before and after.
3. Check INP and the interaction's main-thread activity.
4. Confirm that unnecessary renders or duplicate requests have decreased.
5. Test with large datasets and slower devices.
6. Monitor real-user responsiveness after deployment.

I would also confirm that the fix has not introduced regressions in other Core Web Vitals or application behavior.

## 10. Interview Follow-up Questions

Q. Can a page have good LCP but poor INP?

Yes. LCP measures when the largest visible content renders, whereas INP measures interaction responsiveness. A page can load quickly but become sluggish when users interact with it.

Q. Does every slow click mean React is re-rendering too much?

No. The cause could be an expensive event handler, synchronous computation, DOM layout work, or a slow API request. I would profile first.

Q. Will `React.memo` fix a slow button?

Only if unnecessary child renders contribute significantly to the delay. It will not fix slow network requests or expensive calculations inside the event handler.

Q. How do you distinguish CPU time from network time?

I would combine the Chrome Performance and Network panels. Long main-thread tasks indicate CPU or rendering work, while long request timings indicate network or server delays.

## 11. Key Takeaways

- A fast initial load does not guarantee responsive interactions.
- Check INP and profile the actual click.
- Investigate main-thread blocking, expensive computation, React rendering, and API latency.
- Optimize the measured bottleneck rather than applying memoization everywhere.
- Provide immediate feedback while longer operations run.
- Validate with repeatable performance recordings and real-user data.

One-line interview answer:

“If the page loads quickly but a button feels laggy, I suspect an interaction performance issue. I would record the interaction in Chrome DevTools, inspect long main-thread tasks, profile React renders, and check network requests. Based on the findings, I would optimize computation, reduce unnecessary renders, virtualize large lists, or improve API handling, then validate the improvement using INP and interaction traces.”



# Phase 1 — Introduction and Professional Identity

## Q1. Tell me about yourself.

Target: 60–90 seconds

Hi, I'm Gaurav. I'm a Frontend Engineer with around four years of experience building web applications using React, Next.js, JavaScript, and TypeScript.

Currently, I'm working at a travel-tech startup in Gurugram, where I lead a team of three frontend developers. Along with hands-on development, I take ownership of frontend architecture, technical decisions, code reviews, task planning, and delivery.

My primary project is OneFineRate, an online travel platform for hotel and flight bookings. I've been involved in building the platform from scratch, and I own major frontend workflows, including hotel bookings and our Quote Your Rate feature, which allows users to propose their own price for a hotel stay.

Now, I'm looking for an opportunity where I can contribute to product development, take greater ownership of frontend decisions, and grow as an engineer in a product-focused environment.


## Q2. Walk me through your professional journey.

Target: 60–90 seconds

My professional journey started during my bachelor's degree at MD University, where I completed two internships. One focused on SEO, and the other focused on website performance optimization. These experiences helped me develop an initial understanding of how websites work and how their performance affects users.

After that, I joined an organization working on an education CRM. I worked on separate portals for teachers, students, and parents. I also built a JSON-driven reusable Form Builder and contributed to shared component and utility libraries. I had opportunities to work directly with clients, which helped me improve my communication and understand business requirements.

Currently, I'm working at a travel-tech startup, where I've been building OneFineRate, a hotel and flight booking platform, from scratch. Over time, my responsibilities have expanded beyond development to include frontend architecture, technical decisions, code reviews, and leading a team of three developers.


## Q3. What are your current roles and responsibilities?

Target: 45–60 seconds

In my current role, I lead the frontend development for a team of three developers while remaining hands-on with implementation.

My responsibilities include planning the frontend architecture, making technical decisions, breaking down features, and assigning ownership to team members. I also review and merge pull requests, conduct daily stand-ups, and coordinate work to keep development on track.

Apart from team responsibilities, I work on complex features and important user journeys in OneFineRate, including hotel booking and Quote Your Rate.

I also maintain shared frontend utilities and services that are used across our web applications and React Native app.

Overall, my role involves both delivering features myself and helping the team deliver maintainable, consistent frontend solutions.


## Q6. What makes you different from other candidates?

Target: 30–45 seconds

I think one thing that differentiates me is the combination of hands-on development and ownership that I've gained in my current role.

I've been involved in building a travel platform from scratch, so I understand the importance of making frontend decisions that support the overall product, not just individual features.

At the same time, I lead a small frontend team, which has helped me develop skills in task planning, code reviews, technical discussions, and collaboration.

I'm comfortable taking responsibility for my work, learning when I encounter something unfamiliar, and working with others to find practical solutions.

I'm still growing as an engineer, but I believe this combination of technical experience, ownership, and willingness to learn allows me to contribute beyond simply implementing requirements.

## Q7. Why are you looking for a job change?

Target: 30–45 seconds

I’ve worked with startups so far because I wanted to learn as much as possible and get end-to-end ownership of the product, not just work on assigned tasks. This gave me the opportunity to make technical decisions, build features from scratch, and take responsibility for delivering them.

Now, with around 4 years of experience, I feel ready for the next step. I want to work on larger products with more users and traffic, where I can learn how to build and maintain scalable applications and work with experienced teams.

At the same time, I’ve gained valuable skills and responsibilities over these years, so I’m also looking for a salary that better reflects my current experience and capabilities.



# Phase 2 — Project and Experience Explanation

## Q1. Tell me about your current project, OneFineRate.

Target: 45–60 seconds

My current project is OneFineRate, a travel-tech platform for hotel and flight bookings.

The platform allows users to search for hotels or flights, explore available options, select their preferred option, and complete their bookings online.

I've been involved in building the platform from scratch, so I've contributed to its frontend foundation as well as its major booking workflows. The platform also includes a unique feature called Quote Your Rate, which allows users to propose their own price for a hotel stay.

We integrate with multiple travel providers for hotel and flight inventory, and we also have a dedicated route for users coming from the Air India website through our MaharajaClub offering.

Overall, my work involves building and maintaining important customer-facing journeys and helping ensure that the frontend supports the business requirements of the platform.


## Q2. What exactly is your role in OneFineRate?

Target: 45–60 seconds

I'm responsible for the frontend development of OneFineRate, and I also lead a team of three frontend developers.

Since I was involved in building the platform from scratch, I helped establish the initial frontend structure, reusable foundations, API communication setup, styling approach, and payment integration.

My ongoing responsibilities include making frontend architecture decisions, breaking down requirements into tasks, assigning feature ownership, reviewing and merging pull requests, and handling complex development work myself.

I also work on major user journeys, particularly the hotel booking flow and Quote Your Rate feature.

So my role combines hands-on development, frontend ownership, and team coordination. I'm involved not only in implementing features but also in deciding how we organise and maintain the frontend application.


## Q3. Can you explain the Quote Your Rate feature?

Target: 45–60 seconds

Quote Your Rate, or QYR, is a feature in OneFineRate that allows users to propose their own price for a hotel stay instead of following the regular booking journey.

From the hotel details page, users can choose the Quote Your Rate option. They then provide their guest information and enter their proposed price. The system validates the quote against the applicable minimum amount before allowing the user to confirm it.

After submission, the operations team follows up with the customer through a call or email.

I own the complete frontend flow for this feature, from the initial selection and guest information screens to quote validation and confirmation.

What makes this feature interesting is that it supports a different booking approach from the standard fixed-price journey, while giving users a more interactive way to express what they are willing to pay.


## Q4. What has been your biggest contribution at your current company?

Target: 45–60 seconds

One of my biggest contributions has been helping build OneFineRate's frontend from scratch and taking ownership of its major customer-facing workflows.

I contributed to establishing the initial frontend foundation, including the project structure, API setup, styling approach, and payment integration. As the platform evolved, I continued working on important booking journeys and features such as Quote Your Rate.

Another contribution has been creating and maintaining a shared npm library that allows us to reuse common functionality across our web applications and React Native app.

Alongside development, I lead the frontend team, review code, and help make technical decisions.

I'm proud of this work because it combines product development, reusable engineering solutions, and team ownership rather than being limited to individual feature implementation.


## Q5. Tell me about the shared npm library you built.

Target: 30–45 seconds

We maintain a private shared npm library that helps us reuse common frontend functionality across multiple applications.

It includes utilities, custom hooks, API services, validation logic, and TypeScript types. We use it across OneFineRate, MaharajaClub, and our React Native app. Some UI components are shared specifically between the web applications.

The main purpose is to avoid duplicating common logic, maintain consistency, and make updates easier to manage across projects.

I contributed to building and maintaining this library, and it has helped us organise common functionality separately from individual application code.


## Q6. Tell me about your previous organization and what you did there.

Target: 45–60 seconds

In my previous organization, I worked on an education CRM that had separate portals for teachers, students, and parents.

My work involved developing frontend features for these portals and building reusable solutions to reduce duplication across the applications.

One of my key contributions was developing a JSON-driven Form Builder, where form structures could be defined through configuration rather than building every form separately from scratch. I also published a shared component and utility library on npm to reuse common functionality.

I had opportunities to work directly with clients as well, which helped me understand requirements, clarify expectations, and translate business needs into frontend features.

That experience gave me a strong foundation in reusable development, client communication, and building applications for different user groups.



# Phase 3 — Behavioral and Situational Questions

## 1. Tell me about a time you made an important technical decision.

Situation: During development of the OneFineRate homepage, a teammate submitted a PR involving the travel-date calendar.

One example was when I was reviewing a PR for our Next.js homepage, which included a calendar for selecting travel dates.

During the same time, I was debugging a hydration issue on the homepage. While reviewing the PR, I noticed that `new Date()` was being used directly during rendering. This could cause the server and client to generate different date values, resulting in a hydration mismatch.

I raised the concern during the PR review and discussed it with my teammate. We updated the implementation to ensure the initial rendering remained consistent between the server and client.

After reviewing the fix, I merged the PR. This reinforced the importance of code reviews—not just for checking code quality, but also for catching potential production issues before they reach users.


## 2. How do you assign tasks and manage ownership within your team?

I currently lead a frontend team of four developers, including myself. When assigning tasks, I consider feature ownership, the developer’s experience with that area, the complexity of the task, and everyone’s current workload.

For a new feature, I usually define the technical direction first, including the component structure, folder structure, and expected validations. Once that is clear, I divide the implementation into smaller responsibilities so developers can work independently.

I review their PRs, help resolve complex issues, and test the complete flow after integration. For bugs, I generally start with the original feature owner because they already understand the implementation, but I adjust the assignment based on urgency and availability.

I try to give the team enough clarity to work independently while remaining available for technical decisions and blockers. This helps me balance hands-on development with team coordination.


## 3. Tell me about a time a teammate pushed back on your decision.

Situation: In your previous CRM project, you proposed a reusable Form Builder instead of implementing every form separately.

In my previous organization, we had to build forms for different parts of a CRM application, such as login, signup, and guest details.

The straightforward approach was to create each form separately. I suggested building a reusable Form Builder that could render fields based on a JSON configuration.

There was some discussion because building individual forms would have been quicker initially. I explained that we had multiple forms with similar requirements, so a configurable component could reduce repeated work and make future changes easier.

We went ahead with the reusable approach and were able to use the same structure across multiple forms, including a guest-details preview page.

The experience taught me that when proposing a technical decision, I should explain the practical benefits and trade-offs rather than simply saying my approach is better. I also learned that abstraction is useful when there is a real, repeated need—not just for the sake of reusability.


## 4. Tell me about a production incident or security issue you faced.

This answer uses your actual production incident and the two frontend/deployment improvements you described.

One serious incident we faced was a malware attack on our production website. The website became unresponsive, users experienced freezing, and normal interactions like scrolling were affected.

I initially investigated the issue from the frontend side, but I couldn’t identify a conclusive root cause. Because of the severity of the incident, the team took the server down, and the backend team worked on migrating it. Meanwhile, I reviewed what we could improve on the frontend and deployment side.

I identified two areas for improvement. First, our guest-details flow stored the entire user object in local storage after login, even though we only needed the user ID. I changed the implementation to store only the ID and fetch the latest profile details through the API when needed.

Second, I identified the need to scan Docker images for known vulnerabilities before publishing them to the registry. I introduced Trivy into the image-scanning workflow so the team could check images before pushing them.

The root cause of the malware incident was not conclusively established by my frontend investigation, so I wouldn’t claim these changes solved the original attack. However, the incident helped us identify and address gaps in client-side data handling and image security checks. It reinforced the importance of reviewing security across the development and deployment process.


## 5. Tell me about a time you worked under a tight deadline.

One example was when we had a fixed launch deadline that had already been committed to the business and the client. As we got closer to the deadline, some important frontend work was still incomplete, so there was a risk that we wouldn’t be ready.

Since I was responsible for frontend delivery, I had to balance my own development work with coordinating the team. I divided the remaining work into must-have functionality for launch and lower-priority items that could be delivered later.

During the final phase, I stayed hands-on with development and debugging, reviewed PRs, and helped the team resolve blockers. I also put in extra hours when needed to keep the critical work moving.

We delivered the critical functionality by the deadline. Afterward, I recognized that some of the pressure could have been avoided by identifying risks earlier, estimating tasks more carefully, and raising blockers sooner.

The main lesson for me was that working under pressure isn’t just about putting in more hours. It’s about prioritizing the critical path, keeping the team aligned, and making sensible decisions about scope.


## 6. Tell me about a mistake or failure and what you learned from it.

Your notes describe the local-storage implementation as a mistake. You can use it as a learning story without claiming it caused the malware incident.

While working on the guest-details page, I implemented a flow to prefill a user’s information after login. Initially, the implementation stored the entire user object in local storage, including details that we didn’t actually need to retain there.

Later, while reviewing our frontend security practices, I realized that this was unnecessary and could expose more user information on the client side than required.

I changed the implementation to store only the user ID and fetch the latest details from the profile API whenever needed.

The mistake taught me that a solution can work functionally and still need improvement from a security perspective. Since then, I’ve been more conscious of what data we store on the client side and whether we genuinely need to store it at all.


## 7. How do you manage multiple priorities at the same time?

When I have multiple priorities, I look at business impact, urgency, dependencies, and the effort required. I first identify what is essential for the current release and what can safely wait.

As a frontend lead, I also consider the team’s workload and whether someone is blocked by a decision or dependency. I try to resolve those blockers early so the team can continue working independently.

For example, when we’re preparing a feature for release, I focus on the critical user journey first, while keeping track of remaining tasks and communicating any risks.

My approach is to make priorities explicit, keep the team aligned, and reassess them when requirements or deadlines change.


## 8. What is your biggest weakness?

Your attached notes identify a genuine communication area to improve: recalling definitions or explaining concepts clearly under interview pressure.

One area I’m working on is explaining technical concepts clearly on the spot. Sometimes, even when I’ve worked with something in a real project, I find it difficult to recall the exact definition or explain it in a structured way during an interview.

I’ve recognized that understanding how something works and communicating that understanding clearly are two different skills. So I’ve been revising concepts regularly and practising explaining my work out loud, using real examples from my projects.

My goal is to become more structured and confident when communicating technical decisions, especially when collaborating with other engineers and stakeholders.


## 9. Tell me about a time you took ownership of something beyond writing code.

When we started building OneFineRate, I took ownership of the frontend beyond individual feature implementation. I helped establish the frontend architecture, set up the project structure, and made decisions about how we would organize and develop the application.

As the project grew, my responsibilities expanded to include defining technical direction for new features, assigning work across the team, reviewing and merging PRs, and validating complete user flows after integration.

For example, when we develop a new feature, I clarify the overall structure and expected behavior first, then divide the work among developers. I stay involved in complex implementation decisions and take responsibility for making sure the different parts work together.

This experience helped me move beyond simply completing assigned tasks. I’ve learned to think about the feature as a whole, including maintainability, integration, and the final user experience.



# 📌 useState Interview Notes (4 YOE)

> Goal:
>
> * Clear React fundamentals
> * Internal understanding
> * Output based questions
> * Tricky scenarios
> * Performance
> * Real interview questions

---

# 1. What is useState?

### Q1. What is useState?

**Answer**

`useState` is a React Hook that lets functional components store and update local state.

Whenever state changes, React schedules a re-render.

```jsx
const [count, setCount] = useState(0);
```

---

### Q2. Why was useState introduced?

Before Hooks,

* Functional Components were stateless.
* State existed only inside Class Components.

React Hooks allowed:

* state
* lifecycle methods
* reusable logic

inside Functional Components.

---

### Q3. Syntax of useState

```jsx
const [state, setState] = useState(initialValue);
```

Returns:

1. Current State
2. State Updater Function

---

# 2. Initial State

---

### Q4. Can initial value be anything?

Yes.

```jsx
useState(0)

useState("")

useState([])

useState({})

useState(null)

useState(false)
```

---

### Q5. Can initial state be a function?

Yes.

```jsx
const [count] = useState(() => {
    console.log("Runs once");
    return 0;
});
```

This is called **Lazy Initialization**.

Useful for:

* expensive calculations
* localStorage

---

### Q6. Difference

```jsx
useState(getData())
```

vs

```jsx
useState(() => getData())
```

Answer:

First:

```jsx
getData()
```

runs on every render.

Second:

runs only once.

Very common interview question.

---

# 3. Updating State

---

### Q7. How do we update state?

```jsx
setCount(10)
```

or

```jsx
setCount(prev => prev + 1)
```

---

### Q8. Does setState immediately update state?

No.

React schedules update.

```jsx
setCount(5);

console.log(count);
```

Output:

Old value.

---

### Q9. Why?

Because state updates are asynchronous.

React batches updates.

---

# 4. Functional Updates

---

### Q10. Why use Functional Update?

```jsx
setCount(prev => prev + 1)
```

It always receives latest state.

---

### Q11. Output

```jsx
setCount(count + 1);
setCount(count + 1);
```

Initial:

0

Result?

Answer:

1

---

### Q12. Output

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Answer:

2

One of the most asked interview questions.

---

# 5. Batching

---

### Q13. What is batching?

React combines multiple updates into one render.

```jsx
setA(10);
setB(20);
```

Only one render.

---

### Q14. Does React 18 batch async updates?

Yes.

Also batches inside:

* Promise
* setTimeout
* async functions

Huge React 18 interview question.

---

# 6. Object State

---

### Q15. Does useState merge objects?

No.

Wrong

```jsx
setUser({
    age:25
});
```

Previous properties disappear.

Correct

```jsx
setUser(prev=>({
    ...prev,
    age:25
}))
```

Very common interview question.

---

### Q16. Why doesn't it merge?

Because Hooks replace state.

Class Components merged state.

---

# 7. Array State

---

### Q17. How to update array?

Never mutate.

Wrong

```jsx
arr.push(item)
```

Correct

```jsx
setItems(prev=>[
   ...prev,
   item
])
```

---

### Q18. Remove item

```jsx
filter()
```

---

### Q19. Update item

```jsx
map()
```

---

# 8. State Mutation

---

### Q20. Why should we never mutate state?

Because React compares references.

Mutation keeps same reference.

React may skip re-render.

---

### Q21. Example

Wrong

```jsx
user.name="John"

setUser(user)
```

Correct

```jsx
setUser({
   ...user,
   name:"John"
})
```

---

# 9. Re-rendering

---

### Q22. When does component re-render?

When

* State changes
* Props change
* Parent re-renders
* Context changes

---

### Q23. Will React re-render if same value is set?

```jsx
setCount(5);
```

Current state:

5

No.

React uses **Object.is()**

Very popular interview question.

---

# 10. State Preservation

---

### Q24. When is state preserved?

When same component remains at same position.

---

### Q25. When is state reset?

When

* key changes
* component unmounts
* different component rendered

---

# 11. Multiple States

---

### Q26. Better?

```jsx
const [name]

const [age]

const [city]
```

OR

```jsx
const [user]
```

Answer:

Depends.

Separate state improves readability.

Related data → object.

---

# 12. Derived State

---

### Q27. Should we store derived state?

Bad

```jsx
const [fullName]
```

Good

```jsx
const fullName = first + last;
```

Avoid unnecessary state.

---

# 13. Stale Closure

---

### Q28. What is stale closure?

Using old state inside async callback.

Example

```jsx
setTimeout(()=>{
   console.log(count)
},3000)
```

May log old value.

Solution

Functional update

or

useRef

Advanced product-company question.

---

# 14. Lazy Initialization

---

### Q29. Why Lazy Initialization?

Avoid expensive work every render.

Example

```jsx
const [theme]=useState(()=>{
   return localStorage.getItem("theme")
})
```

---

# 15. State vs Variable

---

### Q30. Difference?

```jsx
let count=0;
```

vs

```jsx
const [count]
```

Variable

❌ Doesn't trigger render.

State

✅ Triggers render.

---

# 16. State vs Ref

---

### Q31. Difference

useState

* causes render

useRef

* no render

Common interview question.

---

# 17. State vs Props

---

### Q32. Difference

Props

* Parent owns data

State

* Component owns data

---

# 18. State Setter

---

### Q33. Can setter be passed to child?

Yes.

```jsx
<Child setCount={setCount}/>
```

Perfectly valid.

---

### Q34. Can setter be called multiple times?

Yes.

React batches.

---

# 19. Output Questions

---

### Q35.

```jsx
const [count,setCount]=useState(0);

setCount(5);

console.log(count);
```

Output?

0

---

### Q36.

```jsx
setCount(1);

setCount(2);

setCount(3);
```

Final

3

---

### Q37.

```jsx
setCount(prev=>prev+1)

setCount(prev=>prev+1)

setCount(prev=>prev+1)
```

Answer

+3

---

### Q38.

```jsx
const [user,setUser]=useState({
name:"A",
age:20
});

setUser({
age:25
})
```

Result?

```jsx
{
 age:25
}
```

---

### Q39.

```jsx
const [arr,setArr]=useState([1,2]);

arr.push(3);

setArr(arr);
```

Problem?

Mutation.

---

### Q40.

```jsx
const [count]=useState(()=>{
 console.log("Hello")
 return 0
});
```

How many times "Hello"?

Only once.

---

# 20. Advanced Theory

---

### Q41. Why Hooks must be called at top level?

React depends on consistent Hook order between renders.

---

### Q42. Can useState be inside if?

No.

```jsx
if(a){

useState()

}
```

Invalid.

---

### Q43. Can useState be inside loop?

No.

---

### Q44. Can useState be inside function?

No.

Unless it's another custom Hook.

---

### Q45. Why setter function is stable?

React guarantees same function reference.

Safe for dependencies.

---

# 21. Best Practices

* Never mutate state.
* Use functional updates when depending on previous state.
* Don't store derived state.
* Use lazy initialization for expensive calculations.
* Split unrelated state variables.
* Keep state as small as possible.
* Use objects only when fields are related.
* Prefer immutable updates.

---

# ⭐ Most Asked Interview Questions (Revise Daily)

1. What is `useState`?
2. Why was `useState` introduced?
3. Does `setState` update immediately?
4. Why is `setState` asynchronous?
5. What is batching?
6. Functional update vs direct update?
7. Why does `setCount(count + 1)` fail in consecutive calls?
8. `useState(() => value)` vs `useState(value)`
9. Why should state never be mutated?
10. Why doesn't `useState` merge objects?
11. How do you update nested objects?
12. How do you update arrays immutably?
13. When does React re-render a component?
14. Will React re-render if the same value is set?
15. What is stale closure?
16. `useState` vs `useRef`
17. `useState` vs normal variable
18. `useState` vs props
19. Why must Hooks be called at the top level?
20. React 18 automatic batching changes.

## Verdict

For a **4 YOE React developer targeting a 12 LPA frontend role**, this set is sufficient to answer virtually every `useState` interview question asked in service companies, product-based companies, and most startup interviews. It covers the core theory, React internals that are commonly discussed, output-based scenarios, performance considerations, and practical best practices without adding low-value or repetitive questions.



## Lifecycle + Cleanup + Dependencies + Infinite Re-renders


## PART 1: THE COMPLETE useEffect LIFECYCLE

```
Component Mount
  ↓
Component Renders (function body executes)
  ↓
Browser Paints (user sees new UI)
  ↓
useEffect runs (after paint)
  ↓
User Interacts (click, type, etc)
  ↓
State/Props Update
  ↓
Component Re-renders
  ↓
Browser Paints Again
  ↓
Cleanup Function Runs (if previous effect had one)
  ↓
New useEffect Runs
  ↓
Repeat...
```

This is critical: **useEffect runs AFTER render, not before.**

### Detailed Step-by-Step Example

```jsx
function Counter() {
  console.log("1. Render");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("3. Effect runs");

    document.title = `Count: ${count}`;

    return () => {
      console.log("4. Cleanup");
    };
  }, [count]);

  console.log("2. Before return");

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

#### What happens?

**When the component first mounts:**

```text
1. Render
2. Before return
3. Effect runs
```

The component renders first, and then the effect runs.

---

**When you click the button:**

```text
1. Render
2. Before return
4. Cleanup
3. Effect runs
```

Why?

* `count` changed → component re-renders.
* Before React runs the new effect, it cleans up the previous effect.
* Then the new effect runs.

---

**When the component unmounts:**

```text
4. Cleanup
```

The cleanup function runs when the component is removed.

#### This demonstrates the key observations

1. **Render happens first** → component function runs.
2. **`useEffect` runs after render** → effect runs after the UI update.
3. **Cleanup runs before the next effect or on unmount**.
4. **Dependencies control re-runs** → because `[count]` contains `count`, the effect runs again whenever `count` changes.


## PART 2: DEPENDENCY ARRAY DEEP DIVE

### The Three Dependency Patterns

#### **Pattern 1: No Dependency Array (Avoid!)**

```javascript
useEffect(() => {
  console.log('Running');
});

// Runs AFTER EVERY RENDER
// 
// Mount: "Running"
// State change: "Running"
// Props change: "Running"
// Any re-render: "Running"
// 
// Usually causes infinite loops or performance issues
```

**When to use:** Almost never. Only for effects that must run after every render.

```javascript
// ✅ Valid use case: Sync with browser
useEffect(() => {
  document.title = `You clicked ${count} times`;
  // Must run every render to stay in sync
});
```

#### **Pattern 2: Empty Dependency Array**

```javascript
useEffect(() => {
  console.log('Running');
}, []);

// Runs ONCE when component mounts
// Never again, even if props/state change
```

**When to use:** Setup that happens once - subscriptions, initial fetch, etc.

```javascript
// ✅ Fetch once on mount
useEffect(() => {
  fetch('/api/config')
    .then(r => r.json())
    .then(setConfig);
}, []); // Don't refetch when anything changes

// ✅ Subscribe once on mount
useEffect(() => {
  const unsubscribe = subscribeToNotifications(handleNotification);
  return () => unsubscribe();
}, []); // Subscribe once, cleanup once
```

#### **Pattern 3: With Dependencies**

```javascript
useEffect(() => {
  console.log('Running');
}, [userId, postId]);

// Runs when component mounts
// Re-runs when userId OR postId changes
// Doesn't re-run if other props/state change
```

**When to use:** When effect needs to respond to prop/state changes.

```javascript
// ✅ Refetch when userId changes
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then(r => r.json())
    .then(setUser);
}, [userId]); // Re-run if userId changes

// ✅ Refetch when either changes
useEffect(() => {
  fetch(`/api/posts?user=${userId}&sort=${sortBy}`)
    .then(r => r.json())
    .then(setPosts);
}, [userId, sortBy]); // Re-run if either changes
```


### Common Dependency Mistakes

#### **Mistake 1: Missing Dependency**

```javascript
// ❌ WRONG
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1); // Uses stale count
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Missing count!
  
  // Increments once then stops
}

// ✅ Option 1: Use functional update (no dependency needed)
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);

// ✅ Option 2: Add to dependencies (effect re-runs constantly)
useEffect(() => {
  const timer = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(timer);
}, [count]); // Re-creates timer every second!
```

#### **Mistake 2: Object as Dependency**

```javascript
// ❌ WRONG: New object every render
function Component({ user }) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`/api/posts?user=${user.id}`)
      .then(r => r.json())
      .then(setPosts);
  }, [user]); // user is object, new reference every render!
  
  // Effect re-runs on EVERY render even if user data hasn't changed
}

// ✅ CORRECT: Use the ID, not the object
useEffect(() => {
  fetch(`/api/posts?user=${user.id}`)
    .then(r => r.json())
    .then(setPosts);
}, [user.id]); // Use the ID, not object

// OR

// ✅ Memoize the object
const memoizedUser = useMemo(() => user, [user.id]);
useEffect(() => {
  fetch(`/api/posts?user=${memoizedUser.id}`)
    .then(r => r.json())
    .then(setPosts);
}, [memoizedUser]);
```

#### **Mistake 3: Function as Dependency**

```javascript
// ❌ WRONG: New function every render
function Component() {
  const callback = () => {
    console.log('clicked');
  };
  
  useEffect(() => {
    element.addEventListener('click', callback);
    return () => element.removeEventListener('click', callback);
  }, [callback]); // New function every render!
  
  // Listener added/removed on every render
}

// ✅ CORRECT: Memoize the function
const callback = useCallback(() => {
  console.log('clicked');
}, []);

useEffect(() => {
  element.addEventListener('click', callback);
  return () => element.removeEventListener('click', callback);
}, [callback]);
```


## PART 3: CLEANUP FUNCTIONS IN DEPTH

### When Cleanup Runs

```javascript
useEffect(() => {
  console.log('Setup');
  
  return () => {
    console.log('Cleanup');
  };
}, [dep]);

// Cleanup runs:
// 1. Before the effect runs again (if dependency changed)
// 2. When component unmounts
// 3. NOT on every render without dependencies changing
```

### Critical Cleanup Scenarios

#### **Scenario 1: Event Listeners**

```javascript
// ❌ WRONG: Listener added but never removed
function WindowListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Resized');
    };
    
    window.addEventListener('resize', handleResize);
    // Forgot cleanup! Listener stays even after unmount
  }, []);
  
  // If component mounts/unmounts 10 times, 10 listeners active!
}

// ✅ CORRECT: Remove listener in cleanup
function WindowListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Resized');
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Only one listener at a time
}
```

#### **Scenario 2: Timers**

```javascript
// ❌ WRONG: Timer keeps running after unmount
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    // Timer still runs even if component unmounts!
  }, []);
}

// ✅ CORRECT: Clear timer in cleanup
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
}
```

#### **Scenario 3: Subscriptions/WebSockets**

```javascript
// ❌ WRONG: Subscription stays active
function RealTimeData() {
  useEffect(() => {
    const unsubscribe = subscribeToUpdates((data) => {
      console.log('Update:', data);
    });
    // Still subscribed even after unmount!
  }, []);
}

// ✅ CORRECT: Unsubscribe in cleanup
function RealTimeData() {
  useEffect(() => {
    const unsubscribe = subscribeToUpdates((data) => {
      console.log('Update:', data);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
}
```

## PART 4: INFINITE RE-RENDER SCENARIOS

### How Infinite Loops Happen

```
Effect runs → Updates state → Component re-renders → Effect runs again → ...
```

### Scenario 1: setState Without Dependencies

```javascript
// ❌ INFINITE LOOP
function BadComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1); // Updates state
  }); // No dependency array!
  
  // Render → Effect runs → setCount → Re-render → Effect runs → ...
  // INFINITE LOOP!
}
```

**Fix:**

```javascript
// ✅ CORRECT: Empty dependency array
useEffect(() => {
  setCount(count + 1);
}, []); // Run once on mount

// OR

// ✅ CORRECT: Use functional update
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Only run once
```

### Scenario 2: Object Dependency

```javascript
// ❌ INFINITE LOOP
function BadComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, [{ id: 1 }]); // New object every render!
  
  // Every render creates new object
  // Effect sees new dependency, re-runs
  // setData triggers re-render
  // New object created again
  // INFINITE LOOP!
}

// ✅ CORRECT: Use primitive
useEffect(() => {
  fetch('/api/data')
    .then(r => r.json())
    .then(setData);
}, [1]); // Primitive, same every time
```

### Scenario 3: State Derived from Props

```javascript
// ❌ INFINITE LOOP
function BadComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  useEffect(() => {
    setCount(initialCount); // Update state from prop
  }, [initialCount]); // Every time initialCount changes
  
  // Actually this one works fine! Not an infinite loop
  // But unnecessary if you don't need to sync
}

// ✅ BETTER: Don't duplicate prop in state
function GoodComponent({ initialCount }) {
  // Just use the prop directly
  return <div>{initialCount}</div>;
}

// ✅ OR: Only update if different
function SmartComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  useEffect(() => {
    if (count !== initialCount) {
      setCount(initialCount);
    }
  }, [initialCount, count]);
}
```

### Scenario 4: Missing Dependency (Stale Closure)

```javascript
// ⚠️ NOT infinite loop, but BUG
function Component({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, []); // Missing userId!
  
  // Doesn't infinite loop, but doesn't refetch when userId changes
  // Not truly infinite, but wrong behavior
}
```

### How to Detect Infinite Loops

```javascript
// Method 1: Console logs
useEffect(() => {
  console.log('Effect running'); // If logs rapidly, it's infinite
  
  // Do something
}, [deps]);

// Method 2: React DevTools Profiler
// Shows if component re-renders constantly

// Method 3: Browser console
// "Too many re-renders" warning from React

// Method 4: Check dependencies
// If dependencies change on every render, that's the problem
```

### How to Fix Infinite Loops

**Step 1: Identify the problem**

```javascript
useEffect(() => {
  console.log('Effect ran');
  // What happens here?
  // Does it update state?
  // Does it use state?
}, [/* What dependencies? */]);
```

**Step 2: Check dependencies**

```javascript
// Rule: If you USE a variable, INCLUDE it
useEffect(() => {
  fetch(`/api/users/${userId}`); // Uses userId
}, []); // ❌ Missing userId!

// ✅ Fix:
}, [userId]);
```

**Step 3: Use functional updates when appropriate**

```javascript
// If new state depends on old state AND you're in useEffect:
setCount(prev => prev + 1); // Doesn't need count in dependencies
```


## PART 5: ADVANCED PATTERNS

### Pattern 1: Conditional Effects

```javascript
function Component({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Conditional logic INSIDE effect
    if (!userId) {
      return; // Exit early
    }
    
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
```

### Pattern 2: Multiple Effects for Separation

```javascript
function UserDetail({ userId, postId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  // Effect 1: Fetch user
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
  
  // Effect 2: Fetch posts
  useEffect(() => {
    fetch(`/api/users/${userId}/posts`)
      .then(r => r.json())
      .then(setPosts);
  }, [userId]);
  
  // Effect 3: Fetch comments
  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`)
      .then(r => r.json())
      .then(setComments);
  }, [postId]);
  
  // Better than one big effect!
  // Each has one job
  // Easy to test and modify
}
```

### Pattern 3: Effect with Cleanup (Subscription Pattern)

```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Setup
    const subscription = subscribeToRoom(roomId, (message) => {
      setMessages(prev => [...prev, message]);
    });
    
    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, [roomId]);
}
```

### Pattern 4: Effect with Mounting Check

```javascript
function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      
      // Only update if component still mounted
      if (isMounted) {
        setData(result);
      }
    };
    
    fetchData();
    
    return () => {
      isMounted = false; // Mark as unmounted
    };
  }, []);
}
```



## PART 8: HOW TO EXPLAIN IN INTERVIEW

### Interview Question: "Explain useEffect and Its Lifecycle"

**Your Answer:**

> "useEffect lets you run side effects after the component renders. The lifecycle is: component renders first, then browser paints, then useEffect runs.

> The dependency array controls when it runs. Empty array means run once on mount. Array with values means re-run when those values change. No array means run after every render.

> Here's the key thing: if the effect uses a variable, that variable must be in the dependency array. If you forget it, you get stale state in closures. This is a common bug, especially in intervals and async operations.

> The cleanup function runs before the next effect or when component unmounts. It's critical for preventing memory leaks — you need to unsubscribe from subscriptions, clear timers, remove event listeners.

> Infinite loops happen when an effect updates state without proper dependencies, causing the component to re-render, the effect to re-run, and update state again. You detect this by checking if the dependency array changes on every render.

> Most common pattern: fetch on mount with empty array, or refetch when a prop changes by including it in dependencies."

### Key Points They Want to Hear

✅ "Render first, then useEffect"  
✅ "Empty [] = run once"  
✅ "[dep] = run when dep changes"  
✅ "If you use it, include it in dependencies"  
✅ "Cleanup prevents memory leaks"  
✅ "Infinite loops = effect updates state without dependencies"  
✅ "Common: fetch on mount, or refetch when prop changes"  



## **Hooks Rules **

**Rule 1: Only Call Hooks at Top Level**
- Not inside if/for/while/try/catch
- Not inside functions or event handlers
- Not inside loops
- Why: Hook call order must be consistent
- Fix: Move conditional logic inside the hook

**Rule 2: Only Call Hooks from Components/Custom Hooks**
- Only functional components
- Only custom hooks
- Not from class components
- Not from regular functions
- Why: Need React rendering context

**Dependencies:**
- If you use a variable, include it
- Memoize objects/functions if dependency
- Missing dependencies = stale state
- ESLint plugin catches violations

**Interview Answer:** "Hook call order must be consistent, so never call conditionally. State depends on render context, so only in components. And if you use a variable in an effect, include it in dependencies."

---





## Lifecycle + Cleanup + Dependencies + Infinite Re-renders


## PART 1: THE COMPLETE useEffect LIFECYCLE

```
Component Mount
  ↓
Component Renders (function body executes)
  ↓
Browser Paints (user sees new UI)
  ↓
useEffect runs (after paint)
  ↓
User Interacts (click, type, etc)
  ↓
State/Props Update
  ↓
Component Re-renders
  ↓
Browser Paints Again
  ↓
Cleanup Function Runs (if previous effect had one)
  ↓
New useEffect Runs
  ↓
Repeat...
```

This is critical: **useEffect runs AFTER render, not before.**

### Detailed Step-by-Step Example

```jsx
function Counter() {
  console.log("1. Render");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("3. Effect runs");

    document.title = `Count: ${count}`;

    return () => {
      console.log("4. Cleanup");
    };
  }, [count]);

  console.log("2. Before return");

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

#### What happens?

**When the component first mounts:**

```text
1. Render
2. Before return
3. Effect runs
```

The component renders first, and then the effect runs.

---

**When you click the button:**

```text
1. Render
2. Before return
4. Cleanup
3. Effect runs
```

Why?

* `count` changed → component re-renders.
* Before React runs the new effect, it cleans up the previous effect.
* Then the new effect runs.

---

**When the component unmounts:**

```text
4. Cleanup
```

The cleanup function runs when the component is removed.

#### This demonstrates the key observations

1. **Render happens first** → component function runs.
2. **`useEffect` runs after render** → effect runs after the UI update.
3. **Cleanup runs before the next effect or on unmount**.
4. **Dependencies control re-runs** → because `[count]` contains `count`, the effect runs again whenever `count` changes.


## PART 2: DEPENDENCY ARRAY DEEP DIVE

### The Three Dependency Patterns

#### **Pattern 1: No Dependency Array (Avoid!)**

```javascript
useEffect(() => {
  console.log('Running');
});

// Runs AFTER EVERY RENDER
// 
// Mount: "Running"
// State change: "Running"
// Props change: "Running"
// Any re-render: "Running"
// 
// Usually causes infinite loops or performance issues
```

**When to use:** Almost never. Only for effects that must run after every render.

```javascript
// ✅ Valid use case: Sync with browser
useEffect(() => {
  document.title = `You clicked ${count} times`;
  // Must run every render to stay in sync
});
```

#### **Pattern 2: Empty Dependency Array**

```javascript
useEffect(() => {
  console.log('Running');
}, []);

// Runs ONCE when component mounts
// Never again, even if props/state change
```

**When to use:** Setup that happens once - subscriptions, initial fetch, etc.

```javascript
// ✅ Fetch once on mount
useEffect(() => {
  fetch('/api/config')
    .then(r => r.json())
    .then(setConfig);
}, []); // Don't refetch when anything changes

// ✅ Subscribe once on mount
useEffect(() => {
  const unsubscribe = subscribeToNotifications(handleNotification);
  return () => unsubscribe();
}, []); // Subscribe once, cleanup once
```

#### **Pattern 3: With Dependencies**

```javascript
useEffect(() => {
  console.log('Running');
}, [userId, postId]);

// Runs when component mounts
// Re-runs when userId OR postId changes
// Doesn't re-run if other props/state change
```

**When to use:** When effect needs to respond to prop/state changes.

```javascript
// ✅ Refetch when userId changes
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then(r => r.json())
    .then(setUser);
}, [userId]); // Re-run if userId changes

// ✅ Refetch when either changes
useEffect(() => {
  fetch(`/api/posts?user=${userId}&sort=${sortBy}`)
    .then(r => r.json())
    .then(setPosts);
}, [userId, sortBy]); // Re-run if either changes
```


### Common Dependency Mistakes

#### **Mistake 1: Missing Dependency**

```javascript
// ❌ WRONG
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1); // Uses stale count
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Missing count!
  
  // Increments once then stops
}

// ✅ Option 1: Use functional update (no dependency needed)
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);

// ✅ Option 2: Add to dependencies (effect re-runs constantly)
useEffect(() => {
  const timer = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(timer);
}, [count]); // Re-creates timer every second!
```

#### **Mistake 2: Object as Dependency**

```javascript
// ❌ WRONG: New object every render
function Component({ user }) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`/api/posts?user=${user.id}`)
      .then(r => r.json())
      .then(setPosts);
  }, [user]); // user is object, new reference every render!
  
  // Effect re-runs on EVERY render even if user data hasn't changed
}

// ✅ CORRECT: Use the ID, not the object
useEffect(() => {
  fetch(`/api/posts?user=${user.id}`)
    .then(r => r.json())
    .then(setPosts);
}, [user.id]); // Use the ID, not object

// OR

// ✅ Memoize the object
const memoizedUser = useMemo(() => user, [user.id]);
useEffect(() => {
  fetch(`/api/posts?user=${memoizedUser.id}`)
    .then(r => r.json())
    .then(setPosts);
}, [memoizedUser]);
```

#### **Mistake 3: Function as Dependency**

```javascript
// ❌ WRONG: New function every render
function Component() {
  const callback = () => {
    console.log('clicked');
  };
  
  useEffect(() => {
    element.addEventListener('click', callback);
    return () => element.removeEventListener('click', callback);
  }, [callback]); // New function every render!
  
  // Listener added/removed on every render
}

// ✅ CORRECT: Memoize the function
const callback = useCallback(() => {
  console.log('clicked');
}, []);

useEffect(() => {
  element.addEventListener('click', callback);
  return () => element.removeEventListener('click', callback);
}, [callback]);
```


## PART 3: CLEANUP FUNCTIONS IN DEPTH

### When Cleanup Runs

```javascript
useEffect(() => {
  console.log('Setup');
  
  return () => {
    console.log('Cleanup');
  };
}, [dep]);

// Cleanup runs:
// 1. Before the effect runs again (if dependency changed)
// 2. When component unmounts
// 3. NOT on every render without dependencies changing
```

### Critical Cleanup Scenarios

#### **Scenario 1: Event Listeners**

```javascript
// ❌ WRONG: Listener added but never removed
function WindowListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Resized');
    };
    
    window.addEventListener('resize', handleResize);
    // Forgot cleanup! Listener stays even after unmount
  }, []);
  
  // If component mounts/unmounts 10 times, 10 listeners active!
}

// ✅ CORRECT: Remove listener in cleanup
function WindowListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Resized');
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Only one listener at a time
}
```

#### **Scenario 2: Timers**

```javascript
// ❌ WRONG: Timer keeps running after unmount
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    // Timer still runs even if component unmounts!
  }, []);
}

// ✅ CORRECT: Clear timer in cleanup
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
}
```

#### **Scenario 3: Subscriptions/WebSockets**

```javascript
// ❌ WRONG: Subscription stays active
function RealTimeData() {
  useEffect(() => {
    const unsubscribe = subscribeToUpdates((data) => {
      console.log('Update:', data);
    });
    // Still subscribed even after unmount!
  }, []);
}

// ✅ CORRECT: Unsubscribe in cleanup
function RealTimeData() {
  useEffect(() => {
    const unsubscribe = subscribeToUpdates((data) => {
      console.log('Update:', data);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
}
```

## PART 4: INFINITE RE-RENDER SCENARIOS

### How Infinite Loops Happen

```
Effect runs → Updates state → Component re-renders → Effect runs again → ...
```

### Scenario 1: setState Without Dependencies

```javascript
// ❌ INFINITE LOOP
function BadComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1); // Updates state
  }); // No dependency array!
  
  // Render → Effect runs → setCount → Re-render → Effect runs → ...
  // INFINITE LOOP!
}
```

**Fix:**

```javascript
// ✅ CORRECT: Empty dependency array
useEffect(() => {
  setCount(count + 1);
}, []); // Run once on mount

// OR

// ✅ CORRECT: Use functional update
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Only run once
```

### Scenario 2: Object Dependency

```javascript
// ❌ INFINITE LOOP
function BadComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, [{ id: 1 }]); // New object every render!
  
  // Every render creates new object
  // Effect sees new dependency, re-runs
  // setData triggers re-render
  // New object created again
  // INFINITE LOOP!
}

// ✅ CORRECT: Use primitive
useEffect(() => {
  fetch('/api/data')
    .then(r => r.json())
    .then(setData);
}, [1]); // Primitive, same every time
```

### Scenario 3: State Derived from Props

```javascript
// ❌ INFINITE LOOP
function BadComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  useEffect(() => {
    setCount(initialCount); // Update state from prop
  }, [initialCount]); // Every time initialCount changes
  
  // Actually this one works fine! Not an infinite loop
  // But unnecessary if you don't need to sync
}

// ✅ BETTER: Don't duplicate prop in state
function GoodComponent({ initialCount }) {
  // Just use the prop directly
  return <div>{initialCount}</div>;
}

// ✅ OR: Only update if different
function SmartComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  useEffect(() => {
    if (count !== initialCount) {
      setCount(initialCount);
    }
  }, [initialCount, count]);
}
```

### Scenario 4: Missing Dependency (Stale Closure)

```javascript
// ⚠️ NOT infinite loop, but BUG
function Component({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, []); // Missing userId!
  
  // Doesn't infinite loop, but doesn't refetch when userId changes
  // Not truly infinite, but wrong behavior
}
```

### How to Detect Infinite Loops

```javascript
// Method 1: Console logs
useEffect(() => {
  console.log('Effect running'); // If logs rapidly, it's infinite
  
  // Do something
}, [deps]);

// Method 2: React DevTools Profiler
// Shows if component re-renders constantly

// Method 3: Browser console
// "Too many re-renders" warning from React

// Method 4: Check dependencies
// If dependencies change on every render, that's the problem
```

### How to Fix Infinite Loops

**Step 1: Identify the problem**

```javascript
useEffect(() => {
  console.log('Effect ran');
  // What happens here?
  // Does it update state?
  // Does it use state?
}, [/* What dependencies? */]);
```

**Step 2: Check dependencies**

```javascript
// Rule: If you USE a variable, INCLUDE it
useEffect(() => {
  fetch(`/api/users/${userId}`); // Uses userId
}, []); // ❌ Missing userId!

// ✅ Fix:
}, [userId]);
```

**Step 3: Use functional updates when appropriate**

```javascript
// If new state depends on old state AND you're in useEffect:
setCount(prev => prev + 1); // Doesn't need count in dependencies
```


## PART 5: ADVANCED PATTERNS

### Pattern 1: Conditional Effects

```javascript
function Component({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Conditional logic INSIDE effect
    if (!userId) {
      return; // Exit early
    }
    
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
```

### Pattern 2: Multiple Effects for Separation

```javascript
function UserDetail({ userId, postId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  // Effect 1: Fetch user
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
  
  // Effect 2: Fetch posts
  useEffect(() => {
    fetch(`/api/users/${userId}/posts`)
      .then(r => r.json())
      .then(setPosts);
  }, [userId]);
  
  // Effect 3: Fetch comments
  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`)
      .then(r => r.json())
      .then(setComments);
  }, [postId]);
  
  // Better than one big effect!
  // Each has one job
  // Easy to test and modify
}
```

### Pattern 3: Effect with Cleanup (Subscription Pattern)

```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Setup
    const subscription = subscribeToRoom(roomId, (message) => {
      setMessages(prev => [...prev, message]);
    });
    
    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, [roomId]);
}
```

### Pattern 4: Effect with Mounting Check

```javascript
function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      
      // Only update if component still mounted
      if (isMounted) {
        setData(result);
      }
    };
    
    fetchData();
    
    return () => {
      isMounted = false; // Mark as unmounted
    };
  }, []);
}
```



## PART 8: HOW TO EXPLAIN IN INTERVIEW

### Interview Question: "Explain useEffect and Its Lifecycle"

**Your Answer:**

> "useEffect lets you run side effects after the component renders. The lifecycle is: component renders first, then browser paints, then useEffect runs.

> The dependency array controls when it runs. Empty array means run once on mount. Array with values means re-run when those values change. No array means run after every render.

> Here's the key thing: if the effect uses a variable, that variable must be in the dependency array. If you forget it, you get stale state in closures. This is a common bug, especially in intervals and async operations.

> The cleanup function runs before the next effect or when component unmounts. It's critical for preventing memory leaks — you need to unsubscribe from subscriptions, clear timers, remove event listeners.

> Infinite loops happen when an effect updates state without proper dependencies, causing the component to re-render, the effect to re-run, and update state again. You detect this by checking if the dependency array changes on every render.

> Most common pattern: fetch on mount with empty array, or refetch when a prop changes by including it in dependencies."

### Key Points They Want to Hear

✅ "Render first, then useEffect"  
✅ "Empty [] = run once"  
✅ "[dep] = run when dep changes"  
✅ "If you use it, include it in dependencies"  
✅ "Cleanup prevents memory leaks"  
✅ "Infinite loops = effect updates state without dependencies"  
✅ "Common: fetch on mount, or refetch when prop changes"  



## **Hooks Rules **

**Rule 1: Only Call Hooks at Top Level**
- Not inside if/for/while/try/catch
- Not inside functions or event handlers
- Not inside loops
- Why: Hook call order must be consistent
- Fix: Move conditional logic inside the hook

**Rule 2: Only Call Hooks from Components/Custom Hooks**
- Only functional components
- Only custom hooks
- Not from class components
- Not from regular functions
- Why: Need React rendering context

**Dependencies:**
- If you use a variable, include it
- Memoize objects/functions if dependency
- Missing dependencies = stale state
- ESLint plugin catches violations

**Interview Answer:** "Hook call order must be consistent, so never call conditionally. State depends on render context, so only in components. And if you use a variable in an effect, include it in dependencies."

---




# Phase 2 — Set 4: CUSTOM HOOKS & HOOK COMPOSITION
## Building Reusable Hook Logic and Combining Hooks

---

### **What Is a Custom Hook?**

A **JavaScript function** that:
- Starts with `use` (e.g., `useForm`, `useFetch`)
- Calls other hooks (useState, useEffect, etc.)
- Returns state and functions
- Can be reused across components

### **Rules for Custom Hooks**

1. **Must start with `use`** (e.g., `useForm`, `useFetch`)
2. **Must call other hooks** (useState, useEffect, useRef, etc.)
3. **Can only be called from** components or other hooks
4. **Must follow hook rules** (call order, conditional calls, etc.)

---

## **PART 2: BUILDING CUSTOM HOOKS**

### **Custom Hook: useDebounce**

```javascript
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    // Wait delay ms after value stops changing
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// ✅ Usage
function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: results } = useFetch(
    debouncedSearchTerm ? `/api/users/search?q=${debouncedSearchTerm}` : null,
    [debouncedSearchTerm]
  );
  
  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      <ul>
        {results?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
```

---


## **PART 4: EXTRACTING LOGIC INTO HOOKS**

### **When to Extract Logic**

Extract into a custom hook when:
1. **Logic is repeated** in multiple components
2. **Logic can be isolated** into a reusable unit
3. **Logic calls hooks** (useState, useEffect, etc.)
4. **Logic is complex** and should be hidden from component



## **PART 9: HOW TO EXPLAIN IN INTERVIEW**

### **Interview Question: "What Are Custom Hooks and Why Would You Build One?"**

**Your Answer:**

> "Custom hooks are just JavaScript functions that call other hooks. They start with 'use' so React knows they follow hook rules.

> I build custom hooks to extract repeated logic. For example, if multiple components fetch data the same way, I extract that into a useFetch hook. Then every component can reuse it instead of duplicating the code.

> A good example is useForm. Many components need form state, validation, and submission handling. Instead of writing all that in every component, I extract it into a custom hook that returns values, handlers, and errors. Now components just use the hook and focus on rendering.

> Custom hooks also let me compose logic. I can build useFetch, then usePagination on top of that, then useSearchWithPagination on top of that. Each layer adds a responsibility.

> The key rules: must start with 'use', can only call hooks inside them, must follow hook rules like dependencies. And I need to think about the dependencies carefully to avoid infinite loops or stale data.

> Most useful custom hooks I've built: useFetch for data loading, useForm for form state, usePrevious for tracking changes, useLocalStorage for persistence, useAsync for promise handling."

### **Key Points They Want to Hear**

✅ "Extract repeated logic"  
✅ "Function that calls other hooks"  
✅ "Reusable across components"  
✅ "Must start with 'use'"  
✅ "Can compose hooks together"  
✅ "Examples: useFetch, useForm, usePrevious"  
✅ "Follow hook rules and dependencies"  

---

# REACT HOOKS - PRACTICE QUESTIONS
## Output-Based + Tricky Questions (4 YOE Level)

---

## **SET 1: useState OUTPUT QUESTIONS**

### **Q1: What will log?**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  
  return <button onClick={handleClick}>Click ({count})</button>;
}

// First click, what logs and what shows on button?
```

**Answer:**
```
Logs: 0
Button shows: 1

Why: setState is async. console.log runs before setState completes.
Both setCount calls use same closure value (count=0).
Batched to one update = count becomes 1.
```

---

### **Q2: What's the final value?**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  
  return <button onClick={handleClick}>Count: {count}</button>;
}

// Click once, what's the final count?
```

**Answer:**
```
Final count: 3

Why: Functional updates queue correctly.
First: 0 → 1
Second: 1 → 2
Third: 2 → 3
Each receives updated previous value.
```

---

### **Q3: What renders?**

```javascript
function Component() {
  const [obj, setObj] = useState({ name: 'John' });
  
  const handleClick = () => {
    obj.name = 'Jane';  // Mutate
    setObj(obj);        // Pass same reference
  };
  
  return (
    <>
      <button onClick={handleClick}>Change Name</button>
      <p>{obj.name}</p>
    </>
  );
}

// Click button, does UI update?
```

**Answer:**
```
NO, UI doesn't update.

Why: React uses reference equality. obj reference is same.
React thinks nothing changed, doesn't re-render.
obj.name is actually 'Jane' in memory, but UI still shows 'John'.

Fix: setObj(prev => ({ ...prev, name: 'Jane' }))
```

---

### **Q4: Tricky - What renders and in what order?**

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  console.log('Parent render');
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      <Child count={count} />
    </>
  );
}

function Child({ count }) {
  console.log('Child render, count:', count);
  return <div>{count}</div>;
}

// Initial load + 1 click. What logs in order?
```

**Answer:**
```
Initial:
  Parent render
  Child render, count: 0

Click:
  Parent render
  Child render, count: 1

Why: Parent updates state → re-renders → Child re-renders with new props
```

---

## **SET 2: useEffect QUESTIONS**

### **Q5: What logs and when?**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Effect ran, count:', count);
  }, [count]);
  
  console.log('Render, count:', count);
  
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return <button onClick={handleClick}>Click ({count})</button>;
}

// Initial load + 1 click. What logs in order?
```

**Answer:**
```
Initial:
  Render, count: 0
  Effect ran, count: 0

Click:
  Render, count: 1
  Effect ran, count: 1

Why: Render happens first, then effect runs after render.
```

---

### **Q6: Tricky - Infinite loop?**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1);
  }, []);  // Empty dependency
  
  return <div>{count}</div>;
}

// What happens?
```

**Answer:**
```
Mounts with count=0. Effect runs once (empty dependency).
setCount(0 + 1) → count becomes 1.
Effect doesn't run again (dependency still empty).
Result: count = 1 (NO infinite loop here)

BUT if dependency was [count]:
useEffect(() => {
  setCount(count + 1);
}, [count]);

Then: count changes → effect runs → count changes → effect runs...
INFINITE LOOP!
```

---

### **Q7: Cleanup function - What logs?**

```javascript
function Component() {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    console.log('Effect: subscribing');
    
    return () => {
      console.log('Cleanup: unsubscribing');
    };
  }, []);
  
  return (
    <>
      {visible && <Unmounted />}
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </>
  );
}

function Unmounted() {
  return <div>I'm here</div>;
}

// Initial + toggle + toggle. What logs?
```

**Answer:**
```
Initial:
  Effect: subscribing

First toggle (unmount Unmounted):
  Cleanup: unsubscribing

Second toggle (remount Unmounted):
  Effect: subscribing

Why: Cleanup runs when component unmounts or dependency changes.
```

---

### **Q8: Tricky - Closure in effect**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Timer fired, count:', count);
      setCount(count + 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Increment ({count})
      </button>
    </>
  );
}

// Click 3 times rapidly, wait for timer. What logs?
```

**Answer:**
```
After 1 second:
  Timer fired, count: 0

Final count: 1

Why: Effect runs once with count=0 in closure.
No matter how many times you click, timer still has count=0.
setCount(0 + 1) always sets to 1.

Fix: Add count to dependency or use functional update.
useEffect(() => {
  const timer = setTimeout(() => {
    setCount(prev => prev + 1);  // Always gets current
  }, 1000);
  return () => clearTimeout(timer);
}, []);
```

---

## **SET 3: useRef QUESTIONS**

### **Q9: What happens?**

```javascript
function Component() {
  const ref = useRef(0);
  const [render, setRender] = useState(false);
  
  const handleClick = () => {
    ref.current++;
    console.log('ref.current:', ref.current);
  };
  
  const handleRender = () => {
    setRender(!render);
  };
  
  return (
    <>
      <button onClick={handleClick}>Click ref ({ref.current})</button>
      <button onClick={handleRender}>Force render</button>
    </>
  );
}

// Click first button 3 times. What shows on button?
```

**Answer:**
```
First button always shows: 0

Why: useRef doesn't trigger re-render.
ref.current is 3 in memory, but component never re-renders.
Button still shows 0 (initial value).

Console logs: 1, 2, 3 (correctly)

When you click second button to force render:
First button now shows: 3
```

---

### **Q10: DOM ref - Does it work?**

```javascript
function Component() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current.focus();
    console.log('Value:', inputRef.current.value);
  };
  
  return (
    <>
      <input 
        ref={inputRef}
        type="text"
        defaultValue="Hello"
      />
      <button onClick={handleFocus}>Focus & Log</button>
    </>
  );
}

// Type "World" in input, click button. What logs?
```

**Answer:**
```
Logs: Value: World

Why: ref.current holds the actual DOM element.
Can access .value, .focus(), any DOM property.
It shows the CURRENT value in input, not defaultValue.
```

---

### **Q11: Tricky - ref vs state**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;
    console.log('state:', count, 'ref:', countRef.current);
  };
  
  return (
    <button onClick={handleClick}>
      State: {count}, Ref: {countRef.current}
    </button>
  );
}

// Click 3 times. What logs and what shows on button?
```

**Answer:**
```
Logs:
  Click 1: state: 0, ref: 1
  Click 2: state: 1, ref: 2
  Click 3: state: 2, ref: 3

Button shows:
  State: 3, Ref: 3

Why: State updates are batched, console.log sees previous value.
But final render shows both as 3.
State used in console.log is closure value (old).
Ref shows current value.
```

---

## **SET 4: CUSTOM HOOKS QUESTIONS**

### **Q12: What's the issue?**

```javascript
// Custom hook
function useCounter(initial) {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  return { count, increment };
}

// Component 1
function Counter1() {
  const { count, increment } = useCounter(0);
  return <button onClick={increment}>{count}</button>;
}

// Component 2
function Counter2() {
  const { count, increment } = useCounter(0);
  return <button onClick={increment}>{count}</button>;
}

// Both components show separate counters? Or same?
```

**Answer:**
```
Separate counters.

Why: Each component instance gets its own hook instance.
Counter1 has count=0 (separate state)
Counter2 has count=0 (separate state)

They don't share state. Each maintains own state.
```

---

### **Q13: Hook rule - Will this error?**

```javascript
function Component({ showCounter }) {
  if (showCounter) {
    const { count, increment } = useCounter();
  }
  
  const { name, setName } = useInput('');
  
  return <div>...</div>;
}

// Will this cause error?
```

**Answer:**
```
YES, ERROR!

Why: Hooks must be called in same order every render.
If showCounter is true: calls useCounter first, useInput second
If showCounter is false: calls useInput first
React gets confused about which state goes where.

Fix: Move conditional inside hook or component.
const counter = useCounter(showCounter);
```

---

## **SET 5: useMemo + useCallback QUESTIONS**

### **Q14: Will Child re-render?**

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Child</button>;
});

// Click Parent's button. Does Child re-render?
```

**Answer:**
```
NO, Child doesn't re-render.

Why: 
- useCallback keeps handleClick reference same across renders
- React.memo checks if props changed
- onClick prop is same (same function reference)
- Child skips re-render ✅

Without useCallback:
- New function every render
- Props changed
- Child re-renders
```

---

### **Q15: What's wasted here?**

```javascript
function Component({ items }) {
  const filtered = useMemo(() => {
    return items.filter(item => item.active);
  }, [items]);
  
  const doubled = useMemo(() => {
    return 5 * 2;  // Always 10
  }, []);
  
  return <div>{doubled}</div>;
}

// What's the problem?
```

**Answer:**
```
Second useMemo is wasted.

Why: 5 * 2 is trivial calculation.
Memoization overhead is worse than just calculating.

Should be:
const doubled = 10;

Rule: Only memoize expensive calculations
(filtering 1000 items, complex algorithms, etc)
```

---

### **Q16: Will this work as expected?**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(count + 1);  // Uses closure count
  }, []);  // No dependency!
  
  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>
    </>
  );
}

// Click button multiple times. What happens?
```

**Answer:**
It gets stuck at 1 after the first click.

The key issue is the stale closure.

---

## **SET 6: TRICKY COMBINATIONS**

### **Q17: What's the final state?**

```javascript
function Component() {
  const [state, setState] = useState({ name: '', age: null });
  const prevStateRef = useRef(state);
  
  useEffect(() => {
    prevStateRef.current = state;
  }, [state]);
  
  const handleUpdate = () => {
    setState({ name: 'John', age: 30 });
    console.log('prevStateRef:', prevStateRef.current);
    console.log('current state:', state);
  };
  
  return <button onClick={handleUpdate}>Update</button>;
}

// Click button. What logs?
```

**Answer:**
```
Logs:
  prevStateRef: { name: '', age: null }  (old state in ref)
  current state: { name: '', age: null }  (state in closure)

After re-render:
  Component shows: { name: 'John', age: 30 }
  prevStateRef.current: { name: 'John', age: 30 }

Why: setState is async. Logs happen before setState completes.
After re-render, effect updates prevStateRef.current.
```

---

### **Q18: Performance issue - Why is this slow?**

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

const UserCard = React.memo(({ user }) => {
  console.log('UserCard rendered:', user.name);
  return <div>{user.name}</div>;
});

// Click count button. Do UserCards re-render?
```

**Answer:**
```
YES, UserCards re-render every click.

Why: users array is recreated every render.
Even though React.memo checks props, array reference changed.
user object reference changed.
UserCard props changed.

Fix:
const users = useMemo(() => [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
], []);

Now array reference stays same → UserCards don't re-render.
```

---

### **Q19: Tricky - Multiple re-renders**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    console.log('Effect: count =', count);
  }, [count]);
  
  useEffect(() => {
    console.log('Effect: visible =', visible);
  }, [visible]);
  
  const handleClick = () => {
    setCount(c => c + 1);
    setVisible(v => !v);
  };
  
  return <button onClick={handleClick}>Click</button>;
}

// Click once. What logs in order?
```

**Answer:**
```
Logs:
  Effect: count = 1
  Effect: visible = false

Why: Both setState calls are batched into ONE re-render.
Component renders once with both changes.
Then both effects run (dependency changed).
```

---

### **Q20: Tricky - Stale closure in handler**

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setTimeout(() => {
      console.log('count:', count);
      setCount(count + 1);
    }, 1000);
  };
  
  return (
    <>
      <button onClick={handleClick}>Delayed click ({count})</button>
      <button onClick={() => setCount(c => c + 1)}>Instant ({count})</button>
    </>
  );
}

// Click Delayed, quickly click Instant 3 times, wait 1 sec. What logs?
```

**Answer:**
```
Logs: count: 0

Final count: 4

Why:
- Click Delayed: captures count=0
- Click Instant 3x: count becomes 1, 2, 3
- Timeout fires: logs 0 (closure), sets to 0+1=1
- But parent shows 3 before timeout, 1 after timeout ✅

Actually: Final should be 1 (from timeout)

The issue: Delayed action uses stale closure.

Fix: Use functional update
setTimeout(() => {
  setCount(prev => prev + 1);  // Gets current
}, 1000);
```

---

### **Q21: Real world - What's the bug?**

```javascript
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);  // ✓ Dependency correct
  
  return { data, loading };
}

// No bug here actually. But what if url is object?
function Component() {
  const url = { path: '/users' };  // ❌ New object every render
  const { data, loading } = useApi(url);
  
  return <div>{loading ? 'Loading...' : JSON.stringify(data)}</div>;
}

// What's the problem?
```

**Answer:**
```
INFINITE FETCH LOOP!

Why:
- url object recreated every render
- url reference changes
- useEffect sees url dependency changed
- Calls fetch again
- Fetch completes, component re-renders
- url object recreated again
- Cycle repeats

Fix:
const url = useMemo(() => ({ path: '/users' }), []);

OR just pass string:
const url = '/users';
```

---

## **BONUS: REAL INTERVIEW SCENARIO**

### **Q22: Debug this todo app**

```javascript
function useTodos() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = useCallback((text) => {
    setTodos(todos.concat({ id: Date.now(), text }));
  }, [todos]);  // Dependency
  
  const deleteTodo = useCallback((id) => {
    setTodos(todos.filter(t => t.id !== id));
  }, [todos]);
  
  return { todos, addTodo, deleteTodo };
}

function TodoApp() {
  const { todos, addTodo, deleteTodo } = useTodos();
  
  const handleAdd = () => {
    addTodo('New todo');
  };
  
  return (
    <>
      <button onClick={handleAdd}>Add</button>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
        />
      ))}
    </>
  );
}

const TodoItem = React.memo(({ todo, onDelete }) => {
  return (
    <div>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

// What's inefficient here?
```

**Answer:**
```
Problem: Callback dependencies are [todos]

- Every time todos changes, addTodo and deleteTodo recreate
- TodoItem receives new function reference
- TodoItem re-renders even though its todo didn't change
- Wasteful!

Fix: Use functional updates
const addTodo = useCallback((text) => {
  setTodos(prev => prev.concat({ id: Date.now(), text }));
}, []);  // No dependency!

const deleteTodo = useCallback((id) => {
  setTodos(prev => prev.filter(t => t.id !== id));
}, []);  // No dependency!

Now functions never change → TodoItem doesn't re-render.
```

---

## **ANSWER KEY CHECKLIST**

Before interview, know:
- [ ] setState is async (logs old value)
- [ ] Multiple setState calls are batched
- [ ] useRef doesn't trigger re-render
- [ ] Closures capture values at function time
- [ ] useEffect dependency matters
- [ ] Hooks must be in same order (no conditionals)
- [ ] React.memo only works if props are stable
- [ ] useCallback needed for memo'd children receiving functions
- [ ] useMemo only for expensive calculations
- [ ] Functional updates avoid stale state

---

**Practice these 22 questions until you can answer them instantly. 🚀**

# LOCAL STATE + LIFTING STATE - CORE QUESTIONS ONLY
## Most Frequently Asked in Interviews

---

## **Q1: Explain prop drilling and when to use Context instead**

**Answer:**
Prop drilling is passing state through multiple levels of components that don't care about it, just to reach a deep child.

```javascript
// ❌ Prop drilling:
<App userName={user}>
  <Header userName={user}>
    <Nav userName={user}>
      <UserMenu userName={user} />
    </Nav>
  </Header>
</App>

// ✅ Solution: Use Context
<UserProvider>
  <App>
    <Header>
      <Nav>
        <UserMenu />  // Gets user from context hook
      </Nav>
    </Header>
  </App>
</UserProvider>
```

Use Context when passing same prop through 3+ levels of components.

---

## **Q2: How do you know if state should be local or global?**

**Answer:**
**Local:** UI state (dropdown open, modal visible, tab selected), single component input values.

**Global:** Data shared across app (user info, permissions, theme, auth tokens).

```javascript
// Local - only this component cares
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// Global - multiple components need this
const [userName, setUserName] = useState('John');
```

---

## **Q3: You're over-using global state. How to identify and fix?**

**Answer:**
If you're storing UI state (hover, toggle, selected tab) in Redux/Context, that's over-engineering.

```javascript
// ❌ Wrong: UI state in global
const globalState = {
  isSidebarOpen: true,    // Keep LOCAL
  isModalVisible: false,  // Keep LOCAL
  userName: 'John',       // Keep GLOBAL
  userPermissions: {...}, // Keep GLOBAL
};

// ✅ Right: Split them
// Global store: userName, userPermissions
// Local state: isSidebarOpen, isModalVisible
```

---

## **Q4: When should you lift state? Show with component tree**

**Answer:**
Lift state to the lowest common parent of components that need it.

```javascript
App
├─ TodoList (needs todos)
├─ TodoStats (needs todos)  // Both need todos
└─ TodoInput (modifies todos)

// Lift to App
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoList todos={todos} />
      <TodoStats todos={todos} />
      <TodoInput onAdd={(todo) => setTodos([...todos, todo])} />
    </>
  );
}
```

Don't lift higher than needed. Don't keep separate state if components share data.

---

## **Q5: How do you structure state to avoid prop drilling?**

**Answer:**
Either lift to common parent OR use Context. Don't pass through middle components that don't need it.

Example from your TodoApp:
```javascript
// Without lifting, props would drill:
<App>
  <Header />
  <TodoApp>
    <TodoInput todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
  </TodoApp>
  <Footer />
</App>

// Better: Keep todos state in TodoApp
// Use Context if multiple unrelated features need same data
```

---

## **Q6: Related state - should they be one object or separate?**

**Answer:**
Group related state together.

```javascript
// ❌ Messy: Separate
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// ✅ Better: One object
const [apiState, setApiState] = useState({
  data: null,
  loading: false,
  error: null,
});

// ✅ Also good: For form
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
});
```

If they change together and represent one concept, group them.

---

## **Q7: Can sibling components share state directly?**

**Answer:**
No. Lift to parent or use Context. Siblings can't share state directly.

```javascript
// ❌ Wrong: Siblings can't share
function Sidebar() {
  const [selectedItem] = useState(null);
}

function Content() {
  // Can't access Sidebar's selectedItem
}

// ✅ Right: Lift to parent
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <>
      <Sidebar onSelect={setSelectedItem} />
      <Content selectedItem={selectedItem} />
    </>
  );
}
```

---

## **Q8: When would you use Context vs just lifting state?**

**Answer:**
**Lift state:** When parent-child relationship is clear and close.

**Use Context:** When data goes deep (3+ levels) or used by many unrelated components.

```javascript
// Lift: Close relationship
<Form>
  <Input value={name} onChange={setName} />
  <Button disabled={!name} />
</Form>

// Context: Deep/widespread
<ThemeProvider>
  <App>
    <Header>
      <Nav>
        <MenuItem />  // Uses theme from context
      </Nav>
    </Header>
    <Sidebar>
      <SidebarItem />  // Also uses theme
    </Sidebar>
  </App>
</ThemeProvider>
```

---

## **Q9: Your TodoApp - where should state live?**

**Answer:**
In TodoApp or custom hook. Pass down as props or through context if deeply nested.

```javascript
function useTodos() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };
  
  return { todos, addTodo, toggleTodo };
}

// Use in component
function TodoApp() {
  const { todos, addTodo, toggleTodo } = useTodos();
  
  return (
    <>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </>
  );
}
```

---

## **Q10: Tricky - When should you NOT lift state?**

**Answer:**
When components are independent and don't share data. Each input field doesn't need lifted state unless multiple components modify the same value.

```javascript
// ✅ Good: Independent local state
function LoginForm() {
  const [email, setEmail] = useState('');  // Local
  const [password, setPassword] = useState('');  // Local
  // Only this form uses these
}

function SignupForm() {
  const [email, setEmail] = useState('');  // Separate from LoginForm
  const [password, setPassword] = useState('');  // Separate from LoginForm
}
```

Don't share state just because it has same name. If unrelated forms, keep separate.

---

## **CHECKLIST**

Know these cold:
- [ ] Prop drilling problem and solution
- [ ] When to use Context vs lifting
- [ ] Local vs global state split
- [ ] Related state should be grouped
- [ ] Lift to lowest common parent
- [ ] Sibling components need parent state
- [ ] Over-engineering with global state

---

**These 10 questions cover 95% of what they'll ask. 🚀**


# CONTEXT API - SIMPLE EXPLANATION

---

## **WHAT IS CONTEXT API?**

Context API lets you pass data to any component without prop drilling. You create a context, wrap your app with a provider, and any component can access that data using a hook.

Think of it like: Instead of passing data hand-to-hand through every component, you put data in a shared container that anyone can grab from.

---

## **WHY USE IT?**

Prop drilling sucks. If you have data at top level but need it 5 levels deep, passing it through 4 middle components that don't care about it is messy.

Context solves this: Put data in Context, any child component can use it directly.

---

## **WHEN TO USE?**

- Theme (dark/light mode)
- User authentication 
- Language/localization
- App-wide settings

**NOT for:**
- Frequently changing data (causes unnecessary re-renders)
- Complex state logic (use Redux instead)

---

## 1. Recommended folder structure

```text
src/
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useTheme.js
├── components/
│   └── Header.jsx
├── App.jsx
└── main.jsx
```

**Responsibility of each file:**

| File | Responsibility |
|---|---|
| `context/ThemeContext.jsx` | Creates the context and provider; manages theme state. |
| `hooks/useTheme.js` | Provides a reusable custom hook to access the context. |
| `components/Header.jsx` | Displays the current theme and toggle button. |
| `App.jsx` | Defines the application component structure. |
| `main.jsx` | Entry point that renders the React application. |

## 2. Updated code

### Step 1: `context/ThemeContext.jsx`

Create the context and provider here.

```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Why here?** All theme-related state and logic live in one place.

### Step 2: `hooks/useTheme.js`

Create a custom hook to access the context.

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  return useContext(ThemeContext);
}
```

**Why here?** Components can access the theme without importing the context and calling `useContext()` themselves.

### Step 3: `components/Header.jsx`

Create the component that uses the theme.

```jsx
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h2>My Application</h2>

      <p>Current theme: {theme}</p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </header>
  );
}
```

**Why here?** The Header handles only the UI and user interaction. It doesn't manage the theme state itself.

### Step 4: `App.jsx`

Define your application structure and wrap the components that need the context.

```jsx
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <h3>Welcome to my application!</h3>
      </main>
      <footer>My Application Footer</footer>
    </ThemeProvider>
  );
}
```

**Why here?** The provider makes the theme available to `Header` and any other descendant components that need it.

### Step 5: `main.jsx`

This is the application's entry point.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**Why here?** This file mounts the React application into the HTML page.

---

## 3. Understand the flow

Remember this simple sequence:

```text
main.jsx
   ↓
App.jsx
   ↓
ThemeProvider
   ↓
Header.jsx
   ↓
useTheme()
   ↓
ThemeContext
```

When you click the toggle button:

1. `Header` calls `toggleTheme()`.
2. `toggleTheme()` updates the state inside `ThemeProvider`.
3. The provider supplies the updated theme through its context value.
4. `Header` receives the new value and updates its UI.

**Interview takeaway:** The provider manages the state, the custom hook provides convenient access, the component handles the UI, and `App.jsx` connects everything.

You can keep your existing Context API notes exactly as they are and use this folder structure for the implementation.
**That's all you need to know about Context API. 🚀**


# REDUCERS - SIMPLE EXPLANATION

---

## **WHAT IS A REDUCER?**

A reducer is a function that takes current state and an action, then returns new state based on that action.

Think of it like: You have a state machine. When something happens (action), the reducer says "based on current state and this action, here's the new state."

---

## **WHY USE REDUCERS?**

When state has multiple related pieces that change together, or when state logic is complex, reducers keep it organized in one place instead of scattered `setState` calls.

Instead of: `setCount`, `setError`, `setLoading` (3 separate updates)
Use: One reducer that handles all updates based on action type.

---

## **WHEN TO USE?**

- Multiple state pieces that relate to each other
- Complex state transitions (loading → success → error)
- State logic is complicated
- Same logic needed in multiple places

**NOT for:**
- Simple single value (just use useState)
- Independent state pieces (useCallback might be enough)

---

## **SIMPLE EXAMPLE - Counter with useReducer**

```javascript
// Step 1: Define reducer function
// Takes (state, action) → returns new state
function counterReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    
    case 'DECREMENT':
      return { count: state.count - 1 };
    
    case 'RESET':
      return { count: 0 };
    
    default:
      return state;
  }
}

// Step 2: Use useReducer in component
function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}
```

---

## **HOW IT WORKS**

1. **Define reducer** - Function that handles all state changes
2. **Call useReducer** - Pass reducer + initial state
3. **Get dispatch** - Function to trigger actions
4. **Dispatch action** - Send action with type and payload
5. **Reducer processes** - Returns new state based on action
6. **Component re-renders** - With new state

---

## **REDUCER VS USESTATE**

| Feature | useState | useReducer |
|---------|----------|-----------|
| Simple value | ✅ Use this | ❌ Overkill |
| Multiple related state | ❌ Gets messy | ✅ Use this |
| Complex logic | ❌ Hard to follow | ✅ Organized |
| Action-based | ❌ No | ✅ Yes |

---

## **QUICK ANSWER FOR INTERVIEWER**

> "A reducer is a function that takes current state and an action, then returns new state. It's useful when you have multiple state pieces that change together or complex state logic.

> I use useReducer when state changes are action-driven. For example, a form with loading, error, and data states - instead of three separate useState calls, I use one reducer that handles all transitions.

> For global state, I combine useReducer with Context API - the reducer manages state updates, and Context provides it to all components without prop drilling.

> The benefit is it keeps all state logic in one place, making it easier to reason about and test."

---

**That's all you need to know about Reducers. 🚀**


# REDUX TOOLKIT - MINIMAL TODO APP
## Interview Implementation (5-7 minutes)

---

## **STEP 1: Create todoSlice.js**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        done: false
      });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

## **STEP 2: Create store.js**

```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;
```

---

## **STEP 3: Wrap App in main.jsx**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## **STEP 4: Create TodoApp.jsx**

```javascript
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

function TodoApp() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  
  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };
  
  return (
    <div>
      <h2>Todo App</h2>
      
      <div>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

---

## **THAT'S IT! Total code: ~60 lines**

---

## **INTERVIEW FOLLOW-UP QUESTIONS**

### **Q1: Where is the state stored and how do components access it?**

**Answer:**
State is in Redux store. Components access it using `useSelector` hook which subscribes to store. When state changes, useSelector re-runs and component re-renders.

```javascript
const todos = useSelector(state => state.todos);
// Subscribes to todos, re-renders when todos change
```

---

### **Q2: How does dispatching an action work in your code?**

**Answer:**
`dispatch(addTodo(input))` calls the action creator, which sends action to reducer. Reducer processes it and updates store. All subscribed components re-render.

```javascript
// Dispatch sends { type: 'todos/addTodo', payload: 'Learn Redux' }
// Reducer receives it, updates state
// useSelector detects change, component re-renders
dispatch(addTodo(input));
```

---

### **Q3: Why are actions immutable? What happens if you mutate state directly?**

**Answer:**
Redux needs to detect state changes. It compares old and new state by reference. If you mutate directly, reference stays same, Redux doesn't detect change.

But with Redux Toolkit + Immer, you can write mutating code - it converts to immutable updates internally.

```javascript
// ❌ Direct mutation (wouldn't work in vanilla Redux)
state.push(newTodo);

// ✅ Redux Toolkit handles it (Immer converts to immutable)
state.push(newTodo);

// Immer converts ↓ to immutable update
state = [...state, newTodo];
```

---

### **Q4: What's the difference between action and action creator?**

**Answer:**
**Action** is object with type and payload:
```javascript
{ type: 'todos/addTodo', payload: 'Learn Redux' }
```

**Action creator** is function that returns action:
```javascript
const addTodo = (text) => ({
  type: 'todos/addTodo',
  payload: text
});
```

Redux Toolkit's `createSlice` generates action creators automatically.

---

### **Q5: How would you handle async operations like fetching todos from server?**

**Answer:**
Use `createAsyncThunk`:

```javascript
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('/api/todos');
    return response.json();
  }
);

// In slice extraReducers:
extraReducers: (builder) => {
  builder
    .addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
}
```

---

### **Q6: Why is Redux Toolkit better than vanilla Redux?**

**Answer:**
- **Less boilerplate** - createSlice does everything (actions + reducers)
- **Immer built-in** - Can write mutating code, Immer converts to immutable
- **DevTools included** - Debugging middleware pre-configured
- **No manual action creators** - Auto-generated

Vanilla Redux needs 3 separate files (actions, reducers, constants). Redux Toolkit does it in one.

---

### **Q7: When should you NOT use Redux?**

**Answer:**
- Simple apps (Context API enough)
- Local component state (just use useState)
- Frequently changing UI state (hover, input focus)
- Small projects (overkill)

Redux is for **large apps with complex, shared, global state**.

---

### **Q8: If you click Add twice quickly, what happens?**

**Answer:**
Both dispatches are processed. Reducer runs twice. State updates twice. Component re-renders twice. Two todos added.

Redux processes actions sequentially, not batched (unlike React state updates).

---

## **WHAT INTERVIEWER WILL LIKELY ASK NEXT**

After you show this code, they'll usually ask:

1. ✅ "Add a toggle feature" (mark as done)
2. ✅ "Add loading state" (use createAsyncThunk)
3. ✅ "How would you optimize performance?" (useSelector memoization)
4. ✅ "Difference between Redux and Context?" (already covered)

---

## **IF THEY ASK TO ADD TOGGLE**

Just add to slice:

```javascript
toggleTodo: (state, action) => {
  const todo = state.find(t => t.id === action.payload);
  if (todo) todo.done = !todo.done;
}
```

And in component:

```javascript
<input 
  type="checkbox"
  checked={todo.done}
  onChange={() => dispatch(toggleTodo(todo.id))}
/>
```

That's it.

---

## **PRACTICE CHECKLIST**

Before interview, practice writing this code from scratch:
- [ ] Can write todoSlice in 1 minute
- [ ] Can write store.js in 30 seconds
- [ ] Can write Provider setup in 30 seconds
- [ ] Can write TodoApp component in 3 minutes
- [ ] Can explain all follow-up questions

**Total: 5-7 minutes to write + explain** ✅

---

**Write this code, memorize answers. You're ready. 🚀**


# Zustand: Learn by Building a React App

## 1. What are we going to build?

We'll create a **Shopping Cart Counter** with three features:

- Add a product to the cart.
- Remove a product from the cart.
- Display the total number of items in the cart.

We'll use Zustand to manage the cart state and share it between React components.

### What will we learn?

| Concept | What you need to understand |
|---|---|
| Store | Where shared state lives |
| State | The data we want to manage |
| Actions | Functions that update the state |
| `create()` | Creates a Zustand store |
| `useStore()` | Reads state and subscribes components to updates |
| `set()` | Updates the store state |
| Selectors | Subscribe to specific pieces of state |

**Our target:** Understand the concepts, build the application, and prepare for common interview questions in approximately 15–20 minutes.

---

## 2. First, understand the problem

Imagine we have two React components:

- `ProductList` — displays products and an Add to Cart button.
- `Cart` — displays the total number of items.

Without a shared state manager, we might need to keep the cart state in a common parent and pass it down through props.

As the application grows, this can become inconvenient.

**Zustand provides a simpler alternative:** We create a shared store that both components can access directly.

Think of the store as a shared JavaScript object that React components can subscribe to.

## 3. Set up the React application (2 minutes)

If you already have a React application, you can skip the first command.

Create a project using Vite:

```bash
npm create vite@latest zustand-demo -- --template react
cd zustand-demo
npm install
npm install zustand
npm run dev
```

We'll create two files:

```text
src/
├── store/
│   └── cartStore.js
├── App.jsx
└── main.jsx
```

That's all we need.

---

## 4. Step 1: Create the Zustand store (4 minutes)

Create `src/store/cartStore.js`.

```javascript
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartCount: 0,

  addToCart: () =>
    set((state) => ({
      cartCount: state.cartCount + 1,
    })),

  removeFromCart: () =>
    set((state) => ({
      cartCount: Math.max(0, state.cartCount - 1),
    })),
}));
```

Let's understand this code instead of memorizing it.

### A. What does `create()` do?

```javascript
export const useCartStore = create((set) => ({
  // State and actions
}));
```

`create()` creates a Zustand store and returns a custom React hook.

We named this hook `useCartStore`.

Through this hook, React components can access the store's state and actions.

**Interview answer:**

"Zustand's `create()` function creates a store containing shared state and actions. It returns a custom hook that React components can use to access the store."

### B. What is state?

```javascript
cartCount: 0,
```

This is our state. Initially, the cart contains zero items.

We can store different types of data here, such as strings, numbers, objects, and arrays.

For this example, a number is sufficient.

### C. What are actions?

```javascript
addToCart: () =>
  set((state) => ({
    cartCount: state.cartCount + 1,
  })),
```

`addToCart` is an action that updates the cart count.

Let's break it down:

1. `set()` updates the Zustand store.
2. It receives a function that provides the current state.
3. We calculate the updated count using `state.cartCount + 1`.
4. We return an object containing the updated state.

Similarly, `removeFromCart` decreases the count, but `Math.max()` prevents it from going below zero.

**Important:** Zustand doesn't require you to create a separate reducer or wrap your application in a Redux Provider for this example.

### Remember this pattern

```javascript
set((state) => ({
  // Return updated state
}));
```

This is one of the most important patterns to understand when learning Zustand.

---

## 5. Step 2: Use Zustand in React components (5 minutes)

Open `src/App.jsx` and replace its contents with the following code.

```jsx
import { useCartStore } from "./store/cartStore";

function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2>Products</h2>
      <p>Wireless Headphones - ₹2,000</p>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

function Cart() {
  const cartCount = useCartStore((state) => state.cartCount);
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartCount}</p>

      <button onClick={removeFromCart} disabled={cartCount === 0}>
        Remove Item
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Zustand Shopping Cart</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}
```

### What is happening here?

Let's focus on three important concepts.

**A. Accessing state**

```javascript
const cartCount = useCartStore((state) => state.cartCount);
```

This reads `cartCount` from the Zustand store.

The function passed to `useCartStore` is called a **selector**.

It tells Zustand which part of the store the component needs.

**B. Accessing an action**

```javascript
const addToCart = useCartStore((state) => state.addToCart);
```

We retrieve the `addToCart` function from the same store.

When the user clicks the button, that function updates the shared state.

**C. Automatically updating the UI**

Suppose the user clicks Add to Cart.

The sequence is:

1. `ProductList` calls `addToCart()`.
2. Zustand updates `cartCount`.
3. `Cart` receives the updated value through its subscription.
4. React re-renders `Cart` with the new count.

Notice something important: **`ProductList` and `Cart` don't need to pass the cart count to each other through props.**

They access the same shared store independently.

That's the central idea behind Zustand.

---

## 6. Step 3: Test the application (2 minutes)

Run your application:

```bash
npm run dev
```

You should see something similar to this:

```text
Zustand Shopping Cart

Products
Wireless Headphones - ₹2,000
[Add to Cart]

Shopping Cart
Total Items: 0
[Remove Item]
```

Try these actions:

| Action | Expected cart count |
|---|---:|
| Initial state | 0 |
| Click Add to Cart | 1 |
| Click Add to Cart again | 2 |
| Click Remove Item | 1 |
| Click Remove Item twice | 0 |

The Remove Item button becomes disabled when the count reaches zero.

### Interview concept: Why use a selector?

Consider this line:

```javascript
const cartCount = useCartStore((state) => state.cartCount);
```

We subscribe to `cartCount`, rather than selecting the entire store.

This helps Zustand track the specific value the component uses. When an unrelated store field changes, a component selecting only `cartCount` generally doesn't need to re-render because of that change.

**Interview answer:**

"Selectors let components subscribe to specific pieces of state. This helps avoid unnecessary re-renders when unrelated state changes."

---

# 7. Important Zustand Interview Questions (5 minutes)

These are the questions I'd prioritize for your interview preparation.

### Q1. What is Zustand?

**Answer:**

"Zustand is a lightweight state management library for React. It allows us to manage shared state in a central store. Components can access and update that state without passing props through multiple component levels."

### Q2. How is Zustand different from Context API?

**Answer:**

"Both can help share state between components. Context API is built into React, whereas Zustand is an external library. Zustand provides a store, selectors, and subscriptions, which can make managing shared state more convenient as an application grows."

Remember: Context API is not inherently bad for performance. The right choice depends on the application's requirements and how the state is consumed.

### Q3. What is the purpose of `set()`?

**Answer:**

"`set()` is used to update the Zustand store. We can pass an object containing the updated state or a function that receives the current state and calculates the next state."

### Q4. What is a selector in Zustand?

**Answer:**

"A selector is a function that selects a specific value from the store. For example, `state => state.cartCount` selects only the cart count. This helps components subscribe to the state they actually need."

### Q5. Do we need a Provider to use Zustand?

**Answer:**

"No. For a typical module-level Zustand store created with `create()`, we don't need to wrap the application in a Provider. Components can import the store hook and use it directly."

There are other patterns, such as creating scoped stores with React Context, but you don't need them for this basic example.

### Q6. Does Zustand replace `useState()`?

**Answer:**

"No. `useState()` is useful for local component state, such as controlling whether a dropdown is open. Zustand is useful when state needs to be shared across multiple components."

### Q7. Does Zustand use Redux?

**Answer:**

"No. Zustand is a separate state management library and doesn't require Redux. It offers a simpler store-based approach, although both libraries can manage shared application state."

---


# Authentication & Authorization Interview Preparation — SDE-2


# Part 1: The master question — prepare this first

# Q1. How would you implement Authentication and Authorization from scratch, end to end?

## Step 1: User registration

First, the user creates an account using their email and password.

The frontend sends the details to the backend over HTTPS. The backend validates the input, checks whether the user already exists, and hashes the password using a secure algorithm like Argon2id or bcrypt.

Finally, the backend stores the user details and password hash in the database. We never store the original password.

## Step 2: User login

When the user logs in, the frontend sends their email and password to the backend.

The backend finds the user in the database and verifies the submitted password against the stored password hash.

If the credentials are correct, the backend generates a short-lived access token and establishes a refresh-token session.

The access token can be returned in the response body, while the refresh token is sent in a Secure, HttpOnly cookie.

## Step 3: Maintaining the session

Now the user is logged in, and we need to maintain their session.

I would keep the access token in memory on the frontend and the refresh token in a Secure, HttpOnly cookie.

The access token is used to access protected APIs. The refresh token is used to obtain a new access token when the old one expires.

JavaScript cannot directly read the HttpOnly cookie, which helps protect the refresh token from being stolen through certain XSS attacks.

I would also configure appropriate cookie settings and CSRF protection.

## Step 4: Accessing protected APIs

Suppose the user wants to view their orders.

The React application calls the orders API and sends the access token in the `Authorization` header as a Bearer token.

The backend verifies the token's signature and relevant claims, including its expiration, issuer, and audience.

If the token is valid, the backend identifies the user and continues to the authorization checks.

If the token is invalid or expired, the backend rejects the request.

## Step 5: Authorization

After authentication, the backend checks whether the user is allowed to perform the requested action.

For example, a normal user can view their own orders, while an admin can manage users.

I would implement role-based permissions where appropriate and also check resource ownership.

For example, even if a user is logged in, they should not be able to access another user's order simply by changing the order ID in the URL.

The backend performs these checks before returning protected data.

## Step 6: Handling an expired access token

Now suppose the access token expires while the user is using the application.

The frontend sends an API request, and the backend returns a `401 Unauthorized` response because the access token has expired.

I would use an Axios response interceptor to catch this authentication failure.

The interceptor checks whether the request can be retried and whether it has already been retried. It then calls the refresh endpoint.

This is where automatic token refresh happens. It does not happen automatically just because we use JWTs; we must implement this logic.

## Step 7: Refreshing the access token and retrying the request

The frontend calls `POST /auth/refresh`.

The browser automatically sends the refresh-token cookie if the cookie's settings allow it for that request.

The backend validates the refresh token and checks whether its session is still active. If valid, it issues a new access token. The refresh token may also be rotated, with the previous token invalidated.

The interceptor receives the new access token and retries the original API request.

For example, if the original request was `GET /api/orders`, the interceptor sends that request again using the new access token.

The user can continue working without logging in again.

If refreshing fails because the refresh token is expired, revoked, or invalid, the frontend clears the authentication state and asks the user to log in again.

I would also ensure that multiple simultaneous `401` responses share a single refresh operation, so they do not trigger unnecessary refresh requests.

## Step 8: Logout

When the user clicks logout, the frontend calls the logout endpoint.

The backend invalidates the refresh-token session and clears the refresh-token cookie. The frontend also clears the access token from memory and resets the authentication state.

This prevents the same refresh-token session from being used again.

One important point is that an already-issued self-contained access token may remain valid until it expires unless we also have a mechanism to revoke it immediately. That is one reason to keep access tokens short-lived.

## Step 9: Protecting routes in React

On the frontend, I would maintain authentication state using React Context or an appropriate state-management solution.

When the application loads or refreshes, I would check the user's current session with the backend and show a loading state while that check is in progress.

If the user is authenticated, I would allow them to access protected routes. Otherwise, I would redirect them to login.

I would also hide buttons or pages that the user is not allowed to use.

However, frontend protection is only for the user experience. The backend must enforce authentication and authorization on every protected API.

## Step 10: Handling security and production concerns

Finally, I would handle the important security and reliability concerns.

- XSS: Use safe rendering, avoid unsafe HTML injection, and apply suitable Content Security Policy controls.
- CSRF: Configure cookie settings correctly and use CSRF protection where required.
- Brute-force attacks: Apply rate limiting and monitor suspicious login attempts.
- Token security: Protect refresh tokens, rotate them where appropriate, and support revocation.
- Error handling: Distinguish authentication failures from authorization failures and server errors.
- Monitoring: Log important security events without logging passwords, access tokens, or refresh tokens.

I would also add tests for login, token expiry, refresh failures, logout, permissions, and access to another user's resources.




# Part 2: Common authentication questions

These are the follow-up questions you should be ready for after explaining the complete flow.

## Q2. What is the difference between Authentication and Authorization?

Answer:

"Authentication means verifying who the user is. For example, checking the user's email and password during login.

Authorization means checking what the authenticated user is allowed to do. For example, whether the user can delete a product or access an admin API.

Authentication comes first, and authorization comes after it. Both checks are important because a logged-in user should not automatically get access to every resource."

Senior-level point: A user can be authenticated but still receive a `403 Forbidden` response because they lack permission.

## Q3. What happens when a user logs in successfully?

Answer:

"After verifying the credentials, the backend establishes a session or issues tokens, depending on the design.

In a cookie-based session system, the backend creates a session record and sends the session ID in a secure cookie.

On subsequent requests, the browser sends the cookie. The backend validates the session and identifies the user.

I would also regenerate the session ID after login to prevent session fixation attacks."

## Q4. What is the difference between session-based authentication and JWT-based authentication?

Answer:

"In session-based authentication, the server stores session information and the browser sends a session ID with each request.

In JWT-based authentication, the server issues a signed token containing claims. The server can verify the signature and validate the claims without necessarily looking up a session on every request.

Sessions make centralized logout and revocation straightforward. JWTs can be useful in distributed systems, but revoking them before they expire requires additional design.

I would choose based on the application's requirements rather than assuming JWT is always better."

| Session-based                      | JWT-based                                   |
| ---------------------------------- | ------------------------------------------- |
| Server stores session state        | Token carries signed claims                 |
| Easy centralized revocation        | Immediate revocation needs extra mechanisms |
| Often uses a session cookie        | Often uses a cookie or Authorization header |
| Requires session storage or lookup | Can support local token verification        |

## Q5. What is a JWT, and how does it work?

Answer:

"JWT stands for JSON Web Token. It is a format for carrying claims between parties.

It has three parts: header, payload, and signature.

The header contains information about the token type and signing algorithm. The payload contains claims, such as the user ID and expiration time. The signature helps the server verify that the token has not been modified.

But a JWT is not automatically encrypted. Its payload can usually be decoded, so I would never store passwords or sensitive information inside it.

The backend must also validate the allowed algorithm, issuer, audience, expiration, and other relevant claims."

Senior-level point: A valid signature does not automatically mean the request is authorized. You must still check the user's permissions and resource access.

## Q6. Where should we store access tokens in a React application?

Answer:

"My choice depends on the application architecture.

For a traditional browser application, I generally prefer a secure, HttpOnly cookie when it fits the backend design. JavaScript cannot read the cookie directly, which helps reduce token theft through XSS.

If the application uses bearer tokens in the Authorization header, I would avoid storing long-lived tokens in localStorage because JavaScript can read them.

An in-memory access token can reduce persistence, but it does not eliminate XSS risks. I would also consider refresh-token handling, CSRF protection, and the application's threat model."

## Q7. What is the difference between access tokens and refresh tokens?

Answer:

"An access token is used to access protected APIs. It usually has a short lifetime.

A refresh token is used to obtain a new access token without asking the user to log in again.

I would protect the refresh token more carefully because it can extend the user's session. I would use rotation or another replay-detection strategy where appropriate, and support revocation during logout or suspected compromise.

If a refresh token is stolen, the attacker may continue the session, so it needs strong protection."

## Q8. What happens when an access token expires?

Answer:

"When an access token expires, the backend rejects the request, usually with a `401 Unauthorized` response.

If the application supports refresh tokens, the frontend can attempt to obtain a new access token and retry the original request once.

I would avoid infinite retry loops. I would also coordinate concurrent refresh requests so that several API calls do not try to refresh the token independently.

If refreshing fails, I would clear the authentication state and ask the user to log in again."

## Q9. What is the difference between `401 Unauthorized` and `403 Forbidden`?

Answer:

"A `401` generally means the request does not have valid authentication credentials. The user may be logged out, or the token may be invalid or expired.

A `403` means the request was understood, but the authenticated user is not allowed to perform that action.

For example, an expired session can result in a `401`, while a normal user trying to access an admin-only operation can receive a `403`."

## Q10. How would you implement logout correctly?

Answer:

"On logout, I would call the backend to invalidate the current session or revoke the relevant refresh-token session.

Then I would clear the authentication cookie, clear frontend authentication state, and redirect the user to the login page.

If the system uses self-contained access tokens, clearing the browser state alone does not invalidate a copied token. It may remain usable until expiration unless the backend has a revocation mechanism.

That is why token lifetime and revocation strategy are important."

# Part 3: Common authorization questions

## Q11. What is RBAC, and how would you implement it?

Answer:

"RBAC stands for Role-Based Access Control. We assign roles to users, and roles contain permissions.

For example, an admin may manage users, an editor may update articles, and a normal user may only read articles.

I would maintain the role and permission mapping on the backend. When a protected API is called, the backend checks whether the user's role has the required permission.

On the frontend, I can hide buttons that the user cannot use, but the backend must enforce the actual permission."

## Q12. What is the difference between RBAC and ABAC?

Answer:

"RBAC makes access decisions based mainly on roles. For example, only an admin can delete users.

ABAC stands for Attribute-Based Access Control. It uses attributes of the user, resource, action, or environment.

For example, a manager can approve a request only if the request belongs to their department and its amount is below a certain limit.

I would prefer RBAC for simpler permission models and use ABAC or additional policy checks when access depends on more conditions."

## Q13. How do you prevent a user from accessing another user's data by changing an ID in the URL?

Answer:

"I would never trust the ID received from the frontend.

For example, a user may change `/orders/101` to `/orders/102`. Even if the user is logged in, the backend must check whether that order belongs to the current user or whether the user has an explicit permission to access it.

Where possible, I would include the ownership condition directly in the database query. If the resource is not accessible, I would deny the request.

This prevents insecure direct object reference problems, commonly associated with IDOR and broken object-level authorization."

This is a very important SDE-2 question. It tests whether you understand that authentication alone does not protect user data.

## Q14. Should authorization be implemented on the frontend or backend?

Answer:

"The backend must be the source of truth for authorization.

On the frontend, I can hide admin buttons, protect routes, and redirect users to improve the user experience.

But frontend checks can be bypassed by changing JavaScript, calling APIs directly, or modifying requests.

So every protected backend operation must validate the user's permissions independently."

## Q15. What happens if a user's role changes while they are logged in?

Answer:

"I would avoid relying on stale permissions for a long time.

For example, if an admin is downgraded to a normal user, their old permissions should not continue to work indefinitely.

I can check permissions against current server-side data, or use a permission version, session version, or short-lived token strategy that supports timely invalidation.

The right approach depends on the application's security requirements, but role changes must have a clear effect on existing sessions."

# Part 4: Security questions frequently asked in interviews

## Q16. What is the difference between XSS and CSRF?

Answer:

"XSS means Cross-Site Scripting. It happens when an attacker manages to execute malicious JavaScript in our application's context.

CSRF means Cross-Site Request Forgery. It tricks a user's browser into sending an unwanted request to a site where the user is already authenticated.

To reduce XSS, I would use safe rendering, avoid unsafe HTML injection, and apply appropriate Content Security Policy controls.

To reduce CSRF in cookie-based authentication, I would use appropriate SameSite cookie settings, CSRF tokens where needed, and origin checks. HttpOnly cookies help protect cookie confidentiality from JavaScript, but they do not by themselves prevent CSRF."

## Q17. Why do we need HTTPS?

Answer:

"HTTPS encrypts the communication between the browser and the server.

Without HTTPS, an attacker on the network may be able to read or modify sensitive traffic, including login credentials and session information.

I would use HTTPS across the application and configure cookies with the Secure attribute so that they are sent only over secure connections."

## Q18. How would you protect the login API from brute-force attacks?

Answer:

"I would apply rate limiting to login attempts and monitor repeated failures.

I would also consider progressive delays, abuse detection, and additional verification when suspicious behavior is detected.

I would avoid revealing whether an email exists in the system through detailed error messages.

The goal is to make automated attacks harder without unnecessarily blocking legitimate users."

## Q19. How should passwords be stored in the database?

Answer:

"I would never store passwords in plain text or use reversible encryption for normal password storage.

I would use a dedicated password hashing algorithm such as Argon2id or bcrypt, with appropriate parameters and unique salts.

During login, the backend verifies the submitted password against the stored hash.

If the database is compromised, this makes it much harder for an attacker to recover the original passwords."

## Q20. What is OAuth 2.0, and how is it different from authentication?

Answer:

"OAuth 2.0 is mainly an authorization framework. It allows an application to obtain limited access to a resource on behalf of a user or another client.

For example, an application may receive permission to access a user's calendar without receiving the user's password.

For login using an identity provider, OpenID Connect adds an authentication layer on top of OAuth 2.0.

For a modern web application, I would normally use a well-supported authorization-code flow with PKCE where appropriate, rather than building a custom login protocol."

# Part 5: React and frontend-specific questions

These are especially relevant to your React and TypeScript background.

## Q21. How would you protect routes in a React application?

Answer:

"I would maintain authentication state in a central place, such as an authentication context or a state-management layer.

When the application starts, I would check the current session with the backend. While that check is running, I would show a loading state instead of immediately redirecting the user.

If the user is authenticated, I would render the protected route. Otherwise, I would redirect them to login.

But this is only frontend navigation protection. The backend must still protect every API."

## Q22. How do you handle authentication when the page is refreshed?

Answer:

"I would not depend only on React state because it is lost when the page refreshes.

If authentication is maintained using a session cookie, the browser keeps sending the cookie according to its settings. When the application loads again, I would call a session or current-user API to restore the authentication state.

I would show a loading state until the result is known.

This avoids incorrectly sending a logged-in user back to the login page after every refresh."

## Q23. How do you handle multiple API requests when the access token expires?

Answer:

"If several API requests fail because the access token has expired, I would coordinate them through a shared refresh process.

Only one refresh request should run at a time. Other failed requests can wait for its result.

If the refresh succeeds, I would retry eligible requests once. If it fails, I would clear the authentication state and redirect the user to login.

I would also prevent retry loops and make sure that requests with non-repeatable operations are retried safely."

## Q24. How would you handle authentication state in a large React application?

Answer:

"I would separate authentication state from authorization rules as much as possible.

The authentication layer would manage the current user, session status, login, logout, and session restoration.

The authorization layer would handle questions such as whether the current user can edit a product or access a particular feature.

I would centralize common logic, use TypeScript types for the user and permission models, and avoid duplicating security-related checks across many components.

However, the backend would remain responsible for the final security decision."

# Part 6: Scenario-based questions that show senior-level thinking

These questions help you demonstrate engineering judgment instead of just definitions.

## Q25. A user logs out, but their old JWT is still valid. Is that a problem?

Answer:

"Yes, it can be a problem if someone has copied the token.

If the JWT is self-contained, logging out in the browser does not automatically invalidate the copied token.

I would use short-lived access tokens and a revocable refresh-token session. If immediate revocation is required, I would consider a server-side session or token-revocation mechanism.

I would choose the approach based on the security requirements and the cost of maintaining that state."

## Q26. An API returns `200 OK`, but the React application still redirects the user to login. How would you debug it?

Answer:

"First, I would check the browser's network tab and identify which API request returned `200`.

Then I would inspect the session-check request, the response body, and the frontend authentication state.

I would verify whether the cookie was sent correctly, whether the API response has the expected structure, and whether the frontend is incorrectly treating a loading state as unauthenticated.

I would also check for race conditions between session restoration and route rendering.

I would debug the complete flow rather than immediately changing the route guard."

## Q27. An employee has access to an admin page, but should not be able to delete users. How would you design this?

Answer:

"I would not depend only on broad roles such as admin or employee.

I would define more specific permissions, such as `users.read`, `users.update`, and `users.delete`.

The backend would check the required permission for each operation. The frontend could use the same permission model to decide which actions to display.

This makes the system easier to extend when different employees need different levels of access."

## Q28. How would you design authentication for multiple backend services?

Answer:

"I would first identify the trust boundaries between the services.

An identity service or a central authentication system could manage login and session or token issuance. Each service would verify the authentication credentials it receives and enforce its own authorization rules.

If we use JWTs, services must validate the signature, issuer, audience, expiration, and allowed algorithms correctly. A token intended for one service should not automatically be accepted by another.

I would also avoid giving every service unrestricted access to every operation."

## Q29. What would you do if the authentication service becomes unavailable?

Answer:

"I would define the expected behavior before implementing the system.

If the backend cannot verify a session or token, it should not allow protected operations just because verification failed.

I would use appropriate timeouts, monitoring, and careful caching where safe. I would also distinguish authentication-service failures from invalid credentials so that the frontend can show the correct message.

For sensitive operations, I would prefer failing securely rather than allowing access without verification."

## Q30. How would you test an authentication and authorization system?

Answer:

"I would test the complete flow, not just whether login works.

I would cover successful login, incorrect credentials, expired sessions, logout, and refresh behavior.

For authorization, I would test different roles and verify that users cannot access other users' resources by changing IDs.

I would also test CSRF protection where applicable, rate limiting, and the behavior when the authentication service fails.

Finally, I would add integration tests for the important backend permissions and end-to-end tests for the main user journeys."



# **Microfrontend Architecture – Interview Notes**

These notes focus only on what you need to **understand, remember, and explain in frontend interviews**. I’ll use your React + JavaScript + Vite e-commerce project (Host, Products, Cart) as the running example.

## **1. What is Microfrontend Architecture?**

Microfrontend architecture is a way of building a large frontend application by dividing it into smaller, independent frontend applications.

Each application can be developed, maintained, tested, and deployed independently.

**Interview answer:**

"Microfrontend architecture helps us break a large frontend application into smaller, independent applications. Each team can own a specific feature or business domain, which makes development and maintenance easier as the application grows."

## **2. Why do we use Microfrontends?**

- **Independent development:** Teams can work on different frontend modules.
- **Independent deployment:** A change in one module doesn't necessarily require deploying the entire frontend.
- **Better ownership:** Each team can own a specific business feature.
- **Scalability:** Multiple teams can work in parallel.
- **Maintainability:** Smaller applications can be easier to manage than one large frontend codebase.

**Important:** Microfrontends also introduce complexity, so they are not necessary for every project.

## **3. Monolithic Frontend vs Microfrontend**

| Monolithic frontend            | Microfrontend                          |
| ------------------------------ | -------------------------------------- |
| One large frontend application | Multiple smaller frontend applications |
| Usually one deployment unit    | Can have independent deployments       |
| Often one shared codebase      | Separate codebases are possible        |
| Teams may depend on each other | Teams can work more independently      |

## **4. Host and Remote Applications**

In Module Federation-based architecture:

- **Host:** The main application that loads and integrates other applications.
- **Remote:** An independent application that exposes components or modules for the Host to consume.

Our e-commerce example:

**Host Application**

Port 5000 · Main layout · Navigation · Cart state

**Products Remote**

Port 5001

Product listing · Add to Cart

**Cart Remote**

Port 5002

Cart items · Total price

**Interview answer:**

"In my demo project, I created three separate applications: Host, Products, and Cart. The Host manages the common layout and shared cart state. The Products and Cart applications expose their components, which the Host loads at runtime."

## **5. What is Module Federation?**

Module Federation is a Webpack 5 feature, also supported by tools such as Vite federation plugins, that allows separate frontend applications to share and consume modules at runtime.

It is one way to implement Microfrontend architecture.

**Remember the distinction:**

- Microfrontend = Architecture.
- Module Federation = Integration technique.

**Interview answer:**

"I used Module Federation to integrate independently developed frontend applications. It allows the Host application to load components exposed by Remote applications at runtime, without bundling all their source code into one application during the initial build."

## **6. Important Module Federation Configuration**

You should understand these five properties:

| Property   | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `name`     | Unique name of the federation application               |
| `filename` | Name of the remote entry file generated by a Remote     |
| `exposes`  | Components or modules a Remote makes available          |
| `remotes`  | Remote applications that the Host can consume           |
| `shared`   | Dependencies shared between applications, such as React |

**Example: Remote configuration**

```
federation({
  name: "products",
  filename: "remoteEntry.js",

  exposes: {
    "./ProductList": "./src/ProductList.jsx",
  },

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
```

**Example: Host configuration**

```
federation({
  name: "host",

  remotes: {
    products: {
      type: "module",
      name: "products",
      entry: "http://localhost:5001/remoteEntry.js",
    },
  },

  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
```

**Important terms:**

- `remoteEntry.js`: Entry file that provides the information needed to load exposed modules from a Remote.
- `singleton: true`: Requests a single shared instance of a dependency in the federation share scope. Version compatibility still matters.

## **7. How does Host consume a Remote component?**

The Remote exposes a component:

```
exposes: {
  "./ProductList": "./src/ProductList.jsx",
}
```

The Host imports it:

```
const ProductList = React.lazy(() =>
  import("products/ProductList")
);
```

It renders the component:

```
<Suspense fallback={<p>Loading products...</p>}>
  <ProductList />
</Suspense>
```

**Interview explanation:**

"The Remote exposes its component through Module Federation. The Host imports that component using its Remote name and exposed module name. I use React.lazy and Suspense to load it asynchronously and show a fallback while it loads."

## **8. How do Microfrontends communicate?**

There are different ways for Microfrontends to communicate:

1. **Props and callbacks:** Used when the Host passes data or functions to a Remote.
2. **Custom events:** Used when applications need to communicate without being directly connected.
3. **Shared state:** Used when multiple applications need access to common state.
4. **URL / query parameters:** Used to share navigation-related information.
5. **Backend APIs:** Used for persistent business data shared across applications.

### **Our project: Add to Cart flow**

1. Products Remote displays products and the Add to Cart button.
2. When clicked, it calls the callback received from the Host through props.
3. Host updates its cart state.
4. Host passes the updated cart data to the Cart Remote through props.
5. Cart Remote displays the updated items and total price.

**Interview answer:**

"In my project, the Host owns the shared cart state. The Products Remote sends the selected product to the Host through a callback. The Host updates the cart state and passes the updated data to the Cart Remote through props."

## **9. Independent Deployment**

One of the main advantages of Microfrontend architecture is independent deployment.

For example:

- Products team can update and deploy the Products Remote.
- Cart team can update and deploy the Cart Remote.
- Host does not necessarily need to be rebuilt and redeployed for every Remote change.

**Interview answer:**

"Each Microfrontend can have its own build and deployment pipeline. The Host loads the Remote using its configured entry URL. This allows teams to deploy their features independently, provided the exposed module contracts remain compatible."

**Important:** Separate applications alone do not guarantee independent deployment. Each application needs its own build, hosting, and deployment setup.

## **10. Important Real-World Challenges**

These are particularly important for interviews targeting mid-level and senior frontend roles.

| Challenge                | How to handle it                                                           |
| ------------------------ | -------------------------------------------------------------------------- |
| Remote application fails | Show fallback UI and handle loading errors                                 |
| Different React versions | Configure shared dependencies and compatible versions                      |
| CSS conflicts            | Use CSS Modules, scoped styles, or naming conventions                      |
| Performance issues       | Lazy loading, code splitting, and avoiding unnecessary shared dependencies |
| Authentication           | Centralize authentication or share a well-defined auth mechanism           |
| Routing                  | Define clear route ownership between Host and Remotes                      |
| Dependency management    | Define compatible versions and upgrade policies                            |

**Interview question: What happens if a Remote application is unavailable?**

"If a Remote is unavailable, the Host should handle the loading failure gracefully. We can use error boundaries and fallback UI to prevent the entire application from crashing."

**Interview question: How do you avoid CSS conflicts?**

"We can use CSS Modules or other scoped styling approaches. We should also follow consistent naming conventions and avoid relying on global CSS."

## **11. Advantages and Disadvantages**

**Advantages**

- Independent development and deployment.
- Better feature ownership.
- Parallel development by multiple teams.
- Easier scaling of large frontend teams.
- Technology flexibility, when required.

**Disadvantages**

- Increased architectural complexity.
- Possible performance overhead.
- Dependency and version management challenges.
- More complicated debugging.
- Communication and integration overhead.

## **12. When should we use Microfrontends?**

Use Microfrontends when:

- The frontend application is large and complex.
- Multiple teams work on separate business domains.
- Teams need independent deployment.
- Independent ownership and scaling are important.

Avoid them when:

- The application is small.
- Only one or two developers maintain the frontend.
- Independent deployment is not required.
- The additional architecture would create unnecessary complexity.

**Interview answer:**

"I would not introduce Microfrontends into every project. For a small application, a monolithic frontend is usually simpler. Microfrontends make more sense when the application is large, multiple teams work independently, and independent deployment is a real requirement."

## **14. Your Project Explanation – Prepare This Answer**

This is one of the most important questions because interviewers may ask you to explain your practical implementation.

**Question: "Can you explain how you implemented Microfrontend architecture in your project?"**

A simple answer you can practice:

"I created a demo e-commerce application using React, JavaScript, Vite, and Module Federation. I divided the application into three independent applications: Host, Products, and Cart.

The Host application manages the common layout, navigation, and shared cart state. The Products application handles product listing and adding products to the cart, while the Cart application displays selected products and the total price.

I used Module Federation to expose components from the Remote applications and consume them inside the Host. For communication, the Products application sends selected product data to the Host through callbacks, and the Host passes updated cart data to the Cart application through props.

This approach demonstrates how different frontend applications can be integrated while maintaining separate application boundaries."





# **Microfrontend – 16 Interview Questions & Answers**

## **1. What is Microfrontend architecture?**

**Answer:**

"Microfrontend is an architectural approach where we divide a large frontend application into smaller, independent frontend applications.

Each application handles a specific feature or business functionality. These applications can be developed, maintained, and deployed independently.

For example, in an e-commerce application, we can have separate applications for Products, Cart, and Checkout."

## **2. Why do we use Microfrontends?**

**Answer:**

"We use Microfrontends when our frontend application becomes large and multiple teams are working on different features.

It allows teams to work independently without depending too much on each other.

It also helps with independent deployment, better code ownership, and easier maintenance.

However, it is not necessary for every project because it also adds some architectural complexity."

## **3. What is the difference between Monolithic Frontend and Microfrontend?**

**Answer:**

"In a monolithic frontend, the entire application is developed as one application, usually with a single codebase and deployment process.

In Microfrontend architecture, we divide the application into smaller frontend applications, and each application can have its own codebase and deployment process.

For example, in an e-commerce application, Products, Cart, and Checkout can be separate applications.

So, the main difference is how we divide, manage, and deploy the frontend application."

## **4. What is Host and Remote?**

**Answer:**

"In Module Federation, we generally have two types of applications: Host and Remote.

The Host is the main application that loads and integrates components from other applications.

Remote applications expose their components so that the Host can consume them.

In my demo project, Host manages the common layout and cart state, while Products and Cart are Remote applications."

## **5. What is Module Federation?**

**Answer:**

"Module Federation is a feature that allows multiple independently built frontend applications to share and consume code at runtime.

For example, one application can expose a React component, and another application can load and use that component without having its source code directly inside its project.

I used Module Federation to integrate my Products and Cart applications with the Host application."

## **6. What is remoteEntry.js?**

**Answer:**

"remoteEntry.js is a file generated by the Remote application when using Module Federation.

It contains the information required by the Host to discover and load the modules exposed by that Remote.

For example, when the Host wants to load the ProductList component, it uses the Remote's entry file to access that component."

**Remember:** `remoteEntry.js` is a configured filename, not a mandatory filename for every Microfrontend setup.

## **7. What are exposes and remotes?**

**Answer:**

"Exposes and remotes are two important configurations in Module Federation.

Exposes is used in a Remote application to specify which components or modules we want to make available to other applications.

Remotes is used in the Host application to specify which Remote applications we want to consume.

For example, the Products application exposes ProductList, and the Host registers the Products application under its remotes configuration."

## **8. Why do we use shared dependencies?**

**Answer:**

"In Microfrontend architecture, different applications may use the same libraries, such as React and React DOM.

Instead of unnecessarily loading separate copies of these dependencies, we can configure them as shared dependencies.

We can also use singleton configuration to request a single shared instance within the Module Federation share scope.

This helps avoid issues caused by multiple React instances, but we also need to make sure the versions are compatible."

## **9. How do Microfrontends communicate with each other?**

**Answer:**

"There are different ways for Microfrontends to communicate.

We can use props and callbacks when the Host passes data or functions to a Remote.

We can use custom events when applications need to communicate without being directly connected.

We can also use shared state, URL parameters, or backend APIs depending on the requirement.

In my demo project, I used callbacks and props for communication between Products, Host, and Cart."

## **10. Explain your Add to Cart flow.**

**Answer:**

"In my e-commerce demo project, the Host application manages the shared cart state.

When a user clicks Add to Cart in the Products application, the Products component calls a callback function received from the Host.

The Host receives the selected product and updates its cart state.

After updating the state, the Host passes the latest cart data to the Cart application through props.

The Cart application then displays the updated products and total price."

Quick flow to remember

**Products Remote**

User clicks Add to Cart

**Host Application**

Receives callback and updates cart state

**Cart Remote**

Receives updated cart through props

## **11. How does independent deployment work?**

**Answer:**

"In Microfrontend architecture, each application can have its own build and deployment pipeline.

For example, if we make changes only in the Products application, we can build and deploy the Products application separately.

The Host can continue loading the updated Remote through its configured entry URL without necessarily requiring a new Host deployment.

This makes development and deployment more flexible for different teams."

## **12. What happens if a Remote application fails?**

**Answer:**

"If a Remote application is unavailable, the Host may fail to load the components exposed by that Remote.

To handle this situation, we can use error boundaries and fallback UI.

For example, if the Products application fails, we can show a message like 'Products are currently unavailable' instead of crashing the entire application.

We should also handle loading errors properly and log them for debugging."

## **13. How do you handle CSS conflicts between Microfrontends?**

**Answer:**

"CSS conflicts can happen when different Microfrontends use the same global CSS class names.

To avoid this, we can use CSS Modules, scoped styling, or proper naming conventions.

This helps keep the styles of one application separate from the styles of another application."

## **14. How do you manage different React versions?**

**Answer:**

"Different Microfrontends may use different React versions.

We can configure React and React DOM as shared dependencies in Module Federation and define compatible version requirements.

If all applications use compatible versions, we can configure React as a singleton to share one instance.

If different versions are required, we need to manage that carefully because incompatible React instances can cause runtime issues."

## **15. How do you improve Microfrontend performance?**

**Answer:**

"We can improve Microfrontend performance in different ways.

First, we can use lazy loading so that Remote applications are loaded only when required.

We can use code splitting to reduce the initial JavaScript bundle size.

We should also avoid unnecessary dependencies and share common libraries carefully.

We can also monitor the loading time of Remote applications and optimize slow network requests."

## **16. When should you avoid Microfrontends?**

**Answer:**

"I would avoid Microfrontend architecture for small applications where a single team is managing the entire frontend.

In those cases, a normal React application is easier to develop, maintain, and deploy.

Microfrontends are more useful when the application is large, multiple teams are working independently, and independent deployment is an important requirement.

So, I would choose the architecture based on the project's size and business requirements."



# **HTML & CSS Interview Preparation — Set 01**

20 Important Questions

4 YoE

HTML + CSS + Tailwind

## **Part 1: HTML Questions**

### **1. What is the difference between HTML and HTML5?**

HTML is a markup language used to create the structure of web pages.

HTML5 is the latest major version of HTML. It introduced new semantic tags, multimedia support, and APIs.

**Important HTML5 features:**

- Semantic tags like `header`, `footer`, `article`, and `section`.
- Audio and video support.
- Canvas and SVG.
- Local storage and session storage.

### **2. What are semantic HTML elements? Why do we use them?**

Semantic elements clearly describe their purpose to browsers and developers.

For example:

```
<header>Website Header</header>

<nav>Navigation Links</nav>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content</p>
  </article>
</main>

<footer>Website Footer</footer>
```

**Why do we use them?**

1. Improve code readability.
2. Help search engines understand page structure (SEO).
3. Improve accessibility for screen readers.
4. Make code easier to maintain.

### **3. What is the difference between&#x20;**`div`**&#x20;and&#x20;**`span`**?**

Both are generic HTML elements, but their default display behavior is different.

| div                        | span                          |
| -------------------------- | ----------------------------- |
| Block-level element        | Inline element                |
| Takes full available width | Takes only required width     |
| Starts on a new line       | Stays in the same line        |
| Used for larger sections   | Used for small inline content |

Example:

```
<div>This is a div</div>

<p>Hello <span>World</span></p>
```

### **4. What is the difference between&#x20;**`id`**&#x20;and&#x20;**`class`**?**

Both are used to identify HTML elements and apply CSS.

| ID                                    | Class                      |
| ------------------------------------- | -------------------------- |
| Should be unique on a page            | Can be reused              |
| Selected using `#`                    | Selected using `.`         |
| Usually used for one specific element | Used for multiple elements |

Example:

```
<h1 id="heading">Hello</h1>

<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>
```

```
#heading {
  color: red;
}

.text {
  color: blue;
}
```

### **5. What is the difference between&#x20;**`localStorage`**,&#x20;**`sessionStorage`**, and cookies?**

All three are used to store data in the browser, but their behavior is different.

| Feature                 | localStorage           | sessionStorage         | Cookies                      |
| ----------------------- | ---------------------- | ---------------------- | ---------------------------- |
| Expiry                  | Until manually cleared | Until tab session ends | Based on expiry              |
| Capacity                | Around 5–10 MB         | Around 5–10 MB         | Around 4 KB each             |
| Sent with HTTP requests | No                     | No                     | Yes, when applicable         |
| Scope                   | Same origin            | Same origin and tab    | Depends on cookie attributes |

**Example:**

```
// localStorage
localStorage.setItem("name", "Gaurav");

// sessionStorage
sessionStorage.setItem("name", "Gaurav");

// Get data
localStorage.getItem("name");

// Remove data
localStorage.removeItem("name");
```

**Interview point:** Cookies are commonly used for authentication-related data, especially HTTP-only cookies. Sensitive tokens should not be stored in localStorage if they can be avoided because JavaScript can access it.

### **6. What is the difference between&#x20;**`async`**&#x20;and&#x20;**`defer`**&#x20;in script tags?**

Both are used to load JavaScript files without blocking HTML parsing during downloading.

**async:**

- Downloads JavaScript in parallel with HTML parsing.
- Executes immediately after downloading.
- Execution order is not guaranteed.

**defer:**

- Downloads JavaScript in parallel with HTML parsing.
- Executes after HTML parsing is complete.
- Maintains the order of deferred scripts.

Example:

```
<script src="app.js" async></script>

<script src="app.js" defer></script>
```

**Interview tip:** Use `defer` when script execution depends on the HTML being parsed or when script order matters.

## **Part 2: CSS Questions**

### **7. What is the CSS Box Model?**

Every HTML element is treated as a rectangular box in CSS.

The box model consists of four parts:

1. Content – Actual text or element content.
2. Padding – Space between content and border.
3. Border – Border around the element.
4. Margin – Space outside the border.

[Box Model Demystified: Margin, Border, Padding & Content - Euron Daily | Euron Community](https://images.openai.com/static-rsc-4/aNhJ5Hv9YEE0LLuFCrQxMEDQ_IPKsc85eHhW6jgkh1zwJmushl24aMsEIfzZ-IBueplaLN4JEmixTRp5c4x0W5xoEd_awQCsUM_soM1dg3XTeGKNvuWjldtPtK3xRPEZG3XYVu6RLJtWWmE16OvBHxsAIugXrPIUK_szeuHn_9k?purpose=inline)

[euron.one](https://euron.one/community/posts/d14457ca-5699-4307-bef0-889364028e4c?utm_source=chatgpt.com)

Example:

```
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

By default, the total width is:

`200 + 40 + 10 = 250px`

If we use `box-sizing: border-box`, padding and border are included within the declared width.

```
* {
  box-sizing: border-box;
}
```

### **8. What is the difference between&#x20;**`display: none`**,&#x20;**`visibility: hidden`**, and&#x20;**`opacity: 0`**?**

All three can make an element invisible, but their behavior is different.

| Property           | Visible? | Takes space? | Interactive?   |
| ------------------ | -------- | ------------ | -------------- |
| display: none      | No       | No           | No             |
| visibility: hidden | No       | Yes          | No             |
| opacity: 0         | No       | Yes          | Yes, generally |

Example:

```
.hidden1 {
  display: none;
}

.hidden2 {
  visibility: hidden;
}

.hidden3 {
  opacity: 0;
}
```

**Important:** An element with `opacity: 0` is still present and can receive pointer events unless you disable them.

### **9. What is the difference between&#x20;**`position: relative`**,&#x20;**`absolute`**,&#x20;**`fixed`**, and&#x20;**`sticky`**?**

CSS position controls how an element is placed on the page.

| Position | Behavior                                                          |
| -------- | ----------------------------------------------------------------- |
| static   | Default positioning                                               |
| relative | Positioned relative to its normal position                        |
| absolute | Positioned relative to its nearest positioned ancestor            |
| fixed    | Positioned relative to the viewport                               |
| sticky   | Behaves normally until a scroll threshold is reached, then sticks |

Example:

```
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

**Interview tip:** An absolutely positioned element looks for its nearest ancestor whose position is not `static`.

### **10. What is CSS specificity?**

Specificity decides which CSS rule gets applied when multiple rules target the same element.

General priority:

1. Inline styles
2. ID selectors
3. Class, attribute, and pseudo-class selectors
4. Element and pseudo-element selectors

Example:

```
p {
  color: blue;
}

.text {
  color: green;
}

#heading {
  color: red;
}
```

```
<p id="heading" class="text">Hello</p>
```

The text will be red because the ID selector has higher specificity.

**Note:** `!important` can override normal cascade priority, but it should be avoided unless necessary.

### **11. What is the difference between Flexbox and CSS Grid?**

Both are CSS layout systems.

| Flexbox                                  | Grid                          |
| ---------------------------------------- | ----------------------------- |
| One-dimensional layout                   | Two-dimensional layout        |
| Works with rows OR columns               | Works with rows AND columns   |
| Best for aligning items in one direction | Best for complex page layouts |

**Flexbox example:**

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
```

**Grid example:**

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

**Interview tip:** Use Flexbox for navigation bars, buttons, and horizontal/vertical alignment. Use Grid for dashboards, galleries, and complex layouts.

### **12. What is the difference between&#x20;**`px`**,&#x20;**`%`**,&#x20;**`em`**,&#x20;**`rem`**,&#x20;**`vh`**, and&#x20;**`vw`**?**

These are CSS units used for sizing elements.

| Unit | Meaning                                                             |
| ---- | ------------------------------------------------------------------- |
| px   | Fixed CSS pixel                                                     |
| %    | Relative to a reference dimension of the parent or containing block |
| em   | Relative to the computed font size of the relevant element context  |
| rem  | Relative to the root HTML font size                                 |
| vh   | 1% of viewport height                                               |
| vw   | 1% of viewport width                                                |

Example:

```
.container {
  width: 80%;
  font-size: 1rem;
  padding: 2em;
  height: 100vh;
}
```

**Interview tip:** `rem` is useful for consistent typography and spacing, while `vh` and `vw` are useful for viewport-based sizing.

### **13. What is the difference between pseudo-classes and pseudo-elements?**

**Pseudo-classes** target an element based on its state or position.

Examples: `:hover`, `:focus`, `:first-child`.

**Pseudo-elements** target a specific part of an element or create virtual content.

Examples: `::before`, `::after`, `::first-letter`.

Example:

```
button:hover {
  background-color: blue;
}

p::first-letter {
  font-size: 30px;
}

h1::before {
  content: "★ ";
}
```

### **14. What is the difference between&#x20;**`min-width`**,&#x20;**`max-width`**, and&#x20;**`width`**?**

- `width`: Sets the preferred width of an element.
- `min-width`: Sets the minimum allowed width.
- `max-width`: Sets the maximum allowed width.

Example:

```
.container {
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
}
```

This means the element can grow up to 1200px but should not become narrower than 300px.

### **15. What is a media query? How do you make a website responsive?**

Media queries allow us to apply different CSS styles based on screen size or device characteristics.

Example:

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

Here, the layout has three columns on larger screens and one column on screens up to 768px.

**Important responsive design techniques:**

- Media queries.
- Flexible layouts using Flexbox and Grid.
- Relative units.
- Responsive images.
- Mobile-first approach.

## **Part 3: Tailwind CSS Questions**

### **16. What is Tailwind CSS? How is it different from normal CSS?**

Tailwind CSS is a utility-first CSS framework.

Instead of writing custom CSS classes, we use predefined utility classes directly in HTML or JSX.

**Normal CSS:**

```
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
```

```
<div className="card">Hello</div>
```

**Tailwind CSS:**

```
<div className="bg-white p-5 rounded-lg">
  Hello
</div>
```

**Benefits:**

- Faster development.
- Less need to write custom CSS.
- Consistent design system.
- Responsive styling is easier.
- Unused utilities can be excluded from production builds through the build process.

### **17. How do you handle responsive design in Tailwind CSS?**

Tailwind provides responsive prefixes to apply styles at different screen sizes.

Common default breakpoints:

| Prefix | Minimum width |
| ------ | ------------- |
| sm     | 640px         |
| md     | 768px         |
| lg     | 1024px        |
| xl     | 1280px        |
| 2xl    | 1536px        |

Example:

```
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
">
  ...
</div>
```

Explanation:

- Mobile: 1 column.
- Medium screens: 2 columns.
- Large screens: 3 columns.

**Interview tip:** Tailwind follows a mobile-first approach. Unprefixed styles apply by default, and breakpoint-prefixed styles apply at that breakpoint and above.

### **18. How do you handle hover, focus, and active states in Tailwind?**

Tailwind provides state variants such as `hover:`, `focus:`, and `active:`.

Example:

```
<button className="
  bg-blue-500
  hover:bg-blue-700
  focus:ring-2
  active:scale-95
">
  Submit
</button>
```

Explanation:

- `hover:` applies when the mouse is over the element.
- `focus:` applies when the element receives focus.
- `active:` applies while the element is being activated.

### **19. What is the difference between&#x20;**`hidden`**,&#x20;**`invisible`**, and&#x20;**`opacity-0`**&#x20;in Tailwind?**

These classes behave similarly to their normal CSS equivalents.

| Tailwind class | CSS equivalent     | Behavior                             |
| -------------- | ------------------ | ------------------------------------ |
| hidden         | display: none      | Removes from layout                  |
| invisible      | visibility: hidden | Keeps layout space                   |
| opacity-0      | opacity: 0         | Transparent but still occupies space |

Example:

```
<div className="hidden">Not displayed</div>

<div className="invisible">Invisible</div>

<div className="opacity-0">Transparent</div>
```

### **20. What is the difference between&#x20;**`@apply`**&#x20;and utility classes in Tailwind?**

Utility classes are directly applied to HTML or JSX elements.

`@apply` allows us to reuse Tailwind utility classes inside a custom CSS class.

**Direct utility classes:**

```
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Submit
</button>
```

**Using @apply:**

```
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

```
<button className="btn">Submit</button>
```

**When to use&#x20;**`@apply`**?**

When we want to reuse a group of utility classes across multiple elements. However, we should avoid using it unnecessarily.







## **Interview-ready answer**

**Q. What is your approach to converting a Figma design into code?**

"I generally follow a step-by-step approach when converting a Figma design into code.

1\. **Understand the design:** First, I go through the complete Figma design to understand the layout, components, spacing, colors, typography, and overall structure.

2\. **Break down the UI:** Then, I divide the design into smaller reusable components, such as headers, cards, buttons, forms, and other sections.

3\. **Check design specifications:** I inspect dimensions, padding, margins, font sizes, colors, and assets from Figma to make sure the implementation matches the design.

4\. **Start development:** I first build the basic structure using semantic HTML and React components, and then apply styling using CSS or Tailwind CSS.

5\. **Make it responsive:** I ensure the UI works properly across different screen sizes, including mobile, tablet, and desktop.

6\. **Compare and refine:** Finally, I compare the actual implementation with the Figma design, identify visual differences, and make adjustments to achieve pixel-perfect accuracy."
