
import personData from "SyntheaDatas/person.json";
// import personData from "SyntheaDatas/person-small.json";
import deathData from 'SyntheaDatas/death.json';

import { useState } from 'react';
import PersonDataTable from 'components/DataTable';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');



const Main = props => {
  const { personMappedRow } = props;



  return (
    <div className="container">
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