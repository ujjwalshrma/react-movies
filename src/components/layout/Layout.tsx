import Navbar from "../UI/Navbar";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
