import { Navbar } from "../Navbar";

export const AppLayout = ({ children }: any) => (
  <div className="flex flex-col min-h-screen w-full">
    <div className="overflow-x-hidden">
      <Navbar />
    </div>

    <main style={{ flex: 1 }}>{children}</main>
  </div>
);
