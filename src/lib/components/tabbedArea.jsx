import React from "react";

import VerticalTabs from "./tabs/verticalTabs";
import HorizontalTabs from "./tabs/horizontalTabs";
import {
  tabbedArea,
  tabbedAreaLeft,
  tabbedAreaRight,
  tabbedAreaTop,
  defaultBG,
  defaultDarkText,
} from "../utils/styles";

const TabbedArea = ({
  tabPlacement = "top",
  tabs,
  selectedTab,
  onSelectTab,
  children,
  backgroundColor,
  color,
  inactiveBackgroundColor,
  inactiveTextColor,
  hoverBackgroundColor,
  hoverTextColor,
}) => {
  const TabType = tabPlacement === "top" ? HorizontalTabs : VerticalTabs;
  const areaStyle =
    tabPlacement === "left"
      ? tabbedAreaLeft
      : tabPlacement === "right"
      ? tabbedAreaRight
      : tabbedAreaTop;

  return (
    <div
      style={{
        marginTop: 5,
        overflowX: tabPlacement === "top" ? "auto" : "hidden",
      }}
    >
      <TabType
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={onSelectTab}
        side={tabPlacement}
        backgroundColor={backgroundColor}
        color={color}
        inactiveBackgroundColor={inactiveBackgroundColor}
        inactiveTextColor={inactiveTextColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverTextColor={hoverTextColor}
      />
      {/* empty space to allow div to have its own margin */}
      &nbsp;
      <div
        style={{
          ...tabbedArea,
          ...areaStyle,
          backgroundColor: backgroundColor || defaultBG,
          color: color || defaultDarkText,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TabbedArea;
