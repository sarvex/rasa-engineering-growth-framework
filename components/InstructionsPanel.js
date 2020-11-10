// @flow

import React from "react";

class InstructionsPanel extends React.Component<Props> {
  render() {
    return (
      <div style={{ marginBottom: `80px` }}>
        <h3>How to use the framework</h3>
        <p style={{lineHeight: `1.2`}}>
          Engineers contribute to Rasa with a diverse skillset. We aim to reduce
          biases by having a clear framework to represent engineers' current
          strengths. The levels will help engineers plan their next steps and
          identify areas of improvement. However, we wouldn't use a formula to
          determine an engineer's job title from the framework at our current
          size. We believe that engineers' growth trajectories vary. Working
          with their manager to determine the next steps based on the framework
          will better match our aim. We can share a few example engineer
          profiles at each experience level to provide more clarity.
        </p>
        <p>
          The framework captures skillsets in 5 verticals. Each vertical
          contains several areas. Each area goes from level 1 to level 4. The
          expectations at each level are cumulative. The examples listed at each
          level demonstrate how responsibilities can look like in your day to
          day. Since they are examples, they vary between different focus areas
          and shouldn't be treated as a checklist.
        </p>
      </div>
    );
  }
}
export default InstructionsPanel;
