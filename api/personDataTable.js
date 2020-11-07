// import conditionData from 'SyntheaDatas/condition-small.json';
import conditionData from 'SyntheaDatas/condition_occurrence.json';
import visitData from 'SyntheaDatas/visit_occurrence.json';

export function getAllVisitCount(person_id) {
    const visitCountresult = visitData.visit_occurrence
        .filter(el => el.person_id === person_id);
    return visitCountresult.length;
}

export function getConditionData(person_id) {
    const conditionfindOne = conditionData.condition_occurrence
        .find(condition => condition.person_id === person_id);
    return conditionfindOne.condition_concept_id;
}