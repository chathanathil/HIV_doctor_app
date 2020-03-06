import {
  LOADING_OPEN_PATIENT,
  OPEN_PATIENT,
  PATIENT_ERRORS,
  GET_RESULTS,
  LOADING_RESULTS,
  GET_MEDICINE,
  LOADING_MEDICINE,
  ADD_MEDICINE,
  ADD_RESULT,
  LOADING_ADD_MEDICINE,
  LOADING_ADD_RESULT
} from "../actions/types";
import isEmpty from "../validation/is-Empty";

const initialState = {
  patient: null,
  errors: null,
  loading: false,
  result: null,
  resultLoad: false,
  medicine: null,
  medicineLoad: null,
  addMedicineLoad: false,
  addResultLoad: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_OPEN_PATIENT:
      return {
        ...state,
        loading: true
      };
    case OPEN_PATIENT:
      return {
        ...state,
        patient: action.payload
      };
    case LOADING_RESULTS:
      return {
        ...state,
        resultLoad: true
      };
    case GET_RESULTS:
      return {
        ...state,
        result: action.payload,
        resultLoad: false
      };
    case ADD_RESULT:
      return {
        ...state,
        result: state.result.concat(action.payload),
        addResultLoad: false
      };
    case LOADING_ADD_RESULT:
      return {
        ...state,
        addResultLoad: true
      };
    case ADD_MEDICINE:
      return {
        ...state,
        medicine: state.medicine.concat(action.payload),
        addMedicineLoad: false
      };
    case LOADING_ADD_MEDICINE:
      return {
        ...state,
        addMedicineLoad: true
      };
    case PATIENT_ERRORS: {
      return {
        ...state,
        errors: action.payload
      };
    }
    case GET_MEDICINE:
      return {
        ...state,
        medicine: action.payload,
        medicineLoad: false
      };
    case LOADING_MEDICINE:
      return {
        ...state,
        medicineLoad: true
      };
    default:
      return state;
  }
}
