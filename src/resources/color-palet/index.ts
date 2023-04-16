import { static_colors } from "./static-colors";
import { solid_colors } from "./solid-colors";
import { light_colors } from "./light-colors";
import { dark_colors } from "./dark-colors";
export * from "./color-palet";

export const color_palet = {
  light: { ...static_colors, solid_colors, light_colors },
  dark: { ...static_colors, solid_colors, dark_colors },
};
