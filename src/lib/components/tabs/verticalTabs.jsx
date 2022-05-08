import React, { useState } from "react";

import {
  customTab,
  customTabSelected,
  verticalTab,
  customTabHovered,
  verticalTabLeft,
  verticalTabRight,
  defaultBG,
  defaultHoverBG,
  defaultInactiveBG,
  defaultDarkText,
  defaultLightText,
} from "../../utils/styles";

const VerticalTabs = ({
  tabs,
  selectedTab,
  onSelectTab,
  side,
  backgroundColor,
  color,
  inactiveBackgroundColor,
  inactiveTextColor,
  hoverBackgroundColor,
  hoverTextColor,
}) => {
  let tabStyle = {
    ...customTab,
    ...verticalTab,
    ...(side === "left" ? verticalTabLeft : verticalTabRight),
    borderColor: backgroundColor || defaultBG,
  };

  const [hovered, setHovered] = useState(null);

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const handleMouseEnter = (tab) => {
    setHovered(tab);
  };

  return (
    <div style={{ float: side === "right" ? "right" : "left" }}>
      {tabs.map((tab, idx) => {
        const tabName = tab.name || tab;
        const icon = tab.icon || null;
        const isSelected = tabName === (selectedTab.name || selectedTab);
        const isHovered = tabName === hovered;
        return (
          <div
            key={idx}
            onClick={() => onSelectTab(tab)}
            onMouseEnter={() => handleMouseEnter(tabName)}
            onMouseLeave={handleMouseLeave}
            style={
              !isSelected
                ? !isHovered
                  ? {
                      ...tabStyle,
                      backgroundColor:
                        inactiveBackgroundColor || defaultInactiveBG,
                      color: inactiveTextColor || defaultLightText,
                    }
                  : {
                      ...tabStyle,
                      ...customTabHovered,
                      backgroundColor: hoverBackgroundColor || defaultHoverBG,
                      color: hoverTextColor || defaultDarkText,
                    }
                : {
                    ...tabStyle,
                    ...customTabSelected,
                    backgroundColor: backgroundColor || defaultBG,
                    color: color || defaultDarkText,
                  }
            }
          >
            {icon}
            {icon && !tab.hideName && <>&nbsp;</>}
            {!tab.hideName && tabName}
          </div>
        );
      })}
    </div>
  );
};

export default VerticalTabs;
