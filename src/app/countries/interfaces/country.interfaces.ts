export enum Region {
    Africa = 'Africa',
    Americas = 'Americas',
    Asia = 'Asia',
    Europe = 'Europe',
    Oceania = 'Oceania'
}

export interface Country {
    name:         Name;
    cca3:         string;
    status:       string;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: Translations;
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        Gini;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  string;
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Gini {
    "2018"?: number;
    "2017"?: number;
    "2019"?: number;
    "2016"?: number;
    "2011"?: number;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    nno?: string;
    nob?: string;
    smi?: string;
    ell?: string;
    swe?: string;
    fra?: string;
    gsw?: string;
    ita?: string;
    roh?: string;
    hrv?: string;
    isl?: string;
    deu?: string;
    ltz?: string;
    hun?: string;
    nld?: string;
    lit?: string;
    slk?: string;
    ron?: string;
    eng?: string;
    nrf?: string;
    bel?: string;
    rus?: string;
    lav?: string;
    cat?: string;
    dan?: string;
    mkd?: string;
    mlt?: string;
    ces?: string;
    nfr?: string;
    sqi?: string;
    srp?: string;
    nor?: string;
    cnr?: string;
    fao?: string;
    ukr?: string;
    glv?: string;
    est?: string;
    bul?: string;
    pol?: string;
    fin?: string;
    lat?: string;
    de?:  string;
    tur?: string;
    por?: string;
    bos?: string;
    spa?: string;
    eus?: string;
    glc?: string;
    slv?: string;
    gle?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    nno?: Ara;
    nob?: Ara;
    smi?: Ara;
    ell?: Ara;
    swe?: Ara;
    fra?: Ara;
    gsw?: Ara;
    ita?: Ara;
    roh?: Ara;
    hrv?: Ara;
    isl?: Ara;
    deu?: Ara;
    ltz?: Ara;
    hun?: Ara;
    nld?: Ara;
    lit?: Ara;
    slk?: Ara;
    ron?: Ara;
    eng?: Ara;
    nrf?: Ara;
    bel?: Ara;
    rus?: Ara;
    lav?: Ara;
    cat?: Ara;
    dan?: Ara;
    mkd?: Ara;
    mlt?: Ara;
    ces?: Ara;
    nfr?: Ara;
    sqi?: Ara;
    srp?: Ara;
    nor?: Ara;
    cnr?: Ara;
    fao?: Ara;
    ukr?: Ara;
    glv?: Ara;
    est?: Ara;
    bul?: Ara;
    pol?: Ara;
    fin?: Ara;
    lat?: Ara;
    bar?: Ara;
    tur?: Ara;
    por?: Ara;
    bos?: Ara;
    spa?: Ara;
    slv?: Ara;
    gle?: Ara;
}

export interface Ara {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export interface Translations {
    ara:  Ara;
    bre:  Ara;
    ces:  Ara;
    cym:  Ara;
    deu:  Ara;
    est:  Ara;
    fin:  Ara;
    fra:  Ara;
    hrv:  Ara;
    hun:  Ara;
    ita:  Ara;
    jpn?: Ara;
    kor:  Ara;
    nld:  Ara;
    per:  Ara;
    pol:  Ara;
    por:  Ara;
    rus:  Ara;
    slk:  Ara;
    spa:  Ara;
    srp:  Ara;
    swe:  Ara;
    tur:  Ara;
    urd:  Ara;
    zho:  Ara;
}
