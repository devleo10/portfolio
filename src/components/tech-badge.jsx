import React from 'react'

const TechBadge = ({ href, icon, children, className, darkInvert = false }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded border border-dashed border-border px-1.5 py-0.5 text-[11px] transition-all duration-200 hover:-translate-y-px hover:border-foreground/25 hover:opacity-95 active:translate-y-0 sm:text-sm ${className}`}
    >
        {icon && (
            <img
                src={icon}
                alt={children}
                className={`h-3.5 w-3.5 object-contain ${darkInvert ? 'dark:invert' : ''}`}
            />
        )}
        {children}
    </a>
)

export default TechBadge;
