import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function FilmImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes,
}: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-ink-3", className)}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
