interface ProgrammingIcon {
  name: string;
  src: string;
  alt: string;
}

const programmingIcons: ProgrammingIcon[] = [
  { name: 'JavaScript', src: '/assets/images/pro-lang-icon/java-script.png', alt: 'JavaScript' },
  { name: 'React', src: '/assets/images/pro-lang-icon/coding.png', alt: 'React' },
  { name: 'C#', src: '/assets/images/pro-lang-icon/c-.png', alt: 'C#' },
  { name: 'HTML5', src: '/assets/images/pro-lang-icon/html-5-logo.png', alt: 'HTML5' },
  { name: 'PHP', src: '/assets/images/pro-lang-icon/php-programming-language.png', alt: 'PHP' },
  { name: 'Python', src: '/assets/images/pro-lang-icon/python.png', alt: 'Python' },
  { name: 'MySQL', src: '/assets/images/pro-lang-icon/mysql.png', alt: 'MySQL' },
];

export function ProgrammingIcons() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll gap-8 whitespace-nowrap">
        {/* Create multiple copies for seamless infinite scroll */}
        {[...programmingIcons, ...programmingIcons, ...programmingIcons].map((icon, index) => (
          <div key={`${icon.name}-${index}`} className="flex-shrink-0 inline-flex items-center">
            <div className="relative w-12 h-12">
              <img
                src={icon.src}
                alt={icon.alt}
                width={48}
                height={48}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
