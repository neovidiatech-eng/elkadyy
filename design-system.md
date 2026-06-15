# نظام التصميم الموحد (Design System) — القاضي داتا فلو

هذا المستند يوفر مرجعاً كاملاً لنظام التصميم الموحد (Design System) المستخدم في مشروع القاضي داتا فلو. تم بناء هذا النظام انطلاقاً من التصميم المعتمد للصفحة الرئيسية (index.html) وتعميمه على كافة الصفحات لضمان اتساق الهوية البصرية وسهولة الصيانة.

---

## 🚀 ملاحظة هامة للأداء والإنتاج (Production Build Note)

> [!TIP]
> **توصية هامة للأداء في بيئة الإنتاج:**
> استيراد الملفات عبر `@import` في ملف `style.css` يسهل التطوير ويجعل النظام المعياري مريحاً، ولكنه يتسبب في طلبات متسلسلة (Sequential HTTP Requests) قد تؤثر على سرعة تحميل الصفحة في بيئة الإنتاج.
> **للنشر الفعلي:**
> 1. يفضل دمج جميع ملفات CSS (`variables.css`, `base.css`, `layout.css`, `components.css`) في ملف واحد مضغوط (Minified & Bundled) باستخدام أدوات البناء مثل Vite أو PostCSS أو حتى سكربت دمج بسيط.
> 2. أو ربط هذه الملفات مباشرة في وسم الـ `<head>` في ملفات الـ HTML باستخدام وسوم `<link>` منفصلة بدلاً من استدعائها عبر `@import` المتسلسل.

---

## 🎨 رموز التصميم (Design Tokens)

تم توحيد جميع الألوان، والخطوط، والمسافات، والظلال كمتغيرات CSS في الملف [variables.css](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/css/variables.css).

### 1. الألوان (Colors)
* **اللون الرئيسي (Primary):** `#ff8c00` (`--color-primary`) - يمثل لون البرتقالي الوهّاج للهوية البصرية.
* **اللون الرئيسي الفاتح (Primary Light):** `#ffa54d` (`--color-primary-light`) - للتأثيرات عند التمرير والتركيز.
* **الخلفية الداكنة (Dark Background):** `#050505` (`--color-bg-dark`) - الخلفية العامة لجميع الصفحات.
* **الخلفية الأكثر قتامة (Darker Background):** `#020202` (`--color-bg-darker`) - لخلفيات الهيرو والفوتر.
* **خلفية البطاقات (Card BG):** `rgba(20, 20, 20, 0.7)` (`--color-bg-card`) - زجاجية نصف شفافة.
* **الحدود الزجاجية (Glass Border):** `rgba(255, 255, 255, 0.08)` (`--color-glass-border`).

### 2. الخطوط (Typography)
* **نوع الخط (Font Family):** `"Almarai", sans-serif` (`--font-primary`).
* **أوزان الخطوط (Font Weights):**
  * خفيف (Light): `300`
  * عادي (Regular): `400`
  * عريض (Bold): `700`
  * عريض جداً (Extra Bold): `800`

### 3. المسافات والتباعد (Spacing)
* **تباعد السكاشن (Section Padding):** `clamp(4rem, 10vw, 8rem)` (`--space-section`) - متجاوب تلقائياً حسب حجم الشاشة.
* **تباعد الحاوية (Container Padding):** `clamp(1.25rem, 5vw, 2.5rem)` (`--space-container`).
* **عرض الحاوية الأقصى (Max Container Width):** `1500px` (`--space-container-width`).

### 4. الإضاءة والتوهج (Glow Effects)
* **توهج السكاشن (Glow Lines):** خط التوهج العلوي والسفلي المضيء المستخدم في المظهر الفاخر للسكاشن يتم استدعاؤه تلقائياً عند استخدام الكلاس `.content-section` أو `.home-glow-section`.

---

## 🧱 هيكلية الصفحات (Page Layout Architecture)

جميع الصفحات الداخلية تتبع هذا الهيكل الهرمي الموحد:

```html
<main class="page-wrapper [page-specific-class]">
  <!-- 1. الهيرو (Hero Section) -->
  <header class="page-hero [page-specific-hero]">
    <div class="container page-hero-inner">
      <div>
        <div class="page-kicker"><i class="fas fa-icon"></i> النص الترحيبي</div>
        <h1>عنوان الصفحة الرئيسي</h1>
        <p class="page-hero-lead">الوصف التمهيدي الطويل للصفحة...</p>
      </div>
      <aside class="hero-summary-card">
        <!-- الكارد التعريفي الجانبي في الهيرو -->
      </aside>
    </div>
  </header>

  <!-- 2. غلاف المحتوى (Content Shell) -->
  <div class="page-shell">
    <!-- السكاشن الداخلية هنا -->
  </div>
</main>
```

---

## 📦 أنواع السكاشن المعتمدة (Section Styles)

### 1. السكاشن ذات الحواف المضيئة (`.content-section`)
تُستخدم للسكاشن العادية داخل غلاف المحتوى. وتتميز بوجود خطوط توهج في الأعلى والأسفل وحدود برتقالية متناسقة تلقائياً:
```html
<section id="my-section" class="content-section">
  <p class="section-eyebrow">عنوان فرعي صغير</p>
  <h2>العنوان الرئيسي للسكشن</h2>
  <p class="guide-text">محتوى السكشن هنا...</p>
</section>
```

### 2. السكاشن كاملة العرض بدون حدود (`.plain-section`)
تُستخدم للسكاشن الممتدة لعرض الشاشة الكامل (مثل جداول المقارنة الكبيرة أو استعراض الدول) والتي لا تحتاج إلى حدود مضيئة:
```html
<section id="countries" class="plain-section">
  <div class="container">
    <h2>عنوان السكشن كامل العرض</h2>
    <!-- الشبكة أو المحتوى -->
  </div>
</section>
```

### 3. سكاشن التوهج القوي للموقع الرئيسي (`.home-glow-section`)
تتميز بحدود سميكة وتوهج داخلي وخارجي قوي، وتُستخدم خصيصاً في الصفحة الرئيسية لتقسيم السكاشن الكبرى.

---

## 💎 المكونات المشتركة (Shared Components)

تم استخراج المكونات المشتركة كملفات HTML مستقلة في المجلد `/components/` لتسهيل إدراجها وإعادة استخدامها:
1. **[reviews-carousel.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/reviews-carousel.html):** شريط آراء وتجارب العملاء المتحرك تلقائياً.
2. **[why-choose-us.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/why-choose-us.html):** شبكة بطاقات التميز والمميزات "لماذا تختار القاضي".
3. **[cta-box.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/cta-box.html):** صندوق الدعوة للإجراء المشترك (Call to Action) "معاك لحد ما تسافر".
4. **[header.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/header.html):** الهيدر الرئيسي والقوائم المنسدلة.
5. **[footer.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/footer.html):** الفوتر الموحد وشبكة روابطه.
6. **[contact-form.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/contact-form.html):** نموذج إرسال البيانات والتواصل.
