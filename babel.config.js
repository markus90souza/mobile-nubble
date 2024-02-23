module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@infra': './src/infra',
          '@types': './src/types',
          '@assets': './src/assets',
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@brand': './src/brand',
          '@api': './src/api',
          '@libs': './src/libs',
          '@/': './src',
        },
      },
    ],
  ],
}
