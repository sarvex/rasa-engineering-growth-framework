// @flow
import * as d3 from "d3";
import InstructionsPanel from "./components/InstructionsPanel";

export type TrackId =
  | "DESIGN"
  | "DOMAIN_EXPERTISE"
  | "DELIVERY"
  | "SCOPING"
  | "EXPECTATION_MANAGEMENT"
  | "CORE_COLLABORATION_SKILLS"
  | "EQUITY_AND_INCLUSION"
  | "MENTORSHIP"
  | "OUTREACH"
  | "RECRUITING"
  | "PRODUCT_ACUMEN"
  | "PRIORITIZATION";
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

type Title = {
  displayName: String,
  requirements: MilestoneMap,
};

type Titles = {|
  JUNIOR_SOFTWARE_ENGINEER: Title,
  SOFTWARE_ENGINEER: Title,
  FRONTEND_ENGINEER: Title,
  FULLSTACK_ENGINEER: Title,
  BACKEND_ENGINEER: Title,
  SENIOR_SOFTWARE_ENGINEER: Title,
  STAFF_ENGINEER: Title,
|};

export type TitleId =
  | "JUNIOR_SOFTWARE_ENGINEER"
  | "SOFTWARE_ENGINEER"
  | "FRONTEND_ENGINEER"
  | "FULLSTACK_ENGINEER"
  | "EXPECTATION_MANAGEMENT"
  | "BACKEND_ENGINEER"
  | "SENIOR_SOFTWARE_ENGINEER"
  | "STAFF_ENGINEER";

type Vertical = {
  displayName: String,
  numAreas: Number,
}

type Verticals = {|
  TECHNICAL_SKILLS: Vertical,
  EXECUTION: Vertical,
  TEAMWORK: Vertical,
  INFLUENCE: Vertical,
  PRODUCT_SENSE: Vertical,
|}

