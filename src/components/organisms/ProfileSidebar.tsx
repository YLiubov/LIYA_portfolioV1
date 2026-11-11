// ProfileSidebar — организм: профиль и навигация в боковом меню на компьютере.
import styled from 'styled-components'
import { SectionIndex } from '../molecules/SectionIndex'
import type { ColorTheme } from '../molecules/ThemeToggle'
import { Wordmark } from '../molecules/Wordmark'

type ProfileSidebarProps = {
  activeSection: string
  theme: ColorTheme
}

const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1;
  min-width: 0;
  height: 100svh;
  padding: clamp(32px, 5vw, 72px) clamp(22px, 4vw, 58px);
  border-right: 1px solid var(--line);
  color: var(--ink);

  @media (max-width: 900px) {
    display: none;
  }
`

const Profile = styled.div`
  max-width: 250px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;

  p {
    margin: 0 0 12px;
  }
`

const ProfileName = styled.p`
  color: var(--ink);
  font-family: var(--font-italic);
  font-size: 20px;
  font-style: italic;
`

const ProfileRole = styled.p`
  color: var(--muted);
  font-size: 11px;
`

const ProfileSchool = styled.p`
  margin-top: 24px !important;
  color: var(--ink);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Availability = styled.p`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0;
  color: var(--muted);
  font-size: 10px;

  &::before {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--magenta);
    content: '';
  }
`

export function ProfileSidebar({
  activeSection,
  theme,
}: ProfileSidebarProps) {
  return (
    <Sidebar aria-label="Portfolio profile and section navigation">
      <Wordmark theme={theme} />

      <Profile>
        <ProfileName>Liubov Yakymenko</ProfileName>
        <ProfileRole>Junior Frontend Developer</ProfileRole>
        <p>Interested in frontend development, interface design, and clear website navigation.</p>
        <ProfileSchool>TECHCOLLEGE · Hovedforløb 2</ProfileSchool>
        <p>Expected graduation: Spring 2027</p>
      </Profile>

      <SectionIndex activeSection={activeSection} variant="desktop" />

      <Availability>Open to a first junior frontend opportunity</Availability>
    </Sidebar>
  )
}
