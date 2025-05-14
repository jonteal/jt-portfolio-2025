import { MobileNav } from "../MobileNav";
import { Navbar } from "../Navbar";

export const AppLayout = ({ children }: any) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    {/* <MobileNav /> */}
    <main style={{ flex: 1 }}>{children}</main>
  </div>
);
