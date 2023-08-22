const Footer = () => {
  return (
    <footer className="px-6 text-sm bg-accent">
      <div className="px-3 md:px-0 text-center md:text-left text-primary flex items-center py-4 md:py-8 ">
        <p>
          Built by <span className="font-semibold">Shidqi</span>. This project
          is a clone of website {""}
          <a
            href="https://pahe.li"
            target="_blank"
            className="underline"
            rel="noreferrer">
            pahe.li
          </a>
          {". "}
          The source code is available on{" "}
          <a
            href="https://github.com/shidqi29/anymovie"
            target="_blank"
            className="underline"
            rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
