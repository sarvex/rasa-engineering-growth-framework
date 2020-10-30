// @flow

import React from 'react'

class InstructionsPanel extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Engineering growth framework at Rasa (WIP - subject to changes)</h1>
        <h3>How to use the framework</h3>
        <p>
            Engineers contribute to Rasa with a diverse skillset. We aim to reduce biases in engineers' career development by having a clear framework to represent their current strengths.
            The levels also pave the way for engineers to progress in their careers and identify areas of improvement. However, we wouldn't use a formula to determine an engineer's 
            job title from the framework at our current size. We believe that engineers' growth trajectories vary. Working with their manager to determine the next steps based on 
            the framework will better match our aim.
        </p>
        <p>
            The framework captures skillsets in 5 verticals: Technical skills, Execution, Teamwork, Influence, and Product sense. Each vertical contains several areas.
            Each area goes from level 1 to level 4. The expectations at each level are cumulative. The examples listed at each level demonstrates how responsibilities at that level 
            could look like but by no means serve as a checklist to get to a certain level. 
        </p>
      </div>
    )
  }
}
export default InstructionsPanel
