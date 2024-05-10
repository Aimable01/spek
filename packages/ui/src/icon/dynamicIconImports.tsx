// @ts-nocheck
// This file is not meant to be type checked, it will hog the TS server

import dynamic from "next/dynamic";

export type IconName = keyof typeof dynamicIconImports;

const loading = () => (
  <div className="bg-primary-900 h-4 w-4 animate-pulse rounded-lg" />
);

export const dynamicIconImports = {
  "a-arrow-down": dynamic(
    () => import("lucide-react/dist/esm/icons/a-arrow-down"),
    { loading }
  ),
  "a-arrow-up": dynamic(
    () => import("lucide-react/dist/esm/icons/a-arrow-up"),
    { loading }
  ),
  "a-large-small": dynamic(
    () => import("lucide-react/dist/esm/icons/a-large-small"),
    { loading }
  ),
  accessibility: dynamic(
    () => import("lucide-react/dist/esm/icons/accessibility"),
    { loading }
  ),
  activity: dynamic(() => import("lucide-react/dist/esm/icons/activity"), {
    loading,
  }),
  "air-vent": dynamic(() => import("lucide-react/dist/esm/icons/air-vent"), {
    loading,
  }),
  airplay: dynamic(() => import("lucide-react/dist/esm/icons/airplay"), {
    loading,
  }),
  "alarm-clock-check": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-clock-check"),
    { loading }
  ),
  "alarm-clock-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-clock-minus"),
    { loading }
  ),
  "alarm-clock-off": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-clock-off"),
    { loading }
  ),
  "alarm-clock-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-clock-plus"),
    { loading }
  ),
  "alarm-clock": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-clock"),
    { loading }
  ),
  "alarm-smoke": dynamic(
    () => import("lucide-react/dist/esm/icons/alarm-smoke"),
    { loading }
  ),
  album: dynamic(() => import("lucide-react/dist/esm/icons/album"), {
    loading,
  }),
  "align-center-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/align-center-horizontal"),
    { loading }
  ),
  "align-center-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/align-center-vertical"),
    { loading }
  ),
  "align-center": dynamic(
    () => import("lucide-react/dist/esm/icons/align-center"),
    { loading }
  ),
  "align-end-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/align-end-horizontal"),
    { loading }
  ),
  "align-end-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/align-end-vertical"),
    { loading }
  ),
  "align-horizontal-distribute-center": () =>
    dynamic(
      () =>
        import(
          "lucide-react/dist/esm/icons/align-horizontal-distribute-center"
        ),
      { loading }
    ),
  "align-horizontal-distribute-end": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-horizontal-distribute-end"),
      { loading }
    ),
  "align-horizontal-distribute-start": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-horizontal-distribute-start"),
      { loading }
    ),
  "align-horizontal-justify-center": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-horizontal-justify-center"),
      { loading }
    ),
  "align-horizontal-justify-end": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-horizontal-justify-end"),
      { loading }
    ),
  "align-horizontal-justify-start": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-horizontal-justify-start"),
      { loading }
    ),
  "align-horizontal-space-around": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-horizontal-space-around"),
      { loading }
    ),
  "align-horizontal-space-between": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-horizontal-space-between"),
      { loading }
    ),
  "align-justify": dynamic(
    () => import("lucide-react/dist/esm/icons/align-justify"),
    { loading }
  ),
  "align-left": dynamic(
    () => import("lucide-react/dist/esm/icons/align-left"),
    { loading }
  ),
  "align-right": dynamic(
    () => import("lucide-react/dist/esm/icons/align-right"),
    { loading }
  ),
  "align-start-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/align-start-horizontal"),
    { loading }
  ),
  "align-start-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/align-start-vertical"),
    { loading }
  ),
  "align-vertical-distribute-center": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-vertical-distribute-center"),
      { loading }
    ),
  "align-vertical-distribute-end": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-vertical-distribute-end"),
      { loading }
    ),
  "align-vertical-distribute-start": () =>
    dynamic(
      () =>
        import("lucide-react/dist/esm/icons/align-vertical-distribute-start"),
      { loading }
    ),
  "align-vertical-justify-center": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-vertical-justify-center"),
      { loading }
    ),
  "align-vertical-justify-end": dynamic(
    () => import("lucide-react/dist/esm/icons/align-vertical-justify-end"),
    { loading }
  ),
  "align-vertical-justify-start": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-vertical-justify-start"),
      { loading }
    ),
  "align-vertical-space-around": dynamic(
    () => import("lucide-react/dist/esm/icons/align-vertical-space-around"),
    { loading }
  ),
  "align-vertical-space-between": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/align-vertical-space-between"),
      { loading }
    ),
  ambulance: dynamic(() => import("lucide-react/dist/esm/icons/ambulance"), {
    loading,
  }),
  ampersand: dynamic(() => import("lucide-react/dist/esm/icons/ampersand"), {
    loading,
  }),
  ampersands: dynamic(() => import("lucide-react/dist/esm/icons/ampersands"), {
    loading,
  }),
  anchor: dynamic(() => import("lucide-react/dist/esm/icons/anchor"), {
    loading,
  }),
  angry: dynamic(() => import("lucide-react/dist/esm/icons/angry"), {
    loading,
  }),
  annoyed: dynamic(() => import("lucide-react/dist/esm/icons/annoyed"), {
    loading,
  }),
  antenna: dynamic(() => import("lucide-react/dist/esm/icons/antenna"), {
    loading,
  }),
  anvil: dynamic(() => import("lucide-react/dist/esm/icons/anvil"), {
    loading,
  }),
  aperture: dynamic(() => import("lucide-react/dist/esm/icons/aperture"), {
    loading,
  }),
  "app-window-mac": dynamic(
    () => import("lucide-react/dist/esm/icons/app-window-mac"),
    { loading }
  ),
  "app-window": dynamic(
    () => import("lucide-react/dist/esm/icons/app-window"),
    { loading }
  ),
  apple: dynamic(() => import("lucide-react/dist/esm/icons/apple"), {
    loading,
  }),
  "archive-restore": dynamic(
    () => import("lucide-react/dist/esm/icons/archive-restore"),
    { loading }
  ),
  "archive-x": dynamic(() => import("lucide-react/dist/esm/icons/archive-x"), {
    loading,
  }),
  archive: dynamic(() => import("lucide-react/dist/esm/icons/archive"), {
    loading,
  }),
  "area-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/area-chart"),
    { loading }
  ),
  armchair: dynamic(() => import("lucide-react/dist/esm/icons/armchair"), {
    loading,
  }),
  "arrow-big-down-dash": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-down-dash"),
    { loading }
  ),
  "arrow-big-down": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-down"),
    { loading }
  ),
  "arrow-big-left-dash": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-left-dash"),
    { loading }
  ),
  "arrow-big-left": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-left"),
    { loading }
  ),
  "arrow-big-right-dash": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-right-dash"),
    { loading }
  ),
  "arrow-big-right": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-right"),
    { loading }
  ),
  "arrow-big-up-dash": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-up-dash"),
    { loading }
  ),
  "arrow-big-up": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-big-up"),
    { loading }
  ),
  "arrow-down-0-1": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-0-1"),
    { loading }
  ),
  "arrow-down-1-0": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-1-0"),
    { loading }
  ),
  "arrow-down-a-z": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-a-z"),
    { loading }
  ),
  "arrow-down-from-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-from-line"),
    { loading }
  ),
  "arrow-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-left"),
    { loading }
  ),
  "arrow-down-narrow-wide": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-narrow-wide"),
    { loading }
  ),
  "arrow-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-right"),
    { loading }
  ),
  "arrow-down-to-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-to-dot"),
    { loading }
  ),
  "arrow-down-to-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-to-line"),
    { loading }
  ),
  "arrow-down-up": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-up"),
    { loading }
  ),
  "arrow-down-wide-narrow": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-wide-narrow"),
    { loading }
  ),
  "arrow-down-z-a": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down-z-a"),
    { loading }
  ),
  "arrow-down": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-down"),
    { loading }
  ),
  "arrow-left-from-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-left-from-line"),
    { loading }
  ),
  "arrow-left-right": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-left-right"),
    { loading }
  ),
  "arrow-left-to-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-left-to-line"),
    { loading }
  ),
  "arrow-left": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-left"),
    { loading }
  ),
  "arrow-right-from-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-right-from-line"),
    { loading }
  ),
  "arrow-right-left": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-right-left"),
    { loading }
  ),
  "arrow-right-to-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-right-to-line"),
    { loading }
  ),
  "arrow-right": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-right"),
    { loading }
  ),
  "arrow-up-0-1": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-0-1"),
    { loading }
  ),
  "arrow-up-1-0": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-1-0"),
    { loading }
  ),
  "arrow-up-a-z": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-a-z"),
    { loading }
  ),
  "arrow-up-down": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-down"),
    { loading }
  ),
  "arrow-up-from-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-from-dot"),
    { loading }
  ),
  "arrow-up-from-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-from-line"),
    { loading }
  ),
  "arrow-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-left"),
    { loading }
  ),
  "arrow-up-narrow-wide": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-narrow-wide"),
    { loading }
  ),
  "arrow-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-right"),
    { loading }
  ),
  "arrow-up-to-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-to-line"),
    { loading }
  ),
  "arrow-up-wide-narrow": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-wide-narrow"),
    { loading }
  ),
  "arrow-up-z-a": dynamic(
    () => import("lucide-react/dist/esm/icons/arrow-up-z-a"),
    { loading }
  ),
  "arrow-up": dynamic(() => import("lucide-react/dist/esm/icons/arrow-up"), {
    loading,
  }),
  "arrows-up-from-line": dynamic(
    () => import("lucide-react/dist/esm/icons/arrows-up-from-line"),
    { loading }
  ),
  asterisk: dynamic(() => import("lucide-react/dist/esm/icons/asterisk"), {
    loading,
  }),
  "at-sign": dynamic(() => import("lucide-react/dist/esm/icons/at-sign"), {
    loading,
  }),
  atom: dynamic(() => import("lucide-react/dist/esm/icons/atom"), { loading }),
  "audio-lines": dynamic(
    () => import("lucide-react/dist/esm/icons/audio-lines"),
    { loading }
  ),
  "audio-waveform": dynamic(
    () => import("lucide-react/dist/esm/icons/audio-waveform"),
    { loading }
  ),
  award: dynamic(() => import("lucide-react/dist/esm/icons/award"), {
    loading,
  }),
  axe: dynamic(() => import("lucide-react/dist/esm/icons/axe"), { loading }),
  "axis-3d": dynamic(() => import("lucide-react/dist/esm/icons/axis-3d"), {
    loading,
  }),
  baby: dynamic(() => import("lucide-react/dist/esm/icons/baby"), { loading }),
  backpack: dynamic(() => import("lucide-react/dist/esm/icons/backpack"), {
    loading,
  }),
  "badge-alert": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-alert"),
    { loading }
  ),
  "badge-cent": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-cent"),
    { loading }
  ),
  "badge-check": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-check"),
    { loading }
  ),
  "badge-dollar-sign": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-dollar-sign"),
    { loading }
  ),
  "badge-euro": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-euro"),
    { loading }
  ),
  "badge-help": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-help"),
    { loading }
  ),
  "badge-indian-rupee": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-indian-rupee"),
    { loading }
  ),
  "badge-info": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-info"),
    { loading }
  ),
  "badge-japanese-yen": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-japanese-yen"),
    { loading }
  ),
  "badge-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-minus"),
    { loading }
  ),
  "badge-percent": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-percent"),
    { loading }
  ),
  "badge-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-plus"),
    { loading }
  ),
  "badge-pound-sterling": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-pound-sterling"),
    { loading }
  ),
  "badge-russian-ruble": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-russian-ruble"),
    { loading }
  ),
  "badge-swiss-franc": dynamic(
    () => import("lucide-react/dist/esm/icons/badge-swiss-franc"),
    { loading }
  ),
  "badge-x": dynamic(() => import("lucide-react/dist/esm/icons/badge-x"), {
    loading,
  }),
  badge: dynamic(() => import("lucide-react/dist/esm/icons/badge"), {
    loading,
  }),
  "baggage-claim": dynamic(
    () => import("lucide-react/dist/esm/icons/baggage-claim"),
    { loading }
  ),
  ban: dynamic(() => import("lucide-react/dist/esm/icons/ban"), { loading }),
  banana: dynamic(() => import("lucide-react/dist/esm/icons/banana"), {
    loading,
  }),
  banknote: dynamic(() => import("lucide-react/dist/esm/icons/banknote"), {
    loading,
  }),
  "bar-chart-2": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-2"),
    { loading }
  ),
  "bar-chart-3": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-3"),
    { loading }
  ),
  "bar-chart-4": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-4"),
    { loading }
  ),
  "bar-chart-big": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-big"),
    { loading }
  ),
  "bar-chart-horizontal-big": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-horizontal-big"),
    { loading }
  ),
  "bar-chart-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/bar-chart-horizontal"),
    { loading }
  ),
  "bar-chart": dynamic(() => import("lucide-react/dist/esm/icons/bar-chart"), {
    loading,
  }),
  barcode: dynamic(() => import("lucide-react/dist/esm/icons/barcode"), {
    loading,
  }),
  baseline: dynamic(() => import("lucide-react/dist/esm/icons/baseline"), {
    loading,
  }),
  bath: dynamic(() => import("lucide-react/dist/esm/icons/bath"), { loading }),
  "battery-charging": dynamic(
    () => import("lucide-react/dist/esm/icons/battery-charging"),
    { loading }
  ),
  "battery-full": dynamic(
    () => import("lucide-react/dist/esm/icons/battery-full"),
    { loading }
  ),
  "battery-low": dynamic(
    () => import("lucide-react/dist/esm/icons/battery-low"),
    { loading }
  ),
  "battery-medium": dynamic(
    () => import("lucide-react/dist/esm/icons/battery-medium"),
    { loading }
  ),
  "battery-warning": dynamic(
    () => import("lucide-react/dist/esm/icons/battery-warning"),
    { loading }
  ),
  battery: dynamic(() => import("lucide-react/dist/esm/icons/battery"), {
    loading,
  }),
  beaker: dynamic(() => import("lucide-react/dist/esm/icons/beaker"), {
    loading,
  }),
  "bean-off": dynamic(() => import("lucide-react/dist/esm/icons/bean-off"), {
    loading,
  }),
  bean: dynamic(() => import("lucide-react/dist/esm/icons/bean"), { loading }),
  "bed-double": dynamic(
    () => import("lucide-react/dist/esm/icons/bed-double"),
    { loading }
  ),
  "bed-single": dynamic(
    () => import("lucide-react/dist/esm/icons/bed-single"),
    { loading }
  ),
  bed: dynamic(() => import("lucide-react/dist/esm/icons/bed"), { loading }),
  beef: dynamic(() => import("lucide-react/dist/esm/icons/beef"), { loading }),
  "beer-off": dynamic(() => import("lucide-react/dist/esm/icons/beer-off"), {
    loading,
  }),
  beer: dynamic(() => import("lucide-react/dist/esm/icons/beer"), { loading }),
  "bell-dot": dynamic(() => import("lucide-react/dist/esm/icons/bell-dot"), {
    loading,
  }),
  "bell-electric": dynamic(
    () => import("lucide-react/dist/esm/icons/bell-electric"),
    { loading }
  ),
  "bell-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/bell-minus"),
    { loading }
  ),
  "bell-off": dynamic(() => import("lucide-react/dist/esm/icons/bell-off"), {
    loading,
  }),
  "bell-plus": dynamic(() => import("lucide-react/dist/esm/icons/bell-plus"), {
    loading,
  }),
  "bell-ring": dynamic(() => import("lucide-react/dist/esm/icons/bell-ring"), {
    loading,
  }),
  bell: dynamic(() => import("lucide-react/dist/esm/icons/bell"), { loading }),
  "between-horizontal-end": dynamic(
    () => import("lucide-react/dist/esm/icons/between-horizontal-end"),
    { loading }
  ),
  "between-horizontal-start": dynamic(
    () => import("lucide-react/dist/esm/icons/between-horizontal-start"),
    { loading }
  ),
  "between-vertical-end": dynamic(
    () => import("lucide-react/dist/esm/icons/between-vertical-end"),
    { loading }
  ),
  "between-vertical-start": dynamic(
    () => import("lucide-react/dist/esm/icons/between-vertical-start"),
    { loading }
  ),
  bike: dynamic(() => import("lucide-react/dist/esm/icons/bike"), { loading }),
  binary: dynamic(() => import("lucide-react/dist/esm/icons/binary"), {
    loading,
  }),
  biohazard: dynamic(() => import("lucide-react/dist/esm/icons/biohazard"), {
    loading,
  }),
  bird: dynamic(() => import("lucide-react/dist/esm/icons/bird"), { loading }),
  bitcoin: dynamic(() => import("lucide-react/dist/esm/icons/bitcoin"), {
    loading,
  }),
  blend: dynamic(() => import("lucide-react/dist/esm/icons/blend"), {
    loading,
  }),
  blinds: dynamic(() => import("lucide-react/dist/esm/icons/blinds"), {
    loading,
  }),
  blocks: dynamic(() => import("lucide-react/dist/esm/icons/blocks"), {
    loading,
  }),
  "bluetooth-connected": dynamic(
    () => import("lucide-react/dist/esm/icons/bluetooth-connected"),
    { loading }
  ),
  "bluetooth-off": dynamic(
    () => import("lucide-react/dist/esm/icons/bluetooth-off"),
    { loading }
  ),
  "bluetooth-searching": dynamic(
    () => import("lucide-react/dist/esm/icons/bluetooth-searching"),
    { loading }
  ),
  bluetooth: dynamic(() => import("lucide-react/dist/esm/icons/bluetooth"), {
    loading,
  }),
  bold: dynamic(() => import("lucide-react/dist/esm/icons/bold"), { loading }),
  bolt: dynamic(() => import("lucide-react/dist/esm/icons/bolt"), { loading }),
  bomb: dynamic(() => import("lucide-react/dist/esm/icons/bomb"), { loading }),
  bone: dynamic(() => import("lucide-react/dist/esm/icons/bone"), { loading }),
  "book-a": dynamic(() => import("lucide-react/dist/esm/icons/book-a"), {
    loading,
  }),
  "book-audio": dynamic(
    () => import("lucide-react/dist/esm/icons/book-audio"),
    { loading }
  ),
  "book-check": dynamic(
    () => import("lucide-react/dist/esm/icons/book-check"),
    { loading }
  ),
  "book-copy": dynamic(() => import("lucide-react/dist/esm/icons/book-copy"), {
    loading,
  }),
  "book-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/book-dashed"),
    { loading }
  ),
  "book-down": dynamic(() => import("lucide-react/dist/esm/icons/book-down"), {
    loading,
  }),
  "book-headphones": dynamic(
    () => import("lucide-react/dist/esm/icons/book-headphones"),
    { loading }
  ),
  "book-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/book-heart"),
    { loading }
  ),
  "book-image": dynamic(
    () => import("lucide-react/dist/esm/icons/book-image"),
    { loading }
  ),
  "book-key": dynamic(() => import("lucide-react/dist/esm/icons/book-key"), {
    loading,
  }),
  "book-lock": dynamic(() => import("lucide-react/dist/esm/icons/book-lock"), {
    loading,
  }),
  "book-marked": dynamic(
    () => import("lucide-react/dist/esm/icons/book-marked"),
    { loading }
  ),
  "book-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/book-minus"),
    { loading }
  ),
  "book-open-check": dynamic(
    () => import("lucide-react/dist/esm/icons/book-open-check"),
    { loading }
  ),
  "book-open-text": dynamic(
    () => import("lucide-react/dist/esm/icons/book-open-text"),
    { loading }
  ),
  "book-open": dynamic(() => import("lucide-react/dist/esm/icons/book-open"), {
    loading,
  }),
  "book-plus": dynamic(() => import("lucide-react/dist/esm/icons/book-plus"), {
    loading,
  }),
  "book-text": dynamic(() => import("lucide-react/dist/esm/icons/book-text"), {
    loading,
  }),
  "book-type": dynamic(() => import("lucide-react/dist/esm/icons/book-type"), {
    loading,
  }),
  "book-up-2": dynamic(() => import("lucide-react/dist/esm/icons/book-up-2"), {
    loading,
  }),
  "book-up": dynamic(() => import("lucide-react/dist/esm/icons/book-up"), {
    loading,
  }),
  "book-user": dynamic(() => import("lucide-react/dist/esm/icons/book-user"), {
    loading,
  }),
  "book-x": dynamic(() => import("lucide-react/dist/esm/icons/book-x"), {
    loading,
  }),
  book: dynamic(() => import("lucide-react/dist/esm/icons/book"), { loading }),
  "bookmark-check": dynamic(
    () => import("lucide-react/dist/esm/icons/bookmark-check"),
    { loading }
  ),
  "bookmark-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/bookmark-minus"),
    { loading }
  ),
  "bookmark-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/bookmark-plus"),
    { loading }
  ),
  "bookmark-x": dynamic(
    () => import("lucide-react/dist/esm/icons/bookmark-x"),
    { loading }
  ),
  bookmark: dynamic(() => import("lucide-react/dist/esm/icons/bookmark"), {
    loading,
  }),
  "boom-box": dynamic(() => import("lucide-react/dist/esm/icons/boom-box"), {
    loading,
  }),
  "bot-message-square": dynamic(
    () => import("lucide-react/dist/esm/icons/bot-message-square"),
    { loading }
  ),
  bot: dynamic(() => import("lucide-react/dist/esm/icons/bot"), { loading }),
  "box-select": dynamic(
    () => import("lucide-react/dist/esm/icons/box-select"),
    { loading }
  ),
  box: dynamic(() => import("lucide-react/dist/esm/icons/box"), { loading }),
  boxes: dynamic(() => import("lucide-react/dist/esm/icons/boxes"), {
    loading,
  }),
  braces: dynamic(() => import("lucide-react/dist/esm/icons/braces"), {
    loading,
  }),
  brackets: dynamic(() => import("lucide-react/dist/esm/icons/brackets"), {
    loading,
  }),
  "brain-circuit": dynamic(
    () => import("lucide-react/dist/esm/icons/brain-circuit"),
    { loading }
  ),
  "brain-cog": dynamic(() => import("lucide-react/dist/esm/icons/brain-cog"), {
    loading,
  }),
  brain: dynamic(() => import("lucide-react/dist/esm/icons/brain"), {
    loading,
  }),
  "brick-wall": dynamic(
    () => import("lucide-react/dist/esm/icons/brick-wall"),
    { loading }
  ),
  "briefcase-business": dynamic(
    () => import("lucide-react/dist/esm/icons/briefcase-business"),
    { loading }
  ),
  "briefcase-medical": dynamic(
    () => import("lucide-react/dist/esm/icons/briefcase-medical"),
    { loading }
  ),
  briefcase: dynamic(() => import("lucide-react/dist/esm/icons/briefcase"), {
    loading,
  }),
  "bring-to-front": dynamic(
    () => import("lucide-react/dist/esm/icons/bring-to-front"),
    { loading }
  ),
  brush: dynamic(() => import("lucide-react/dist/esm/icons/brush"), {
    loading,
  }),
  "bug-off": dynamic(() => import("lucide-react/dist/esm/icons/bug-off"), {
    loading,
  }),
  "bug-play": dynamic(() => import("lucide-react/dist/esm/icons/bug-play"), {
    loading,
  }),
  bug: dynamic(() => import("lucide-react/dist/esm/icons/bug"), { loading }),
  "building-2": dynamic(
    () => import("lucide-react/dist/esm/icons/building-2"),
    { loading }
  ),
  building: dynamic(() => import("lucide-react/dist/esm/icons/building"), {
    loading,
  }),
  "bus-front": dynamic(() => import("lucide-react/dist/esm/icons/bus-front"), {
    loading,
  }),
  bus: dynamic(() => import("lucide-react/dist/esm/icons/bus"), { loading }),
  "cable-car": dynamic(() => import("lucide-react/dist/esm/icons/cable-car"), {
    loading,
  }),
  cable: dynamic(() => import("lucide-react/dist/esm/icons/cable"), {
    loading,
  }),
  "cake-slice": dynamic(
    () => import("lucide-react/dist/esm/icons/cake-slice"),
    { loading }
  ),
  cake: dynamic(() => import("lucide-react/dist/esm/icons/cake"), { loading }),
  calculator: dynamic(() => import("lucide-react/dist/esm/icons/calculator"), {
    loading,
  }),
  "calendar-check-2": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-check-2"),
    { loading }
  ),
  "calendar-check": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-check"),
    { loading }
  ),
  "calendar-clock": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-clock"),
    { loading }
  ),
  "calendar-days": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-days"),
    { loading }
  ),
  "calendar-fold": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-fold"),
    { loading }
  ),
  "calendar-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-heart"),
    { loading }
  ),
  "calendar-minus-2": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-minus-2"),
    { loading }
  ),
  "calendar-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-minus"),
    { loading }
  ),
  "calendar-off": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-off"),
    { loading }
  ),
  "calendar-plus-2": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-plus-2"),
    { loading }
  ),
  "calendar-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-plus"),
    { loading }
  ),
  "calendar-range": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-range"),
    { loading }
  ),
  "calendar-search": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-search"),
    { loading }
  ),
  "calendar-x-2": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-x-2"),
    { loading }
  ),
  "calendar-x": dynamic(
    () => import("lucide-react/dist/esm/icons/calendar-x"),
    { loading }
  ),
  calendar: dynamic(() => import("lucide-react/dist/esm/icons/calendar"), {
    loading,
  }),
  "camera-off": dynamic(
    () => import("lucide-react/dist/esm/icons/camera-off"),
    { loading }
  ),
  camera: dynamic(() => import("lucide-react/dist/esm/icons/camera"), {
    loading,
  }),
  "candlestick-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/candlestick-chart"),
    { loading }
  ),
  "candy-cane": dynamic(
    () => import("lucide-react/dist/esm/icons/candy-cane"),
    { loading }
  ),
  "candy-off": dynamic(() => import("lucide-react/dist/esm/icons/candy-off"), {
    loading,
  }),
  candy: dynamic(() => import("lucide-react/dist/esm/icons/candy"), {
    loading,
  }),
  cannabis: dynamic(() => import("lucide-react/dist/esm/icons/cannabis"), {
    loading,
  }),
  "captions-off": dynamic(
    () => import("lucide-react/dist/esm/icons/captions-off"),
    { loading }
  ),
  captions: dynamic(() => import("lucide-react/dist/esm/icons/captions"), {
    loading,
  }),
  "car-front": dynamic(() => import("lucide-react/dist/esm/icons/car-front"), {
    loading,
  }),
  "car-taxi-front": dynamic(
    () => import("lucide-react/dist/esm/icons/car-taxi-front"),
    { loading }
  ),
  car: dynamic(() => import("lucide-react/dist/esm/icons/car"), { loading }),
  caravan: dynamic(() => import("lucide-react/dist/esm/icons/caravan"), {
    loading,
  }),
  carrot: dynamic(() => import("lucide-react/dist/esm/icons/carrot"), {
    loading,
  }),
  "case-lower": dynamic(
    () => import("lucide-react/dist/esm/icons/case-lower"),
    { loading }
  ),
  "case-sensitive": dynamic(
    () => import("lucide-react/dist/esm/icons/case-sensitive"),
    { loading }
  ),
  "case-upper": dynamic(
    () => import("lucide-react/dist/esm/icons/case-upper"),
    { loading }
  ),
  "cassette-tape": dynamic(
    () => import("lucide-react/dist/esm/icons/cassette-tape"),
    { loading }
  ),
  cast: dynamic(() => import("lucide-react/dist/esm/icons/cast"), { loading }),
  castle: dynamic(() => import("lucide-react/dist/esm/icons/castle"), {
    loading,
  }),
  cat: dynamic(() => import("lucide-react/dist/esm/icons/cat"), { loading }),
  cctv: dynamic(() => import("lucide-react/dist/esm/icons/cctv"), { loading }),
  "check-check": dynamic(
    () => import("lucide-react/dist/esm/icons/check-check"),
    { loading }
  ),
  check: dynamic(() => import("lucide-react/dist/esm/icons/check"), {
    loading,
  }),
  "chef-hat": dynamic(() => import("lucide-react/dist/esm/icons/chef-hat"), {
    loading,
  }),
  cherry: dynamic(() => import("lucide-react/dist/esm/icons/cherry"), {
    loading,
  }),
  "chevron-down": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-down"),
    { loading }
  ),
  "chevron-first": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-first"),
    { loading }
  ),
  "chevron-last": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-last"),
    { loading }
  ),
  "chevron-left": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-left"),
    { loading }
  ),
  "chevron-right": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-right"),
    { loading }
  ),
  "chevron-up": dynamic(
    () => import("lucide-react/dist/esm/icons/chevron-up"),
    { loading }
  ),
  "chevrons-down-up": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-down-up"),
    { loading }
  ),
  "chevrons-down": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-down"),
    { loading }
  ),
  "chevrons-left-right": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-left-right"),
    { loading }
  ),
  "chevrons-left": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-left"),
    { loading }
  ),
  "chevrons-right-left": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-right-left"),
    { loading }
  ),
  "chevrons-right": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-right"),
    { loading }
  ),
  "chevrons-up-down": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-up-down"),
    { loading }
  ),
  "chevrons-up": dynamic(
    () => import("lucide-react/dist/esm/icons/chevrons-up"),
    { loading }
  ),
  chrome: dynamic(() => import("lucide-react/dist/esm/icons/chrome"), {
    loading,
  }),
  church: dynamic(() => import("lucide-react/dist/esm/icons/church"), {
    loading,
  }),
  "cigarette-off": dynamic(
    () => import("lucide-react/dist/esm/icons/cigarette-off"),
    { loading }
  ),
  cigarette: dynamic(() => import("lucide-react/dist/esm/icons/cigarette"), {
    loading,
  }),
  "circle-alert": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-alert"),
    { loading }
  ),
  "circle-arrow-down": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-down"),
    { loading }
  ),
  "circle-arrow-left": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-left"),
    { loading }
  ),
  "circle-arrow-out-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-out-down-left"),
    { loading }
  ),
  "circle-arrow-out-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-out-down-right"),
    { loading }
  ),
  "circle-arrow-out-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-out-up-left"),
    { loading }
  ),
  "circle-arrow-out-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-out-up-right"),
    { loading }
  ),
  "circle-arrow-right": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-right"),
    { loading }
  ),
  "circle-arrow-up": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-arrow-up"),
    { loading }
  ),
  "circle-check-big": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-check-big"),
    { loading }
  ),
  "circle-check": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-check"),
    { loading }
  ),
  "circle-chevron-down": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-chevron-down"),
    { loading }
  ),
  "circle-chevron-left": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-chevron-left"),
    { loading }
  ),
  "circle-chevron-right": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-chevron-right"),
    { loading }
  ),
  "circle-chevron-up": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-chevron-up"),
    { loading }
  ),
  "circle-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-dashed"),
    { loading }
  ),
  "circle-divide": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-divide"),
    { loading }
  ),
  "circle-dollar-sign": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-dollar-sign"),
    { loading }
  ),
  "circle-dot-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-dot-dashed"),
    { loading }
  ),
  "circle-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-dot"),
    { loading }
  ),
  "circle-ellipsis": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-ellipsis"),
    { loading }
  ),
  "circle-equal": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-equal"),
    { loading }
  ),
  "circle-fading-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-fading-plus"),
    { loading }
  ),
  "circle-gauge": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-gauge"),
    { loading }
  ),
  "circle-help": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-help"),
    { loading }
  ),
  "circle-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-minus"),
    { loading }
  ),
  "circle-off": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-off"),
    { loading }
  ),
  "circle-parking-off": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-parking-off"),
    { loading }
  ),
  "circle-parking": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-parking"),
    { loading }
  ),
  "circle-pause": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-pause"),
    { loading }
  ),
  "circle-percent": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-percent"),
    { loading }
  ),
  "circle-play": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-play"),
    { loading }
  ),
  "circle-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-plus"),
    { loading }
  ),
  "circle-power": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-power"),
    { loading }
  ),
  "circle-slash-2": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-slash-2"),
    { loading }
  ),
  "circle-slash": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-slash"),
    { loading }
  ),
  "circle-stop": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-stop"),
    { loading }
  ),
  "circle-user-round": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-user-round"),
    { loading }
  ),
  "circle-user": dynamic(
    () => import("lucide-react/dist/esm/icons/circle-user"),
    { loading }
  ),
  "circle-x": dynamic(() => import("lucide-react/dist/esm/icons/circle-x"), {
    loading,
  }),
  circle: dynamic(() => import("lucide-react/dist/esm/icons/circle"), {
    loading,
  }),
  "circuit-board": dynamic(
    () => import("lucide-react/dist/esm/icons/circuit-board"),
    { loading }
  ),
  citrus: dynamic(() => import("lucide-react/dist/esm/icons/citrus"), {
    loading,
  }),
  clapperboard: dynamic(
    () => import("lucide-react/dist/esm/icons/clapperboard"),
    { loading }
  ),
  "clipboard-check": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-check"),
    { loading }
  ),
  "clipboard-copy": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-copy"),
    { loading }
  ),
  "clipboard-list": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-list"),
    { loading }
  ),
  "clipboard-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-minus"),
    { loading }
  ),
  "clipboard-paste": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-paste"),
    { loading }
  ),
  "clipboard-pen-line": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-pen-line"),
    { loading }
  ),
  "clipboard-pen": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-pen"),
    { loading }
  ),
  "clipboard-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-plus"),
    { loading }
  ),
  "clipboard-type": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-type"),
    { loading }
  ),
  "clipboard-x": dynamic(
    () => import("lucide-react/dist/esm/icons/clipboard-x"),
    { loading }
  ),
  clipboard: dynamic(() => import("lucide-react/dist/esm/icons/clipboard"), {
    loading,
  }),
  "clock-1": dynamic(() => import("lucide-react/dist/esm/icons/clock-1"), {
    loading,
  }),
  "clock-10": dynamic(() => import("lucide-react/dist/esm/icons/clock-10"), {
    loading,
  }),
  "clock-11": dynamic(() => import("lucide-react/dist/esm/icons/clock-11"), {
    loading,
  }),
  "clock-12": dynamic(() => import("lucide-react/dist/esm/icons/clock-12"), {
    loading,
  }),
  "clock-2": dynamic(() => import("lucide-react/dist/esm/icons/clock-2"), {
    loading,
  }),
  "clock-3": dynamic(() => import("lucide-react/dist/esm/icons/clock-3"), {
    loading,
  }),
  "clock-4": dynamic(() => import("lucide-react/dist/esm/icons/clock-4"), {
    loading,
  }),
  "clock-5": dynamic(() => import("lucide-react/dist/esm/icons/clock-5"), {
    loading,
  }),
  "clock-6": dynamic(() => import("lucide-react/dist/esm/icons/clock-6"), {
    loading,
  }),
  "clock-7": dynamic(() => import("lucide-react/dist/esm/icons/clock-7"), {
    loading,
  }),
  "clock-8": dynamic(() => import("lucide-react/dist/esm/icons/clock-8"), {
    loading,
  }),
  "clock-9": dynamic(() => import("lucide-react/dist/esm/icons/clock-9"), {
    loading,
  }),
  clock: dynamic(() => import("lucide-react/dist/esm/icons/clock"), {
    loading,
  }),
  "cloud-cog": dynamic(() => import("lucide-react/dist/esm/icons/cloud-cog"), {
    loading,
  }),
  "cloud-download": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-download"),
    { loading }
  ),
  "cloud-drizzle": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-drizzle"),
    { loading }
  ),
  "cloud-fog": dynamic(() => import("lucide-react/dist/esm/icons/cloud-fog"), {
    loading,
  }),
  "cloud-hail": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-hail"),
    { loading }
  ),
  "cloud-lightning": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-lightning"),
    { loading }
  ),
  "cloud-moon-rain": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-moon-rain"),
    { loading }
  ),
  "cloud-moon": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-moon"),
    { loading }
  ),
  "cloud-off": dynamic(() => import("lucide-react/dist/esm/icons/cloud-off"), {
    loading,
  }),
  "cloud-rain-wind": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-rain-wind"),
    { loading }
  ),
  "cloud-rain": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-rain"),
    { loading }
  ),
  "cloud-snow": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-snow"),
    { loading }
  ),
  "cloud-sun-rain": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-sun-rain"),
    { loading }
  ),
  "cloud-sun": dynamic(() => import("lucide-react/dist/esm/icons/cloud-sun"), {
    loading,
  }),
  "cloud-upload": dynamic(
    () => import("lucide-react/dist/esm/icons/cloud-upload"),
    { loading }
  ),
  cloud: dynamic(() => import("lucide-react/dist/esm/icons/cloud"), {
    loading,
  }),
  cloudy: dynamic(() => import("lucide-react/dist/esm/icons/cloudy"), {
    loading,
  }),
  clover: dynamic(() => import("lucide-react/dist/esm/icons/clover"), {
    loading,
  }),
  club: dynamic(() => import("lucide-react/dist/esm/icons/club"), { loading }),
  "code-xml": dynamic(() => import("lucide-react/dist/esm/icons/code-xml"), {
    loading,
  }),
  code: dynamic(() => import("lucide-react/dist/esm/icons/code"), { loading }),
  codepen: dynamic(() => import("lucide-react/dist/esm/icons/codepen"), {
    loading,
  }),
  codesandbox: dynamic(
    () => import("lucide-react/dist/esm/icons/codesandbox"),
    { loading }
  ),
  coffee: dynamic(() => import("lucide-react/dist/esm/icons/coffee"), {
    loading,
  }),
  cog: dynamic(() => import("lucide-react/dist/esm/icons/cog"), { loading }),
  coins: dynamic(() => import("lucide-react/dist/esm/icons/coins"), {
    loading,
  }),
  "columns-2": dynamic(() => import("lucide-react/dist/esm/icons/columns-2"), {
    loading,
  }),
  "columns-3": dynamic(() => import("lucide-react/dist/esm/icons/columns-3"), {
    loading,
  }),
  "columns-4": dynamic(() => import("lucide-react/dist/esm/icons/columns-4"), {
    loading,
  }),
  combine: dynamic(() => import("lucide-react/dist/esm/icons/combine"), {
    loading,
  }),
  command: dynamic(() => import("lucide-react/dist/esm/icons/command"), {
    loading,
  }),
  compass: dynamic(() => import("lucide-react/dist/esm/icons/compass"), {
    loading,
  }),
  component: dynamic(() => import("lucide-react/dist/esm/icons/component"), {
    loading,
  }),
  computer: dynamic(() => import("lucide-react/dist/esm/icons/computer"), {
    loading,
  }),
  "concierge-bell": dynamic(
    () => import("lucide-react/dist/esm/icons/concierge-bell"),
    { loading }
  ),
  cone: dynamic(() => import("lucide-react/dist/esm/icons/cone"), { loading }),
  construction: dynamic(
    () => import("lucide-react/dist/esm/icons/construction"),
    { loading }
  ),
  "contact-round": dynamic(
    () => import("lucide-react/dist/esm/icons/contact-round"),
    { loading }
  ),
  contact: dynamic(() => import("lucide-react/dist/esm/icons/contact"), {
    loading,
  }),
  container: dynamic(() => import("lucide-react/dist/esm/icons/container"), {
    loading,
  }),
  contrast: dynamic(() => import("lucide-react/dist/esm/icons/contrast"), {
    loading,
  }),
  cookie: dynamic(() => import("lucide-react/dist/esm/icons/cookie"), {
    loading,
  }),
  "cooking-pot": dynamic(
    () => import("lucide-react/dist/esm/icons/cooking-pot"),
    { loading }
  ),
  "copy-check": dynamic(
    () => import("lucide-react/dist/esm/icons/copy-check"),
    { loading }
  ),
  "copy-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/copy-minus"),
    { loading }
  ),
  "copy-plus": dynamic(() => import("lucide-react/dist/esm/icons/copy-plus"), {
    loading,
  }),
  "copy-slash": dynamic(
    () => import("lucide-react/dist/esm/icons/copy-slash"),
    { loading }
  ),
  "copy-x": dynamic(() => import("lucide-react/dist/esm/icons/copy-x"), {
    loading,
  }),
  copy: dynamic(() => import("lucide-react/dist/esm/icons/copy"), { loading }),
  copyleft: dynamic(() => import("lucide-react/dist/esm/icons/copyleft"), {
    loading,
  }),
  copyright: dynamic(() => import("lucide-react/dist/esm/icons/copyright"), {
    loading,
  }),
  "corner-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-down-left"),
    { loading }
  ),
  "corner-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-down-right"),
    { loading }
  ),
  "corner-left-down": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-left-down"),
    { loading }
  ),
  "corner-left-up": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-left-up"),
    { loading }
  ),
  "corner-right-down": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-right-down"),
    { loading }
  ),
  "corner-right-up": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-right-up"),
    { loading }
  ),
  "corner-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-up-left"),
    { loading }
  ),
  "corner-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/corner-up-right"),
    { loading }
  ),
  cpu: dynamic(() => import("lucide-react/dist/esm/icons/cpu"), { loading }),
  "creative-commons": dynamic(
    () => import("lucide-react/dist/esm/icons/creative-commons"),
    { loading }
  ),
  "credit-card": dynamic(
    () => import("lucide-react/dist/esm/icons/credit-card"),
    { loading }
  ),
  croissant: dynamic(() => import("lucide-react/dist/esm/icons/croissant"), {
    loading,
  }),
  crop: dynamic(() => import("lucide-react/dist/esm/icons/crop"), { loading }),
  cross: dynamic(() => import("lucide-react/dist/esm/icons/cross"), {
    loading,
  }),
  crosshair: dynamic(() => import("lucide-react/dist/esm/icons/crosshair"), {
    loading,
  }),
  crown: dynamic(() => import("lucide-react/dist/esm/icons/crown"), {
    loading,
  }),
  cuboid: dynamic(() => import("lucide-react/dist/esm/icons/cuboid"), {
    loading,
  }),
  "cup-soda": dynamic(() => import("lucide-react/dist/esm/icons/cup-soda"), {
    loading,
  }),
  currency: dynamic(() => import("lucide-react/dist/esm/icons/currency"), {
    loading,
  }),
  cylinder: dynamic(() => import("lucide-react/dist/esm/icons/cylinder"), {
    loading,
  }),
  "database-backup": dynamic(
    () => import("lucide-react/dist/esm/icons/database-backup"),
    { loading }
  ),
  "database-zap": dynamic(
    () => import("lucide-react/dist/esm/icons/database-zap"),
    { loading }
  ),
  database: dynamic(() => import("lucide-react/dist/esm/icons/database"), {
    loading,
  }),
  delete: dynamic(() => import("lucide-react/dist/esm/icons/delete"), {
    loading,
  }),
  dessert: dynamic(() => import("lucide-react/dist/esm/icons/dessert"), {
    loading,
  }),
  diameter: dynamic(() => import("lucide-react/dist/esm/icons/diameter"), {
    loading,
  }),
  "diamond-percent": dynamic(
    () => import("lucide-react/dist/esm/icons/diamond-percent"),
    { loading }
  ),
  diamond: dynamic(() => import("lucide-react/dist/esm/icons/diamond"), {
    loading,
  }),
  "dice-1": dynamic(() => import("lucide-react/dist/esm/icons/dice-1"), {
    loading,
  }),
  "dice-2": dynamic(() => import("lucide-react/dist/esm/icons/dice-2"), {
    loading,
  }),
  "dice-3": dynamic(() => import("lucide-react/dist/esm/icons/dice-3"), {
    loading,
  }),
  "dice-4": dynamic(() => import("lucide-react/dist/esm/icons/dice-4"), {
    loading,
  }),
  "dice-5": dynamic(() => import("lucide-react/dist/esm/icons/dice-5"), {
    loading,
  }),
  "dice-6": dynamic(() => import("lucide-react/dist/esm/icons/dice-6"), {
    loading,
  }),
  dices: dynamic(() => import("lucide-react/dist/esm/icons/dices"), {
    loading,
  }),
  diff: dynamic(() => import("lucide-react/dist/esm/icons/diff"), { loading }),
  "disc-2": dynamic(() => import("lucide-react/dist/esm/icons/disc-2"), {
    loading,
  }),
  "disc-3": dynamic(() => import("lucide-react/dist/esm/icons/disc-3"), {
    loading,
  }),
  "disc-album": dynamic(
    () => import("lucide-react/dist/esm/icons/disc-album"),
    { loading }
  ),
  disc: dynamic(() => import("lucide-react/dist/esm/icons/disc"), { loading }),
  divide: dynamic(() => import("lucide-react/dist/esm/icons/divide"), {
    loading,
  }),
  "dna-off": dynamic(() => import("lucide-react/dist/esm/icons/dna-off"), {
    loading,
  }),
  dna: dynamic(() => import("lucide-react/dist/esm/icons/dna"), { loading }),
  dock: dynamic(() => import("lucide-react/dist/esm/icons/dock"), { loading }),
  dog: dynamic(() => import("lucide-react/dist/esm/icons/dog"), { loading }),
  "dollar-sign": dynamic(
    () => import("lucide-react/dist/esm/icons/dollar-sign"),
    { loading }
  ),
  donut: dynamic(() => import("lucide-react/dist/esm/icons/donut"), {
    loading,
  }),
  "door-closed": dynamic(
    () => import("lucide-react/dist/esm/icons/door-closed"),
    { loading }
  ),
  "door-open": dynamic(() => import("lucide-react/dist/esm/icons/door-open"), {
    loading,
  }),
  dot: dynamic(() => import("lucide-react/dist/esm/icons/dot"), { loading }),
  download: dynamic(() => import("lucide-react/dist/esm/icons/download"), {
    loading,
  }),
  "drafting-compass": dynamic(
    () => import("lucide-react/dist/esm/icons/drafting-compass"),
    { loading }
  ),
  drama: dynamic(() => import("lucide-react/dist/esm/icons/drama"), {
    loading,
  }),
  dribbble: dynamic(() => import("lucide-react/dist/esm/icons/dribbble"), {
    loading,
  }),
  drill: dynamic(() => import("lucide-react/dist/esm/icons/drill"), {
    loading,
  }),
  droplet: dynamic(() => import("lucide-react/dist/esm/icons/droplet"), {
    loading,
  }),
  droplets: dynamic(() => import("lucide-react/dist/esm/icons/droplets"), {
    loading,
  }),
  drum: dynamic(() => import("lucide-react/dist/esm/icons/drum"), { loading }),
  drumstick: dynamic(() => import("lucide-react/dist/esm/icons/drumstick"), {
    loading,
  }),
  dumbbell: dynamic(() => import("lucide-react/dist/esm/icons/dumbbell"), {
    loading,
  }),
  "ear-off": dynamic(() => import("lucide-react/dist/esm/icons/ear-off"), {
    loading,
  }),
  ear: dynamic(() => import("lucide-react/dist/esm/icons/ear"), { loading }),
  "earth-lock": dynamic(
    () => import("lucide-react/dist/esm/icons/earth-lock"),
    { loading }
  ),
  earth: dynamic(() => import("lucide-react/dist/esm/icons/earth"), {
    loading,
  }),
  eclipse: dynamic(() => import("lucide-react/dist/esm/icons/eclipse"), {
    loading,
  }),
  "egg-fried": dynamic(() => import("lucide-react/dist/esm/icons/egg-fried"), {
    loading,
  }),
  "egg-off": dynamic(() => import("lucide-react/dist/esm/icons/egg-off"), {
    loading,
  }),
  egg: dynamic(() => import("lucide-react/dist/esm/icons/egg"), { loading }),
  "ellipsis-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/ellipsis-vertical"),
    { loading }
  ),
  ellipsis: dynamic(() => import("lucide-react/dist/esm/icons/ellipsis"), {
    loading,
  }),
  "equal-not": dynamic(() => import("lucide-react/dist/esm/icons/equal-not"), {
    loading,
  }),
  equal: dynamic(() => import("lucide-react/dist/esm/icons/equal"), {
    loading,
  }),
  eraser: dynamic(() => import("lucide-react/dist/esm/icons/eraser"), {
    loading,
  }),
  euro: dynamic(() => import("lucide-react/dist/esm/icons/euro"), { loading }),
  expand: dynamic(() => import("lucide-react/dist/esm/icons/expand"), {
    loading,
  }),
  "external-link": dynamic(
    () => import("lucide-react/dist/esm/icons/external-link"),
    { loading }
  ),
  "eye-off": dynamic(() => import("lucide-react/dist/esm/icons/eye-off"), {
    loading,
  }),
  eye: dynamic(() => import("lucide-react/dist/esm/icons/eye"), { loading }),
  facebook: dynamic(() => import("lucide-react/dist/esm/icons/facebook"), {
    loading,
  }),
  factory: dynamic(() => import("lucide-react/dist/esm/icons/factory"), {
    loading,
  }),
  fan: dynamic(() => import("lucide-react/dist/esm/icons/fan"), { loading }),
  "fast-forward": dynamic(
    () => import("lucide-react/dist/esm/icons/fast-forward"),
    { loading }
  ),
  feather: dynamic(() => import("lucide-react/dist/esm/icons/feather"), {
    loading,
  }),
  fence: dynamic(() => import("lucide-react/dist/esm/icons/fence"), {
    loading,
  }),
  "ferris-wheel": dynamic(
    () => import("lucide-react/dist/esm/icons/ferris-wheel"),
    { loading }
  ),
  figma: dynamic(() => import("lucide-react/dist/esm/icons/figma"), {
    loading,
  }),
  "file-archive": dynamic(
    () => import("lucide-react/dist/esm/icons/file-archive"),
    { loading }
  ),
  "file-audio-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-audio-2"),
    { loading }
  ),
  "file-audio": dynamic(
    () => import("lucide-react/dist/esm/icons/file-audio"),
    { loading }
  ),
  "file-axis-3d": dynamic(
    () => import("lucide-react/dist/esm/icons/file-axis-3d"),
    { loading }
  ),
  "file-badge-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-badge-2"),
    { loading }
  ),
  "file-badge": dynamic(
    () => import("lucide-react/dist/esm/icons/file-badge"),
    { loading }
  ),
  "file-bar-chart-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-bar-chart-2"),
    { loading }
  ),
  "file-bar-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/file-bar-chart"),
    { loading }
  ),
  "file-box": dynamic(() => import("lucide-react/dist/esm/icons/file-box"), {
    loading,
  }),
  "file-check-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-check-2"),
    { loading }
  ),
  "file-check": dynamic(
    () => import("lucide-react/dist/esm/icons/file-check"),
    { loading }
  ),
  "file-clock": dynamic(
    () => import("lucide-react/dist/esm/icons/file-clock"),
    { loading }
  ),
  "file-code-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-code-2"),
    { loading }
  ),
  "file-code": dynamic(() => import("lucide-react/dist/esm/icons/file-code"), {
    loading,
  }),
  "file-cog": dynamic(() => import("lucide-react/dist/esm/icons/file-cog"), {
    loading,
  }),
  "file-diff": dynamic(() => import("lucide-react/dist/esm/icons/file-diff"), {
    loading,
  }),
  "file-digit": dynamic(
    () => import("lucide-react/dist/esm/icons/file-digit"),
    { loading }
  ),
  "file-down": dynamic(() => import("lucide-react/dist/esm/icons/file-down"), {
    loading,
  }),
  "file-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/file-heart"),
    { loading }
  ),
  "file-image": dynamic(
    () => import("lucide-react/dist/esm/icons/file-image"),
    { loading }
  ),
  "file-input": dynamic(
    () => import("lucide-react/dist/esm/icons/file-input"),
    { loading }
  ),
  "file-json-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-json-2"),
    { loading }
  ),
  "file-json": dynamic(() => import("lucide-react/dist/esm/icons/file-json"), {
    loading,
  }),
  "file-key-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-key-2"),
    { loading }
  ),
  "file-key": dynamic(() => import("lucide-react/dist/esm/icons/file-key"), {
    loading,
  }),
  "file-line-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/file-line-chart"),
    { loading }
  ),
  "file-lock-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-lock-2"),
    { loading }
  ),
  "file-lock": dynamic(() => import("lucide-react/dist/esm/icons/file-lock"), {
    loading,
  }),
  "file-minus-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-minus-2"),
    { loading }
  ),
  "file-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/file-minus"),
    { loading }
  ),
  "file-music": dynamic(
    () => import("lucide-react/dist/esm/icons/file-music"),
    { loading }
  ),
  "file-output": dynamic(
    () => import("lucide-react/dist/esm/icons/file-output"),
    { loading }
  ),
  "file-pen-line": dynamic(
    () => import("lucide-react/dist/esm/icons/file-pen-line"),
    { loading }
  ),
  "file-pen": dynamic(() => import("lucide-react/dist/esm/icons/file-pen"), {
    loading,
  }),
  "file-pie-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/file-pie-chart"),
    { loading }
  ),
  "file-plus-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-plus-2"),
    { loading }
  ),
  "file-plus": dynamic(() => import("lucide-react/dist/esm/icons/file-plus"), {
    loading,
  }),
  "file-question": dynamic(
    () => import("lucide-react/dist/esm/icons/file-question"),
    { loading }
  ),
  "file-scan": dynamic(() => import("lucide-react/dist/esm/icons/file-scan"), {
    loading,
  }),
  "file-search-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-search-2"),
    { loading }
  ),
  "file-search": dynamic(
    () => import("lucide-react/dist/esm/icons/file-search"),
    { loading }
  ),
  "file-sliders": dynamic(
    () => import("lucide-react/dist/esm/icons/file-sliders"),
    { loading }
  ),
  "file-spreadsheet": dynamic(
    () => import("lucide-react/dist/esm/icons/file-spreadsheet"),
    { loading }
  ),
  "file-stack": dynamic(
    () => import("lucide-react/dist/esm/icons/file-stack"),
    { loading }
  ),
  "file-symlink": dynamic(
    () => import("lucide-react/dist/esm/icons/file-symlink"),
    { loading }
  ),
  "file-terminal": dynamic(
    () => import("lucide-react/dist/esm/icons/file-terminal"),
    { loading }
  ),
  "file-text": dynamic(() => import("lucide-react/dist/esm/icons/file-text"), {
    loading,
  }),
  "file-type-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-type-2"),
    { loading }
  ),
  "file-type": dynamic(() => import("lucide-react/dist/esm/icons/file-type"), {
    loading,
  }),
  "file-up": dynamic(() => import("lucide-react/dist/esm/icons/file-up"), {
    loading,
  }),
  "file-video-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-video-2"),
    { loading }
  ),
  "file-video": dynamic(
    () => import("lucide-react/dist/esm/icons/file-video"),
    { loading }
  ),
  "file-volume-2": dynamic(
    () => import("lucide-react/dist/esm/icons/file-volume-2"),
    { loading }
  ),
  "file-volume": dynamic(
    () => import("lucide-react/dist/esm/icons/file-volume"),
    { loading }
  ),
  "file-warning": dynamic(
    () => import("lucide-react/dist/esm/icons/file-warning"),
    { loading }
  ),
  "file-x-2": dynamic(() => import("lucide-react/dist/esm/icons/file-x-2"), {
    loading,
  }),
  "file-x": dynamic(() => import("lucide-react/dist/esm/icons/file-x"), {
    loading,
  }),
  file: dynamic(() => import("lucide-react/dist/esm/icons/file"), { loading }),
  files: dynamic(() => import("lucide-react/dist/esm/icons/files"), {
    loading,
  }),
  film: dynamic(() => import("lucide-react/dist/esm/icons/film"), { loading }),
  "filter-x": dynamic(() => import("lucide-react/dist/esm/icons/filter-x"), {
    loading,
  }),
  filter: dynamic(() => import("lucide-react/dist/esm/icons/filter"), {
    loading,
  }),
  fingerprint: dynamic(
    () => import("lucide-react/dist/esm/icons/fingerprint"),
    { loading }
  ),
  "fire-extinguisher": dynamic(
    () => import("lucide-react/dist/esm/icons/fire-extinguisher"),
    { loading }
  ),
  "fish-off": dynamic(() => import("lucide-react/dist/esm/icons/fish-off"), {
    loading,
  }),
  "fish-symbol": dynamic(
    () => import("lucide-react/dist/esm/icons/fish-symbol"),
    { loading }
  ),
  fish: dynamic(() => import("lucide-react/dist/esm/icons/fish"), { loading }),
  "flag-off": dynamic(() => import("lucide-react/dist/esm/icons/flag-off"), {
    loading,
  }),
  "flag-triangle-left": dynamic(
    () => import("lucide-react/dist/esm/icons/flag-triangle-left"),
    { loading }
  ),
  "flag-triangle-right": dynamic(
    () => import("lucide-react/dist/esm/icons/flag-triangle-right"),
    { loading }
  ),
  flag: dynamic(() => import("lucide-react/dist/esm/icons/flag"), { loading }),
  "flame-kindling": dynamic(
    () => import("lucide-react/dist/esm/icons/flame-kindling"),
    { loading }
  ),
  flame: dynamic(() => import("lucide-react/dist/esm/icons/flame"), {
    loading,
  }),
  "flashlight-off": dynamic(
    () => import("lucide-react/dist/esm/icons/flashlight-off"),
    { loading }
  ),
  flashlight: dynamic(() => import("lucide-react/dist/esm/icons/flashlight"), {
    loading,
  }),
  "flask-conical-off": dynamic(
    () => import("lucide-react/dist/esm/icons/flask-conical-off"),
    { loading }
  ),
  "flask-conical": dynamic(
    () => import("lucide-react/dist/esm/icons/flask-conical"),
    { loading }
  ),
  "flask-round": dynamic(
    () => import("lucide-react/dist/esm/icons/flask-round"),
    { loading }
  ),
  "flip-horizontal-2": dynamic(
    () => import("lucide-react/dist/esm/icons/flip-horizontal-2"),
    { loading }
  ),
  "flip-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/flip-horizontal"),
    { loading }
  ),
  "flip-vertical-2": dynamic(
    () => import("lucide-react/dist/esm/icons/flip-vertical-2"),
    { loading }
  ),
  "flip-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/flip-vertical"),
    { loading }
  ),
  "flower-2": dynamic(() => import("lucide-react/dist/esm/icons/flower-2"), {
    loading,
  }),
  flower: dynamic(() => import("lucide-react/dist/esm/icons/flower"), {
    loading,
  }),
  focus: dynamic(() => import("lucide-react/dist/esm/icons/focus"), {
    loading,
  }),
  "fold-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/fold-horizontal"),
    { loading }
  ),
  "fold-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/fold-vertical"),
    { loading }
  ),
  "folder-archive": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-archive"),
    { loading }
  ),
  "folder-check": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-check"),
    { loading }
  ),
  "folder-clock": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-clock"),
    { loading }
  ),
  "folder-closed": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-closed"),
    { loading }
  ),
  "folder-cog": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-cog"),
    { loading }
  ),
  "folder-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-dot"),
    { loading }
  ),
  "folder-down": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-down"),
    { loading }
  ),
  "folder-git-2": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-git-2"),
    { loading }
  ),
  "folder-git": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-git"),
    { loading }
  ),
  "folder-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-heart"),
    { loading }
  ),
  "folder-input": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-input"),
    { loading }
  ),
  "folder-kanban": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-kanban"),
    { loading }
  ),
  "folder-key": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-key"),
    { loading }
  ),
  "folder-lock": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-lock"),
    { loading }
  ),
  "folder-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-minus"),
    { loading }
  ),
  "folder-open-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-open-dot"),
    { loading }
  ),
  "folder-open": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-open"),
    { loading }
  ),
  "folder-output": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-output"),
    { loading }
  ),
  "folder-pen": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-pen"),
    { loading }
  ),
  "folder-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-plus"),
    { loading }
  ),
  "folder-root": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-root"),
    { loading }
  ),
  "folder-search-2": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-search-2"),
    { loading }
  ),
  "folder-search": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-search"),
    { loading }
  ),
  "folder-symlink": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-symlink"),
    { loading }
  ),
  "folder-sync": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-sync"),
    { loading }
  ),
  "folder-tree": dynamic(
    () => import("lucide-react/dist/esm/icons/folder-tree"),
    { loading }
  ),
  "folder-up": dynamic(() => import("lucide-react/dist/esm/icons/folder-up"), {
    loading,
  }),
  "folder-x": dynamic(() => import("lucide-react/dist/esm/icons/folder-x"), {
    loading,
  }),
  folder: dynamic(() => import("lucide-react/dist/esm/icons/folder"), {
    loading,
  }),
  folders: dynamic(() => import("lucide-react/dist/esm/icons/folders"), {
    loading,
  }),
  footprints: dynamic(() => import("lucide-react/dist/esm/icons/footprints"), {
    loading,
  }),
  forklift: dynamic(() => import("lucide-react/dist/esm/icons/forklift"), {
    loading,
  }),
  forward: dynamic(() => import("lucide-react/dist/esm/icons/forward"), {
    loading,
  }),
  frame: dynamic(() => import("lucide-react/dist/esm/icons/frame"), {
    loading,
  }),
  framer: dynamic(() => import("lucide-react/dist/esm/icons/framer"), {
    loading,
  }),
  frown: dynamic(() => import("lucide-react/dist/esm/icons/frown"), {
    loading,
  }),
  fuel: dynamic(() => import("lucide-react/dist/esm/icons/fuel"), { loading }),
  fullscreen: dynamic(() => import("lucide-react/dist/esm/icons/fullscreen"), {
    loading,
  }),
  "gallery-horizontal-end": dynamic(
    () => import("lucide-react/dist/esm/icons/gallery-horizontal-end"),
    { loading }
  ),
  "gallery-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/gallery-horizontal"),
    { loading }
  ),
  "gallery-thumbnails": dynamic(
    () => import("lucide-react/dist/esm/icons/gallery-thumbnails"),
    { loading }
  ),
  "gallery-vertical-end": dynamic(
    () => import("lucide-react/dist/esm/icons/gallery-vertical-end"),
    { loading }
  ),
  "gallery-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/gallery-vertical"),
    { loading }
  ),
  "gamepad-2": dynamic(() => import("lucide-react/dist/esm/icons/gamepad-2"), {
    loading,
  }),
  gamepad: dynamic(() => import("lucide-react/dist/esm/icons/gamepad"), {
    loading,
  }),
  "gantt-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/gantt-chart"),
    { loading }
  ),
  gauge: dynamic(() => import("lucide-react/dist/esm/icons/gauge"), {
    loading,
  }),
  gavel: dynamic(() => import("lucide-react/dist/esm/icons/gavel"), {
    loading,
  }),
  gem: dynamic(() => import("lucide-react/dist/esm/icons/gem"), { loading }),
  ghost: dynamic(() => import("lucide-react/dist/esm/icons/ghost"), {
    loading,
  }),
  gift: dynamic(() => import("lucide-react/dist/esm/icons/gift"), { loading }),
  "git-branch-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/git-branch-plus"),
    { loading }
  ),
  "git-branch": dynamic(
    () => import("lucide-react/dist/esm/icons/git-branch"),
    { loading }
  ),
  "git-commit-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/git-commit-horizontal"),
    { loading }
  ),
  "git-commit-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/git-commit-vertical"),
    { loading }
  ),
  "git-compare-arrows": dynamic(
    () => import("lucide-react/dist/esm/icons/git-compare-arrows"),
    { loading }
  ),
  "git-compare": dynamic(
    () => import("lucide-react/dist/esm/icons/git-compare"),
    { loading }
  ),
  "git-fork": dynamic(() => import("lucide-react/dist/esm/icons/git-fork"), {
    loading,
  }),
  "git-graph": dynamic(() => import("lucide-react/dist/esm/icons/git-graph"), {
    loading,
  }),
  "git-merge": dynamic(() => import("lucide-react/dist/esm/icons/git-merge"), {
    loading,
  }),
  "git-pull-request-arrow": dynamic(
    () => import("lucide-react/dist/esm/icons/git-pull-request-arrow"),
    { loading }
  ),
  "git-pull-request-closed": dynamic(
    () => import("lucide-react/dist/esm/icons/git-pull-request-closed"),
    { loading }
  ),
  "git-pull-request-create-arrow": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/git-pull-request-create-arrow"),
      { loading }
    ),
  "git-pull-request-create": dynamic(
    () => import("lucide-react/dist/esm/icons/git-pull-request-create"),
    { loading }
  ),
  "git-pull-request-draft": dynamic(
    () => import("lucide-react/dist/esm/icons/git-pull-request-draft"),
    { loading }
  ),
  "git-pull-request": dynamic(
    () => import("lucide-react/dist/esm/icons/git-pull-request"),
    { loading }
  ),
  github: dynamic(() => import("lucide-react/dist/esm/icons/github"), {
    loading,
  }),
  gitlab: dynamic(() => import("lucide-react/dist/esm/icons/gitlab"), {
    loading,
  }),
  "glass-water": dynamic(
    () => import("lucide-react/dist/esm/icons/glass-water"),
    { loading }
  ),
  glasses: dynamic(() => import("lucide-react/dist/esm/icons/glasses"), {
    loading,
  }),
  "globe-lock": dynamic(
    () => import("lucide-react/dist/esm/icons/globe-lock"),
    { loading }
  ),
  globe: dynamic(() => import("lucide-react/dist/esm/icons/globe"), {
    loading,
  }),
  goal: dynamic(() => import("lucide-react/dist/esm/icons/goal"), { loading }),
  grab: dynamic(() => import("lucide-react/dist/esm/icons/grab"), { loading }),
  "graduation-cap": dynamic(
    () => import("lucide-react/dist/esm/icons/graduation-cap"),
    { loading }
  ),
  grape: dynamic(() => import("lucide-react/dist/esm/icons/grape"), {
    loading,
  }),
  "grid-2x2": dynamic(() => import("lucide-react/dist/esm/icons/grid-2x2"), {
    loading,
  }),
  "grid-3x3": dynamic(() => import("lucide-react/dist/esm/icons/grid-3x3"), {
    loading,
  }),
  "grip-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/grip-horizontal"),
    { loading }
  ),
  "grip-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/grip-vertical"),
    { loading }
  ),
  grip: dynamic(() => import("lucide-react/dist/esm/icons/grip"), { loading }),
  group: dynamic(() => import("lucide-react/dist/esm/icons/group"), {
    loading,
  }),
  guitar: dynamic(() => import("lucide-react/dist/esm/icons/guitar"), {
    loading,
  }),
  ham: dynamic(() => import("lucide-react/dist/esm/icons/ham"), { loading }),
  hammer: dynamic(() => import("lucide-react/dist/esm/icons/hammer"), {
    loading,
  }),
  "hand-coins": dynamic(
    () => import("lucide-react/dist/esm/icons/hand-coins"),
    { loading }
  ),
  "hand-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/hand-heart"),
    { loading }
  ),
  "hand-helping": dynamic(
    () => import("lucide-react/dist/esm/icons/hand-helping"),
    { loading }
  ),
  "hand-metal": dynamic(
    () => import("lucide-react/dist/esm/icons/hand-metal"),
    { loading }
  ),
  "hand-platter": dynamic(
    () => import("lucide-react/dist/esm/icons/hand-platter"),
    { loading }
  ),
  hand: dynamic(() => import("lucide-react/dist/esm/icons/hand"), { loading }),
  handshake: dynamic(() => import("lucide-react/dist/esm/icons/handshake"), {
    loading,
  }),
  "hard-drive-download": dynamic(
    () => import("lucide-react/dist/esm/icons/hard-drive-download"),
    { loading }
  ),
  "hard-drive-upload": dynamic(
    () => import("lucide-react/dist/esm/icons/hard-drive-upload"),
    { loading }
  ),
  "hard-drive": dynamic(
    () => import("lucide-react/dist/esm/icons/hard-drive"),
    { loading }
  ),
  "hard-hat": dynamic(() => import("lucide-react/dist/esm/icons/hard-hat"), {
    loading,
  }),
  hash: dynamic(() => import("lucide-react/dist/esm/icons/hash"), { loading }),
  haze: dynamic(() => import("lucide-react/dist/esm/icons/haze"), { loading }),
  "hdmi-port": dynamic(() => import("lucide-react/dist/esm/icons/hdmi-port"), {
    loading,
  }),
  "heading-1": dynamic(() => import("lucide-react/dist/esm/icons/heading-1"), {
    loading,
  }),
  "heading-2": dynamic(() => import("lucide-react/dist/esm/icons/heading-2"), {
    loading,
  }),
  "heading-3": dynamic(() => import("lucide-react/dist/esm/icons/heading-3"), {
    loading,
  }),
  "heading-4": dynamic(() => import("lucide-react/dist/esm/icons/heading-4"), {
    loading,
  }),
  "heading-5": dynamic(() => import("lucide-react/dist/esm/icons/heading-5"), {
    loading,
  }),
  "heading-6": dynamic(() => import("lucide-react/dist/esm/icons/heading-6"), {
    loading,
  }),
  heading: dynamic(() => import("lucide-react/dist/esm/icons/heading"), {
    loading,
  }),
  headphones: dynamic(() => import("lucide-react/dist/esm/icons/headphones"), {
    loading,
  }),
  headset: dynamic(() => import("lucide-react/dist/esm/icons/headset"), {
    loading,
  }),
  "heart-crack": dynamic(
    () => import("lucide-react/dist/esm/icons/heart-crack"),
    { loading }
  ),
  "heart-handshake": dynamic(
    () => import("lucide-react/dist/esm/icons/heart-handshake"),
    { loading }
  ),
  "heart-off": dynamic(() => import("lucide-react/dist/esm/icons/heart-off"), {
    loading,
  }),
  "heart-pulse": dynamic(
    () => import("lucide-react/dist/esm/icons/heart-pulse"),
    { loading }
  ),
  heart: dynamic(() => import("lucide-react/dist/esm/icons/heart"), {
    loading,
  }),
  heater: dynamic(() => import("lucide-react/dist/esm/icons/heater"), {
    loading,
  }),
  hexagon: dynamic(() => import("lucide-react/dist/esm/icons/hexagon"), {
    loading,
  }),
  highlighter: dynamic(
    () => import("lucide-react/dist/esm/icons/highlighter"),
    { loading }
  ),
  history: dynamic(() => import("lucide-react/dist/esm/icons/history"), {
    loading,
  }),
  home: dynamic(() => import("lucide-react/dist/esm/icons/home"), { loading }),
  "hop-off": dynamic(() => import("lucide-react/dist/esm/icons/hop-off"), {
    loading,
  }),
  hop: dynamic(() => import("lucide-react/dist/esm/icons/hop"), { loading }),
  hospital: dynamic(() => import("lucide-react/dist/esm/icons/hospital"), {
    loading,
  }),
  hotel: dynamic(() => import("lucide-react/dist/esm/icons/hotel"), {
    loading,
  }),
  hourglass: dynamic(() => import("lucide-react/dist/esm/icons/hourglass"), {
    loading,
  }),
  "ice-cream-bowl": dynamic(
    () => import("lucide-react/dist/esm/icons/ice-cream-bowl"),
    { loading }
  ),
  "ice-cream-cone": dynamic(
    () => import("lucide-react/dist/esm/icons/ice-cream-cone"),
    { loading }
  ),
  "image-down": dynamic(
    () => import("lucide-react/dist/esm/icons/image-down"),
    { loading }
  ),
  "image-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/image-minus"),
    { loading }
  ),
  "image-off": dynamic(() => import("lucide-react/dist/esm/icons/image-off"), {
    loading,
  }),
  "image-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/image-plus"),
    { loading }
  ),
  "image-up": dynamic(() => import("lucide-react/dist/esm/icons/image-up"), {
    loading,
  }),
  image: dynamic(() => import("lucide-react/dist/esm/icons/image"), {
    loading,
  }),
  images: dynamic(() => import("lucide-react/dist/esm/icons/images"), {
    loading,
  }),
  import: dynamic(() => import("lucide-react/dist/esm/icons/import"), {
    loading,
  }),
  inbox: dynamic(() => import("lucide-react/dist/esm/icons/inbox"), {
    loading,
  }),
  "indent-decrease": dynamic(
    () => import("lucide-react/dist/esm/icons/indent-decrease"),
    { loading }
  ),
  "indent-increase": dynamic(
    () => import("lucide-react/dist/esm/icons/indent-increase"),
    { loading }
  ),
  "indian-rupee": dynamic(
    () => import("lucide-react/dist/esm/icons/indian-rupee"),
    { loading }
  ),
  infinity: dynamic(() => import("lucide-react/dist/esm/icons/infinity"), {
    loading,
  }),
  info: dynamic(() => import("lucide-react/dist/esm/icons/info"), { loading }),
  "inspection-panel": dynamic(
    () => import("lucide-react/dist/esm/icons/inspection-panel"),
    { loading }
  ),
  instagram: dynamic(() => import("lucide-react/dist/esm/icons/instagram"), {
    loading,
  }),
  italic: dynamic(() => import("lucide-react/dist/esm/icons/italic"), {
    loading,
  }),
  "iteration-ccw": dynamic(
    () => import("lucide-react/dist/esm/icons/iteration-ccw"),
    { loading }
  ),
  "iteration-cw": dynamic(
    () => import("lucide-react/dist/esm/icons/iteration-cw"),
    { loading }
  ),
  "japanese-yen": dynamic(
    () => import("lucide-react/dist/esm/icons/japanese-yen"),
    { loading }
  ),
  joystick: dynamic(() => import("lucide-react/dist/esm/icons/joystick"), {
    loading,
  }),
  kanban: dynamic(() => import("lucide-react/dist/esm/icons/kanban"), {
    loading,
  }),
  "key-round": dynamic(() => import("lucide-react/dist/esm/icons/key-round"), {
    loading,
  }),
  "key-square": dynamic(
    () => import("lucide-react/dist/esm/icons/key-square"),
    { loading }
  ),
  key: dynamic(() => import("lucide-react/dist/esm/icons/key"), { loading }),
  "keyboard-music": dynamic(
    () => import("lucide-react/dist/esm/icons/keyboard-music"),
    { loading }
  ),
  keyboard: dynamic(() => import("lucide-react/dist/esm/icons/keyboard"), {
    loading,
  }),
  "lamp-ceiling": dynamic(
    () => import("lucide-react/dist/esm/icons/lamp-ceiling"),
    { loading }
  ),
  "lamp-desk": dynamic(() => import("lucide-react/dist/esm/icons/lamp-desk"), {
    loading,
  }),
  "lamp-floor": dynamic(
    () => import("lucide-react/dist/esm/icons/lamp-floor"),
    { loading }
  ),
  "lamp-wall-down": dynamic(
    () => import("lucide-react/dist/esm/icons/lamp-wall-down"),
    { loading }
  ),
  "lamp-wall-up": dynamic(
    () => import("lucide-react/dist/esm/icons/lamp-wall-up"),
    { loading }
  ),
  lamp: dynamic(() => import("lucide-react/dist/esm/icons/lamp"), { loading }),
  "land-plot": dynamic(() => import("lucide-react/dist/esm/icons/land-plot"), {
    loading,
  }),
  landmark: dynamic(() => import("lucide-react/dist/esm/icons/landmark"), {
    loading,
  }),
  languages: dynamic(() => import("lucide-react/dist/esm/icons/languages"), {
    loading,
  }),
  "laptop-minimal": dynamic(
    () => import("lucide-react/dist/esm/icons/laptop-minimal"),
    { loading }
  ),
  laptop: dynamic(() => import("lucide-react/dist/esm/icons/laptop"), {
    loading,
  }),
  "lasso-select": dynamic(
    () => import("lucide-react/dist/esm/icons/lasso-select"),
    { loading }
  ),
  lasso: dynamic(() => import("lucide-react/dist/esm/icons/lasso"), {
    loading,
  }),
  laugh: dynamic(() => import("lucide-react/dist/esm/icons/laugh"), {
    loading,
  }),
  "layers-2": dynamic(() => import("lucide-react/dist/esm/icons/layers-2"), {
    loading,
  }),
  "layers-3": dynamic(() => import("lucide-react/dist/esm/icons/layers-3"), {
    loading,
  }),
  layers: dynamic(() => import("lucide-react/dist/esm/icons/layers"), {
    loading,
  }),
  "layout-dashboard": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-dashboard"),
    { loading }
  ),
  "layout-grid": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-grid"),
    { loading }
  ),
  "layout-list": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-list"),
    { loading }
  ),
  "layout-panel-left": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-panel-left"),
    { loading }
  ),
  "layout-panel-top": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-panel-top"),
    { loading }
  ),
  "layout-template": dynamic(
    () => import("lucide-react/dist/esm/icons/layout-template"),
    { loading }
  ),
  leaf: dynamic(() => import("lucide-react/dist/esm/icons/leaf"), { loading }),
  "leafy-green": dynamic(
    () => import("lucide-react/dist/esm/icons/leafy-green"),
    { loading }
  ),
  "library-big": dynamic(
    () => import("lucide-react/dist/esm/icons/library-big"),
    { loading }
  ),
  library: dynamic(() => import("lucide-react/dist/esm/icons/library"), {
    loading,
  }),
  "life-buoy": dynamic(() => import("lucide-react/dist/esm/icons/life-buoy"), {
    loading,
  }),
  ligature: dynamic(() => import("lucide-react/dist/esm/icons/ligature"), {
    loading,
  }),
  "lightbulb-off": dynamic(
    () => import("lucide-react/dist/esm/icons/lightbulb-off"),
    { loading }
  ),
  lightbulb: dynamic(() => import("lucide-react/dist/esm/icons/lightbulb"), {
    loading,
  }),
  "line-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/line-chart"),
    { loading }
  ),
  "link-2-off": dynamic(
    () => import("lucide-react/dist/esm/icons/link-2-off"),
    { loading }
  ),
  "link-2": dynamic(() => import("lucide-react/dist/esm/icons/link-2"), {
    loading,
  }),
  link: dynamic(() => import("lucide-react/dist/esm/icons/link"), { loading }),
  linkedin: dynamic(() => import("lucide-react/dist/esm/icons/linkedin"), {
    loading,
  }),
  "list-checks": dynamic(
    () => import("lucide-react/dist/esm/icons/list-checks"),
    { loading }
  ),
  "list-collapse": dynamic(
    () => import("lucide-react/dist/esm/icons/list-collapse"),
    { loading }
  ),
  "list-end": dynamic(() => import("lucide-react/dist/esm/icons/list-end"), {
    loading,
  }),
  "list-filter": dynamic(
    () => import("lucide-react/dist/esm/icons/list-filter"),
    { loading }
  ),
  "list-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/list-minus"),
    { loading }
  ),
  "list-music": dynamic(
    () => import("lucide-react/dist/esm/icons/list-music"),
    { loading }
  ),
  "list-ordered": dynamic(
    () => import("lucide-react/dist/esm/icons/list-ordered"),
    { loading }
  ),
  "list-plus": dynamic(() => import("lucide-react/dist/esm/icons/list-plus"), {
    loading,
  }),
  "list-restart": dynamic(
    () => import("lucide-react/dist/esm/icons/list-restart"),
    { loading }
  ),
  "list-start": dynamic(
    () => import("lucide-react/dist/esm/icons/list-start"),
    { loading }
  ),
  "list-todo": dynamic(() => import("lucide-react/dist/esm/icons/list-todo"), {
    loading,
  }),
  "list-tree": dynamic(() => import("lucide-react/dist/esm/icons/list-tree"), {
    loading,
  }),
  "list-video": dynamic(
    () => import("lucide-react/dist/esm/icons/list-video"),
    { loading }
  ),
  "list-x": dynamic(() => import("lucide-react/dist/esm/icons/list-x"), {
    loading,
  }),
  list: dynamic(() => import("lucide-react/dist/esm/icons/list"), { loading }),
  "loader-circle": dynamic(
    () => import("lucide-react/dist/esm/icons/loader-circle"),
    { loading }
  ),
  loader: dynamic(() => import("lucide-react/dist/esm/icons/loader"), {
    loading,
  }),
  "locate-fixed": dynamic(
    () => import("lucide-react/dist/esm/icons/locate-fixed"),
    { loading }
  ),
  "locate-off": dynamic(
    () => import("lucide-react/dist/esm/icons/locate-off"),
    { loading }
  ),
  locate: dynamic(() => import("lucide-react/dist/esm/icons/locate"), {
    loading,
  }),
  "lock-keyhole-open": dynamic(
    () => import("lucide-react/dist/esm/icons/lock-keyhole-open"),
    { loading }
  ),
  "lock-keyhole": dynamic(
    () => import("lucide-react/dist/esm/icons/lock-keyhole"),
    { loading }
  ),
  "lock-open": dynamic(() => import("lucide-react/dist/esm/icons/lock-open"), {
    loading,
  }),
  lock: dynamic(() => import("lucide-react/dist/esm/icons/lock"), { loading }),
  "log-in": dynamic(() => import("lucide-react/dist/esm/icons/log-in"), {
    loading,
  }),
  "log-out": dynamic(() => import("lucide-react/dist/esm/icons/log-out"), {
    loading,
  }),
  lollipop: dynamic(() => import("lucide-react/dist/esm/icons/lollipop"), {
    loading,
  }),
  luggage: dynamic(() => import("lucide-react/dist/esm/icons/luggage"), {
    loading,
  }),
  magnet: dynamic(() => import("lucide-react/dist/esm/icons/magnet"), {
    loading,
  }),
  "mail-check": dynamic(
    () => import("lucide-react/dist/esm/icons/mail-check"),
    { loading }
  ),
  "mail-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/mail-minus"),
    { loading }
  ),
  "mail-open": dynamic(() => import("lucide-react/dist/esm/icons/mail-open"), {
    loading,
  }),
  "mail-plus": dynamic(() => import("lucide-react/dist/esm/icons/mail-plus"), {
    loading,
  }),
  "mail-question": dynamic(
    () => import("lucide-react/dist/esm/icons/mail-question"),
    { loading }
  ),
  "mail-search": dynamic(
    () => import("lucide-react/dist/esm/icons/mail-search"),
    { loading }
  ),
  "mail-warning": dynamic(
    () => import("lucide-react/dist/esm/icons/mail-warning"),
    { loading }
  ),
  "mail-x": dynamic(() => import("lucide-react/dist/esm/icons/mail-x"), {
    loading,
  }),
  mail: dynamic(() => import("lucide-react/dist/esm/icons/mail"), { loading }),
  mailbox: dynamic(() => import("lucide-react/dist/esm/icons/mailbox"), {
    loading,
  }),
  mails: dynamic(() => import("lucide-react/dist/esm/icons/mails"), {
    loading,
  }),
  "map-pin-off": dynamic(
    () => import("lucide-react/dist/esm/icons/map-pin-off"),
    { loading }
  ),
  "map-pin": dynamic(() => import("lucide-react/dist/esm/icons/map-pin"), {
    loading,
  }),
  "map-pinned": dynamic(
    () => import("lucide-react/dist/esm/icons/map-pinned"),
    { loading }
  ),
  map: dynamic(() => import("lucide-react/dist/esm/icons/map"), { loading }),
  martini: dynamic(() => import("lucide-react/dist/esm/icons/martini"), {
    loading,
  }),
  "maximize-2": dynamic(
    () => import("lucide-react/dist/esm/icons/maximize-2"),
    { loading }
  ),
  maximize: dynamic(() => import("lucide-react/dist/esm/icons/maximize"), {
    loading,
  }),
  medal: dynamic(() => import("lucide-react/dist/esm/icons/medal"), {
    loading,
  }),
  "megaphone-off": dynamic(
    () => import("lucide-react/dist/esm/icons/megaphone-off"),
    { loading }
  ),
  megaphone: dynamic(() => import("lucide-react/dist/esm/icons/megaphone"), {
    loading,
  }),
  meh: dynamic(() => import("lucide-react/dist/esm/icons/meh"), { loading }),
  "memory-stick": dynamic(
    () => import("lucide-react/dist/esm/icons/memory-stick"),
    { loading }
  ),
  menu: dynamic(() => import("lucide-react/dist/esm/icons/menu"), { loading }),
  merge: dynamic(() => import("lucide-react/dist/esm/icons/merge"), {
    loading,
  }),
  "message-circle-code": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-code"),
    { loading }
  ),
  "message-circle-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-dashed"),
    { loading }
  ),
  "message-circle-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-heart"),
    { loading }
  ),
  "message-circle-more": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-more"),
    { loading }
  ),
  "message-circle-off": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-off"),
    { loading }
  ),
  "message-circle-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-plus"),
    { loading }
  ),
  "message-circle-question": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-question"),
    { loading }
  ),
  "message-circle-reply": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-reply"),
    { loading }
  ),
  "message-circle-warning": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-warning"),
    { loading }
  ),
  "message-circle-x": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle-x"),
    { loading }
  ),
  "message-circle": dynamic(
    () => import("lucide-react/dist/esm/icons/message-circle"),
    { loading }
  ),
  "message-square-code": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-code"),
    { loading }
  ),
  "message-square-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-dashed"),
    { loading }
  ),
  "message-square-diff": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-diff"),
    { loading }
  ),
  "message-square-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-dot"),
    { loading }
  ),
  "message-square-heart": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-heart"),
    { loading }
  ),
  "message-square-more": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-more"),
    { loading }
  ),
  "message-square-off": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-off"),
    { loading }
  ),
  "message-square-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-plus"),
    { loading }
  ),
  "message-square-quote": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-quote"),
    { loading }
  ),
  "message-square-reply": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-reply"),
    { loading }
  ),
  "message-square-share": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-share"),
    { loading }
  ),
  "message-square-text": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-text"),
    { loading }
  ),
  "message-square-warning": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-warning"),
    { loading }
  ),
  "message-square-x": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square-x"),
    { loading }
  ),
  "message-square": dynamic(
    () => import("lucide-react/dist/esm/icons/message-square"),
    { loading }
  ),
  "messages-square": dynamic(
    () => import("lucide-react/dist/esm/icons/messages-square"),
    { loading }
  ),
  "mic-off": dynamic(() => import("lucide-react/dist/esm/icons/mic-off"), {
    loading,
  }),
  "mic-vocal": dynamic(() => import("lucide-react/dist/esm/icons/mic-vocal"), {
    loading,
  }),
  mic: dynamic(() => import("lucide-react/dist/esm/icons/mic"), { loading }),
  microscope: dynamic(() => import("lucide-react/dist/esm/icons/microscope"), {
    loading,
  }),
  microwave: dynamic(() => import("lucide-react/dist/esm/icons/microwave"), {
    loading,
  }),
  milestone: dynamic(() => import("lucide-react/dist/esm/icons/milestone"), {
    loading,
  }),
  "milk-off": dynamic(() => import("lucide-react/dist/esm/icons/milk-off"), {
    loading,
  }),
  milk: dynamic(() => import("lucide-react/dist/esm/icons/milk"), { loading }),
  "minimize-2": dynamic(
    () => import("lucide-react/dist/esm/icons/minimize-2"),
    { loading }
  ),
  minimize: dynamic(() => import("lucide-react/dist/esm/icons/minimize"), {
    loading,
  }),
  minus: dynamic(() => import("lucide-react/dist/esm/icons/minus"), {
    loading,
  }),
  "monitor-check": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-check"),
    { loading }
  ),
  "monitor-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-dot"),
    { loading }
  ),
  "monitor-down": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-down"),
    { loading }
  ),
  "monitor-off": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-off"),
    { loading }
  ),
  "monitor-pause": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-pause"),
    { loading }
  ),
  "monitor-play": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-play"),
    { loading }
  ),
  "monitor-smartphone": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-smartphone"),
    { loading }
  ),
  "monitor-speaker": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-speaker"),
    { loading }
  ),
  "monitor-stop": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-stop"),
    { loading }
  ),
  "monitor-up": dynamic(
    () => import("lucide-react/dist/esm/icons/monitor-up"),
    { loading }
  ),
  "monitor-x": dynamic(() => import("lucide-react/dist/esm/icons/monitor-x"), {
    loading,
  }),
  monitor: dynamic(() => import("lucide-react/dist/esm/icons/monitor"), {
    loading,
  }),
  "moon-star": dynamic(() => import("lucide-react/dist/esm/icons/moon-star"), {
    loading,
  }),
  moon: dynamic(() => import("lucide-react/dist/esm/icons/moon"), { loading }),
  "mountain-snow": dynamic(
    () => import("lucide-react/dist/esm/icons/mountain-snow"),
    { loading }
  ),
  mountain: dynamic(() => import("lucide-react/dist/esm/icons/mountain"), {
    loading,
  }),
  "mouse-off": dynamic(() => import("lucide-react/dist/esm/icons/mouse-off"), {
    loading,
  }),
  "mouse-pointer-2": dynamic(
    () => import("lucide-react/dist/esm/icons/mouse-pointer-2"),
    { loading }
  ),
  "mouse-pointer-click": dynamic(
    () => import("lucide-react/dist/esm/icons/mouse-pointer-click"),
    { loading }
  ),
  "mouse-pointer": dynamic(
    () => import("lucide-react/dist/esm/icons/mouse-pointer"),
    { loading }
  ),
  mouse: dynamic(() => import("lucide-react/dist/esm/icons/mouse"), {
    loading,
  }),
  "move-3d": dynamic(() => import("lucide-react/dist/esm/icons/move-3d"), {
    loading,
  }),
  "move-diagonal-2": dynamic(
    () => import("lucide-react/dist/esm/icons/move-diagonal-2"),
    { loading }
  ),
  "move-diagonal": dynamic(
    () => import("lucide-react/dist/esm/icons/move-diagonal"),
    { loading }
  ),
  "move-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/move-down-left"),
    { loading }
  ),
  "move-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/move-down-right"),
    { loading }
  ),
  "move-down": dynamic(() => import("lucide-react/dist/esm/icons/move-down"), {
    loading,
  }),
  "move-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/move-horizontal"),
    { loading }
  ),
  "move-left": dynamic(() => import("lucide-react/dist/esm/icons/move-left"), {
    loading,
  }),
  "move-right": dynamic(
    () => import("lucide-react/dist/esm/icons/move-right"),
    { loading }
  ),
  "move-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/move-up-left"),
    { loading }
  ),
  "move-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/move-up-right"),
    { loading }
  ),
  "move-up": dynamic(() => import("lucide-react/dist/esm/icons/move-up"), {
    loading,
  }),
  "move-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/move-vertical"),
    { loading }
  ),
  move: dynamic(() => import("lucide-react/dist/esm/icons/move"), { loading }),
  "music-2": dynamic(() => import("lucide-react/dist/esm/icons/music-2"), {
    loading,
  }),
  "music-3": dynamic(() => import("lucide-react/dist/esm/icons/music-3"), {
    loading,
  }),
  "music-4": dynamic(() => import("lucide-react/dist/esm/icons/music-4"), {
    loading,
  }),
  music: dynamic(() => import("lucide-react/dist/esm/icons/music"), {
    loading,
  }),
  "navigation-2-off": dynamic(
    () => import("lucide-react/dist/esm/icons/navigation-2-off"),
    { loading }
  ),
  "navigation-2": dynamic(
    () => import("lucide-react/dist/esm/icons/navigation-2"),
    { loading }
  ),
  "navigation-off": dynamic(
    () => import("lucide-react/dist/esm/icons/navigation-off"),
    { loading }
  ),
  navigation: dynamic(() => import("lucide-react/dist/esm/icons/navigation"), {
    loading,
  }),
  network: dynamic(() => import("lucide-react/dist/esm/icons/network"), {
    loading,
  }),
  newspaper: dynamic(() => import("lucide-react/dist/esm/icons/newspaper"), {
    loading,
  }),
  nfc: dynamic(() => import("lucide-react/dist/esm/icons/nfc"), { loading }),
  "notebook-pen": dynamic(
    () => import("lucide-react/dist/esm/icons/notebook-pen"),
    { loading }
  ),
  "notebook-tabs": dynamic(
    () => import("lucide-react/dist/esm/icons/notebook-tabs"),
    { loading }
  ),
  "notebook-text": dynamic(
    () => import("lucide-react/dist/esm/icons/notebook-text"),
    { loading }
  ),
  notebook: dynamic(() => import("lucide-react/dist/esm/icons/notebook"), {
    loading,
  }),
  "notepad-text-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/notepad-text-dashed"),
    { loading }
  ),
  "notepad-text": dynamic(
    () => import("lucide-react/dist/esm/icons/notepad-text"),
    { loading }
  ),
  "nut-off": dynamic(() => import("lucide-react/dist/esm/icons/nut-off"), {
    loading,
  }),
  nut: dynamic(() => import("lucide-react/dist/esm/icons/nut"), { loading }),
  "octagon-alert": dynamic(
    () => import("lucide-react/dist/esm/icons/octagon-alert"),
    { loading }
  ),
  "octagon-pause": dynamic(
    () => import("lucide-react/dist/esm/icons/octagon-pause"),
    { loading }
  ),
  "octagon-x": dynamic(() => import("lucide-react/dist/esm/icons/octagon-x"), {
    loading,
  }),
  octagon: dynamic(() => import("lucide-react/dist/esm/icons/octagon"), {
    loading,
  }),
  option: dynamic(() => import("lucide-react/dist/esm/icons/option"), {
    loading,
  }),
  orbit: dynamic(() => import("lucide-react/dist/esm/icons/orbit"), {
    loading,
  }),
  "package-2": dynamic(() => import("lucide-react/dist/esm/icons/package-2"), {
    loading,
  }),
  "package-check": dynamic(
    () => import("lucide-react/dist/esm/icons/package-check"),
    { loading }
  ),
  "package-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/package-minus"),
    { loading }
  ),
  "package-open": dynamic(
    () => import("lucide-react/dist/esm/icons/package-open"),
    { loading }
  ),
  "package-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/package-plus"),
    { loading }
  ),
  "package-search": dynamic(
    () => import("lucide-react/dist/esm/icons/package-search"),
    { loading }
  ),
  "package-x": dynamic(() => import("lucide-react/dist/esm/icons/package-x"), {
    loading,
  }),
  package: dynamic(() => import("lucide-react/dist/esm/icons/package"), {
    loading,
  }),
  "paint-bucket": dynamic(
    () => import("lucide-react/dist/esm/icons/paint-bucket"),
    { loading }
  ),
  "paint-roller": dynamic(
    () => import("lucide-react/dist/esm/icons/paint-roller"),
    { loading }
  ),
  "paintbrush-2": dynamic(
    () => import("lucide-react/dist/esm/icons/paintbrush-2"),
    { loading }
  ),
  paintbrush: dynamic(() => import("lucide-react/dist/esm/icons/paintbrush"), {
    loading,
  }),
  palette: dynamic(() => import("lucide-react/dist/esm/icons/palette"), {
    loading,
  }),
  "panel-bottom-close": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-bottom-close"),
    { loading }
  ),
  "panel-bottom-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-bottom-dashed"),
    { loading }
  ),
  "panel-bottom-open": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-bottom-open"),
    { loading }
  ),
  "panel-bottom": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-bottom"),
    { loading }
  ),
  "panel-left-close": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-left-close"),
    { loading }
  ),
  "panel-left-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-left-dashed"),
    { loading }
  ),
  "panel-left-open": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-left-open"),
    { loading }
  ),
  "panel-left": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-left"),
    { loading }
  ),
  "panel-right-close": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-right-close"),
    { loading }
  ),
  "panel-right-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-right-dashed"),
    { loading }
  ),
  "panel-right-open": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-right-open"),
    { loading }
  ),
  "panel-right": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-right"),
    { loading }
  ),
  "panel-top-close": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-top-close"),
    { loading }
  ),
  "panel-top-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-top-dashed"),
    { loading }
  ),
  "panel-top-open": dynamic(
    () => import("lucide-react/dist/esm/icons/panel-top-open"),
    { loading }
  ),
  "panel-top": dynamic(() => import("lucide-react/dist/esm/icons/panel-top"), {
    loading,
  }),
  "panels-left-bottom": dynamic(
    () => import("lucide-react/dist/esm/icons/panels-left-bottom"),
    { loading }
  ),
  "panels-right-bottom": dynamic(
    () => import("lucide-react/dist/esm/icons/panels-right-bottom"),
    { loading }
  ),
  "panels-top-left": dynamic(
    () => import("lucide-react/dist/esm/icons/panels-top-left"),
    { loading }
  ),
  paperclip: dynamic(() => import("lucide-react/dist/esm/icons/paperclip"), {
    loading,
  }),
  parentheses: dynamic(
    () => import("lucide-react/dist/esm/icons/parentheses"),
    { loading }
  ),
  "parking-meter": dynamic(
    () => import("lucide-react/dist/esm/icons/parking-meter"),
    { loading }
  ),
  "party-popper": dynamic(
    () => import("lucide-react/dist/esm/icons/party-popper"),
    { loading }
  ),
  pause: dynamic(() => import("lucide-react/dist/esm/icons/pause"), {
    loading,
  }),
  "paw-print": dynamic(() => import("lucide-react/dist/esm/icons/paw-print"), {
    loading,
  }),
  "pc-case": dynamic(() => import("lucide-react/dist/esm/icons/pc-case"), {
    loading,
  }),
  "pen-line": dynamic(() => import("lucide-react/dist/esm/icons/pen-line"), {
    loading,
  }),
  "pen-tool": dynamic(() => import("lucide-react/dist/esm/icons/pen-tool"), {
    loading,
  }),
  pen: dynamic(() => import("lucide-react/dist/esm/icons/pen"), { loading }),
  "pencil-line": dynamic(
    () => import("lucide-react/dist/esm/icons/pencil-line"),
    { loading }
  ),
  "pencil-ruler": dynamic(
    () => import("lucide-react/dist/esm/icons/pencil-ruler"),
    { loading }
  ),
  pencil: dynamic(() => import("lucide-react/dist/esm/icons/pencil"), {
    loading,
  }),
  pentagon: dynamic(() => import("lucide-react/dist/esm/icons/pentagon"), {
    loading,
  }),
  percent: dynamic(() => import("lucide-react/dist/esm/icons/percent"), {
    loading,
  }),
  "person-standing": dynamic(
    () => import("lucide-react/dist/esm/icons/person-standing"),
    { loading }
  ),
  "phone-call": dynamic(
    () => import("lucide-react/dist/esm/icons/phone-call"),
    { loading }
  ),
  "phone-forwarded": dynamic(
    () => import("lucide-react/dist/esm/icons/phone-forwarded"),
    { loading }
  ),
  "phone-incoming": dynamic(
    () => import("lucide-react/dist/esm/icons/phone-incoming"),
    { loading }
  ),
  "phone-missed": dynamic(
    () => import("lucide-react/dist/esm/icons/phone-missed"),
    { loading }
  ),
  "phone-off": dynamic(() => import("lucide-react/dist/esm/icons/phone-off"), {
    loading,
  }),
  "phone-outgoing": dynamic(
    () => import("lucide-react/dist/esm/icons/phone-outgoing"),
    { loading }
  ),
  phone: dynamic(() => import("lucide-react/dist/esm/icons/phone"), {
    loading,
  }),
  pi: dynamic(() => import("lucide-react/dist/esm/icons/pi"), { loading }),
  piano: dynamic(() => import("lucide-react/dist/esm/icons/piano"), {
    loading,
  }),
  pickaxe: dynamic(() => import("lucide-react/dist/esm/icons/pickaxe"), {
    loading,
  }),
  "picture-in-picture-2": dynamic(
    () => import("lucide-react/dist/esm/icons/picture-in-picture-2"),
    { loading }
  ),
  "picture-in-picture": dynamic(
    () => import("lucide-react/dist/esm/icons/picture-in-picture"),
    { loading }
  ),
  "pie-chart": dynamic(() => import("lucide-react/dist/esm/icons/pie-chart"), {
    loading,
  }),
  "piggy-bank": dynamic(
    () => import("lucide-react/dist/esm/icons/piggy-bank"),
    { loading }
  ),
  pilcrow: dynamic(() => import("lucide-react/dist/esm/icons/pilcrow"), {
    loading,
  }),
  pill: dynamic(() => import("lucide-react/dist/esm/icons/pill"), { loading }),
  "pin-off": dynamic(() => import("lucide-react/dist/esm/icons/pin-off"), {
    loading,
  }),
  pin: dynamic(() => import("lucide-react/dist/esm/icons/pin"), { loading }),
  pipette: dynamic(() => import("lucide-react/dist/esm/icons/pipette"), {
    loading,
  }),
  pizza: dynamic(() => import("lucide-react/dist/esm/icons/pizza"), {
    loading,
  }),
  "plane-landing": dynamic(
    () => import("lucide-react/dist/esm/icons/plane-landing"),
    { loading }
  ),
  "plane-takeoff": dynamic(
    () => import("lucide-react/dist/esm/icons/plane-takeoff"),
    { loading }
  ),
  plane: dynamic(() => import("lucide-react/dist/esm/icons/plane"), {
    loading,
  }),
  play: dynamic(() => import("lucide-react/dist/esm/icons/play"), { loading }),
  "plug-2": dynamic(() => import("lucide-react/dist/esm/icons/plug-2"), {
    loading,
  }),
  "plug-zap-2": dynamic(
    () => import("lucide-react/dist/esm/icons/plug-zap-2"),
    { loading }
  ),
  "plug-zap": dynamic(() => import("lucide-react/dist/esm/icons/plug-zap"), {
    loading,
  }),
  plug: dynamic(() => import("lucide-react/dist/esm/icons/plug"), { loading }),
  plus: dynamic(() => import("lucide-react/dist/esm/icons/plus"), { loading }),
  "pocket-knife": dynamic(
    () => import("lucide-react/dist/esm/icons/pocket-knife"),
    { loading }
  ),
  pocket: dynamic(() => import("lucide-react/dist/esm/icons/pocket"), {
    loading,
  }),
  podcast: dynamic(() => import("lucide-react/dist/esm/icons/podcast"), {
    loading,
  }),
  "pointer-off": dynamic(
    () => import("lucide-react/dist/esm/icons/pointer-off"),
    { loading }
  ),
  pointer: dynamic(() => import("lucide-react/dist/esm/icons/pointer"), {
    loading,
  }),
  popcorn: dynamic(() => import("lucide-react/dist/esm/icons/popcorn"), {
    loading,
  }),
  popsicle: dynamic(() => import("lucide-react/dist/esm/icons/popsicle"), {
    loading,
  }),
  "pound-sterling": dynamic(
    () => import("lucide-react/dist/esm/icons/pound-sterling"),
    { loading }
  ),
  "power-off": dynamic(() => import("lucide-react/dist/esm/icons/power-off"), {
    loading,
  }),
  power: dynamic(() => import("lucide-react/dist/esm/icons/power"), {
    loading,
  }),
  presentation: dynamic(
    () => import("lucide-react/dist/esm/icons/presentation"),
    { loading }
  ),
  printer: dynamic(() => import("lucide-react/dist/esm/icons/printer"), {
    loading,
  }),
  projector: dynamic(() => import("lucide-react/dist/esm/icons/projector"), {
    loading,
  }),
  proportions: dynamic(
    () => import("lucide-react/dist/esm/icons/proportions"),
    { loading }
  ),
  puzzle: dynamic(() => import("lucide-react/dist/esm/icons/puzzle"), {
    loading,
  }),
  pyramid: dynamic(() => import("lucide-react/dist/esm/icons/pyramid"), {
    loading,
  }),
  "qr-code": dynamic(() => import("lucide-react/dist/esm/icons/qr-code"), {
    loading,
  }),
  quote: dynamic(() => import("lucide-react/dist/esm/icons/quote"), {
    loading,
  }),
  rabbit: dynamic(() => import("lucide-react/dist/esm/icons/rabbit"), {
    loading,
  }),
  radar: dynamic(() => import("lucide-react/dist/esm/icons/radar"), {
    loading,
  }),
  radiation: dynamic(() => import("lucide-react/dist/esm/icons/radiation"), {
    loading,
  }),
  radical: dynamic(() => import("lucide-react/dist/esm/icons/radical"), {
    loading,
  }),
  "radio-receiver": dynamic(
    () => import("lucide-react/dist/esm/icons/radio-receiver"),
    { loading }
  ),
  "radio-tower": dynamic(
    () => import("lucide-react/dist/esm/icons/radio-tower"),
    { loading }
  ),
  radio: dynamic(() => import("lucide-react/dist/esm/icons/radio"), {
    loading,
  }),
  radius: dynamic(() => import("lucide-react/dist/esm/icons/radius"), {
    loading,
  }),
  "rail-symbol": dynamic(
    () => import("lucide-react/dist/esm/icons/rail-symbol"),
    { loading }
  ),
  rainbow: dynamic(() => import("lucide-react/dist/esm/icons/rainbow"), {
    loading,
  }),
  rat: dynamic(() => import("lucide-react/dist/esm/icons/rat"), { loading }),
  ratio: dynamic(() => import("lucide-react/dist/esm/icons/ratio"), {
    loading,
  }),
  "receipt-cent": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-cent"),
    { loading }
  ),
  "receipt-euro": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-euro"),
    { loading }
  ),
  "receipt-indian-rupee": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-indian-rupee"),
    { loading }
  ),
  "receipt-japanese-yen": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-japanese-yen"),
    { loading }
  ),
  "receipt-pound-sterling": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-pound-sterling"),
    { loading }
  ),
  "receipt-russian-ruble": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-russian-ruble"),
    { loading }
  ),
  "receipt-swiss-franc": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-swiss-franc"),
    { loading }
  ),
  "receipt-text": dynamic(
    () => import("lucide-react/dist/esm/icons/receipt-text"),
    { loading }
  ),
  receipt: dynamic(() => import("lucide-react/dist/esm/icons/receipt"), {
    loading,
  }),
  "rectangle-ellipsis": dynamic(
    () => import("lucide-react/dist/esm/icons/rectangle-ellipsis"),
    { loading }
  ),
  "rectangle-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/rectangle-horizontal"),
    { loading }
  ),
  "rectangle-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/rectangle-vertical"),
    { loading }
  ),
  recycle: dynamic(() => import("lucide-react/dist/esm/icons/recycle"), {
    loading,
  }),
  "redo-2": dynamic(() => import("lucide-react/dist/esm/icons/redo-2"), {
    loading,
  }),
  "redo-dot": dynamic(() => import("lucide-react/dist/esm/icons/redo-dot"), {
    loading,
  }),
  redo: dynamic(() => import("lucide-react/dist/esm/icons/redo"), { loading }),
  "refresh-ccw-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/refresh-ccw-dot"),
    { loading }
  ),
  "refresh-ccw": dynamic(
    () => import("lucide-react/dist/esm/icons/refresh-ccw"),
    { loading }
  ),
  "refresh-cw-off": dynamic(
    () => import("lucide-react/dist/esm/icons/refresh-cw-off"),
    { loading }
  ),
  "refresh-cw": dynamic(
    () => import("lucide-react/dist/esm/icons/refresh-cw"),
    { loading }
  ),
  refrigerator: dynamic(
    () => import("lucide-react/dist/esm/icons/refrigerator"),
    { loading }
  ),
  regex: dynamic(() => import("lucide-react/dist/esm/icons/regex"), {
    loading,
  }),
  "remove-formatting": dynamic(
    () => import("lucide-react/dist/esm/icons/remove-formatting"),
    { loading }
  ),
  "repeat-1": dynamic(() => import("lucide-react/dist/esm/icons/repeat-1"), {
    loading,
  }),
  "repeat-2": dynamic(() => import("lucide-react/dist/esm/icons/repeat-2"), {
    loading,
  }),
  repeat: dynamic(() => import("lucide-react/dist/esm/icons/repeat"), {
    loading,
  }),
  "replace-all": dynamic(
    () => import("lucide-react/dist/esm/icons/replace-all"),
    { loading }
  ),
  replace: dynamic(() => import("lucide-react/dist/esm/icons/replace"), {
    loading,
  }),
  "reply-all": dynamic(() => import("lucide-react/dist/esm/icons/reply-all"), {
    loading,
  }),
  reply: dynamic(() => import("lucide-react/dist/esm/icons/reply"), {
    loading,
  }),
  rewind: dynamic(() => import("lucide-react/dist/esm/icons/rewind"), {
    loading,
  }),
  ribbon: dynamic(() => import("lucide-react/dist/esm/icons/ribbon"), {
    loading,
  }),
  rocket: dynamic(() => import("lucide-react/dist/esm/icons/rocket"), {
    loading,
  }),
  "rocking-chair": dynamic(
    () => import("lucide-react/dist/esm/icons/rocking-chair"),
    { loading }
  ),
  "roller-coaster": dynamic(
    () => import("lucide-react/dist/esm/icons/roller-coaster"),
    { loading }
  ),
  "rotate-3d": dynamic(() => import("lucide-react/dist/esm/icons/rotate-3d"), {
    loading,
  }),
  "rotate-ccw-square": dynamic(
    () => import("lucide-react/dist/esm/icons/rotate-ccw-square"),
    { loading }
  ),
  "rotate-ccw": dynamic(
    () => import("lucide-react/dist/esm/icons/rotate-ccw"),
    { loading }
  ),
  "rotate-cw-square": dynamic(
    () => import("lucide-react/dist/esm/icons/rotate-cw-square"),
    { loading }
  ),
  "rotate-cw": dynamic(() => import("lucide-react/dist/esm/icons/rotate-cw"), {
    loading,
  }),
  "route-off": dynamic(() => import("lucide-react/dist/esm/icons/route-off"), {
    loading,
  }),
  route: dynamic(() => import("lucide-react/dist/esm/icons/route"), {
    loading,
  }),
  router: dynamic(() => import("lucide-react/dist/esm/icons/router"), {
    loading,
  }),
  "rows-2": dynamic(() => import("lucide-react/dist/esm/icons/rows-2"), {
    loading,
  }),
  "rows-3": dynamic(() => import("lucide-react/dist/esm/icons/rows-3"), {
    loading,
  }),
  "rows-4": dynamic(() => import("lucide-react/dist/esm/icons/rows-4"), {
    loading,
  }),
  rss: dynamic(() => import("lucide-react/dist/esm/icons/rss"), { loading }),
  ruler: dynamic(() => import("lucide-react/dist/esm/icons/ruler"), {
    loading,
  }),
  "russian-ruble": dynamic(
    () => import("lucide-react/dist/esm/icons/russian-ruble"),
    { loading }
  ),
  sailboat: dynamic(() => import("lucide-react/dist/esm/icons/sailboat"), {
    loading,
  }),
  salad: dynamic(() => import("lucide-react/dist/esm/icons/salad"), {
    loading,
  }),
  sandwich: dynamic(() => import("lucide-react/dist/esm/icons/sandwich"), {
    loading,
  }),
  "satellite-dish": dynamic(
    () => import("lucide-react/dist/esm/icons/satellite-dish"),
    { loading }
  ),
  satellite: dynamic(() => import("lucide-react/dist/esm/icons/satellite"), {
    loading,
  }),
  "save-all": dynamic(() => import("lucide-react/dist/esm/icons/save-all"), {
    loading,
  }),
  save: dynamic(() => import("lucide-react/dist/esm/icons/save"), { loading }),
  "scale-3d": dynamic(() => import("lucide-react/dist/esm/icons/scale-3d"), {
    loading,
  }),
  scale: dynamic(() => import("lucide-react/dist/esm/icons/scale"), {
    loading,
  }),
  scaling: dynamic(() => import("lucide-react/dist/esm/icons/scaling"), {
    loading,
  }),
  "scan-barcode": dynamic(
    () => import("lucide-react/dist/esm/icons/scan-barcode"),
    { loading }
  ),
  "scan-eye": dynamic(() => import("lucide-react/dist/esm/icons/scan-eye"), {
    loading,
  }),
  "scan-face": dynamic(() => import("lucide-react/dist/esm/icons/scan-face"), {
    loading,
  }),
  "scan-line": dynamic(() => import("lucide-react/dist/esm/icons/scan-line"), {
    loading,
  }),
  "scan-search": dynamic(
    () => import("lucide-react/dist/esm/icons/scan-search"),
    { loading }
  ),
  "scan-text": dynamic(() => import("lucide-react/dist/esm/icons/scan-text"), {
    loading,
  }),
  scan: dynamic(() => import("lucide-react/dist/esm/icons/scan"), { loading }),
  "scatter-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/scatter-chart"),
    { loading }
  ),
  school: dynamic(() => import("lucide-react/dist/esm/icons/school"), {
    loading,
  }),
  "scissors-line-dashed": dynamic(
    () => import("lucide-react/dist/esm/icons/scissors-line-dashed"),
    { loading }
  ),
  scissors: dynamic(() => import("lucide-react/dist/esm/icons/scissors"), {
    loading,
  }),
  "screen-share-off": dynamic(
    () => import("lucide-react/dist/esm/icons/screen-share-off"),
    { loading }
  ),
  "screen-share": dynamic(
    () => import("lucide-react/dist/esm/icons/screen-share"),
    { loading }
  ),
  "scroll-text": dynamic(
    () => import("lucide-react/dist/esm/icons/scroll-text"),
    { loading }
  ),
  scroll: dynamic(() => import("lucide-react/dist/esm/icons/scroll"), {
    loading,
  }),
  "search-check": dynamic(
    () => import("lucide-react/dist/esm/icons/search-check"),
    { loading }
  ),
  "search-code": dynamic(
    () => import("lucide-react/dist/esm/icons/search-code"),
    { loading }
  ),
  "search-slash": dynamic(
    () => import("lucide-react/dist/esm/icons/search-slash"),
    { loading }
  ),
  "search-x": dynamic(() => import("lucide-react/dist/esm/icons/search-x"), {
    loading,
  }),
  search: dynamic(() => import("lucide-react/dist/esm/icons/search"), {
    loading,
  }),
  "send-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/send-horizontal"),
    { loading }
  ),
  "send-to-back": dynamic(
    () => import("lucide-react/dist/esm/icons/send-to-back"),
    { loading }
  ),
  send: dynamic(() => import("lucide-react/dist/esm/icons/send"), { loading }),
  "separator-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/separator-horizontal"),
    { loading }
  ),
  "separator-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/separator-vertical"),
    { loading }
  ),
  "server-cog": dynamic(
    () => import("lucide-react/dist/esm/icons/server-cog"),
    { loading }
  ),
  "server-crash": dynamic(
    () => import("lucide-react/dist/esm/icons/server-crash"),
    { loading }
  ),
  "server-off": dynamic(
    () => import("lucide-react/dist/esm/icons/server-off"),
    { loading }
  ),
  server: dynamic(() => import("lucide-react/dist/esm/icons/server"), {
    loading,
  }),
  "settings-2": dynamic(
    () => import("lucide-react/dist/esm/icons/settings-2"),
    { loading }
  ),
  settings: dynamic(() => import("lucide-react/dist/esm/icons/settings"), {
    loading,
  }),
  shapes: dynamic(() => import("lucide-react/dist/esm/icons/shapes"), {
    loading,
  }),
  "share-2": dynamic(() => import("lucide-react/dist/esm/icons/share-2"), {
    loading,
  }),
  share: dynamic(() => import("lucide-react/dist/esm/icons/share"), {
    loading,
  }),
  sheet: dynamic(() => import("lucide-react/dist/esm/icons/sheet"), {
    loading,
  }),
  shell: dynamic(() => import("lucide-react/dist/esm/icons/shell"), {
    loading,
  }),
  "shield-alert": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-alert"),
    { loading }
  ),
  "shield-ban": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-ban"),
    { loading }
  ),
  "shield-check": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-check"),
    { loading }
  ),
  "shield-ellipsis": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-ellipsis"),
    { loading }
  ),
  "shield-half": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-half"),
    { loading }
  ),
  "shield-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-minus"),
    { loading }
  ),
  "shield-off": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-off"),
    { loading }
  ),
  "shield-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-plus"),
    { loading }
  ),
  "shield-question": dynamic(
    () => import("lucide-react/dist/esm/icons/shield-question"),
    { loading }
  ),
  "shield-x": dynamic(() => import("lucide-react/dist/esm/icons/shield-x"), {
    loading,
  }),
  shield: dynamic(() => import("lucide-react/dist/esm/icons/shield"), {
    loading,
  }),
  "ship-wheel": dynamic(
    () => import("lucide-react/dist/esm/icons/ship-wheel"),
    { loading }
  ),
  ship: dynamic(() => import("lucide-react/dist/esm/icons/ship"), { loading }),
  shirt: dynamic(() => import("lucide-react/dist/esm/icons/shirt"), {
    loading,
  }),
  "shopping-bag": dynamic(
    () => import("lucide-react/dist/esm/icons/shopping-bag"),
    { loading }
  ),
  "shopping-basket": dynamic(
    () => import("lucide-react/dist/esm/icons/shopping-basket"),
    { loading }
  ),
  "shopping-cart": dynamic(
    () => import("lucide-react/dist/esm/icons/shopping-cart"),
    { loading }
  ),
  shovel: dynamic(() => import("lucide-react/dist/esm/icons/shovel"), {
    loading,
  }),
  "shower-head": dynamic(
    () => import("lucide-react/dist/esm/icons/shower-head"),
    { loading }
  ),
  shrink: dynamic(() => import("lucide-react/dist/esm/icons/shrink"), {
    loading,
  }),
  shrub: dynamic(() => import("lucide-react/dist/esm/icons/shrub"), {
    loading,
  }),
  shuffle: dynamic(() => import("lucide-react/dist/esm/icons/shuffle"), {
    loading,
  }),
  sigma: dynamic(() => import("lucide-react/dist/esm/icons/sigma"), {
    loading,
  }),
  "signal-high": dynamic(
    () => import("lucide-react/dist/esm/icons/signal-high"),
    { loading }
  ),
  "signal-low": dynamic(
    () => import("lucide-react/dist/esm/icons/signal-low"),
    { loading }
  ),
  "signal-medium": dynamic(
    () => import("lucide-react/dist/esm/icons/signal-medium"),
    { loading }
  ),
  "signal-zero": dynamic(
    () => import("lucide-react/dist/esm/icons/signal-zero"),
    { loading }
  ),
  signal: dynamic(() => import("lucide-react/dist/esm/icons/signal"), {
    loading,
  }),
  "signpost-big": dynamic(
    () => import("lucide-react/dist/esm/icons/signpost-big"),
    { loading }
  ),
  signpost: dynamic(() => import("lucide-react/dist/esm/icons/signpost"), {
    loading,
  }),
  siren: dynamic(() => import("lucide-react/dist/esm/icons/siren"), {
    loading,
  }),
  "skip-back": dynamic(() => import("lucide-react/dist/esm/icons/skip-back"), {
    loading,
  }),
  "skip-forward": dynamic(
    () => import("lucide-react/dist/esm/icons/skip-forward"),
    { loading }
  ),
  skull: dynamic(() => import("lucide-react/dist/esm/icons/skull"), {
    loading,
  }),
  slack: dynamic(() => import("lucide-react/dist/esm/icons/slack"), {
    loading,
  }),
  slash: dynamic(() => import("lucide-react/dist/esm/icons/slash"), {
    loading,
  }),
  slice: dynamic(() => import("lucide-react/dist/esm/icons/slice"), {
    loading,
  }),
  "sliders-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/sliders-horizontal"),
    { loading }
  ),
  "sliders-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/sliders-vertical"),
    { loading }
  ),
  "smartphone-charging": dynamic(
    () => import("lucide-react/dist/esm/icons/smartphone-charging"),
    { loading }
  ),
  "smartphone-nfc": dynamic(
    () => import("lucide-react/dist/esm/icons/smartphone-nfc"),
    { loading }
  ),
  smartphone: dynamic(() => import("lucide-react/dist/esm/icons/smartphone"), {
    loading,
  }),
  "smile-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/smile-plus"),
    { loading }
  ),
  smile: dynamic(() => import("lucide-react/dist/esm/icons/smile"), {
    loading,
  }),
  snail: dynamic(() => import("lucide-react/dist/esm/icons/snail"), {
    loading,
  }),
  snowflake: dynamic(() => import("lucide-react/dist/esm/icons/snowflake"), {
    loading,
  }),
  sofa: dynamic(() => import("lucide-react/dist/esm/icons/sofa"), { loading }),
  soup: dynamic(() => import("lucide-react/dist/esm/icons/soup"), { loading }),
  space: dynamic(() => import("lucide-react/dist/esm/icons/space"), {
    loading,
  }),
  spade: dynamic(() => import("lucide-react/dist/esm/icons/spade"), {
    loading,
  }),
  sparkle: dynamic(() => import("lucide-react/dist/esm/icons/sparkle"), {
    loading,
  }),
  sparkles: dynamic(() => import("lucide-react/dist/esm/icons/sparkles"), {
    loading,
  }),
  speaker: dynamic(() => import("lucide-react/dist/esm/icons/speaker"), {
    loading,
  }),
  speech: dynamic(() => import("lucide-react/dist/esm/icons/speech"), {
    loading,
  }),
  "spell-check-2": dynamic(
    () => import("lucide-react/dist/esm/icons/spell-check-2"),
    { loading }
  ),
  "spell-check": dynamic(
    () => import("lucide-react/dist/esm/icons/spell-check"),
    { loading }
  ),
  spline: dynamic(() => import("lucide-react/dist/esm/icons/spline"), {
    loading,
  }),
  split: dynamic(() => import("lucide-react/dist/esm/icons/split"), {
    loading,
  }),
  "spray-can": dynamic(() => import("lucide-react/dist/esm/icons/spray-can"), {
    loading,
  }),
  sprout: dynamic(() => import("lucide-react/dist/esm/icons/sprout"), {
    loading,
  }),
  "square-activity": dynamic(
    () => import("lucide-react/dist/esm/icons/square-activity"),
    { loading }
  ),
  "square-arrow-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-down-left"),
    { loading }
  ),
  "square-arrow-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-down-right"),
    { loading }
  ),
  "square-arrow-down": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-down"),
    { loading }
  ),
  "square-arrow-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-left"),
    { loading }
  ),
  "square-arrow-out-down-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-out-down-left"),
    { loading }
  ),
  "square-arrow-out-down-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-out-down-right"),
    { loading }
  ),
  "square-arrow-out-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-out-up-left"),
    { loading }
  ),
  "square-arrow-out-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-out-up-right"),
    { loading }
  ),
  "square-arrow-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-right"),
    { loading }
  ),
  "square-arrow-up-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-up-left"),
    { loading }
  ),
  "square-arrow-up-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-up-right"),
    { loading }
  ),
  "square-arrow-up": dynamic(
    () => import("lucide-react/dist/esm/icons/square-arrow-up"),
    { loading }
  ),
  "square-asterisk": dynamic(
    () => import("lucide-react/dist/esm/icons/square-asterisk"),
    { loading }
  ),
  "square-bottom-dashed-scissors": () =>
    dynamic(
      () => import("lucide-react/dist/esm/icons/square-bottom-dashed-scissors"),
      { loading }
    ),
  "square-check-big": dynamic(
    () => import("lucide-react/dist/esm/icons/square-check-big"),
    { loading }
  ),
  "square-check": dynamic(
    () => import("lucide-react/dist/esm/icons/square-check"),
    { loading }
  ),
  "square-chevron-down": dynamic(
    () => import("lucide-react/dist/esm/icons/square-chevron-down"),
    { loading }
  ),
  "square-chevron-left": dynamic(
    () => import("lucide-react/dist/esm/icons/square-chevron-left"),
    { loading }
  ),
  "square-chevron-right": dynamic(
    () => import("lucide-react/dist/esm/icons/square-chevron-right"),
    { loading }
  ),
  "square-chevron-up": dynamic(
    () => import("lucide-react/dist/esm/icons/square-chevron-up"),
    { loading }
  ),
  "square-code": dynamic(
    () => import("lucide-react/dist/esm/icons/square-code"),
    { loading }
  ),
  "square-dashed-bottom-code": dynamic(
    () => import("lucide-react/dist/esm/icons/square-dashed-bottom-code"),
    { loading }
  ),
  "square-dashed-bottom": dynamic(
    () => import("lucide-react/dist/esm/icons/square-dashed-bottom"),
    { loading }
  ),
  "square-dashed-kanban": dynamic(
    () => import("lucide-react/dist/esm/icons/square-dashed-kanban"),
    { loading }
  ),
  "square-dashed-mouse-pointer": dynamic(
    () => import("lucide-react/dist/esm/icons/square-dashed-mouse-pointer")
  ),
  "square-divide": dynamic(
    () => import("lucide-react/dist/esm/icons/square-divide"),
    { loading }
  ),
  "square-dot": dynamic(
    () => import("lucide-react/dist/esm/icons/square-dot"),
    { loading }
  ),
  "square-equal": dynamic(
    () => import("lucide-react/dist/esm/icons/square-equal"),
    { loading }
  ),
  "square-function": dynamic(
    () => import("lucide-react/dist/esm/icons/square-function"),
    { loading }
  ),
  "square-gantt-chart": dynamic(
    () => import("lucide-react/dist/esm/icons/square-gantt-chart"),
    { loading }
  ),
  "square-kanban": dynamic(
    () => import("lucide-react/dist/esm/icons/square-kanban"),
    { loading }
  ),
  "square-library": dynamic(
    () => import("lucide-react/dist/esm/icons/square-library"),
    { loading }
  ),
  "square-m": dynamic(() => import("lucide-react/dist/esm/icons/square-m"), {
    loading,
  }),
  "square-menu": dynamic(
    () => import("lucide-react/dist/esm/icons/square-menu"),
    { loading }
  ),
  "square-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/square-minus"),
    { loading }
  ),
  "square-mouse-pointer": dynamic(
    () => import("lucide-react/dist/esm/icons/square-mouse-pointer"),
    { loading }
  ),
  "square-parking-off": dynamic(
    () => import("lucide-react/dist/esm/icons/square-parking-off"),
    { loading }
  ),
  "square-parking": dynamic(
    () => import("lucide-react/dist/esm/icons/square-parking"),
    { loading }
  ),
  "square-pen": dynamic(
    () => import("lucide-react/dist/esm/icons/square-pen"),
    { loading }
  ),
  "square-percent": dynamic(
    () => import("lucide-react/dist/esm/icons/square-percent"),
    { loading }
  ),
  "square-pi": dynamic(() => import("lucide-react/dist/esm/icons/square-pi"), {
    loading,
  }),
  "square-pilcrow": dynamic(
    () => import("lucide-react/dist/esm/icons/square-pilcrow"),
    { loading }
  ),
  "square-play": dynamic(
    () => import("lucide-react/dist/esm/icons/square-play"),
    { loading }
  ),
  "square-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/square-plus"),
    { loading }
  ),
  "square-power": dynamic(
    () => import("lucide-react/dist/esm/icons/square-power"),
    { loading }
  ),
  "square-radical": dynamic(
    () => import("lucide-react/dist/esm/icons/square-radical"),
    { loading }
  ),
  "square-scissors": dynamic(
    () => import("lucide-react/dist/esm/icons/square-scissors"),
    { loading }
  ),
  "square-sigma": dynamic(
    () => import("lucide-react/dist/esm/icons/square-sigma"),
    { loading }
  ),
  "square-slash": dynamic(
    () => import("lucide-react/dist/esm/icons/square-slash"),
    { loading }
  ),
  "square-split-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/square-split-horizontal"),
    { loading }
  ),
  "square-split-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/square-split-vertical"),
    { loading }
  ),
  "square-stack": dynamic(
    () => import("lucide-react/dist/esm/icons/square-stack"),
    { loading }
  ),
  "square-terminal": dynamic(
    () => import("lucide-react/dist/esm/icons/square-terminal"),
    { loading }
  ),
  "square-user-round": dynamic(
    () => import("lucide-react/dist/esm/icons/square-user-round"),
    { loading }
  ),
  "square-user": dynamic(
    () => import("lucide-react/dist/esm/icons/square-user"),
    { loading }
  ),
  "square-x": dynamic(() => import("lucide-react/dist/esm/icons/square-x"), {
    loading,
  }),
  square: dynamic(() => import("lucide-react/dist/esm/icons/square"), {
    loading,
  }),
  squircle: dynamic(() => import("lucide-react/dist/esm/icons/squircle"), {
    loading,
  }),
  squirrel: dynamic(() => import("lucide-react/dist/esm/icons/squirrel"), {
    loading,
  }),
  stamp: dynamic(() => import("lucide-react/dist/esm/icons/stamp"), {
    loading,
  }),
  "star-half": dynamic(() => import("lucide-react/dist/esm/icons/star-half"), {
    loading,
  }),
  "star-off": dynamic(() => import("lucide-react/dist/esm/icons/star-off"), {
    loading,
  }),
  star: dynamic(() => import("lucide-react/dist/esm/icons/star"), { loading }),
  "step-back": dynamic(() => import("lucide-react/dist/esm/icons/step-back"), {
    loading,
  }),
  "step-forward": dynamic(
    () => import("lucide-react/dist/esm/icons/step-forward"),
    { loading }
  ),
  stethoscope: dynamic(
    () => import("lucide-react/dist/esm/icons/stethoscope"),
    { loading }
  ),
  sticker: dynamic(() => import("lucide-react/dist/esm/icons/sticker"), {
    loading,
  }),
  "sticky-note": dynamic(
    () => import("lucide-react/dist/esm/icons/sticky-note"),
    { loading }
  ),
  store: dynamic(() => import("lucide-react/dist/esm/icons/store"), {
    loading,
  }),
  "stretch-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/stretch-horizontal"),
    { loading }
  ),
  "stretch-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/stretch-vertical"),
    { loading }
  ),
  strikethrough: dynamic(
    () => import("lucide-react/dist/esm/icons/strikethrough"),
    { loading }
  ),
  subscript: dynamic(() => import("lucide-react/dist/esm/icons/subscript"), {
    loading,
  }),
  "sun-dim": dynamic(() => import("lucide-react/dist/esm/icons/sun-dim"), {
    loading,
  }),
  "sun-medium": dynamic(
    () => import("lucide-react/dist/esm/icons/sun-medium"),
    { loading }
  ),
  "sun-moon": dynamic(() => import("lucide-react/dist/esm/icons/sun-moon"), {
    loading,
  }),
  "sun-snow": dynamic(() => import("lucide-react/dist/esm/icons/sun-snow"), {
    loading,
  }),
  sun: dynamic(() => import("lucide-react/dist/esm/icons/sun"), { loading }),
  sunrise: dynamic(() => import("lucide-react/dist/esm/icons/sunrise"), {
    loading,
  }),
  sunset: dynamic(() => import("lucide-react/dist/esm/icons/sunset"), {
    loading,
  }),
  superscript: dynamic(
    () => import("lucide-react/dist/esm/icons/superscript"),
    { loading }
  ),
  "swatch-book": dynamic(
    () => import("lucide-react/dist/esm/icons/swatch-book"),
    { loading }
  ),
  "swiss-franc": dynamic(
    () => import("lucide-react/dist/esm/icons/swiss-franc"),
    { loading }
  ),
  "switch-camera": dynamic(
    () => import("lucide-react/dist/esm/icons/switch-camera"),
    { loading }
  ),
  sword: dynamic(() => import("lucide-react/dist/esm/icons/sword"), {
    loading,
  }),
  swords: dynamic(() => import("lucide-react/dist/esm/icons/swords"), {
    loading,
  }),
  syringe: dynamic(() => import("lucide-react/dist/esm/icons/syringe"), {
    loading,
  }),
  "table-2": dynamic(() => import("lucide-react/dist/esm/icons/table-2"), {
    loading,
  }),
  "table-cells-merge": dynamic(
    () => import("lucide-react/dist/esm/icons/table-cells-merge"),
    { loading }
  ),
  "table-cells-split": dynamic(
    () => import("lucide-react/dist/esm/icons/table-cells-split"),
    { loading }
  ),
  "table-columns-split": dynamic(
    () => import("lucide-react/dist/esm/icons/table-columns-split"),
    { loading }
  ),
  "table-properties": dynamic(
    () => import("lucide-react/dist/esm/icons/table-properties"),
    { loading }
  ),
  "table-rows-split": dynamic(
    () => import("lucide-react/dist/esm/icons/table-rows-split"),
    { loading }
  ),
  table: dynamic(() => import("lucide-react/dist/esm/icons/table"), {
    loading,
  }),
  "tablet-smartphone": dynamic(
    () => import("lucide-react/dist/esm/icons/tablet-smartphone"),
    { loading }
  ),
  tablet: dynamic(() => import("lucide-react/dist/esm/icons/tablet"), {
    loading,
  }),
  tablets: dynamic(() => import("lucide-react/dist/esm/icons/tablets"), {
    loading,
  }),
  tag: dynamic(() => import("lucide-react/dist/esm/icons/tag"), { loading }),
  tags: dynamic(() => import("lucide-react/dist/esm/icons/tags"), { loading }),
  "tally-1": dynamic(() => import("lucide-react/dist/esm/icons/tally-1"), {
    loading,
  }),
  "tally-2": dynamic(() => import("lucide-react/dist/esm/icons/tally-2"), {
    loading,
  }),
  "tally-3": dynamic(() => import("lucide-react/dist/esm/icons/tally-3"), {
    loading,
  }),
  "tally-4": dynamic(() => import("lucide-react/dist/esm/icons/tally-4"), {
    loading,
  }),
  "tally-5": dynamic(() => import("lucide-react/dist/esm/icons/tally-5"), {
    loading,
  }),
  tangent: dynamic(() => import("lucide-react/dist/esm/icons/tangent"), {
    loading,
  }),
  target: dynamic(() => import("lucide-react/dist/esm/icons/target"), {
    loading,
  }),
  telescope: dynamic(() => import("lucide-react/dist/esm/icons/telescope"), {
    loading,
  }),
  "tent-tree": dynamic(() => import("lucide-react/dist/esm/icons/tent-tree"), {
    loading,
  }),
  tent: dynamic(() => import("lucide-react/dist/esm/icons/tent"), { loading }),
  terminal: dynamic(() => import("lucide-react/dist/esm/icons/terminal"), {
    loading,
  }),
  "test-tube-diagonal": dynamic(
    () => import("lucide-react/dist/esm/icons/test-tube-diagonal"),
    { loading }
  ),
  "test-tube": dynamic(() => import("lucide-react/dist/esm/icons/test-tube"), {
    loading,
  }),
  "test-tubes": dynamic(
    () => import("lucide-react/dist/esm/icons/test-tubes"),
    { loading }
  ),
  "text-cursor-input": dynamic(
    () => import("lucide-react/dist/esm/icons/text-cursor-input"),
    { loading }
  ),
  "text-cursor": dynamic(
    () => import("lucide-react/dist/esm/icons/text-cursor"),
    { loading }
  ),
  "text-quote": dynamic(
    () => import("lucide-react/dist/esm/icons/text-quote"),
    { loading }
  ),
  "text-search": dynamic(
    () => import("lucide-react/dist/esm/icons/text-search"),
    { loading }
  ),
  "text-select": dynamic(
    () => import("lucide-react/dist/esm/icons/text-select"),
    { loading }
  ),
  text: dynamic(() => import("lucide-react/dist/esm/icons/text"), { loading }),
  theater: dynamic(() => import("lucide-react/dist/esm/icons/theater"), {
    loading,
  }),
  "thermometer-snowflake": dynamic(
    () => import("lucide-react/dist/esm/icons/thermometer-snowflake"),
    { loading }
  ),
  "thermometer-sun": dynamic(
    () => import("lucide-react/dist/esm/icons/thermometer-sun"),
    { loading }
  ),
  thermometer: dynamic(
    () => import("lucide-react/dist/esm/icons/thermometer"),
    { loading }
  ),
  "thumbs-down": dynamic(
    () => import("lucide-react/dist/esm/icons/thumbs-down"),
    { loading }
  ),
  "thumbs-up": dynamic(() => import("lucide-react/dist/esm/icons/thumbs-up"), {
    loading,
  }),
  "ticket-check": dynamic(
    () => import("lucide-react/dist/esm/icons/ticket-check"),
    { loading }
  ),
  "ticket-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/ticket-minus"),
    { loading }
  ),
  "ticket-percent": dynamic(
    () => import("lucide-react/dist/esm/icons/ticket-percent"),
    { loading }
  ),
  "ticket-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/ticket-plus"),
    { loading }
  ),
  "ticket-slash": dynamic(
    () => import("lucide-react/dist/esm/icons/ticket-slash"),
    { loading }
  ),
  "ticket-x": dynamic(() => import("lucide-react/dist/esm/icons/ticket-x"), {
    loading,
  }),
  ticket: dynamic(() => import("lucide-react/dist/esm/icons/ticket"), {
    loading,
  }),
  "timer-off": dynamic(() => import("lucide-react/dist/esm/icons/timer-off"), {
    loading,
  }),
  "timer-reset": dynamic(
    () => import("lucide-react/dist/esm/icons/timer-reset"),
    { loading }
  ),
  timer: dynamic(() => import("lucide-react/dist/esm/icons/timer"), {
    loading,
  }),
  "toggle-left": dynamic(
    () => import("lucide-react/dist/esm/icons/toggle-left"),
    { loading }
  ),
  "toggle-right": dynamic(
    () => import("lucide-react/dist/esm/icons/toggle-right"),
    { loading }
  ),
  tornado: dynamic(() => import("lucide-react/dist/esm/icons/tornado"), {
    loading,
  }),
  torus: dynamic(() => import("lucide-react/dist/esm/icons/torus"), {
    loading,
  }),
  "touchpad-off": dynamic(
    () => import("lucide-react/dist/esm/icons/touchpad-off"),
    { loading }
  ),
  touchpad: dynamic(() => import("lucide-react/dist/esm/icons/touchpad"), {
    loading,
  }),
  "tower-control": dynamic(
    () => import("lucide-react/dist/esm/icons/tower-control"),
    { loading }
  ),
  "toy-brick": dynamic(() => import("lucide-react/dist/esm/icons/toy-brick"), {
    loading,
  }),
  tractor: dynamic(() => import("lucide-react/dist/esm/icons/tractor"), {
    loading,
  }),
  "traffic-cone": dynamic(
    () => import("lucide-react/dist/esm/icons/traffic-cone"),
    { loading }
  ),
  "train-front-tunnel": dynamic(
    () => import("lucide-react/dist/esm/icons/train-front-tunnel"),
    { loading }
  ),
  "train-front": dynamic(
    () => import("lucide-react/dist/esm/icons/train-front"),
    { loading }
  ),
  "train-track": dynamic(
    () => import("lucide-react/dist/esm/icons/train-track"),
    { loading }
  ),
  "tram-front": dynamic(
    () => import("lucide-react/dist/esm/icons/tram-front"),
    { loading }
  ),
  "trash-2": dynamic(() => import("lucide-react/dist/esm/icons/trash-2"), {
    loading,
  }),
  trash: dynamic(() => import("lucide-react/dist/esm/icons/trash"), {
    loading,
  }),
  "tree-deciduous": dynamic(
    () => import("lucide-react/dist/esm/icons/tree-deciduous"),
    { loading }
  ),
  "tree-palm": dynamic(() => import("lucide-react/dist/esm/icons/tree-palm"), {
    loading,
  }),
  "tree-pine": dynamic(() => import("lucide-react/dist/esm/icons/tree-pine"), {
    loading,
  }),
  trees: dynamic(() => import("lucide-react/dist/esm/icons/trees"), {
    loading,
  }),
  trello: dynamic(() => import("lucide-react/dist/esm/icons/trello"), {
    loading,
  }),
  "trending-down": dynamic(
    () => import("lucide-react/dist/esm/icons/trending-down"),
    { loading }
  ),
  "trending-up": dynamic(
    () => import("lucide-react/dist/esm/icons/trending-up"),
    { loading }
  ),
  "triangle-alert": dynamic(
    () => import("lucide-react/dist/esm/icons/triangle-alert"),
    { loading }
  ),
  "triangle-right": dynamic(
    () => import("lucide-react/dist/esm/icons/triangle-right"),
    { loading }
  ),
  triangle: dynamic(() => import("lucide-react/dist/esm/icons/triangle"), {
    loading,
  }),
  trophy: dynamic(() => import("lucide-react/dist/esm/icons/trophy"), {
    loading,
  }),
  truck: dynamic(() => import("lucide-react/dist/esm/icons/truck"), {
    loading,
  }),
  turtle: dynamic(() => import("lucide-react/dist/esm/icons/turtle"), {
    loading,
  }),
  "tv-2": dynamic(() => import("lucide-react/dist/esm/icons/tv-2"), {
    loading,
  }),
  tv: dynamic(() => import("lucide-react/dist/esm/icons/tv"), { loading }),
  twitch: dynamic(() => import("lucide-react/dist/esm/icons/twitch"), {
    loading,
  }),
  twitter: dynamic(() => import("lucide-react/dist/esm/icons/twitter"), {
    loading,
  }),
  type: dynamic(() => import("lucide-react/dist/esm/icons/type"), { loading }),
  "umbrella-off": dynamic(
    () => import("lucide-react/dist/esm/icons/umbrella-off"),
    { loading }
  ),
  umbrella: dynamic(() => import("lucide-react/dist/esm/icons/umbrella"), {
    loading,
  }),
  underline: dynamic(() => import("lucide-react/dist/esm/icons/underline"), {
    loading,
  }),
  "undo-2": dynamic(() => import("lucide-react/dist/esm/icons/undo-2"), {
    loading,
  }),
  "undo-dot": dynamic(() => import("lucide-react/dist/esm/icons/undo-dot"), {
    loading,
  }),
  undo: dynamic(() => import("lucide-react/dist/esm/icons/undo"), { loading }),
  "unfold-horizontal": dynamic(
    () => import("lucide-react/dist/esm/icons/unfold-horizontal"),
    { loading }
  ),
  "unfold-vertical": dynamic(
    () => import("lucide-react/dist/esm/icons/unfold-vertical"),
    { loading }
  ),
  ungroup: dynamic(() => import("lucide-react/dist/esm/icons/ungroup"), {
    loading,
  }),
  university: dynamic(() => import("lucide-react/dist/esm/icons/university"), {
    loading,
  }),
  "unlink-2": dynamic(() => import("lucide-react/dist/esm/icons/unlink-2"), {
    loading,
  }),
  unlink: dynamic(() => import("lucide-react/dist/esm/icons/unlink"), {
    loading,
  }),
  unplug: dynamic(() => import("lucide-react/dist/esm/icons/unplug"), {
    loading,
  }),
  upload: dynamic(() => import("lucide-react/dist/esm/icons/upload"), {
    loading,
  }),
  usb: dynamic(() => import("lucide-react/dist/esm/icons/usb"), { loading }),
  "user-check": dynamic(
    () => import("lucide-react/dist/esm/icons/user-check"),
    { loading }
  ),
  "user-cog": dynamic(() => import("lucide-react/dist/esm/icons/user-cog"), {
    loading,
  }),
  "user-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/user-minus"),
    { loading }
  ),
  "user-plus": dynamic(() => import("lucide-react/dist/esm/icons/user-plus"), {
    loading,
  }),
  "user-round-check": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-check"),
    { loading }
  ),
  "user-round-cog": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-cog"),
    { loading }
  ),
  "user-round-minus": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-minus"),
    { loading }
  ),
  "user-round-plus": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-plus"),
    { loading }
  ),
  "user-round-search": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-search"),
    { loading }
  ),
  "user-round-x": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round-x"),
    { loading }
  ),
  "user-round": dynamic(
    () => import("lucide-react/dist/esm/icons/user-round"),
    { loading }
  ),
  "user-search": dynamic(
    () => import("lucide-react/dist/esm/icons/user-search"),
    { loading }
  ),
  "user-x": dynamic(() => import("lucide-react/dist/esm/icons/user-x"), {
    loading,
  }),
  user: dynamic(() => import("lucide-react/dist/esm/icons/user"), { loading }),
  "users-round": dynamic(
    () => import("lucide-react/dist/esm/icons/users-round"),
    { loading }
  ),
  users: dynamic(() => import("lucide-react/dist/esm/icons/users"), {
    loading,
  }),
  "utensils-crossed": dynamic(
    () => import("lucide-react/dist/esm/icons/utensils-crossed"),
    { loading }
  ),
  utensils: dynamic(() => import("lucide-react/dist/esm/icons/utensils"), {
    loading,
  }),
  "utility-pole": dynamic(
    () => import("lucide-react/dist/esm/icons/utility-pole"),
    { loading }
  ),
  variable: dynamic(() => import("lucide-react/dist/esm/icons/variable"), {
    loading,
  }),
  vault: dynamic(() => import("lucide-react/dist/esm/icons/vault"), {
    loading,
  }),
  vegan: dynamic(() => import("lucide-react/dist/esm/icons/vegan"), {
    loading,
  }),
  "venetian-mask": dynamic(
    () => import("lucide-react/dist/esm/icons/venetian-mask"),
    { loading }
  ),
  "vibrate-off": dynamic(
    () => import("lucide-react/dist/esm/icons/vibrate-off"),
    { loading }
  ),
  vibrate: dynamic(() => import("lucide-react/dist/esm/icons/vibrate"), {
    loading,
  }),
  "video-off": dynamic(() => import("lucide-react/dist/esm/icons/video-off"), {
    loading,
  }),
  video: dynamic(() => import("lucide-react/dist/esm/icons/video"), {
    loading,
  }),
  videotape: dynamic(() => import("lucide-react/dist/esm/icons/videotape"), {
    loading,
  }),
  view: dynamic(() => import("lucide-react/dist/esm/icons/view"), { loading }),
  voicemail: dynamic(() => import("lucide-react/dist/esm/icons/voicemail"), {
    loading,
  }),
  "volume-1": dynamic(() => import("lucide-react/dist/esm/icons/volume-1"), {
    loading,
  }),
  "volume-2": dynamic(() => import("lucide-react/dist/esm/icons/volume-2"), {
    loading,
  }),
  "volume-x": dynamic(() => import("lucide-react/dist/esm/icons/volume-x"), {
    loading,
  }),
  volume: dynamic(() => import("lucide-react/dist/esm/icons/volume"), {
    loading,
  }),
  vote: dynamic(() => import("lucide-react/dist/esm/icons/vote"), { loading }),
  "wallet-cards": dynamic(
    () => import("lucide-react/dist/esm/icons/wallet-cards"),
    { loading }
  ),
  "wallet-minimal": dynamic(
    () => import("lucide-react/dist/esm/icons/wallet-minimal"),
    { loading }
  ),
  wallet: dynamic(() => import("lucide-react/dist/esm/icons/wallet"), {
    loading,
  }),
  wallpaper: dynamic(() => import("lucide-react/dist/esm/icons/wallpaper"), {
    loading,
  }),
  "wand-sparkles": dynamic(
    () => import("lucide-react/dist/esm/icons/wand-sparkles"),
    { loading }
  ),
  wand: dynamic(() => import("lucide-react/dist/esm/icons/wand"), { loading }),
  warehouse: dynamic(() => import("lucide-react/dist/esm/icons/warehouse"), {
    loading,
  }),
  "washing-machine": dynamic(
    () => import("lucide-react/dist/esm/icons/washing-machine"),
    { loading }
  ),
  watch: dynamic(() => import("lucide-react/dist/esm/icons/watch"), {
    loading,
  }),
  waves: dynamic(() => import("lucide-react/dist/esm/icons/waves"), {
    loading,
  }),
  waypoints: dynamic(() => import("lucide-react/dist/esm/icons/waypoints"), {
    loading,
  }),
  webcam: dynamic(() => import("lucide-react/dist/esm/icons/webcam"), {
    loading,
  }),
  "webhook-off": dynamic(
    () => import("lucide-react/dist/esm/icons/webhook-off"),
    { loading }
  ),
  webhook: dynamic(() => import("lucide-react/dist/esm/icons/webhook"), {
    loading,
  }),
  weight: dynamic(() => import("lucide-react/dist/esm/icons/weight"), {
    loading,
  }),
  "wheat-off": dynamic(() => import("lucide-react/dist/esm/icons/wheat-off"), {
    loading,
  }),
  wheat: dynamic(() => import("lucide-react/dist/esm/icons/wheat"), {
    loading,
  }),
  "whole-word": dynamic(
    () => import("lucide-react/dist/esm/icons/whole-word"),
    { loading }
  ),
  "wifi-off": dynamic(() => import("lucide-react/dist/esm/icons/wifi-off"), {
    loading,
  }),
  wifi: dynamic(() => import("lucide-react/dist/esm/icons/wifi"), { loading }),
  wind: dynamic(() => import("lucide-react/dist/esm/icons/wind"), { loading }),
  "wine-off": dynamic(() => import("lucide-react/dist/esm/icons/wine-off"), {
    loading,
  }),
  wine: dynamic(() => import("lucide-react/dist/esm/icons/wine"), { loading }),
  workflow: dynamic(() => import("lucide-react/dist/esm/icons/workflow"), {
    loading,
  }),
  worm: dynamic(() => import("lucide-react/dist/esm/icons/worm"), { loading }),
  "wrap-text": dynamic(() => import("lucide-react/dist/esm/icons/wrap-text"), {
    loading,
  }),
  wrench: dynamic(() => import("lucide-react/dist/esm/icons/wrench"), {
    loading,
  }),
  x: dynamic(() => import("lucide-react/dist/esm/icons/x"), { loading }),
  youtube: dynamic(() => import("lucide-react/dist/esm/icons/youtube"), {
    loading,
  }),
  "zap-off": dynamic(() => import("lucide-react/dist/esm/icons/zap-off"), {
    loading,
  }),
  zap: dynamic(() => import("lucide-react/dist/esm/icons/zap"), { loading }),
  "zoom-in": dynamic(() => import("lucide-react/dist/esm/icons/zoom-in"), {
    loading,
  }),
  "zoom-out": dynamic(() => import("lucide-react/dist/esm/icons/zoom-out"), {
    loading,
  }),
};
