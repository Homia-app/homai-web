"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy for Homia",
      effectiveDate: "Effective Date: March 26, 2026",
      intro: "Thank you for using Homia (“we”, “our”, or “us”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application available on Android and iOS platforms.",
      sections: [
        {
          title: "1. Information We Collect",
          paragraphs: [
            "We may collect the following types of information:"
          ],
          subsections: [
            {
              title: "a. Personal Data",
              items: ["Name", "Email address", "Account login credentials", "Profile information"]
            },
            {
              title: "b. Usage Data",
              items: ["Device information (model, OS version)", "IP address", "App interactions and usage behavior", "Crash logs and diagnostics"]
            },
            {
              title: "c. Location Data",
              items: ["Approximate or precise location (if enabled by the user)"]
            },
            {
              title: "d. Camera and Media Access",
              items: [
                "Camera access for augmented reality features (e.g., placing tiles, furniture)",
                "Photos or media if you choose to upload or capture content"
              ]
            },
            {
              title: "e. Social Login Data",
              items: [
                "If you sign in using Google or Facebook, we may receive:",
                "Name",
                "Email address",
                "Profile picture (if permitted)"
              ]
            }
          ]
        },
        {
          title: "2. How We Use Your Information",
          paragraphs: ["We use your information to:"],
          items: [
            "Provide and maintain the app functionality",
            "Enable augmented reality features",
            "Create and manage user accounts",
            "Improve performance and user experience",
            "Communicate with you (support, updates)",
            "Ensure security and prevent fraud"
          ]
        },
        {
          title: "3. Third-Party Services",
          paragraphs: [
            "We use third-party services that may collect information:",
            "Google Sign-In",
            "Facebook Sign-In",
            "Firebase (Analytics, Authentication, Storage, Database)",
            "These services have their own privacy policies and may process your data independently."
          ]
        },
        {
          title: "4. Legal Basis for Processing (GDPR)",
          paragraphs: [
            "If you are located in the European Economic Area (EEA), we process your data based on:",
            "Your consent",
            "Performance of a contract",
            "Legitimate interests (e.g., improving services)",
            "Legal obligations"
          ]
        },
        {
          title: "5. Data Sharing and Disclosure",
          paragraphs: [
            "We do not sell your personal data.",
            "We may share data with:",
            "Service providers (e.g., Firebase)",
            "Legal authorities if required by law",
            "In case of business transfer (e.g., merger, acquisition)"
          ]
        },
        {
          title: "6. Data Retention",
          paragraphs: [
            "We retain your data only as long as necessary for:",
            "Providing services",
            "Legal compliance",
            "Resolving disputes",
            "You may request deletion of your data at any time."
          ]
        },
        {
          title: "7. Your Rights (GDPR)",
          paragraphs: [
            "If you are in the EU, you have the right to:",
            "Access your personal data",
            "Correct inaccurate data",
            "Request deletion (“Right to be Forgotten”)",
            "Restrict or object to processing",
            "Data portability"
          ],
          footerText: (
            <span>
              To exercise your rights, contact us at:{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        },
        {
          title: "8. Security",
          paragraphs: [
            "We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the internet is 100% secure."
          ]
        },
        {
          title: "9. Children’s Privacy",
          paragraphs: [
            "Homia is not intended for children under 13. We do not knowingly collect data from children."
          ]
        },
        {
          title: "10. Changes to This Privacy Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Updates will be posted with a revised “Effective Date”."
          ]
        },
        {
          title: "11. Contact Us",
          paragraphs: [
            "If you have any questions or requests regarding this Privacy Policy, contact us at:"
          ],
          footerText: (
            <span>
              Email:{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        }
      ],
      consentText: "By using Homia, you agree to this Privacy Policy."
    },
    ar: {
      title: "سياسة الخصوصية لتطبيق هوميا (Homia)",
      effectiveDate: "تاريخ النفاذ: ٢٦ مارس ٢٠٢٦",
      intro: "نشكرك على استخدام تطبيق هوميا («نحن» أو «ضمير المتكلم» أو «لنا»). توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عندما تستخدم تطبيق الهاتف المحمول الخاص بنا والمتوفر على منصتي أندرويد و iOS.",
      sections: [
        {
          title: "١. المعلومات التي نجمعها",
          paragraphs: [
            "قد نقوم بجمع أنواع المعلومات التالية:"
          ],
          subsections: [
            {
              title: "أ. البيانات الشخصية",
              items: ["الاسم", "عنوان البريد الإلكتروني", "بيانات اعتماد تسجيل الدخول إلى الحساب", "معلومات الملف الشخصي"]
            },
            {
              title: "ب. بيانات الاستخدام",
              items: ["معلومات الجهاز (الطراز، إصدار نظام التشغيل)", "عنوان IP", "التفاعل مع التطبيق وسلوك الاستخدام", "سجلات الأعطال والتشخيص"]
            },
            {
              title: "ج. بيانات الموقع",
              items: ["الموقع التقريبي أو الدقيق (إذا تم تفعيله من قبل المستخدم)"]
            },
            {
              title: "د. الوصول إلى الكاميرا والوسائط",
              items: [
                "الوصول إلى الكاميرا لميزات الواقع المعزز (على سبيل المثال، وضع البلاط، الأثاث)",
                "الصور أو الوسائط إذا اخترت تحميل المحتوى أو التقاطه"
              ]
            },
            {
              title: "هـ. بيانات تسجيل الدخول الاجتماعي",
              items: [
                "إذا قمت بتسجيل الدخول باستخدام Google أو Facebook، فقد نتلقى:",
                "الاسم",
                "عنوان البريد الإلكتروني",
                "صورة الملف الشخصي (إذا كان مسموحًا بها)"
              ]
            }
          ]
        },
        {
          title: "٢. كيف نستخدم معلوماتك",
          paragraphs: ["نحن نستخدم معلوماتك من أجل:"],
          items: [
            "تقديم وظائف التطبيق وصيانتها",
            "تمكين ميزات الواقع المعزز",
            "إنشاء حسابات المستخدمين وإدارتها",
            "تحسين الأداء وتجربة المستخدم",
            "التواصل معك (الدعم، التحديثات)",
            "ضمان الأمن ومنع الاحتيال"
          ]
        },
        {
          title: "٣. خدمات الطرف الثالث",
          paragraphs: [
            "نحن نستخدم خدمات طرف ثالث قد تجمع معلومات:",
            "تسجيل الدخول باستخدام Google (Google Sign-In)",
            "تسجيل الدخول باستخدام فيسبوك (Facebook Sign-In)",
            "فايربيس (التحليلات، المصادقة، التخزين، قاعدة البيانات)",
            "تمتلك هذه الخدمات سياسات الخصوصية الخاصة بها وقد تعالج بياناتك بشكل مستقل."
          ]
        },
        {
          title: "٤. الأساس القانوني للمعالجة (GDPR)",
          paragraphs: [
            "إذا كنت مقيمًا في المنطقة الاقتصادية الأوروبية (EEA)، فإننا نعالج بياناتك بناءً على:",
            "موافقتك الشخصية",
            "تنفيذ العقد المبرم",
            "المصالح المشروعة (مثل تحسين الخدمات)",
            "الالتزامات القانونية المفروضة"
          ]
        },
        {
          title: "٥. مشاركة البيانات والكشف عنها",
          paragraphs: [
            "نحن لا نبيع بياناتك الشخصية أبدًا.",
            "قد نشارك البيانات مع:",
            "مقدمي الخدمات (مثل Firebase)",
            "السلطات القانونية إذا تطلب القانون ذلك",
            "في حالة نقل الأعمال (مثل الاندماج أو الاستحواذ)"
          ]
        },
        {
          title: "٦. الاحتفاظ بالبيانات",
          paragraphs: [
            "نحن نحتفظ ببياناتك فقط للفترة اللازمة لـ:",
            "تقديم الخدمات وتسييرها",
            "الامتثال للالتزامات القانونية",
            "تسوية النزاعات والقضايا",
            "يمكنك طلب حذف بياناتك الشخصية في أي وقت."
          ]
        },
        {
          title: "٧. حقوقك القانونية (GDPR)",
          paragraphs: [
            "إذا كنت في الاتحاد الأوروبي، فلديك الحق في:",
            "الوصول إلى بياناتك الشخصية",
            "تصحيح البيانات غير الدقيقة",
            "طلب حذف البيانات («الحق في النسيان»)",
            "تقييد المعالجة أو الاعتراض عليها",
            "نقل البيانات الشخصية"
          ],
          footerText: (
            <span>
              لممارسة حقوقك، اتصل بنا على:{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        },
        {
          title: "٨. الأمن وحماية البيانات",
          paragraphs: [
            "نحن ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة ١٠٠٪."
          ]
        },
        {
          title: "٩. خصوصية الأطفال",
          paragraphs: [
            "تطبيق هوميا غير مخصص للأطفال دون سن ١٣ عامًا. ونحن لا نجمع بيانات من الأطفال عن علم."
          ]
        },
        {
          title: "١٠. التغييرات على سياسة الخصوصية",
          paragraphs: [
            "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تحديثات مع تعديل «تاريخ النفاذ» في الأعلى."
          ]
        },
        {
          title: "١١. اتصل بنا",
          paragraphs: [
            "إذا كانت لديك أي أسئلة أو طلبات بخصوص سياسة الخصوصية هذه، يمكنك الاتصال بنا على:"
          ],
          footerText: (
            <span>
              البريد الإلكتروني:{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        }
      ],
      consentText: "باستخدامك لتطبيق هوميا، فإنك توافق على سياسة الخصوصية هذه."
    },
    fr: {
      title: "Politique de Confidentialité de Homia",
      effectiveDate: "Date d'effet : 26 mars 2026",
      intro: "Merci d'utiliser Homia (« nous », « notre » ou « nos »). Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile disponible sur les plateformes Android et iOS.",
      sections: [
        {
          title: "1. Données que nous collectons",
          paragraphs: [
            "Nous pouvons collecter les types d'informations suivants :"
          ],
          subsections: [
            {
              title: "a. Données personnelles",
              items: ["Nom", "Adresse e-mail", "Identifiants de connexion au compte", "Informations de profil"]
            },
            {
              title: "b. Données d'utilisation",
              items: ["Informations sur l'appareil (modèle, version du système d'exploitation)", "Adresse IP", "Interactions avec l'application et comportement d'utilisation", "Rapports de crash et diagnostics"]
            },
            {
              title: "c. Données de localisation",
              items: ["Localisation approximative ou précise (si activée par l'utilisateur)"]
            },
            {
              title: "d. Accès à l'appareil photo et aux médias",
              items: [
                "Accès à l'appareil photo pour les fonctionnalités de réalité augmentée (ex. placement de carreaux, meubles)",
                "Photos ou médias si vous choisissez de télécharger ou capturer du contenu"
              ]
            },
            {
              title: "e. Données de connexion sociale",
              items: [
                "Si vous vous connectez via Google ou Facebook, nous pouvons recevoir :",
                "Nom",
                "Adresse e-mail",
                "Photo de profil (si autorisée)"
              ]
            }
          ]
        },
        {
          title: "2. Comment nous utilisons vos informations",
          paragraphs: ["Nous utilisons vos informations pour :"],
          items: [
            "Fournir et maintenir les fonctionnalités de l'application",
            "Activer les fonctionnalités de réalité augmentée",
            "Créer et gérer les comptes utilisateurs",
            "Améliorer les performances et l'expérience utilisateur",
            "Communiquer avec vous (support, mises à jour)",
            "Assurer la sécurité et prévenir la fraude"
          ]
        },
        {
          title: "3. Services tiers",
          paragraphs: [
            "Nous utilisons des services tiers qui peuvent collecter des informations :",
            "Connexion Google (Google Sign-In)",
            "Connexion Facebook (Facebook Sign-In)",
            "Firebase (Analytics, Authentification, Stockage, Base de données)",
            "Ces services ont leurs propres politiques de confidentialité et peuvent traiter vos données de manière indépendante."
          ]
        },
        {
          title: "4. Base juridique du traitement (RGPD)",
          paragraphs: [
            "Si vous êtes situé dans l'Espace Économique Européen (EEE), nous traitons vos données sur la base de :",
            "Votre consentement",
            "L'exécution d'un contrat",
            "Des intérêts légitimes (ex. amélioration des services)",
            "Des obligations légales"
          ]
        },
        {
          title: "5. Partage et divulgation des données",
          paragraphs: [
            "Nous ne vendons pas vos données personnelles.",
            "Nous pouvons partager des données avec :",
            "Des prestataires de services (ex. Firebase)",
            "Des autorités légales si la loi l'exige",
            "En cas de transfert d'activité (ex. fusion, acquisition)"
          ]
        },
        {
          title: "6. Conservation des données",
          paragraphs: [
            "Nous ne conservons vos données que le temps nécessaire pour :",
            "Fournir les services",
            "Se conformer à la loi",
            "Résoudre les litiges",
            "Vous pouvez demander la suppression de vos données à tout moment."
          ]
        },
        {
          title: "7. Vos droits (RGPD)",
          paragraphs: [
            "Si vous êtes dans l'Union Européenne, vous avez le droit de :",
            "Accéder à vos données personnelles",
            "Corriger les données inexactes",
            "Demander la suppression (« Droit à l'oubli »)",
            "Restreindre ou s'opposer au traitement",
            "Portabilité des données"
          ],
          footerText: (
            <span>
              Pour exercer vos droits, contactez-nous à :{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        },
        {
          title: "8. Sécurité",
          paragraphs: [
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données. Cependant, aucune méthode de transmission sur Internet n'est sûre à 100 %."
          ]
        },
        {
          title: "9. Vie privée des enfants",
          paragraphs: [
            "Homia n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données auprès d'enfants."
          ]
        },
        {
          title: "10. Modifications de cette politique de confidentialité",
          paragraphs: [
            "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les mises à jour seront publiées avec une « Date d'effet » révisée."
          ]
        },
        {
          title: "11. Nous contacter",
          paragraphs: [
            "Si vous avez des questions ou des demandes concernant cette politique de confidentialité, contactez-nous à :"
          ],
          footerText: (
            <span>
              E-mail :{" "}
              <a href="mailto:contact@homia-app.com" className="text-brand hover:underline font-semibold">
                contact@homia-app.com
              </a>
            </span>
          )
        }
      ],
      consentText: "En utilisant Homia, vous acceptez cette politique de confidentialité."
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen flex flex-col bg-bg-soft antialiased">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Document Content */}
      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-surface-soft shadow-[0_4px_24px_rgba(15,23,42,0.02)]">
            
            {/* Header info */}
            <div className="border-b border-surface-soft pb-8 mb-10 text-start">
              <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                {currentContent.title}
              </h1>
              <p className="text-sm font-semibold text-brand tracking-wide">
                {currentContent.effectiveDate}
              </p>
            </div>

            {/* Intro paragraph */}
            <div className="text-slate-600 leading-relaxed text-base mb-10 text-start whitespace-pre-line">
              {currentContent.intro}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {currentContent.sections.map((section, idx) => (
                <section key={idx} className="space-y-4 text-start">
                  <h2 className="font-heading text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Render subsections if any (mainly Section 1) */}
                  {"subsections" in section && section.subsections && (
                    <div className="mt-4 space-y-6 pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-surface-soft">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h3 className="font-sans font-semibold text-slate-800 text-sm">
                            {sub.title}
                          </h3>
                          <ul className="list-disc list-inside space-y-1.5 pl-2 rtl:pl-0 rtl:pr-2 text-slate-600 text-sm leading-relaxed">
                            {sub.items.map((item, iIdx) => (
                              <li key={iIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render flat list items if any (Section 2, 7, etc) */}
                  {"items" in section && section.items && (
                    <ul className="list-disc list-inside space-y-1.5 pl-4 rtl:pl-0 rtl:pr-4 text-slate-600 leading-relaxed">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Render explicit footer text if any */}
                  {"footerText" in section && section.footerText && (
                    <div className="text-slate-600 mt-2 text-sm leading-relaxed">
                      {section.footerText}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom consent text */}
            <div className="mt-16 pt-8 border-t border-surface-soft text-start">
              <p className="text-base font-semibold text-slate-900">
                {currentContent.consentText}
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
