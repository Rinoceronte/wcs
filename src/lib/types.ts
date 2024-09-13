// src/lib/types.ts
export interface Address {
    street: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
}

export interface Studio {
    name: string;
    address: Address;
    website: string;
    phone?: string;
}
