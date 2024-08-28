/* 
  This complained when added to vite.config and research suggested a separate
  vitest config was helpful:
  https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport
  https://vitest.dev/config/file.html
*/

import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/testsConfig.ts",
    },
  })
)
