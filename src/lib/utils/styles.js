export const defaultInactiveBG = "#999999";
export const defaultHoverBG = "#bfbfbf";
export const defaultBG = "#e6e6e6";
export const defaultLightText = "#f2f2f2";
export const defaultDarkText = "#1a1a1a";

export const customTab = {
  cursor: "pointer",
  textAlign: "center",
  height: "100%",
  backgroundColor: defaultInactiveBG,
  color: defaultLightText,
  marginLeft: 5,
  marginRight: 5,
};

export const customTabSelected = {
  backgroundColor: defaultBG,
  color: defaultDarkText,
  cursor: "default",
};

export const customTabHovered = {
  backgroundColor: defaultHoverBG,
  color: defaultDarkText,
};

export const horizontalTab = {
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  paddingLeft: 5,
  paddingRight: 5,
  borderLeft: `1px solid ${defaultInactiveBG}`,
  borderRight: `1px solid ${defaultInactiveBG}`,
  borderTop: `1px solid ${defaultInactiveBG}`,
};

export const verticalTab = {
  writingMode: "vertical-lr",
  textOrientation: "upright",
  marginTop: 5,
  marginBottom: 5,
  paddingTop: 10,
  paddingBottom: 10,
  height: "auto",
};

export const verticalTabLeft = {
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  borderLeft: `1px solid ${defaultInactiveBG}`,
  borderTop: `1px solid ${defaultInactiveBG}`,
  borderBottom: `1px solid ${defaultInactiveBG}`,
  width: "100%",
};
export const verticalTabRight = {
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  borderRight: `1px solid ${defaultInactiveBG}`,
  borderTop: `1px solid ${defaultInactiveBG}`,
  borderBottom: `1px solid ${defaultInactiveBG}`,
  width: "100%",
};

export const tabbedArea = {
  backgroundColor: defaultBG,
  marginLeft: 15,
  marginRight: 15,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  paddingRight: 5,
};

export const tabbedAreaTop = {
  marginTop: -18,
};
export const tabbedAreaLeft = {
  marginLeft: 24,
  paddingRight: 30,
  marginTop: -13,
  marginLeft: 35,
  paddingLeft: 5,
};
export const tabbedAreaRight = {
  marginRight: 24,
  paddingLeft: 30,
  marginTop: -14,
};
