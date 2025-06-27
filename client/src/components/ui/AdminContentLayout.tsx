import React from 'react';

/**
 * AdminContentLayout Component
 *
 * This component provides a consistent layout wrapper for admin page content.
 * It centers the content, applies a maximum width for readability, and adds vertical padding.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} A div element acting as the content layout.
 */
const AdminContentLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/*
        The children prop will render all the content passed into this layout component.
        This provides a flexible wrapper for different admin pages.
        Tailwind CSS classes used:
        - max-w-7xl: Sets a maximum width for the content for better readability on large screens.
        - mx-auto: Centers the content horizontally.
        - py-8: Adds vertical padding (padding-top and padding-bottom).
        - px-4 sm:px-6 lg:px-8: Adds horizontal padding, which adjusts responsively for different screen sizes.
      */}
      {children}
    </div>
  );
};

export default AdminContentLayout;
