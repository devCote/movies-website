import { screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/renderWithTranslate'
import { LangSwitcher } from './LangSwitcher'

describe('LangSwitcher', () => {
    it('should render the button with the correct text', () => {
        renderWithTranslation(<LangSwitcher />)
        expect(screen.getByTestId('lang_btn')).toBeInTheDocument()
    })

    // it('should call toggleLang function when the button is clicked', () => {
    //     const { getByText } = renderWithTranslation(<LangSwitcher />)
    //     const button = getByText('language')
    //     const toggleLangSpy = jest.spyOn(LangSwitcher.prototype, 'toggleLang')
    //     fireEvent.click(button)
    //     expect(toggleLangSpy).toHaveBeenCalled()
    // })
    //
    // it('should change the language when the button is clicked', () => {
    //     const { getByText } = render(<MockedlangSwitcher />)
    //     const button = getByText('language')
    //     const i18nChangeLanguageSpy = jest.spyOn(
    //         LangSwitcher.prototype.i18n,
    //         'changeLanguage'
    //     )
    //     fireEvent.click(button)
    //     expect(i18nChangeLanguageSpy).toHaveBeenCalledWith('ru')
    //     fireEvent.click(button)
    //     expect(i18nChangeLanguageSpy).toHaveBeenCalledWith('en')
    // })
})
