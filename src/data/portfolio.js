const imageUrls = [
    'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1590246815117-be5f0a49b8bb?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1612450623054-1cdd3dd5dff0?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=520&h=680&q=80',

    'https://images.pexels.com/photos/4125659/pexels-photo-4125659.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/4125612/pexels-photo-4125612.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/4125638/pexels-photo-4125638.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/4125674/pexels-photo-4125674.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/1304471/pexels-photo-1304471.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/532003/pexels-photo-532003.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/3997387/pexels-photo-3997387.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/995734/pexels-photo-995734.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',
    'https://images.pexels.com/photos/2289386/pexels-photo-2289386.jpeg?auto=compress&cs=tinysrgb&w=520&h=680&fit=crop',

    'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1523465863761-5113e5d92b25?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1499720843949-d9e6f318dca0?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?auto=format&fit=crop&w=520&h=680&q=80',
    'https://images.unsplash.com/photo-1529397938791-2aba4681454d?auto=format&fit=crop&w=520&h=680&q=80'
];

const titles = [
    'Fine line ritual',
    'Blackwork detail',
    'Soft botanical',
    'Studio session',
    'Minimal symbol',
    'Tattoo machine',
    'Artist at work',
    'Dark floral',
    'Body art study',
    'Ink close-up',
    'Linework piece',
    'Private studio',
    'Ornamental fragment',
    'Delicate arm tattoo',
    'Dark ink process',
    'Handpoke mood',
    'Portrait detail',
    'Graphic tattoo',
    'Minimal body mark',
    'Flash sketch',
    'Soft shading',
    'Needle work',
    'Personal symbol',
    'Black ink story',
    'Skin texture',
    'Small tattoo',
    'Abstract mark',
    'Back piece',
    'Ink ritual',
    'Studio light'
];

const tags = ['Fine line', 'Blackwork', 'Botanical', 'Studio', 'Minimal', 'Process', 'Linework', 'Dark art', 'Ornamental', 'Details'];

export const portfolio = imageUrls.map((src, index) => ({
    id: index + 1,
    title: titles[index] || `Tattoo work ${index + 1}`,
    tag: tags[index % tags.length],
    src
}));
