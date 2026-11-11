// SiteFooter — организм: подвал сайта с подписью и ссылкой наверх.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name">Liubov Yakymenko</p>
        <p>Frontend Development · Interface Design</p>
      </div>
      <a href="#top">Back to top ↑</a>
      <p>Portfolio · 2026</p>
    </footer>
  )
}
