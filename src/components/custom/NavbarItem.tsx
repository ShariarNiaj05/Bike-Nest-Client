import { cn } from "@/lib/utils";
import navBike from "../../assets/nav-bike.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import React from "react";
import { AuthState } from "@/redux/features/authSlice";

/* const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]; */

const NavbarItem = ({ user }: { user: AuthState }) => {
  const { role } = user;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src={navBike} alt="nav bike" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bike Nest
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Ride Freely, Explore Boundlessly – Your Journey Starts
                      with BikeNest
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="Our Mission">
                At BikeNest, our mission is to make transportation accessible,
                affordable, and sustainable by providing a reliable bike rental
                service. We are committed to promoting eco-friendly mobility
                solutions that cater to diverse needs, whether for daily
                commuting, leisure rides, or exploring new destinations. Our
                goal is to empower individuals and communities by offering a
                convenient and environmentally responsible alternative to
                traditional transportation methods.
              </ListItem>
              <ListItem href="/about" title="Our Vision">
                At BikeNest, our vision is to lead the way in transforming urban
                transportation by making cycling the preferred mode of travel
                for everyone. We envision a future where cities are greener,
                healthier, and more connected, with cycling at the heart of this
                transformation. By providing innovative and accessible bike
                rental solutions, we aim to reduce the reliance on fossil fuels,
                decrease traffic congestion, and promote a culture of
                sustainability.
              </ListItem>
              <ListItem href="/about" title="Contribution">
                At BikeNest, we are dedicated to making a meaningful
                contribution to the environment, our communities, and the
                broader goal of sustainable living. Our commitment extends
                beyond just providing a bike rental service; it's about creating
                a lasting positive impact on the world around us.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* User Routes */}
        {role === "user" ?? (
          <NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>User Pages</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/dashboard/my-rentals" title="My Rentals">
                    Manage your current and past bike rentals here.
                  </ListItem>
                  <ListItem href="/dashboard/profile" title="Profile">
                    Update your profile details and preferences.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuItem>
        )}

        {/* Admin Routes */}
        {role === "admin" ?? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Admin Pages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/admin/bike-management" title="Bike Management">
                  Administer all the bikes in the system, including adding,
                  editing, or deleting bikes.
                </ListItem>
                <ListItem href="/admin/user-management" title="User Management">
                  Manage users and their roles within the system.
                </ListItem>
                <ListItem
                  href="/admin/user-rentals-management"
                  title="Rentals Management"
                >
                  Manage user's rentals within the system.
                </ListItem>
                <ListItem href="/admin/coupons" title="Rentals Management">
                  Creating and Managing coupon codes{" "}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Nested Example (Components) */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/docs/primitives/alert-dialog"
                title="Alert Dialog"
              >
                A modal dialog that interrupts the user with important content
                and expects a response.
              </ListItem>
              <ListItem href="/docs/primitives/hover-card" title="Hover Card">
                For sighted users to preview content available behind a link.
              </ListItem>
              <ListItem href="/docs/primitives/progress" title="Progress">
                Displays an indicator showing the completion progress of a task,
                typically displayed as a progress bar.
              </ListItem>
              <ListItem href="/docs/primitives/scroll-area" title="Scroll-area">
                Visually or semantically separates content.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/bikes">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Bike List
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavbarItem;
