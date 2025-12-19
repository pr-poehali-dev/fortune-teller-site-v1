import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#booking', label: 'Запись' },
    { href: '#blog', label: 'Блог' },
    { href: '#contacts', label: 'Контакты' }
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[73px] right-0 left-0 bg-card border-b border-border/50 z-50 md:hidden animate-slide-down">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-primary transition-colors py-2"
                    onClick={handleClick}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full glow-effect mt-2" onClick={handleClick}>
                  Записаться
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
