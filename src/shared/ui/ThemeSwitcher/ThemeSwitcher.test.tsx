import { render, fireEvent } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'

jest.mock('app/providers', () => ({
    useTheme: () => ({
        toggleTheme: jest.fn(),
    }),
}))

describe('ThemeSwitcher', () => {
    it('should render the component with the provided text', () => {
        const text = 'Toggle Theme'
        const { getByText } = render(<ThemeSwitcher text={text} />)
        expect(getByText(text)).toBeInTheDocument()
    })
})
