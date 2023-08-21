import { fireEvent, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Sidebar } from './Sidebar'

describe('Sidebar tests', () => {
    test('sidebar has toggle button', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar has the expected width', () => {
        const expectedWidth = 'var(--sidebar-width)'
        const { container } = render(<Sidebar />)
        const sidebar = container.querySelector('.sidebar')

        expect(sidebar).toHaveStyle(`width: ${expectedWidth}`)
    })
    test('sidebar class changed on button click', () => {
        render(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar_toggle')
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('sidebar')
    })
})
