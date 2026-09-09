export interface Section {
  type: 'text' | 'image' | 'image-slider';
  title?: string;
  content?: string;
  src?: string;
  caption?: string;
  images?: string[];
  size?: 'small' | 'medium' | 'large';
  slides?: { src: string; caption?: string }[];
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;

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
    'Before this, a new customer\'s onboarding plan came out of a series of offline calls and emails with a CSM, TAM, or onboarding manager: what does your business do, what do you want to achieve, which of our features actually apply to you. I designed a guided flow inside the Onboarding Center that asks two questions, industry and objectives, and turns the answers into a short, relevant list of use cases the customer can select, prioritize, and assign themselves, with no meeting required.',

  challenge:
    'Onboarding a new account meant scheduling time with a CSM or TAM just to figure out which of dozens of use cases were even relevant to that customer\'s industry and goals. That back-and-forth was slow for the customer and expensive for the frontline team, who were repeating the same discovery conversation on every account. Skip the conversation, though, and customers were left facing a full catalog with no idea where to start.',

  approach:
    'I designed a flow that front-loads the discovery questions themselves: industry first, then business objectives, each on its own screen so the customer never has to make a strategic choice and an operational one at the same time. Those two answers drive a short, personalized use case list instead of a full catalog. From there, selection is separated from definition, so picking a use case is a low-commitment tick, and turning it into an actual plan (priority, channel, owner, due date) happens as a separate step. The result is a plan the customer builds and owns without needing a CSM on the call.',

  outcome:
    'Customers can now go from "what does your product even do for a business like mine" to a prioritized, assigned onboarding plan on their own. That means fewer offline discovery calls for CSMs, TAMs, and onboarding managers, and a plan that is actually personalized to the account instead of a generic checklist, which is also why customers stick with it: it is a plan they built, not one that was handed to them.',

  sections: [
    {
      type: 'text',
      title: 'Starting With Context, Not a Catalog',
      content:
        'The entry point to the whole flow collects the two inputs that drive everything after it: industry and business objectives. Before asking for either, the welcome screen shows the customer what they are already subscribed to, so the plan stays inside what they can actually run. There is exactly one call to action here, no form, because onboarding usually fails at the first screen.'
    },
    {
      type: 'image',
      src: '/images/project3/welcome-empty.png',
      caption: 'Welcome screen: one call to action, and the products the account already has, so recommendations stay within what the customer can actually run'
    },
    {
      type: 'text',
      title: 'Making the Choice Reversible and Visible',
      content:
        'Once the customer answers both questions, the same welcome screen returns as a summary showing their industry and objectives as removable chips, with the primary action changing to "Let\'s Continue." Reusing one screen for both states, instead of building a separate confirmation page, gives the customer a visible checkpoint of what their recommendations will be based on, and makes the flow resumable: a returning customer sees exactly where they left off instead of being asked the same questions twice.'
    },
    {
      type: 'image',
      src: '/images/project3/welcome-filled.png',
      caption: 'The same welcome screen, now showing the selected industry and objectives as editable chips before continuing'
    },
    {
      type: 'text',
      title: 'One Decision Per Screen',
      content:
        'Industry is asked for first and alone, because it is the strongest single predictor of which use cases will matter, and one decision per screen keeps the answer accurate. Objectives come next as multi-select, since real businesses pursue several goals at once, written in outcome language the customer already uses rather than in our product or feature language.'
    },
    {
      type: 'image',
      src: '/images/project3/select-industry.png',
      caption: 'Industry selection: a single decision, explicitly reversible, so customers do not fear "locking in" the wrong answer'
    },
    {
      type: 'image',
      src: '/images/project3/define-objectives.png',
      caption: 'Objectives selection: multi-select checkboxes in outcome language, used as the filter for the next screen'
    },
    {
      type: 'text',
      title: 'A Personalized List, Not a Full Catalog',
      content:
        'Using industry and objectives from the first two screens, customers see a short list of suggested use cases, each with a channel preview and an effort/impact label like Top Selected, Low Effort, or Quick Win, so they are choosing based on seeing the result, not reading a name. The list stays split into Suggested and More, with the applied filters visible as removable chips, so the personalization is visible and trustworthy rather than a black box.'
    },
    {
      type: 'image',
      src: '/images/project3/use-case-selection.png',
      caption: 'Use case selection: a short, personalized list with effort/impact labels, plus a full catalog still one click away'
    },
    {
      type: 'text',
      title: 'Surfacing the Real Cost Before Committing',
      content:
        'Clicking a use case opens a drawer with the full story: what it solves, target segment, recommended channels, and the user data it actually needs. Showing data requirements at selection time, not after, is deliberate: it is the honest cost of the use case, and surfacing it here prevents the plan from being approved and then getting stuck later during integration.'
    },
    {
      type: 'image',
      src: '/images/project3/use-case-details-drawer.png',
      caption: 'Use case details drawer: objectives, channels, and required user data shown together before the customer commits'
    },
    {
      type: 'text',
      title: 'Letting Customers Add Their Own',
      content:
        'No recommendation set covers every business. If nothing in the list matches, customers can create their own use case in a short form that mirrors the same fields as the suggested ones, so custom entries sit in the same table, get the same priority and assignee treatment later, and the plan stays complete instead of half-tracked in a spreadsheet nobody else sees.'
    },
    {
      type: 'image',
      src: '/images/project3/create-use-case-drawer.png',
      caption: 'Create Use Case: a short form mirroring the suggested use case fields, so custom entries behave like the rest of the plan'
    },
    {
      type: 'text',
      title: 'Turning a Selection Into an Owned Plan',
      content:
        'Every use case the customer picked lands here undefined. Two stacked tables make progress physically visible, pending on top, defined below, so the admin task feels like it has a finish line instead of an open-ended chore. The empty state names the next action directly instead of just saying there is no data.'
    },
    {
      type: 'image',
      src: '/images/project3/management-empty.png',
      caption: 'Use Case Management: use cases pending definition, with a clear next action instead of a blank state'
    },
    {
      type: 'text',
      title: 'Making Ownership Optional, Not Blocking',
      content:
        'Defining a use case means setting channels, priority, an optional assignee, an optional due date, and a free-text note. Only channels and priority are required, so a customer planning alone is never blocked, while a team that wants accountability can add it in the same place. The note field exists because real plans always carry a condition a structured field would not capture, like launching alongside another campaign.'
    },
    {
      type: 'image',
      src: '/images/project3/define-drawer.png',
      caption: 'Define a use case: only channels and priority required, everything else optional so solo planners are never stuck'
    },
    {
      type: 'text',
      title: 'The Plan the Customer Actually Takes Away',
      content:
        'Defined use cases move into a table grouped by priority, with channel, assignee, due date, and notes visible per row, and a Share button, because this plan is the artifact the customer takes to their own team and to their Insider contact. This is the output of the whole flow, and it replaces what used to be a summary a CSM would type up after a call.'
    },
    {
      type: 'image',
      src: '/images/project3/finished-plan.png',
      caption: 'The finished plan: grouped by priority, drag-to-reorder, and shareable, so it functions as the real onboarding roadmap'
    },
    {
      type: 'text',
      title: 'A Hand-Off Document, Not Just a Record',
      content:
        'Opening a defined use case shows the strategy (why, for whom) and the operational requirements (which data, which channel setup) together, because the person picking up the task was usually not the person who planned it. Listing the remaining channel setup requirements here connects the plan back to what still has to be configured before the use case can go live.'
    },
    {
      type: 'image',
      src: '/images/project3/defined-details-drawer.png',
      caption: 'Defined use case detail: strategy and setup requirements shown together as a hand-off document for whoever executes it'
    },
    {
      type: 'text',
      title: 'Impact',
      content:
        'What used to require a discovery call and a follow-up summary from a CSM or TAM now happens inside the product itself. Customers get a plan personalized to their actual industry and goals, frontline teams spend less time on repetitive discovery conversations, and the plan that comes out the other end is one the customer built and can act on immediately, not one they have to wait for someone else to send over.'
    }
  ]
},
];
