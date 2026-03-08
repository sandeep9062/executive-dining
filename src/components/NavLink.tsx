import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  hoverClassName?: string; // New: Specific hover styles
  showUnderline?: boolean; // New: Visual utility toggle
  isExternal?: boolean; // New: Handle external restaurant bookings/socials
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      hoverClassName,
      showUnderline = false,
      isExternal,
      to,
      children,
      ...props
    },
    ref,
  ) => {
    // Shared base styles for an "Executive" look
    const baseStyles =
      "relative inline-flex items-center transition-all duration-300 ease-in-out";

    // If it's an external link (e.g., to an OpenTable page or Instagram)
    if (isExternal && typeof to === "string") {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, className, hoverClassName)}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            className,
            // Subtle hover state logic
            "hover:text-primary",
            hoverClassName,
            isActive && cn("text-primary font-semibold", activeClassName),
            isPending && cn("opacity-50 cursor-wait", pendingClassName),
          )
        }
        {...props}
      >
        {({ isActive }) => (
          <>
            {children}
            {/* Elegant Underline Indicator */}
            {showUnderline && (
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[1.5px] bg-primary transition-all duration-500",
                  isActive ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            )}
          </>
        )}
      </RouterNavLink>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
