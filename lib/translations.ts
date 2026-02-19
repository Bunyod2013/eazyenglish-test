export type Language = "uz" | "en" | "ru";

export const languageLabels: Record<Language, string> = {
  uz: "O'zbek",
  en: "English",
  ru: "Русский",
};

type TranslationSet = {
  nav: {
    home: string;
    features: string;
    waitlist: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
    students: string;
    appStore: string;
    googlePlay: string;
  };
  exercise: {
    level: string;
    listen: string;
    skip: string;
    check: string;
    correct: string;
    incorrect: string;
    selectAnswer: string;
  };
  features: {
    heading: string;
    gamifiedTitle: string;
    gamifiedDesc: string;
    aiTitle: string;
    aiDesc: string;
    streakTitle: string;
    streakDesc: string;
  };
  progress: {
    heading: string;
    description: string;
    nextLevel: string;
  };
  leaderboard: {
    heading: string;
  };
  subscribe: {
    heading: string;
    description: string;
    placeholder: string;
    cta: string;
    privacy: string;
    counter: string;
    success: string;
    alreadyExists: string;
    invalidEmail: string;
  };
  footer: {
    copyright: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      features: "Imkoniyatlar",
      waitlist: "Kutish ro'yxati",
    },
    hero: {
      badge: "45M+ O'quvchilar",
      titleLine1: "Ingliz tilini",
      titleLine2: "o'yin orqali o'rganing",
      subtitle: "Bepul. Qiziqarli. Samarali. Kuniga 15 daqiqa",
      cta: "KUTISH RO'YXATIGA QO'SHILISH",
      students: "O'quvchilar",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    exercise: {
      level: "Level 5 - English",
      listen: "Tinglang",
      skip: "O'tkazib yuborish",
      check: "TEKSHIRISH",
      correct: "To'g'ri!",
      incorrect: "Noto'g'ri!",
      selectAnswer: "Javobni tanlang",
    },
    features: {
      heading: "Nima uchun EazyEnglish?",
      gamifiedTitle: "O'yinlashtirilgan darslar",
      gamifiedDesc:
        "Ball yig'ing, level ashing va do'stlaringiz bilan bellashing",
      aiTitle: "AI suhbatdosh",
      aiDesc: "Sun'iy intellekt bilan real suhbatlar qiling",
      streakTitle: "Kunlik streak",
      streakDesc: "Har kuni o'qib, motivatsiyani saqlang",
    },
    progress: {
      heading: "Yo'lingizni kuzatib boring",
      description:
        "Kunlik maqsadlarni bajaring va fluensingiz o'sishini ko'ring",
      nextLevel: "Keyingi daraja",
    },
    leaderboard: {
      heading: "Haftalik leaderboard",
    },
    subscribe: {
      heading: "Birinchi bo'lib sinab ko'ring!",
      description:
        "EazyEnglish hali tayyor emas. Lekin siz birinchilardan bo'lib sinab ko'rish imkoniyatiga ega bo'lishingiz mumkin.",
      placeholder: "Email manzilingiz",
      cta: "Kutish ro'yxatiga qo'shilish",
      privacy:
        "Emailingiz hech qachon tarqatilmaydi va takroriy kiritish bloklanadi",
      counter: "{count} kishi allaqachon ro'yxatdan o'tgan",
      success: "Tabriklaymiz! Siz ro'yxatga qo'shildingiz!",
      alreadyExists: "Bu email allaqachon ro'yxatda mavjud",
      invalidEmail: "Iltimos, to'g'ri email kiriting",
    },
    footer: {
      copyright:
        "© 2025 EazyEnglish. Ingliz tilini o'rganishning eng qiziqarli usuli",
    },
  },

  en: {
    nav: {
      home: "Home",
      features: "Features",
      waitlist: "Waitlist",
    },
    hero: {
      badge: "45M+ Students",
      titleLine1: "Learn English",
      titleLine2: "through games",
      subtitle: "Free. Fun. Effective. 15 minutes a day",
      cta: "JOIN THE WAITLIST",
      students: "Students",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    exercise: {
      level: "Level 5 - English",
      listen: "Listen",
      skip: "Skip",
      check: "CHECK",
      correct: "Correct!",
      incorrect: "Incorrect!",
      selectAnswer: "Select an answer",
    },
    features: {
      heading: "Why EazyEnglish?",
      gamifiedTitle: "Gamified lessons",
      gamifiedDesc: "Earn points, level up, and compete with friends",
      aiTitle: "AI companion",
      aiDesc: "Have real conversations with artificial intelligence",
      streakTitle: "Daily streak",
      streakDesc: "Study every day, stay motivated",
    },
    progress: {
      heading: "Track your progress",
      description: "Complete daily goals and watch your fluency grow",
      nextLevel: "Next level",
    },
    leaderboard: {
      heading: "Weekly leaderboard",
    },
    subscribe: {
      heading: "Be the first to try it!",
      description:
        "EazyEnglish isn't ready yet. But you can be among the first to try it out.",
      placeholder: "Your email address",
      cta: "Join the waitlist",
      privacy: "Your email will never be shared and duplicate entries are blocked",
      counter: "{count} people have already signed up",
      success: "Congratulations! You've been added to the waitlist!",
      alreadyExists: "This email is already on the waitlist",
      invalidEmail: "Please enter a valid email",
    },
    footer: {
      copyright: "© 2025 EazyEnglish. The most fun way to learn English",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      features: "Возможности",
      waitlist: "Лист ожидания",
    },
    hero: {
      badge: "45M+ Учеников",
      titleLine1: "Учите английский",
      titleLine2: "через игры",
      subtitle: "Бесплатно. Увлекательно. Эффективно. 15 минут в день",
      cta: "ЗАПИСАТЬСЯ В ЛИСТ ОЖИДАНИЯ",
      students: "Учеников",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    exercise: {
      level: "Уровень 5 - English",
      listen: "Слушайте",
      skip: "Пропустить",
      check: "ПРОВЕРИТЬ",
      correct: "Правильно!",
      incorrect: "Неправильно!",
      selectAnswer: "Выберите ответ",
    },
    features: {
      heading: "Почему EazyEnglish?",
      gamifiedTitle: "Игровые уроки",
      gamifiedDesc:
        "Зарабатывайте баллы, повышайте уровень и соревнуйтесь с друзьями",
      aiTitle: "AI собеседник",
      aiDesc: "Ведите реальные разговоры с искусственным интеллектом",
      streakTitle: "Ежедневная серия",
      streakDesc: "Занимайтесь каждый день, сохраняйте мотивацию",
    },
    progress: {
      heading: "Следите за прогрессом",
      description:
        "Выполняйте ежедневные цели и наблюдайте за ростом беглости",
      nextLevel: "Следующий уровень",
    },
    leaderboard: {
      heading: "Еженедельный рейтинг",
    },
    subscribe: {
      heading: "Будьте первыми!",
      description:
        "EazyEnglish ещё не готов. Но вы можете быть среди первых, кто его попробует.",
      placeholder: "Ваш email",
      cta: "Записаться в лист ожидания",
      privacy:
        "Ваш email никогда не будет передан третьим лицам, повторная запись блокируется",
      counter: "{count} человек уже записались",
      success: "Поздравляем! Вы добавлены в лист ожидания!",
      alreadyExists: "Этот email уже в листе ожидания",
      invalidEmail: "Пожалуйста, введите корректный email",
    },
    footer: {
      copyright:
        "© 2025 EazyEnglish. Самый увлекательный способ изучения английского",
    },
  },
};
