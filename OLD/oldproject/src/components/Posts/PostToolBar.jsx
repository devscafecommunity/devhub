import Link from 'next/link'

export default function PostToolBar({ frontMatter }) {

    return (
        <header>
            <nav>
                <Link href="/" legacyBehavior>
                    <a
                        style={{color: "auto", textDecoration: "none"}}
                    >👈 Retornar para a página inicial </a>
                </Link>
            </nav>
        </header>
    )
}