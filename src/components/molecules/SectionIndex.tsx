/** SectionIndex renders the numbered desktop list or compact mobile navigation. */
import styled, { css } from 'styled-components'
import { navigation } from '../../data/navigation'

type SectionIndexProps = {
  activeSection: string
  variant: 'desktop' | 'mobile'
}

const IndexNavigation = styled.nav<{ $variant: SectionIndexProps['variant'] }>`
  ${({ $variant }) =>
    $variant === 'mobile' &&
    css`
      @media (min-width: 901px) {
        display: none;
      }
    `}

  ${({ $variant }) =>
    $variant === 'desktop'
      ? css`
          width: 100%;
        `
      : css`
          position: sticky;
          top: 0;
          z-index: 5;
          min-height: 48px;
          overflow-x: auto;
          border-block: 1px solid var(--line);
          background: var(--page);
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        `}
`

const LinkList = styled.ol<{ $variant: SectionIndexProps['variant'] }>`
  display: ${({ $variant }) => ($variant === 'desktop' ? 'grid' : 'flex')};
  gap: ${({ $variant }) => ($variant === 'desktop' ? '18px' : 'clamp(22px, 6vw, 36px)')};
  width: ${({ $variant }) => ($variant === 'desktop' ? '100%' : 'max-content')};
  min-width: ${({ $variant }) => ($variant === 'mobile' ? '100%' : '0')};
  margin: 0;
  padding: ${({ $variant }) => ($variant === 'desktop' ? '0' : '0 16px')};
  list-style: none;
`

const IndexLink = styled.a<{ $active: boolean; $variant: SectionIndexProps['variant'] }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ $variant }) => ($variant === 'desktop' ? 'flex-start' : 'center')};
  gap: 12px;
  width: fit-content;
  min-width: ${({ $variant }) => ($variant === 'desktop' ? '0' : '44px')};
  min-height: ${({ $variant }) => ($variant === 'desktop' ? 'auto' : '44px')};
  padding: ${({ $variant }) => ($variant === 'desktop' ? '5px 0' : '15px 0 13px')};
  color: ${({ $active }) => ($active ? 'var(--ink)' : 'var(--muted)')};
  font-size: ${({ $variant }) => ($variant === 'desktop' ? '11px' : '10px')};
  font-weight: 600;
  letter-spacing: 0.14em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  span {
    color: var(--magenta);
    font-family: var(--font-display);
    font-size: 10px;
    letter-spacing: 0;
  }

  &::after {
    position: absolute;
    right: ${({ $variant }) => ($variant === 'desktop' ? '-40px' : '0')};
    bottom: ${({ $variant }) => ($variant === 'desktop' ? '50%' : '0')};
    width: ${({ $variant }) => ($variant === 'desktop' ? '32px' : '100%')};
    height: 2px;
    background: var(--pink);
    content: '';
    transform: ${({ $active, $variant }) =>
      `${$variant === 'desktop' ? 'translateY(50%) ' : ''}scaleX(${$active ? 1 : 0})`};
    transform-origin: left;
    transition: transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover::after {
    transform: ${({ $variant }) =>
      `${$variant === 'desktop' ? 'translateY(50%) ' : ''}scaleX(1)`};
  }

  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }

  @media (max-width: 620px) {
    font-size: 9px;
    letter-spacing: 0.11em;
  }
`

export function SectionIndex({ activeSection, variant }: SectionIndexProps) {
  return (
    <IndexNavigation
      $variant={variant}
      aria-label={variant === 'desktop' ? 'Page sections' : 'Section navigation'}
    >
      <LinkList $variant={variant}>
        {navigation.map(({ id, label }, index) => {
          const isActive = activeSection === id

          return (
            <li key={id}>
              <IndexLink
                href={`#${id}`}
                $active={isActive}
                $variant={variant}
                aria-current={isActive ? 'location' : undefined}
              >
                {variant === 'desktop' && (
                  <span>{String(index + 1).padStart(2, '0')}</span>
                )}
                {label}
              </IndexLink>
            </li>
          )
        })}
      </LinkList>
    </IndexNavigation>
  )
}