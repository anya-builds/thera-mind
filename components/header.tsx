import Link from "next/link"
const Header = () => {
  return (
    <div  className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-0 border-b border-primary/10" />
  <header className="relative max-w-6xl mx-auto px-4">
     <div className="flex h-16 items-center justify-between"> <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          ></div>
        </header>
    </div>
  )
}

export default Header
