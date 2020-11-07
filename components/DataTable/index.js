import DataTable from 'react-data-table-component';
import PersonDetail from './PersonDetail';
import Loader from 'react-loader-spinner';

import { useEffect, useState } from 'react';

const CustomLoader = () => (
    <div style={{ padding: '24px' }}>
        <Loader type="TailSpin" color="#2BAD60" height="150" width="150" className="loader" />
    </div>
);

const PersonDataTable = props => {

    const { data } = props;

    const [isLoading, setLoading] = useState(true);
    const [rows, setRows] = React.useState(data);

    const columns = [
        { selector: 'id', name: '환자ID' },
        { selector: 'gender', name: '성별', sortable: true, maxWidth: '30px', grow: 0 },
        { selector: 'birthDate', name: '생년월일', minWidth: "150px" },
        { selector: 'age', name: '나이', sortable: true, },
        { selector: 'race', name: '인종', sortable: true, },
        { selector: 'ethnicity', name: '민족', sortable: true, },
        { selector: 'death', name: '사망여부', sortable: true, },
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="DataTable-container">
            {/* {isLoading && <Loader type="TailSpin" color="#2BAD60" height="150" width="150" className="loader" />} */}
            <DataTable
                title="환자 Table Component"
                columns={columns}
                data={rows}
                pagination
                expandableRows
                progressPending={isLoading}
                progressComponent={<CustomLoader />}
                highlightOnHover={true}
                expandOnRowClicked={true}
                expandableRowsComponent={<PersonDetail />}
            />
        </div>

    );
};

export default PersonDataTable;