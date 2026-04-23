import { useParams } from "react-router-dom";
import { GroupSports } from "../../components/modules/ExchangeSports/GroupSports";
import { LeftSidebar } from "../../components/shared/Sidebar/LeftSidebar";
import { RightSidebar } from "../../components/shared/Sidebar/RightSidebar";
import HorseGreyhound from "../../components/modules/ExchangeSports/HorseGreyhound";

const ExchangeSports = () => {
  const { eventTypeId } = useParams();
  return (
    <div className="flex-1 flex white bg-gray1">
      <LeftSidebar />
      {eventTypeId != 7 && eventTypeId != 4339 ? (
        <GroupSports />
      ) : (
        <HorseGreyhound />
      )}

      <RightSidebar />
    </div>
  );
};

export default ExchangeSports;
