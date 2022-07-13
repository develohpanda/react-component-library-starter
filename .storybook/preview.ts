import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    darkMode: {
        dark: {
            ...themes.dark,
            textColor: 'rgb(219, 219, 219)',
            barBg: 'rgb(33, 33, 33)',
            appBg: 'rgb(28, 28, 28)'
        },
        
        light: {
            ...themes.normal,
            textColor: 'rgb(32, 67, 182)',
            barBg: 'rgb(0, 70, 168)',
            appBg: 'rgb(250, 251, 255)'
        }
    }
};

export const decorators = [
  withTests({ results }),
];