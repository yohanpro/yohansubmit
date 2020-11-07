
import personData from "SyntheaDatas/person.json";
import deathData from 'SyntheaDatas/death.json';

// import PersonDataTable from 'components/DataTable';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import PersonPieChart from "components/PieChart";
dayjs.locale('ko');

const PersonDataTable = dynamic(() => import('components/DataTable'), { ssr: false });

const Main = props => {
  const { personMappedRow } = props;


  return (
    <div className="container">
      <PersonPieChart
        data={personMappedRow}
      />
      <PersonDataTable
        data={personMappedRow}
      />
    </div>
  );
};


export async function getStaticProps(context) {
  const personMappedRow = personData.person.map(({ person_id, gender_source_value, birth_datetime, race_source_value, ethnicity_source_value }) => {
    return {
      id: person_id,
      gender: gender_source_value === 'F' ? '여성' : '남성',
      birthDate: dayjs(birth_datetime).format('YYYY년 M월 D일'),
      race: race_source_value,
      age: dayjs().year() - dayjs(birth_datetime).year(),
      ethnicity: ethnicity_source_value,
      death: deathData.death.findIndex(data => data.person_id === person_id) !== -1 ? '사망' : '생존'
    };
  });
  return {
    props: { personMappedRow },
  };
}
export default Main;