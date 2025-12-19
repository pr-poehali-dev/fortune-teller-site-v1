import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    name: 'Елена М.',
    text: 'Невероятная точность! Всё, что было сказано, сбылось в течение месяца. Благодарю за помощь и поддержку.',
    rating: 5,
    service: 'Таро'
  },
  {
    name: 'Дмитрий К.',
    text: 'Заказывал руническую ставу на привлечение достатка. Результат превзошёл все ожидания! Через неделю получил неожиданную премию.',
    rating: 5,
    service: 'Заряженные ставы'
  },
  {
    name: 'Анна С.',
    text: 'Приходила со скептицизмом, ушла с ясным пониманием своего пути. Расклад на Ленорман открыл глаза на многое!',
    rating: 5,
    service: 'Ленорман'
  },
  {
    name: 'Ольга В.',
    text: 'Работа с древними энергиями изменила мою жизнь! Наконец-то нашла своё предназначение и обрела внутренний покой.',
    rating: 5,
    service: 'Древние энергии'
  },
  {
    name: 'Сергей Л.',
    text: 'Амулет на защиту работает! Чувствую себя уверенно, негатив больше не цепляется. Спасибо огромное!',
    rating: 5,
    service: 'Амулеты'
  },
  {
    name: 'Мария П.',
    text: 'Обратилась с вопросом о личной жизни. Расклад показал точную картину, все советы помогли! Сейчас всё наладилось.',
    rating: 5,
    service: 'Таро'
  },
  {
    name: 'Игорь Н.',
    text: 'Скептически относился к эзотерике, но руническая става на удачу в бизнесе реально сработала. Контракт подписали!',
    rating: 5,
    service: 'Заряженные ставы'
  },
  {
    name: 'Татьяна Г.',
    text: 'Валентина — настоящий профессионал! Чувствуется глубокое знание и мощная энергетика. Всем рекомендую!',
    rating: 5,
    service: 'Работа с энергиями'
  },
  {
    name: 'Виктор Р.',
    text: 'Заказал амулет на привлечение любви. Через месяц встретил свою половинку. Совпадение? Не думаю!',
    rating: 5,
    service: 'Амулеты'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground">Что говорят люди, обратившиеся за помощью</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-scale-in border-primary/20" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
