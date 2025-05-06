import { Navbar } from "../Navbar";

export const AppLayout = ({ children }: any) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main style={{ flex: 1 }}>{children}</main>
  </div>
);
