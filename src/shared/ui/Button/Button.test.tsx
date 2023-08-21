import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('Button Tests', () => {
    test('display button in DOM', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeVisible()
    })
})
