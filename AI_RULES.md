# AI Coding Rules & Tech Stack

This document outlines the core technologies, structural guidelines, and library rules to be followed when generating or modifying code for this application.

## Tech Stack

1. **React**: The core frontend library for building user interfaces.
2. **TypeScript**: Used for all logic and components to ensure type safety and better developer experience.
3. **Tailwind CSS**: The exclusive styling framework for layout, colors, spacing, and responsive design.
4. **shadcn/ui**: The primary UI component library, providing accessible, customizable base components.
5. **Radix UI**: The headless UI primitives that power the interactive parts of shadcn/ui.
6. **React Router**: Used for all client-side navigation and routing.
7. **Lucide React**: The standard library for all iconography.
8. **Vite**: The build tool and development server (standard for this environment).

## Library Usage Rules

* **Styling**: 
  * **Rule**: ALWAYS use Tailwind CSS utility classes. 
  * **Do Not**: Write custom `.css` or `.scss` files unless strictly necessary for complex, highly specific animations that Tailwind cannot handle.
* **UI Components**:
  * **Rule**: Prefer utilizing pre-built `shadcn/ui` components before building custom ones.
  * **Do Not**: Modify the core `shadcn/ui` component files directly. If modifications are required, build a wrapper or a new custom component.
* **Icons**:
  * **Rule**: ALWAYS use `lucide-react` for icons. 
  * **Do Not**: Install or use `react-icons`, `FontAwesome`, or raw SVG files unless a specific icon is entirely missing from Lucide.
* **Routing**:
  * **Rule**: Use `react-router-dom`. All primary application routes MUST be defined and maintained centrally in `src/App.tsx`.
* **File & Folder Structure**:
  * **Rule**: 
    * Route-level views go into `src/pages/` (e.g., `src/pages/Index.tsx`).
    * Reusable pieces go into `src/components/`.
    * Directory names must be exclusively lowercase.
  * **Do Not**: Mix pages and reusable components in the same folder.
* **Component Size & Architecture**:
  * **Rule**: Create a new file for *every* new component or hook, no matter how small. Aim for components to be 100 lines of code or less.
  * **Do Not**: Put multiple distinct components in a single file just because they are conceptually related.
* **Backend / Database**:
  * **Rule**: If authentication, real-time databases, or complex server-side logic are requested, prompt to integrate **Supabase** via the system commands rather than building a custom node server or fetching from unstructured mock APIs.