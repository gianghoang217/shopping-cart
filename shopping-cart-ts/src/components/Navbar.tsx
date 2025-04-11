import Button from "./Button";

function Navbar() {
  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    height: "60px",
    width: "100%",
    color: "yellow",
  };

  return (
    <nav style={navStyles}>
      <div>Shopping Cart</div>
      <div>
        <Button handleClick={() => alert("Go to Home!")}>Home</Button>
        <Button handleClick={() => alert("Go to About!")}>About</Button>
        <Button handleClick={() => alert("Go to User!")}>User</Button>
      </div>
    </nav>
  );
}

export default Navbar;
