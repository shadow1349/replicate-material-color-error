import { Tree } from '@nx/devkit';
import { TestMaterialGeneratorSchema } from './schema';
import * as material from '@material/material-color-utilities';

export async function testMaterialGenerator(
  tree: Tree,
  options: TestMaterialGeneratorSchema
) {
  const argbColor = material.argbFromHex('#2977ff');
  const scheme = new material.SchemeContent(
    material.Hct.fromInt(argbColor),
    false, // Tonal palettes are the same for light and dark themes
    0.0
  );
  console.log(scheme);
}

export default testMaterialGenerator;
