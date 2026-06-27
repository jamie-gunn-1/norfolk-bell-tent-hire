export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-white">
          Norfolk Bell Tent Hire
        </h1>

        <ul className="hidden gap-8 text-white md:flex">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Packages</a>
          </li>

          <li>
            <a href="#">Gallery</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}