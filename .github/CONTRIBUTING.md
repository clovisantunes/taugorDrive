## Git

## Folder Structure (general) ##

```bash
      NATIVE_STRUCTURE
      ├── LICENSE
      ├── README.md - You are here!   
      ├── src/
      │   ├──screens/
      │   │   └──Page-example-one/ # Use uppercase letters in page names 
      │   │   │    └── page.tsx # Lower case file name  ex: page.tsx
      │   │   │    └── styles.ts # Style name must follow pattern styles.ts
      │   │   │    └── services # specific page service use lowercase first letter  
      │   │   │    │         └── EX: SignInService.ts 
      │   │   │    └── components # Specific componet's pages
      │   │   │             └── EX: SignInForm.tsx       
      │   │   └── page-example-two/ 
      │   │        └── page.tsx
      │   │        └── styles.module.ts
      │   │        └── services  
      │   │        │         └── EX: SignUpService.ts 
      │   │        └── components # Specific componet's pages
      │   │                └── EX: SignIpForm.tsx         
      │   ├── routes/
      │   │   └── AppRoutes.tsx
      │   │   │
      │   │   └── AuthStack/ # Use uppercase first letter
      │   │   │        └── index.ts # use lowercase first letter 
      │   │   └── AppStack
      │   │            └── index.ts 
      │   ├── styles/  # global styles
      │   │   └── themes.ts # Always use lowercase letters in styles
      │   ├── components/
      │   │   ├── UI/ # UI Items ex : Button, Inputs
      │   │   │   └── Item-example # Capital first letter ex : Button
      │   │   │   │             └──  index.tsx
      │   │   │   │             └──  styles.ts
      │   │   │   └── Item-example-two 
      │   │   │                     └──  index.tsx
      │   │   │                     └──  styles.ts
      │   │   └── Component-example/ # Uppercase component name
      │   │                      └── Text.tsx # Files with Uppercase first letter
      │   │                      └── styles.ts # Styles with lowercase first letter  
      │   ├── contexts/ # Api consumer handlers Ex: User information and authentication validation
      │   │     └── AuthContext.tsx # Files must start with uppercase letters
      │   ├── api/  # Project api
      │   │    └── api.ts
      │   ├── firebaseConfig.ts
```