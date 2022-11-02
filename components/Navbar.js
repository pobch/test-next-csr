import Link from 'next/link'

export function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" style={{ backgroundColor: 'salmon' }}>
          Home
        </Link>
        <span style={{ borderRight: '1px solid black', marginInline: '8px' }}></span>
        <Link href="/about" style={{ backgroundColor: 'salmon' }}>
          About
        </Link>
      </nav>
    </header>
  )
}
