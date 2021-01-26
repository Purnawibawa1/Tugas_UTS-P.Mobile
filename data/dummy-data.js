import Category from '../models/Categori'
import Basket from '../models/Basket';
import Specification from '../models/Specification';

export const CATEGORIES = [
    new Category('1', 'Headphone In-Ear', 'https://www.sony.co.id/image/a37cead17eebfe3c8e305bb3170123cb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320'),
    new Category('2', 'Wireless Earbud', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6308/6308349_sd.jpg'),
    new Category('3', 'Headphone On-Ear', 'https://cdn.monotaro.id/media/catalog/product/cache/6/image/b5fa40980320eb406ba395dece54e4a8/P/1/P102146187-1.jpg'),
    new Category('4', 'Headphone Over-the-Ear', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHA22?wid=2336&hei=3189&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1590177807000'),
    new Category('5', 'Headset Mono', 'https://www.onedirect.co.uk/media/catalog/product/l/o/logitech-usb-headset-mono-h650e-right-simple.jpg'),
    new Category('6', 'MP3/MP4', 'https://ae01.alicdn.com/kf/HTB1rpuMLXXXXXayXXXXq6xXFXXXR/SMILYOU-New-Mini-MP3-MP4-Music-Player-4GB-8GB-Memory-1-8-inch-LCD-Screen-FM.jpg'),
    new Category('7', 'Radio & CD Player', 'https://i01.hsncdn.com/is/image/HomeShoppingNetwork/prodfull/studebaker-80s-retro-street-bluetooth-boombox-wfm-radio-d-20200701141456527~714385_001.jpg'),
    new Category('8', 'Perekam Suara', 'https://www.jakartanotebook.com/images/products/42/63/30232/2/perekam-suara-digital-voice-recorder-8gb-r29-black-1.jpg'),
    new Category('9', 'Smart Speaker', 'https://i.gadgets360cdn.com/products/smart-home/large/1551964770_832_google_home-smart-speaker.jpg'),
    new Category('10', 'Speaker Nirkabel dan Bluetooth', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-7218027/jbl_speaker_wireless_bluetooth_jbl_go_2_full04_rtxk9n51.jpg')
  ];

export const BASKET = [
  new Basket('1','6'),
  new Basket('2','7'),
  new Basket('3','10'),
]

export const SPECIFICATION =[
  new Specification(
    '1',
    '3',
    'simple',
    'https://cdn.monotaro.id/media/catalog/product/cache/6/image/b5fa40980320eb406ba395dece54e4a8/P/1/P102146187-1.jpg',
    [
      'Nama Produk  : AKG Y50 On-Ear Headphone with In-Line One-Button Universal Remote/Microphone',
      'Merk : AKG',
      'Fungsi : On-Ear',
      'Jenis Sambungan  : Wired',
      'Garansi  : 1 Tahun',
      'Stok : 50'
    ],
    [
      'Tahan Lama , desain ringan , nyaman',
      'Signature suara AKG berkualitas dengan kinerja bass diperkaya',
      'On-ear headphone dengan desain ear-cup tertutup untuk mengurangi kebisingan ambien',
      'Dilepas, 1.2m. Kabel dengan inline, satu-tombol remote / mic untuk lengkap aksesibilitas hands-free',
      '3D-Axis mekanisme lipat dan kantong untuk penyimpanan mudah dan transportasi yang aman'
    ],
  ),
]

