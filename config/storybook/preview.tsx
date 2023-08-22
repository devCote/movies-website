import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'app/providers'
import '../../src/app/styles/index.scss'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className="app dark">
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
}

export default preview
