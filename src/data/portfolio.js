const works = ['Fine line botanics', 'Blackwork serpent', 'Micro realism eye', 'Ornamental spine', 'Minimal moon', 'Dark floral sleeve', 'Script lettering', 'Abstract smoke', 'Sacred geometry', 'Tiny symbols', 'Dragon sketch', 'Dotwork moth'];

const imageSeeds = ['tattoo-ink-01', 'tattoo-ink-02', 'tattoo-ink-03', 'tattoo-ink-04', 'tattoo-ink-05', 'tattoo-ink-06', 'tattoo-ink-07', 'tattoo-ink-08', 'tattoo-ink-09', 'tattoo-ink-10', 'tattoo-ink-11', 'tattoo-ink-12'];

export const portfolio = works.map((title, index) => ({
    id: index + 1,
    title,
    src: `https://picsum.photos/seed/${imageSeeds[index]}/520/680`,
    tag: ['Fine line', 'Blackwork', 'Realism', 'Ornamental'][index % 4]
}));
