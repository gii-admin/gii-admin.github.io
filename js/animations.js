import { animate, scroll } from 'https://esm.run/framer-motion';

export function initializeAnimations() {
    const sections = document.querySelectorAll('.animated-section');

    sections.forEach(section => {
        scroll(animate(section, { opacity: [0, 1], y: [20, 0] }), {
            target: section,
            offset: ["start end", "end end"],
        });
    });
}
