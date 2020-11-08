// @flow
import * as d3 from "d3";

export type TrackId =
  | "DESIGN"
  | "DOMAIN_EXPERTISE"
  | "DELIVERY"
  | "SCOPING"
  | "EXPECTATION_MANAGEMENT"
  | "CORE_COLLABORATION_SKILLS"
  | "EQUITY_AND_INCLUSION";
"MENTORSHIP" | "OUTREACH" | "RECRUITING" | "PRODUCT_ACUMEN" | "PRIORITIZATION";
export type Milestone = 0 | 1 | 2 | 3 | 4;

export type MilestoneMap = {
  DESIGN: Milestone,
  DOMAIN_EXPERTISE: Milestone,
  DELIVERY: Milestone,
  SCOPING: Milestone,
  EXPECTATION_MANAGEMENT: Milestone,
  CORE_COLLABORATION_SKILLS: Milestone,
  EQUITY_AND_INCLUSION: Milestone,
  MENTORSHIP: Milestone,
  RECRUITING: Milestone,
  OUTREACH: Milestone,
  PRODUCT_ACUMEN: Milestone,
  PRIORITIZATION: Milestone,
};
export const milestones = [0, 1, 2, 3, 4];

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    examples: string[],
  }[],
};

type Tracks = {|
  DESIGN: Track,
  DOMAIN_EXPERTISE: Track,
  DELIVERY: Track,
  SCOPING: Track,
  TEAM_EFFECTIVENESS: Track,
  EXPECTATION_MANAGEMENT: Track,
  CORE_COLLABORATION_SKILLS: Track,
  EQUITY_AND_INCLUSION: Track,
  MENTORSHIP: Track,
  RECRUITING: Track,
  OUTREACH: Track,
  PRODUCT_ACUMEN: Track,
  PRIORITIZATION: Track,
|};

