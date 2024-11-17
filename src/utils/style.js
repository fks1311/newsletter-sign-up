const deviceSizes = {
  mobile: `500px`,
  desktop: `767px`,
};

const device = {
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
};

const colors = {
  tomato: `hsl(4, 100%, 67%)`,
  dark_slate_grey: `hsl(234, 29%, 20%)`,
  charcoal_grey: `hsl(234, 29%, 20%)`,
  grey: `hsl(231, 7%, 60%)`,
  white: `hsl(0, 0%, 100%)`,
};

export const theme = {
  device,
  colors,
};
