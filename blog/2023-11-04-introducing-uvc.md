---
slug: introducing-uvc
title: 'Introducing NexusUVC - 10K Solves For Free'
authors: [erdit]
tags: [protection, nexusuvc, captcha, important]
---

[![Introducing NexusUVC - 10K Solves For Free](/img/cards/introducing-uvc.png)](https://blog.nexuspipe.com/introducing-uvc)

With no deposit required! NexusUVC comes available for all with a free 10,000 solves, followed by **just $0.01** for every thousand solves thereafter, a pricing system that promotes our movement to provide a well priced CAPTCHA on the market. We let all try out the CAPTCHA service entirely for free to get a feel for it.

## What is NexusUVC?

Everyone understands and deals with CAPTCHAs every time they browse the internet, CAPTCHAs help protect websites by identifying bots automatically and not allowing them to cause harm. An example of what a CAPTCHA prevents is [Credential Stuffing](https://blog.nexuspipe.com/credential-stuffing/), a brute force attack on passwords.

<!--truncate-->

NexusPIPE's mission is to provide a [Frictionless Experience](https://blog.nexuspipe.com/captcha-friction/) with all angles of our cybersecurity, NexusUVC is the biggest example of this. When referring to our visible CAPTCHA, we have a solve time of up to just 3 seconds on average, in contrast to the average solve time, we're up to 1600% faster, and insanely reliable too.

Why not try it out yourself?
[CAPTCHA DEMO]

### Puzzle Design

In the world of all sorts of CAPTCHA, the "puzzle" has been a metaphor for the challenge-response tests designed to determine whether or not the user is human. Traditionally, CAPTCHAs have been just that - puzzles. Users are asked to interpret distorted text, identify objects in a photo, or select images that fit a specific description. While these puzzles are effective against bots, they often become a source of annoyance for real users, more often more of a hinderance than a help.

In our case, over the past two years we have engineered a solution that has been vigorously tested against and trained to be as straightforward and secure as possible. NexusUVC strips away the unnecessary complexity, users are presented with a single task: grab a puzzle piece and slide it into its corresponding slot. This simplistic process minimises user friction and therefore lets users access your content with efficiency.

## Ease of Integration

We make it as easy as possible to integrate NexusUVC into your websites and projects. NexusUVC seamlessly integrates with your existing infrastructure.

Whether you're running an e-commerce platform, a mobile application, a simple blog website, NexusUVC's flexible integration options cater to every need.

### For developers, by developers

We've crafted this integration process to be as developer-friendly as possible, whether you're a solo developer or part of a large team, setting up NexusUVC is straightforward.

In addition, the implementation is significantly easier than comparable products, as a result of Svelte-driven (and lightweight) frontend that uses the [Svelte Custom Elements API](https://svelte.dev/docs/custom-elements-api) to allow for easy integration into any framework. Here's how we ensure an easy setup:

#### Simplified Installation

- **NPM Package**: With a single command, `pnpm i @nexusuvc/frontend`, NexusUVC can be added to your project using PNPM, ensuring compatibility with your build system, be it Rollup, Vite, Parcel, or Webpack.

* **CDN Use**: Not using a bundler? No problem. We provide a CDN link for NexusUVC, allowing you to include our CAPTCHA with just a few lines of HTML.

#### Framework Agnostic

NexusUVC speaks your language, and it fits right into your tech stack:

- **Svelte and SvelteKit**: Import NexusUVC as a Svelte component with ease. The CAPTCHA can be added with minimal code, making it a native part of your Svelte application.

- **Vanilla JavaScript**: For those who prefer vanilla JS, integrating NexusUVC is as simple as adding any other script to your website.

- **Other Frameworks**: Angular, React, Vue, or something else? NexusUVC is compatible with as many JavaScript frameworks, ensuring that no matter what your preference is, we've got you covered.

#### Minimal Configuration

With just a few settings, NexusUVC can be customised to fit your site’s look and functionality. The integration process is designed to be as non-disruptive as possible, letting you focus on your user’s experience rather than backend complexities.

#### Client-Side Simplicity

Implementing NexusUVC on the client side is hassle-free. Here’s a sneak peek at the process for Svelte:

```
<script lang="ts">
  import NexusUVC from '@nexusuvc/frontend';
  const completedEvent = (e: CustomEvent<string>)=>{
    console.log('Verification complete', e.detail);
  };
</script>

<NexusUVC publicKey="<Your Public Key>" on:completed={completedEvent} />
```

Rest assured, if you're not using svelte, you can still use NexusUVC. See our [Documentation](https://docs.nexuspipe.com/uvc/integrating/#__tabbed_3_1) for more information.

#### Server-Side Assurance

We’ve not forgotten the server side. A simple API call allows you to validate the CAPTCHA response, ensuring that the verification process is robust and secure:

```
// An example validation function in TypeScript
const validateCaptcha = async (privateKey: string, ticket: string) => {
  const response = await fetch(`https://uvc.nexuspipe.com/uvc/evaluate/${encodeURIComponent(privateKey)}/${encodeURIComponent(ticket)}`);
  const data = await response.json();
  return data.success;
};
```

This flexibility and simplicity ensure that no matter how you’ve built your site, integrating NexusUVC is straightforward, letting you and your team focus on creating an engaging user experience while we handle the security.

#### Build-A-Captcha

Build your very own CAPTCHA, your way! We allow for colour options, CAPTCHA types (including factors like "No CAPTCHA" or the generic "Slider" puzzle we have), and more. You can try it out with no account [over here](https://nexuspipe.com/uvc/builder/). Make the CAPTCHA fit **your** website and **your** brand.

## Advanced Security Features

NexusUVC comes with a multi-layered security approach. Our advanced security features are designed to ensure that your website is protected against the most sophisticated bots without compromising user experience whatsoever.

### Machine Learning Algorithms

At the core of NexusUVC’s efficacy are our proprietary machine learning algorithms. These algorithms are continually trained on a vast array of CAPTCHA solves, enabling them to learn and evolve. This constant learning process ensures that NexusUVC can effectively distinguish between bot-like and human behaviour with a high degree of accuracy, even as bots become more advanced.

### Fingerprinting Technology

Among our most advanced features is a comprehensive fingerprinting system. NexusUVC has amassed millions of device fingerprints, which helps us identify devices used by bots. Each interaction is checked against this vast database, significantly increasing the accuracy of bot detection, our CAPTCHA can adapt based on the likelihood that a user is a bot. This system is continuously refined, adding new fingerprints and data points, ensuring up-to-the-minute protection.

### Continuous Adaptive Learning

Our commitment to security is an ongoing journey, not a final destination. NexusUVC is in a constant state of evolution, with continuous updates designed to outpace the latest bot signatures and methods. Our proactive stance ensures that our clients are always equipped with state-of-the-art defence mechanisms.

## Scalability and Performance

NexusUVC is designed to meet the challenges of traffic spikes without a problem, we offer incredible scalability and performance, even during peak loads and high traffic volumes.

### Seamless Scalability with Akamai

Our partnership with Akamai Technologies, a global leader in content delivery network (CDN) services, is at the heart of our scalability solution. Akamai's expansive network of servers across the globe ensures that NexusUVC can scale effortlessly in response to traffic surges, all while maintaining the lowest latency possible.

## Security and Privacy Compliance - Privacy First

In addition to our seriously easy integration and design, we place the upmost importance on the privacy and security of our users. Our approach is rooted in the principle of "Privacy First", ensuring that NexusUVC operates on a foundation of trust and respect for personal data.

### Minimal Data Retention

NexusUVC stands apart by adopting a strict minimal data retention policy. We do not save any client data, asides from IP and user agent (for analytical reasons), post-verification. All CAPTCHA interactions are ephemeral, lasting only as long as necessary to provide validation. This gives the assurance to you and your users.

### String Conversion Protocol

To further protect privacy, all user interaction data is converted into non-reversible strings. This data is not public information and is used strictly internally for the purpose of validation. Once the CAPTCHA is solved, this string ceases to exist, leaving no trace of the user’s action.

### RAMDisk Technology

Delving deeper into our dedication to security, we utilise RAMDisk technology for data storage. This means that any data we process is stored only in volatile memory. When the power goes off, or when the RAMDisk is reset, the data is wiped clean, leaving no residue. This ensures that data cannot be retrieved post-session, providing an additional layer of security.

### Compliance Without Compromise

While we are committed to protecting our users' privacy, we also ensure compliance with international security standards. Our non-storage approach aligns with global privacy regulations such as the GDPR, offering a CAPTCHA service that respects user privacy without compromising on security.

By choosing NexusUVC, our clients can be confident that they are enhancing their website's security without endangering user privacy. It is not just a CAPTCHA solution; it's a commitment to a safer, more secure, and private online experience.

## User Accessibility: A CAPTCHA For Everybody

Security should never be a barrier to access, and this belief of ours is embedded into the very core of our puzzle CAPTCHA design.

### Simplified Interaction

Our CAPTCHA mechanism requires users to perform a simple task: slide a puzzle piece into its designated slot. This task is designed with the understanding that if a person can use a mouse or a touchscreen, they can complete the verification with minimal effort. This intuitive interaction eliminates complex problem-solving, making the CAPTCHA experience straightforward and quick.

### The 'No-CAPTCHA' Experience

NexusUVC takes accessibility a step further with our 'No-CAPTCHA' CAPTCHA, a solution that operates without any user interaction for most users. Also known as an "invisible CAPTCHA", it works in the background, analysing user behaviour and patterns to differentiate humans from bots. This advanced technology ensures that users are not given friction by security measures.

### Visual and Cognitive Considerations

By avoiding text recognition and image-based puzzles that can be challenging for users with visual impairments or cognitive disabilities, NexusUVC sidesteps the accessibility issues often associated with traditional CAPTCHAs. The simple act of moving a piece into place is a universally understood concept that requires minimal cognitive load, thereby accommodating a wider audience.

### Continuous Improvement and Feedback

We are committed to continuous improvement in the field of user accessibility. NexusUVC regularly seeks feedback from users and accessibility experts to refine our CAPTCHA solutions. By keeping the lines of communication open, we ensure that our CAPTCHA remains an enabler, not a blocker, of access.

## In-Depth Analytics Dashboard: Unveiling User Interactions and Security Insights

Understanding user interactions and security patterns is paramount for any online platform. NexusUVC delivers a sophisticated analytics dashboard that not only offers you a panoramic view of CAPTCHA metrics but also deepens your insight into user behaviour and security threats. Here’s how our analytics can empower your decision-making and security strategy.

### Comprehensive CAPTCHA Metrics

- **CAPTCHAs Served**: Keep track of the total number of CAPTCHAs presented, providing you with a clear picture of how often users are prompted to verify their authenticity.
- **CAPTCHAs Allowed**: See the number of CAPTCHAs successfully solved by users.
- **URI Blocked**: This is a custom set configuration in the dashboard, the URI that doesn't show the CAPTCHAs.
- **CAPTCHAs Denied**: Monitor the attempts that were denied, helping you identify potential security threats or areas where the CAPTCHA challenge may be too stringent.

### User Environment Analytics

- **Device Usage**: Gain insights into whether users are accessing your CAPTCHA on desktops, mobile phones, tablets, or other devices, enabling you to optimize for the most common platforms.
- **Operating System Distribution**: View a breakdown of the operating systems used by your visitors, whether it's Linux, macOS, Windows, Android, iOS, ChromeOS, or others, to ensure cross-platform compatibility and seamless experience.
- **Browser Preferences**: Analyse which browsers your users prefer, from Chromium, Firefox, Safari, Edge, Opera, Internet Explorer, to others or even automated browsers, to tailor your frontend development accordingly.

### Connection Type Breakdown

- **Connection Types**: Discover whether users are coming from residential, commercial, cell/hotspot networks, or using proxies/VPNs, giving you valuable context on user demographics and potential security measures.
- **Risky Connections**: Our analytics go a step further to highlight connections that pose a risk, such as those identified as proxies or VPNs, allowing for more informed security protocols and user access policies.

### Security Insights for Proactive Protection

By analysing this data, NexusUVC provides you with good insights. Understanding the nuances of user behaviour and access patterns can inform better security practices, user experience improvements, and tailored content delivery.

Our dashboard presents this information through intuitive graphs and charts, making it easy to digest and act upon. This level of detail ensures that you're not just reacting to security incidents but proactively shaping a safer environment for your users.

### Empower Your Platform with Data-Driven Decisions

With NexusUVC's analytics dashboard, you are equipped to make data-driven decisions that enhance user experience and fortify your website's security. Whether adjusting CAPTCHA difficulty, optimizing for mobile users, or reinforcing defences against specific threats, our analytics provide the clarity you need to navigate the complex online landscape confidently.

## Embrace Simplicity, Enhance Security

In conclusion, NexusUVC redefines what you can expect from a CAPTCHA service. By balancing advanced security features with unparalleled ease of use and accessibility, we ensure that protecting your website doesn’t come at the expense of user experience. Our partnership with Akamai Technologies guarantees that no matter how high the demand, the performance and scalability of our service remain uncompromised.

Empower your website with a CAPTCHA service that is both easy for your users and incredible against threats. It's time to say goodbye to user friction, slow CAPTCHAs, unreliable security and hello to NexusUVC - where each CAPTCHA is an opportunity to prove that safety on the web **can be seamless**.

[Start with 10K free solves, no deposit or billing information required](https://nexuspipe.com/get-started/)

Take the first step towards a safer, more accessible web presence for your users today.
