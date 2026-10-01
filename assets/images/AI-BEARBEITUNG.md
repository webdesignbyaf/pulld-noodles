# KI-Bildbearbeitung: Restaurantaufnahmen

Stand: 30.09.2026. Modus: eingebautes `image_gen` (keine CLI/API-Fallbackgenerierung).

## Quellen und Dateien

| Website-Datei | Originalfoto | KI-Eingabe | Unkomprimiertes KI-Ergebnis |
| --- | --- | --- | --- |
| `neon-kitchen.jpg` | `../../Fotos/IMG_3988.JPG` | `ai-inputs/neon-kitchen-source.png` | `ai-originals/neon-kitchen.png` |
| `interior.jpg` | `../../Fotos/IMG_3974.JPG` | `ai-inputs/interior-source.png` | `ai-originals/interior.png` |

Die 8064 × 6048 px großen Originalfotos wurden unverändert belassen. Eingabekopien wurden mit macOS `sips` auf maximal 2200 px konvertiert (2200 × 1650 px PNG). Der direkte Aufruf mit IMG_3988.JPG wurde vom Bilddienst als ungültiges Bild abgelehnt; es entstand dabei kein Ergebnis. Die beiden erfolgreichen Bearbeitungen verwendeten die PNG-Eingabekopien.

KI-Ergebnisse: jeweils 1448 × 1086 px PNG. Web-JPEGs: `sips -s format jpeg -s formatOptions 85 -Z 2200`, ohne Hochskalierung. Die sips-Konvertierung muss außerhalb der Sandbox laufen; innerhalb der Sandbox entstanden schwarze Testdateien. Diese wurden ersetzt bzw. entfernt.

## Neon-Küche: exakter Prompt

```text
Use case: lighting-weather
Asset type: restaurant website editorial photograph
Input image: IMG_3988.JPG is the edit target, a real PULLD NOODLES kitchen seen through the front window.
Primary request: Professionally retouch this exact photograph into premium editorial restaurant photography at evening/night. Preserve the real physical restaurant, exact window geometry, kitchen equipment, two existing neon noodle bowl signs, and all three actual chefs. Keep the central chef's identity, face, clothing, cap, pose and noodle-making action.
Composition: retain original 4:3 landscape composition, correct mild perspective for straight architectural verticals, maintain both complete neon signs and central chef.
Lighting: immersive clean night contrast, warm red neon and very subtle magenta bounce, realistic restrained highlights, clean exposure of the chef and working surface, rich darker exterior reflections. Preserve yellow chopsticks, white noodle lines and white lettering, red bowls and warm orange NOODLES.
Text: preserve the exact existing physical lettering "PULLD." and "NOODLES" on both signs, faithful letterforms and placement; do not redraw or respell branding.
Constraints: photo retouch of the supplied location, not a redesign. Preserve all architecture, furnishings, utensils and food as photographed. No invented decor, extra food, extra people, new text, new signage, added steam, watermark, or exaggerated neon haze. Natural fine material texture.
```

Generiertes Original: `/Users/alexander/.codex/generated_images/01a0f33f-7b2c-79b0-a659-46a15cde8c4e/exec-a7e57fb2-d821-4689-8a70-8541cfb1bd80.png`

## Innenraum: exakter Prompt

```text
Use case: precise-object-edit
Asset type: restaurant website editorial interior photograph
Input image: interior-source.png, derived from real photo IMG_3974.JPG, is the edit target.
Primary request: Produce a professionally retouched premium editorial restaurant interior photo of this exact real room. Remove the three seated restaurant guests and their personal bags/hat completely, naturally reconstructing only the portions of existing chairs, stools, bench, tables, wall and floor they occlude. Preserve the real interior design and room geometry.
Composition: retain original 4:3 landscape composition and camera position, natural corrected architectural verticals. Keep the large real white illuminated wall logo on the upper right, the existing pale wall panels, timber tables and stools, long wooden bench, dark metal window and door frames, exposed roof beams, ceiling texture, lights, wall hooks and condiment pots in their existing positions.
Lighting: inviting early evening editorial restaurant photography, warm natural wood, balanced clean exposure, darker outside windows, restrained realistic cool-white neon bounce and warm ambient ceiling light. Detailed materials, warm-neutral shadows. No exaggerated colored glow.
Text: preserve exact physical neon text "PULLD." over "NOODLES" and the original noodle-bowl symbol, letterforms, mounting, positions and proportions. Do not invent, redraw, respell or enlarge signage.
Constraints: change only guest removal, photographic lighting, exposure, subtle perspective correction. Keep physical architecture and furnishings faithful to source; no invented decor, replacement furniture, added food, new people, plants, lamps, decorative items, new text or watermarks. This is a real-location photo retouch, not a redesigned restaurant.
```

Generiertes Original: `/Users/alexander/.codex/generated_images/01a0f33f-7b2c-79b0-a659-46a15cde8c4e/exec-7141dbd2-bd63-4a14-ae2c-13b9eee10b94.png`

## Sichtprüfung

- Beide Motive einzeln als KI-Bearbeitung der jeweiligen Quelle erstellt und visuell geprüft.
- Neon-Schriftzüge lesen sich weiterhin „PULLD.“ / „NOODLES“. Raumcharakter, Einrichtung und Küchenmotiv sind erhalten.
- Innenraum: Gäste und persönliche Gegenstände entfernt; zuvor verdeckte Bereiche generativ rekonstruiert.
- Nachtaufnahme: Lichtstimmung und Spiegelungen wurden generativ verändert. Kleine Details können vom Ausgangsfoto abweichen; keine dokumentarisch unveränderten Aufnahmen.

