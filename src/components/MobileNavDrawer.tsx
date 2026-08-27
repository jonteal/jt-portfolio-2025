type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { name: "home", path: "/#home" },
  { name: "expertise", path: "/#expertise" },
  { name: "work", path: "/#work" },
  { name: "experience", path: "/#experience" },
  { name: "references", path: "/#references" },
  { name: "contact", path: "/#contact" },
  { name: "resume", path: "/#resume" },
  { name: "youtube", path: "/youtube" },
  // { name: "Games", path: "/games" },
];

export const MobileNavDrawer = ({ isOpen, onClose }: DrawerProps) => (
  <div
    className={`fixed top-0 right-0 h-full w-96 bg-base-200 shadow-lg z-50 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="p-4 flex justify-end">
      <button onClick={onClose} className="btn btn-md btn-circle">
        ✕
      </button>
    </div>
    <ul className="menu p-4">
      {links.map((link) => (
        <li key={link.name} className="mb-4">
          <a onClick={onClose} href={link.path} className="text-2xl font-bold">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
