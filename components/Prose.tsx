import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ProseProps {
  children?: ReactNode;
  className?: string;
  html?: string;
}

export function Prose({ children, className, html }: ProseProps) {
  if (html) {
    return (
      <div
        className={cn(
          'prose prose-lg prose-blue max-w-none',
          'prose-headings:font-bold prose-headings:tracking-tight',
          'prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl',
          'prose-p:leading-relaxed prose-p:text-gray-600',
          'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline',
          'prose-strong:text-gray-900 prose-strong:font-semibold',
          'prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
          'prose-pre:bg-gray-900 prose-pre:text-gray-100',
          'prose-img:rounded-lg prose-img:shadow-lg',
          'prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:px-4',
          'prose-ul:list-disc prose-ol:list-decimal',
          'prose-li:text-gray-600',
          className
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className={cn(
        'prose prose-lg prose-blue max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl',
        'prose-p:leading-relaxed prose-p:text-gray-600',
        'prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline',
        'prose-strong:text-gray-900 prose-strong:font-semibold',
        className
      )}
    >
      {children}
    </div>
  );
}

