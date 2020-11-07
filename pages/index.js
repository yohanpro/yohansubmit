
import personData from "SyntheaDatas/person.json";
// import personData from "SyntheaDatas/person-small.json";
import deathData from 'SyntheaDatas/death.json';
// import conditionData from 'SyntheaDatas/condition-small.json';
import conditionData from 'SyntheaDatas/condition_occurrence.json';
import visitData from 'SyntheaDatas/visit-small.json';
// import visitData from 'SyntheaDatas/visit_occurrence.json';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');



const Main = props => {
  const { personMappedRow } = props;

  const [selectedRow, setSelection] = useState();

  //전체 방문수 카운팅, 진단정보 가져오기
  // async인 이유: 실제 작동하는 웹상에서는 비동기로 받아올 것이므로 
  async function getAllVisitCount(person_id) {
    const visitCountresult = visitData.visit_occurrence.filter(el => el.person_id === person_id);
    return visitCountresult.length;
  }

  async function getConditionData(person_id) {
    const conditionfindOne = conditionData.condition_occurrence.find(condition => condition.person_id === person_id);

    return conditionfindOne.condition_concept_id;
  }


  const rows = personMappedRow;

  const columns = [
    { field: 'id', headerName: '환자ID', width: 100 },
    { field: 'gender', headerName: '성별', width: 100 },
    { field: 'birthDate', headerName: '생년월일', width: 150 },
    { field: 'age', headerName: '나이', width: 100 },
    { field: 'race', headerName: '인종', width: 100 },
    { field: 'ethnicity', headerName: '민족', width: 150 },
    { field: 'death', headerName: '사망여부', width: 100 },
  ];
  return (
    <div className="container">
      <div className="DataTable-container">
        <DataGrid
          rows={rows}
          columns={columns}
          onSelectionChange={(newSelection) => {
            setSelection(newSelection.rows);
          }} />
      </div>

    </div>
  );
};


export async function getStaticProps(context) {
  const personMappedRow = personData.person.map(({ person_id, gender_source_value, birth_datetime, race_source_value, ethnicity_source_value }) => {
    return {
      id: person_id,
      gender: gender_source_value,
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