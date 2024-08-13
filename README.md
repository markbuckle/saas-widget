# SaaS App

## Build initial framework with Vite & React

Using the [Vite JS guide](https://vitejs.dev/guide/), create a Vite project by running the following in your terminal:

```pwsh
npm create vite@4.3.1 saas-app -- --template react
```
Choose react and javascript options

Go to the project folder that was created:
```pwsh
cd react
```
and then run:
```pwsh
npm install
```

To start the application, run:
```pwsh
npm run dev
```

## Create an Embeddable widget

### Install and integrate Tailwind

Using the [ShadnCn/Ui](https://ui.shadcn.com/docs/installation/vite) guide run:
```pwsh
npm install -D tailwindcss postcss autoprefixer
```
Initialize tailwind using:
```pwsh
npx tailwindcss init -p
```
Create a new file called jsconfig.json and copy and paste the tsconfig.json file from [ShadnCn/Ui Step 3](https://ui.shadcn.com/docs/installation/vite) 

Copy and paste the bottom 3 lines of code in step 5 into your vite.config.js file.

Run the shadcn-ui init command to setup your project:
```pwsh
npx shadcn-ui@latest init
```
To configure components.json, choose the following:
```pwsh
Would you like to use TypeScript (recommended)? **no** / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / **yes**
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / **yes** (no)
```
You can now start adding components to your project:
```pwsh
npx shadcn-ui@latest add button
```
Add a text area for the feedback message:
You can now start adding components to your project:
```pwsh
npx shadcn-ui@latest add textarea
```
The new button will go in the /src/components/ui folder. Add / import your Button into the App.jsx file.

Add a [label](https://ui.shadcn.com/docs/components/label) by running:
```pwsh
npx shadcn-ui@latest add label input
```

### Icons using Lucide

The [Lucide](https://lucide.dev/) library works with React and Tailwind, but we're going to keep it as light as possible in this project so we'll just use the svg's.

### Add a popover component

From [ShadCN](https://ui.shadcn.com/docs/components/popover) run:
```pwsh
npx shadcn-ui@latest add popover
```
### Add a Web component

In the /src folder create an index.jsx file.

Run:
```pwsh
npm run build
```

## Authentication with NextJS

### Install
Go to the [nextjs docs](https://nextjs.org/docs/getting-started/installation)
In the command prompt run:
```pwsh
npx create-next-app@latest
```
<img width=600px src="">

Open up the new saas-dashbaord folder in VS code 
Run:
```pwsh
npm run dev
```
Initialize [shadcn](https://ui.shadcn.com/docs/installation/next) and choose all the default options:
```pwsh
npx shadcn-ui@latest init
```
Add a button:
```pwsh
npx shadcn-ui@latest add button
```
Use the [clerk guide](https://clerk.com/docs/quickstarts/nextjs) for the next few steps:
Next install Clerk NextJS:
```pwsh
npm install @clerk/nextjs
```
Add Middleware to your app (Step 3)

Create an .env.local file and include the files include the keys shown the https://clerk.com/docs/quickstarts/nextjs documentation

Create a [Clerk account](https://dashboard.clerk.com/sign-up?_gl=1*u7kgs3*_gcl_au*MTE3OTk4MTE0MC4xNzIzMTIwMjA5*_ga*MTIyMjUwNjA4Ny4xNzIzMTIwMjA5*_ga_1WMF5X234K*MTcyMzEyNTc1NS4yLjEuMTcyMzEyNTc1Ni4wLjAuMA..) to get your .env.local values.

Add ClerkProvider to your app

Add a [Dialog component](https://ui.shadcn.com/docs/components/dialog) using these steps.

Install [Lucide React](https://lucide.dev/guide/installation)
```pwsh
npm install lucide-react
```

## Database Setup with Supabase, Drizzle and PostgresSQL

Install [Supabase dependencies](https://orm.drizzle.team/docs/get-started-postgresql#supabase):
```pwsh
npm i drizzle-orm postgres
```
If the React versions conflict try running:
```pwsh
npm i react@latest react-dom@latest
```
And then run this again:
```pwsh
npm i drizzle-orm postgres
```
Install Drizzle dependencies:
```pwsh
npm i -D drizzle-kit
```
Create a new folder in your root directory called /db and then a new file called schema.ts.

Create your models. Copy and paste the code from [Step 2](https://orm.drizzle.team/docs/get-started-postgresql#supabase). Make appropriate edits to the code for your specific database.

Make your first Query. Copy and paste the code from step 3. Again make appropriate edits based on your speicific database.

Connection pooling (optional). Copy and paste the code from step 4. Again make appropriate edits based on your speicific database. 

install the drizzle kit: 
```pwsh
npm i -D drizzle-kit
```

Create a drizzle.config.ts file.

Add the following files to your packgae.json scripts:
```json
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
```

Create a new [supabase project](https://supabase.com/dashboard/projects)

Run the migration:
```pwsh
npm run db:migrate
```
Update page.tsx and schema.ts with User credentials

Run the push:
```pwsh
npm run db:push
```

If you receive a connection error it's likely because it is not reading the correct dbCredentials.

Run:
```pwsh
npm install dotenv
```

## Projects Page

## Feedback Table

