import { createFilter } from '@rollup/pluginutils'
import { readFileSync } from 'fs'

const vitePluginImportSvg = () => {
  const filter = createFilter('**/*.svg?element')

  return {
    name: 'vite-plugin-import-svg',
    enforce: 'pre',
    async load(id: string) {
      if (filter(id)) {
        const svgPath = id.replaceAll('?element', '')
        const svgCode = readFileSync(svgPath, 'utf-8')
        const result = `
          export default function() {
            const svgElement = new DOMParser().parseFromString(\`${svgCode}\`, 'image/svg+xml').documentElement
            return svgElement
          }
        `
        return result
      }
    }
  }
}

export default vitePluginImportSvg