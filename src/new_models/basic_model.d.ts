declare module "basic_model" {
    interface BasicModel{
        name: string;
        id: string;
        idInt: number;
    
        setName(name: string): void;
        getName(): string;
        getId(): string;
        getIdInt(): number;
    }

    interface ModelOption {
        name?: string;
        id?: string;
    }
}