export interface Hero {
    id: number;
    name: string;
    save(): Promise<boolean>;
}

