# react-tabbed-area

Easy to use tabbing component for React

## Installation

```
npm install react-svg-tournament-bracket
```

## Usage

An example of basic usage, tabs on top with some simple content

```javascript
import React, { useState } from "react";
import TabbedArea from "react-tabbed-area";

const MyContent = () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <TabbedArea
      tabs={tabs}
      selectedTab={selectedTab}
      onSelectTab={(tab) => setSelectedTab(tab)}
    >
      {selectedTab === "Tab 1" ? (
        <>Tab One Content</>
      ) : selectedTab === "Tab 2" ? (
        <>Tab Two Content</>
      ) : selectedTab === "Tab 3" ? (
        <>Tab Three Content</>
      ) : null}
    </TabbedArea>
  );
};
```

## Props

| Prop Name               | Description                                                                                                                                   | Example Values                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| tabs                    | Array of tab names, or Array of Objects with the following properties: name, icon, hideName. Tab names must be unique to each TabbedArea      | ["Tab 1", "Tab 2"], [{name: "Tab 1", icon: <IconComponent />, hideName: true}, {name: "Tab 2"}] |
| selectedTab             | string or object with a name property. This item should use the state of your parent component to force the rerender upon tab switch          |                                                                                                 |
| onSelectTab             | callback function passed when a user clicks a tab, will pass back the tab name or entire tab object. Use this to set the state of selectedTab | (tab) => setSelectedTab(tab)                                                                    |
| children                | any content that you wish to display within the tabbed area. Use a check for the selectedTab to display different content for each tab        | Any Component(s)                                                                                |
| tabPlacement            | the position of the tabs, either "top", "left", or "right", default is "top"                                                                  |                                                                                                 |
| backgroundColor         | the main background color of the tabbed area and the selected tab                                                                             | any hex or html color                                                                           |
| color                   | the main text color for the selected tab                                                                                                      | any hex or html color                                                                           |
| inactiveBackgroundColor | the background color of a tab when it is inactive                                                                                             | any hex or html color                                                                           |
| inactiveTextColor       | the color of the text on a tab when it is inactive                                                                                            | any hex or html color                                                                           |
| hoverBackgroundColor    | the background color of a tab when it is not selected and is hovered over                                                                     | any hex or html color                                                                           |
| hoverTextColor          | the text color of a tab when it is not selected and is hovered over                                                                           | any hex or html color                                                                           |
