import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  showBottomGlow?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "", showBottomGlow = true }) => {
  const backgroundStyle = showBottomGlow 
    ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 255, 255, 0.15), transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255, 255, 255, 0.15), transparent 70%), #000000"
    : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 255, 255, 0.15), transparent 70%), #000000";

  return (
    <div className={`min-h-screen w-full relative bg-black ${className}`}>
      {/* X Organizations Black Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: backgroundStyle,
        }}
      />
      
      {/* Your Content/Components */}
      {children}
    </div>
  );
};

export default PageWrapper;
