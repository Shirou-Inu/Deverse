import { Link } from "react-router-dom"

const pageMap = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
]

function Sidebar() {
    return (
        <div>
            {pageMap.map((link, index) => (
                <Link key={index} to={link.url}>
                    {link.text}
                </Link>
            ))}
        </div>
    )
}

export default Sidebar