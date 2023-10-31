
const Navbar = () => {
    return (
        <div className="flex justify-between items-center shadow-md py-5 px-12">
            <h1 className="font-bold text-3xl">Amajhon</h1>
            <nav className="flex items-center gap-8 py-4">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </div>
    );
};

export default Navbar;