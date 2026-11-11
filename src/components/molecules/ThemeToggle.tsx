// ThemeToggle — молекула: показывает переключатель и передаёт выбранную тему наверх.
import styled from 'styled-components'

export type ColorTheme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: ColorTheme
  onChange: (theme: ColorTheme) => void
}

const ToggleGroup = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 196px;
  height: 64px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 999px;

  @media (max-width: 900px) {
    width: clamp(120px, 34vw, 150px);
    height: 48px;
    padding: 3px;
  }

  @media (max-width: 360px) {
    width: clamp(112px, 32vw, 130px);
  }
`

// $theme управляет положением индикатора и не передаётся в HTML.
const ToggleThumb = styled.span<{ $theme: ColorTheme }>`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: ${({ $theme }) => ($theme === 'light' ? '5px' : '50%')};
  width: calc(50% - 5px);
  border-radius: 999px;
  background: var(--pink);
  pointer-events: none;
  transition: left 240ms cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 900px) {
    top: 3px;
    bottom: 3px;
    left: ${({ $theme }) => ($theme === 'light' ? '3px' : '50%')};
    width: calc(50% - 3px);
  }
`

const ToggleButton = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  min-height: 52px;
  padding: 7px 2px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ $active }) => ($active ? 'var(--on-accent)' : 'var(--muted)')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};
  text-underline-offset: 3px;
  text-transform: uppercase;
  transition: color 180ms ease;

  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 900px) {
    min-height: 40px;
    font-size: 10px;
  }
`

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  return (
    <ToggleGroup role="group" aria-label="Color theme">
      <ToggleThumb $theme={theme} aria-hidden="true" />
      {(['light', 'dark'] as const).map((option) => (
        <ToggleButton
          key={option}
          type="button"
          $active={theme === option}
          aria-pressed={theme === option}
          onClick={() => onChange(option)}
        >
          {option}
        </ToggleButton>
      ))}
    </ToggleGroup>
  )
}