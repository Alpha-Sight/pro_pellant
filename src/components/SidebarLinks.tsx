import { Link, useLocation } from "react-router-dom";

const SidebarLinks: React.FC = () => {
  const links = [
    { label: "Personal Information", to: "/personal-information" },
    { label: "Work Experience", to: "/work-experience" },
    { label: "Skills", to: "/skills" },
    { label: "Education", to: "/education" },
    { label: "Achievements", to: "/achievements" },
    { label: "Projects/Portfolio", to: "/portfolio" },
  ];

  const location = useLocation();

  return (
    <ul className="hidden lg:flex flex-col gap-[0.62rem] absolute left-28">
      {links.map((link) => {
        const isActive = location.pathname === link.to;

        return (
          <li
            key={link.to}
            className={`
              leading-normal
              transition-colors duration-300 
              px-2 py-1 
              rounded-full
              cursor-pointer
            
              ${
                isActive
                  ? "text-[1.35rem] font-semibold" // active styles
                  : "text-[1.2rem] font-medium"   // default styles
              }
            `}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarLinks;
