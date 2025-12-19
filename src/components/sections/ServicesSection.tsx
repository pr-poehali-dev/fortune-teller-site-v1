import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Таро, Ленорман (индивидуальный расклад)',
    description: 'Раскладка на картах Таро и Ленорман для понимания текущей ситуации и будущих возможностей',
    icon: 'Sparkles',
    price: 'от 1500₽'
  },
  {
    id: 2,
    title: 'Заряженные ставы',
    description: 'Индивидуальные рунические ставы с мощной зарядкой под вашу конкретную ситуацию',
    icon: 'Wand2',
    price: 'от 2000₽'
  },
  {
    id: 3,
    title: 'Работа с древними энергиями',
    description: 'Подключение к мощным древним энергиям для решения жизненных задач и исполнения желаний',
    icon: 'Flame',
    price: 'от 10000₽'
  },
  {
    id: 4,
    title: 'Индивидуальный заказ амулетов',
    description: 'Создание персональных защитных и притягивающих амулетов по вашему запросу',
    icon: 'Shield',
    price: 'от 6000₽'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground">Выберите подходящий формат консультации</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={service.id} className="hover:scale-105 transition-transform duration-300 animate-scale-in border-primary/20" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="mb-4">
                  <Icon name={service.icon as any} size={48} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-accent">{service.price}</span>
                </div>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
