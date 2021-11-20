const withImages = require('next-images')
const withVideos = require('next-videos')

const getBuildConfig = () => {
  const path = require('path')
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssPresetEnvOptions = {
    features: {
      'custom-media-queries': true,
      'custom-selectors': true,
    },
  }

  const cssOptions = {
    postcssLoaderOptions: {
      plugins: [postcssPresetEnv(postcssPresetEnvOptions)],
    },
    sassOptions: {
      includePaths: [path.join(process.cwd(), 'styles')],
    },
  }

  const nextConfig = {
    ...cssOptions,
    env: {
      BASE_URL: process.env.BASE_URL,
      PORT: process.env.PORT,
    },
  }
  return nextConfig
}

module.exports = withVideos(withImages({ getBuildConfig }))
