# دليل إنشاء صفحة جديدة — القاضي داتا فلو

يضمن هذا الدليل السريع والعملي إمكانية إنشاء أي صفحة جديدة من صفحات الموقع الـ 74 المطلوبة باستخدام نظام التصميم الموحد بسهولة وخلال دقائق معدودة، مع المحافظة على الهوية البصرية بنسبة 100%.

---

## 📝 الخطوة 1: الهيكل الأساسي للصفحة (Template)

قم بإنشاء ملف HTML جديد (مثلاً: `my-new-page.html`) وانسخ الهيكل الموحد التالي:

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <link rel="icon" type="image/png" href="images/logo-1.png" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>عنوان الصفحة الجديدة | القاضي داتا فلو</title>
  <meta name="description" content="وصف مناسب لمخرجات محركات البحث والـ SEO..." />

  <!-- الخطوط الرسمية الموحدة -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet" />

  <!-- مكتبة الأيقونات والستايل الرئيسي الموحد -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <link rel="stylesheet" href="css/style.css?v=1.2" />
</head>

<body>
  <!-- الهيدر الموحد (يمكن نسخه مباشرة من components/header.html) -->
  <!-- [INSERT HEADER HTML HERE] -->

  <main class="page-wrapper my-new-page">
    
    <!-- الهيرو الموحد للصفحة -->
    <header class="page-hero my-new-hero">
      <div class="container page-hero-inner">
        <div>
          <div class="page-kicker"><i class="fas fa-sparkles"></i> عنوان فرعي ترحيبي</div>
          <h1>عنوان الصفحة الرئيسي المثير للاهتمام</h1>
          <p class="page-hero-lead">الوصف التمهيدي الذي يشرح محتويات الصفحة للمستخدم...</p>
        </div>
        <aside class="hero-summary-card" aria-label="ملخص سريع">
          <!-- كارد الملخص الجانبي أو صورة توضيحية -->
          <h3>ملخص الصفحة</h3>
          <p>محتوى مختصر يصف الخدمة أو القسم الجديد...</p>
        </aside>
      </div>
    </header>

    <!-- غلاف المحتوى والسكاشن -->
    <div class="page-shell">
      
      <!-- 1. سكشن بمظهر البطاقة المضيئة -->
      <section id="section1" class="content-section">
        <p class="section-eyebrow">إجراءات سهلة</p>
        <h2>عنوان السكشن الأول المضيء</h2>
        <p class="guide-text">محتوى ونص السكشن وتفاصيله...</p>
      </section>

      <!-- 2. سكشن ممتد كامل العرض (بدون حواف مضيئة) -->
      <section id="section2" class="plain-section">
        <div class="container text-center">
          <p class="section-eyebrow">لماذا نحن؟</p>
          <h2>عنوان السكشن الممتد</h2>
          <!-- محتوى إضافي مثل شبكة بطاقات أو غيره -->
        </div>
      </section>

      <!-- 3. إدراج المكونات المشتركة عند الحاجة (مثال: CTA Box) -->
      <!-- [INSERT components/cta-box.html CONTENT HERE] -->

    </div>
  </main>

  <!-- الفوتر الموحد (يمكن نسخه مباشرة من components/footer.html) -->
  <!-- [INSERT FOOTER HTML HERE] -->

  <!-- جافاسكربت المشترك للتفاعلية -->
  <script src="script.js"></script>
</body>
</html>
```

---

## 🛠️ الخطوة 2: تخصيص محتوى الهيرو

* قم بتغيير الكلاسات المحددة بين أقواس مربعة `[page-specific-class]` لتناسب الصفحة الجديدة (مثلاً: `class="page-wrapper dubai-page"` و `class="page-hero dubai-hero"`).
* يمكنك إضافة أي تنسيقات صور خلفية خاصة بالهيرو في نهاية ملف `css/layout.css` أو استخدام الخلفية الافتراضية الأنيقة المدمجة تلقائياً.

---

## ⚡ الخطوة 3: تضمين المكونات المشتركة

* **نموذج التواصل:** انسخ محتوى الملف [contact-form.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/contact-form.html) وضعه قبل الفوتر مباشرة.
* **آراء العملاء:** انسخ محتوى [reviews-carousel.html](file:///Users/os/Downloads/AI%20project/القاضي%20جديد/components/reviews-carousel.html) وضعه داخل سكشن مخصص للآراء عند الحاجة.
* **الهيدر والفوتر:** تأكد من مطابقة وسوم الهيدر والفوتر في الصفحة الجديدة مع الملفات المعتمدة في مجلد `components/`.
