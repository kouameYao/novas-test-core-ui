# Novaspace - Système de paiement en ligne

Application web moderne de gestion de compte bancaire et de transactions, construite avec Next.js 14 et TypeScript.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Exécution](#exécution)
- [Structure du projet](#structure-du-projet)
- [Choix techniques et architecturaux](#choix-techniques-et-architecturaux)
- [Scripts disponibles](#scripts-disponibles)
- [Tests](#tests)
- [Déploiement](#déploiement)

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** >= 18.0.0
- **Yarn** >= 1.22.19 (gestionnaire de paquets)
- **Git** pour le contrôle de version

## Installation

1. **Cloner le dépôt** (si applicable) :

   ```bash
   git clone https://github.com/kouameYao/novas-test-core-ui.git
   cd novas-test-core-ui
   ```

2. **Installer les dépendances** :

   ```bash
   yarn install
   ```

3. **Configurer les variables d'environnement** :
   Créez un fichier `.env.local` à la racine du projet :
   ```env
   API_BASE_URL=http://localhost:8080
   ```

## ⚙️ Configuration

### Variables d'environnement

| Variable       | Description          | Valeur par défaut       |
| -------------- | -------------------- | ----------------------- |
| `API_BASE_URL` | URL de l'API backend | `http://localhost:8080` |

### Configuration Next.js

Le projet utilise une configuration Next.js optimisée avec :

- **React Strict Mode** activé
- **Optimisation d'images** avec support WebP/AVIF
- **Headers de sécurité** (X-Frame-Options, CSP, etc.)
- **Validation TypeScript et ESLint** en production

## Exécution

### Mode développement

Lancez le serveur de développement :

```bash
yarn dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Mode production

1. **Construire l'application** :

   ```bash
   yarn build
   ```

2. **Démarrer le serveur de production** :
   ```bash
   yarn start
   ```

### Linting et formatage

```bash
# Vérifier le code
yarn lint

# Formater le code
yarn format
```

## 🏗️ Choix techniques et architecturaux

### Framework et outils principaux

#### **Next.js 14 (App Router)**

- **Pourquoi** : Framework React moderne avec Server Components, routing intégré, et optimisations automatiques
- **Avantages** :
  - Server-Side Rendering (SSR) et Static Site Generation (SSG)
  - API Routes pour proxy backend (résolution CORS)
  - Optimisation automatique des images et assets
  - Support TypeScript natif

#### **TypeScript**

- **Pourquoi** : Typage statique pour réduire les erreurs et améliorer la maintenabilité
- **Configuration** : Mode strict activé avec validation en production

#### **Tailwind CSS 4**

- **Pourquoi** : Framework CSS utilitaire pour un développement rapide et cohérent
- **Avantages** :
  - Classes utilitaires réutilisables
  - Personnalisation via `tailwind.config.js`
  - Optimisation automatique en production

### Gestion d'état

#### **Zustand**

- **Pourquoi** : Solution légère et simple pour la gestion d'état globale
- **Utilisation** :
  - `auth-store.ts` : Gestion de l'authentification avec persistance localStorage
  - `ui-store.ts` : Gestion de l'état UI (thème, etc.)
- **Avantages** :
  - API simple et intuitive
  - Pas de boilerplate excessif
  - Support TypeScript natif
  - Middleware de persistance intégré

### Gestion des données

#### **TanStack Query (React Query)**

- **Pourquoi** : Solution robuste pour la gestion des requêtes serveur
- **Avantages** :
  - Cache automatique des données
  - Synchronisation et invalidation intelligente
  - Gestion des états de chargement et d'erreur
  - Optimistic updates pour une meilleure UX
- **Configuration** : Provider centralisé avec configuration personnalisée

### Formulaires

#### **React Hook Form + Zod**

- **Pourquoi** : Performance optimale et validation de schéma
- **Avantages** :
  - Validation côté client avec Zod
  - Performance (re-renders minimaux)
  - Intégration native avec TypeScript
  - Composants personnalisés (`RHFAmountInput`)

### UI Components

#### **Shadcn UI (Radix UI)**

- **Pourquoi** : Composants accessibles et personnalisables
- **Avantages** :
  - Composants non stylés (copie dans le projet)
  - Accessibilité (ARIA) intégrée
  - Personnalisation complète via Tailwind
  - Pas de dépendance externe lourde

### Internationalisation

#### **next-international**

- **Pourquoi** : Solution simple pour le multi-langue
- **Configuration** :
  - Locales supportées : `fr` (par défaut), `en`
  - URL mapping : `rewrite` strategy
  - Middleware pour la détection de locale

### Architecture

#### **Feature-Based Structure**

- **Organisation** : Code organisé par fonctionnalité plutôt que par type
- **Avantages** :
  - Scalabilité améliorée
  - Cohésion fonctionnelle
  - Facilite la maintenance et les tests
- **Structure** :

#### **API Proxy Pattern**

- **Pourquoi** : Résolution des problèmes CORS et centralisation des appels API
- **Implémentation** :
- Routes Next.js (`/api/*`) comme proxy
- Ajout automatique des tokens d'authentification
- Gestion centralisée des erreurs
- **Avantages** :
- Sécurité (tokens côté serveur)
- Pas de problèmes CORS
- Transformation de données centralisée

### Authentification

#### **JWT Token-based**

- **Stockage** : Zustand avec persistance localStorage
- **Protection des routes** :
- `AuthGuard` : Protège les routes privées
- `PublicGuard` : Redirige les utilisateurs authentifiés
- **Token injection** : Automatique via `getAuthToken()` dans les appels API

### Sécurité

#### **Headers de sécurité**

- `X-Frame-Options: DENY` : Protection contre le clickjacking
- `X-Content-Type-Options: nosniff` : Protection MIME type sniffing
- `Referrer-Policy` : Contrôle des référents
- `Permissions-Policy` : Restrictions des permissions navigateur

#### **Image Optimization**

- Configuration stricte des domaines autorisés
- Formats modernes (WebP, AVIF)
- Tailles responsives automatiques

### Performance

#### **Optimisations Next.js**

- Server Components par défaut
- Code splitting automatique
- Optimisation des images
- Compression activée

#### **React Query**

- Cache intelligent
- Refetching automatique
- Optimistic updates

### Tests

#### **Vitest + Testing Library**

- **Pourquoi** : Alternative moderne à Jest, plus rapide
- **Configuration** : Tests unitaires et d'intégration
- **Coverage** : Support intégré avec v8

### Qualité de code

#### **ESLint + Prettier**

- Configuration stricte pour maintenir la qualité
- Lint-staged pour vérifications pre-commit
- Formatage automatique

#### **Commitizen + Commitlint**

- Messages de commit standardisés
- Conventionnel commits pour le versioning automatique

## Scripts disponibles

| Script            | Description                                |
| ----------------- | ------------------------------------------ |
| `yarn dev`        | Lance le serveur de développement          |
| `yarn build`      | Construit l'application pour la production |
| `yarn start`      | Lance le serveur de production             |
| `yarn lint`       | Vérifie le code avec ESLint                |
| `yarn format`     | Formate le code avec Prettier              |
| `yarn commit`     | Crée un commit avec Commitizen             |
| `yarn test`       | Lance les tests                            |
| `yarn test:watch` | Lance les tests en mode watch              |

## Tests

### Exécuter les tests

```bash
# Tous les tests
yarn test

# Mode watch
yarn test:watch
```

### Structure des tests

Les tests sont organisés dans des dossiers `__tests__` à côté des fichiers sources :

utils/
**tests**/
format-date.test.ts
format-number.test.ts
parse-amount.test.ts

## Déploiement

### Préparation

1. **Variables d'environnement** :
   Configurez les variables nécessaires sur votre plateforme de déploiement

2. **Build** :

```bash
   yarn build
```

### Vercel (recommandé)

1. Connectez votre dépôt GitHub
2. Configurez les variables d'environnement
3. Déployez automatiquement à chaque push

## Notes supplémentaires

### Gestion des erreurs

- **Toast notifications** : Utilisation de `sonner` pour les notifications utilisateur
- **Error boundaries** : Gestion des erreurs React
- **API error handling** : Gestion centralisée dans les API routes

### Accessibilité

- Composants Radix UI avec support ARIA
- Navigation au clavier
- Contraste des couleurs conforme WCAG

### Performance monitoring

- **Vercel Analytics** : Intégré pour le suivi des performances
- **React Query DevTools** : Disponible en développement

## Contribution

1. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
2. Commitez vos changements (`yarn commit`)
3. Poussez vers la branche (`git push origin feature/AmazingFeature`)
4. Ouvrez une Pull Request

## 📄 Licence

Ce projet est privé et non licencié.

---

## 👥 Auteur

Par [kouameYao](https://github.com/kouameYao/).
