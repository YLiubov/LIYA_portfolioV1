/** SectionLabel renders the numbered eyebrow label above a page section. */
import styled from 'styled-components'

type SectionLabelProps = {
  index: number
  label: string
}

const Label = styled.p.attrs({ className: 'eyebrow section-kicker' })``

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <Label>
      <span>{String(index).padStart(2, '0')}</span> {label}
    </Label>
  )
}