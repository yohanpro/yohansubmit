import { getConditionData, getAllVisitCount } from 'api/personDataTable';
import { useMemo } from 'react';


const PersonDetail = ({ data }) => {

    const visitCount = useMemo(() => getAllVisitCount(data.id), []);
    const conditionDetail = useMemo(() => getConditionData(data.id), []);

    return (
        <div className="personDetail-container">
            <div ><label> 전체 방문 수 :</label>{visitCount}</div>
            <div ><label> 진단 정보:</label>{conditionDetail}</div>
        </div>
    );
};

export default PersonDetail;