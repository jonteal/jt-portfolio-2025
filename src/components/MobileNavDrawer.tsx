type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNavDrawer = ({ isOpen, onClose }: DrawerProps) => (
  <div
    className={`fixed top-0 right-0 h-full w-64 bg-base-200 shadow-lg z-50 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="p-4 flex justify-end">
      <button onClick={onClose} className="btn btn-sm btn-circle">
        ✕
      </button>
    </div>
    <ul className="menu p-4">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#expertise">Expertise</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#references">References</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
);
