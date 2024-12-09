Build Error
Next.js (15.0.4)
Failed to compile

./app/layout.js
Error:   × You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/
  │ docs/getting-started/react-essentials#the-use-client-directive
  │ 
  │ 
    ╭─[C:\Users\yink-work\Documents\100Days\pokedex\app2\app\layout.js:19:1]
 16 │   weight: "100 900",
 17 │ });
 18 │ 
 19 │ export const metadata = {
    ·              ────────
 20 │   title: "Pokémon Explorer",
 21 │   description: "Explore the world of Pokémon",
 21 │ };
    ╰────

Import trace for requested module:
./app/layout.js
This error occurred during the build process and can only be dismissed by fixing the error.

