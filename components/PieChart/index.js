import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';
import Chart from './Chart';
import { useMemo } from 'react';

const PersonPieChart = props => {

    const { data = [] } = props;


    const genderSort = useMemo(() => data.reduce((acc, cur) => {
        if (!acc[cur.gender]) acc[cur.gender] = 0;
        acc[cur.gender] += 1;
        return acc;
    }, {}));
    const raceSort = useMemo(() => data.reduce((acc, cur) => {
        if (!acc[cur.race]) acc[cur.race] = 0;
        acc[cur.race] += 1;
        return acc;
    }, {}));
    const ethnicitySort = useMemo(() => data.reduce((acc, cur) => {
        if (!acc[cur.ethnicity]) acc[cur.ethnicity] = 0;
        acc[cur.ethnicity] += 1;
        return acc;
    }, {}));

    return (
        <div className="pieChart-container">
            <Chart
                title="성별별 환자"
                sortedData={genderSort}
            />
            <Chart
                title="인종별 환자"
                sortedData={raceSort}
            />
            <Chart
                title="민족별 환자"
                sortedData={ethnicitySort}
            />
        </div>
    );
};

export default PersonPieChart;