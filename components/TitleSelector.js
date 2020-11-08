// @flow

import React from "react";
import { titles } from "../constants";

type Props = {
  currentTitle: string,
  setTitleFn: (string) => void,
};

class TitleSelector extends React.Component<Props> {
  render() {
    return (
      <div>
        <h3>Requirements:</h3>
        <select
          value={this.props.currentTitle}
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
          {titles.map((title) => (
            <option key={title}>{title}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default TitleSelector;
