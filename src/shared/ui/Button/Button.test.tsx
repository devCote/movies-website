import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button Tests', () => {
    test('display button in DOM', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('button has className', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
