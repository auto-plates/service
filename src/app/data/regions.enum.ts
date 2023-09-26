import { IRegion } from '../interfaces/region.interface';

export const Regions: IRegion[] = [
  {
    code: 'B',
    title: 'Podlaskie',
    capital: 'Białystok',
    areas: [
      { code: 'BAU', title: 'Augustowski', capital: 'Augustów' },
      { code: 'BIA', title: 'Białostocki', capital: 'Białystok' },
      { code: 'BI', title: 'Białystok', capital: 'Miasto na prawach powiatu' },
      { code: 'BBI', title: 'Bielski', capital: 'Bielsk Podlaski' },
      { code: 'BGR', title: 'Grajewski', capital: 'Grajewo' },
      { code: 'BHA', title: 'Hajnowski', capital: 'Hajnówka' },
      { code: 'BKL', title: 'Kolneński', capital: 'Kolno' },
      { code: 'BL', title: 'Łomża', capital: 'Miasto na prawach powiatu' },
      { code: 'BLM', title: 'Łomżyński', capital: 'Łomża' },
      { code: 'BMN', title: 'Moniecki', capital: 'Mońki' },
      { code: 'BSE', title: 'Sejneński', capital: 'Sejny' },
      { code: 'BSI', title: 'Siemiatycki', capital: 'Siemiatycze' },
      { code: 'BSK', title: 'Sokólski', capital: 'Sokółka' },
      { code: 'BSU', title: 'Suwalski', capital: 'Suwałki' },
      { code: 'BS', title: 'Suwałki', capital: 'Miasto na prawach powiatu' },
      {
        code: 'BWM',
        title: 'Wysokomazowiecki',
        capital: 'Wysokie Mazowieckie',
      },
      { code: 'BZA', title: 'Zambrowski', capital: 'Zambrów' },
    ],
  },
  {
    code: 'C',
    title: 'Kujawsko-Pomorskie',
    capital: 'Bydgoszcz',
    areas: [
      { code: 'CAL', title: 'Aleksandrowski', capital: 'Aleksandrów Kujawski' },
      { code: 'CBR', title: 'Brodnicki', capital: 'Brodnica' },
      { code: 'CBY', title: 'Bydgoski', capital: 'Bydgoszcz' },
      { code: 'CB', title: 'Bydgoszcz', capital: 'Miasto na prawach powiatu' },
      { code: 'CCH', title: 'Chełmiński', capital: 'Chełmno' },
      { code: 'CGD', title: 'Golubsko-Dobrzyński', capital: 'Golub-Dobrzyń' },
      { code: 'CG', title: 'Grudziądz', capital: 'Miasto na prawach powiatu' },
      { code: 'CGR', title: 'Grudziądzki', capital: 'Grudziądz' },
      { code: 'CIN', title: 'Inowrocławski', capital: 'Inowrocław' },
      { code: 'CLI', title: 'Lipnowski', capital: 'Lipno' },
      { code: 'CMG', title: 'Mogileński', capital: 'Mogilno' },
      { code: 'CNA', title: 'Nakielski', capital: 'Nakło nad Notecią' },
      { code: 'CRA', title: 'Radziejowski', capital: 'Radziejów' },
      { code: 'CRY', title: 'Rypiński', capital: 'Rypin' },
      { code: 'CSE', title: 'Sępoleński', capital: 'Sępolno Krajeńskie' },
      { code: 'CSW', title: 'Świecki', capital: 'Świecie' },
      { code: 'CT', title: 'Toruń', capital: 'Miasto na prawach powiatu' },
      { code: 'CTR', title: 'Toruński', capital: 'Toruń' },
      { code: 'CTU', title: 'Tucholski', capital: 'Tuchola' },
      { code: 'CWA', title: 'Wąbrzeski', capital: 'Wąbrzeźno' },
      { code: 'CW', title: 'Włocławek', capital: 'Miasto na prawach powiatu' },
      { code: 'CWL', title: 'Włocławski', capital: 'Włocławek' },
      { code: 'CZN', title: 'Żniński', capital: 'Żnin' },
    ],
  },
  {
    code: 'D',
    title: 'Dolnośląskie',
    capital: 'Wrocław',
    areas: [
      { code: 'DBL', title: 'Bolesławiecki', capital: 'Bolesławiec' },
      { code: 'DDZ', title: 'Dzierżoniowski', capital: 'Dzierżoniów' },
      { code: 'DGL', title: 'Głogowski', capital: 'Głogów' },
      { code: 'DGR', title: 'Górowski', capital: 'Góra' },
      { code: 'DJA', title: 'Jaworski', capital: 'Jawor' },
      {
        code: 'DJ',
        title: 'Jelenia Góra',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'DKA', title: 'Kamiennogórski', capital: 'Kamienna Góra' },
      { code: 'DJE', title: 'Karkonoski', capital: 'Jelenia Góra' },
      { code: 'DKL', title: 'Kłodzki', capital: 'Kłodzko' },
      { code: 'DL', title: 'Legnica', capital: 'Miasto na prawach powiatu' },
      { code: 'DLE', title: 'Legnicki', capital: 'Legnica' },
      { code: 'DLB', title: 'Lubański', capital: 'Lubań' },
      { code: 'DLU', title: 'Lubiński', capital: 'Lubin' },
      { code: 'DLW', title: 'Lwówecki', capital: 'Lwówek Śląski' },
      { code: 'DMI', title: 'Milicki', capital: 'Milicz' },
      { code: 'DOL', title: 'Oleśnicki', capital: 'Oleśnica' },
      { code: 'DOA', title: 'Oławski', capital: 'Oława' },
      { code: 'DPL', title: 'Polkowicki', capital: 'Polkowice' },
      { code: 'DST', title: 'Strzeliński', capital: 'Strzelin' },
      { code: 'DSR', title: 'Średzki', capital: 'Środa Śląska' },
      { code: 'DSW', title: 'Świdnicki', capital: 'Świdnica' },
      { code: 'DTR', title: 'Trzebnicki', capital: 'Trzebnica' },
      { code: 'DB', title: 'Wałbrzych', capital: 'Miasto na prawach powiatu' },
      { code: 'DBA', title: 'Wałbrzyski', capital: 'Wałbrzych' },
      { code: 'DWL', title: 'Wołowski', capital: 'Wołów' },
      {
        code: 'DW, DX',
        title: 'Wrocław',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'DWR', title: 'Wrocławski', capital: 'Wrocław' },
      { code: 'DZA', title: 'Ząbkowicki', capital: 'Ząbkowice Śląskie' },
      { code: 'DZG', title: 'Zgorzelecki', capital: 'Zgorzelec' },
      { code: 'DZL', title: 'Złotoryjski', capital: 'Złotoryja' },
    ],
  },
  {
    code: 'E',
    title: 'Łódzkie',
    capital: 'Łódz',
    areas: [
      { code: 'EBE', title: 'Bełchatowski', capital: 'Bełchatów' },
      { code: 'EBR', title: 'Brzeziński', capital: 'Brzeziny' },
      { code: 'EKU', title: 'Kutnowski', capital: 'Kutno' },
      { code: 'ELA', title: 'Łaski', capital: 'Łask' },
      { code: 'ELE', title: 'Łęczycki', capital: 'Łęczyca' },
      { code: 'ELC', title: 'Łowicki', capital: 'Łowicz' },
      { code: 'ELW', title: 'Łódzki Wschodni', capital: 'Łódź' },
      { code: 'EL, ED', title: 'Łódź', capital: 'Miasto na prawach powiatu' },
      { code: 'EOP', title: 'Opoczyński', capital: 'Opoczno' },
      { code: 'EPA', title: 'Pabianicki', capital: 'Pabianice' },
      { code: 'EPJ', title: 'Pajęczański', capital: 'Pajęczno' },
      { code: 'EPI', title: 'Piotrkowski', capital: 'Piotrków Trybunalski' },
      {
        code: 'EP',
        title: 'Piotrków Trybunalski',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'EPD', title: 'Poddębicki', capital: 'Poddębice' },
      { code: 'ERA', title: 'Radomszczański', capital: 'Radomsko' },
      { code: 'ERW', title: 'Rawski', capital: 'Rawa Mazowiecka' },
      { code: 'ESI', title: 'Sieradzki', capital: 'Sieradz' },
      {
        code: 'ES',
        title: 'Skierniewice',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'ESK', title: 'Skierniewicki', capital: 'Skierniewice' },
      { code: 'ETM', title: 'Tomaszowski', capital: 'Tomaszów Mazowiecki' },
      { code: 'EWI', title: 'Wieluński', capital: 'Wieluń' },
      { code: 'EWE', title: 'Wieruszowski', capital: 'Wieruszów' },
      { code: 'EZD', title: 'Zduńskowolski', capital: 'Zduńska Wola' },
      { code: 'EZG', title: 'Zgierski', capital: 'Zgierz' },
    ],
  },
  {
    code: 'F',
    title: 'Lubuskie',
    capital: 'Zielona Góra',
    areas: [
      { code: 'FGW', title: 'Gorzowski', capital: 'Gorzów Wielkopolski' },
      {
        code: 'FG',
        title: 'Gorzów Wielkopolski',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'FKR', title: 'Krośnieński', capital: 'Krosno Odrzańskie' },
      { code: 'FMI', title: 'Międzyrzecki', capital: 'Międzyrzecz' },
      { code: 'FNW', title: 'Nowosolski', capital: 'Nowa Sól' },
      { code: 'FSL', title: 'Słubicki', capital: 'Słubice' },
      {
        code: 'FSD',
        title: 'Strzelecko-Drezdenecki',
        capital: 'Strzelce Krajeńskie',
      },
      { code: 'FSU', title: 'Sulęciński', capital: 'Sulęcin' },
      { code: 'FSW', title: 'Świebodziński', capital: 'Świebodzin' },
      { code: 'FWS', title: 'Wschowski', capital: 'Wschowa' },
      {
        code: 'FZ',
        title: 'Zielona Góra',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'FZI', title: 'Zielonogórski', capital: 'Zielona Góra' },
      { code: 'FZG', title: 'Żagański', capital: 'Żagań' },
      { code: 'FZA', title: 'Żarski', capital: 'Żary' },
    ],
  },
  {
    code: 'G',
    title: 'Pomorskie',
    capital: 'Gdańsk',
    areas: [
      { code: 'GBY', title: 'Bytowski', capital: 'Bytów' },
      { code: 'GCH', title: 'Chojnicki', capital: 'Chojnice' },
      { code: 'GCZ', title: 'Człuchowski', capital: 'Człuchów' },
      { code: 'GD', title: 'Gdańsk', capital: 'Miasto na prawach powiatu' },
      { code: 'GDA', title: 'Gdański', capital: 'Pruszcz Gdański' },
      { code: 'GA', title: 'Gdynia', capital: 'Miasto na prawach powiatu' },
      { code: 'GKA, GKY', title: 'Kartuski', capital: 'Kartuzy' },
      { code: 'GKS', title: 'Kościerski', capital: 'Kościerzyna' },
      { code: 'GKW', title: 'Kwidzyński', capital: 'Kwidzyn' },
      { code: 'GLE', title: 'Lęborski', capital: 'Lębork' },
      { code: 'GMB', title: 'Malborski', capital: 'Malbork' },
      { code: 'GND', title: 'Nowodworski', capital: 'Nowy Dwór Gdański' },
      { code: 'GPU', title: 'Pucki', capital: 'Puck' },
      { code: 'GS', title: 'Słupsk', capital: 'Miasto na prawach powiatu' },
      { code: 'GSL', title: 'Słupski', capital: 'Słupsk' },
      { code: 'GSP', title: 'Sopot', capital: 'Miasto na prawach powiatu' },
      { code: 'GST', title: 'Starogardzki', capital: 'Starogard Gdański' },
      { code: 'GSZ', title: 'Sztumski', capital: 'Sztum' },
      { code: 'GTC', title: 'Tczewski', capital: 'Tczew' },
      { code: 'GWE, GWO', title: 'Wejherowski', capital: 'Wejherowo' },
    ],
  },
  {
    code: 'K',
    title: 'Małopolskie',
    capital: 'Kraków',
    areas: [
      { code: 'KBC, KBA', title: 'Bocheński', capital: 'Bochnia' },
      { code: 'KBR', title: 'Brzeski', capital: 'Brzesko' },
      { code: 'KCH', title: 'Chrzanowski', capital: 'Chrzanów' },
      { code: 'KDA', title: 'Dąbrowski', capital: 'Dąbrowa Tarnowska' },
      { code: 'KGR', title: 'Gorlicki', capital: 'Gorlice' },
      { code: 'KRA, KRK', title: 'Krakowski', capital: 'Kraków' },
      { code: 'KR, KK', title: 'Kraków', capital: 'Miasto na prawach powiatu' },
      { code: 'KLI', title: 'Limanowski', capital: 'Limanowa' },
      { code: 'KMI', title: 'Miechowski', capital: 'Miechów' },
      { code: 'KMY', title: 'Myślenicki', capital: 'Myślenice' },
      { code: 'KNS', title: 'Nowosądecki', capital: 'Nowy Sącz' },
      { code: 'KNT', title: 'Nowotarski', capital: 'Nowy Targ' },
      { code: 'KN', title: 'Nowy Sącz', capital: 'Miasto na prawach powiatu' },
      { code: 'KOL', title: 'Olkuski', capital: 'Olkusz' },
      { code: 'KOS', title: 'Oświęcimski', capital: 'Oświęcim' },
      { code: 'KPR', title: 'Proszowicki', capital: 'Proszowice' },
      { code: 'KSU', title: 'Suski', capital: 'Sucha Beskidzka' },
      { code: 'KTA', title: 'Tarnowski', capital: 'Tarnów' },
      { code: 'KT', title: 'Tarnów', capital: 'Miasto na prawach powiatu' },
      { code: 'KTT', title: 'Tatrzański', capital: 'Zakopane' },
      { code: 'KWA', title: 'Wadowicki', capital: 'Wadowice' },
      { code: 'KWI', title: 'Wielicki', capital: 'Wieliczka' },
    ],
  },
  {
    code: 'L',
    title: 'Lubelskie',
    capital: 'Lublin',
    areas: [
      { code: 'LBI', title: 'Bialski', capital: 'Biała Podlaska' },
      {
        code: 'LB',
        title: 'Biała Podlaska',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'LBL', title: 'Biłgorajski', capital: 'Biłgoraj' },
      { code: 'LC', title: 'Chełm', capital: 'Miasto na prawach powiatu' },
      { code: 'LCH', title: 'Chełmski', capital: 'Chełm' },
      { code: 'LHR', title: 'Hrubieszowski', capital: 'Hrubieszów' },
      { code: 'LJA', title: 'Janowski', capital: 'Janów Lubelski' },
      { code: 'LKS', title: 'Krasnostawski', capital: 'Krasnystaw' },
      { code: 'LKR', title: 'Kraśnicki', capital: 'Kraśnik' },
      { code: 'LLB', title: 'Lubartowski', capital: 'Lubartów' },
      { code: 'LUB', title: 'Lubelski', capital: 'Lublin' },
      { code: 'LU', title: 'Lublin', capital: 'Miasto na prawach powiatu' },
      { code: 'LLE', title: 'Łęczyński', capital: 'Łęczna' },
      { code: 'LLU', title: 'Łukowski', capital: 'Łuków' },
      { code: 'LOP', title: 'Opolski', capital: 'Opole Lubelskie' },
      { code: 'LPA', title: 'Parczewski', capital: 'Parczew' },
      { code: 'LPU', title: 'Puławski', capital: 'Puławy' },
      { code: 'LRA', title: 'Radzyński', capital: 'Radzyń Podlaski' },
      { code: 'LRY', title: 'Rycki', capital: 'Ryki' },
      { code: 'LSW', title: 'Świdnicki', capital: 'Świdnik' },
      { code: 'LTM', title: 'Tomaszowski', capital: 'Tomaszów Lubelski' },
      { code: 'LWL', title: 'Włodawski', capital: 'Włodawa' },
      { code: 'LZA', title: 'Zamojski', capital: 'Zamość' },
      { code: 'LZ', title: 'Zamość', capital: 'Miasto na prawach powiatu' },
    ],
  },
  {
    code: 'N',
    title: 'Warmińsko-Mazurskie',
    capital: 'Olsztyn',
    areas: [
      { code: 'NBA', title: 'Bartoszycki', capital: 'Bartoszyce' },
      { code: 'NBR', title: 'Braniewski', capital: 'Braniewo' },
      { code: 'NDZ', title: 'Działdowski', capital: 'Działdowo' },
      { code: 'NE', title: 'Elbląg', capital: 'Miasto na prawach powiatu' },
      { code: 'NEB', title: 'Elbląski', capital: 'Elbląg' },
      { code: 'NEL', title: 'Ełcki', capital: 'Ełk' },
      { code: 'NGI', title: 'Giżycki', capital: 'Giżycko' },
      { code: 'NGO', title: 'Gołdapski', capital: 'Gołdap' },
      { code: 'NIL', title: 'Iławski', capital: 'Iława' },
      { code: 'NKE', title: 'Kętrzyński', capital: 'Kętrzyn' },
      { code: 'NLI', title: 'Lidzbarski', capital: 'Lidzbark Warmiński' },
      { code: 'NMR', title: 'Mrągowski', capital: 'Mrągowo' },
      { code: 'NNI', title: 'Nidzicki', capital: 'Nidzica' },
      { code: 'NNM', title: 'Nowomiejski', capital: 'Nowe Miasto Lubawskie' },
      { code: 'NOE', title: 'Olecki', capital: 'Olecko' },
      { code: 'NO', title: 'Olsztyn', capital: 'Miasto na prawach powiatu' },
      { code: 'NOL', title: 'Olsztyński', capital: 'Olsztyn' },
      { code: 'NOS', title: 'Ostródzki', capital: 'Ostróda' },
      { code: 'NPI', title: 'Piski', capital: 'Pisz' },
      { code: 'NSZ', title: 'Szczycieński', capital: 'Szczytno' },
      { code: 'NWE', title: 'Węgorzewski', capital: 'Węgorzewo' },
    ],
  },
  {
    code: 'O',
    title: 'Ôpolske',
    capital: 'Opole',
    areas: [
      { code: 'OB', title: 'Brzeski', capital: 'Brzeg' },
      { code: 'OGL', title: 'Głubczycki', capital: 'Głubczyce' },
      {
        code: 'OK',
        title: 'Kędzierzyńsko-Kozielski',
        capital: 'Kędzierzyn-Koźle',
      },
      { code: 'OKL', title: 'Kluczborski', capital: 'Kluczbork' },
      { code: 'OKR', title: 'Krapkowicki', capital: 'Krapkowice' },
      { code: 'ONA', title: 'Namysłowski', capital: 'Namysłów' },
      { code: 'ONY', title: 'Nyski', capital: 'Nysa' },
      { code: 'OOL', title: 'Oleski', capital: 'Olesno' },
      { code: 'OP', title: 'Opole', capital: 'Miasto na prawach powiatu' },
      { code: 'OPO', title: 'Opolski', capital: 'Opole' },
      { code: 'OPR', title: 'Prudnicki', capital: 'Prudnik' },
      { code: 'OST', title: 'Strzelecki', capital: 'Strzelce Opolskie' },
    ],
  },
  {
    code: 'P',
    title: 'Wielkopolskie',
    capital: 'Poznań',
    areas: [
      { code: 'PCH', title: 'Chodzieski', capital: 'Chodzież' },
      { code: 'PCT', title: 'Czarnkowsko-Trzcianecki', capital: 'Czarnków' },
      { code: 'PGN', title: 'Gnieźnieński', capital: 'Gniezno' },
      { code: 'PGS', title: 'Gostyński', capital: 'Gostyń' },
      { code: 'PGO', title: 'Grodziski', capital: 'Grodzisk Wielkopolski' },
      { code: 'PJA', title: 'Jarociński', capital: 'Jarocin' },
      { code: 'PKA', title: 'Kaliski', capital: 'Kalisz' },
      { code: 'PK, PA', title: 'Kalisz', capital: 'Miasto na prawach powiatu' },
      { code: 'PKE', title: 'Kępiński', capital: 'Kępno' },
      { code: 'PKL', title: 'Kolski', capital: 'Koło' },
      { code: 'PN, PKO', title: 'Konin', capital: 'Miasto na prawach powiatu' },
      { code: 'PKN', title: 'Koniński', capital: 'Konin' },
      { code: 'PKS', title: 'Kościański', capital: 'Kościan' },
      { code: 'PKR', title: 'Krotoszyński', capital: 'Krotoszyn' },
      { code: 'PLE', title: 'Leszczyński', capital: 'Leszno' },
      { code: 'PL', title: 'Leszno', capital: 'Miasto na prawach powiatu' },
      { code: 'PMI', title: 'Międzychodzki', capital: 'Międzychód' },
      { code: 'PNT', title: 'Nowotomyski', capital: 'Nowy Tomyśl' },
      { code: 'POB', title: 'Obornicki', capital: 'Oborniki' },
      { code: 'POS', title: 'Ostrowski', capital: 'Ostrów Wielkopolski' },
      { code: 'POT', title: 'Ostrzeszowski', capital: 'Ostrzeszów' },
      { code: 'PP', title: 'Pilski', capital: 'Piła' },
      { code: 'PPL', title: 'Pleszewski', capital: 'Pleszew' },
      { code: 'PO, PY', title: 'Poznań', capital: 'Miasto na prawach powiatu' },
      { code: 'PZ, POZ', title: 'Poznański', capital: 'Poznań' },
      { code: 'PRA', title: 'Rawicki', capital: 'Rawicz' },
      { code: 'PSL', title: 'Słupecki', capital: 'Słupca' },
      { code: 'PSZ', title: 'Szamotulski', capital: 'Szamotuły' },
      { code: 'PSR', title: 'Średzki', capital: 'Środa Wielkopolska' },
      { code: 'PSE', title: 'Śremski', capital: 'Śrem' },
      { code: 'PTU', title: 'Turecki', capital: 'Turek' },
      { code: 'PWA', title: 'Wągrowiecki', capital: 'Wągrowiec' },
      { code: 'PWL', title: 'Wolsztyński', capital: 'Wolsztyn' },
      { code: 'PWR', title: 'Wrzesiński', capital: 'Września' },
      { code: 'PZL', title: 'Złotowski', capital: 'Złotów' },
    ],
  },
  {
    code: 'R',
    title: 'Podkarpackie',
    capital: 'Rzeszów',
    areas: [
      { code: 'RBI', title: 'Bieszczadzki', capital: 'Ustrzyki Dolne' },
      { code: 'RBR', title: 'Brzozowski', capital: 'Brzozów' },
      { code: 'RDE', title: 'Dębicki', capital: 'Dębica' },
      { code: 'RJA', title: 'Jarosławski', capital: 'Jarosław' },
      { code: 'RJS', title: 'Jasielski', capital: 'Jasło' },
      { code: 'RKL', title: 'Kolbuszowski', capital: 'Kolbuszowa' },
      { code: 'RK', title: 'Krosno', capital: 'Miasto na prawach powiatu' },
      { code: 'RKR', title: 'Krośnieński', capital: 'Krosno' },
      { code: 'RLS', title: 'Leski', capital: 'Lesko' },
      { code: 'RLE', title: 'Leżajski', capital: 'Leżajsk' },
      { code: 'RLU', title: 'Lubaczowski', capital: 'Lubaczów' },
      { code: 'RLA', title: 'Łańcucki', capital: 'Łańcut' },
      { code: 'RMI', title: 'Mielecki', capital: 'Mielec' },
      { code: 'RNI', title: 'Niżański', capital: 'Nisko' },
      { code: 'RPR', title: 'Przemyski', capital: 'Przemyśl' },
      { code: 'RP', title: 'Przemyśl', capital: 'Miasto na prawach powiatu' },
      { code: 'RPZ', title: 'Przeworski', capital: 'Przeworsk' },
      { code: 'RRS', title: 'Ropczycko-Sędziszowski', capital: 'Ropczyce' },
      { code: 'RZE', title: 'Rzeszowski', capital: 'Rzeszów' },
      { code: 'RZ', title: 'Rzeszów', capital: 'Miasto na prawach powiatu' },
      { code: 'RSA', title: 'Sanocki', capital: 'Sanok' },
      { code: 'RST', title: 'Stalowowolski', capital: 'Stalowa Wola' },
      { code: 'RSR', title: 'Strzyżowski', capital: 'Strzyżów' },
      { code: 'RT', title: 'Tarnobrzeg', capital: 'Miasto na prawach powiatu' },
      { code: 'RTA', title: 'Tarnobrzeski', capital: 'Tarnobrzeg' },
    ],
  },
  {
    code: 'S',
    title: 'Śląskie',
    capital: 'Katowice',
    areas: [
      { code: 'SBE', title: 'Będziński', capital: 'Będzin' },
      { code: 'SBI', title: 'Bielski', capital: 'Bielsko-Biała' },
      {
        code: 'SB',
        title: 'Bielsko-Biała',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SBL', title: 'Bieruńsko-Lędziński', capital: 'Bieruń' },
      { code: 'SY', title: 'Bytom', capital: 'Miasto na prawach powiatu' },
      { code: 'SH', title: 'Chorzów', capital: 'Miasto na prawach powiatu' },
      { code: 'SCI, SCN', title: 'Cieszyński', capital: 'Cieszyn' },
      {
        code: 'SC',
        title: 'Częstochowa',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SCZ', title: 'Częstochowski', capital: 'Częstochowa' },
      {
        code: 'SD',
        title: 'Dąbrowa Górnicza',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SG', title: 'Gliwice', capital: 'Miasto na prawach powiatu' },
      { code: 'SGL', title: 'Gliwicki', capital: 'Gliwice' },
      {
        code: 'SJZ',
        title: 'Jastrzębie-Zdrój',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SJ', title: 'Jaworzno', capital: 'Miasto na prawach powiatu' },
      { code: 'SK', title: 'Katowice', capital: 'Miasto na prawach powiatu' },
      { code: 'SKL', title: 'Kłobucki', capital: 'Kłobuck' },
      { code: 'SLU', title: 'Lubliniecki', capital: 'Lubliniec' },
      { code: 'SMI', title: 'Mikołowski', capital: 'Mikołów' },
      { code: 'SM', title: 'Mysłowice', capital: 'Miasto na prawach powiatu' },
      { code: 'SMY', title: 'Myszkowski', capital: 'Myszków' },
      {
        code: 'SPI',
        title: 'Piekary Śląskie',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SPS', title: 'Pszczyński', capital: 'Pszczyna' },
      { code: 'SRC', title: 'Raciborski', capital: 'Racibórz' },
      {
        code: 'SRS, SL',
        title: 'Ruda Śląska',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SRB', title: 'Rybnicki', capital: 'Rybnik' },
      { code: 'SR', title: 'Rybnik', capital: 'Miasto na prawach powiatu' },
      {
        code: 'SI',
        title: 'Siemianowice Śląskie',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'SO', title: 'Sosnowiec', capital: 'Miasto na prawach powiatu' },
      {
        code: 'SW',
        title: 'Świętochłowice',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'STA', title: 'Tarnogórski', capital: 'Tarnowskie Góry' },
      { code: 'ST', title: 'Tychy', capital: 'Miasto na prawach powiatu' },
      { code: 'SWD, SWZ', title: 'Wodzisławski', capital: 'Wodzisław Śląski' },
      { code: 'SZ', title: 'Zabrze', capital: 'Miasto na prawach powiatu' },
      { code: 'SZA', title: 'Zawierciański', capital: 'Zawiercie' },
      { code: 'SZO', title: 'Żory', capital: 'Miasto na prawach powiatu' },
      { code: 'SZY', title: 'Żywiecki', capital: 'Żywiec' },
    ],
  },
  {
    code: 'T',
    title: 'Świętokrzyskie',
    capital: 'Kielce',
    areas: [
      { code: 'TBU', title: 'Buski', capital: 'Busko-Zdrój' },
      { code: 'TJE', title: 'Jędrzejowski', capital: 'Jędrzejów' },
      { code: 'TKA', title: 'Kazimierski', capital: 'Kazimierza Wielka' },
      { code: 'TK', title: 'Kielce', capital: 'Miasto na prawach powiatu' },
      { code: 'TKI', title: 'Kielecki', capital: 'Kielce' },
      { code: 'TKN', title: 'Konecki', capital: 'Końskie' },
      { code: 'TOP', title: 'Opatowski', capital: 'Opatów' },
      { code: 'TOS', title: 'Ostrowiecki', capital: 'Ostrowiec Świętokrzyski' },
      { code: 'TPI', title: 'Pińczowski', capital: 'Pińczów' },
      { code: 'TSA', title: 'Sandomierski', capital: 'Sandomierz' },
      { code: 'TSK', title: 'Skarżyski', capital: 'Skarżysko-Kamienna' },
      { code: 'TST', title: 'Starachowicki', capital: 'Starachowice' },
      { code: 'TSZ', title: 'Staszowski', capital: 'Staszów' },
      { code: 'TLW', title: 'Włoszczowski', capital: 'Włoszczowa' },
    ],
  },
  {
    code: 'W',
    title: 'Mazowieckie',
    capital: 'Warszawa',
    areas: [
      { code: 'WOT', title: 'Otwocki', capital: 'Otwock' },
      { code: 'WPI, WPA', title: 'Piaseczyński', capital: 'Piaseczno' },
      { code: 'WP', title: 'Płock', capital: 'Miasto na prawach powiatu' },
      { code: 'WPL', title: 'Płocki', capital: 'Płock' },
      { code: 'WPN', title: 'Płoński', capital: 'Płońsk' },
      { code: 'WPR, WPP, WPS', title: 'Pruszkowski', capital: 'Pruszków' },
      { code: 'WPZ', title: 'Przasnyski', capital: 'Przasnysz' },
      { code: 'WPY', title: 'Przysuski', capital: 'Przysucha' },
      { code: 'WPU', title: 'Pułtuski', capital: 'Pułtusk' },
      { code: 'WR', title: 'Radom', capital: 'Miasto na prawach powiatu' },
      { code: 'WRA', title: 'Radomski', capital: 'Radom' },
      { code: 'WS', title: 'Siedlce', capital: 'Miasto na prawach powiatu' },
      { code: 'WSI', title: 'Siedlecki', capital: 'Siedlce' },
      { code: 'WSE', title: 'Sierpecki', capital: 'Sierpc' },
      { code: 'WSC', title: 'Sochaczewski', capital: 'Sochaczew' },
      { code: 'WSK', title: 'Sokołowski', capital: 'Sokołów Podlaski' },
      { code: 'WSZ', title: 'Szydłowiecki', capital: 'Szydłowiec' },
      {
        code: 'WA, WD,WH, WN, WT, WU, WW, WX',
        title: 'Warszawa',
        capital: 'Miasto na prawach powiatu',
      },
      {
        code: 'WZ',
        title: 'Warszawski Zachodni',
        capital: 'Ożarów Mazowiecki',
      },
      { code: 'WWE', title: 'Węgrowski', capital: 'Węgrów' },
      { code: 'WWL, WV', title: 'Wołomiński', capital: 'Wołomin' },
      { code: 'WWY', title: 'Wyszkowski', capital: 'Wyszków' },
      { code: 'WZW', title: 'Zwoleński', capital: 'Zwoleń' },
      { code: 'WZU', title: 'Żuromiński', capital: 'Żuromin' },
      { code: 'WZY', title: 'Żyrardowski', capital: 'Żyrardów' },
    ],
  },
  {
    code: 'Z',
    title: 'Zachodniopomorskie',
    capital: 'Szczecin',
    areas: [
      { code: 'ZBI', title: 'Białogardzki', capital: 'Białogard' },
      { code: 'ZCH', title: 'Choszczeński', capital: 'Choszczno' },
      { code: 'ZDR', title: 'Drawski', capital: 'Drawsko Pomorskie' },
      { code: 'ZGL', title: 'Goleniowski', capital: 'Goleniów' },
      { code: 'ZGY', title: 'Gryficki', capital: 'Gryfice' },
      { code: 'ZGR', title: 'Gryfiński', capital: 'Gryfino' },
      { code: 'ZKA', title: 'Kamieński', capital: 'Kamień Pomorski' },
      { code: 'ZKL', title: 'Kołobrzeski', capital: 'Kołobrzeg' },
      { code: 'ZK', title: 'Koszalin', capital: 'Miasto na prawach powiatu' },
      { code: 'ZKO', title: 'Koszaliński', capital: 'Koszalin' },
      { code: 'ZLO', title: 'Łobeski', capital: 'Łobez' },
      { code: 'ZMY', title: 'Myśliborski', capital: 'Myślibórz' },
      { code: 'ZPL', title: 'Policki', capital: 'Police' },
      { code: 'ZPY', title: 'Pyrzycki', capital: 'Pyrzyce' },
      { code: 'ZSL', title: 'Sławieński', capital: 'Sławno' },
      { code: 'ZST', title: 'Stargardzki', capital: 'Stargard' },
      {
        code: 'ZS, ZZ',
        title: 'Szczecin',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'ZSZ', title: 'Szczecinecki', capital: 'Szczecinek' },
      { code: 'ZSD', title: 'Świdwiński', capital: 'Świdwin' },
      {
        code: 'ZSW',
        title: 'Świnoujście',
        capital: 'Miasto na prawach powiatu',
      },
      { code: 'ZWA', title: 'Wałecki', capital: 'Wałcz' },
    ],
  },
];
