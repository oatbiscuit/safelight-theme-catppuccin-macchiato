export function activate(api) {
  api.registerTheme({
    id: "theme-catppuccin-macchiato.theme",
    name: "catppuccin-macchiato",
    colorscheme: "dark",
    vars: {
      "--color-surface-0": "#24273a", // base
      "--color-surface-1": "#1e2030", // mantle
      "--color-surface-2": "#181926", // crust
      "--color-surface-3": "#363a4f", // surface 0
      "--color-surface-4": "#181926", // crust

      "--color-border": "#363a4f", // surface 0
      "--color-border-subtle": "#494d64", // surface 1

      "--color-text-primary": "#cad3f5", // text
      "--color-text-secondary": "#b8c0e0", // subtext 1
      "--color-text-muted": "#a5adcb", // subtext 0

      "--color-accent": "#c6a0f6", // mauve
      "--color-accent-hover": "#363a4f", // surface 0
      "--color-slider-fill": "#c6a0f6", // mauve

      // Ratings
      "--color-rating": "#eed49f", // yellow
      "--color-flag-pick": "#cad3f5", // text
      "--color-flag-reject": "#ed8796", // red

      "--color-label-red": "#ed8796", // red
      "--color-label-yellow": "#eed49f", // yellow
      "--color-label-green": "#a6da95", // green
      "--color-label-blue": "#8aadf4", // blue
      "--color-label-purple": "#c6a0f6", // mauve
    },
  });
}
