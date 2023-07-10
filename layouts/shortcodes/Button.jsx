import Link from "next/link"

const Button = ({ href, type, rel, children }) => {
  return (
    <Link href={href} rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={`btn btn-outline-primary btn-primary flex gap-1 items-center justify-center bg-primary-600 text-black font-semibold`}>
      {children}
    </Link>
  )
}

export default Button