export const tracks: Tracks = {
  DESIGN: {
    displayName: "Design",
    category: "A",
    description: "Architect simple solutions even if the use case is complex.",
    milestones: [
      {
        summary:
          "Come up with solutions to solve the problem detailed in an issue following best practices established in the team.",
        examples: ["Write testable, readable code keeping edge cases in mind."],
      },
      {
        summary:
          "Utilises abstractions and code isolation effectively. Maintain consistency across the code base and handles edge cases. Code review their own work and regularly review their teammates' work.",
        examples: ["Leave the code base in a better place than before."],
      },
      {
        summary:
          "Design software that are maintainable and easy to extend. The software can withstand the test of time.",
        examples: [
          "Implement systems that enable better testing.",
          "Refactor a complex workflow to reduce dependencies.",
          "Help others improve through code reviews, thorough documentation and technical guidance.",
        ],
      },
      {
        summary:
          "A record of designing stable, maintainable, scalable code that is product-critical. Can articulate tradeoffs across the architecture owned by the squad.",
        examples: [
          "Turnaround: identify blockers for the product to be successful and architect a plan to resolve them.",
          "Accelaterated growth: can quickly identify bottlenecks that will happen and propose a design to tackle scalability and performance. Even when shortcuts are necessary, they should be documented and followed up.",
          "Sustaining success: design software that anticipates future product and team needs.",
          "One example: creating a UI component library so that we could iterate fast on the frontend.",
        ],
      },
    ],
  },

  DOMAIN_EXPERTISE: {
    displayName: "Domain Expertise",
    category: "A",
    description:
      "Develop expertise in your field and apply that to the Rasa code base.",
    milestones: [
      {
        summary:
          "Learn to use existing tools at Rasa. Read our documentation and able follow the steps. Update our documentation if needed.",
        examples: [],
      },
      {
        summary:
          "Apply the principles of the programming language and framework they are working with. Demonstrate knowledge on industry trends.",
        examples: [
          "Familiar with common pitfalls in cross-browser implementations.",
        ],
      },
      {
        summary:
          "Has expertise in multiple areas in the codebase in one technical domain. Understand the architecture. Understand the principles, inner-workings and limitations of the programming language and framework they are working with.",
        examples: [
          "Provide technical advice and weight in on technical decisions.",
          "We've hit a roadblock on our implementation of our inline table editor. You are researching technologies, digesting the results for the team to chime in on and drive the discussion to a conclusion.",
        ],
      },
      {
        summary:
          "Go-to-expert of the team's ownership in one technical domain and developing expertise in other relevant areas. Ensure that Rasa is ahead of the curve.",
        examples: [
          "Turnaround: able to debug the hairiest mission-critical problems that the team encounters.",
          "Accelerated growth: well-versed in both backend & ops, drive large-scale migrations to help Rasa stay ahead of the curve.",
          "Sustaining success: be a domain expert on both the research and engineering sides to ensure good collaboration.",
        ],
      },
    ],
  },

  DELIVERY: {
    displayName: "Delivery",
    category: "B",
    description: "Deliver on commitments in a realistic and timely manner.",
    milestones: [
      {
        summary:
          "Make steady progress on issues. Know when to ask for help to get themselves unblocked. Responsible for their own changes.",
        examples: [
          "Test the affected flow thoroughly in their branch when introducing changes.",
          "Complete tickets with the mentor's guidance and code reviews.",
          "Follow through with the issues that arise from their code change.",
        ],
      },
      {
        summary:
          "Able to drive and complete new assignments without the need for constant significant guidance from teammates. Deliver projects according to the product spec. Strive to keep estimates up to date and deliver those estimates.",
        examples: [
          "Persistent in face of challenging bugs fixes.",
          "Deliver X feature according to the product spec and designs. Iterate with product to meet requirements and fix issues along the way.",
        ],
      },
      {
        summary:
          "Delivers work given (yet) unclear requirements within the context of their team. ",
        examples: [
          "Able to reduce the complexity of projects and processes to meet the product need.",
          "When the situation calls for a fast delivery, execute on that and wrap up the improvements later.",
          "Responsible for a large-scale project and makes sure that the project is complete by the release date.",
        ],
      },
      {
        summary:
          "Able to execute complex designs. Foresee impediments, mitigate them proactively before they become emergencies.",
        examples: [
          "Turnaround: can jump into unchartered areas and gain expertise quickly. Turn a dysfunctional team around.",
          "Accelerated growth: help the team deliver and meet their goals. Do anything that is necessary to achieve that.",
          "Sustaining success: responsible for the team's delivery. Think of improvements and work with infrastructure teams on it.",
        ],
      },
    ],
  },

  SCOPING: {
    displayName: "Scoping",
    category: "B",
    description:
      "Break up work into actionable chunks so that you can parallelize the work and iterate quickly.",
    milestones: [
      {
        summary:
          "Able to take well-defined issues and publish small pull requests.",
        examples: [],
      },
      {
        summary:
          "Able to break features down into actionable issues so that they can be parallelized by the team.",
        examples: [],
      },
      {
        summary:
          "Stage projects into well-defined milestones as minimal viable products to get early user feedback. Coordinates development and monitors dependencies in the product and in other teams.",
        examples: ["Scope out the work for a major release."],
      },
      {
        summary: "Turn product and business problems into an executable plan.",
        examples: [],
      },
    ],
  },

  EXPECTATION_MANAGEMENT: {
    displayName: "Expectation management",
    category: "C",
    description:
      "Obtaining and surfacing the right amount of information to the right people at the right time.",
    milestones: [
      {
        summary:
          "Effectively communicate their progress and blockers on an issue level.",
        examples: [],
      },
      {
        summary:
          "Escalates any blockers, delays, and cost ballooning to their squad daily. Align expectations within the team.",
        examples: [
          "Clarify ambiguities with designers and / or product managers before working on a feature.",
        ],
      },
      {
        summary:
          "Proactively shares information and solicit feedback from all stakeholders. Ensures expectations within their team are aligned between team members and external stakeholders.",
        examples: [],
      },
      {
        summary:
          "Invest in long-term relationships with other teams at Rasa to keep your team's goals in their plans. Communicate the team's long-term plan to other stakeholders to create alignment.",
        examples: [],
      },
    ],
  },

  CORE_COLLABORATION_SKILLS: {
    displayName: "Core collaboration skills",
    category: "C",
    description:
      "Be honest: share your opinions in an open and respectful manner to help the team and Rasa succeed.",
    milestones: [
      {
        summary:
          "Able to take technical and behavioral feedback in an open, respectful manner with a curious mindset. Able to follow existing team processes.",
        examples: [],
      },
      {
        summary:
          "Express opinions in the team and to teammates in an open, respectful and emphathetic manner. After a consensus is reached, disagree and commit.",
        examples: [
          "Provide input on discussions around team practices and processes. Alerts the team of current process related issues.",
        ],
      },
      {
        summary:
          "Able to mediate discussions in a team. Able to de-escalate disagreements and resolve them with concensus. Resolve conflicts with teammates with compassion, patience and respect.",
        examples: [
          "Lead discussions around team process improvements, get consensus and buy in to execute.",
        ],
      },
      {
        summary:
          "Maintain a pulse on teams' morale and help with retention. Able to motivate the teams to achieve their goals. Able to drive organizational changes.",
        examples: [
          "Come up with re-org plans to support with Rasa's growth. Get manager and engineers' buy-in.",
        ],
      },
    ],
  },

  EQUITY_AND_INCLUSION: {
    displayName: "Equity and inclusion",
    category: "C",
    description:
      "Respect is our code: diversity, equity and inclusion is the core of our mission. (Can opt out from IV)",
    milestones: [
      {
        summary:
          "Exhibits Rasa's core values. Contribute positively to a safe and inclusive team environment.",
        examples: [
          "Actively fight against unconscious biases.",
          "Participate in DEI onboarding.",
        ],
      },
      {
        summary: "Take concrete actions to be inclusive on a personal level.",
        examples: [
          "Educate themselves on being good allies.",
          "Attend ally workshop and reflect on making a difference.",
          "Make space for teammates to participate.",
        ],
      },
      {
        summary:
          "Help create an engaging, inclusive, and equitable environment in the team.",
        examples: [
          "Increase psychological safety of the entire team.",
          "Use own power and privilege to raise difficult issues of other teammates' behalf.",
        ],
      },
      {
        summary:
          "Help create an engaging, inclusive, and equitable environment at Rasa and beyond.",
        examples: [
          "Advocate for the needs of the team and groups members at Rasa.",
          "Lead PyLadies and contribute actively to help underrepresented minorities succeed in the industry.",
        ],
      },
    ],
  },

  MENTORSHIP: {
    displayName: "Mentorship",
    category: "D",
    description:
      "Challenge yourself and your team to be exceptional: share your learnings and knowledge to raise the bar.",
    milestones: [
      {
        summary:
          "Seek out mentorship and help to grow their own experience. Share their learnings regularly with the team.",
        examples: [],
      },
      {
        summary:
          "Make themselves available for support and advice for more junior members. Able to give technical feedback and share knowledge with teammates. Able to give behavioral feedback to mentees with manager's support.",
        examples: [
          "Introduce React-saga patterns to an engineer through reviews, pair-programming and discussions.",
        ],
      },
      {
        summary:
          "Plan with the manager and mentor some team members. Prioritize the teammate's learning and avoid strong ego. Delivers reinforcing and corrective feedback to their mentees, teammates, and manager directly in a constructive manner.",
        examples: [
          "Help mentee to find out their strengths and weaknesses.",
          "Discuss career options and areas of interest formally.",
          "Guide teammates to come up with solutions instead of telling them the answer.",
        ],
      },
      {
        summary: "Raise the technical bar of the teams.",
        examples: [
          "Turnaround: Come up with a plan to help a struggling teammates succeed. Give them direct feedback.",
          "Accelaterated growth: can mentor and ramp up multiple engineers successfully in a short time.",
          "Sustaining success: raise the technical level of the entire team by means of specialized technical training, workshops, personal coaching etc.",
        ],
      },
    ],
  },

  RECRUITING: {
    displayName: "Recruiting",
    category: "D",
    description:
      "Help Rasa grow by bringing in more Rasas. (Can opt out from III)",
    milestones: [
      {
        summary: "Provide feedback for the process.",
        examples: [
          "A recent hire provides feedback on the recruiting and onboarding process.",
        ],
      },
      {
        summary:
          "Participates in hiring. Provides clear, timely feedback on candidates.",
        examples: ["Add observable examples for evalution criteria."],
      },
      {
        summary: "Contribute and improve the recruiting process.",
        examples: [
          "Help interviewer trainees calibrate their feedback.",
          "Write new take-home tests that meet the quality bar.",
          "Bring in candidates into the pipeline proactively with a high conversion rate.",
        ],
      },
      {
        summary:
          "Set recruitment and onboarding strategies. Invest in long-term relationships for critical roles.",
        examples: [],
      },
    ],
  },

  OUTREACH: {
    displayName: "Outreach",
    category: "D",
    description: "Be an ambassador for Rasa. (Can opt out)",
    milestones: [
      {
        summary:
          "Represents Rasa externally. Show interest in Rasa's achievements.",
        examples: [
          "Support and encourage participation from the open source community.",
          "Like Rasa's social media posts.",
          "Attend Rasa-hosted events and interact with other participants.",
        ],
      },
      {
        summary: "Take up active roles in the community on behalf of Rasa.",
        examples: [
          "Act as a coach for open source contributors guiding them through the development process.",
          "Volunteer as a helper at a PyLadies workshop.",
        ],
      },
      {
        summary:
          "Take a leadership role in evangelising Rasa's work to the industry.",
        examples: [
          "Represent Rasa at a high-visibility conference.",
          "Write for the Rasa blog.",
        ],
      },
      {
        summary: "Exposure has a significant impact on Rasa's success.",
        examples: [
          "A workshop drove Rasa's application numbers up.",
          "A talk turned into an inbound sales opportunity.",
          "A demo at an open source conference invited 50+ developers to adopt Rasa in their projects.",
        ],
      },
    ],
  },

  PRODUCT_ACUMEN: {
    displayName: "Product acumen",
    category: "E",
    description:
      "Think for yourself: challenge our strategies and be an advisor for the product org.",
    milestones: [
      {
        summary:
          "Understand basic utility of the product. Seek to understand product requirements of issues and deliver accordingly.",
        examples: [],
      },
      {
        summary:
          "Know how their squad's product features fit into the larger product scope. Understand a squad's domain and drive feature proposals along with product and / or design. Have the users in mind when building features.",
        examples: [
          "Evaluate internal or open source feature requests and argue why they should not be made.",
          "Identify all the paths users can take in the code. Work with designer to account for all the use cases.",
        ],
      },
      {
        summary:
          "Provide high-level product input and evaluate tradeoffs based on this insight. Continuously evaluates proposed product features with respect to better alternatives unknown to product management. Optimize for the users' need.",
        examples: [
          "Evaluate Open Source contributions with respect to the Product Roadmap and their long term impact on the product development. Anticipate opportunities and roadblocks.",
        ],
      },
      {
        summary:
          "Well-researched about the Conversational AI industry. Able to drive product direction along with the product org. Able to align product and engineering goals when proposing engineering initiatives.",
        examples: ["Work on the company product strategy deck."],
      },
    ],
  },

  PRIORITIZATION: {
    displayName: "Prioritization",
    category: "E",
    description: "Prioritize and deliver work to create the most impact.",
    milestones: [
      {
        summary: "Pick up issues according to the squad's prioritisation.",
        examples: [],
      },
      {
        summary:
          "Contribute to team priorities and OKRs discussions. Help the team prioritize issues based on the agreement.",
        examples: [],
      },
      {
        summary:
          "Work with stakeholders to set priorities and scope across multiple competing projects on a team level. Able to handle multiple competing responsibilties.",
        examples: [],
      },
      {
        summary: "Prioritize products and strategies on a company level.",
        examples: [],
      },
    ],
  },
};

export const trackIds: TrackId[] = Object.keys(tracks);

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category);
  return set;
}, new Set());

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range(["#D923BA", "#491BF2", "#8E72F2", "#E1DCF2", "#77F2F2"]);

export const titles = [
  "-",
  "Junior Software Engineer",
  "Software Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Senior Software Engineer",
  "Staff Engineer",
];
