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

![Example1](/screenshots/react-tabbed-area-1.png)

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

# Using a custom component for the tab name

Rather than pass an array of strings as your tabs you can use an array of objects. This will allow you to provide icons or simply a custom component as the label for each tab.

If using the object method you must include the name property in each tab, as that is how the selectedTab check will be performed. Other available properties include icon, which is where you will provide your custom component, and hideName, a self explanatory boolean.

You are able to pass any combination of text or objects to the tabs prop. Below is an example of using an image as the first tab label, but regular text as the second label, with some custom coloring.

You will need to use a slightly more complex selectedTab checking function to render your content correctly.

```javascript
import React, { useState } from "react";
import TabbedArea from "react-tabbed-area";

const MyContent = () => {
  const tabs = [
    {
      name: "Tab 1",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          width={35}
          height={25}
        />
      ),
      hideName: true,
    },
    "Tab 2",
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const isSelected = (tab) => {
    const tabName = selectedTab.name || selectedTab;
    return tabName === tab;
  };

  return (
    <TabbedArea
      tabs={tabs}
      selectedTab={selectedTab}
      onSelectTab={(tab) => setSelectedTab(tab)}
    >
      {isSelected("Tab 1") ? (
        <>Tab One Content</>
      ) : selectedTab === "Tab 2" ? (
        <>Tab Two Content</>
      ) : null}
    </TabbedArea>
  );
};
```

![Example2](/screenshots/react-tabbed-area-2.png)
