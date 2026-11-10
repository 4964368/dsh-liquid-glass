window.__ModuleLoader__.load({
  id: '@wuren2/dsh-liquid-glass',
  factory(require) {
    const { createElement, useState } = require('react');
    const css = ":where(html[data-hlg]) {\n  --lg-intensity: .75;\n}\n\nhtml[data-hlg] body {\n  --hlg-spring: cubic-bezier(.34, 1.56, .64, 1);\n  --hlg-base: #e3e9f8;\n  --hlg-ink: #141a29;\n  --hlg-ink-secondary: #566077;\n  --hlg-layer: #f8faff;\n  --hlg-glass-tint: 6%;\n  --hlg-edge: rgb(255 255 255 / .72);\n  --hlg-shadow: 0 12px 36px rgb(30 45 100 / .20);\n  --hlg-reading: #f4f6fb;\n  --hlg-code: #e9edf5;\n  --hlg-content-edge: rgb(43 64 112 / .12);\n  --hlg-pill: rgb(255 255 255 / .34);\n  --hlg-pill-hover: rgb(255 255 255 / .50);\n  --hlg-accent: #3b6dff;\n  --hlg-blue: linear-gradient(180deg, #6a9eff, #3862ee);\n  --hlg-user-bubble: #416bea;\n  --hlg-ambient: rgb(104 140 229 / .13);\n}\n\nhtml[data-hlg] body:is([data-liang-skin=\"on\"][data-liang-stage=\"5\"], [data-ds-dark-theme]:not([data-liang-skin=\"on\"])) {\n  --hlg-base: #080b14;\n  --hlg-ink: #f2f5fc;\n  --hlg-ink-secondary: #b3bfd7;\n  --hlg-layer: #171d2d;\n  --hlg-glass-tint: 4%;\n  --hlg-edge: rgb(227 237 255 / .23);\n  --hlg-shadow: 0 12px 36px rgb(0 0 0 / .45);\n  --hlg-reading: #191f2d;\n  --hlg-code: #101622;\n  --hlg-content-edge: rgb(205 221 255 / .12);\n  --hlg-pill: rgb(228 237 255 / .12);\n  --hlg-pill-hover: rgb(228 237 255 / .22);\n  --hlg-accent: #7ea6ff;\n  --hlg-user-bubble: #3258cb;\n  --hlg-ambient: rgb(103 127 218 / .15);\n}\n\nhtml[data-hlg] :is([data-hlg-background], [data-hlg-surface]) {\n  --dsw-alias-bg-base: transparent;\n  --dsw-alias-bg-layer-1: var(--hlg-reading);\n  --dsw-alias-bg-layer-2: var(--hlg-layer);\n  --dsw-alias-bg-layer-3: var(--hlg-layer);\n  --dsw-alias-label-primary: var(--hlg-ink);\n  --dsw-alias-label-primary-dimmed: var(--hlg-ink);\n  --dsw-alias-label-secondary: var(--hlg-ink-secondary);\n  --dsw-alias-label-tertiary: var(--hlg-ink-secondary);\n  --dsw-alias-label-caption: var(--hlg-ink-secondary);\n  --dsw-alias-interactive-bg-hover: var(--hlg-pill);\n  --dsw-alias-interactive-bg-active: var(--hlg-pill-hover);\n  --dsw-alias-state-business-primary: var(--hlg-accent);\n  --dsw-specific-sidebar-nav-item-active: var(--hlg-pill-hover);\n  --dsw-specific-selector: var(--hlg-pill);\n  color: var(--hlg-ink);\n}\n\nhtml[data-hlg] [data-hlg-background] {\n  isolation: isolate;\n  background: var(--hlg-base);\n}\n\n/* Liang still owns this node, its portrait sequence and slider-driven state. */\nhtml[data-hlg] [data-hlg-background] .liang-skin-backdrop {\n  position: fixed;\n  inset: var(--dsh-windows-titlebar-height, 0px) 0 0;\n  z-index: -1;\n}\n\n/* Fill the sides from the same wallpaper that Liang is displaying. */\nhtml[data-hlg] [data-hlg-background] .liang-skin-backdrop[data-media=\"sequence\"]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: var(--hlg-wallpaper-image, none) center / cover;\n  filter: saturate(.55);\n  opacity: .22;\n}\n\nhtml[data-hlg] [data-hlg-background]:not(:has(.liang-skin-backdrop[data-media=\"sequence\"] img))::after {\n  content: \"\";\n  position: absolute;\n  inset: var(--dsh-windows-titlebar-height, 0px) 0 0;\n  z-index: -1;\n  pointer-events: none;\n  background: radial-gradient(ellipse at 14% 22%, var(--hlg-ambient), transparent 67%);\n}\n\nhtml[data-hlg] [data-hlg-background] > [class*=\"_centerCol\"],\nhtml[data-hlg] [data-hlg-background] [data-hlg-chat-shell] {\n  background: transparent;\n}\n\nhtml[data-hlg] [data-hlg-background] [data-composer-seat] {\n  background: transparent !important;\n  will-change: auto;\n}\n\nhtml[data-hlg] [data-hlg-background] > [data-hlg-surface=\"sidebar\"] {\n  margin: 14px 0 14px 14px;\n  border: 0;\n  overflow: visible;\n}\n\nhtml[data-hlg] [data-hlg-background]:not([data-sidebar-drawer]) > [class*=\"_centerCol\"] {\n  margin: 14px;\n  border-radius: 30px;\n}\n\nhtml[data-hlg] [data-hlg-chat-shell] [class*=\"_header\"]:has(> [class*=\"_tabs\"] [data-conversation-tabs]) {\n  border-bottom: 0;\n  padding: 6px 14px 8px;\n}\n\n@media (min-width: 1080px) {\n  html[data-hlg] [data-hlg-chat-shell] [class*=\"_header\"]:has(> [class*=\"_tabs\"] [data-conversation-tabs]) {\n    display: flex;\n    flex-wrap: wrap;\n    min-height: 56px;\n    align-items: center;\n    gap: 12px;\n  }\n\n  html[data-hlg] [data-hlg-chat-shell] [class*=\"_header\"]:has(> [class*=\"_tabs\"] [data-conversation-tabs]) > [class*=\"_titleRow\"] {\n    min-width: 0;\n    flex: 1 1 180px;\n  }\n\n  html[data-hlg] [data-hlg-chat-shell] [class*=\"_tabs\"]:has(> [data-conversation-tabs]) {\n    /* Harness reserves 48px plus 120px per pinned view. The visible pill stays compact. */\n    width: 412px;\n    max-width: 100%;\n    flex: none;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 8px;\n    margin: 0 0 0 auto;\n    padding: 0;\n  }\n}\n\nhtml[data-hlg] [data-hlg-surface],\nhtml[data-hlg] [data-hlg-thumb] {\n  --hlg-material: var(--hlg-layer);\n  --hlg-tint: 59%;\n  --hlg-highlight: radial-gradient(230px circle at var(--hlg-x, 30%) var(--hlg-y, 0%), rgb(255 255 255 / var(--hlg-glint, 0)), transparent 68%);\n  background-color: color-mix(in srgb, var(--hlg-material) var(--hlg-tint), transparent);\n  background-image: var(--hlg-highlight);\n  --hlg-surface-shadow: inset 0 0 0 1px var(--hlg-edge), inset 0 1px 0 rgb(255 255 255 / .42),\n    inset 0 -7px 18px rgb(255 255 255 / .07), var(--hlg-shadow);\n  box-shadow: var(--hlg-surface-shadow);\n}\n\nhtml[data-hlg] [data-hlg-hover] {\n  --hlg-glint: .14;\n}\n\nhtml[data-hlg] [data-hlg-mode=\"frost\"] {\n  --hlg-tint: 76%;\n  --hlg-surface-filter: blur(22px) saturate(1.6);\n  -webkit-backdrop-filter: var(--hlg-surface-filter);\n  backdrop-filter: var(--hlg-surface-filter);\n}\n\nhtml[data-hlg] [data-hlg-mode=\"lens\"] {\n  --hlg-material: white;\n  --hlg-tint: var(--hlg-glass-tint);\n  --hlg-surface-filter: var(--hlg-user-blur,) var(--hlg-filter) brightness(1.04);\n  -webkit-backdrop-filter: var(--hlg-surface-filter);\n  backdrop-filter: var(--hlg-surface-filter);\n}\n\nhtml[data-hlg] [data-hlg-mode=\"flat\"] {\n  --hlg-tint: 88%;\n  --hlg-surface-shadow: inset 0 0 0 1px var(--hlg-edge), inset 0 1px 0 rgb(255 255 255 / .22);\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] {\n  max-width: 780px;\n  border-radius: 32px;\n  gap: 10px;\n  padding: 13px 12px 8px;\n  transition: translate .5s var(--hlg-spring);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"][data-hlg-mode=\"lens\"]:has([data-trigger-menu]),\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"]:is([data-hlg-mode=\"lens\"], [data-hlg-mode=\"frost\"]) {\n  position: relative;\n  isolation: isolate;\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n}\n\n/* Filtering only the paint layer leaves the native fixed titlebar toggle viewport-relative. */\nhtml[data-hlg] [data-hlg-surface=\"composer\"][data-hlg-mode=\"lens\"]:has([data-trigger-menu])::before,\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"]:is([data-hlg-mode=\"lens\"], [data-hlg-mode=\"frost\"])::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  border-radius: inherit;\n  -webkit-backdrop-filter: var(--hlg-surface-filter);\n  backdrop-filter: var(--hlg-surface-filter);\n}\n\n/* Liang's first stages use an important background shorthand on this card. */\nhtml[data-hlg] body[data-liang-skin=\"on\"] [data-composer-card][data-hlg-surface=\"composer\"] {\n  background-color: color-mix(in srgb, var(--hlg-material) var(--hlg-tint), transparent) !important;\n  background-image: var(--hlg-highlight) !important;\n  box-shadow: var(--hlg-surface-shadow);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] {\n  --dsw-specific-sidebar-fill: transparent;\n  border-radius: 30px;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] [class*=\"_root\"]:has(> [class*=\"_logoRow\"]) {\n  box-sizing: border-box;\n  width: 100% !important;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] [class$=\"_dragPreview\"] {\n  background-color: color-mix(in srgb, var(--hlg-layer) 88%, transparent);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] [role=\"treeitem\"][aria-selected=\"true\"] {\n  border-radius: 12px;\n  background-color: var(--hlg-pill-hover);\n  box-shadow: inset 0 0 0 1px var(--hlg-edge);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"right\"] {\n  --hlg-material: var(--dsw-alias-bg-layer-1, Canvas);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"right\"] > [class*=\"_panelBody\"],\nhtml[data-hlg] [data-hlg-surface=\"right\"] :is([data-dockkit-host=\"dock\"], [data-dockkit-empty]) {\n  background-color: transparent;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"popover\"] {\n  border-radius: 24px;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"popover\"][data-menu-material] {\n  --dsw-menu-surface-fill: transparent;\n  --dsw-menu-backdrop-filter: none;\n}\n\nhtml[data-hlg] [data-trigger-menu][data-hlg-mode=\"lens\"] {\n  background-color: color-mix(in srgb, white var(--hlg-glass-tint), transparent);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"popover\"][role=\"dialog\"]::before {\n  background-color: transparent;\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"tooltip\"]:not([data-hlg-mode=\"lens\"]) {\n  --hlg-material: var(--dsw-alias-tooltip-bg, var(--dsw-alias-bg-layer-3, var(--dsw-alias-bg-layer-2, Canvas)));\n  --hlg-tint: 88%;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"toast\"]:not([data-hlg-mode=\"lens\"]) {\n  --hlg-material: var(--dsw-alias-toast-bg, var(--dsw-alias-bg-layer-3, var(--dsw-alias-bg-layer-2, Canvas)));\n  --hlg-tint: 86%;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"dialog\"][data-shortcut-modal=\"settings\"] {\n  --dsw-alias-settings-card-fill: color-mix(in srgb, var(--dsw-alias-bg-layer-2, Canvas) 90%, var(--dsw-alias-bg-layer-1, Canvas));\n  --dsw-alias-settings-card-stroke: var(--hlg-edge);\n}\n\nhtml[data-hlg] .hlg-preferences {\n  display: grid;\n  gap: 16px;\n  padding: 12px 0;\n}\n\nhtml[data-hlg] .hlg-preference {\n  display: grid;\n  grid-template-columns: minmax(90px, auto) minmax(0, 1fr) 4ch;\n  gap: 12px;\n  align-items: center;\n}\n\nhtml[data-hlg] .hlg-preference input {\n  min-width: 0;\n  width: 100%;\n  accent-color: var(--hlg-accent);\n}\n\nhtml[data-hlg] .hlg-preference output {\n  text-align: end;\n  font-variant-numeric: tabular-nums;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] [class*=\"_row\"] :is(button[class*=\"_add\"], button[class*=\"_trigger\"], button[aria-haspopup]):not([class*=\"_primary\"]) {\n  min-height: 34px;\n  padding-inline: 12px;\n  background: var(--hlg-pill) !important;\n  border-radius: 999px;\n  box-shadow: inset 0 0 0 1px var(--hlg-edge), inset 0 1px 0 rgb(255 255 255 / .26);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] button[class*=\"_newSession\"] {\n  min-height: 40px;\n  border-radius: 14px;\n  background: var(--hlg-pill) !important;\n  box-shadow: inset 0 0 0 1px var(--hlg-edge);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] [class*=\"_row\"] button[class*=\"_add\"] {\n  width: 34px;\n  padding-inline: 0;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] [class*=\"_row\"] :is(button[class*=\"_add\"], button[class*=\"_trigger\"], button[aria-haspopup]):not([class*=\"_primary\"]):hover:not(:disabled),\nhtml[data-hlg] [data-hlg-surface=\"sidebar\"] button[class*=\"_newSession\"]:hover:not(:disabled) {\n  background: var(--hlg-pill-hover) !important;\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] button[class*=\"_primary\"] {\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  color: white !important;\n  background: var(--hlg-blue) !important;\n  border-radius: 50%;\n  box-shadow: inset 0 1px 1px rgb(255 255 255 / .68), 0 5px 13px rgb(59 109 255 / .28);\n}\n\nhtml[data-hlg] [data-hlg-surface=\"composer\"] .liang-effort-control {\n  box-sizing: content-box;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: var(--hlg-pill);\n  box-shadow: inset 0 0 0 1px var(--hlg-edge);\n}\n\nhtml[data-hlg] :is([data-hlg-surface=\"composer\"], [data-hlg-surface=\"sidebar\"]) :is(button[class*=\"_add\"], button[class*=\"_trigger\"], button[class*=\"_primary\"], button[class*=\"_newSession\"]) {\n  transition: scale .45s var(--hlg-spring), translate .45s var(--hlg-spring), background-color .2s;\n}\n\nhtml[data-hlg] :is([data-hlg-surface=\"composer\"], [data-hlg-surface=\"sidebar\"]) :is(button[class*=\"_add\"], button[class*=\"_trigger\"], button[class*=\"_primary\"], button[class*=\"_newSession\"]):active:not(:disabled) {\n  scale: .94;\n}\n\n@media (hover: hover) and (pointer: fine) {\n  html[data-hlg] [data-hlg-surface=\"composer\"]:hover {\n    translate: 0 -2px;\n  }\n}\n\nhtml[data-hlg] [data-chat-flow] {\n  --dsw-alias-markdown-code-block: var(--hlg-code);\n  --dsw-alias-markdown-code-block-banner: var(--hlg-code);\n  --dsw-alias-markdown-inline-code: var(--hlg-code);\n}\n\nhtml[data-hlg] [data-chat-flow] [data-message-bubble] {\n  --dsw-alias-label-primary: white;\n  --dsw-alias-label-secondary: #edf3ff;\n  color: white;\n  background: var(--hlg-user-bubble);\n  border-radius: 22px;\n  box-shadow: none;\n}\n\nhtml[data-hlg] [data-chat-flow] :is([data-tool], [data-chat-flow-kind=\"assistant-step\"] [class*=\"_root\"]:has(> [class*=\"_body\"])) {\n  background-color: var(--hlg-reading);\n  border-radius: 16px;\n  box-shadow: inset 0 0 0 1px var(--hlg-content-edge);\n  padding: 10px 13px;\n}\n\nhtml[data-hlg] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_root\"]:has(> [class*=\"_body\"]) {\n  padding: 14px 18px;\n  border-radius: 22px;\n}\n\nhtml[data-hlg] [data-hlg-track][data-hlg-relative] {\n  position: relative;\n}\n\nhtml[data-hlg] [data-hlg-track=\"segments\"] {\n  background-color: var(--hlg-pill);\n  border-radius: 999px;\n  touch-action: pan-y;\n  box-shadow: inset 0 0 0 1px var(--hlg-edge);\n}\n\nhtml[data-hlg] [data-conversation-tabs][data-hlg-track=\"segments\"] {\n  flex: 0 1 auto;\n  align-items: center;\n  gap: 2px;\n  padding: 0 4px;\n  min-height: 42px;\n}\n\nhtml[data-hlg] [data-conversation-tabs][data-hlg-track=\"segments\"] > [role=\"tab\"] {\n  height: 40px;\n  min-height: 0;\n  margin: 0;\n  padding: 0 16px;\n  border-radius: 999px;\n}\n\nhtml[data-hlg] [data-conversation-tabs][data-hlg-track=\"segments\"] > [role=\"tab\"]::after {\n  content: none;\n}\n\nhtml[data-hlg] [data-conversation-tabs][data-hlg-track=\"segments\"] > [aria-selected=\"true\"] {\n  color: var(--hlg-ink);\n}\n\nhtml[data-hlg] [data-hlg-track=\"segments\"] > [role=\"tab\"] {\n  position: relative;\n  z-index: 3;\n}\n\nhtml[data-hlg] [data-hlg-track=\"segments\"] > [class*=\"_indicator\"],\nhtml[data-hlg] [data-hlg-track=\"switch\"] > [class*=\"_thumb\"] {\n  opacity: 0;\n}\n\nhtml[data-hlg] input[data-hlg-range]::-webkit-slider-thumb {\n  opacity: 0;\n}\n\nhtml[data-hlg] input[data-hlg-range]::-moz-range-thumb {\n  opacity: 0;\n}\n\nhtml[data-hlg] [data-hlg-thumb] {\n  position: absolute;\n  inset: 0 auto auto 0;\n  z-index: 2;\n  pointer-events: none;\n  border-radius: 999px;\n  margin: 0;\n  transition: none;\n  --hlg-material: var(--dsw-specific-selector, Canvas);\n  --hlg-tint: 13%;\n  box-shadow: inset 0 0 0 1px var(--hlg-edge), inset 0 1px 0 rgb(255 255 255 / .50), 0 3px 8px rgb(20 28 50 / .13);\n}\n\n/* The centre is the original backdrop. Only the masked rim is composited. */\nhtml[data-hlg] [data-hlg-thumb][data-hlg-mode=\"lens\"] {\n  --hlg-material: white;\n  --hlg-tint: var(--hlg-glass-tint);\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n}\n\nhtml[data-hlg] [data-hlg-thumb][data-hlg-mode=\"lens\"]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  padding: var(--hlg-bezel, 0px);\n  pointer-events: none;\n  -webkit-backdrop-filter: var(--hlg-user-blur,) var(--hlg-filter);\n  backdrop-filter: var(--hlg-user-blur,) var(--hlg-filter);\n  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  mask-composite: exclude;\n}\n\nhtml[data-hlg] [data-hlg-thumb][data-hlg-mode=\"frost\"] {\n  --hlg-tint: 52%;\n  -webkit-backdrop-filter: blur(7px) saturate(1.5);\n  backdrop-filter: blur(7px) saturate(1.5);\n}\n\nhtml[data-hlg] [data-hlg-thumb][data-hlg-mode=\"flat\"] {\n  --hlg-tint: 66%;\n}\n\n@media (prefers-reduced-transparency: reduce) {\n  html[data-hlg] [data-hlg-surface] {\n    --hlg-tint: 96% !important;\n    background-image: none;\n  }\n  html[data-hlg] [data-hlg-thumb] {\n    --hlg-tint: 92%;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html[data-hlg] [data-hlg-surface=\"composer\"],\n  html[data-hlg] :is([data-hlg-surface=\"composer\"], [data-hlg-surface=\"sidebar\"]) :is(button[class*=\"_add\"], button[class*=\"_trigger\"], button[class*=\"_primary\"], button[class*=\"_newSession\"]) {\n    translate: none !important;\n    scale: none !important;\n    transition: none;\n  }\n}\n";
    const PREFERENCE_KEY = 'dsh-liquid-glass.appearance';
    const SETTINGS_LOCALE = 'dsh-liquid-glass-settings';
    const DEFAULT_INTENSITY = 75;
    const TRIGGER_MENU = '[data-trigger-menu]';
    const SVG = 'http://www.w3.org/2000/svg';
    const SPRING = 'cubic-bezier(.34, 1.56, .64, 1)';
    const CHANNELS = [
      [1.025, '1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'],
      [1, '0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0'],
      [.975, '0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0'],
    ];
    const SURFACES = [
      ['composer', '[data-composer-card]', 36, 42, 3],
      ['sidebar', '[class*="_frame"]:not([data-sidebar-drawer], [data-sidebar-collapsed]) > [class*="_sidebarCol"]:has([class*="_logoRow"])', 34, 40, 4],
      ['right', '[data-sidebar-right-panel="push"][data-sidebar-right-open]', 26, 25, 5],
      ['popover', TRIGGER_MENU + ', [data-menu-material], [role="menu"][class*="_menu"], [role="listbox"][class*="_panel"], [role="dialog"][class*="_panel"]:not([aria-modal="true"])', 28, 30, 0],
      ['dialog', '[role="dialog"][aria-modal="true"]:not([data-shortcut-modal="sidebar"])', 28, 27, 0],
      ['tooltip', '[role="tooltip"]', 12, 10, 2],
      ['toast', '[role="alert"][class*="_toast_"]', 22, 22, 1],
    ];
    const SURFACE_SELECTOR = SURFACES.map(([, selector]) => selector).join(', ');
    const TRACK_SELECTOR = [
      '[role="tablist"]:has(> [class*="_indicator"]):has(> [role="tab"])',
      '[data-conversation-tabs][role="tablist"]:has(> [role="tab"])',
      '[role="switch"]:has(> [class*="_thumb"])',
      'input[type="range"]:not(.liang-effort-control__range, [data-hlg-preference])',
    ].join(', ');
    const FRAME_SELECTOR = '[class*="_frame"]:has(> [data-shell-overlay])';
    const WALLPAPER_SELECTOR = '.liang-skin-backdrop';
    const EXCLUDED = '[class*="dshwv-"], [id^="dshwv-"], ' + WALLPAPER_SELECTOR;
    const CANDIDATE_SELECTOR = [SURFACE_SELECTOR, TRACK_SELECTOR, FRAME_SELECTOR].join(', ');
    const MAX_SURFACE_FILTERS = 4;
    const MAX_THUMB_FILTERS = 4;
    const MAX_MAPS = 28;
    const PROFILE_STEPS = 128;
    const PROFILE = Float32Array.from({ length: PROFILE_STEPS + 1 }, (_, index) => {
      const position = 1 - index / PROFILE_STEPS;
      const slope = position / Math.sqrt(Math.max(1 - position * position, 1e-3));
      const angle = Math.atan(slope);
      return Math.tan(angle - Math.asin(Math.sin(angle) / 1.5));
    });
    const peak = Math.max(...PROFILE);
    for (let index = 0; index < PROFILE.length; index++) PROFILE[index] /= peak;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    const number = (value, fallback) => Number.isFinite(value) ? value : fallback;

    function registerSettings(ctx) {
      const root = document.documentElement;
      const fields = [
        { key: 'intensity', property: '--lg-intensity', max: 160, defaultValue: DEFAULT_INTENSITY, cssValue: value => String(value / 100) },
        { key: 'blur', property: '--hlg-user-blur', max: 100, defaultValue: 2, cssValue: value => `blur(${value * 28 / 100}px)` },
      ];
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem(PREFERENCE_KEY) || '{}') ?? {}; } catch {}
      let values = Object.fromEntries(fields.map(field => [field.key,
        Math.round(clamp(number(saved[field.key], field.defaultValue), 0, field.max)),
      ]));
      const originals = fields.map(({ property }) => [property, root.style.getPropertyValue(property), root.style.getPropertyPriority(property)]);

      function applyValue(field, value) {
        if (field.key === 'blur' && value === 0) root.style.removeProperty(field.property);
        else root.style.setProperty(field.property, field.cssValue(value));
      }

      for (const field of fields) applyValue(field, values[field.key]);
      ctx.effect(() => () => {
        for (const [property, value, priority] of originals) {
          if (value) root.style.setProperty(property, value, priority);
          else root.style.removeProperty(property);
        }
      });

      function Settings({ t }) {
        const [current, setCurrent] = useState(values);
        return createElement('div', { className: 'hlg-preferences' }, fields.map(field =>
          createElement('label', { key: field.key, className: 'hlg-preference' },
            createElement('span', null, t(field.key)),
            createElement('input', {
              type: 'range', min: 0, max: field.max, step: 1, value: current[field.key],
              'data-hlg-preference': field.key, 'aria-label': t(field.key),
              onChange: event => {
                const value = event.currentTarget.valueAsNumber;
                values = { ...values, [field.key]: value };
                saved = { ...saved, [field.key]: value };
                applyValue(field, value);
                try { localStorage.setItem(PREFERENCE_KEY, JSON.stringify(saved)); } catch {}
                setCurrent(values);
              },
            }),
            createElement('output', null, field.key === 'intensity' ? `${current[field.key]}%` : current[field.key]),
          )));
      }

      ctx.inject(['slots', 'locale'], scope => {
        scope.effect(() => scope.locale.register(SETTINGS_LOCALE, {
          zh: { title: 'Liquid_Glass', intensity: '折射强度', blur: '背景模糊' },
          en: { title: 'Liquid_Glass', intensity: 'Refraction intensity', blur: 'Background blur' },
        }));
        const title = scope.locale.bind(SETTINGS_LOCALE);
        scope.slots.inject('settings.section', () => scope.slots.register({
          name: 'settings.section', id: 'dsh-liquid-glass-settings', order: 47,
          label: () => title('title'), locale: SETTINGS_LOCALE,
        }, Settings));
        scope.slots.inject('plugins.bundle.config', () => scope.slots.register({
          name: 'plugins.bundle.config', key: '@wuren2/dsh-liquid-glass', locale: SETTINGS_LOCALE,
        }, Settings));
      });
    }

    class Spring {
      constructor(value, stiffness, damping) {
        this.value = this.target = value;
        this.velocity = 0;
        this.stiffness = stiffness;
        this.damping = damping;
      }

      step(dt) {
        this.velocity += (this.stiffness * (this.target - this.value) - this.damping * this.velocity) * dt;
        this.value += this.velocity * dt;
      }

      snap() {
        this.value = this.target;
        this.velocity = 0;
      }

      get settled() {
        return Math.abs(this.velocity) < .4 && Math.abs(this.target - this.value) < .15;
      }
    }

    function roundedMap(context, width, height, radii, bezel) {
      // Large surfaces are rasterized at a capped resolution. A moving thumb is
      // small enough for one map pixel per CSS pixel throughout the animation.
      const density = Math.min(1, 680 / Math.max(width, height), Math.sqrt(170000 / (width * height)));
      const rasterWidth = Math.max(1, Math.round(width * density));
      const rasterHeight = Math.max(1, Math.round(height * density));
      const canvas = context.canvas;
      canvas.width = rasterWidth;
      canvas.height = rasterHeight;
      const image = context.createImageData(rasterWidth, rasterHeight);
      const halfWidth = width / 2;
      const halfHeight = height / 2;
      for (let y = 0; y < rasterHeight; y++) {
        const dy = (y + .5) * height / rasterHeight - halfHeight;
        for (let x = 0; x < rasterWidth; x++) {
          const dx = (x + .5) * width / rasterWidth - halfWidth;
          const corner = dy < 0 ? (dx < 0 ? 0 : 1) : (dx < 0 ? 3 : 2);
          const radius = radii[corner];
          const qx = Math.abs(dx) - halfWidth + radius;
          const qy = Math.abs(dy) - halfHeight + radius;
          const ox = Math.max(qx, 0);
          const oy = Math.max(qy, 0);
          const length = ox && oy ? Math.hypot(ox, oy) : ox + oy;
          const depth = radius - length - Math.min(Math.max(qx, qy), 0);
          let vx = 0;
          let vy = 0;
          if (depth < bezel) {
            const strength = PROFILE[Math.round(clamp(depth / bezel, 0, 1) * PROFILE_STEPS)];
            if (ox && oy) {
              vx = -Math.sign(dx) * ox / length * strength;
              vy = -Math.sign(dy) * oy / length * strength;
            } else if (qx > qy) {
              vx = -Math.sign(dx) * strength;
            } else {
              vy = -Math.sign(dy) * strength;
            }
          }
          const i = (y * rasterWidth + x) * 4;
          image.data[i] = 128 + vx * 127;
          image.data[i + 1] = 128 + vy * 127;
          image.data[i + 2] = 128;
          image.data[i + 3] = 255;
        }
      }
      context.putImageData(image, 0, 0);
      return canvas.toDataURL('image/png');
    }

    function svgElement(name, attrs) {
      const node = document.createElementNS(SVG, name);
      for (const [attribute, value] of Object.entries(attrs)) node.setAttribute(attribute, value);
      return node;
    }

    function createFilters() {
      const svg = svgElement('svg', { width: 0, height: 0, 'aria-hidden': 'true', focusable: 'false' });
      svg.style.cssText = 'position:absolute;pointer-events:none;overflow:hidden';
      const defs = svgElement('defs', {});
      svg.append(defs);
      document.body.append(svg);
      const cache = new Map();
      let canvasContext;
      let sequence = 0;

      function create() {
        const id = 'dsh-liquid-glass-' + (++sequence);
        const filter = svgElement('filter', {
          id, x: 0, y: 0, filterUnits: 'userSpaceOnUse', 'color-interpolation-filters': 'sRGB',
        });
        const image = svgElement('feImage', { x: 0, y: 0, preserveAspectRatio: 'none', result: 'map' });
        // Convert the PNG's neutral byte (128) to exactly .5 before displacing.
        const neutral = svgElement('feComponentTransfer', { in: 'map', result: 'neutralMap' });
        for (const channel of ['R', 'G']) {
          neutral.append(svgElement('feFunc' + channel, { type: 'linear', slope: 255 / 254, intercept: -1 / 254 }));
        }
        filter.append(image, neutral);
        const maps = CHANNELS.map(([, matrix], index) => {
          const map = svgElement('feDisplacementMap', {
            in: 'SourceGraphic', in2: 'neutralMap', scale: 0, xChannelSelector: 'R', yChannelSelector: 'G', result: 'd' + index,
          });
          filter.append(map, svgElement('feColorMatrix', { in: 'd' + index, type: 'matrix', values: matrix, result: 'c' + index }));
          return map;
        });
        filter.append(
          svgElement('feBlend', { in: 'c0', in2: 'c1', mode: 'screen', result: 'rg' }),
          svgElement('feBlend', { in: 'rg', in2: 'c2', mode: 'screen' }),
        );
        defs.append(filter);
        return { id, filter, image, maps, key: '', strength: -1 };
      }

      function paint(record, width, height, radii, bezel, strength) {
        const { el } = record;
        const active = record.filter ??= create();
        const w = Math.max(1, Math.round(width));
        const h = Math.max(1, Math.round(height));
        const edge = Math.max(.5, Math.round(Math.min(bezel, Math.min(w, h) / 2 - 1) * 2) / 2);
        const corners = radii.map(radius => Math.round(clamp(radius, 0, Math.min(w, h) / 2) * 2) / 2);
        const key = [w, h, edge, ...corners].join(':');
        if (active.key !== key) {
          let url = cache.get(key);
          if (url) cache.delete(key);
          else {
            canvasContext ??= document.createElement('canvas').getContext('2d');
            if (!canvasContext) throw new Error('Canvas unavailable');
            url = roundedMap(canvasContext, w, h, corners, edge);
          }
          cache.set(key, url);
          if (cache.size > MAX_MAPS) cache.delete(cache.keys().next().value);
          active.image.setAttribute('href', url);
          active.key = key;
        }
        if (active.width !== width || active.height !== height) {
          for (const node of [active.filter, active.image]) {
            node.setAttribute('width', width);
            node.setAttribute('height', height);
          }
          active.width = width;
          active.height = height;
        }
        if (active.strength !== strength) {
          active.maps.forEach((map, index) => map.setAttribute('scale', (strength * CHANNELS[index][0]).toFixed(2)));
          active.strength = strength;
        }
        el.style.setProperty('--hlg-filter', 'url("#' + active.id + '")');
      }

      function drop(record) {
        if (!record.filter) return;
        record.filter.filter.remove();
        record.filter = null;
        record.el.style.removeProperty('--hlg-filter');
      }

      return { paint, drop, dispose() { cache.clear(); svg.remove(); } };
    }

    function corners(style, width, height) {
      return ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'].map(key => {
        const value = style[key];
        const unit = value.endsWith('%') ? Math.min(width, height) / 100 : 1;
        return number(parseFloat(value), 0) * unit;
      });
    }

    function clearHighlight(element) {
      element.removeAttribute('data-hlg-hover');
      element.style.removeProperty('--hlg-x');
      element.style.removeProperty('--hlg-y');
    }

    function animateEntrance(record, reduce) {
      if (reduce || record.entered || !['popover', 'dialog', 'tooltip', 'toast'].includes(record.type)) return;
      record.entered = true;
      const { el } = record;
      if (typeof el.animate !== 'function') return;
      const translate = record.type === 'toast' ? '0 -9px' : '0 6px';
      record.animations = [
        el.animate([{ scale: '.92', translate }, { scale: '1', translate: '0 0' }], { duration: 500, easing: SPRING }),
        el.animate([{ filter: 'blur(6px)' }, { filter: 'blur(0px)' }], { duration: 330, easing: 'ease-out' }),
      ];
    }

    function createThumb(anchor, track, type, invalidate) {
      const element = document.createElement('span');
      element.setAttribute('aria-hidden', 'true');
      element.setAttribute('data-hlg-thumb', type);
      track.setAttribute('data-hlg-track', type);
      if (getComputedStyle(track).position === 'static') track.setAttribute('data-hlg-relative', '');
      if (type === 'range') anchor.setAttribute('data-hlg-range', '');
      track.append(element);
      const record = {
        el: element, anchor, track, type, filter: null, pressed: false, pointer: null,
        springs: null, drag: null, suppressClick: false, events: new AbortController(),
      };
      const listen = (target, event, callback, options = {}) => target.addEventListener(
        event, callback, { ...options, signal: record.events.signal },
      );
      listen(anchor, 'pointerdown', event => {
        if (event.button !== 0 || anchor.matches(':disabled') || event.target.closest?.(':disabled')) return;
        record.pointer = event.pointerId;
        record.pressed = true;
        record.suppressClick = false;
        if (type === 'segments') record.drag = { start: event.clientX, active: false, x: event.clientX };
        invalidate();
      });
      if (type === 'segments') {
        listen(track, 'pointermove', event => {
          const drag = record.drag;
          if (!drag || event.pointerId !== record.pointer) return;
          if (!drag.active && Math.abs(event.clientX - drag.start) < 4) return;
          if (!drag.active) {
            drag.active = true;
            track.setPointerCapture(event.pointerId);
          }
          drag.x = event.clientX;
          invalidate();
        });
        listen(track, 'click', event => {
          if (!record.suppressClick || !event.isTrusted || event.detail === 0) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          record.suppressClick = false;
        }, { capture: true });
      }
      function release(event) {
        if (event.pointerId !== record.pointer) return;
        const commit = type === 'segments' && record.drag?.active && event.type === 'pointerup';
        record.pointer = null;
        record.pressed = false;
        record.drag = null;
        if (commit) {
          const position = event.clientX;
          const nearest = tabMetrics(record).reduce((best, item) => {
            if (!best || Math.abs(item.screen - position) < Math.abs(best.screen - position)) return item;
            return best;
          }, null);
          record.suppressClick = true;
          if (nearest) {
            nearest.el.focus({ preventScroll: true });
            if (nearest.el.getAttribute('aria-selected') !== 'true') nearest.el.click();
          }
        }
        invalidate();
      }
      listen(window, 'pointerup', release, { capture: true });
      listen(window, 'pointercancel', release, { capture: true });
      listen(track, 'lostpointercapture', release);
      if (type === 'range') {
        listen(anchor, 'input', invalidate);
        listen(anchor, 'change', invalidate);
      }
      return record;
    }

    function tabMetrics(record) {
      const { track } = record;
      const left = track.getBoundingClientRect().left + track.clientLeft;
      return [...track.querySelectorAll(':scope > [role="tab"]:not(:disabled):not([aria-disabled="true"])')].map(el => {
        const rect = el.getBoundingClientRect();
        const screen = rect.left + rect.width / 2;
        return { el, screen, center: screen - left, width: rect.width, height: rect.height };
      });
    }

    function thumbTarget(record, reduce) {
      const { anchor, track, type, drag } = record;
      const pressed = record.pressed && !reduce;
      const height = track.clientHeight;
      if (!height) return null;
      if (type === 'segments') {
        const tabs = tabMetrics(record);
        let selected = tabs.find(item => item.el.getAttribute('aria-selected') === 'true') ?? tabs[0];
        if (!selected) return null;
        let center = selected.center;
        if (drag?.active) {
          selected = tabs.reduce((best, item) => Math.abs(item.screen - drag.x) < Math.abs(best.screen - drag.x) ? item : best);
          const left = track.getBoundingClientRect().left + track.clientLeft;
          center = reduce ? selected.center : clamp(drag.x - left, Math.min(...tabs.map(item => item.center)), Math.max(...tabs.map(item => item.center)));
        }
        return { x: center, y: height / 2, w: selected.width + (pressed ? 14 : 2), h: height + (pressed ? 6 : 0) };
      }
      if (type === 'switch') {
        const native = track.querySelector(':scope > [class*="_thumb"]');
        const h = native?.offsetHeight || height - 4;
        const w = (native?.offsetWidth || h) + (pressed ? 9 : 3);
        const right = anchor.getAttribute('aria-checked') === 'true';
        const padding = Math.max(1, (height - h) / 2);
        return { x: right ? track.clientWidth - padding - w / 2 : padding + w / 2, y: height / 2, w, h: h + (pressed ? 5 : 2) };
      }
      const input = anchor.getBoundingClientRect();
      const bounds = track.getBoundingClientRect();
      const min = number(parseFloat(anchor.min), 0);
      const max = number(parseFloat(anchor.max), 100);
      const value = number(anchor.valueAsNumber, min);
      const ratio = max > min ? clamp((value - min) / (max - min), 0, 1) : 0;
      const progress = getComputedStyle(anchor).direction === 'rtl' ? 1 - ratio : ratio;
      const native = 16;
      const w = native + (pressed ? 9 : 3);
      return {
        x: input.left - bounds.left - track.clientLeft + native / 2 + progress * Math.max(0, input.width - native),
        y: input.top - bounds.top - track.clientTop + input.height / 2,
        w, h: native + (pressed ? 5 : 2),
      };
    }

    function paintThumb(record, target, elapsed, reduce, paint) {
      const springs = record.springs ??= [
        new Spring(target.x, 300, 20), new Spring(target.w, 360, 24), new Spring(target.h, 360, 24),
      ];
      const [x, width, height] = springs;
      x.target = target.x;
      width.target = target.w;
      height.target = target.h;
      if (reduce) springs.forEach(spring => spring.snap());
      else {
        // Two or more small steps retain the Demo's spring without unstable
        // overshoot when the main thread temporarily misses a frame.
        const steps = Math.ceil(elapsed / (1 / 120));
        for (let i = 0; i < steps; i++) springs.forEach(spring => spring.step(elapsed / steps));
        if (springs.every(spring => spring.settled)) springs.forEach(spring => spring.snap());
      }
      const speed = reduce ? 0 : Math.abs(x.velocity);
      const ratio = Math.min(1, target.h / 44);
      const w = Math.max(target.w * .55, width.value + Math.min(speed * .05, 34 * ratio));
      const h = Math.max(target.h * .58, height.value - Math.min(speed * .014, 9 * ratio));
      const { style } = record.el;
      style.width = w + 'px';
      style.height = h + 'px';
      style.transform = 'translate(' + (x.value - w / 2) + 'px,' + (target.y - h / 2) + 'px)';
      const bezel = Math.min(h, w) * .33;
      style.setProperty('--hlg-bezel', bezel + 'px');
      const power = Math.min(h, w) * .20 * (1 + Math.min(speed / 850, .5));
      paint(record, w, h, [h / 2, h / 2, h / 2, h / 2], bezel, power);
      return !reduce && !springs.every(spring => spring.settled);
    }

    function boot() {
      if (!document.body) {
        let cleanup;
        const ready = () => { cleanup = boot(); };
        document.addEventListener('DOMContentLoaded', ready, { once: true });
        return () => {
          document.removeEventListener('DOMContentLoaded', ready);
          cleanup?.();
        };
      }
      const root = document.documentElement;
      const style = document.createElement('style');
      style.textContent = css;
      style.setAttribute('data-hlg-styles', '');
      document.head.append(style);
      root.setAttribute('data-hlg', '');
      const filters = createFilters();
      const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
      const reduceTransparency = matchMedia('(prefers-reduced-transparency: reduce)');
      const canBlur = CSS.supports('backdrop-filter', 'blur(1px)');
      let canRefract = canBlur && CSS.supports('backdrop-filter', 'url("#dsh-lg-probe")')
        && typeof window.SVGFEDisplacementMapElement === 'function'
        && /\b(?:Chrome|Chromium)\//.test(navigator.userAgent);
      let warnedReducedTransparency = false;
      const surfaces = new Map();
      const thumbs = new Map();
      const visible = new WeakMap();
      const observed = new Set();
      const moving = new Set();
      const dirtyThumbs = new Set();
      const events = new AbortController();
      let background = null;
      let chatShell = null;
      let highlighted = null;
      let frameId = 0;
      let highlightId = 0;
      let needsRefresh = true;
      let previousTime = 0;
      let intensity = DEFAULT_INTENSITY / 100;
      let disposed = false;

      function schedule() {
        if (!disposed && !frameId) frameId = requestAnimationFrame(frame);
      }

      function refresh() {
        needsRefresh = true;
        schedule();
      }

      function isVisible(el) {
        return visible.get(el) !== false && el.offsetWidth > 0 && el.offsetHeight > 0
          && !el.closest('[hidden], [inert], [aria-hidden="true"]')
          && getComputedStyle(el).visibility === 'visible';
      }

      function hasBackdropAncestor(el) {
        const triggerMenu = el.matches(TRIGGER_MENU);
        for (let parent = el.parentElement; parent && parent !== root; parent = parent.parentElement) {
          // The composer's filter is on a separate paint layer while this menu is open.
          if (triggerMenu && parent.matches('[data-composer-card]')) continue;
          if (surfaces.has(parent)) return true;
          const backdrop = getComputedStyle(parent).backdropFilter;
          if (backdrop && backdrop !== 'none') return true;
        }
        return false;
      }

      function opticalMode() {
        if (!reduceTransparency.matches) return canRefract ? 'lens' : 'flat';
        return canBlur ? 'frost' : 'flat';
      }

      function disableRefraction(reason) {
        if (!canRefract) return;
        canRefract = false;
        console.warn('[dsh-liquid-glass] Refraction disabled. ' + reason);
        refresh();
      }

      function paint(record, width, height, radii, bezel, power) {
        if (record.mode === 'lens' && canRefract) {
          try {
            filters.paint(record, width, height, radii, bezel, power * intensity);
            record.el.setAttribute('data-hlg-mode', 'lens');
            return;
          } catch (error) {
            disableRefraction('Displacement map setup failed: ' + (error?.message ?? String(error)));
          }
        }
        filters.drop(record);
        const mode = record.mode === 'flat' ? 'flat' : opticalMode();
        if (mode === 'frost' && !warnedReducedTransparency) {
          warnedReducedTransparency = true;
          console.warn('[dsh-liquid-glass] Frost mode enabled because prefers-reduced-transparency: reduce is active.');
        }
        record.el.setAttribute('data-hlg-mode', mode);
      }

      function releaseSurface(record) {
        const { el } = record;
        for (const animation of record.animations ?? []) animation.cancel();
        filters.drop(record);
        clearHighlight(el);
        el.removeAttribute('data-hlg-surface');
        el.removeAttribute('data-hlg-mode');
        surfaces.delete(el);
      }

      function releaseThumb(record) {
        record.events.abort();
        if (record.pointer !== null && record.track.hasPointerCapture(record.pointer)) {
          record.track.releasePointerCapture(record.pointer);
        }
        filters.drop(record);
        record.el.remove();
        record.anchor.removeAttribute('data-hlg-range');
        record.track.removeAttribute('data-hlg-track');
        record.track.removeAttribute('data-hlg-relative');
        dirtyThumbs.delete(record);
        moving.delete(record);
        thumbs.delete(record.anchor);
      }

      function setBackground(app) {
        const next = app ?? null;
        const center = next?.querySelector(':scope > [class*="_centerCol"]');
        const candidate = center?.querySelector('[data-conversation-content]')?.closest('[class*="_root"]');
        const nextChat = candidate ?? null;
        if (background !== next) {
          background?.removeAttribute('data-hlg-background');
          background?.style.removeProperty('--hlg-wallpaper-image');
          background = next;
          background?.setAttribute('data-hlg-background', '');
        }
        const image = next?.querySelector(WALLPAPER_SELECTOR + '[data-media="sequence"] img');
        const source = image?.currentSrc || image?.src;
        const wallpaper = source ? 'url(' + JSON.stringify(source) + ')' : '';
        if (background && background.style.getPropertyValue('--hlg-wallpaper-image') !== wallpaper) {
          if (wallpaper) background.style.setProperty('--hlg-wallpaper-image', wallpaper);
          else background.style.removeProperty('--hlg-wallpaper-image');
        }
        if (chatShell !== nextChat) {
          chatShell?.removeAttribute('data-hlg-chat-shell');
          chatShell = nextChat;
          chatShell?.setAttribute('data-hlg-chat-shell', '');
        }
      }

      const resize = new ResizeObserver(refresh);
      const intersection = new IntersectionObserver(entries => {
        let changed = false;
        for (const entry of entries) {
          const intersects = entry.isIntersecting;
          if (visible.get(entry.target) !== intersects) changed = true;
          visible.set(entry.target, intersects);
        }
        if (changed) refresh();
      });

      function reconcile() {
        const app = document.querySelector(FRAME_SELECTOR);
        setBackground(app);
        const all = app ? [...document.querySelectorAll(CANDIDATE_SELECTOR)] : [];
        const candidates = all.filter(el => !el.closest(EXCLUDED) && !el.matches(FRAME_SELECTOR));
        const watch = new Set(candidates);
        for (const el of observed) {
          if (watch.has(el)) continue;
          resize.unobserve(el);
          intersection.unobserve(el);
          observed.delete(el);
        }
        for (const el of watch) {
          if (observed.has(el)) continue;
          resize.observe(el);
          intersection.observe(el);
          observed.add(el);
        }
        const current = candidates.filter(isVisible);
        const known = new Set(current);
        const panels = current.flatMap(el => {
          const spec = SURFACES.find(([, selector]) => el.matches(selector));
          if (!spec || el.closest('.liang-effort-control')) return [];
          // A list inside MenuSurface shares the surface of the portal.
          if (el.parentElement?.closest('[data-menu-material]')) return [];
          return [{ el, spec }];
        });
        const panelElements = new Set(panels.map(item => item.el));
        for (const [el, record] of surfaces) if (!panelElements.has(el)) releaseSurface(record);
        // DOM order puts an outer surface before any candidate it contains.
        for (const { el, spec: [type] } of panels) {
          if (!surfaces.has(el)) {
            surfaces.set(el, { el, type, entered: false, filter: null });
            el.setAttribute('data-hlg-surface', type);
          }
        }
        let surfaceFilters = 0;
        const outer = [...panels].sort((a, b) => a.spec[4] - b.spec[4]);
        for (const { el, spec: [, , bezel, shift] } of outer) {
          const record = surfaces.get(el);
          const width = el.offsetWidth;
          const height = el.offsetHeight;
          if (hasBackdropAncestor(el) || width * height > 500000 || surfaceFilters >= MAX_SURFACE_FILTERS) {
            record.mode = 'flat';
          } else {
            record.mode = opticalMode();
            if (record.mode !== 'flat') surfaceFilters++;
          }
          paint(record, width, height, corners(getComputedStyle(el), width, height), bezel, shift * 2);
          animateEntrance(record, reduceMotion.matches);
        }

        for (const [el, record] of thumbs) {
          if (!known.has(el) || !el.matches(TRACK_SELECTOR) || (record.type === 'range' && el.parentElement !== record.track)) {
            releaseThumb(record);
          }
        }
        const usedTracks = new Set();
        let thumbFilters = 0;
        for (const el of current) {
          if (!el.matches(TRACK_SELECTOR)) continue;
          const type = el.matches('input[type="range"]') ? 'range' : el.matches('[role="switch"]') ? 'switch' : 'segments';
          const track = type === 'range' ? el.parentElement : el;
          if (!track || !track.clientWidth || !track.clientHeight || usedTracks.has(track)) continue;
          if (!app.contains(track) && !track.closest('[data-hlg-surface]')) continue;
          usedTracks.add(track);
          let record = thumbs.get(el);
          if (!record) {
            record = createThumb(el, track, type, () => {
              if (!record) return;
              dirtyThumbs.add(record);
              schedule();
            });
            thumbs.set(el, record);
          }
          record.mode = thumbFilters >= MAX_THUMB_FILTERS ? 'flat' : opticalMode();
          if (record.mode !== 'flat') thumbFilters++;
          dirtyThumbs.add(record);
        }
      }

      function frame(time) {
        frameId = 0;
        const elapsed = clamp((time - previousTime) / 1000, 1 / 240, .032);
        previousTime = time;
        if (needsRefresh) {
          needsRefresh = false;
          intensity = clamp(number(parseFloat(getComputedStyle(root).getPropertyValue('--lg-intensity')), DEFAULT_INTENSITY / 100), 0, 1.6);
          reconcile();
        }
        for (const record of dirtyThumbs) {
          record.target = thumbTarget(record, reduceMotion.matches);
          moving.add(record);
        }
        dirtyThumbs.clear();
        for (const record of moving) {
          if (!record.target || !paintThumb(record, record.target, elapsed, reduceMotion.matches, paint)) moving.delete(record);
        }
        if (moving.size || needsRefresh) schedule();
      }

      const watchedSelector = CANDIDATE_SELECTOR + ', ' + WALLPAPER_SELECTOR;
      const relevant = el => el instanceof Element && (el.matches(watchedSelector) || el.querySelector(watchedSelector));
      const mutations = new MutationObserver(changes => {
        for (const change of changes) {
          if (change.type === 'childList') {
            if (thumbs.has(change.target) || change.target.matches?.(WALLPAPER_SELECTOR)
              || [...change.addedNodes, ...change.removedNodes].some(relevant)) return refresh();
          } else if (change.attributeName === 'style') {
            const el = change.target;
            if (el === root || (el.matches(SURFACE_SELECTOR) && (!surfaces.has(el) || el.style.visibility === 'hidden'))) return refresh();
          } else if (change.target === root || change.target === document.body
            || change.target.matches(CANDIDATE_SELECTOR)
            || (['src', 'data-media'].includes(change.attributeName) && change.target.closest(WALLPAPER_SELECTOR))
            || change.target.closest(TRACK_SELECTOR)
            || (['hidden', 'aria-hidden', 'inert'].includes(change.attributeName) && relevant(change.target))) {
            return refresh();
          }
        }
      });
      mutations.observe(root, { attributes: true, attributeFilter: ['style', 'class'] });
      mutations.observe(document.body, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'hidden', 'aria-hidden', 'inert', 'disabled', 'value', 'min', 'max', 'dir', 'aria-selected',
          'aria-checked', 'aria-valuetext', 'data-menu-phase', 'data-menu-material', 'data-sidebar-right-open',
          'data-sidebar-collapsed', 'data-sidebar-drawer', 'data-liang-skin', 'data-liang-stage', 'data-media', 'src'],
      });
      const options = { signal: events.signal };
      reduceMotion.addEventListener('change', refresh, options);
      reduceTransparency.addEventListener('change', refresh, options);
      window.addEventListener('resize', refresh, options);
      document.addEventListener('securitypolicyviolation', event => {
        if (event.violatedDirective.startsWith('img-src') && event.blockedURI.startsWith('data')) {
          disableRefraction('The image content security policy blocks data URLs used by the displacement map.');
        }
      }, options);

      function point(event) {
        if (event.pointerType === 'touch') return;
        const track = event.target.closest?.('[data-hlg-track]');
        const target = track?.querySelector(':scope > [data-hlg-thumb]') ?? event.target.closest?.('[data-hlg-surface]');
        const { clientX, clientY } = event;
        cancelAnimationFrame(highlightId);
        highlightId = requestAnimationFrame(() => {
          if (highlighted && highlighted !== target) clearHighlight(highlighted);
          highlighted = target;
          if (!target?.isConnected) return;
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--hlg-x', (clientX - rect.left) + 'px');
          target.style.setProperty('--hlg-y', (clientY - rect.top) + 'px');
          target.setAttribute('data-hlg-hover', '');
        });
      }
      document.addEventListener('pointermove', point, { ...options, passive: true });
      document.documentElement.addEventListener('pointerleave', () => {
        cancelAnimationFrame(highlightId);
        if (highlighted) clearHighlight(highlighted);
        highlighted = null;
      }, options);
      schedule();

      return () => {
        disposed = true;
        events.abort();
        mutations.disconnect();
        resize.disconnect();
        intersection.disconnect();
        cancelAnimationFrame(frameId);
        cancelAnimationFrame(highlightId);
        for (const record of thumbs.values()) releaseThumb(record);
        for (const record of surfaces.values()) releaseSurface(record);
        if (highlighted) clearHighlight(highlighted);
        background?.removeAttribute('data-hlg-background');
        background?.style.removeProperty('--hlg-wallpaper-image');
        chatShell?.removeAttribute('data-hlg-chat-shell');
        filters.dispose();
        style.remove();
        root.removeAttribute('data-hlg');
      };
    }

    return { apply(ctx) { ctx.effect(boot); registerSettings(ctx); } };
  },
});
