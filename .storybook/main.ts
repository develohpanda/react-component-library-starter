

module.exports = {
    core: {
      builder: 'webpack5',
    },
    stories: ['../stories/**/*.stories.@(tsx)'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-postcss',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-jest',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        'storybook-dark-mode',
    ]
};
