// @flow
import * as d3 from 'd3'

export type TrackId = 'DESIGN' | 'DOMAIN_EXPERTISE' | 'DELIVERY' |
  'SCOPING' | 'ACCOUNTABILITY' | 'TEAM_EFFECTIVENESS' | 'EXPECTATION_MANAGEMENT' |
  'CORE_COLLABORATION_SKILLS' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4

export type MilestoneMap = {
  'DESIGN': Milestone,
  'DOMAIN_EXPERTISE': Milestone,
  'DELIVERY': Milestone,
  'SCOPING': Milestone,
  'ACCOUNTABILITY': Milestone,
  'TEAM_EFFECTIVENESS': Milestone,
  'EXPECTATION_MANAGEMENT': Milestone,
  'CORE_COLLABORATION_SKILLS': Milestone,
  'EQUITY_AND_INCLUSION': Milestone,
  'MENTORING': Milestone,
  'RECRUITING': Milestone,
  'EVANGELISM': Milestone,
  'PRODUCT_ACUMEN': Milestone,
  'PRIORITIZATION': Milestone
}
export const milestones = [0, 1, 2, 3, 4]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    examples: string[]
  }[]
}

type Tracks = {|
  'DESIGN': Track,
  'DOMAIN_EXPERTISE': Track,
  'DELIVERY': Track,
  'SCOPING': Track,
  'ACCOUNTABILITY': Track,
  'TEAM_EFFECTIVENESS': Track,
  'EXPECTATION_MANAGEMENT': Track,
  'CORE_COLLABORATION_SKILLS': Track,
  'EQUITY_AND_INCLUSION': Track,
  'MENTORING': Track,
  'RECRUITING': Track,
  'EVANGELISM': Track,
  'PRODUCT_ACUMEN': Track,
  'PRIORITIZATION': Track
|}

