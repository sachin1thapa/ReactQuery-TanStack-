import React from 'react';
import { Navbar, Collapse, Typography, IconButton, Avatar } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <NavLink
          to="/foodRecipe"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Food Recipe
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <NavLink to="/account" className="flex items-center hover:text-blue-500 transition-colors">
          Account
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <NavLink to="/blocks" className="flex items-center hover:text-blue-500 transition-colors">
          Blocks
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <NavLink to="/docs" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </NavLink>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3  bg-blue-gray-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="div" variant="h6" className="mr-4 cursor-pointer py-1.5">
          <NavLink to="/" className="flex items-center">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
          </NavLink>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
