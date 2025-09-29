"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Plane,
  Hotel,
  Car,
  CalendarRange,
  Building2,
  Ship,
  Landmark,
  Utensils,
  Wallet,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

/**
 * Premium Landing Page: Dubai Investment Tour (Dark)
 * - TailwindCSS + shadcn/ui + lucide-react
 */

const packages = [
  {
    id: 1,
    title: "Эконом-перелёт + Atlantis",
    price: 3700,
    short: "Эконом Fly Dubai, отель Atlantis The Palm, Cadillac",
    flight: "Fly Dubai (Economy) + виза",
    hotel: "Atlantis, The Palm",
    hotelLink: "https://www.atlantis.com/dubai/atlantis-the-palm",
    car: "Cadillac (класс Premium)",
    imageHotel: "/hotels/AtlantisThePalmFrontal (1).webp",
    imageCar: "/cars/cadilac.webp",
  },
  {
    id: 2,
    title: "Бизнес-перелёт + Address Sky View",
    price: 8000,
    short: "Бизнес Fly Dubai, Address Sky View, BMW X7",
    flight: "Fly Dubai (Business) + виза",
    hotel: "Address Sky View",
    hotelLink: "https://addresshotels.com/en/hotels/address-sky-view/",
    car: "BMW X7",
    imageHotel: "/hotels/Address sky view.webp",
    imageCar: "/cars/x7.webp",
  },
  {
    id: 3,
    title: "Бизнес-перелёт + Royal Atlantis",
    price: 10000,
    short: "Бизнес Fly Dubai, The Royal Atlantis, Mercedes G-Class",
    flight: "Fly Dubai (Business) + виза",
    hotel: "The Royal Atlantis",
    hotelLink: "https://www.atlantis.com/atlantis-the-royal/",
    car: "Mercedes G-Class",
    imageHotel: "/hotels/royal atlantis.webp",
    imageCar: "/cars/gelik.webp",
  },
];

const WHATSAPP_PHONE = "971524581858"; // без плюса, как в wa.me

function makeWALink(p: {
  id: number;
  title: string;
  price: number;
  flight: string;
  hotel: string;
  car: string;
}) {
  const msg = ["Мне интересна", `Опция: ${p.title}`].join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}

const priceFmt = new Intl.NumberFormat("en-US");

