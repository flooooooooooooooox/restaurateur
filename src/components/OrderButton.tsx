import { siteConfig } from "@/lib/site-data";
import { BagIcon } from "./Icons";

/**
 * Commander en ligne. Contrairement au lien vers Maps, la commande n'est pas
 * précédée d'une confirmation : c'est l'action principale du site, on ne lui
 * ajoute pas un obstacle.
 */
export default function OrderButton({
  className = "btn btn-primary",
  label = "Commander en ligne",
  size = 17,
  source,
}: {
  className?: string;
  label?: string;
  size?: number;
  source: string;
}) {
  return (
    <a
      href={siteConfig.uberEatsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta={`order-${source}`}
    >
      <BagIcon size={size} />
      {label}
    </a>
  );
}
