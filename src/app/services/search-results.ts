export interface SearchResults {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: Paging;
    results: Result[];
    sort: Sort;
}

export interface Result {
    id: string;
    title: string;
    address: Address;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: null;
    sale_price: null;
    sold_quantity: number;
    available_quantity: number;
    official_store_id: number;
    official_store_name: string;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    tags: string[];
    free_shipping: boolean;
    stop_time: Date;
    inventory_id: null;
}

export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface Sort {
    id: string;
    name: string;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}