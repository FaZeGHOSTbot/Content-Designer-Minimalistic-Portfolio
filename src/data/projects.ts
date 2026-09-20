export interface Section {
  type: 'text' | 'image' | 'image-slider' | 'heading' | 'testimonial';
  title?: string;
  content?: string;
  src?: string;
  caption?: string;
  images?: string[];
  size?: 'small' | 'medium' | 'large';
  slides?: { src: string; caption?: string }[];
  quote?: string;
  author?: string;
  role?: string;
}

export interface ImpactMetric {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image?: string;
  hideHeroImage?: boolean;
  impactMetrics?: ImpactMetric[];

  overview: string;
  challenge: string;
  approach: string;
  outcome: string;

  // ✅ NEW
  sections?: Section[];
}

export const projects: Project[] = [
  {
  id: 'user-data-error-experience',
  index: '01',
  title: 'Designing a Clear Data Error Resolution Experience',
  category: 'Content Design · UX Writing',
  year: '2025',
  description: 'Turned a confusing wall of system errors into a guided flow where users could see what broke, why it mattered, and how to fix it, without calling support.',
  tags: ['UX Writing', 'Content Design', 'Data UX', 'Error Handling'],
  image: '/images/onboarding/project1_5.jpeg',

  overview: 'Users hit data errors during onboarding and had no way to tell what went wrong or what to do next. I redesigned the entire error experience, from how issues are labeled to how they\'re explained, so people could fix problems themselves.',

  challenge:
    'Errors showed up as raw system output: no explanation of what went wrong, no indication of where it came from, and no way to prioritize what to fix first. Users got stuck and had to escalate to support just to understand the problem.',

  approach:
    'I broke the black box open. Users could see how their data moved through the system, and errors were grouped by severity and source, explained in plain language, and paired with clear next steps. I also built a way to share error details with teammates who weren\'t in the product.',

  outcome:
    'Users went from escalating every error to resolving most of them on their own, cutting onboarding friction and support load.',

  sections: [
    {
      type: 'text',
      title: 'Overview',
      content:
        'This project focuses on improving how users identify and resolve data errors during onboarding. The system validates incoming data from multiple sources, but the experience lacked clarity, making it difficult for users to understand issues and take action. The goal was to design a clear, guided error resolution experience through better content and structure.'
    },

    {
      type: 'image',
      src: '/images/onboarding/project1_5.jpeg',
      size: 'small',
      caption: 'Overview page explaining how data is collected, validated, and where errors occur'
    },

    {
  type: 'text',
  title: 'Making the System Visible',
  content:
    'Users struggled to understand how their data moved through the system and where issues were occurring. I introduced a simplified visual model that breaks down the process into clear stages, data collection, validation, and error reporting. This helps users build a mental model of the system, making it easier to identify where things go wrong and what action is needed.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_7.png',
  size: 'large',
  caption: 'A simplified view of the data pipeline showing how inputs are collected, validated, and where errors are identified'
},

{
  type: 'text',
  title: 'Structuring the Error Report',
  content:
    'The error report was redesigned to make issues easier to scan, prioritize, and act on. Errors are grouped and labeled by severity, with clear indicators showing where they originate (web, app, API, or uploads). To support decision-making, the system also provides a timeline of detected errors, helping users understand recency and relevance. This structured approach transforms raw system output into actionable insights, reducing confusion and enabling faster resolution.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_4.jpeg',
  caption: 'Error report with severity indicators, data source tagging, and a timeline of recently detected issues to support faster prioritization'
},

{
  type: 'text',
  title: 'Writing Errors in Plain Language',
  content:
    'I designed error communication to make it clear, actionable, and easy to understand. Instead of exposing raw system language, errors are now explained in plain terms, highlighting what went wrong, why it matters, and how to fix it. Supporting details like affected areas, sample values, and step-by-step guidance help users resolve issues without needing technical support.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_3.jpeg',
  caption: 'Error details rewritten in plain language, clearly explaining the issue, its impact, and how users can fix it'
},

    {
  type: 'text',
  title: 'Sharing Errors With a Team',
  content:
    'To support faster resolution, I designed a structured way for users to share error details with their team. The flow includes clear input guidance, validation states, and feedback messages to prevent mistakes and ensure successful sharing. From limiting email inputs to handling edge cases and providing real-time success or error feedback, the experience is designed to be reliable, clear, and easy to act on, even for non-technical users.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_1.jpeg',
  caption: 'Error sharing flow with input validations, edge-case handling, and real-time feedback to ensure successful collaboration'
},
{
  type: 'text',
  title: 'Making Errors Understandable in Email',
  content:
    'To ensure error details remain clear even outside the platform, I designed a structured email format that translates system data into easy-to-understand information. The email highlights error severity, explains the issue in plain language, and includes relevant data and fix guidance. This allows stakeholders to quickly understand the problem and take action without needing additional context or follow-ups.'
},

{
  type: 'image',
  src: '/images/onboarding/project1_6.jpeg',
  size: 'small',
  caption: 'Structured email format that clearly communicates error details, impact, and resolution guidance for effective collaboration'
},

    {
      type: 'text',
      title: 'Why These Words',
      content:
        'Every label in this flow was chosen to answer a specific question a user would silently ask. "Severity" over "priority" because severity describes impact, not just urgency, which is what a non-technical user actually needs to triage. I avoided system terms like "validation failure" entirely, replacing them with what actually happened ("this field doesn\'t match the expected format") so users never had to translate our language into their own before they could act.'
    },

    {
      type: 'text',
      title: 'Iterations and Testing',
      content:
        'The first draft of the error report grouped issues by data source, which tested poorly: users cared about how bad an error was, not where it came from. I re-sorted by severity first and moved source into a secondary tag after a round of usability testing showed people abandoning the page while scanning for the most urgent items. Later feedback from support flagged that "fix it now" language felt alarming for low-severity issues, so I split the copy by severity tier: direct instructions for blockers, softer "you can address this later" framing for warnings.'
    },

    {
      type: 'testimonial',
      quote:
        'The rewritten error flow cut our escalations almost overnight. Support stopped being the translation layer between the product and the customer.',
      author: 'Onboarding Team Lead',
      role: 'Internal stakeholder'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'The experience shifted from a technical error log to a guided resolution flow. Users can now quickly understand issues, take action without external help, and confidently progress through onboarding. This reduces friction, improves task completion, and creates a more intuitive product experience.'
    }
  ]
},  

{
  id: 'recommendation-strategy-builder',
  index: '02',
  title: 'Designing a Centralized Recommendation Strategy Builder',
  category: 'Content Design · UX Writing',
  year: '2024',
  description:
    'Built a single place for users to configure recommendation campaigns across web, app, email, and push, instead of switching between disconnected tools and guessing which settings actually worked together.',
  tags: ['UX Writing', 'Content Design', 'SaaS', 'Complex Systems'],
  image: '/images/project2/project2_1.jpeg',

  overview:
    'Users had to configure recommendation campaigns across multiple channels, but the settings were scattered across different tools with no clear view of how one choice affected another. I designed a single strategy builder that brings every configuration into one place and makes the system\'s logic visible as you go.',

  challenge:
    'Every choice in the system affected what came next. Pick one channel, and only certain algorithms or filters became available; pick another, and the options changed again. Without clear structure, users were left guessing, or worse, building invalid configurations they wouldn\'t discover until later.',

  approach:
    'Instead of hiding the system\'s complexity, I made it visible. Every state in the flow, default, disabled, or restricted, explains itself: why an option is greyed out, what a choice unlocks, what happens next. Content became the thing that made the system legible.',

  outcome:
    'Users could build and manage campaigns without needing a support ticket to understand why something wasn\'t working, and the builder scaled cleanly as more channels and rules got added.',

  sections: [
    {
      type: 'text',
      title: 'Bringing Everything Into One Place',
      content:
        'The strategy builder was designed as a centralized space where users can configure all aspects of recommendation campaigns. Instead of switching between different tools or flows, users can define channels, algorithms, filters, and rules within a single interface. This reduces fragmentation and creates a more cohesive experience.'
    },

   {
  type: 'image-slider',
  title: 'End-to-End Strategy Creation Flow',
  slides: [
    {
      src: '/images/project2/image1.jpeg',
      caption: 'Strategy creation flow where users configure channels and page types upon which the selection below differs'
    },
    {
      src: '/images/project2/image2.jpeg',
      caption: 'Exit confirmation modal preventing accidental data loss'
    },
    {
      src: '/images/project2/image3.jpeg',
      caption: 'Strategy list view with success feedback after creation'
    }
  ]
},

    {
      type: 'text',
      title: 'Showing How Choices Affect Each Other',
      content:
        'Each configuration choice affects what options are available next. For example, selected channels determine which algorithms or filters can be applied. To prevent confusion, I structured the content to reflect these dependencies clearly, helping users understand how their decisions shape the system.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_2.jpeg',
      caption:
        'System constraints communicated through contextual messaging, helping users understand why certain options are unavailable'
    },

    {
      type: 'text',
      title: 'Explaining Algorithm Choices in Context',
      content:
        'Algorithm selection is a key decision point in the flow. I designed the content to clearly communicate what each option represents and when it is applicable. Instead of relying on generic tooltips, messaging is directly tied to user selections, making the system feel more predictable and easier to navigate.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_3.jpeg',
      caption:
        'Algorithm selection with contextual guidance that connects user choices to available options'
    },

    {
      type: 'text',
      title: 'Catching Mistakes Before They Happen',
      content:
        'To support smooth progression, validation and feedback were designed to be immediate and actionable. Users are clearly informed about missing inputs or incorrect configurations, along with guidance on how to fix them. This reduces friction and prevents errors early in the process.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_4.jpeg',
      caption:
        'Clear validation and feedback states that guide users toward completing the configuration correctly'
    },

    {
      type: 'text',
      title: 'Explaining Why Something Is Locked',
      content:
        'In scenarios where configurations cannot be modified, such as when a strategy is already in use, the system provides clear explanations. This ensures users understand the reason behind restrictions, reducing frustration and building trust in the system.'
    },

    {
      type: 'image',
      src: '/images/project2/project2_5.jpeg',
      caption:
        'Informational messaging that explains why certain configurations are locked or cannot be edited'
    },

    {
      type: 'text',
      title: 'Reflection and Rationale',
      content:
        'I chose to explain restrictions in terms of consequence ("this strategy is live, so editing it would change results your team is already relying on") rather than just stating the rule ("this field is locked"). Stating a rule without a reason reads as arbitrary; explaining the consequence makes the restriction feel like protection instead of a blocker, which mattered a lot given how many interdependent choices this builder had.'
    },

    {
      type: 'text',
      title: 'Iterations and Feedback',
      content:
        'Early versions greyed out unavailable options with no explanation, and usability sessions showed users repeatedly clicking disabled controls trying to figure out why. I added inline reasoning to every disabled state as a direct result, then tested a second round where messaging was too technical (referencing internal rule names); that copy was rewritten again to describe the user\'s own prior choice as the cause, closing the loop between decision and consequence.'
    },

    {
      type: 'testimonial',
      quote:
        'This is the first time a complex config builder in our product actually explained itself. Support tickets about "why can\'t I select this" dropped noticeably after launch.',
      author: 'Product Manager',
      role: 'Internal stakeholder'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'By centralizing configuration and making system behavior transparent, the experience enables users to create strategies more efficiently and with greater confidence. The structured flow reduces cognitive load, minimizes errors, and supports scalable campaign management.'
    }
  ]
},

{
  id: 'use-case-planner',
  index: '03',
  title: 'Designing a Self-Serve Use Case Planner',
  category: 'Content Design · UX Writing · Onboarding',
  year: '2025',
  description:
    'Replaced offline onboarding calls with a guided, self-serve planning flow that recommends relevant use cases and turns them into an owned, assigned plan, cutting manual back-and-forth with CSMs, TAMs, and onboarding managers.',
  tags: ['UX Writing', 'Content Design', 'Onboarding', 'Self-Serve'],
  image: '/images/project3/welcome-empty.png',

  overview:
    'This was, underneath everything, a writing problem. A CSM used to sit on a call and translate our product into a customer\'s business in real time: turning internal feature names into plain language, explaining why a field mattered, answering "does this apply to me" on the spot. To make this self-serve, every one of those spoken answers had to become written content: a question, a label, an empty state, a one-line explanation, that could do the same job with no one in the room.',

  challenge:
    'Customers had never spoken to Insider before and were now expected to make product decisions alone, using internal names like "Architect" or "Eureka," trigger logic written for engineers, and a use case catalog with entries just labeled "Use Case Name" with no description. Written badly, this content would either overwhelm the customer with jargon they had to ask someone to translate, defeating the point, or under-explain and leave them stuck exactly where a CSM used to step in.',

  approach:
    'I rewrote the product\'s internal vocabulary into the customer\'s own words at every step, instead of asking the customer to learn ours. Objectives are written as business outcomes ("Acquire New Customers"), not feature names. Each use case has a plain-language description written like a person would say it out loud, not a system trigger. Every empty state, locked field, and required-data callout says why in one sentence, so the customer never has to guess or escalate.',

  outcome:
    'Customers can now go from "what does your product even do for a business like mine" to a prioritized, assigned onboarding plan, reading and writing their way through it alone. That is a direct result of the words on screen doing the job a CSM used to do out loud: fewer offline discovery calls for CSMs, TAMs, and onboarding managers, and a plan the customer understood well enough to build themselves, which is also why they stick with it.',

  sections: [
    {
      type: 'text',
      title: 'Writing the First Sentence Someone Reads',
      content:
        'The welcome headline and subhead had to do a lot in three sentences: say what this tool is for, name who else is involved ("Collaboration between Marketing, CRM, Product Management, and IT is essential"), and set the expectation that this takes real cross-functional buy-in, not just five idle minutes. The single button is labeled "Select Industry," the literal next action, not a vague "Get Started," so the customer never has to wonder what happens when they click it.'
    },
    {
      type: 'image',
      src: '/images/project3/welcome-empty.png',
      caption: 'Welcome screen: one call to action, and the products the account already has, so recommendations stay within what the customer can actually run'
    },
    {
      type: 'text',
      title: 'Writing a Button That Sounds Like a Person',
      content:
        'Once industry and objectives are set, the same screen returns with the button copy changed from "Select Industry" to "Let\'s Continue," a small, deliberate shift in voice. "Let\'s" makes it collaborative, like the product and the customer are building the plan together, which matters here specifically because everything from this point on was previously a conversation with a human, not a form.'
    },
    {
      type: 'image',
      src: '/images/project3/welcome-filled.png',
      caption: 'The same welcome screen, now showing the selected industry and objectives as editable chips before continuing'
    },
    {
      type: 'text',
      title: 'Removing the Fear of Getting It Wrong',
      content:
        'The helper text under "Select your Industry" does two jobs in one sentence: it explains why we\'re asking ("so we can tailor features, recommendations and more to your needs"), and it removes the pressure of choosing wrong with four words most forms leave out: "you can update this anytime." That line exists because a customer stuck on this screen too long is a customer who\'d normally have just asked their CSM instead of guessing.'
    },
    {
      type: 'image',
      src: '/images/project3/select-industry.png',
      caption: 'The helper text explains the "why" and explicitly removes the fear of picking the wrong industry'
    },
    {
      type: 'text',
      title: 'Naming Objectives the Way Customers Say Them',
      content:
        'Every objective in this list, "Acquire New Customers," "Drive First Purchase," "Increase Brand Loyalty," is written as a business result a marketer would say in a meeting, not a feature we\'d name internally. That word choice is what makes the next screen\'s personalization feel earned instead of arbitrary: the recommendations are visibly based on language the customer picked themselves, not on a system they don\'t recognize.'
    },
    {
      type: 'image',
      src: '/images/project3/define-objectives.png',
      caption: 'Objectives written in outcome language a marketer would use, not internal feature names'
    },
    {
      type: 'text',
      title: 'Writing a Two-Word Verdict',
      content:
        'Each recommended use case carries a tiny label, "Top Selected," "Low Effort," or "Quick Win," that has to communicate a value judgment in two words with no room for a sentence. I chose "Quick Win" over something like "Easy" deliberately: "Easy" describes the work, "Quick Win" describes the payoff, and a customer scanning a list of six cards is deciding based on payoff, not effort. That one-word difference is the whole reason the label exists.'
    },
    {
      type: 'image',
      src: '/images/project3/use-case-selection.png',
      caption: 'Use case selection: a short, personalized list with effort/impact labels, plus a full catalog still one click away'
    },
    {
      type: 'text',
      title: 'Rewriting System Logic as a Sentence a Person Would Say',
      content:
        'The "Use Case Description" for Cart Abandonment could have stayed what it was internally, a trigger definition: session reached checkout, no purchase event within X hours. Instead it reads: "Travelers often select a flight but leave without paying. They may be comparing prices or got distracted. If you don\'t remind them quickly, they might forget or book elsewhere." That\'s a rewrite from system logic into a story a non-technical marketer reads once and immediately recognizes as their own customer, which is the actual test a plain-language rewrite has to pass.'
    },
    {
      type: 'image',
      src: '/images/project3/use-case-details-drawer.png',
      caption: 'Use case details drawer: objectives, channels, and required user data shown together before the customer commits'
    },
    {
      type: 'text',
      title: 'Using the Same Words Everywhere',
      content:
        'When a customer creates their own use case, the form asks for a "Use Case Name" and "Use Case Description," the exact same labels used on every recommended use case elsewhere in the flow. That repetition is intentional content-system discipline: if a custom entry used different field names than a suggested one, it would read as a second-class feature instead of an equal option, even though functionally it is treated identically.'
    },
    {
      type: 'image',
      src: '/images/project3/create-use-case-drawer.png',
      caption: 'Create Use Case: a short form mirroring the suggested use case fields, so custom entries behave like the rest of the plan'
    },
    {
      type: 'text',
      title: 'Writing an Empty State That Tells You What to Do',
      content:
        'The empty state under "Defined Use Cases" doesn\'t just say there\'s no data, it reads: "You haven\'t planned any use cases yet. Start including them in your use case plan by defining one from the list above." That\'s three jobs in two sentences: name the current state plainly, remove any implication of error, and point at the exact action ("from the list above") instead of leaving the customer to figure out where "defining one" even happens.'
    },
    {
      type: 'image',
      src: '/images/project3/management-empty.png',
      caption: 'Use Case Management: use cases pending definition, with a clear next action instead of a blank state'
    },
    {
      type: 'text',
      title: 'Writing "(Optional)" Directly Into the Label',
      content:
        'Assignee, Due Date, and Additional Note are all labeled with "(Optional)" appended right onto the field name itself, rather than a legend or asterisk system explained somewhere else on the page. It\'s a small choice, but it means a customer scanning quickly never has to look anywhere but the label itself to know whether they\'re allowed to skip it, which matters a lot for someone planning this alone with no one to ask.'
    },
    {
      type: 'image',
      src: '/images/project3/define-drawer.png',
      caption: 'Define a use case: only channels and priority required, everything else optional so solo planners are never stuck'
    },
    {
      type: 'text',
      title: 'Grouping Labels That Read Like Headers, Not Data',
      content:
        'The finished plan is grouped under "High," "Medium," and "Low" priority, printed as section headers with a count ("4 Items") rather than buried as a column value in each row. Written this way, a customer or their manager can read the plan top to bottom like a document with a clear structure, instead of scanning a flat table hunting for which rows matter most.'
    },
    {
      type: 'image',
      src: '/images/project3/finished-plan.png',
      caption: 'The finished plan: grouped by priority, drag-to-reorder, and shareable, so it functions as the real onboarding roadmap'
    },
    {
      type: 'text',
      title: 'Asking the Question Instead of Labeling the Field',
      content:
        'The description field inside a defined use case is headed "What\'s This Use Case Solving?" rather than the generic "Description" used everywhere else in most tools. Phrasing it as a question a person would actually ask matters here specifically, because the person opening this drawer is often not the one who planned it, and a question invites them to read the answer rather than skim past a label they\'ve seen a hundred times.'
    },
    {
      type: 'image',
      src: '/images/project3/defined-details-drawer.png',
      caption: 'Defined use case detail: strategy and setup requirements shown together as a hand-off document for whoever executes it'
    },
    {
      type: 'text',
      title: 'Iterations and Testing',
      content:
        'The first version of the use case descriptions still leaned on product terminology because I drafted them straight from internal trigger documentation. Testing that draft with non-technical marketers surfaced the gap immediately: several couldn\'t tell whether a use case applied to their business without asking someone. I rewrote every description as a short story a marketer would recognize, then re-tested; comprehension and selection confidence both improved, which is what led to the "Quick Win" versus "Easy" labeling decision described above, that came directly from watching users hesitate over ambiguous effort language in the earlier round.'
    },

    {
      type: 'testimonial',
      quote:
        'Customers were building onboarding plans on their own within minutes, something that used to take a full call with a CSM. The writing is doing the explaining that we used to do live.',
      author: 'Onboarding Manager',
      role: 'Internal stakeholder'
    },

    {
      type: 'text',
      title: 'Impact',
      content:
        'What used to require a CSM or TAM translating the product out loud now happens through the words on screen: outcome-language objectives, plain-English use case descriptions, empty states that name the next action, and field labels that never change meaning between screens. Customers get a plan personalized to their actual industry and goals, frontline teams spend less time on repetitive discovery conversations, and the plan that comes out the other end is one the customer read, understood, and built themselves, not one they had to wait for someone else to explain.'
    }
  ]
},

{
  id: 'content-pattern-library',
  index: '04',
  title: 'Built a Reusable Toaster and Validation/Error Message Pattern System',
  category: 'Content Design · UX Writing · Content Systems',
  year: '2025',
  description:
    'Replaced one-off toaster and error-message copy with a documented, reusable content pattern library, a shared grammar any writer or designer could apply consistently, so the product stopped sounding like it was written by whoever happened to touch that screen.',
  tags: ['UX Writing', 'Content Systems', 'Design Systems', 'Error Handling'],
  hideHeroImage: true,

  impactMetrics: [
    {
      value: 60,
      suffix: '%',
      label: 'faster issue discovery',
      description:
        'Users can recognize what happened and find the next step faster than when they have to decode an unfamiliar error on their own.'
    }
  ],

  overview:
    'Before this system, toaster and error copy was written ad hoc per feature. Every team wrote its own version of "something went wrong," in its own words, with no shared logic for what made an error a warning versus a blocker, or how to handle the edge cases underneath the happy path. I built a pattern library organized by cause, not by feature, with a consistent placeholder grammar and explicit exception handling built into every pattern, so any designer or PM could pull a correct, on-brand message instead of drafting one from scratch or waiting on me.',

  challenge:
    'Error and status messaging is exactly the kind of content that quietly rots in a fast-growing product: every team needs it, nobody owns it end to end, and by the time it is bad enough to notice, there are hundreds of inconsistent one-offs to fix. The real challenge was not writing better individual messages, it was designing a system specific enough to be usable without me, and general enough to cover states nobody had thought to name yet, things like an action succeeding but with a caveat, an action being technically available but currently blocked, or the same field validation needing different wording depending on whether one item or several were selected.',

  approach:
    'I organized the system around why a message appears, not which screen it appears on: Action Completed, Action Failed, Action Invalid, Action Abused, Action Unauthorized, Action Unavailable, and Action Processing became the core vocabulary, each with its own default pattern and its own documented exceptions. Every pattern uses a consistent {placeholder} grammar (item_name, item, action, situation) so the underlying sentence structure never has to be reinvented, only the variables change. I extended the same discipline into form-level patterns, text entry, dropdown selection, item naming, image and file upload, documenting not just the copy but the exact character-limit math and device-specific trimming behavior behind it, so engineering and design had one place to check both the words and the constraints they had to design around.',

  outcome:
    'The result is a system other people can self-serve from. A designer building a new feature does not need to ask "how do we word a blocked action," they check Action Unavailable and get the default pattern plus its exception variant. This is the difference between writing consistent copy and building the system that makes consistency the path of least resistance, which is what I think "senior" actually means for a content designer: not writing every message, but making it structurally easy for anyone to write the right one.',

  sections: [
    {
      type: 'heading',
      title: 'Toasters With Rules'
    },
    {
      type: 'text',
      title: 'Defining the Toaster and Its Seven States',
      content:
        'Every pattern in this system ultimately renders as a toaster, so I started by defining the component itself: four semantic types (info, warning, error, success), each available with no action, one link action, or two link actions. Fixing this grid first meant every pattern built on top of it inherited the same visual and structural vocabulary, so a "warning" never accidentally looked or read like an "error" two screens later. On top of that base, the core of the system is seven named states, each answering a different question about why the user is seeing this message: did the action succeed (Action Completed), fail from a system error (Action Failed), fail from something the user can fix (Action Invalid), get blocked by permissions (Action Unauthorized), get blocked by a limit (Action Unavailable), get rate-limited (Action Abused), or is it still running (Action Processing). Naming the cause, not the feature, is what makes the system reusable: a new feature does not need a new pattern, it needs to identify which of these seven situations it is actually in.'
    },
    {
      type: 'image',
      src: '/images/project4/action-completed.png',
      caption: 'Action Completed — Success notification displayed when a user action has been completed successfully.'
    },
    {
      type: 'image',
      src: '/images/project4/action-completed-outside-panel.png',
      caption: 'Action Completed Outside Panel — Informational notification shown when an action is successfully initiated but completed outside the current panel.'
    },
    {
      type: 'image',
      src: '/images/project4/action-failed.png',
      caption: 'Action Failed — Error notification displayed when a user action encounters a system-level failure.'
    },
    {
      type: 'text',
      title: 'Designing the Edge Cases In, Not Around',
      content:
        'Most content guidelines document the happy path and leave edge cases to whoever hits them first. I did the opposite: every pattern includes its exception states as a first-class part of the documentation, shown in a dashed border so they read as "part of this pattern," not an afterthought. Action Abused splits into duration-specified and duration-not-specified variants. Action Unauthorized splits by whether the blocked action itself is known. Action Invalid handles both single-field and multi-field validation failures with different grammar for each.'
    },
    {
      type: 'image',
      src: '/images/project4/action-abused.png',
      caption: 'Action Abused — Warning state shown when a user repeatedly performs the same action within a restricted time period.'
    },
    {
      type: 'image',
      src: '/images/project4/action-unauthorized.png',
      caption: 'Action Unauthorized — Error states for actions the user is not authorized to perform, with and without a specified action.'
    },
    {
      type: 'image',
      src: '/images/project4/action-unavailable.png',
      caption: 'Action Unavailable — Error states displayed when a requested action is unavailable or restricted for the selected item.'
    },
    {
      type: 'image',
      src: '/images/project4/action-invalid.png',
      caption: 'Action Invalid — Validation notifications shown when user-provided inputs prevent an action from being completed.'
    },
    {
      type: 'image',
      src: '/images/project4/action-processing.png',
      caption: 'Action Processing — Informational notification displayed while a user action is being processed or completed asynchronously.'
    },
    {
      type: 'heading',
      title: 'Extending the Grammar Into Validation Messages'
    },
    {
      type: 'text',
      content:
        'Once the state-based vocabulary existed, I extended it downward into the specific form components that trigger these states most often: text entry, dropdown selection, and item naming. Each gets the same treatment, a default required-field pattern, then its real exceptions (existing name given, invalid characters, limits exceeded), written with the same {item} and {generic_item} placeholder logic as the toaster patterns above, so a form validation message and a toaster message never feel like they came from two different systems.'
    },
    {
      type: 'image',
      src: '/images/project4/item-naming.png',
      caption: 'Item Naming — Validation states for required, duplicate, invalid, and character-limit errors when naming items.'
    },
    {
      type: 'image',
      src: '/images/project4/general-text-entry.png',
      caption: 'General Text or Value Entry — Validation states for required, invalid, and duplicate text or value inputs.'
    },
    {
      type: 'image',
      src: '/images/project4/dropdown-single.png',
      caption: 'Dropdown Single Selection — Validation states for required single-select dropdown fields and missing selections.'
    },
    {
      type: 'image',
      src: '/images/project4/dropdown-multi.png',
      caption: 'Dropdown Multi Selection — Validation states for required multi-select fields and selection-limit errors.'
    },
    {
      type: 'text',
      title: 'Writing Character Limits as Content, Not Just Constraints',
      content:
        'Character limits are usually treated as a design or engineering constraint that content works around. I documented them as part of the content pattern itself, because the actual wording of a limit message changes depending on whether there is a lower bound, an upper bound, or both, and because dynamic content (like inserting a recipient\'s name) changes how trimming behaves differently across devices. Writing "the text may be trimmed on some devices depending on dynamic content" as a standard, reusable line meant no one had to rediscover that nuance the hard way in QA.'
    },
    {
      type: 'image',
      src: '/images/project4/text-entry-limits.png',
      caption: 'Text Entry Limits — Validation states for character limits, existing entries, and message text length restrictions.'
    },
    {
      type: 'text',
      title: 'Upload Patterns: Where Content Meets Real Constraints',
      content:
        'File and image upload errors are where content, design, and engineering constraints collide hardest, size limits, dimension ratios, formats, encoding. For image upload, I wrote one exception pattern that flexes across four failure reasons (size, dimensions, required field, invalid format) without needing four different messages. For file upload, I went further and wrote the actual usage requirements as content, CSV formatting rules, encoding support, how duplicate rows are handled, because a user is far more likely to read a bulleted requirements list before uploading than to parse a rejection message after.'
    },
    {
      type: 'image',
      src: '/images/project4/image-upload.png',
      caption: 'Image Upload — Validation states for image size, dimensions, required fields, and unsupported image formats.'
    },
    {
      type: 'image',
      src: '/images/project4/file-upload.png',
      caption: 'File Upload — Validation state for invalid file uploads, including unsupported formats, sizes, or file requirements.'
    },
    {
      type: 'text',
      title: 'Impact',
      content:
        'This system turned toaster and error copy from a recurring one-off request into something teams could self-serve correctly on the first try. New features inherit consistent, on-brand messaging by default, edge cases arrive pre-solved instead of surfacing in QA, and I stopped being a bottleneck for a category of writing that used to route through me by default. That shift, from writing the messages to building the system that writes them consistently without me, is the case I make for what senior content design work actually looks like.'
    }
  ]
},
];
