---
slug: credential-stuffing
title: Credential Stuffing: How NexusUVC Stops It
authors: [erdit] 
tags: [protection, nexusuvc, captcha]
---

![Credential Stuffing and how NexusPIPE stop it](/img/cards/credentialstuffing.png)

# Introduction
The digital world is ever-growing, and the battle for security is a relentless chase, a constant struggle between protection and intrusion. As swiftly as technology grows, so do the number of cyber threats. Whether it's an individual or a global enterprise, the threats are real, and often hidden, ready to strike when least expected.

<!--truncate-->

Credential stuffing is an always ongoing threat in the world, where attackers use stolen credentials to gain unauthorised access to user accounts. On the surface, these logins appear legitimate, making detection challenging. This deceptive technique is not only prevalent but also highly effective, posing serious risks to both individuals and organisations. However, with the right understanding and tools, it's a threat that can be managed and mitigated.

# How does credential stuffing work?
We mentioned that credential stuffing is a form of cyberattack that involves an attacker trying to log into a users account using multiple pairs of stolen usernames and passwords. If we break down the word, "stuffing" just refers to the repetitive login attempts.

However, these attackers don't type these credentials out by hand, one by one, and see if they work. They utilise a special automated login bot or script to go through a list of sometimes millions of passwords against a username with the anticipation of being let in - and if they do get let in, they will take over the account, make fraudulent purchases, steal personal information or carry out other malicious activities.

While it is possible for a website to use IP and location detection tools to attempt to prevent credential stuffing, it is not a sure fire way to do so. Attackers often use proxies to mask their geographical location and IP address. Nowadays, some attackers utilise AI-driven tools to make it seem as if thousands of users are trying to log in at different times of the day from all over the world. Now that makes a challenge!

## Where do they get these passwords from?
The success of a "credential stuffer" relies heavily on the availability of valid usernames and passwords. They can obtain these through many sources that are often interconnected - as an example:

1. **Data Breaches**: Large-scale data breaches are a goldmine for attackers. When companies suffer a breach, user credentials can be exposed and subsequently sold or shared on the dark web.
2. **Phishing Attacks**: Through deceptive emails, websites, or messages, attackers trick individuals into providing their login credentials. These details are then collected and used in credential stuffing or other, similar, malicious activities.
3. **Previous Attacks**: If an attacker has successfully compromised an account in the past, they may reuse those credentials in future attacks, banking on the fact that many users employ the same passwords across multiple sites.
4. **Malware**: Malicious software installed on a victim's device can record keystrokes and send this information back to the attacker. This method captures usernames and passwords as they are entered.
5. **Social Engineering**: Attackers may use manipulation and deceit to trick individuals or employees within an organisation into revealing their passwords.

If one of these sources has a password for, lets say, a social media account - the attacker will attempt to try that password against other websites (like a bank), people have the tendency to use the same username and password combination for multiple websites. The widespread availability of these credentials highlights the importance of robust security measures, both at the individual and organisational levels. It also emphasises the need for **unique passwords** for different accounts and the regular updating of those passwords.

# How NexusUVC prevent the credential stuffing threat

NexusUVC stands for Nexus User Verification Challenge, our in-house CAPTCHA is a big part of our user verification challenge and it stands as a robust defence against the threat of credential stuffing.

NexusUVC will **stop** the automated bot in its tracks at point of entry. So that even if that bot ends up having the correct password, it will not be able to pass the CAPTCHA. Giving your website the security it deserves.

Discover NexusUVC today, and get started for entirely free: https://nexuspipe.com/uvc 👈