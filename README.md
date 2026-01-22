src/
├── assets/          # Images (burgers, logos), polices, icônes
├── components/      # Composants réutilisables (Boutons, Cards, Inputs)
│   ├── ui/          # Petits composants de base (Button.tsx, Badge.tsx)
│   └── layout/      # Structure (Navbar.tsx, Footer.tsx)
├── features/        # Logique métier spécifique (ex: Menu, Cart, Auth)
├── pages/           # Tes pages principales (Home.tsx, Menu.tsx, Contact.tsx)
├── hooks/           # Tes hooks personnalisés (ex: useCart.ts)
├── services/        # Appels API (ex: fetchBurgers.ts)
├── types/           # Interfaces TypeScript (ex: burger.d.ts)
├── App.tsx          # Configuration des Routes
└── main.tsx         # Point d'entrée de l'application