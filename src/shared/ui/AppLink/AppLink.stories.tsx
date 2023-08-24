import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers'
import { AppLink, AppLinkTheme } from './AppLink'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </BrowserRouter>
        ),
    ],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        padding: '10px',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LinkPrimary: Story = {
    args: {
        className: '',
        children: 'link primary',
        to: '/',
        theme: AppLinkTheme.PRIMARY,
    },

}
export const LinkSecondary: Story = {
    args: {
        className: '',
        children: 'link secondary',
        to: '/',
        theme: AppLinkTheme.SECONDARY,
    },
}
