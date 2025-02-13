export default function GlobalLayout({children}: {
    children: ReactNode
}) {
    <div>
        <header>헤더</header>
        <main>{children}</main>
        <footer>푸터</footer>
      </div>
}