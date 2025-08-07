export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center">
          © {new Date().getFullYear()} Hayden White. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/haydenw2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hayden-s-white"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:white929@purdue.edu" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
