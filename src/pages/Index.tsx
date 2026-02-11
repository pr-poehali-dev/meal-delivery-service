import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
    items: [] as { name: string; price: number; quantity: number }[]
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      title: 'Обед за 300₽',
      price: 300,
      items: ['Салат «Оливье»', 'Суп «Борщ»', 'Котлетка «Домашняя» с гречей'],
      note: 'Салат/Суп + Горячее: 250₽'
    },
    {
      title: 'Обед за 320₽',
      price: 320,
      items: ['Салат «Оливье»', 'Суп «Борщ»', 'Жаркое из свинины'],
      note: 'Салат/Суп + Горячее: 260₽'
    },
    {
      title: 'Обед за 340₽',
      price: 340,
      items: ['Салат «Оливье»', 'Суп «Борщ»', 'Медальон из рубленного куриного филе со спагетти'],
      note: 'Салат/Суп + Горячее: 270₽'
    }
  ];

  const pies = {
    savory: [
      { name: 'С горбушей', weight: '1-1,2кг', price: 850 },
      { name: 'С горбушей и рисом', weight: '1-1,2кг', price: 650 },
      { name: 'С капустой и яйцом', weight: '1-1,2кг', price: 450 },
      { name: 'С картофелем и курицей', weight: '1-1,2кг', price: 600 },
      { name: 'С картофелем и мясом', weight: '1-1,2кг', price: 550 },
      { name: 'С картофелем и грибами', weight: '1-1,2кг', price: 600 }
    ],
    sweet: [
      { name: 'С яблоками и яблочным повидлом', weight: '1кг', price: 500 },
      { name: 'С вишней', weight: '1кг', price: 750 },
      { name: 'С черной смородиной', weight: '1кг', price: 850 }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/dce251d2-53be-4129-82b1-4fb8e4200832.png" alt="GurPit" className="h-10 w-10" />
            <span className="text-5xl text-green-400 font-black">GURPIT</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('menu')} className="text-sm hover:text-primary transition-colors">Меню</button>
            <button onClick={() => scrollToSection('pies')} className="text-sm hover:text-primary transition-colors">Пироги</button>
            <button onClick={() => scrollToSection('delivery')} className="text-sm hover:text-primary transition-colors">Доставка</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </nav>

          <a href="tel:+79002001315" className="flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={18} />
            <span className="hidden sm:inline">+7 900 200 13 15</span>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Служба доставки комплексных обедов и пирогов
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            по Екатеринбургу и пригороду
          </p>
          
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-8 inline-block animate-scale-in">
            <p className="text-2xl md:text-3xl font-bold mb-2">Скидка 30% на первый заказ!</p>
            <p className="text-lg">Бесплатная доставка · Работаем без выходных</p>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl"
            onClick={() => scrollToSection('order')}
          >
            Оформить заказ
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">О нас и условия работы</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" />
                  Опыт и качество
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• Год основания: 2010</p>
                <p>• С 2020 года — доставка корпоративного питания</p>
                <p>• 8000 обедов в месяц</p>
                <p>• Доставляем от 5 обедов</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" className="text-primary" />
                  Удобная оплата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• Наличные</p>
                <p>• Банковские карты</p>
                <p>• QR-код</p>
                <p>• Расчётный счёт (по договору)</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Utensils" className="text-primary" />
                  Дополнительные услуги
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Предоставляем оборудование для комнат приёма пищи: столы, холодильники, микроволновки. Организуем столовую «под ключ».</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Пример меню на будний день</h2>
          <p className="text-center text-muted-foreground mb-12">В комплексный обед входит: 2 кусочка хлеба, комплект одноразовых приборов, салфетки</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{item.note}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {item.items.map((dish, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => scrollToSection('order')}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/50">
            <CardHeader>
              <CardTitle>Дополнительно</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Замена салата на «Цезарь с курицей» +10₽</p>
              <p>• Замена салата на «Полянка» +10₽</p>
              <p>• Компот из сухофруктов (0,5л) 90₽</p>
              <p>• Булочка «Выборгская с яблочным повидлом» 50₽</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pies" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши пироги</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Pizza" className="text-primary" />
                Сытные пироги
              </h3>
              <div className="space-y-4">
                {pies.savory.map((pie, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{pie.name}</p>
                        <p className="text-sm text-muted-foreground">{pie.weight}</p>
                      </div>
                      <p className="text-xl font-bold text-primary">{pie.price}₽/кг</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Cake" className="text-primary" />
                Сладкие пироги
              </h3>
              <div className="space-y-4">
                {pies.sweet.map((pie, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{pie.name}</p>
                        <p className="text-sm text-muted-foreground">{pie.weight}</p>
                      </div>
                      <p className="text-xl font-bold text-primary">{pie.price}₽</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Наши клиенты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'Mountain', text: 'Карьеры' },
              { icon: 'Factory', text: 'Производства' },
              { icon: 'Building2', text: 'Офисы' },
              { icon: 'Coffee', text: 'Буфеты' },
              { icon: 'Car', text: 'Автосалоны' },
              { icon: 'HardHat', text: 'Стройплощадки' }
            ].map((client, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-scale-in">
                <Icon name={client.icon} size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold">{client.text}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground p-8">
            <h3 className="text-2xl font-bold mb-4">Условия доставки</h3>
            <div className="space-y-2 text-left max-w-2xl mx-auto">
              <p>✓ Заказы принимаются от 4х обедов</p>
              <p>✓ Доставка бесплатная</p>
              <p>✓ Работаем без выходных</p>
              <p>✓ Поставляем готовую продукцию в буфеты</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Оформить заказ</h2>
          <p className="text-center text-muted-foreground mb-8">Заполните форму, и мы свяжемся с вами</p>
          
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Как вас зовут?</Label>
                  <Input 
                    id="name" 
                    placeholder="Введите ваше имя"
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 900 000 00 00"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="address">Адрес доставки</Label>
                  <Input 
                    id="address" 
                    placeholder="Улица, дом, офис"
                    value={orderForm.address}
                    onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Укажите количество обедов, время доставки и другие пожелания"
                    rows={4}
                    value={orderForm.comment}
                    onChange={(e) => setOrderForm({...orderForm, comment: e.target.value})}
                  />
                </div>

                <Button 
                  type="button" 
                  className="w-full text-lg py-6"
                  size="lg"
                >
                  Отправить заказ
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку отправить, вы даете согласие на обработку своих персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефоны</h3>
              <p className="text-lg mb-2">+7 343 268 22 88</p>
              <p className="text-lg">+7 900 200 13 15</p>
            </Card>

            <Card className="p-8">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Город</h3>
              <p className="text-lg">Екатеринбург и пригород</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© Samovar Express | Все права защищены</p>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Наверх
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;