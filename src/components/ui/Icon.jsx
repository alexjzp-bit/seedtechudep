import {
  BadgeCheck,
  Box,
  Boxes,
  Building2,
  Calendar,
  CalendarClock,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Cpu,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Mic,
  Network,
  Presentation,
  Rocket,
  Search,
  Settings,
  Sprout,
  Target,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'

/**
 * Registro central de íconos: el contenido en `data/content.js` sólo guarda
 * el nombre del ícono y aquí se resuelve al componente de Lucide.
 */
const ICONS = {
  BadgeCheck,
  Box,
  Boxes,
  Building2,
  Calendar,
  CalendarClock,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Cpu,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Mic,
  Network,
  Presentation,
  Rocket,
  Search,
  Settings,
  Sprout,
  Target,
  Trophy,
  Users,
  Wrench,
}

export default function Icon({ name, className = 'size-6', strokeWidth = 1.75, ...props }) {
  const Cmp = ICONS[name] ?? Sprout
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" {...props} />
}
