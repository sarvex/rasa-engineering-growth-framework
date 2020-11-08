// @flow

import React from "react";
import { titles, titleIds } from "../constants";

type Props = {
  currentTitleId: string,
  setTitleFn: (string) => void,
};

class TitleSelector extends React.Component<Props> {
  render() {
    return (
      <div>
        <h3 style={{display: `inline-block`, marginRight: `8px`}}>Indicate baseline requirements:</h3>
        <select
          value={this.props.currentTitleId}
          onChange={(e) => this.props.setTitleFn(e.target.value)}
        >
          <style jsx>{`
            select {
              font-size: 20px;
              line-height: 20px;
              margin-bottom: 20px;
              min-width: 300px;
            }
          `}</style>
          {titleIds.map((titleId) => (
              <option key={titleId} value={titleId}>{titles[titleId].displayName}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default TitleSelector;
