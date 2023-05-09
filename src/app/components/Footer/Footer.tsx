export default function Footer() {
  return (
    <footer className="z-10 py-8 x-10 px-10 text-white bg-purple-800">
      <div className="container">
        <h5 className="text-lg">Coach Me Code</h5>
        <p className="mt-4 text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Riff Raffs.
        </p>
        <div className="text-sm text-stone-400">
          Developed by{" "}
          <a
            className="text-sky-600"
            href="https://github.com/Spyabo/coach-me-code/graphs/contributors"
            rel="noreferrer"
            target="_blank"
          >
            Contributors
          </a>{" "}
          using{" "}
          <a
            className="text-sky-600"
            href="https://beta.nextjs.org/docs/getting-started"
            rel="noreferrer"
            target="_blank"
          >
            NextJS 13 & Friends
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
