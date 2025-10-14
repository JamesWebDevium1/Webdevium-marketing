'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/seo';

interface TrackingButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
  eventName?: string;
  eventParams?: Record<string, any>;
}

export function TrackingButton({
  href,
  children,
  variant = 'default',
  size = 'default',
  className,
  eventName,
  eventParams,
}: TrackingButtonProps) {
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, eventParams);
    }
  };

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  );
}

