// assets
import Beds from "../../assets/icon_beds";
import Refrigerator from "../../assets/icon_refrigerator";
import Furniture from "../../assets/icon_furniture";
import Oven from "../../assets/icon_oven";
import Sofa from "../../assets/icon_sofa";
import TV from "../../assets/icon_tv";
import WasherDryer from "../../assets/icon_washer_dryer";
import Dining from "../../assets/icon_dining";
import Desk from "../../assets/icon_desk";
import Wardrobe from "../../assets/icon_wardrobe";
// components
import FurnitureItem from "../../components/FurnitureItem";

// ----------------------------------------------------------------------

const FURNITURE = [
  { icon: <Beds />, name: "Beds", value: 1.2 },
  { icon: <Refrigerator />, name: "Refrigerator", value: 1 },
  { icon: <Furniture />, name: "Furniture", value: 0.5 },
  { icon: <Oven />, name: "Oven", value: 0.6 },
  { icon: <Sofa />, name: "Sofa", value: 1.5 },
  { icon: <TV />, name: "TV", value: 0.25 },
  { icon: <WasherDryer />, name: "Washer-dryer", value: 1.2 },
  { icon: <Dining />, name: "Dining", value: 2 },
  { icon: <Desk />, name: "Desk", value: 0.75 },
  { icon: <Wardrobe />, name: "Wardrobe", value: 3.2 },
];

// ----------------------------------------------------------------------

const StorageForm = () => {
  return (
    <form className="w-full">
      <section
        id="furniture"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-8 lg:gap-10"
      >
        {FURNITURE.map((furniture) => (
          <FurnitureItem
            key={furniture.name}
            item={furniture.icon}
            name={furniture.name}
          />
        ))}
      </section>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between my-20 md:my-16 lg:my-20">
        <button
          type="button"
          className="btn-form-calculator border-2 border-primary hover:bg-primary"
        >
          Clear
        </button>
        <button
          type="button"
          className="btn-form-calculator bg-primary hover:bg-white hover:border-2 hover:border-primary"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default StorageForm;
