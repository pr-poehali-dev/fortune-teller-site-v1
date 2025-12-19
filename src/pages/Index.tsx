import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const services = [
  {
    id: 1,
    title: 'Таро',
    description: 'Раскладка на картах Таро для понимания текущей ситуации и будущих возможностей',
    icon: 'Sparkles',
    price: '3000₽',
    duration: '60 минут'
  },
  {
    id: 2,
    title: 'Хиромантия',
    description: 'Чтение линий судьбы на ладонях, раскрытие предназначения и жизненного пути',
    icon: 'Hand',
    price: '2500₽',
    duration: '45 минут'
  },
  {
    id: 3,
    title: 'Астрология',
    description: 'Персональный гороскоп, совместимость партнёров, прогноз на год',
    icon: 'Stars',
    price: '4000₽',
    duration: '90 минут'
  },
  {
    id: 4,
    title: 'Нумерология',
    description: 'Анализ чисел судьбы, расчет благоприятных дат и периодов',
    icon: 'Calculator',
    price: '2000₽',
    duration: '45 минут'
  },
  {
    id: 5,
    title: 'Руны',
    description: 'Древняя магия рунических символов для ответов на важные вопросы',
    icon: 'Wand2',
    price: '2800₽',
    duration: '60 минут'
  },
  {
    id: 6,
    title: 'Медитация',
    description: 'Духовные практики и энергетическая очистка, работа с чакрами',
    icon: 'Moon',
    price: '3500₽',
    duration: '75 минут'
  }
];

const testimonials = [
  {
    name: 'Елена М.',
    text: 'Невероятная точность! Всё, что было сказано, сбылось в течение месяца. Благодарю за помощь и поддержку.',
    rating: 5,
    service: 'Таро'
  },
  {
    name: 'Дмитрий К.',
    text: 'Профессиональный подход, глубокое понимание. Помогла разобраться в сложной ситуации.',
    rating: 5,
    service: 'Астрология'
  },
  {
    name: 'Анна С.',
    text: 'Приходила со скептицизмом, ушла с ясным пониманием своего пути. Рекомендую!',
    rating: 5,
    service: 'Хиромантия'
  }
];

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    consultationType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="star-field fixed inset-0 opacity-30 pointer-events-none" />
      
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Мария Таро</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#booking" className="hover:text-primary transition-colors">Запись</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="glow-effect">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

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
                Профессиональная гадалка с 15-летним опытом. Таро, астрология, хиромантия. 
                Помогу найти ответы на важные вопросы и увидеть ваш истинный путь.
              </p>
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
                src="https://cdn.poehali.dev/projects/0223413f-c7f8-42b6-a6fb-56302d762d3e/files/8782d11d-28da-4bbe-bca9-626e0ece679b.jpg" 
                alt="Мистическая гадалка" 
                className="rounded-2xl shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

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
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-sm">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {service.duration}
                    </Badge>
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                  </div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят люди, обратившиеся за помощью</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-scale-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    <Badge>{testimonial.service}</Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Запись на консультацию</h2>
              <p className="text-xl text-muted-foreground">Выберите удобный формат и время</p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultationType">Формат консультации</Label>
                    <Select value={formData.consultationType} onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите формат" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center">
                            <Icon name="Video" size={16} className="mr-2" />
                            Видео-консультация
                          </div>
                        </SelectItem>
                        <SelectItem value="chat">
                          <div className="flex items-center">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            Чат
                          </div>
                        </SelectItem>
                        <SelectItem value="call">
                          <div className="flex items-center">
                            <Icon name="Phone" size={16} className="mr-2" />
                            Звонок
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Ваш вопрос (необязательно)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о том, что вас беспокоит..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-effect">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                  <CardDescription className="text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} className="inline mr-1" />
                    {post.date}
                  </CardDescription>
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

      <section id="contacts" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-2">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-2" />
                <h3 className="text-xl font-semibold">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-2" />
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">maria@tarot.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-2" />
                <h3 className="text-xl font-semibold">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Мистическая, 13</p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Send" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                <Icon name="Youtube" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/50 py-8 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="text-lg font-bold text-primary">Мария Таро</span>
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