# Инструкции по настройке SEO

## Критически важно - замените домен!

В файлах есть плейсхолдеры `https://yourdomain.com` - их **ОБЯЗАТЕЛЬНО** нужно заменить на реальный домен сайта.

### Файлы для обновления:

1. **`index.html`** - замените все вхождения `yourdomain.com` на ваш реальный домен:
   - Open Graph URL и изображения
   - Twitter Cards изображения
   - Canonical URL
   - Hreflang URLs
   - Schema.org URLs

2. **`public/sitemap.xml`** - замените `yourdomain.com` на ваш домен

3. **`public/robots.txt`** - замените `yourdomain.com` на ваш домен

### Быстрый поиск и замена:
```bash
# Найдите все вхождения
grep -r "yourdomain.com" .

# Замените на ваш домен (пример)
sed -i 's/yourdomain\.com/your-actual-domain.com/g' index.html
sed -i 's/yourdomain\.com/your-actual-domain.com/g' public/sitemap.xml
sed -i 's/yourdomain\.com/your-actual-domain.com/g' public/robots.txt
```

## Настройка Google Analytics 4

1. Создайте аккаунт GA4 на https://analytics.google.com
2. Получите Measurement ID (формат: G-XXXXXXXXXX)
3. В `index.html` раскомментируйте блок Google Analytics
4. Замените `G-XXXXXXXXXX` на ваш Measurement ID

## Настройка Google Search Console

1. Зайдите на https://search.google.com/search-console
2. Добавьте ваш сайт
3. Выберите метод верификации (HTML tag)
4. Скопируйте verification code
5. В `index.html` раскомментируйте и добавьте:
   ```html
   <meta name="google-site-verification" content="ВАШ_КОД_ВЕРИФИКАЦИИ" />
   ```
6. После верификации добавьте sitemap: `https://yourdomain.com/sitemap.xml`

## Оптимизация изображений для Open Graph

Создайте изображения для социальных сетей:
- **OG Image**: 1200x630px, формат JPG или PNG
- **Twitter Image**: 1200x675px, формат JPG или PNG
- Сохраните в папку `public/` как `og-image.jpg` и `twitter-image.jpg`
- Обновите пути в `index.html`

## Проверка SEO

После деплоя проверьте:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Вставьте URL вашего сайта
   - Проверьте что все Schema.org разметки валидны

2. **Google Search Console**:
   - Убедитесь что сайт проиндексирован
   - Проверьте что sitemap.xml добавлен и обработан
   - Мониторьте позиции по ключевым словам

3. **PageSpeed Insights**: https://pagespeed.web.dev/
   - Проверьте Core Web Vitals
   - Убедитесь что все метрики в зеленой зоне

4. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## Ключевые слова для отслеживания

Отслеживайте позиции по следующим запросам:

**Основные:**
- אימון מנטלי
- מאמן מנטלי
- NLP

**Нишевые:**
- אימון מנטלי לחיילים משוחררים
- אימון מנטלי להייטק
- תהליך אימון מנטלי

## Дополнительные рекомендации

1. **Регулярно обновляйте контент** - свежий контент улучшает ранжирование
2. **Собирайте больше отзывов** - добавляйте их в Schema.org разметку
3. **Мониторьте аналитику** - отслеживайте какие секции наиболее популярны
4. **Оптимизируйте на основе данных** - улучшайте то, что работает

## Важные замечания

- Все URL в Schema.org должны быть абсолютными (с https://)
- Изображения для OG должны быть доступны по указанным URL
- Регулярно обновляйте дату в sitemap.xml (lastmod)
- После изменений ждите 2-4 недели для индексации

