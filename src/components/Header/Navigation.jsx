const Navigation = ({ isOpen }) => {
  return (
    <nav className={isOpen ? "nav-main open" : "nav-main"}>
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
