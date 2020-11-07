import DataTable from 'react-data-table-component';
import PersonDetail from './PersonDetail';

const PersonDataTable = props => {

    const { data } = props;
    //전체 방문수 카운팅, 진단정보 가져오기
    // async인 이유: 실제 작동하는 웹상에서는 비동기로 받아올 것이므로 

    const columns = [
        { selector: 'id', name: '환자ID' },
        { selector: 'gender', name: '성별', sortable: true, maxWidth: '30px', grow: 0 },
        { selector: 'birthDate', name: '생년월일', minWidth: "150px" },
        { selector: 'age', name: '나이', sortable: true, },
        { selector: 'race', name: '인종', sortable: true, },
        { selector: 'ethnicity', name: '민족', sortable: true, },
        { selector: 'death', name: '사망여부', sortable: true, },
    ];


    return (
        <div className="DataTable-container">
            <DataTable
                title="환자 Table Component"
                columns={columns}
                data={data}
                pagination
                expandableRows
                expandableRowsComponent={<PersonDetail />}

            />
        </div>

    );
};

export default PersonDataTable;