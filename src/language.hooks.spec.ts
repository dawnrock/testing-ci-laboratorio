import { renderHook, act } from '@testing-library/react-hooks';
import {LanguageProvider} from './language.context';
import { useLanguage } from './language.hooks';

describe('useLanguage specs', () => {
  it('should return a message with language equals "es" when it renders the hook', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('es');
    });

    // Assert
    expect(result.current.message).toEqual('The current language is: es');
  });
});
