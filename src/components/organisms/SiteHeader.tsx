/** SiteHeader renders the responsive top navigation, theme switch, and logo. */
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { navigation } from '../../data/navigation'
import type { ColorTheme } from '../molecules/ThemeToggle'
import { ThemeToggle } from '../molecules/ThemeToggle'
import { Wordmark } from '../molecules/Wordmark'

type SiteHeaderProps = {
  activeSection: string
  theme: ColorTheme
  onThemeChange: (theme: ColorTheme) => void
}

const DesktopHeader = styled.header`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(22px, 4vw, 64px);
  min-height: 72px;
  padding: 12px clamp(28px, 4.5vw, 72px);
  background: var(--page);

  @media (max-width: 900px) {
    display: none;
  }
`

const MobileHeader = styled.header`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    gap: 4px;
    padding: 8px 16px 0;
    background: var(--page);
  }
`

const StyledDesktopNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(16px, 2.4vw, 34px);

  a {
    position: relative;
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  a:hover,
  a[aria-current='location'] {
    color: var(--ink);
  }

  a:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 3px;
  }
`

const NavigationIndicator = styled.span`
  position: absolute;
  bottom: 8px;
  left: 0;
  height: 2px;
  background: var(--pink);
  pointer-events: none;
  transition:
    left 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
    width 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 120ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

function DesktopNavigation({ activeSection }: { activeSection: string }) {
  const navRef = useRef<HTMLElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const selectedSection = hoveredSection ?? activeSection

  const updateIndicator = useCallback(() => {
    const link = linkRefs.current[selectedSection]
    if (!link || link.offsetWidth === 0) {
      setIndicator((current) => ({ ...current, visible: false }))
      return
    }

    setIndicator({
      left: link.offsetLeft,
      width: link.offsetWidth,
      visible: true,
    })
  }, [selectedSection])

  useLayoutEffect(() => {
    updateIndicator()
    const nav = navRef.current
    if (!nav) return

    const observer = new ResizeObserver(updateIndicator)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [updateIndicator])

  return (
    <StyledDesktopNavigation
      ref={navRef}
      aria-label="Primary navigation"
      onMouseLeave={() => setHoveredSection(null)}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setHoveredSection(null)
        }
      }}
    >
      {navigation.map(({ id, label }) => (
        <a
          key={id}
          ref={(element) => {
            linkRefs.current[id] = element
          }}
          href={`#${id}`}
          aria-current={activeSection === id ? 'location' : undefined}
          onMouseEnter={() => setHoveredSection(id)}
          onFocus={() => setHoveredSection(id)}
        >
          {label}
        </a>
      ))}
      <NavigationIndicator
        aria-hidden="true"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.visible ? 1 : 0,
        }}
      />
    </StyledDesktopNavigation>
  )
}

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
`

const CoreNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(20px, 7vw, 36px);
  min-height: 48px;
  overflow-x: auto;
  border-bottom: 1px solid var(--line);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    display: inline-flex;
    min-width: 44px;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  a:hover,
  a[aria-current='location'] {
    color: var(--ink);
  }

  a {
    position: relative;
  }

  a::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--pink);
    content: '';
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover::after,
  a[aria-current='location']::after {
    transform: scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    a::after {
      transition: none;
    }
  }
`

export function SiteHeader({ activeSection, theme, onThemeChange }: SiteHeaderProps) {
  return (
    <>
      <DesktopHeader>
        <Wordmark theme={theme} />

        <DesktopNavigation activeSection={activeSection} />

        <ThemeToggle theme={theme} onChange={onThemeChange} />
      </DesktopHeader>

      <MobileHeader>
        <BrandRow>
          <Wordmark theme={theme} />
          <ThemeToggle theme={theme} onChange={onThemeChange} />
        </BrandRow>

        <CoreNavigation aria-label="Primary navigation">
          {navigation
            .filter(({ id }) => id === 'about' || id === 'projects' || id === 'contact')
            .map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
        </CoreNavigation>
      </MobileHeader>
    </>
  )
}
