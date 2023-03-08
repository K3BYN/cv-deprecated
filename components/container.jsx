
const Container = ({ children }) => {
  return (
    <>
      <main>{children}</main>

      <a href="https://github.com/K3BYN/MyUdemy/commits?author=K3BYN" target="_blank">
      <footer class="page-footer">
        <span className="me-2">made by</span>
          <img
            width="34"
            height="34"
            src="logo_kh.png"
            alt="Kevin logo"
          />
      </footer>
        </a>
    </>
  );
};

export default Container;
