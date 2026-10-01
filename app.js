const row = (name, price, detail = '', allergens = '') => ({ name, price, detail, allergens });
const group = (title, description, items) => ({ title, description, items });
const menu = {
  noodles: [
    group('Traditionelle Lanzhou', 'Handgezogene Nudeln mit Pakchoi, Pfefferlinge und Sprossen.', [row('Hausgemachte Hühnerbällchen', '10,90', 'Scharf', 'AFN'), row('Huhn', '11,90', '', 'AFN'), row('Rindfleisch', '12,90', '', 'AFN'), row('Schmor-Rind', '12,90', '', 'AFN'), row('Seitan', '11,50', 'Scharf oder mild · vegan', 'AFN')]),
    group('Biang', 'Breite handgezogene Nudeln. Auf Wunsch sehr scharf zubereitet.', [row('Huhn', '11,90', '', 'AFN'), row('Schmor-Rind', '13,90', '', 'AFN'), row('Seitan Erdnuss', '12,90', 'Pikant', 'AEFN'), row('Tofu', '10,90', '', 'AFN')]),
    group('Teigtaschen', 'Hausgemacht.', [row('Huhn und Gemüse', '10,50', 'Scharf', 'AFN')]),
    group('Wantan', 'Hausgemacht · 6 / 12 Stück', [row('Mit Erdnuss-Sauce', '6,90 / 12,90', '', 'AEFN'), row('In Chili-Öl', '6,90 / 12,90', 'Sehr scharf', 'AEFN')])
  ],
  starters: [group('Zum Anfang. Zum Teilen.', '', [row('Minigurken', '4,90', 'Knackig, fermentiert, hausgemacht', 'AFN'), row('Zartes Sichuan Rind', '8,50', 'Nach Tradition, scharf', 'AEFN'), row('Yuba (Bambustofu)', '5,90', 'Mit Gurken und Sprossen, scharf', 'AEFN'), row('Knackiges 3er Gemüse', '8,90', 'Gurken, Rettich & Tofu fermentiert', 'AEFN')])],
  lunch: [
    group('Traditionelle Lanzhou', 'Handgezogene Nudeln mit Pakchoi, Pfefferlinge und Sprossen.', [row('Rindfleisch', '9,90', '', 'AFN'), row('Huhn', '9,50', '', 'AFN'), row('Seitan', '9,30', 'Scharf oder mild · vegan', 'AFN'), row('Hausgemachte Hühnerbällchen', '9,90', 'Scharf', 'AFN')]),
    group('Biang & Teigtaschen', '', [row('Biang mit Huhn', '9,90', 'Scharf', 'AFN'), row('Biang mit Seitan Erdnuss', '10,90', 'Pikant', 'AFN'), row('Hausgemachte Teigtaschen', '9,50', 'Huhn und Gemüse, scharf', 'AFN')]),
    group('Zum Mittagstisch', 'Je 0,3 l', [row('Hauseistee Orange', '1,90'), row('Soda Zitron', '1,90')])
  ],
  drinks: [
    group('Homemade Lemonade', 'Je 0,3 l · still oder mit Soda', [row('TCM Craft Cola', '3,90'), row('House Ice Tea', '3,90'), row('Purple Lychee Soda', '3,90'), row('Sichuan Blood Orange Soda', '3,90')]),
    group('Alkoholfrei', '0,3 l / 0,5 l', [row('Coca Cola', '2,90 / 4,50'), row('Cola Zero', '2,90 / 4,50'), row('Apfelsaft naturtrüb gespritzt', '3,20 / 4,50'), row('Soda Zitrone', '2,90 / 3,90'), row('Mangosaft gespritzt', '3,20 / 4,50'), row('Lycheesaft gespritzt', '3,20 / 4,50'), row('Holunder Soda', '2,90 / 3,90')]),
    group('Tee', '', [row('Grüntee', '3,70'), row('Jasmintee', '3,70')]),
    group('Beers', 'Je 0,3 l', [row('Tsingtao', '3,50', '', 'A'), row('Kirin', '3,50', '', 'A')]),
    group('Aperitif', '', [row('Hugo', '4,90', '', 'O'), row('Mango Spritzer', '5,50', '', 'O'), row('Aperol Spritzer', '5,50', '', 'O'), row('Weißer Spritzer', '3,90', '', 'O')])
  ]
};
const panel = document.getElementById('menu-panel');
const tabs = [...document.querySelectorAll('[data-menu]')];
function selectMenu(key, focus = false) {
  tabs.forEach(tab => {
    const selected = tab.dataset.menu === key;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  panel.setAttribute('aria-labelledby', `tab-${key}`);
  panel.replaceChildren();
  if (key === 'lunch') {
    const note = document.createElement('p');
    note.className = 'menu-note';
    note.textContent = 'Mittagskarte · Montag bis Freitag, bis 17:00 Uhr';
    panel.append(note);
  }
  const grid = document.createElement('div');
  grid.className = 'menu-grid';
  menu[key].forEach(category => {
    const section = document.createElement('section');
    section.className = 'menu-group';
    const heading = document.createElement('h3');
    heading.textContent = category.title;
    section.append(heading);
    const description = document.createElement('p');
    description.className = 'group-description';
    description.textContent = category.description;
    section.append(description);
    category.items.forEach(item => {
      const line = document.createElement('div'); line.className = 'menu-item';
      const name = document.createElement('div'); name.className = 'item-name'; name.textContent = item.name;
      const detail = document.createElement('small');
      detail.textContent = [item.detail, item.allergens ? `Allergene: ${item.allergens}` : ''].filter(Boolean).join(' · ');
      name.append(detail);
      const price = document.createElement('span'); price.className = 'price'; price.textContent = item.price;
      line.append(name, price); section.append(line);
    });
    grid.append(section);
  });
  panel.append(grid);
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectMenu(tab.dataset.menu));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectMenu(tabs[next].dataset.menu, true); }
  });
});
selectMenu('noodles');
document.getElementById('year').textContent = new Date().getFullYear();
