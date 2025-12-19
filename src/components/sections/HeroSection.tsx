import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <div className="mb-6 float-animation">
              <Icon name="Moon" size={80} className="text-primary opacity-80" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Раскройте тайны своей судьбы
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональная гадалка с 15-летним опытом. Таро, Ленорман, русские руны, славянские кощуны. 
              Помогу найти ответы на важные вопросы и увидеть ваш истинный путь.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="default" className="text-lg px-4 py-2 glow-effect">
                <Icon name="CheckCircle" size={20} className="mr-2" />
                100% гарантия
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Icon name="Wallet" size={20} className="mr-2" />
                100% предоплата
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg glow-effect">
                <Icon name="Video" size={20} className="mr-2" />
                Онлайн-консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/Изображение WhatsApp 2025-04-16 в 09.00.21_08985347.jpg" 
              alt="Валентина - профессиональная гадалка" 
              className="rounded-2xl shadow-2xl glow-effect"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
