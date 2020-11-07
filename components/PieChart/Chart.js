import Highcharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official';

const Chart = props => {

    const { title, sortedData } = props;

    //총량 구하기
    const total = Object.values(sortedData).reduce((a, b) => a + b);
    const computedData = [];

    // 원 안에 들어갈 파이 백분율 계산
    for (const [key, value] of Object.entries(sortedData)) {
        computedData.push({
            name: key,
            y: Number((value / total).toFixed(3)),
            x: value
        });
    }
    const options = {
        chart: {
            type: "pie",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: title,
            margin: 5
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> {point.x}명'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                size: 150,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: title,
            colorByPoint: true,
            data: computedData,
            value: computedData.value
        }]
    };
    return (
        <PieChart
            highcharts={Highcharts}
            options={options} />
    );
};

export default Chart;
