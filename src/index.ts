import * as material from "@material/material-color-utilities";

(async () => {
  const color = "#2977ff";

  const argbColor = material.argbFromHex(color);
  const scheme = new material.SchemeContent(
    material.Hct.fromInt(argbColor),
    false, // Tonal palettes are the same for light and dark themes
    0.0
  );
})();
