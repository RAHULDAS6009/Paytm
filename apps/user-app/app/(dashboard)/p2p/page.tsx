import { P2pForm, RecentP2p } from "../../../components";

export function page(): JSX.Element {
  return (
    <div className="flex gap-5 w-full h-full ">
      <div className="w-1/2 h-full">
        <P2pForm />
      </div>
      <div className="w-1/2 h-full">
        <RecentP2p />
      </div>
    </div>
  );
}

export default page;
