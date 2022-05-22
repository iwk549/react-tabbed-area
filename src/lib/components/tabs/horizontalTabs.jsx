import React, { useState } from "react";

import {
  customTab,
  customTabSelected,
  horizontalTab,
  customTabHovered,
  defaultBG,
  defaultHoverBG,
  defaultInactiveBG,
  defaultDarkText,
  defaultLightText,
} from "../../utils/styles";

const HorizontalTabs = ({
  tabs,
  selectedTab,
  onSelectTab,
  backgroundColor,
  color,
  inactiveBackgroundColor,
  inactiveTextColor,
  hoverBackgroundColor,
  hoverTextColor,
}) => {
  let tabStyle = {
    ...customTab,
    ...horizontalTab,
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      {tabs.map((tab, idx) => {
        const tabName = tab.name || tab;
        const icon = tab.icon || null;
        const isSelected = tabName === (selectedTab.name || selectedTab);
        const isHovered = tabName === hovered;
        return (
          <div
            key={idx}
            onMouseEnter={() => handleMouseEnter(tabName)}
            onMouseLeave={handleMouseLeave}
            onClick={() => onSelectTab(tab)}
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

export default HorizontalTabs;
