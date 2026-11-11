// ActionLink — атом: ссылка-кнопка с основным и дополнительным оформлением.
import type { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'primary' | 'secondary'
}

// $variant нужен только для стилей и не передаётся в HTML благодаря префиксу $.
const StyledActionLink = styled.a<{ $variant: ActionLinkProps['variant'] }>`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-width: 220px;
  min-height: 72px;
  padding: 20px 30px;
  border: 1px solid var(--pink);
  background: ${({ $variant }) => ($variant === 'primary' ? 'var(--pink)' : 'transparent')};
  color: ${({ $variant }) => ($variant === 'primary' ? 'var(--on-accent)' : 'var(--pink-soft)')};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease;

  &:hover {
    background: ${({ $variant }) => ($variant === 'primary' ? 'transparent' : 'var(--pink)')};
    color: ${({ $variant }) => ($variant === 'primary' ? 'var(--pink-soft)' : 'var(--on-accent)')};
  }

  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 900px) {
    min-width: 0;
    min-height: 56px;
    padding: 16px 20px;
    font-size: 13px;
  }
`

export function ActionLink({ variant, ...props }: ActionLinkProps) {
  return <StyledActionLink $variant={variant} {...props} />
}
