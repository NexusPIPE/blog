---
slug: understanding-ddos-attacks
title: Understanding DDoS Attacks
authors: [erdit, expo]
tags: [protection, ddos, important]
---

[![Understanding DDoS Attacks](/img/cards/understandingddos.png)](https://blog.nexuspipe.com/understanding-ddos-attacks/)

Distributed Denial of Service attacks, or **DDoS** attacks, are on the rise. [InfoSecurity Magazine](https://www.infosecurity-magazine.com/blogs/ddos-attacks-in-2022-trends/) reported a staggering **90%** increase in DDoS attacks compared to the same period last year. These attacks are not only more frequent but also more powerful.

<!--truncate-->

DDoS attacks can cripple websites, disrupt services, and lead to substantial financial losses. But what exactly are DDoS attacks, and how can they be prevented? This article demystifies DDoS attacks and provides insights into how NexusPIPE's mitigation services protect against them.

## What is a DDoS attack?

A DDoS attack, short for Distributed Denial of Service, is a malicious attempt to disrupt the normal functioning of a targeted server, service or network (e.g. naming servers or caching servers) by overwhelming it with a flood of internet traffic. This flood of traffic is often so massive that it consumes all available resources, thus rendering the targeted system unfunctional.

When one of these attacks takes place, the targeted business or individual experiences a crippling interruption in its services because the attack has flooded its resources with a massive volume of HTTP requests and traffic - thus denying access to legitimate users.

Here's an analogy that makes this easier to understand: Imagine a popular nightclub with a strict 21-and-over policy. A group of underage teenagers, coordinated by someone wanting to disrupt the club's business, lines up at the entrance, each using fake IDs to try to gain entry. Legitimate patrons, who are of legal age and want to enjoy their evening, are stuck in line, unable to get past the bouncer.

The problem persists until the bouncer, trained to spot fake identification, identifies the underage individuals and denies them entry, allowing real patrons to enter the club. The club doesn't need to hire more bouncers or expand the entrance; they simply need to enforce the existing rules by identifying and blocking those who don't meet the criteria.

This same thing happens during a DDoS attack. Instead of modifying the resources that are being attacked, you simply implement a fix between the network and the attacker, identifying and blocking the malicious traffic. This process, much like denying entry to those who don't meet the club's age requirements, is commonly referred to as mitigation.

### Differences between DoS and DDoS

Denial of Service attacks, otherwise known as DoS attacks, work similarly to DDoS attacks where they both aim to disrupt a targeted server or service. But, they differ in methods and scale. Here's a breakdown of their key differences:

#### Source of Attack:

- **DoS**: A DoS attack typically originates from a single source or system. One attacker uses one computer to flood a target with traffic or requests.
- **DDoS**: A DDoS attack, on the other hand, involves multiple compromised systems, often spread across various locations. These systems work together to flood the target, making the attack more powerful and harder to mitigate.

#### Scale and Impact:

- **DoS**: Since a DoS attack comes from a single source, it's generally easier to identify and block. The scale of the attack is limited by the resources of the attacking system.
- **DDoS**: DDoS attacks are more complex and can generate an overwhelming amount of traffic by leveraging multiple systems. This makes them more challenging to defend against and often results in a more significant impact.

#### Mitigation Complexity:

- **DoS**: Mitigating a DoS attack can be relatively straightforward, as blocking the signature and fingerprint of the attacking system may be sufficient to stop the attack.
- **DDoS**: DDoS attacks require more sophisticated mitigation strategies, as simply blocking one IP address won't stop the attack. The distributed nature of the attack means that blocking one source might not have a significant effect on the overall attack.

In summary, while both DoS and DDoS attacks aim to disrupt and deny service, DDoS attacks are more complex, involving multiple systems, and are generally more challenging to mitigate. They are also alarmingly on the rise!

## Types of common DDoS attacks

DDoS attacks can be categorised into several types, each with its unique method and impact:

### Volume-Based Attacks

Volume-based attacks are a common form of DDoS attack that aims to overwhelm the bandwidth of a target website by flooding it with a massive volume of traffic. This large volume of traffic consumes all of the business's bandwidth, making all of its resources unavailable. Two prime examples of such an attack would be TCP and UDP floods.

These attacks are often carried out using botnets, which are networks of compromised computers controlled by an attacker. The botnet can generate an enormous amount of traffic, directed at the target, to create a flood.

Amplification attacks are another method used in Volume-Based Attacks. In an amplification attack, the attacker exploits vulnerabilities in publicly accessible servers to multiply the volume of traffic sent to the target. By sending a small request to a vulnerable server and forging the target's IP address (a technique known as IP address spoofing or IPHM), the server responds with a much larger amount of data sent to the target. This amplifies the volume of traffic, hence the name "amplification attack."

### Protocol Attacks

Protocol attacks exploit vulnerabilities in server resources, targeting specific layers of the network protocol. These attacks often manipulate traffic at layers 3 and 4 of the OSI Model (Open Systems Interconnection) and include examples like SYN/ACK attacks, Ping of Death, and Smurf DDoS.

### Application Layer Attacks

Application Layer Attacks, or Layer 7 attacks, target the top layer of the OSI model, where common internet requests such as HTTP and DNS occur. These subtle attacks mimic normal user behaviour and focus on specific applications, like a web server such as Apache.

### Multi-Vector Attacks

Multi-vector attacks combine different types of attacks simultaneously, making them more complicated and harder to mitigate. An attacker might use a volume-based attack in conjunction with an application layer attack to maximise disruption to a business or organisation. Multi-vector attacks put a lot of load on system administrators as they must manage all layers to ensure stability is kept.

## What drives attackers to launch DDoS attacks

DDoS attacks are not random acts of chaos; they are often meticulously planned and executed for specific purposes. Understanding the motivations behind these attacks can help in developing more effective prevention strategies. Here are some common driving factors, including examples of attacks:

### Financial Gain

Attackers may launch DDoS attacks to extort money from victims. By crippling a website or service, they can demand a ransom to stop the attack. These are often referred to as Ransom DDoS Attacks or RDDoS. Sometimes, rival businesses will even conduct DDoS attacks on each other to gain a competitive lead/edge.

- **ProtonMail (2015)**: ProtonMail, a secure email provider, was targeted by a DDoS attack in 2015[^1]. The attackers demanded a ransom in Bitcoin to stop the attack, and ProtonMail paid, although the attacks continued even after payment[^2].

[^1]: [Message Regarding the Proton Mail DDoS Attacks - Proton Blog](https://proton.me/blog/protonmail-ddos-attacks) ([Archive](https://web.archive.org/web/20230823205820/https://proton.me/blog/protonmail-ddos-attacks))
[^2]: [ProtonMail: encrypted email provider held ransom by hackers - The Guardian](https://www.theguardian.com/technology/2015/nov/05/protonmail-service-held-ransom-by-hackers) ([Archive](https://web.archive.org/web/20230823205635/https://www.theguardian.com/technology/2015/nov/05/protonmail-service-held-ransom-by-hackers))

### Political Activism

Some DDoS attacks are driven by political motives. Hacktivist groups may target government websites or organisations they disagree with to make a political statement or to protest against specific policies.

- **Thai Government (2015)**: In 2015, the hacktivist group Anonymous launched a DDoS attack against Thai government websites in protest of the sentencing of two migrant workers[^3] [^4]. The attack was part of a broader campaign against perceived injustices in the Thai legal system[^4].
- **Operation Israel (2014)**: Anonymous launched DDoS attacks against various Israeli government and financial websites in protest of the Israeli-Palestinian conflict[^5] [^6] [^7].
- **Operation Hong Kong (2014)**: Anonymous targeted Chinese government websites to support the pro-democracy protests in Hong Kong[^7] [^8] [^9] [^10].
- **Operation Catalonia (2017)**: In response to the Catalonia independence referendum, Anonymous launched DDoS attacks against Spanish government websites[^7] [^10] [^11].

<!-- [^3]: https://cyware.com/news/hackers-hit-thai-gov-with-ddos-attacks-protesting-against-internet-law-7dbf900e -->

[^3]: [Hackers hit Thai government with DDoS attacks protesting against restrictive internet law - IBTimes](https://www.ibtimes.co.uk/hackers-hit-thai-government-ddos-attacks-protesting-against-restrictive-internet-law-1597339?&web_view=true) ([Archive](https://web.archive.org/web/20230823205529/https://www.ibtimes.co.uk/hackers-hit-thai-government-ddos-attacks-protesting-against-restrictive-internet-law-1597339?&web_view=true))
[^4]: [Thai Police Arrests Nine Anonymous Hackers for Role in #OpSingleGateway Attacks - Bleeping Computer](https://www.bleepingcomputer.com/news/government/thai-police-arrests-nine-anonymous-hackers-for-role-in-opsinglegateway-attacks/) ([Archive](https://web.archive.org/web/20230823205721/https://www.bleepingcomputer.com/news/government/thai-police-arrests-nine-anonymous-hackers-for-role-in-opsinglegateway-attacks/))
[^5]: [Anonymous (hacker group) - Wikipedia](https://en.wikipedia.org/wiki/Anonymous_%28hacker_group%29) ([Archive](https://web.archive.org/web/20230721212343/https://en.wikipedia.org/wiki/Anonymous_%28hacker_group%29))
[^6]: [OpIsrael - Wikipedia](https://en.wikipedia.org/wiki/OpIsrael) ([Archive](https://web.archive.org/web/20230721212343/https://en.wikipedia.org/wiki/OpIsrael))
[^7]: [Timeline of events associated with Anonymous - Wikipedia](https://en.wikipedia.org/wiki/Timeline_of_events_associated_with_Anonymous) ([Archive](https://web.archive.org/web/20230721212343/https://en.wikipedia.org/wiki/Timeline_of_events_associated_with_Anonymous))
[^8]: [Anonymous threatens China, Hong Kong authorities with website blackout... - Reuters](https://www.reuters.com/article/us-china-hongkong-internet-idUSKCN0HZ0L420141010) ([Archive](https://web.archive.org/web/20230823205943/https://www.reuters.com/article/us-china-hongkong-internet-idUSKCN0HZ0L420141010))
[^9]: [Hacker group 'Anonymous' threatens China with 'Operation Hong Kong' - Yahoo News](https://malaysia.news.yahoo.com/hacker-group-anonymous-threatens-china-operation-hong-kong-114903046.html) ([Archive](https://web.archive.org/web/20230823205945/https://malaysia.news.yahoo.com/hacker-group-anonymous-threatens-china-operation-hong-kong-114903046.html))
[^10]: [OpCatalonia - Radware](https://www.radware.com/security/ddos-threats-attacks/threat-advisories-attack-reports/opcatalonia/) ([Archive](https://web.archive.org/web/20230823210003/https://www.radware.com/security/ddos-threats-attacks/threat-advisories-attack-reports/opcatalonia/))
[^11]: [Operation Catalonia - Wikipedia](https://en.wikipedia.org/wiki/Operation_Catalonia) ([Archive](https://web.archive.org/web/20230721212343/https://en.wikipedia.org/wiki/Operation_Catalonia))

### Ideological Beliefs

Certain groups or individuals may launch attacks driven by strong ideological beliefs. This could include targeting organisations that they perceive as unethical or immoral according to their values.

- **Church of Scientology (2008)**: The Church of Scientology was targeted by a DDoS attack orchestrated by Anonymous in 2008. The attack was part of a campaign called "Project Chanology,"[^12] aimed at criticisng the Church's practices and beliefs.

[^12]: [Project Chanology - Wikipedia](https://en.wikipedia.org/wiki/Project_Chanology) ([Archive](https://web.archive.org/web/20230721212343/https://en.wikipedia.org/wiki/Project_Chanology))

### Competitive Advantage

In highly competitive industries, businesses may resort to unethical practices, including DDoS attacks, to gain an edge over competitors. By taking down a rival's website during a critical sales period, they can divert customers to their own site.

- **Bitcoin Exchanges (2017)**: In 2017, several Bitcoin exchanges were targeted by DDoS attacks[^13], allegedly by competitors looking to gain a trading advantage[^14]. The attacks caused significant disruption to trading and led to financial losses for some users[^13] [^14].

[^13]: [Major bitcoin exchanges hit by cyberattacks as record rally makes them a target - CNBC](https://www.cnbc.com/2017/06/14/major-bitcoin-exchanges-hit-by-cyberattacks-as-record-rally-makes-them-a-target.html) ([Archive](https://web.archive.org/web/20230602165410/https://www.cnbc.com/2017/06/14/major-bitcoin-exchanges-hit-by-cyberattacks-as-record-rally-makes-them-a-target.html))
[^14]: [74% of All Bitcoin-Related Sites Suffered a DDoS Attack - Bleeping Computer](https://www.bleepingcomputer.com/news/security/74-percent-of-all-bitcoin-related-sites-suffered-a-ddos-attack/) ([Archive](https://web.archive.org/web/20221202132635/https://www.bleepingcomputer.com/news/security/74-percent-of-all-bitcoin-related-sites-suffered-a-ddos-attack/))

## What sort of organisations are often targeted?

The types of websites targeted by DDoS attacks can vary widely, depending on the attacker's motives and goals. However, some types of websites are more commonly targeted due to their visibility, impact, or the nature of their operations. Here are some examples of organisations, alongside mentions of specific instances:

### Financial Institutions

Banks, credit unions, and other financial institutions are attractive targets for attackers seeking to create chaos or steal sensitive financial information. Disrupting these services can have significant economic impacts.

- **HSBC (2016)**: HSBC, one of the world's largest banking and financial services organisations, was targeted by a DDoS attack in January 2016. The attack temporarily shut down the bank's online banking system, affecting thousands of customers[^15].

[^15]: [HSBC down: What is a DDoS attack, why are they so common, and how can you avoid one? - The Independent](https://www.independent.co.uk/tech/what-is-a-ddos-attack-hsbc-down-hacking-cyberattack-hack-a6841511.html) ([Archive](https://web.archive.org/web/20221229181256/https://www.independent.co.uk/tech/what-is-a-ddos-attack-hsbc-down-hacking-cyberattack-hack-a6841511.html))

### Government Websites

Government sites may be targeted for political or ideological reasons. Attacks on these sites can disrupt essential services and send a strong message to authorities.

- **Estonian Government (2007)**: In 2007, Estonia faced a series of crippling DDoS attacks that targeted government, media, and financial websites. The attacks were believed to be politically motivated and were one of the first instances of a large-scale cyberattack against a nation.

### Media and News Outlets

Media sites, especially those covering controversial topics or expressing specific viewpoints, may be targeted to suppress information or silence voices.

- **BBC (2015)**: The British Broadcasting Corporation (BBC) faced a massive DDoS attack in December 2015 that took down its entire domain, including its on-demand television and radio player[^16] [^17]. It was one of the largest DDoS attacks ever recorded at the time.

[^16]: [Web attack knocks BBC websites offline - BBC Tech](https://www.bbc.com/news/technology-35204915) ([Archive](https://web.archive.org/web/20230823210703/https://www.bbc.com/news/technology-35204915))
[^17]: [BBC websites taken offline by cyberattack - CNN](https://money.cnn.com/2015/12/31/media/bbc-websites-ddos-cyberattack/index.html) ([Archive](https://web.archive.org/web/20230823211050/https://money.cnn.com/2015/12/31/media/bbc-websites-ddos-cyberattack/index.html))

### Healthcare Providers

Healthcare providers' websites may be targeted to disrupt services, steal patient information, or create chaos, especially during critical times like a health crisis.

- **Boston Children's Hospital (2014)**: In 2014, the Boston Children's Hospital was targeted by a DDoS attack[^18] orchestrated by the hacktivist group Anonymous[^19]. The attack was in protest of a controversial child custody case and disrupted the hospital's network for several days.

[^18]: [Jury Convicts Man Who Hacked Boston Children's Hospital And Wayside Youth & Family Support Network - United States Attorney's Office](https://web.archive.org/web/20230823211736/https://www.justice.gov/usao-ma/pr/jury-convicts-man-who-hacked-boston-childrens-hospital-and-wayside-youth-family-support) ([Original](https://www.justice.gov/usao-ma/pr/jury-convicts-man-who-hacked-boston-childrens-hospital-and-wayside-youth-family-support))
[^19]: [DDoS Case Study: Boston Children’s Hospital DDoS Attack Mitigation - Radware](https://www.radware.com/security/ddos-experts-insider/ert-case-studies/boston-childrens-hospital-ddos-mitigation-case-study/) ([Archive](https://web.archive.org/web/20230823211730/https://www.radware.com/security/ddos-experts-insider/ert-case-studies/boston-childrens-hospital-ddos-mitigation-case-study/))

### Non-Profit Organisations

NGOs and other non-profit organisations, particularly those involved in sensitive or controversial causes, may be targeted to disrupt their operations or silence their advocacy.

- **Spamhaus (2013)**: Spamhaus, a non-profit organisation that tracks spam and related cyber threats, was hit by a significant DDoS attack in 2013[^20] [^21]. The attack reached a peak of 300 Gbps[^21], making it one of the largest DDoS attacks in history at the time. It affected not only Spamhaus but also caused widespread disruption to global internet services.

[^20]: [An arrest in response to March DDoS attacks on Spamhaus - SpamHaus](https://www.spamhaus.org/news/article/698/an-arrest-in-response-to-march-ddos-attacks-on-spamhaus) ([Archive](https://web.archive.org/web/20230823212019/https://www.spamhaus.org/news/article/698/an-arrest-in-response-to-march-ddos-attacks-on-spamhaus))
[^21]: [Dutchman arrested over huge web attack - BBC Technology](https://www.bbc.co.uk/news/technology-22314938) ([Archive](https://web.archive.org/web/20230823212056/https://www.bbc.com/news/technology-22314938))

While any website can be a target of a DDoS attack, certain types of sites are more frequently targeted due to their nature, visibility, or the potential impact of an attack. Understanding the common targets and the reasons behind these attacks can help organisations in these sectors take extra precautions to protect themselves.

## What practices are best for DDoS attacks?

DDoS attacks can be devastating, but with the right preparation and response strategy, their impact can be minimised. Here are some best practices for responding to a DDoS attack:

### Preparation Is Key

Having a clear, coordinated and detailed DDoS response plan in place enables your business to organise the responsibilities, communication strategies and steps to take to mitigate the threat.

Such preparation would include identifying critical services, being services that would cause operational delays to your business.

If your business is suffering from a DDoS attack, it's generally not a good idea to overcommunicate to the public in order to limit brand reputation harm and to ensure you have the attack contained. Your best course of action is to monitor the attack and consult a professional to help mitigate the attack.

### Invest In Protection/Mitigation

Utilising DDoS mitigation services like NexusPIPE allows your business to automatically detect and respond to attacks rapidly, ensuring your business stays afloat and stable.

Having a provider that has proactive filtering systems allows your business to mitigate the attack as fast as possible, not after the damage has already been done. Proactive filtering systems are designed to detect and prevent DDoS attacks before they can cause significant harm. They continuously monitor network traffic, looking for unusual patterns or spikes that might indicate an attack, and take immediate action to block or divert the malicious traffic. NexusPIPE takes pride in being a proactive DDoS mitigation service.

More common, reactive filtering systems, on the other hand, respond to an attack after it has already begun. While they can still be effective in mitigating the damage, there may be a delay between the onset of the attack and the system's response. During this time, the targeted system may become overwhelmed, leading to service disruptions or other negative impacts.

In the context of DDoS mitigation, having the right filtering system in place is like having a well-trained security team that can either prevent a problem before it starts or respond quickly once it's detected. The goal is to minimise the impact on legitimate users and keep the system running smoothly.

DDoS attacks are a serious threat, but with proper planning, detection, and response strategies, their impact can be minimised. By following these best practices and leveraging specialised DDoS mitigation services like NexusPIPE, organisations can protect themselves against these disruptive attacks and ensure that they are prepared to respond effectively when an attack occurs.

## Summary

The complexity of DDoS attacks requires a multifaceted approach to prevention and mitigation. It's not just about having more resources but deploying intelligent strategies and tools that can adapt to the changing tactics of attackers. By recognising the signs of an attack and investing in specialised mitigation services like NexusPIPE, organisations can minimise the impact of these disruptive attacks.

Discover how NexusPIPE mitigation can alleviate the stress that comes as a result of DDoS attacks: https://nexuspipe.com/protection/

Alternatively, feel free to contact our team for one-to-one help in ensuring your business or project remains afloat: https://nexuspipe.com/contact/