export const tracks: Tracks = {
  DESIGN: {
    displayName: "Design",
    category: "TECHNICAL_SKILLS",
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
        examples: [
          "Leave the code base in a better place than before.",
          "Write the scoping document and implement support for rules in Rasa X.",
          "Come up with solutions to implementing HTTPS for IVC.",
          "Adapt drafts from the research team to production-ready code."
        ],
      },
      {
        summary:
          "Design software that are maintainable and easy to extend. The software can withstand the test of time.",
        examples: [
          "Implement a testing framework that reduces the team's time fixing bugs.",
          "Reduce Rasa - Rasa X code coupling to optimize for long-term delivery speed.",
          "Design Rasa X workspaces, the code doesn't require major refactoring after the project.",
        ],
      },
      {
        summary:
          "A record of designing stable, maintainable, scalable code that is product-critical. Can articulate tradeoffs across the architecture owned by the squad. This level requires evaluation that spans across multiple quarters.",
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
    category: "TECHNICAL_SKILLS",
    description:
      "Develop expertise in your field(s) and apply that to the Rasa code base.",
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
          "Familiar with Python developer best practices (e.g. Zen) and follow them.",
          "Aware of system-level implications when writing code supposed to be executed on multiple platforms.",
        ],
      },
      {
        summary:
          "Has expertise in multiple areas in the codebase in one technical domain. Understand the architecture. Understand the principles, inner-workings and limitations of the programming language and framework they are working with.",
        examples: [
          "Provide technical advice and weight in on technical decisions.",
          "We've hit a roadblock on our implementation of our inline table editor. You are researching technologies, digesting the results for the team to chime in on and drive the discussion to a conclusion.",
          "Raise awareness about security vulnerabilities and make plans to tackle them.",
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
    category: "EXECUTION",
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
          "Ensure support and fix issues for users after a feature is released."
        ],
      },
      {
        summary:
          "Deliver work given (yet) unclear requirements within the context of their team. Drive initiatives that enable the organization's delivery. Make sound decisions even in stressful scenarios and with little information.",
        examples: [
          "Set up Poetry and ensure that things work seamlessly for other engineers. Jump in to help when necessary.",
          "Investigate and fix deployment issues for a customer: SSO, Oracle databses, and avoid future regressions by creating a CI workflow.",
          "Keep cool in incident responses: investigate, delegate, estimate and ship fixes when a critcal issue impacting a customer comes in.",
          "When the situation calls for a fast delivery, execute on that and wrap up the improvements later.",
          "Responsible for a large-scale project and makes sure that the project is complete by the release date.",
        ],
      },
      {
        summary:
          "Able to execute complex designs. Foresee roadblocks and risks, mitigate them proactively before they become emergencies.",
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
    category: "EXECUTION",
    description:
      "Break up work into actionable chunks so that you can parallelize the work and iterate quickly.",
    milestones: [
      {
        summary:
          "Able to take well-defined issues and publish small pull requests.",
        examples: [
          "Work on one or several tasks inside an Implementation proposal.",
        ],
      },
      {
        summary:
          "Able to break features down into actionable issues so that they can be parallelized by the team.",
        examples: [
          "Write Implementation proposals by gathering feedback from multiple stakeholders, and hand over parts of the implementation to the team."
        ],
      },
      {
        summary:
          "Stage projects into well-defined milestones as minimal viable products to get early user feedback. Coordinates development and monitors dependencies in the product and in other teams.",
        examples: [
          "Scope out the work for a minor Rasa Open Source release.",
          "Contribute to early discussions on a new feature and propose technical shortcuts to validate assumptions.",
          "Scope features coming from the research team to include them into our next release(s).",
        ],
      },
      {
        summary: "Turn product and business problems into an executable plan.",
        examples: [
          "Scope out the work for a major Rasa Open Source release.",
          "Plan the rollout of introducing telemetry to both Rasa X and Rasa OSS.",
        ],
      },
    ],
  },

  EXPECTATION_MANAGEMENT: {
    displayName: "Expectation management",
    category: "TEAMWORK",
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
          "During implementation, communicate to stakeholders about significant delays.",
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
        examples: [
          "Represent engineering and explain ROI of large-scale technical projects to other departments.",
        ],
      },
    ],
  },

  CORE_COLLABORATION_SKILLS: {
    displayName: "Core collaboration skills",
    category: "TEAMWORK",
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
          "Express opinions in the team and to teammates in an open, respectful and emphathetic manner. After a consensus is reached, commit even if they disagree.",
        examples: [
          "Provide input on discussions around team practices and processes. Alerts the team of current process related issues.",
          "Propose a change of sprint length to address current shortcomings and get buy-in.",
        ],
      },
      {
        summary:
          "Able to mediate discussions in a team. Take initiative to de-escalate conflicts with compassion, patience and respect. ",
        examples: [
          "Lead discussions around team process improvements, get consensus and buy in to execute.",
          "Introduce retrospectives to the teams to push for continuous improvements."
        ],
      },
      {
        summary:
          "Maintain a pulse on teams' morale and help with retention. Able to motivate the teams to achieve their goals. Able to drive organizational changes.",
        examples: [
          "Establish a baseline of performance across teams and stacks. Got buy in from engineers from all teams to follow the standard.",
        ],
      },
    ],
  },

  EQUITY_AND_INCLUSION: {
    displayName: "Equity and inclusion",
    category: "TEAMWORK",
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
          "Help create an engaging, inclusive, and equitable environment in the team. Participate in DEI programs in the industry.",
        examples: [
          "Increase psychological safety of the entire team.",
          "Use own power and privilege to raise difficult issues of other teammates' behalf.",
          "Join mentoring programs to support DEI progress in the industry.",
        ],
      },
      {
        summary:
          "Lead efforts to create an engaging, inclusive, and equitable environment at a company-wide level and beyond.",
        examples: [
          "Actively participate in the DEI group to review our DEI strategy at Rasa.",
          "Lead PyLadies and contribute actively to help underrepresented minorities succeed in the industry.",
          "Start and run an employee resource group at Rasa.",
        ],
      },
    ],
  },

  MENTORSHIP: {
    displayName: "Mentorship",
    category: "INFLUENCE",
    description:
      "Challenge yourself and your team to be exceptional: share your learnings and knowledge to raise the bar.",
    milestones: [
      {
        summary:
          "Seek out mentorship and help to grow their own experience. Share their learnings regularly with the team.",
        examples: [
          "Ask their mentor for feedback during a 1:1 and take action to improve based on the feedback.",
        ],
      },
      {
        summary:
          "Make themselves available for support and advice for more junior members. Able to give technical feedback and share knowledge with teammates. Able to give behavioral feedback to mentees with manager's support.",
        examples: [
          "Introduce Redux-saga patterns to an engineer through reviews, pair-programming and discussions.",
          "Set up pair programming sessions with teammates regularly.",
          "Support onboarding of new team members.",
          "Prepare and present knowledge sharing sessions to the team.",
        ],
      },
      {
        summary:
          "Plan with the manager and mentor some team members. Prioritize the teammate's learning and avoid strong ego. Delivers reinforcing and corrective feedback to their mentees, teammates, and manager directly in a constructive manner.",
        examples: [
          "Help mentee to find out their strengths and weaknesses.",
          "Discuss career options and areas of interest formally.",
          "Guide teammates to come up with solutions instead of telling them the answer.",
          "Break down complex concepts into simple explanations.",
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
    category: "INFLUENCE",
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
          "Shadow new interviewers and help them calibrate their feedback.",
          "Write new take-home tests that meet the quality bar. Iterate on the coding interview to make improve in our hiring decisions.",
          "Bring in candidates into the pipeline proactively with a high conversion rate.",
          "Suggest putting our job post on X platform to get more applicants.",
        ],
      },
      {
        summary:
          "Set recruitment and onboarding strategies. Invest in long-term relationships for critical roles.",
        examples: [
          "Set up a structured interview process to reduce bias in recruiting.",
          "Have a wide network, help Rasa close mission-critical roles like Head of Product.",
        ],
      },
    ],
  },

  OUTREACH: {
    displayName: "Outreach",
    category: "INFLUENCE",
    description: "Be an ambassador for Rasa. (Can opt out)",
    milestones: [
      {
        summary:
          "Represents Rasa externally. Show interest in Rasa's achievements.",
        examples: [
          "Support and encourage participation from the open source community.",
          "Attend Rasa-hosted events and interact with other participants.",
        ],
      },
      {
        summary: "Take up active roles in the community on behalf of Rasa.",
        examples: [
          "Act as a coach for open source contributors guiding them through the development process.",
          "Volunteer as a helper at a PyLadies workshop.",
          "Presented at a meetup organized by Rasa (~20 audience).",
        ],
      },
      {
        summary:
          "Take a leadership role in evangelising Rasa's work to the industry.",
        examples: [
          "Represent Rasa and speak at a high-visibility conference (~100 audience).",
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
    category: "PRODUCT_SENSE",
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
          "Evaluate internal or open source feature requests with respect to our OKRs and blockers, and argue why they should not be made.",
          "Identify all the paths users can take in the code. Work with designer to account for all the use cases.",
          "Leverage data insights to support product decisions: evaluate if we want to implement Playground for mobile.",
        ],
      },
      {
        summary:
          "Provide high-level product input and evaluate tradeoffs based on this insight. Continuously evaluates proposed product features with respect to better alternatives unknown to product management. Optimize for the users' need.",
        examples: [],
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
    category: "PRODUCT_SENSE",
    description: "Prioritize and manage work to create the most impact.",
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
        summary: "Prioritize products and strategies on a company level. Balance hands-on work (>30%) and other work that creates impact.",
        examples: [
          "Navigate through organization dynamics. Work with product / business units to prioritize projects that balance Rasa's short-term and long-term success. Won't overly focus on the shiny new techs, also won't only focus on the long-term success."
        ],
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

export const verticals: Verticals = {
  TECHNICAL_SKILLS: {
    displayName: "Technical skills",
    numAreas: 2,
  },
  EXECUTION: {
    displayName: "Execution",
    numAreas: 2,
  },
  TEAMWORK: {
    displayName: "Teamwork",
    numAreas: 3,
  },
  INFLUENCE: {
    displayName: "Influence",
    numAreas: 3,
  },
  PRODUCT_SENSE: {
    displayName: "Product sense",
    numAreas: 2
  }
};

export const verticalIds: Vertical[] = Object.keys(verticals);

export const titles: Titles = {
  DEFAULT: {
    displayName: "Default",
    requirements: {
      DESIGN: 4,
      DOMAIN_EXPERTISE: 4,
      DELIVERY: 4,
      SCOPING: 4,
      EXPECTATION_MANAGEMENT: 4,
      CORE_COLLABORATION_SKILLS: 4,
      EQUITY_AND_INCLUSION: 4,
      MENTORSHIP: 4,
      RECRUITING: 4,
      OUTREACH: 4,
      PRODUCT_ACUMEN: 4,
      PRIORITIZATION: 4,
    },
  },
  JUNIOR_SOFTWARE_ENGINEER: {
    displayName: "Junior Software Engineer",
    requirements: {
      DESIGN: 1,
      DOMAIN_EXPERTISE: 1,
      DELIVERY: 1,
      SCOPING: 1,
      EXPECTATION_MANAGEMENT: 1,
      CORE_COLLABORATION_SKILLS: 1,
      EQUITY_AND_INCLUSION: 1,
      MENTORSHIP: 1,
      RECRUITING: 0,
      OUTREACH: 0,
      PRODUCT_ACUMEN: 1,
      PRIORITIZATION: 1,
    },
  },
  SOFTWARE_ENGINEER: {
    displayName: "Software Engineer",
    requirements: {
      DESIGN: 2,
      DOMAIN_EXPERTISE: 2,
      DELIVERY: 2,
      SCOPING: 2,
      EXPECTATION_MANAGEMENT: 2,
      CORE_COLLABORATION_SKILLS: 2,
      EQUITY_AND_INCLUSION: 2,
      MENTORSHIP: 2,
      RECRUITING: 1,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 2,
      PRIORITIZATION: 2,
    },
  },
  FRONTEND_ENGINEER: {
    displayName: "Frontend Engineer",
    requirements: {
      DESIGN: 1,
      DOMAIN_EXPERTISE: 2,
      DELIVERY: 2,
      SCOPING: 2,
      EXPECTATION_MANAGEMENT: 2,
      CORE_COLLABORATION_SKILLS: 2,
      EQUITY_AND_INCLUSION: 2,
      MENTORSHIP: 2,
      RECRUITING: 1,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 2,
      PRIORITIZATION: 2,
    },
  },
  FULLSTACK_ENGINEER: {
    displayName: "Fullstack Engineer",
    requirements: {
      DESIGN: 2,
      DOMAIN_EXPERTISE: 2,
      DELIVERY: 2,
      SCOPING: 2,
      EXPECTATION_MANAGEMENT: 2,
      CORE_COLLABORATION_SKILLS: 2,
      EQUITY_AND_INCLUSION: 2,
      MENTORSHIP: 2,
      RECRUITING: 1,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 2,
      PRIORITIZATION: 2,
    },
  },
  BACKEND_ENGINEER: {
    displayName: "Backend Engineer",
    requirements: {
      DESIGN: 2,
      DOMAIN_EXPERTISE: 2,
      DELIVERY: 2,
      SCOPING: 2,
      EXPECTATION_MANAGEMENT: 2,
      CORE_COLLABORATION_SKILLS: 2,
      EQUITY_AND_INCLUSION: 2,
      MENTORSHIP: 2,
      RECRUITING: 1,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 1,
      PRIORITIZATION: 2,
    },
  },
  SENIOR_SOFTWARE_ENGINEER: {
    displayName: "Senior Software Engineer",
    requirements: {
      DESIGN: 2,
      DOMAIN_EXPERTISE: 3,
      DELIVERY: 3,
      SCOPING: 3,
      EXPECTATION_MANAGEMENT: 3,
      CORE_COLLABORATION_SKILLS: 3,
      EQUITY_AND_INCLUSION: 3,
      MENTORSHIP: 3,
      RECRUITING: 1,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 3,
      PRIORITIZATION: 3,
    },
  },
  STAFF_ENGINEER: {
    displayName: "Staff Engineer",
    requirements: {
      DESIGN: 4,
      DOMAIN_EXPERTISE: 4,
      DELIVERY: 4,
      SCOPING: 4,
      EXPECTATION_MANAGEMENT: 4,
      CORE_COLLABORATION_SKILLS: 4,
      EQUITY_AND_INCLUSION: 3,
      MENTORSHIP: 4,
      RECRUITING: 2,
      OUTREACH: 1,
      PRODUCT_ACUMEN: 4,
      PRIORITIZATION: 4,
    },
  },
};

export const titleIds: Title[] = Object.keys(titles);
