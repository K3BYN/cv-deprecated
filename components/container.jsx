import Navbar from "./navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <footer class="page-footer">
        <span>made by </span>
        <a href="https://georgemartsoukos.com/" target="_blank">
          <img
            width="34"
            height="34"
            src="logo_kh.png"
            alt="George Martsoukos logo"
          />
        </a>
      </footer>
    </>
  );
};

export default Container;
