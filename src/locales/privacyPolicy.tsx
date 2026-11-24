import React from "react";
import { SUPPORT_EMAIL } from "@/config/constants";

export const privacyPolicyContent = {
  en: {
    title: "Privacy Policy for Homlye & Homia Business",
    effectiveDate: "Effective Date: March 26, 2026",
    intro: "Thank you for using Homlye and Homia Business (“we”, “our”, or “us”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications available on Android and iOS platforms.",
    sections: [
      {
        title: "1. Information We Collect",
        paragraphs: [
          "We may collect the following types of information:"
        ],
        subsections: [
          {
            title: "a. Personal & Order Data",
            items: ["Name", "Email address", "Phone number", "District / Wilaya and gender (if provided)", "Order and purchase request details", "Account login credentials and profile information"]
          },
          {
            title: "b. Merchant Store & Verification Data (Homia Business)",
            items: ["Store name, description, website/maps URL, and coordinates", "Store logo and official signature/stamp images", "Verification documents (National ID and Commercial Register)"]
          },
          {
            title: "c. Usage Data",
            items: ["Device information (model, OS version)", "IP address", "App interactions and usage behavior", "Crash logs and diagnostics"]
          },
          {
            title: "d. Location Data",
            items: ["Approximate or precise location (if enabled by the user to discover nearby stores)"]
          },
          {
            title: "e. Camera and Media Access",
            items: [
              "Camera access for augmented reality features (e.g., placing floor tiles, wall textures, and 3D furniture)",
              "Photos or media if you choose to upload profile images or merchant product photos"
            ]
          },
          {
            title: "f. Social Login Data",
            items: [
              "If you sign in using Google, Apple, or Facebook, we may receive:",
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
          "Provide and maintain Homlye and Homia Business functionality",
          "Enable augmented reality features and nearby store discovery",
          "Create and manage shopper and merchant accounts",
          "Process customer purchase requests and merchant invoices",
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
          "Apple Sign-In",
          "Facebook Sign-In",
          "Mapbox (interactive store map)",
          "Firebase (Analytics, Authentication, Storage, Firestore Database)",
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
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
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
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
            </a>
          </span>
        )
      }
    ],
    consentText: "By using Homia, you agree to this Privacy Policy."
  },
  ar: {
    title: "سياسة الخصوصية لتطبيقي هوملي وهوميا بزنس (Homlye & Homia Business)",
    effectiveDate: "تاريخ النفاذ: 26 مارس 2026",
    intro: "نشكرك على استخدام تطبيقي هوملي (Homlye) وهوميا بزنس (Homia Business) («نحن» أو «لنا»). توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند استخدام تطبيقات الهاتف المحمول الخاصة بنا على منصتي Android و iOS.",
    sections: [
      {
        title: "1. المعلومات التي نجمعها",
        paragraphs: [
          "قد نقوم بجمع أنواع المعلومات التالية:"
        ],
        subsections: [
          {
            title: "أ. البيانات الشخصية وبيانات الطلبات",
            items: ["الاسم", "عنوان البريد الإلكتروني", "رقم الهاتف", "الولاية / المنطقة والجنس (عند التقديم)", "تفاصيل طلبات الشراء", "بيانات اعتماد تسجيل الدخول ومعلومات الملف الشخصي"]
          },
          {
            title: "ب. بيانات المتجر والتوثيق (Homia Business)",
            items: ["اسم المتجر ووصفه ورابط الموقع/الخريطة والإحداثيات", "شعار المتجر وصورة التوقيع/الختم الرسمي", "وثائق التوثيق (بطاقة التعريف الوطنية والسجل التجاري)"]
          },
          {
            title: "ج. بيانات الاستخدام",
            items: ["معلومات الجهاز (الطراز، إصدار نظام التشغيل)", "عنوان IP", "التفاعل مع التطبيق وسلوك الاستخدام", "سجلات الأعطال والتشخيص"]
          },
          {
            title: "د. بيانات الموقع",
            items: ["الموقع التقريبي أو الدقيق (إذا تم تفعيله من قبل المستخدم لاكتشاف المتاجر القريبة)"]
          },
          {
            title: "هـ. الوصول إلى الكاميرا والوسائط",
            items: [
              "الوصول إلى الكاميرا لميزات الواقع المعزز (مثل وضع بلاط الأرضيات، خامات الجدران، والأثاث ثلاثي الأبعاد)",
              "الصور أو الوسائط إذا اخترت تحميل صورة الملف الشخصي أو صور المنتجات"
            ]
          },
          {
            title: "و. بيانات تسجيل الدخول الاجتماعي",
            items: [
              "إذا قمت بتسجيل الدخول باستخدام Google أو Apple أو Facebook، فقد نتلقى:",
              "الاسم",
              "عنوان البريد الإلكتروني",
              "صورة الملف الشخصي (إذا كان مسموحًا بها)"
            ]
          }
        ]
      },
      {
        title: "2. كيف نستخدم معلوماتك",
        paragraphs: ["نحن نستخدم معلوماتك من أجل:"],
        items: [
          "تقديم وظائف تطبيقي Homlye و Homia Business وصيانتها",
          "تمكين ميزات الواقع المعزز واكتشاف المتاجر القريبة",
          "إنشاء حسابات المتسوقين والتجار وإدارتها",
          "معالجة طلبات الشراء وفواتير التجار",
          "تحسين الأداء وتجربة المستخدم",
          "التواصل معك (الدعم، التحديثات)",
          "ضمان الأمن ومنع الاحتيال"
        ]
      },
      {
        title: "3. خدمات الطرف الثالث",
        paragraphs: [
          "نحن نستخدم خدمات طرف ثالث قد تجمع معلومات:",
          "تسجيل الدخول باستخدام Google (Google Sign-In)",
          "تسجيل الدخول باستخدام Apple (Apple Sign-In)",
          "تسجيل الدخول باستخدام فيسبوك (Facebook Sign-In)",
          "Mapbox (خريطة المتاجر التفاعلية)",
          "فايربيس (التحليلات، المصادقة، التخزين، قاعدة بيانات Firestore)",
          "تمتلك هذه الخدمات سياسات الخصوصية الخاصة بها وقد تعالج بياناتك بشكل مستقل."
        ]
      },
      {
        title: "4. الأساس القانوني للمعالجة (GDPR)",
        paragraphs: [
          "إذا كنت مقيمًا في المنطقة الاقتصادية الأوروبية (EEA)، فإننا نعالج بياناتك بناءً على:",
          "موافقتك الشخصية",
          "تنفيذ العقد المبرم",
          "المصالح المشروعة (مثل تحسين الخدمات)",
          "الالتزامات القانونية المفروضة"
        ]
      },
      {
        title: "5. مشاركة البيانات والكشف عنها",
        paragraphs: [
          "نحن لا نبيع بياناتك الشخصية أبدًا.",
          "قد نشارك البيانات مع:",
          "مقدمي الخدمات (مثل Firebase)",
          "السلطات القانونية إذا تطلب القانون ذلك",
          "في حالة نقل الأعمال (مثل الاندماج أو الاستحواذ)"
        ]
      },
      {
        title: "6. الاحتفاظ بالبيانات",
        paragraphs: [
          "نحن نحتفظ ببياناتك فقط للفترة اللازمة لـ:",
          "تقديم الخدمات وتسييرها",
          "الامتثال للالتزامات القانونية",
          "تسوية النزاعات والقضايا",
          "يمكنك طلب حذف بياناتك الشخصية في أي وقت."
        ]
      },
      {
        title: "7. حقوقك القانونية (GDPR)",
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
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
            </a>
          </span>
        )
      },
      {
        title: "8. الأمن وحماية البيانات",
        paragraphs: [
          "نحن ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%."
        ]
      },
      {
        title: "9. خصوصية الأطفال",
        paragraphs: [
          "تطبيق هوميا غير مخصص للأطفال دون سن 13 عامًا. ونحن لا نجمع بيانات من الأطفال عن علم."
        ]
      },
      {
        title: "10. التغييرات على سياسة الخصوصية",
        paragraphs: [
          "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تحديثات مع تعديل «تاريخ النفاذ» في الأعلى."
        ]
      },
      {
        title: "11. اتصل بنا",
        paragraphs: [
          "إذا كانت لديك أي أسئلة أو طلبات بخصوص سياسة الخصوصية هذه، يمكنك الاتصال بنا على:"
        ],
        footerText: (
          <span>
            البريد الإلكتروني:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
            </a>
          </span>
        )
      }
    ],
    consentText: "باستخدامك لتطبيق هوميا، فإنك توافق على سياسة الخصوصية هذه."
  },
  fr: {
    title: "Politique de Confidentialité de Homlye & Homia Business",
    effectiveDate: "Date d'effet : 26 mars 2026",
    intro: "Merci d'utiliser Homlye et Homia Business (« nous », « notre » ou « nos »). Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez nos applications mobiles disponibles sur Android et iOS.",
    sections: [
      {
        title: "1. Données que nous collectons",
        paragraphs: [
          "Nous pouvons collecter les types d'informations suivants :"
        ],
        subsections: [
          {
            title: "a. Données personnelles et de commande",
            items: ["Nom", "Adresse e-mail", "Numéro de téléphone", "Wilaya / quartier et genre (si fournis)", "Détails des commandes", "Identifiants de connexion et informations de profil"]
          },
          {
            title: "b. Données de boutique et vérification (Homia Business)",
            items: ["Nom du magasin, description, lien site web/Google Maps et coordonnées", "Logo du magasin et image de signature/cachet officiel", "Documents de vérification (pièce d'identité nationale et registre du commerce)"]
          },
          {
            title: "c. Données d'utilisation",
            items: ["Informations sur l'appareil (modèle, version du système d'exploitation)", "Adresse IP", "Interactions avec l'application et comportement d'utilisation", "Rapports de crash et diagnostics"]
          },
          {
            title: "d. Données de localisation",
            items: ["Localisation approximative ou précise (si activée par l'utilisateur pour découvrir les magasins proches)"]
          },
          {
            title: "e. Accès à l'appareil photo et aux médias",
            items: [
              "Accès à l'appareil photo pour la réalité augmentée (ex. placement de revêtements de sol, textures murales et meubles 3D)",
              "Photos ou médias si vous choisissez de télécharger une photo de profil ou des photos de produits"
            ]
          },
          {
            title: "f. Données de connexion sociale",
            items: [
              "Si vous vous connectez via Google, Apple ou Facebook, nous pouvons recevoir :",
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
          "Fournir et maintenir les fonctionnalités de Homlye et Homia Business",
          "Activer les fonctionnalités de réalité augmentée et la carte des magasins",
          "Créer et gérer les comptes acheteurs et commerçants",
          "Traiter les commandes clients et les factures des magasins",
          "Améliorer les performances et l'expérience utilisateur",
          "Communiquer avec vous (support, mises à jour)",
          "Assurer la sécurité et prévenir la fraude"
        ]
      },
      {
        title: "3. Services tiers",
        paragraphs: [
          "Nous utilisons des services tiers susceptibles de collecter des informations :",
          "Connexion Google (Google Sign-In)",
          "Connexion Apple (Apple Sign-In)",
          "Connexion Facebook (Facebook Sign-In)",
          "Mapbox (carte interactive des magasins)",
          "Firebase (Analytics, Authentification, Stockage, Base de données Firestore)",
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
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
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
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand hover:underline font-semibold">
              {SUPPORT_EMAIL}
            </a>
          </span>
        )
      }
    ],
    consentText: "En utilisant Homia, vous acceptez cette politique de confidentialité."
  }
};
