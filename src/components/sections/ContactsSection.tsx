import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative z-10 py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">Свяжитесь со мной удобным способом</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                      <a href="https://wa.me/79963068545" className="text-primary hover:underline text-lg">
                        +7 (996) 306-85-45
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Быстрая связь через мессенджер</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MessageCircle" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                      <a href="https://t.me/ipgarmonia" className="text-primary hover:underline text-lg">
                        @ipgarmonia
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Пишите в любое время</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Icon name="Info" size={24} className="text-primary" />
                      Важная информация
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className="text-primary" />
                        <span className="font-semibold">100% гарантия результата</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Wallet" size={20} className="text-primary" />
                        <span className="font-semibold">100% предоплата</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full text-lg glow-effect" size="lg" asChild>
                    <a href="https://wa.me/79963068545">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full text-lg" size="lg" asChild>
                    <a href="https://t.me/ipgarmonia">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
