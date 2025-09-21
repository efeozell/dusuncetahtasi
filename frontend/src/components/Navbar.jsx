import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto maxw-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            DüşünceTahtası
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>Yeni Not</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
