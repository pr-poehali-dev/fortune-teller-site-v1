import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookingSection from '@/components/sections/BookingSection';
import ContactsSection from '@/components/sections/ContactsSection';
import MobileMenu from '@/components/MobileMenu';

const blogPosts = [
  {
    title: 'Как подготовиться к сеансу Таро',
    excerpt: 'Важные рекомендации для получения максимально точного расклада',
    date: '15 декабря 2024',
    image: 'tarot'
  },
  {
    title: 'Значение основных линий на ладони',
    excerpt: 'Линия жизни, сердца и ума - что они рассказывают о вашей судьбе',
    date: '10 декабря 2024',
    image: 'palm'
  },
  {
    title: 'Ретроградный Меркурий: мифы и реальность',
    excerpt: 'Что действительно происходит в период ретроградности планет',
    date: '5 декабря 2024',
    image: 'mercury'
  }
];

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="star-field fixed inset-0 opacity-30 pointer-events-none" />
      
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Валентина</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#booking" className="hover:text-primary transition-colors">Запись</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="glow-effect hidden md:inline-flex">
              Записаться
            </Button>
            <MobileMenu />
          </div>
        </nav>
      </header>

      <HeroSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <BookingSection />

      <section id="blog" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Статьи о мистике и эзотерике</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 animate-scale-in cursor-pointer" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={index === 0 ? "https://cdn.poehali.dev/projects/0223413f-c7f8-42b6-a6fb-56302d762d3e/files/0589b5cf-8581-4626-a1e1-826851ee7d24.jpg" : 
                           index === 1 ? "https://cdn.poehali.dev/projects/0223413f-c7f8-42b6-a6fb-56302d762d3e/files/f8e15634-1705-440d-ae43-f71d108726f7.jpg" :
                           "https://cdn.poehali.dev/projects/0223413f-c7f8-42b6-a6fb-56302d762d3e/files/8782d11d-28da-4bbe-bca9-626e0ece679b.jpg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} className="inline mr-1" />
                    {post.date}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactsSection />

      <footer className="relative z-10 border-t border-border/50 py-8 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="text-lg font-bold text-primary">Валентина</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 Все права защищены</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}