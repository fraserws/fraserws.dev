import { useEffect, useState } from 'preact/hooks';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const newScrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientColors = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ";

  return (
    <div class="fixed top-0 left-0 w-full h-2 z-50 overflow-hidden">
      <div
        class={`h-full ${gradientColors}`}
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
}