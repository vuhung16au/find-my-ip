
### IP-Insight Application**

**Project Overview**
Create a professional, high-performance "What Is My IP" web application. The application should provide immediate network visibility (IPv4/IPv6) and serve as an educational hub for IP-related queries. The UI must be clean, modern, and optimized for a seamless Vercel deployment.

**Folder Structure**
Generate the project with the following organization:
*   `app/`: Next.js App Router files (`page.tsx`, `layout.tsx`, `globals.css`).
*   `components/`: Modular components (e.g., `IPDisplay.tsx`, `GeoDetails.tsx`, `FAQ.tsx`).
*   `docs/`: Markdown files containing detailed explanations of IP protocols.
*   `README.md`: Standard project overview and Bun-specific installation steps.
*   `quickstart.md`: A 2-minute guide for local setup and deployment.
*   `Makefile`: Include the following targets:
    *   `make run`: Execute `bun dev`
    *   `make build`: Execute `bun run build`
    *   `make vercel`: Execute `vercel --prod`

**Features**
1.  **Dual-Stack Detection:** Implement client-side logic (via `useEffect`) to fetch and display the user's **IPv4** and **IPv6** addresses. 
2.  **Geographic Metadata:** Display a detailed "Network Identity" card including:
    *   City: Sydney
    *   State/Region: New South Wales
    *   Country: Australia
    *   Postal Code: 2000
    *   Time Zone: UTC +11:00
    *   ISP: Telstra Limited
    *   ASN: 1221
3.  **On-Page Documentation & FAQ:** Integrate an interactive section directly on the main page covering:
    *   *How do I find my device’s IP address?*
    *   *Why is the location shown different?*
    *   *Why do I see both IPv4 and IPv6?*
    *   *Can someone find my exact home address using my IP address?*
    *   *Why Your IP Changes.*
4.  **Responsive UI:** Use Tailwind CSS for a mobile-friendly, card-based layout with a sleek Dark Mode aesthetic.

**Repository Description (Max 350 chars)**
> A streamlined Next.js & TypeScript IP discovery tool managed with Bun. It features real-time IPv4/IPv6 detection, detailed geographic metadata visualization, and a built-in educational FAQ. Designed for developers and power users, it includes a robust Makefile workflow and is pre-configured for instant deployment to Vercel.

**Techstack**
*   **Framework:** Next.js (App Router)
*   **Package Manager:** Bun
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Client-side only logic)
*   **Deployment:** Vercel.com

---

### **Implementation Tips for your Build**

*   **Public IP API:** Since you are keeping this **client-side only**, GitHub Copilot should use a service like `[https://api64.ipify.org?format=json](https://api64.ipify.org?format=json)` or `[https://ipapi.co/json/](https://ipapi.co/json/)`. These allow you to get the IP and the Geo-data (City, ISP, etc.) directly in the browser via `fetch`.
*   **IPv6 Availability:** Note that if a user's ISP or local network does not support IPv6, the app should gracefully display "Not Detected" rather than an error.
*   **Makefile Tip:** Ensure you run `bun add -g vercel` if you want the `make vercel` command to work globally, or add it to your `devDependencies`.

