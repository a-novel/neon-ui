# Neon-UI

UI elements for the A-Novel apps.

## Installation

> ⚠️ **Warning**: Even though the package is public, GitHub registry requires you to have a Personal Access Token
> with `repo` and `read:packages` scopes to pull it in your project. See
> [this issue](https://github.com/orgs/community/discussions/23386#discussioncomment-3240193) for more information.

Create a `.npmrc` file in the root of your project if it doesn't exist, and make sure it contains the following:

```ini
@a-novel:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${YOUR_PERSONAL_ACCESS_TOKEN}
```

Then, install the package using pnpm:

```bash
pnpm add @a-novel/neon-ui
```

You also need to import material symbols in your app.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
```

## Usage

You may create a `mui.d.ts` file at the root of your project with the following content:

```ts
import type { NeonUIButtonVariants } from "@a-novel/neon-ui";
import "@mui/material";

declare module "@mui/material" {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ButtonPropsVariantOverrides extends NeonUIButtonVariants {}
}
```

Make sure this file is included in the `tsconfig.json`:

```json
{
  "include": [..., "mui.d.ts"]
}
```

Then, in your entry file.

```tsx
import { FC, ReactNode } from "react";

import { theme, init } from "@a-novel/neon-ui";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const App: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
```
