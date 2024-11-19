export interface Location {
    locationId: number;
    locationName: string;
    locationAddres: string;
    locationLat: number[];
    manager?: Manager;
    region?: any;
    empleoyees?: Empleoyees[];
}
export interface Empleoyees {
    employeeId: string;
    Empleoyename: string
    EmpleoyelastName: string
    EmpleoyePhoneNumber: string
    Empleoyeemail:string
    EmpleoyephotoUrl: string;
    location?: Location;
    user?: any;
}

export interface Manager {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail:string;
    managerPhoneNumber: string;
    location: Location;
    user : any;
}
export interface Product{
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Providers;
}
export interface Providers {
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products: Product[];
}

