/** ThemeToggle renders the light/dark selector and reports the chosen theme. */
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
  width: 96px;
  height: 44px;
  padding: 0 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
`

const ToggleThumb = styled.span<{ $theme: ColorTheme }>`
  position: absolute;
  top: 7px;
  bottom: 7px;
  left: ${({ $theme }) => ($theme === 'light' ? '4px' : '50%')};
  width: calc(50% - 4px);
  border-radius: 999px;
  background: var(--ink);
  pointer-events: none;
  transition: left 240ms cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const ToggleButton = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  min-height: 44px;
  padding: 7px 2px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ $active }) => ($active ? 'var(--page)' : 'var(--muted)')};
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  transition: color 180ms ease;

  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
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