export const tracks: Tracks = {
  "DESIGN": {
    "displayName": "Design",
    "category": "A",
    "description": "Architect quality software. Strive to design simple software even if the use case is complex.",
    "milestones": [{
      "summary": "Come up with solutions to solve the problem detailed in an issue. Write testable, readable code keeping edge cases in mind. Follow best practices established in the team.",
      "examples": [
      ],
    }, {
      "summary": "Utilises abstractions and code isolation effectively. Maintain consistency across the code base and handles edge cases. Meet the expectation by code reviewing their own work and that of teammates.",
      "examples": [
        "Leave the code base in a better place than when they comes across it.",
      ],
    }, {
      "summary": "Design software that are maintainable and easy to extend. The software can withstand the test of time.",
      "examples": [
        "Implement systems that enable better testing.",
        "Refactor a complex workflow to reduce dependencies.",
        "Help others improve through code reviews, thorough documentation and technical guidance.",
      ],
    }, {
      "summary": "A record of designing stable, maintainable, scalable code that is product-critical. Can articulate tradeoffs across the architecture owned by the squad.",
      "examples": [
        "Turnaround: identify blockers for the product to be successful and architect a plan to resolve them",
        "Accelaterated growth: can quickly identify bottlenecks that will happen and propose a design to tackle scalability and performance",
        "Sustaining success: design software that anticipates future product and team needs.",
      ],
    }],
  },

  "DOMAIN_EXPERTISE": {
    "displayName": "Domain Expertise",
    "category": "A",
    "description": "Develop expertise in your field and apply that to the Rasa code base.",
    "milestones": [{
      "summary": "Learn to use existing tools at Rasa. Read the documentation and able follow the steps. Update the documentation if needed.",
      "examples": [
      ],
    }, {
      "summary": "Apply the principles of the programming language and framework they are working with. Demonstrate knowledge on industry trends. Develops new instances of existing architecture, or minor improvements to existing architecture",
      "examples": [
        "Familiar with common pitfalls in cross-browser implementations.",
      ],
    }, {
      "summary": "Go-to expert in multiple areas in the codebase. Understand the architecture. Understand the principles, inner-workings and limitations of the programming language and framework they are working with. Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "examples": [
        "Provide technical advice and weight in on technical decisions.",
      ],
    }, {
      "summary": "Go-to-expert of the team's ownership and more than one technical domain. Ensure that Rasa is ahead of the curve.",
      "examples": [
        "Turnaround: able to debug the hairiest problems that the team encounters.",
        "Accelerated growth: drive large-scale migrations to help Rasa stay ahead of the curve.",
        "Sustaining success: be a domain expert on both the research and engineering sides to ensure good collaboration.",
      ],
    }],
  },

  "DELIVERY": {
    "displayName": "Delivery",
    "category": "A",
    "description": "Deliver work in a realitic and timely manner.",
    "milestones": [{
      "summary": "Make steady progress on issues. Know when to ask for help to get themselves unblocked. Test their own changes.",
      "examples": [
        "Test the affected flow thoroughly in their branch when introducing changes.",
        "Complete tickets with the mentor's guidance and code reviews.",
      ],
    }, {
      "summary": "Able to drive and complete new assignments without the need for constant significant guidance from teammates. Deliver projects according to the product spec.",
      "examples": [
        "Persistent in face of challenging bugs fixes.",
        "Deliver X feature according to the product spec and designs. Iterate with product to meet requirements and fix issues along the way.",
      ],
    }, {
      "summary": "Delivers work given (yet) unclear requirements within the context of their team. ",
      "examples": [
        "Able to reduce the complexity of projects and processes to meet the product need.",
        "When the situation calls for a fast delivery, execute on that and wrap up the improvements later.",
      ],
    }, {
      "summary": "Able to execute complex designs making the best use of the team to deliver them.",
      "examples": [
        "Turnaround: can jump into unchartered area and gain expertise quickly. Turn a dysfunctional team around.",
        "Accelerated growth: help the team deliver and meet their goals. Do anything that is necessary to achieve that.",
        "Sustaining success: responsible for the team's delivery. Think of improvements and work with infrastructure teams on it.",
      ],
    }],
  },

  "SCOPING": {
    "displayName": "Scoping",
    "category": "B",
    "description": "Break up work into actionable chunks so that you can parallelize the work and iterate quickly.",
    "milestones": [{
      "summary": "Able to take well-defined issues and publish small pull requests.",
      "examples": [
      ],
    }, {
      "summary": "Able to break features down into actionable issues.",
      "examples": [
      ],
    }, {
      "summary": "Stage projects into well-defined milestones as minimal viable products to get early user feedback. Coordinates development and monitors dependencies in the product and in other teams.",
      "examples": [
      ],
    }, {
      "summary": "Turn product and business problems into an executable plan.",
      "examples": [
      ],
    }],
  },

  "ACCOUNTABILITY": {
    "displayName": "Accountability",
    "category": "B",
    "description": "Deliver on commitments. Your teammates count on you.",
    "milestones": [{
      "summary": "Delivers on commitments on an issue level. Responsible for their code changes.",
      "examples": [
        "Follow through with the issues that arise from their code change.",
      ],
    }, {
      "summary": "Commits to a realistic amount of work. Deliver commitments timely on a project level. Strive to keep estimates up to date and deliver those estimates.",
      "examples": [
      ],
    }, {
      "summary": "Accountable for large-scale projects or releases. Make sound decisions even in stressful scenarios and with little information.",
      "examples": [
      ],
    }, {
      "summary": "Make decisions that have a direct impact to the long-term success of Rasa.",
      "examples": [
      ],
    }],
  },

  "TEAM_EFFECTIVENESS": {
    "displayName": "Team effectiveness",
    "category": "C",
    "description": "Improve team and company processes as Rasa grows.",
    "milestones": [{
      "summary": "Understand and able to follow their team's practices and processes.",
      "examples": [
      ],
    }, {
      "summary": "Provides input on discussions around team practices and processes. Alerts the team of current process related issues. Follows agreed upon processes.",
      "examples": [
      ],
    }, {
      "summary": "Leads discussions around team practices and process improvements.",
      "examples": [
      ],
    }, {
      "summary": "Develop processes to solve organizational problems. Get manager and engineers' buy-in.",
      "examples": [
      ],
    }],
  },

  "EXPECTATION_MANAGEMENT": {
    "displayName": "Expectation management",
    "category": "C",
    "description": "Obtaining and surfacing the right amount of information to the right people at the right time.",
    "milestones": [{
      "summary": "Effectively communicate their progress and blockers on an issue level.",
      "examples": [
      ],
    }, {
      "summary": "Escalates any blockers, delays, and cost ballooning to their squad daily. Align expectations within the team.",
      "examples": [
        "Clarify ambiguities with designers before working on a feature.",
      ],
    }, {
      "summary": "Proactively shares information and solicit feedback from all stakeholders. Ensures expectations within their team are aligned between team members and external stakeholders.",
      "examples": [
      ],
    }, {
      "summary": "Invest in long-term relationships with other teams at Rasa to keep your team's goals in their plans. Communicate the team's long-term plan to other stakeholders to create alignment.",
      "examples": [
      ],
    }],
  },

  "CORE_COLLABORATION_SKILLS": {
    "displayName": "Core collaboration skills",
    "category": "C",
    "description": "Be honest. Share your opinions in an open and respectful manner to help the Rasa succeed.",
    "milestones": [{
      "summary": "Able to take technical and behavioral feedback in an open, respectful manner with a curious mindset. ",
      "examples": [
      ],
    }, {
      "summary": "Express opinions in the team and to teammates in an open, respectful and emphathetic manner. After a consensus is reached, disagree and commit.",
      "examples": [
      ],
    }, {
      "summary": "Able to de-escalate disagreements and resolve them with concensus. Resolve conflicts with teammates with compassion, patience and respect. ",
      "examples": [
      ],
    }, {
      "summary": "Maintain a pulse on team morale and help with retention. Able to motivate the team to achieve their goals.",
      "examples": [
      ],
    }],
  },

  "EQUITY_AND_INCLUSION": {
    "displayName": "Equity and inclusion",
    "category": "C",
    "description": "Respect is our code. Diversity, equity and inclusion is the core of our mission.",
    "milestones": [{
      "summary": "Exhibits Rasa's core values. Contribute postively to a safe and inclusive team environment.",
      "examples": [
        "Actively fight against unconscious biases.",
        "Participate in DEI onboarding.",
      ],
    }, {
      "summary": "Take concrete actions to be inclusive on a personal level.",
      "examples": [
        "Educate themselves on being good allies.",
        "Attend ally workshop and reflect on making a difference.",
        "Makes space for teammates to participate.",
      ],
    }, {
      "summary": "Help create an engaging, inclusive, and equitable environment in the team.",
      "examples": [
        "Increase psychological safety of the entire team.",
        "Uses own power and privilege to raise difficult issues of other teammates' behalf.",
      ],
    }, {
      "summary": "Help create an engaging, inclusive, and equitable environment at Rasa and beyond.",
      "examples": [
        "Advocate for the needs of the team and groups members at Rasa.",
        "Lead PyLadies and contribute actively to help underrepresented minorities succeed in the industry.",
      ],
    }],
  },

  "MENTORING": {
    "displayName": "Mentoring",
    "category": "D",
    "description": "Challenge yourself and your team to be exceptional. Share your learnings and knowledge to raise the bar.",
    "milestones": [{
      "summary": "Seeks out mentorship and help to grow their own experience. Share their learnings regularly with the team.",
      "examples": [
      ],
    }, {
      "summary": "Make themselves available for support and advice for more junior members. Able to give technical feedback and share knowledge with teammates. Able to give behavioral feedback to mentees with manager's support.",
      "examples": [
        "Introduce React-saga patterns to an engineer through reviews, pair-programming and discussions.",
      ],
    }, {
      "summary": "Plan with the manager and mentors some team members. Prioritize the teammate's learning and avoid strong ego. Delivers reinforcing and corrective feedback to their mentees, teammates, and manager directly in a constructive manner.",
      "examples": [
        "Help mentee to find out their strengths and weaknesses.",
        "Discuss career options and areas of interest formally.",
        "Guides teammates to come up with solutions instead of telling them the answer.",
      ],
    }, {
      "summary": "Raise the technical bar of the team.",
      "examples": [
        "Turnaround: Come up with a plan to help a struggling teammates succeed. Give them direct feedback.",
        "Accelaterated growth: can mentor and ramp up multiple engineers successfully in a short time.",
        "Sustaining success: raise the technical level of the entire team by means of specialized technical training, workshops, personal coaching etc.",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Help Rasa grow by bringing in more Rasas.",
    "milestones": [{
      "summary": "Provide feedback for the process.",
      "examples": [
        "A recent hire provides feedback on the recruiting and onboarding process.",
      ],
    }, {
      "summary": "Participates in hiring. Provides clear, timely feedback on candidates.",
      "examples": [
        "Add observable examples for evalution criteria.",
      ],
    }, {
      "summary": "Contribute and improve the recruiting process.",
      "examples": [
        "Help interviewer trainees calibrate their feedback.",
        "Write new interview question that meets the quality bar.",
        "Bring in candidates into the pipeline proactively with a high conversion rate.",
      ],
    }, {
      "summary": "Set recruitment and onboarding strategies. Invest in long-term relationships for critical roles.",
      "examples": [
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Be an ambassador for Rasa.",
    "milestones": [{
      "summary": "Represents Rasa externally. Show interest in Rasa's achievements.",
      "examples": [
        "Supports and encourages participation from the open source community.",
        "Likes Rasa's social media posts.",
        "Attends Rasa-hosted events and interact with other participants.",
      ],
    }, {
      "summary": "Take up active roles in the community on behalf of Rasa.",
      "examples": [
        "Acts as a coach for open source contributors guiding them through the development process.",
        "Volunteer as a helper at a PyLadies workshop.",
      ],
    }, {
      "summary": "Take a leadership role in evangelising Rasa's work to the industry.",
      "examples": [
        "Represents Rasa at a high-visibility conference.",
        "Write for the Rasa blog.",
      ],
    }, {
      "summary": "Exposure drives Rasa's adoption numbers.",
      "examples": [
      ],
    }],
  },

  "PRODUCT_ACUMEN": {
    "displayName": "Product acumen",
    "category": "E",
    "description": "Learn about the product. Think for yourself, challenge our strategies and be an advisor for the product org.",
    "milestones": [{
      "summary": "Understand basic utility of the product. Seek to understand product requirements of issues and deliver accordingly.",
      "examples": [
        "Supports and encourages participation from the open source community.",
      ],
    }, {
      "summary": "Know how their squad's product features fit into the larger product scope. Understand a squad's domain and drive feature proposals along with product (and design if applicable) within that scope.",
      "examples": [
        "Evaluates open source contributions and argues why they should not be made.",
        "Identify all the paths users can take in the code. Work with designer to account for all the use cases.",
      ],
    }, {
      "summary": "Understands the product at a high level and uses this insight to evaluate tradeoffs. Continuously evaluates proposed product features with respect to better alternatives unknown to product management. Provides high level input on product direction.",
      "examples": [
        "Evaluates Open Source contributions with respect to the Product Roadmap and their long term impact on the product development.",
        "Anticipates opportunities and roadblocks.",
      ],
    }, {
      "summary": "Well-researched about the Conversational AI industry. Able to drive product direction along with the product org.",
      "examples": [
      ],
    }],
  },

  "PRIORITIZATION": {
    "displayName": "Prioritization",
    "category": "E",
    "description": "Prioritize and deliver work to create the most impact.",
    "milestones": [{
      "summary": "Pick up issues according to the squad's prioritisation.",
      "examples": [
      ],
    }, {
      "summary": "Contribute to team priorities and OKRs discussions. Help the team prioritize issues based on the agreement.",
      "examples": [
      ],
    }, {
      "summary": "Works with stakeholders to set priorities and scope across multiple competing projects on a team level. Able to handle multiple competing responsibilties.",
      "examples": [
      ],
    }, {
      "summary": "Prioritize products and strategies on a company level.",
      "examples": [
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#D923BA', '#491BF2', '#8E72F2', '#E1DCF2', '#77F2F2'],)

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
