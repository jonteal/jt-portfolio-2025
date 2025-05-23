export const MobileNav = ({ onOpen }: { onOpen?: () => void }) => (
  <div className="flex items-center justify-end w-full bg-base-100 shadow-sm">
    <div className="flex-none">
      <button onClick={onOpen} className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-auto stroke-current"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>{" "}
        </svg>
      </button>
    </div>
  </div>
);
