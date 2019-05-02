declare module "modifier" {
    import { BasicModel } from "basic_model";

    interface Modifier extends BasicModel {
    }

    interface ModifierFeature extends BasicModel {
        modifierMap: { [key: string]: Modifier };

        setModifier(modifier: Modifier): void;
        removeModifier(modifier: Modifier): void;
        getModifiers(): { [key: string]: Modifier };
    }

}