const DayBlock = ({
  day,
  title,
  items,
}: {
  day: string;
  title: string;
  items: { time: string; icon: React.ReactNode; text: string }[];
}) => (
  <Card className="bg-zinc-800/70 backdrop-blur-md border border-zinc-500 shadow-xl rounded-2xl text-zinc-200">
    <CardHeader className="pb-2">
      <CardTitle className="text-xl md:text-2xl flex items-center gap-3 text-white">
        <CalendarRange className="w-6 h-6" />
        <span>
          {day}. {title}
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {items.map((it, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="mt-0.5 flex items-center gap-2 w-32 shrink-0 text-sm text-zinc-400">
            <Clock className="w-4 h-4" /> {it.time}
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-zinc-300">{it.icon}</div>
            <p className="text-zinc-200 leading-relaxed">{it.text}</p>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-200">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-800/60 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo1.png" // путь к твоему лого
              alt="Логотип"
              className="w-10 h-10 rounded-xl object-contain"
            />
            <span className="font-semibold text-white">
              Seafront Properties
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#packages" className="hover:opacity-70">
              Опции
            </a>
            <a href="#program" className="hover:opacity-70">
              Программа
            </a>
            <a href="#contact" className="hover:opacity-70">
              Контакты
            </a>
          </nav>
          <a
            href="https://wa.me/971524581858?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%20%D1%82%D1%83%D1%80%20%D0%B2%20%D0%94%D1%83%D0%B1%D0%B0%D0%B5"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="rounded-2xl">Связаться</Button>
          </a>
        </div>
      </header>

      {/* HERO (Page 1) */}
      <section className="relative overflow-hidden">
        {/* BG image: mobile-first with <picture> */}
        <picture>
          {/* Desktop ≥1280px */}
          <source media="(min-width:1280px)" srcSet="/hero-desktop.webp" />
          {/* Tablet ≥768px */}
          <source media="(min-width:1280px)" srcSet="/hero-desktop.webp" />
          {/* Mobile default */}
          {/* Mobile default */}
          <img
            src="/hero-mobile.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Тёмный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-zinc-900/90" />

        {/* Твой контент Hero — оставь как есть */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl text-white">
            <Badge className="bg-white/10 border-white/30 text-white rounded-full mb-6">
              Возмещаем расходы при покупке
            </Badge>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
              Прилетайте, увидьте, решите —{" "}
              <span className="text-emerald-400">
                организацию мы берем на себя
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-zinc-200">
              Личный визит в Дубай — лучший способ принять взвешенное решение
              перед покупкой недвижимости. Даты, билеты, отель, встречи с
              застройщиками, логистика — мы всё организуем. Вы останавливаетесь
              в лучших отелях, ездите на премиум-авто, посещаете топовые
              объекты. В случае покупки —{" "}
              <span className="font-medium text-white">
                все расходы компенсируем
              </span>
              .
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5" /> Организация «под ключ»
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5" /> Топ-застройщики
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5" /> Премиум-сервис
              </div>
            </div>
            <div className="mt-10 flex gap-3">
              <a href="#packages">
                <Button size="lg" className="rounded-2xl">
                  Выбрать опцию
                </Button>
              </a>
              <a href="#program">
                <Button size="lg" variant="white" className="rounded-2xl">
                  Смотреть программу
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES (Page 2) */}
      <section id="packages" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              Опции инвест-тура
            </h2>
            <p className="text-zinc-400 mt-2">
              Выберите комфорт и атмосферу — мы адаптируем программу под ваши
              предпочтения.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p) => (
            <Card
              key={p.id}
              className="border border-zinc-500 shadow-xl rounded-3xl overflow-hidden group bg-zinc-900 text-zinc-100"
            >
              <div className="relative">
                <img
                  src={p.imageHotel}
                  alt={p.hotel}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-black/70 text-white rounded-full">
                    {p.hotel}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-0">
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Plane className="w-5 h-5" /> {p.title}
                </CardTitle>
                <p className="text-sm text-zinc-400 mt-1">{p.short}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Plane className="w-4 h-4" /> {p.flight}
                  </div>
                  <a
                    className="flex items-center gap-2 text-emerald-400 hover:underline"
                    href={p.hotelLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Hotel className="w-4 h-4" /> {p.hotel}
                  </a>
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Car className="w-4 h-4" /> {p.car}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={p.imageCar}
                    alt={p.car}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-xs uppercase text-zinc-500">
                      Стоимость с человека
                    </div>
                    <div className="text-2xl font-semibold text-white">
                      ${priceFmt.format(p.price)}
                    </div>
                  </div>
                  <a href={makeWALink(p)} target="_blank" rel="noreferrer">
                    <Button className="rounded-2xl">
                      Забронировать <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROGRAM (Page 3) */}
      <section id="program" className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://source.unsplash.com/2000x1200/?dubai,luxury,interior,night"
            alt="Lux ambience"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
            Программа тура
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <DayBlock
              day="День 1"
              title="Прилет и первые встречи"
              items={[
                {
                  time: "08:30",
                  icon: <Plane className="w-5 h-5" />,
                  text: "Встреча в аэропорту Дубая. ",
                },
                {
                  time: "09:30–11:30",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Лёгкий завтрак + отдых.",
                },
                {
                  time: "12:00–13:00",
                  icon: <Building2 className="w-5 h-5" />,
                  text: "Встреча с первым застройщиком.",
                },
                {
                  time: "13:00–14:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Обед в ресторане (Downtown / отель).",
                },
                {
                  time: "14:30–16:30",
                  icon: <Building2 className="w-5 h-5" />,
                  text: "Встреча со вторым застройщиком.",
                },
                {
                  time: "17:00",
                  icon: <Hotel className="w-5 h-5" />,
                  text: "Заселение в отель, отдых.",
                },
                {
                  time: "19:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Ужин + лёгкая консультация по итогам дня.",
                },
              ]}
            />
            <DayBlock
              day="День 2"
              title="Основная инвестиционная программа"
              items={[
                {
                  time: "08:00–09:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Завтрак.",
                },
                {
                  time: "09:30–11:30",
                  icon: <Building2 className="w-5 h-5" />,
                  text: "Встреча с третьим застройщиком.",
                },
                {
                  time: "12:00–14:00",
                  icon: <Building2 className="w-5 h-5" />,
                  text: "Встреча с четвёртым застройщиком.",
                },
                {
                  time: "14:00–15:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Обед (La Mer / JBR).",
                },
                {
                  time: "15:30–17:30",
                  icon: <Building2 className="w-5 h-5" />,
                  text: "Встреча с пятым застройщиком.",
                },
                {
                  time: "18:00",
                  icon: <CalendarRange className="w-5 h-5" />,
                  text: "Завершение делового дня.",
                },
                {
                  time: "19:00",
                  icon: <Wallet className="w-5 h-5" />,
                  text: "Ужин + лёгкая консультация по итогам дня.",
                },
              ]}
            />
            <DayBlock
              day="День 3"
              title="Отдых и финальное решение"
              items={[
                {
                  time: "08:00–09:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "Завтрак.",
                },
                {
                  time: "09:30–11:30",
                  icon: <Landmark className="w-5 h-5" />,
                  text: "Финальная встреча в офисе застройщика для внесения брони / первого взноса.",
                },
                {
                  time: "12:00",
                  icon: <Hotel className="w-5 h-5" />,
                  text: "Выезд из отеля (check-out).",
                },
                {
                  time: "12:30–14:00",
                  icon: <MapPin className="w-5 h-5" />,
                  text: "Прогулка по Downtown / Dubai Mall.",
                },
                {
                  time: "14:00–16:00",
                  icon: <Ship className="w-5 h-5" />,
                  text: "Морская прогулка на яхте (Marina → Palm → Burj Al Arab).",
                },
                {
                  time: "16:30–18:00",
                  icon: <Utensils className="w-5 h-5" />,
                  text: "At.mosphere, Burj Khalifa — ужин/обед на 148-м этаже.",
                },
                {
                  time: "21:00",
                  icon: <Plane className="w-5 h-5" />,
                  text: "Трансфер в аэропорт и вылет домой.",
                },
              ]}
            />
          </div>

          <div className="mt-10 p-6 md:p-8 rounded-3xl bg-emerald-600 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Компенсируем расходы тура при покупке недвижимости с нами
              </h3>
              <p className="text-white/90 mt-1">
                Просто выберите пакет — мы подготовим маршрут под ваши цели и
                бюджет.
              </p>
            </div>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="rounded-2xl">
                Обсудить детали
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              Готовы обсудить даты?
            </h2>
            <p className="mt-3 text-zinc-400">
              Напишите нам в WhatsApp — пришлём актуальные окна у застройщиков,
              поможем с выбором пакета и забронируем отель/перелёт.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/971524581858?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9A%D0%B0%D0%BA%D0%B8%D0%B5%20%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B8%D0%B5%20%D0%B4%D0%B0%D1%82%D1%8B%20%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%3F"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="rounded-2xl">Написать в WhatsApp</Button>
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                Лицензированное агентство в Дубае
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                Партнёрства с топ-девелоперами
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                Персональный маршрут под стратегию
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <img
                src="/hotels/enjoy.webp"
                alt="Decision makers enjoying the process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-sm text-zinc-400">
              Фотографии несут иллюстративный характер. Итоговый маршрут и
              сервис подбираются индивидуально.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Seafront Properties Invest Tour
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">
              Политика
            </a>
            <a className="hover:underline" href="#">
              Условия
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
