import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
    title: 'Таро, Ленорман (индивидуальный расклад)',
    price: 'от 1500₽'
  },
  {
    id: 2,
    title: 'Заряженные ставы',
    price: 'от 2000₽'
  },
  {
    id: 3,
    title: 'Работа с древними энергиями',
    price: 'от 10000₽'
  },
  {
    id: 4,
    title: 'Индивидуальный заказ амулетов',
    price: 'от 6000₽'
  }
];

export default function BookingSection() {
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
    <section id="booking" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Запись на консультацию</h2>
          <p className="text-xl text-muted-foreground">Заполните форму, и я свяжусь с вами в ближайшее время</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Форма записи</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
  );
}
