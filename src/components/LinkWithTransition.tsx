import { useLocation, useNavigate } from "react-router-dom";

interface LinkWithTransitionProps {
  /**
   * The path to navigate to. If not provided, defaults to "#"
   */
  href?: string;

  /**
   * If `true`, clicking the link navigates back instead of forward
   */
  back?: boolean;

  /**
   * The content (text, elements) inside the link
   */
  children: React.ReactNode;
}

const LinkWithTransition: React.FC<LinkWithTransitionProps> = ({
  href,
  children,
  back = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If the link is meant to go "back"
    if (back) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate(-1);
        });
      } else {
        navigate(-1);
      }
      return;
    }

    // Prevent navigating to the same page if we already are on `href`
    if (location.pathname === href) {
      return;
    }

    // Handle forward navigation
    if (href) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate(href);
        });
      } else {
        navigate(href);
      }
    }
  };

  return (
    // Use `href || "#"`, so it's never an empty <a>
    <a href={href || "#"} onClick={handleNavigation}>
      {children}
    </a>
  );
};

export default LinkWithTransition;
