# Liubov Yakymenko Portfolio

A React, TypeScript, and Vite frontend focused on the portfolio's content, component structure, and visual design.

DM Sans, Playfair Display, and Space Mono are bundled locally with `@fontsource`, so the site does not request fonts from an external service at runtime.

## Структура проекта

- `src/components/atoms/` — небольшие переиспользуемые элементы, например заголовок и ссылка-кнопка.
- `src/components/molecules/` — составные элементы, например логотип и переключатель темы.
- `src/components/organisms/` — крупные части страницы: шапка, секции и подвал.
- `src/data/` — данные, которые используют компоненты: пункты меню и навыки.
- `src/assets/` — изображения и другие ресурсы, импортируемые в коде.
- `src/App.tsx` — собирает страницу и управляет общей темой и активным разделом.
- `src/App.css` и `src/index.css` — стили страницы и общая палитра; отдельные компоненты также используют styled-components.
- `public/` — файлы, доступные напрямую по адресу сайта, например значок вкладки.

## Development

```bash
npm install
npm run dev
```

## Checks and production preview

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Current scope

Work is currently limited to the frontend and design. PWA installation and offline support, project management and persistent storage, résumé downloads, and deployment are intentionally postponed.

## Still needed before launch

- Replace the project empty state with real project descriptions, links, and images.
- Add verified email, GitHub, and LinkedIn links to the contact section.
- Add a separate, final PDF résumé before linking a résumé download.
- Review colors, spacing, type scale, and mobile layouts against the source Figma file.
- Decide on hosting and a custom domain after the frontend design is ready.
