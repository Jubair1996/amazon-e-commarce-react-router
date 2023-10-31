import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-md py-5 px-12">
      <h1 className="font-bold text-3xl">Amajhon</h1>
      <nav className="flex items-center gap-8 py-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-600 p-2 rounded "
              : " "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-600 p-2 rounded "
              : ""
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-600 p-2 rounded"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
