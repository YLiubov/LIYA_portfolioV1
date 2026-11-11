// Wordmark — молекула: логотип со ссылкой наверх и мигающим курсором.
import styled from 'styled-components'
import wordmark from '../../assets/Wordmark.svg?raw'
import type { ColorTheme } from './ThemeToggle'

// Для тёмной темы заменяем цвета непосредственно в тексте SVG.
const darkWordmark = wordmark
  .replaceAll('#48304D', '#D2F1E4')
  .replaceAll('#725F77', '#D2F1E4')
  .replaceAll('#FBCAEF', '#F865B0')

const WordmarkLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: fit-content;

  img {
    width: min(240px, 100%);
    height: auto;
  }

  @media (max-width: 900px) {
    img {
      width: min(205px, 52vw);
    }
  }

  @media (max-width: 360px) {
    img {
      width: min(150px, 46vw);
    }
  }
`

const TypingCaret = styled.span`
  height: 15px;
  margin-left: 2px;
  border-left: 1.5px solid var(--pink);
  animation: typing-caret-blink 1s steps(2, start) infinite;

  @keyframes typing-caret-blink {
    to {
      visibility: hidden;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export function Wordmark({ theme }: { theme: ColorTheme }) {
  return (
    <WordmarkLink href="#top" aria-label="Liubov — back to top">
      <img
        src={`data:image/svg+xml,${encodeURIComponent(theme === 'dark' ? darkWordmark : wordmark)}`}
        width="213"
        height="22"
        alt="type Liubov = Art & Code"
      />
      <TypingCaret aria-hidden="true" />
    </WordmarkLink>
  )
}
