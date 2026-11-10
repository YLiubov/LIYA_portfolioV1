/** ActionLink renders a reusable call-to-action link in either visual style. */
import type { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'primary' | 'secondary'
}

const StyledActionLink = styled.a<{ $variant: ActionLinkProps['variant'] }>`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 12px 16px;
  border: 1px solid var(--ink);
  background: ${({ $variant }) => ($variant === 'primary' ? 'var(--ink)' : 'transparent')};
  color: ${({ $variant }) => ($variant === 'primary' ? 'var(--page)' : 'var(--ink)')};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease;

  &:hover {
    background: ${({ $variant }) => ($variant === 'primary' ? 'transparent' : 'var(--ink)')};
    color: ${({ $variant }) => ($variant === 'primary' ? 'var(--ink)' : 'var(--page)')};
  }

  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 900px) {
    font-size: 11px;
  }
`

export function ActionLink({ variant, ...props }: ActionLinkProps) {
  return <StyledActionLink $variant={variant} {...props} />
}
