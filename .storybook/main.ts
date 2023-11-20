const config = {
  stories: ['../src/components/**/stories.tsx'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: false
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${process.cwd()}/src`
    }
    return config
  }
}
export default config
