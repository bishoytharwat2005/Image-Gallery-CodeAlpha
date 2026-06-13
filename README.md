Premium Gallery
A modern, sleek image gallery website built with HTML, Tailwind CSS, and Vanilla JavaScript.
Key Features
Overall Design

The site uses a dark theme with gradients from dark gray to black, accented with purple highlights for a premium feel. It features Glassmorphism effects (frosted glass blur) in the header and the image popup via backdrop-blur.
Navigation Bar

A fixed, transparent header with a blur effect, containing nav links (Home, Gallery, Contact) for larger screens, plus a mobile hamburger menu that opens a full-screen overlay with a close button.
Hero Section

A bold headline with a short descriptive tagline introducing the gallery.
Image Cards Grid

Displays 20 images as cards in a responsive grid layout:

1 column on mobile
2 columns on tablet
3 columns on desktop

Each card includes:

Title
Short description
File size (placeholder data)
A "View" button to open the image

Hover effects include image zoom and a fade-in dark gradient overlay.
Lightbox/Popup Viewer

Clicking any image or "View" button opens a fullscreen lightbox with:

A large centered image
Previous/Next navigation arrows
A close button
Keyboard support (Escape to close, arrow keys to navigate)

Technologies Used

HTML5 for structure
Tailwind CSS (via CDN) for styling
HugeIcons for icons (menu, close, arrows)
Vanilla JavaScript for interactivity (mobile menu toggle, dynamic card generation, lightbox controls)
