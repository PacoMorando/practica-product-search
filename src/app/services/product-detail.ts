export interface ProductDetail {
    id: string;
    site_id: string;
    title: string;
    seller_id: number;
    category_id: string;
    official_store_id: number;
    price: number;
    base_price: number;
    original_price: number;
    currency_id: string;
    initial_quantity: number;
    sale_terms: any[];
    buying_mode: string;
    listing_type_id: string;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    pictures: Pictures[];
    video_id: null;
    descriptions: any[];
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: any[];
    shipping: Location;
    international_delivery_mode: string;
    seller_address: Location;
    seller_contact: null;
    location: Location;
    coverage_areas: any[];
    attributes: any[];
    listing_source: string;
    variations: any[];
    status: string;
    sub_status: any[];
    tags: any[];
    warranty: string;
    catalog_product_id: string;
    domain_id: string;
    parent_item_id: null;
    deal_ids: any[];
    automatic_relist: boolean;
    date_created: Date;
    last_updated: Date;
    health: null;
    catalog_listing: boolean;
}

export interface ProductDescription {
    plain_text: string;
    last_updated: Date;
    date_created: Date;
}

export interface Pictures {
    id: string;
    url: string;
    size: string;
    max_size: string;
}