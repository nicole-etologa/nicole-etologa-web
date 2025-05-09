import { SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';

interface SocialIconProps {
  className?: string;
}

export default function SocialIcons({ className = "" }: SocialIconProps) {
  const socialLinks = [
    { icon: SiInstagram, href: "https://instagram.com/nicole.etologa", label: "Instagram" },
    { icon: SiTiktok, href: "https://tiktok.com/@nicole.etologa", label: "Tiktok"}
  ];

  return (
    <div className="flex space-x-4 max-md:hidden">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} transition-colors`}
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}