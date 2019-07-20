module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    enforce: 'pre',
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {parser: 'typescript'},
      },
    ],
    test: /\.stories\.tsx?$/,
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
